import Logo from '../../../assets/logo.svg';
import User from '../../../assets/Avatar.svg';
import {Button, Input, Label} from '../../../ui'

function InputContainer(props) {
    const {name, placeholder } = props;
    return <div className="mb-6 w-[344px]">
        <Label name={name} styles="block mb-2 text-sm font-medium text-gray-900" />
        <Input placeholder={placeholder} />
    </div>
}

const Login = () => {
    return <section>
        <article className="container mx-auto h-screen w-screen flex">
            <div className="w-1/2 h-full ">
                <div>
                    <img src={Logo} alt="logo"  className='py-4'/>
                </div>
                <div className='h-[90%] flex flex-col items-center justify-center'>

                    <div className='h-56'>
                        <img src={User} alt="user" className='mx-auto mb-6 h-36 w-36 rounded-full object-cover' />
                        <h1 className='text-2xl font-black text-center text-[#111827]'>Welcome Back</h1>
                    </div>
                    <form>
                        <InputContainer name='Email' placeholder='Enter your email address' />
                        <InputContainer name='Password' placeholder='Enter your password'/>
                    
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded-sm border border-gray-300 focus:ring-3 focus:ring-blue-300" />
                            </div>
                           
                            <Label name="Remember me on this device" styles='ml-2 text-sm font-medium text-[#111827]'/>
                        </div>
                       <Button name='LOG IN'/>
                    </form>
                </div>
            </div>
            <div className="w-1/2 h-full bg-yellow-800"></div>
        </article>
    </section>
};


export default Login;