import { useFormik, FormikProvider } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../../../lib/data";
import { ButtonRedBG, ButtonWhiteBG, ModalOverlay } from "../../../ui";
import { AddNewProjectSchema } from "../../../yup";
import { ProjectOverviewNav } from "../Components";
import { SelectDocuments } from "./AddNewProjects";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";
import { projectData } from "../Overview-dashboard/editReducer";
import ProjectInformation from "./project-info";
import { getForm, getProjectID, nextForm, saveID } from "./reducer";
import AwardeeInformation from "./awardee-info/AwardeeInformation";
import { useAddProjectDocumentMutation, useAddProjectVendorMutation } from "../../../features/services/api";
import { documents } from "../../../lib/data";

const ProjectFormsController = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = useSelector(getProjectID)

	// MAKE API REQUEST TO FETCH THE LIST OF ALL THE VENDORS
	// const awardee = useSelector(getSaveData);
	// const productmanager = useSelector(product_manager_data);
	const details = useSelector(projectData);
	const steps = useSelector(getForm);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState([]);
	const [addProjectVendor, { isLoading }] = useAddProjectVendorMutation();
	const [addProjectDocument, response] = useAddProjectDocumentMutation()


	async function HandleRequest(values) {
		const response = await addProjectVendor({project_id: id, vendor_id: values });
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
			dispatch(nextForm());
        }
        
    }
	async function SubmitDocument(values) {
		console.log(id)
		const response = await addProjectDocument({project_id: id, documents:values });
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
			dispatch(nextForm());
			navigate('/add-new-project/preview');
        }
        
    }





	
	async function HandleEditRequest(values) {
		// const response = await addProjectManager({ ...values });
		let a = values.awardeeInfo;
		let b = values.document;

		const response = await supabase
			.from("durham_projects")
			.update([
				{
					project_number: values.project_number,
					project_manager: values.project_manager,
					project_name: values.project_name,
					awardeeInfo: a,
					document: b,
					project_description: values.project_description,
				},
			])
			.eq("id", details.id);
		if (response) {
			if (response.error?.message) {
				// close();
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				// setShow(true);
				toast.success("Project updated successfully", {
					position: toast.POSITION.TOP_CENTER,
				});
			}
		}
	}

	const formik = useFormik({
		initialValues: {

			awardeeInfo: [
				{
					awardee: "",
					design_consultant: "",
					consultant_name: "",
					consultant_address: "",
					corporate_president: "",
					corporate_secretary: "",
					company_representative_name: "",
					company_representative_title: "",
				},
			],
			document: {},
			
		},
		validationSchema: AddNewProjectSchema[steps],

		onSubmit: (values) => {
			if (steps === 1) {
				//MAKE REQUEST TO THE ADD PROJECT API AND GO TO THE NEXT PAGE.
				HandleRequest(String(values.awardeeInfo.length))
			}
			
			if (steps === 2) {
				SubmitDocument(selected)
			}
			
		// selected
			// if (steps !== 2) {
			// 	nextStep();
			// } else {
			// 	values.document = selected;
			// 	// console.log({values);

			// 	dispatch(addNewProject(values));
			// 	if (!details) {
			// 		HandleRequest(values);
			// 	}
			// 	HandleEditRequest(values);

			// 	/**
			// 	 * Handle API request
			// 	 * if successfull go the project dashboard
			// 	 * else show the error modal
			// 	 * on the project dashboard fetch all the details for the project the project manager
			// 	 */
			// }
		},
	});
	const {
		values,
		errors,
		touched,
		setFieldValue,
		handleSubmit,
		handleChange,
		handleReset,
		setValues,
	} = formik;
	const ExitForm = () => {
		setShow(false);
		handleReset();
		navigate("/dashboard");
	};
	
	const props = {
		values,
		errors,
		touched,
		handleChange,
		steps,
		handleSubmit,
		setValues,
		isLoading
	};

	useEffect(() => {
		if (!details) {
			return;
		}
		setValues({ ...details, project_description: details.project_description });
	}, [details]);


	/**
	 * 
	 *  {const onChange = (e) => {
    console.log(e.target)
    const { name, value, } = e.target;
    setValue({[name]: value })
  };} e 
	 */
	const getData = (e) => {
		
		setSelected([...selected, { document_type: e.name, document_name: e.value } ])
		
		 

	};
	const selectprops = {
		...props,
		handleSubmit,
		setFieldValue,
		documents,
		response,
		getData: (e) => getData(e),
	};


	const FormHeader = ({ active }) => {
		return [
			{ id: 0, numb: 1, name: "Overview" },
			{ id: 1, numb: 2, name: "Awardee Information" },
			{ id: 2, numb: 3, name: "Select forms" },
			{ id: 3, numb: 4, name: "Preview" },
		].map(({ id, name, numb }) => {
			const activeLink = active === id ? "text-gray-900" : "text-gray-400";
			return (
				<div key={id} className="flex gap-2 items-center">
					<div className="bg-gray-100 flex justify-center items-center rounded-2xl w-6 h-6">
						<span className={`${activeLink} font-bold text-lg`}>{numb}</span>
					</div>
					{id !== 4 && <span className={`${activeLink}`}>&gt;</span>}

					<span className={`${activeLink} text-base`}>{name}</span>
				</div>
			);
		});
	};

	return (
		<section>
			{/* PROJECT OVERVIEW */}
			<section>
				{/* <!-- Navbar --> */}
				<article>
					<ProjectOverviewNav />
				</article>

				<main className="bg-[#fafafa] h-full ">
					{/* Page Marker */}
					<div className="bg-white h-[80px] border-b border-b-[#b1c3c9] flex items-center justify-between px-12">
						<div className="flex gap-6 items-center justify-start">
							<FormHeader active={steps} />
						</div>
						<button
							className="text-[#3b6979] font-semibold w-20 h-10 text-base border-none rounded hover:bg-gray-50 hover:text-blue-800"
							onClick={() => setShow(true)}>
							EXIT
						</button>
					</div>

					{/* Main Content */}
					<div className="container mx-auto pt-8 px-4 lg:px-24">
						<FormikProvider value={formik}>
								{steps === 0 && <ProjectInformation />}
								{steps === 1 && <AwardeeInformation {...props} />}
								{steps === 2 && <SelectDocuments {...selectprops} />}
						</FormikProvider>
					</div>
				</main>
			</section>
			<ModalOverlay
				show={show}
				//   close={() => setShowVendorModal(false)}
			>
				<div>
					{/* Modal content */}
					<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow py-10 flex flex-col justify-center items-center">
						<p className="text-gray-900 font-semibold text-2xl">
							Are you sure you want to leave?
						</p>
						<p className="text-gray-600 text-lg text-center mt-4 mb-8">
							Once you leave this page, all changes will be lost and you can’t
							undo this action
						</p>
						{/* Buttons */}
						<div className="flex gap-4">
							<ButtonWhiteBG name="cancel" onClick={() => setShow(false)} />
							<ButtonRedBG
								name="yes, leave"
								width="w-[125px]"
								onClick={ExitForm}
							/>
						</div>
					</div>
				</div>
			</ModalOverlay>
		</section>
	);
};

export default ProjectFormsController;
