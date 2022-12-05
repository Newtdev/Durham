import PenEdit from "../../../../assets/penEdit.svg";
import User from "../../../../assets/Avatar.svg";
import { useFormik } from "formik";
import { DashboardNav } from "../../Components";
import { ProfileDetails } from "./ProfileSettingsComponent";
import { EditProfileDetailsSchema } from "../../../../yup";
import { EditComponent } from "../components";


const details = [{
    id: 0,
    name: 'Jane Cooper',
    label: 'Full Name',
},
{
    id: 1,
    name: 'johndoe@email.com',
    label: 'Email'
},
{
    id: 2,
    name: '+61 412 345 678',
    label: 'Phone Number'
},
{
    id: 3,
    name: '*************',
    label: 'Password'
}
];
const ProfileSettings = () => {

    const {values,errors, touched, handleReset,handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            fullName: "Jane Cooper",
			email: "johndoe@email.com",
            phone: "+61 412 345 678",
            password:"**********"
        }, 
        validateOnChange:true,
        validationSchema: EditProfileDetailsSchema,

        onSubmit:(values) => {
            console.log(values)
        }
    });
    const profileProps = {
        fullName: {
            indx:0,
            name:'Full Name',
            id: "fullName",
            error: errors.fullName,
            touched: touched.fullName,
            values: values.fullName,
            onChange: handleChange,
        },
        email: {
            indx:1,
            name:'Email',
            id: "email",
            error: errors.email,
            touched: touched.email,
            values: values.email,
            onChange: handleChange,
        },
        phone: {
            indx:2,
            name:'Phone',
            id: "phone",
            error: errors.phone,
            touched: touched.phone,
            values: values.phone,
            onChange: handleChange,
        },
        password: {
            indx:3,
            name: 'Password',
            id: "password",
            error: errors.password,
            touched: touched.password,
            values: values.password,
            onChange: handleChange,
        },
    };
    
    return <section>
            <DashboardNav/>
        <article className='hidde pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='ml-4 mb-6'>
            <p className='mb-4 text-gray-900'>
              Settings &#62;
              <span className='font-bold'> Profile Details</span>
            </p>
            <h1 className='text-gray-900 font-semibold text-3xl'>
              Profile Details
            </h1>

            <div className='mt-6 relative w-12 h-12 rounded-full'>
              <img className='w-full' src={User} alt='user' />
              <img className='absolute top-8 left-6 cursor-pointer' src={PenEdit} alt='edit' />
            </div>
          </div>

          {/* Details */}
          <div className='w-full lg:w-[552px]'>
            
       <ProfileDetails data={profileProps} onSubmit={handleSubmit} loading={isSubmitting} />
          </div>
        </div>
      </article>
    </section>
};


export default ProfileSettings;