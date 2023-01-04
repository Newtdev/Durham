import PenEdit from "../../../../assets/penEdit.svg";
import User from "../../../../assets/Avatar.svg";
import { useFormik } from "formik";
import { DashboardNav } from "../../Components";
import { ProfileDetails } from "./ProfileSettingsComponent";
import { EditProfileDetailsSchema } from "../../../../yup";
import { PageNavigation } from "../components";
import { useFetchSingleProjectManagerQuery, useUpdateProductManagerDetailsMutation } from "../../../../features/services/api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { userDetails } from "../../../../features/auth";
import { useEffect } from "react";



const ProfileSettings = () => {

    const profile = useSelector(userDetails)
    // PASS IN THE ID
    const result = useFetchSingleProjectManagerQuery(profile.id);
    // PASS IN A ID
    const [updateProjectManageDetails, {isLoading}] = useUpdateProductManagerDetailsMutation()

    const HandleRequest = async (values) => {
        const data ={id:values.id, info:values}

        const response = await updateProjectManageDetails(data);
        
        if (response) {
          if (response?.error) {
                    toast.error(response?.error?.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                } else {
                    toast.success(response?.data?.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
        }
  }


    const {values,errors, touched,handleChange, handleSubmit, setValues } = useFormik({
        initialValues: {
            fullName: "",
            first_name: '',
            last_name: '',
			email: "",
            phone: "",
            password:"**********"
        }, 
        // validationSchema: EditProfileDetailsSchema,

        onSubmit: (values) => {
            // const { password } = values;
            // if (password) {
            //     // console.log('password')
            // }
            // // console.log(password)
            HandleRequest(values)
        
        }
    });
    const profileProps = {
        first_name: {
            indx:0,
            name:'First Name',
            id: "first_name",
            error: errors.first_name,
            touched: touched.first_name,
            value: values.first_name,
            onChange: handleChange,
        },
        last_name: {
            indx:1,
            name:'Last Name',
            id: "last_name",
            error: errors.last_name,
            touched: touched.last_name,
            value: values.last_name,
            onChange: handleChange,
        },
        email: {
            indx:2,
            name:'Email',
            id: "email",
            error: errors.email,
            touched: touched.email,
            value: values.email,
            onChange: handleChange,
        },
        phone: {
            indx:3,
            name:'Phone',
            id: "phone",
            error: errors.phone,
            touched: touched.phone,
            value: values.phone,
            onChange: handleChange,
        },
        password: {
            indx:4,
            name: 'Password',
            id: "password",
            error: errors.password,
            touched: touched.password,
            value: values.password,
            onChange: handleChange,
        },
    };


    useEffect(() => {
        if (!result?.data) {
            return;
        } else {   
            // const values = {first_name: result?.data?.first_name,last_name: result?.data?.last_name,phone: result?.data?.phone,email: result?.data?.email}
            setValues(result?.data)
        }
        
    },[result])
    
    return <section>
            <DashboardNav/>
        <article className='hidde pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='ml-4 mb-6'>
          <PageNavigation next='Profile Details'/>

            <div className='mt-6 relative w-12 h-12 rounded-full'>
              <img className='w-full' src={User} alt='user' />
              <img className='absolute top-8 left-6 cursor-pointer' src={PenEdit} alt='edit' />
            </div>
          </div>

          {/* Details */}
          <div className='w-full lg:w-[552px]'>
            
       <ProfileDetails data={profileProps} onSubmit={handleSubmit} loading={isLoading} hidden />
          </div>
        </div>
      </article>
    </section>
};


export default ProfileSettings;