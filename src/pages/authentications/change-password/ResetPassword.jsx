import { Button } from "../../../ui";
import AuthComp, { AuthHeader, ImageSideContainer, InputContainer } from "../component";
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../../../yup";
import { useResetPasswordMutation } from "../../../features/services/api";
import { toast } from "react-toastify";
const ResetPassword = () => {
    const location = useLocation()
    const email = location.pathname.split('/')[2]
    const id = location.pathname.split('/')[3]

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const HandleRequest = async (value) => {
		try {
			const response = await resetPassword({email:email, token:id, ...value });
			if (response?.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
                });
              
            } else {
                toast.success(`${response?.data?.message}! Login with your new password`, {
					position: toast.POSITION.TOP_CENTER,
                });
                
			}
		} catch (error) {
			console.log(error);
		}
    };
    
    const { values, handleChange, touched, errors, handleSubmit, } = useFormik({
        initialValues: {
            password: '',
            password_confirmation: '',
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: (values) => {
            HandleRequest(values)
        }
    });

    const props = {
        password: {
            name: 'Password',
            id: 'password',
            placeholder: 'Enter your password address',
            value: values.password,
            onChange: handleChange,
            error: errors.password,
            touched: touched.password,
            type: 'password'


        },
        password_confirmation: {
            name: 'Confirm Password',
            id: 'password_confirmation',
            value: values.password_confirmation,
            placeholder: 'Enter your password address',
            onChange: handleChange,
            error: errors.password_confirmation,
            touched: touched.password_confirmation,
            type: 'password'


        }
    }
	return <section>
    <article className="mx-10 px-4 mx-auto h-screen w-screen flex">
        <AuthComp>
            <div className='mt-24'>
                <div className='h-16 '>
                    <AuthHeader name="Change Password"/>
                </div>
                <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
                    <InputContainer {...props.password} />
                    <InputContainer {...props.password_confirmation} />
                    <div className='mt-6 mb-4'>

                    <Button name='RESET PASSWORD' loading={isLoading} />
                    </div>
                <div>
                    <p className='text-base text-gray-800 font-light'>already have an account? <Link className=' underline font-extrabold  text-[#3B6979]' to='/'>Log in</Link>
                    </p>
                </div>
                </form>
            </div>
        </AuthComp>
        <ImageSideContainer/>
    </article>
</section>
};

export default ResetPassword;
