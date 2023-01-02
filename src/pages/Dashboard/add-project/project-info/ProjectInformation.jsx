import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {  useAddProjectsMutation, useFetchAllProjectManagerQuery } from "../../../../features/services/api";
import { ButtonWhiteBG } from "../../../../ui";
import { AddProjectInformation } from "../../../../yup";
import { DashboardButton } from "../../Components";
import { DashboardSelect, OverviewInput, OverviewTextarea } from "../../Overview-dashboard/OverviewComponents";
import { nextForm, saveID, } from '../reducer';

const ProjectInformation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
const [addProjects, {isLoading}]= useAddProjectsMutation()
    const response = useFetchAllProjectManagerQuery();


    async function HandleRequest(values) {
        const response = await addProjects(values);

        if (response?.error) {
            toast.error('Opps! Something went wrong, Please try again later!', {
                position: toast.POSITION.TOP_CENTER,
            });
            
        }
        else if (response?.data?.status !== 'success') {
            // error alert
            toast.error(response?.message, {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            dispatch(saveID(response?.data?.data?.id));
            dispatch(nextForm());
        }
        
    }
    
    const { values, errors, touched, handleChange, handleSubmit, setValues } = useFormik({
        initialValues: {
            project_manager_id: "",
            name: "",
            number: "",
            project_location: '',
            description: "",
        },
        validationSchema: AddProjectInformation,
        onSubmit: (values) => {
            HandleRequest(values)
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
        placeholder: "Enter Product Number",
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
    const project_manager = {
        name: "Project Manager",
        id: "project_manager_id",
        value: values.project_manager_id,
        error: errors.project_manager_id,
        touched: touched.project_manager_id,
        onChange: handleChange,
        placeholder: "Enter Product Manager",
    };


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
                                        <OverviewTextarea {...project_description} />
                                    </div>
                                    <div>
                                        <DashboardSelect {...project_manager}>
                                            {!response?.data?.data?.data && (
                                                <option>No project Manager</option>
                                            )}
                                            <option>Select Project Manager</option>
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
								loading={isLoading}
							/>
            
             <ButtonWhiteBG width='w-[168px]' name='Cancel' onClick={() => navigate('/dashboard')} /> 
            
        </div>
    </form>
};
      
      


export default ProjectInformation;