import User from '../../../assets/Avatar.svg';
import { Button, ModalOverlay } from '../../../ui'
import { Link } from 'react-router-dom';
import AuthComp, { AuthHeader, CheckBox, ImageSideContainer, InputContainer } from '../component';
import { useFormik } from 'formik';
import { LoginSchema } from '../../../yup';
import { ForgetPasswordModal, ResendPasswordLink } from '../change-password/Components';
import { useState } from 'react';


const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
            check: false
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const props = {
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
            placeholder: 'Enter your password',
            value:values.password,
            onChange: handleChange,
            error: errors.password,
            touched:touched.password


        },
    }

    return <section>
        <article className="mx-10 px-4 mx-auto h-screen w-screen flex">
    
            <AuthComp>
                <div className='mt-8'>
                    <div className='h-52 '>
                        <img src={User} alt="user" className='mx-auto mb-6 h-28 w-28 rounded-full object-cover' />
                        {/*  */}
                        <AuthHeader name="Welcome Back"/>
                    </div>
                    <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
                        <InputContainer {...props.email} />
                        <InputContainer {...props.password} />
                    
                            <CheckBox name="Remember me on this device" />
                           
                          
                        <div className='mt-12'>

                        <Button name='LOG IN' loading={isSubmitting} />
                        </div>
                    <div className='my-4'>
                        
                        <span role='button' onClick={()=> setShowModal(true)} className=' underline text-base font-bold text-[#3B6979]'>Forgot password?</span>
                    </div>
                    <div>
                        <p className='text-base text-gray-800 font-light'>Don't have an account? <Link className=' underline font-extrabold  text-[#3B6979]' to='/sign-up'>Sign up</Link>
                        </p>
                    </div>
                    </form>
                </div>
            </AuthComp>
            <ImageSideContainer />
            <ModalOverlay show={showModal} close={() => setShowModal(false)} >
                <ForgetPasswordModal close={() => setShowModal(false)}/>
                {/* <ResendPasswordLink email={values.email} /> */}
        </ModalOverlay> 
        </article>
    </section>
};


export default Login;