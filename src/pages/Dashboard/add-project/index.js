import { useFormik, FormikProvider } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ButtonRedBG, ButtonWhiteBG, ModalOverlay } from "../../../ui";
import { AddNewProjectSchema } from "../../../yup";
import { ProjectOverviewNav } from "../Components";
// import { SelectDocuments } from "./AddNewProjects";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	projectData,
	setProjectInfoDefault,
} from "../Overview-dashboard/editReducer";
import ProjectInformation from "./project-info";
import { getForm, nextForm, setDefault } from "./reducer";
import AwardeeInformation from "./awardee-info/AwardeeInformation";
import {
	useAddProjectDocumentMutation,
	useAddProjectVendorMutation,
	useEditVendorMutation,
	useFetchSingleProjectQuery,
} from "../../../features/services/api";
import { documents } from "../../../lib/data";
// import EditDocument from "./documents/EditDocument";
import { getId } from "../../../shared-component";
import EditDocument from "./documents/EditDocument";

const ProjectFormsController = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useLocation();
	// const id = useSelector(getProjectID);
	// const vendorID = useSelector(getVendorID)

	// MAKE API REQUEST TO FETCH THE LIST OF ALL THE VENDORS
	// const details = useSelector(projectData);
	const steps = useSelector(getForm);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState([]);
	const [addProjectVendor, { isLoading }] = useAddProjectVendorMutation();
	const [addProjectDocument, response] = useAddProjectDocumentMutation();
	const projectByIDResponse = useFetchSingleProjectQuery(params?.state);
	const [editVendor, data] = useEditVendorMutation();

	async function HandleRequest(values) {
		console.log(values);
		const response = await addProjectVendor({
			project_id: getId(),
			vendors: values,
		});
		if (response?.error) {
			toast.error(response?.error?.messsage, {
				position: toast.POSITION.TOP_CENTER,
			});
		} else if (response?.data) {
			// error alert
			dispatch(nextForm(2));
			toast.error(response?.message, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	}

	async function SubmitDocument(values) {
		const response = await addProjectDocument({
			project_id: getId(),
			documents: values,
		});
		if (response?.error) {
			toast.error(response?.error?.message, {
				position: toast.POSITION.TOP_CENTER,
			});
		} else if (response?.data) {
			// error alert
			navigate("/dashboard/add-new-project/preview");
		}
	}

	const formik = useFormik({
		initialValues: {
			project_manager_id: "",
			name: "",
			number: "",
			location: "",
			state: "",
			city: "",
			zip_code: "",
			description: "",
			school_id: "",
			project_vendors: [
				{
					type: "old",
					role: "",
					company_name: "",
					street: "",
					state: "",
					city: "",
					zip_code: "",
					president: "",
					secretary: "",
					first_name: "",
					last_name: "",
					title: "",
				},
			],
			document: {},
		},
		validationSchema: AddNewProjectSchema[steps],

		onSubmit: (values) => {
			if (steps === 1 && !params?.state) {
				//MAKE REQUEST TO THE ADD PROJECT API AND GO TO THE NEXT PAGE.'
				HandleRequest(values.project_vendors);
			} else if (params?.state) {
				const data = values?.project_vendors?.map((cur, index) => {
					return { ...cur, type: "old" };
				});
				// console.log(data);
				HandleRequest(data);
				// HandleEditRequest(values.project_vendors[0]);
			}

			if (steps === 2) {
				const documentSelected = [
					...new Map(
						selected.map((cur) => [cur["document_name"], cur])
					).values(),
				];
				SubmitDocument(documentSelected);
			}
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
		dispatch(setDefault());
		dispatch(setProjectInfoDefault());
	};

	const props = {
		values,
		errors,
		touched,
		handleChange,
		steps,
		handleSubmit,
		setFieldValue,
		setValues,
		isLoading: isLoading || data.isLoading,
	};

	// const getData = (e) => {
	// 	setSelected([
	// 		...selected,
	// 		{ document_type: e.name, document_name: e.value, identifier: e.title },
	// 	]);
	// };
	// const selectprops = {
	// 	...props,
	// 	handleSubmit,
	// 	setFieldValue,
	// 	documents,
	// 	response,
	// 	getData: (e) => getData(e),
	// };

	const FormHeader = ({ active }) => {
		return [
			{ id: 0, numb: 1, name: "Overview" },
			{ id: 1, numb: 2, name: "Awardee Information" },
			{ id: 2, numb: 3, name: "Select forms" },
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

	const valueToBeEdited = useCallback(() => {
		if (!projectByIDResponse?.currentData) {
			return;
		}
		formik.setValues(projectByIDResponse?.currentData?.data);
	}, [projectByIDResponse?.currentData]);

	useEffect(() => {
		valueToBeEdited();
	}, [valueToBeEdited]);

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
							{steps === 0 ? <ProjectInformation {...props} /> : null}
							{steps === 1 ? <AwardeeInformation {...props} /> : null}
							{steps === 2 ? (
								<EditDocument documents={props.values?.project_documents} />
							) : null}
						</FormikProvider>
					</div>
				</main>
			</section>
			<ModalOverlay show={show}>
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
