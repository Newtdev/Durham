import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { state } from "../../../lib/data";
import { ButtonRedBG, ButtonWhiteBG, ModalOverlay } from "../../../ui";
import { AddNewProjectSchema } from "../../../yup";
import { ProjectOverviewNav } from "../Components";
import { ProjectOverview } from "./AddNewProjects";
import { AwardeeInformation } from "./AddNewProjects";
import { SelectDocuments } from "./AddNewProjects";
import { useDispatch } from "react-redux";
import { addNewProject } from "./projectSlice";

const ProjectFormsController = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [steps, setSteps] = useState(0);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(state);

	const nextStep = () => setSteps((prev) => prev + 1);
	const prevStep = () => setSteps((prev) => prev - 1);
	const {
		values,
		errors,
		touched,
		setFieldValue,
		handleSubmit,
		handleChange,
		handleReset,
	} = useFormik({
		initialValues: {
			date: new Date(),
			project_manager: "",
			project_name: "",
			project_number: "",
			project_description: "",
			// select_project_manager: "",

			awardee: "",
			design_consultant: "",
			consultant_name: "",
			consultant_address: "",
			corporate_president: "",
			corporate_secretary: "",
			company_representative_name: "",
			company_representative_title: "",

			document: {},
		},
		validationSchema: AddNewProjectSchema[steps],

		onSubmit: (values) => {
			if (steps !== 2) {
				nextStep();
			} else {
				values.document = selected;
				dispatch(addNewProject(values));
				navigate("/dashboard/add-new-project/preview", { replace: true });
				/**
				 * Handle API request
				 * if successfull go the project dashboard
				 * else show the error modal
				 * on the project dashboard fetch all the details for the project the project manager
				 */
			}
		},
	});

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
		nextStep,
		prevStep,
	};

	const getData = (e) => {
		(function () {
			switch (e.name) {
				case "Contract":
					setSelected({
						...selected,
						contract: [...selected.contract, e.value],
					});
					break;
				case "Procurement":
					setSelected({
						...selected,
						procurement: [...selected.procurement, e.value],
					});
					break;
				case "Notice":
					setSelected({ ...selected, notice: [...selected.notice, e.value] });
					break;
				case "Project Closeout":
					setSelected({
						...selected,
						project_closeout: [...selected.project_closeout, e.value],
					});
					break;
				case "MWBE Forms":
					setSelected({
						...selected,
						mwbe_forms: [...selected.mwbe_forms, e.value],
					});
					break;
				case "Notice Letter": {
					setSelected({
						...selected,
						notice_letter: [...selected.notice_letter, e.value],
					});
					break;
				}
				default:
					return selected;
			}
		})();
	};
	const selectprops = {
		...props,
		handleSubmit,
		setFieldValue,
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
						<form onSubmit={handleSubmit}>
							{steps === 0 && <ProjectOverview {...props} />}
							{steps === 1 && <AwardeeInformation {...props} />}
							{steps === 2 && <SelectDocuments {...selectprops} />}
						</form>
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
