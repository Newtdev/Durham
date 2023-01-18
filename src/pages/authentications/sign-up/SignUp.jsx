import { Button, ModalOverlay, } from "../../../ui";
import AuthComp, { AuthHeader, AuthSuccessModal, CheckBox, ImageSideContainer, InputContainer } from "../component";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignUpSchema } from "../../../yup";
import { useActivateProjectManagerMutation, useFetchProjectManagerQuery } from "../../../features/services/api";
import {toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const SignUp = () => {
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()


    const { data,error } = useFetchProjectManagerQuery(location?.pathname?.split('/')[3]);

    useEffect(() => {
        setUserInfo(data?.data);
        toast.error(error?.data?.message, { position: toast.POSITION.TOP_CENTER });

    }, [error,data]);
    
    
    const [activateProjectManager, { isLoading }] = useActivateProjectManagerMutation();

    

    const HandleRequest = async (value) => {
        const values = { ...value, verification_token:location?.pathname?.split('/')[3], phone:userInfo?.phone};

        try {
            const response = await activateProjectManager({ ...values });
                if (response?.error) {
                    
                    toast.error(response?.error?.message, { position: toast.POSITION.TOP_CENTER });
                    setShowSuccess(false)
                //   const data =  DurhamsApi.fetchToken(location?.pathname?.split('/')[3])
                } else if (response?.data) {
                    setShowSuccess(true); 
                    // onSuccess show the modal and ask the manager to login
                    

            }
        } catch (error) {
            console.log(error)
        }
    }

    const { values, errors, touched, handleSubmit, handleChange,  setValues } = useFormik({
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
            touched: touched.password,
            type: 'password',


        },
        password_confirmation: {
            name: 'Confirm Password',
            id: 'password_confirmation',
            value:values.password_confirmation,
            placeholder: 'Enter your password address',
            type: 'password',
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
        name: 'Password Created Successfully',
		content:
            "Log in with Your Email and Password",
        close: () => navigate('/')
	};

    return <section>
        {/* FULL PAGE LOADER */}
        <article className="mx-10 px-4 mx-auto h-screen w-screen flex">
           
            <AuthComp>
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
                            <p className='text-base text-gray-800 font-light'>Already have an account? <Link to='/' className=' underline  text-[#3B6979] font-bold'>Log in</Link>
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