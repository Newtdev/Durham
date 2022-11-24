import { Button } from "../../../ui";
import AuthComp, { AuthHeader, CheckBox, ImageSideContainer, InputContainer } from "../component";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { SignUpSchema } from "../../../yup";
import { Spinner } from "../../../assets";

const SignUp = () => {

    const { values, isSubmitting, errors, touched, handleSubmit, handleChange,setSubmitting } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            check: false
        }, 
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            setSubmitting(true);
            console.log(values)
            
        },
    });

    const props = {
        firstName: {
            name: 'First Name',
            id: 'firstName',
            placeholder: 'John',
            value:values.firstName,
            onChange: handleChange,
            error: errors.firstName,
            touched:touched.firstName
        },
        lastName: {
            name: 'Last Name',
            id: 'lastName',
            placeholder: 'Doe',
            value:values.lastName,
            onChange: handleChange,
            error: errors.lastName,
            touched:touched.lastName


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
        confirmPassword: {
            name: 'Confirm Password',
            id: 'confirmPassword',
            value:values.confirmPassword,
            placeholder: 'Enter your password address',
            onChange: handleChange,
            error: errors.confirmPassword,
            touched:touched.confirmPassword


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

return <section>
    <article className="container mx-auto h-screen w-screen flex">
        <AuthComp>
            <div className='mt-8'>
                    <div className='h-16'>
                      
                        <AuthHeader name="Create Account"/>
                    </div>
                    <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
                    <InputContainer {...props.firstName} />

                    <InputContainer {...props.lastName} />
                    
                    <InputContainer {...props.email} />
                    
                    <InputContainer {...props.password} />
                    
                    <InputContainer {...props.confirmPassword} />
                    
                    <CheckBox {...props.check} />
                    <div className='mt-8 mb-4'>

                        <Button name='SIGN UP' loading={isSubmitting} disablebtn={!props.check.value} />
                        </div>
                    <div>
                        <p className='text-base text-gray-800 font-light'>Don't have an account? <Link to='/log-in' className=' underline font-extrabold  text-[#3B6979] font-bold'>Log in</Link>
                        </p>
                    </div>
                    </form>
                </div>
        </AuthComp>
        <ImageSideContainer/>
    </article>
</section>
};


export default SignUp;