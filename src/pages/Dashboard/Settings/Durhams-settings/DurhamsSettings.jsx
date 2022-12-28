import { DashboardNav } from "../../Components";
import { ProfileDetails } from "../Profile-settings/ProfileSettingsComponent";
import {useUpdateDurhamDetailsMutation,
	useFetchDurhamQuery} from '../../../../features/services/api'
import { toast } from "react-toastify";
import { PageNavigation } from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaveData, save_profile } from "./ReducerSlice";


const DurhamSettings = () => {
  const data = useSelector(getSaveData);
  const [values, setValue] = useState(data);
    
  const [updateDurhamDetails, { isLoading }] = useUpdateDurhamDetailsMutation();

  const dispatch = useDispatch();
	const result = useFetchDurhamQuery();

	useEffect(() => {
		if (!result?.data) {
			return;
		}

		dispatch(save_profile(result?.data));
	}, [dispatch, result]);
  
  
  
  useEffect(() => {
    if (!data) {
      return;
    }
    setValue({
      business_Manager: data?.business_Manager?.value,
      chair_board_education: data?.chair_board_education?.value,
      chief_finance_officer: data?.chief_finance_officer?.value,
      construction_interim_director: data?.construction_interim_director?.value,
      director_construction: data?.director_construction?.value,
      director_design: data?.director_design?.value,
      director_durham:data?.director_durham?.value,
      project_manager: data?.project_manager?.value,
      project_manager_phone
: data?.project_manager_phone
?.value,
    })
  }, [data]);

  

  const HandleRequest = async (values) => {
    const response = await updateDurhamDetails({ ...values });
    
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
    console.log(e.target)
    const { name, value, } = e.target;
    setValue({[name]: value })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    Object.entries(values).forEach((cur) => {
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
      value: values.chair_board_education,
      name: "Chair,DPS Board of Education",
      id: "chair_board_education",
      placeholder: "Chair,DPS Board of Education",
      onChange,
      onSubmit
    },
    chief_finance_officer: {
      indx: 1,
      value: values.chief_finance_officer,
      name: "Chief Finance Officer",
      id: "chief_finance_officer",
      placeholder: "John Doe",
      onChange,
      onSubmit
     
    },
    construction_interim_director: {
      indx:2,
      value:values.construction_interim_director,
      name: "Construction & Capital Planning Interim Executive Director",
      id: "construction_interim_director",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    business_Manager: {
      indx:3,
      value:values.business_Manager,
      name: "Construction & Capital Planning Business Manager",
      id: "business_Manager",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    project_manager: {
      indx:4,
value: values.project_manager,
      name: " Construction & Capital Planning Project Manager",
      id: "project_manager",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    project_manager_phone: {
      indx:5,
value: values.project_manager_phone,
      name: "Construction & Capital Planning Project Manager's Phone Number",
      id: "project_manager_phone",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_construction: {
      indx:6,
      value:values.director_construction,
      name: " Director of Construction and Sustainability",
      id: "director_construction",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_design: {
      indx:7,
      value:values.director_design,
      name: " Director of Design and Construction",
      id: "director_design",
      placeholder: "John Doe",
      onChange,
      onSubmit
    },
    director_durham: {
      indx:8,
value:values.director_durham,
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
