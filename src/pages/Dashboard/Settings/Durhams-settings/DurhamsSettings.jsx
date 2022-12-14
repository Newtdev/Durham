import { DashboardNav } from "../../Components";
import { ProfileDetails } from "../Profile-settings/ProfileSettingsComponent";
import {useUpdateDurhamDetailsMutation,
	useFetchDurhamQuery} from '../../../../features/services/api'
import { toast } from "react-toastify";
import { PageNavigation } from "../components";
import { useState } from "react";



const DurhamSettings = () => {
  const result = useFetchDurhamQuery()
  const [updateDurhamDetails, { isLoading }] = useUpdateDurhamDetailsMutation();
  const [value, setValue] = useState({});

  const HandleRequest = async (values) => {

    const response = await updateDurhamDetails({...values});
    
    if (response) {
      if (response.error) {
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
 
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    Object.entries(value).forEach((cur) => {
      const [name, value] = [cur[0], cur[1]];
              
      if (!value) {
        return
      } else {
        
        HandleRequest({ name, value })
      }
    
  
    });
  }

  const props = {
    chair_board_education: {
      indx: 0,
      name: "Chair,DPS Board of Education",
      id: "chair_board_education",
      placeholder: "Chair,DPS Board of Education",
      onChange,
      onSubmit
    },
    chief_finance_officer: {
      indx:1,
      name: "Chief Finance Officer",
      id: "chair_finance_officer",
      placeholder: "John Doe",
      onChange,
      onSubmit
     
    },
    construction_interim_director: {
      indx:2,

      name: "Construction & Capital Planning Interim Executive Director",
      id: "construction_interim_director",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    business_Manager: {
      indx:3,

      name: "Construction & Capital Planning Business Manager",
      id: "business_Manager",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    project_manager: {
      indx:4,

      name: " Construction & Capital Planning Project Manager",
      id: "project_manager",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    project_manager_phone: {
      indx:5,

      name: "Construction & Capital Planning Project Manager's Phone Number",
      id: "project_manager_phone",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_construction: {
      indx:6,

      name: " Director of Construction and Sustainability",
      id: "director_construction",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_design: {
      indx:7,

      name: " Director of Design and Construction",
      id: "director_design",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_durham: {
      indx:8,

      name: " Executive Director Durham Public Schools Building Services",
      id: "director_durham",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
   };

  

  return (
    <section>   

      <article>
        <DashboardNav/>
        {/* <!-- Navbar --> */}
        
      </article>

      

      {/* Durham Info */}
      <article className=' pt-6'>
        <div className='container mx-auto px-4 lg:px-24'>
          <PageNavigation next='Durham Information'/>
         

          {/* Details */}
          <div className='w-full lg:w-[552px]'>
            <ProfileDetails data={props} loading={isLoading}  />
            </div>
        </div>
      </article>

      
    </section>
  );
};

export default DurhamSettings;
