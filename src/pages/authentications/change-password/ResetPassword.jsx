import { Button } from "../../../ui";
import AuthComp, { AuthHeader, ImageSideContainer, InputContainer } from "../component";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../../../yup";

const ResetPassword = () => {

    const { values, handleChange, touched, errors, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: (values) => {
            console.log(values);
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
            touched: touched.password


        },
        confirmPassword: {
            name: 'Confirm Password',
            id: 'confirmPassword',
            value: values.confirmPassword,
            placeholder: 'Enter your password address',
            onChange: handleChange,
            error: errors.confirmPassword,
            touched: touched.confirmPassword


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
                    <InputContainer {...props.confirmPassword} />
                    <div className='mt-6 mb-4'>

                    <Button name='RESET PASSWORD' loading={isSubmitting} />
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
