import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddProjectsMutation, useFetchAllProjectManagerQuery, useFetchSchoolQuery, useUpdateProjectsMutation } from "../../../../features/services/api";
import { getId, SaveToLocalStorage } from "../../../../shared-component";
import { ButtonWhiteBG, } from "../../../../ui";
import { AddProjectInformation } from "../../../../yup";
import { DashboardButton } from "../../Components";
import { projectData } from "../../Overview-dashboard/editReducer";
import { DashboardSelect, OverviewInput, OverviewTextarea } from "../../Overview-dashboard/OverviewComponents";
import {  nextForm, saveID, } from '../reducer';

const ProjectInformation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
const [addProjects, {isLoading}]= useAddProjectsMutation()
    const response = useFetchAllProjectManagerQuery({ queryValue: '' });
    const res = useFetchSchoolQuery()
    // const details = useFetchSingleProjectQuery(getId)
    const details = useSelector(projectData);

    const [updateProjects,data ] = useUpdateProjectsMutation()


    async function HandleRequest(values) {
        const response = await addProjects(values);

        if (response?.error) {
            toast.error( response?.error,{
                position: toast.POSITION.TOP_CENTER,
            });
            
        }
        else if (response?.data) {
            dispatch(saveID(response?.data?.data?.id));
            SaveToLocalStorage(response?.data?.data?.id)
            dispatch(nextForm(1));
            // error alert
            // toast.error(response?.message, {
            //     position: toast.POSITION.TOP_CENTER,
            // });
        } 
        
    }
    async function HandleEditRequest(values) {
        const response = await updateProjects(values);

        if (response?.error) {
            toast.error(response?.error, {
                position: toast.POSITION.TOP_CENTER,
            });
            
         }
        else if (response?.data) {
         
            dispatch(saveID(response?.data?.data?.id));
            SaveToLocalStorage(response?.data?.data?.id)
            dispatch(nextForm(1));
        } 
        
    }
    
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: {
            project_manager_id: "",
            name: "",
            number: "",
            street: '',
            state: '',
            city: '',
            zip_code: '',
            description: "",
            school: ''
        },
        validationSchema: AddProjectInformation,
        onSubmit: (values) => {
            if (!details) {
                HandleRequest(values)
                
            } else {

                HandleEditRequest(values)
            }
        
        }
    })



    const project_name = {
        name: "Project Name",
        id: "name",
        value: values.name,
        error: errors.name,
        touched: touched.name,
        onChange: handleChange,
        placeholder: "Enter Product Name",
    };
    const project_number = {
        name: "Project Number",
        id: "number",
        value: values.number,
        error: errors.number,
        touched: touched.number,
        onChange: handleChange,
        placeholder: "Enter Project Number",
    };

    const project_description = {
        name: "Project Description",
        id: "description",
        value: values.description,
        error: errors.description,
        touched: touched.description,
        onChange: handleChange,
        placeholder: "Enter Product Description",
    };
    const project_street = {
        name: "Project Location (Street)",
        id: "street",
        value: values.street,
        error: errors.street,
        touched: touched.street,
        onChange: handleChange,
        placeholder: "Enter street",
    };
    const project_state = {
        name: "Project Location (State)",
        id: "state",
        value: values.state,
        error: errors.state,
        touched: touched.state,
        onChange: handleChange,
        placeholder: "Enter state",
    };
    const project_city = {
        name: "Project Location (City)",
        id: "city",
        value: values.city,
        error: errors.city,
        touched: touched.city,
        onChange: handleChange,
        placeholder: "Enter city",
    };
    const project_zip_code = {
        name: "Project Location (Zip Code)",
        id: "zip_code",
        value: values.zip_code,
        error: errors.zip_code,
        touched: touched.zip_code,
        onChange: handleChange,
        placeholder: "Enter zip code",
    };
    const project_manager = {
        name: "Project Manager",
        id: "project_manager_id",
        value: values.project_manager_id,
        error: errors.project_manager_id,
        touched: touched.project_manager_id,
        onChange: handleChange,
        placeholder: "Enter Product Manager",
    };
    const school = {
        name: "School/Dept Name",
        id: "school",
        value: values.school,
        error: errors.school,
        touched: touched.school,
        onChange: handleChange,
        placeholder: "Select School/Dept",
    };
    useEffect(() => {
		if (!details) {
			return;
        }
		setValues({ ...details, description: details?.description });
	}, [details]);

    return <form onSubmit={handleSubmit}>
        <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
            {/* Header */}
            <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 text-[32px]'>
                    Projects Overview
                </h3>
                <p className='text-gray-700 text-base mb-6'>
                    Provide information about the new project
                </p>
                <p className='text-gray-600 font-bold text-lg mb-1'>
                    Project Information
                </p>
                <hr />
            </div>
      
            {/* Project Input */}
            <div className='w-1/2'>
                <div>
                    <div >
                        <div>
                            <div>
                                <div className="w-full overflow-x-hidden">
                                    <div>
                                        <OverviewInput {...project_name} />
                                    </div>
                                    <div>
                                        <OverviewInput {...project_number} />
                                    </div>
                                    <div>
                                        <OverviewInput {...project_street} />
                                    </div>
                                    <div>
                                        <OverviewInput {...project_state} />
                                    </div>
                                    <div>
                                        <OverviewInput {...project_city} />
                                    </div>
                                    <div>
                                        <OverviewInput {...project_zip_code} />
                                    </div>
                                    <div>
                                        <OverviewTextarea {...project_description} />
                                    </div>
                                    <div>
                                        <DashboardSelect {...project_manager}>
                                            <option value={!project_manager.value && ''}>{!project_manager.value ? 'Select Project Manager' : project_manager.value}</option>

                                            {response?.data?.data?.data?.map((cur, id) => {
                                                return (
                                                    <option
                                                        value={cur.id}
                                                        key={id}>
                                                        {`${cur.first_name} ${cur.last_name}`}
                                                    </option>
                                                );
                                            })}
                                        </DashboardSelect>
                                    </div>
                                    <div>
                                        <DashboardSelect {...school}>
                                            <option value={!school.value && ''}>{!school.value ? 'Select School/Dept' : school.value}</option>

                                            {res?.data?.data?.data?.map((cur, id) => {
                                                return (
                                                    <option
                                                        value={cur.name}
                                                        key={id}>
                                                        {cur.name}
                                                    </option>
                                                );
                                            })}
                                        </DashboardSelect>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        {/* Buttons */}
        <div className='flex gap-4 -mt-2 items-center'>
        <DashboardButton
								name='NEXT'
								hidden
								type="submit"
                                width='w-[168px]'
								loading={isLoading|| data.isLoading}
							/>
            
             <ButtonWhiteBG width='w-[168px]' name='Cancel' onClick={() => navigate('/dashboard')} /> 
            
        </div>
    </form>
};
      
      


export default ProjectInformation;