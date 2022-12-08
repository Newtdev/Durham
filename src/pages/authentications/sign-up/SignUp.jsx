import { Button, ModalOverlay, } from "../../../ui";
import AuthComp, { AuthHeader, AuthSuccessModal, CheckBox, ImageSideContainer, InputContainer } from "../component";
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import { SignUpSchema } from "../../../yup";
import { DurhamsApi, useActivateProjectManagerMutation, useFetchProjectManagerQuery, useResendTokenQuery } from "../../../features/services/api";
import { collapseToast, toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUserData } from "./signUpSlice";

const SignUp = () => {
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    // const Dispatch = useDispatch();
    // const userDetails = useSelector(selectUserData);
    console.log(userInfo)
    // console.log(userDetails);


    const { data,error } = useFetchProjectManagerQuery(location?.pathname?.split('/')[3]);

    useEffect(() => {
        // console.log(data.data.first_name)
        setUserInfo(data?.data);
        console.log(error);
        toast.error(error?.data?.message, { position: toast.POSITION.TOP_CENTER });

        // Dispatch({ type: 'project-manager', data });       
    }, [error,data]);
    
    console.log(useResendTokenQuery(location?.pathname?.split('/')[3]));
    
    const [activateProjectManager, { isLoading }] = useActivateProjectManagerMutation();

    

    const HandleRequest = async (value) => {
        const values = { ...value, verification_token:location?.pathname?.split('/')[3], phone:userInfo?.phone};

        try {
            const response = await activateProjectManager({ ...values });
                if (response?.error) {
                    
                    toast.error(response?.error?.message, { position: toast.POSITION.TOP_CENTER });
                    setShowSuccess(false)
                  const data =  DurhamsApi.fetchToken(location?.pathname?.split('/')[3])
                    console.log(data)
                } else if (response?.data) {
                    setShowSuccess(true); 
                    // onSuccess show the modal and ask the manager to login
                    

            }
        } catch (error) {
            console.log(error)
        }
    }

    const { values, errors, touched, handleSubmit, handleChange, handleReset, setFieldValue, setValues } = useFormik({
        initialValues: {
            first_name:'' ,
            last_name: '',
            email:'',
            password: '',
            password_confirmation: '',
            check: false
        }, 
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            
            HandleRequest(values);
        
        },

    });
    
    useEffect(() => {
        
        setValues({ first_name: userInfo?.first_name, last_name: userInfo?.last_name, email: userInfo?.email, });
        
    },[setValues, userInfo])
    const props = {
        first_name: {
            name: 'First Name',
            id: 'first_name',
            placeholder: 'John',
            value:values.first_name,
            onChange: handleChange,
            error: errors.first_name,
            touched:touched.first_name
        },
        last_name: {
            name: 'Last Name',
            id: 'last_name',
            placeholder: 'Doe',
            value:values.last_name,
            onChange: handleChange,
            error: errors.last_name,
            touched:touched.last_name


        },
        email: {
            name: 'Email',
            id: 'email',
            placeholder: 'Enter your email address',
            value:values.email,
            onChange: handleChange,
            error: errors.email,
            touched:touched.email


        },
        password: {
            name: 'Password',
            id: 'password',
            placeholder: 'Enter your password address',
            value:values.password,
            onChange: handleChange,
            error: errors.password,
            touched:touched.password


        },
        password_confirmation: {
            name: 'Confirm Password',
            id: 'password_confirmation',
            value:values.password_confirmation,
            placeholder: 'Enter your password address',
            onChange: handleChange,
            error: errors.password_confirmation,
            touched:touched.password_confirmation


        },
        check: {
                name: 'By joining I agree to receive emails from Durham Public School System',
                id: 'check',
                value:values.check,
                onChange: handleChange,
                error: errors.check,
                touched:touched.check
        }
    };

    const handleClose = () => {
        setShowSuccess(false)
        
    }
    const successProps = {
        name: 'Email Confirmation',
		content:
			"Follow the link in the email to confirm this is your email address. If you did not receive the email you can resend the email.",
        email: values.email,
        
	};

    return <section>
        {/* FULL PAGE LOADER */}
        <article className="mx-10 px-4 mx-auto h-screen w-screen flex">
           
            <AuthComp>
                {console.log(values)}
                <div className='mt-8'>
                    <div className='h-16'>
                      
                        <AuthHeader name="Create Account" />
                    </div>
                    <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
                        <InputContainer {...props.first_name} />

                        <InputContainer {...props.last_name} />
                    
                        <InputContainer {...props.email} />
                    
                        <InputContainer {...props.password} />
                    
                        <InputContainer {...props.password_confirmation} />
                    
                        <CheckBox {...props.check} />
                        <div className='mt-8 mb-4'>

                            <Button name='SIGN UP' loading={isLoading} disablebtn={!props.check.value} />
                        </div>
                        <div>
                            <p className='text-base text-gray-800 font-light'>Don't have an account? <Link to='/' className=' underline  text-[#3B6979] font-bold'>Log in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </AuthComp>
            <ImageSideContainer />
        </article>
        {showSuccess && <ModalOverlay show={showSuccess} close={handleClose}>
            <AuthSuccessModal {...successProps} />
        </ModalOverlay>
        }
    </section>
};


export default SignUp;