import { useFormik } from "formik";
import { useState } from "react";
import { AddNewProjectSchema } from "../../../yup";
import { ProjectOverview } from "./AddNewProjects";
import { AwardeeInformation } from "./AddNewProjects";
import { SelectDocuments } from "./AddNewProjects";

const ProjectFormsController = () => {
	const [steps, setSteps] = useState(0);

	const nextStep = () => setSteps((prev) => prev + 1);
	const prevStep = () => setSteps((prev) => prev - 1);

	const { values, errors, touched, setValues, handleSubmit, handleChange } =
		useFormik({
			initialValues: {
				project_name: "",
				project_number: "",
				project_description: "",
				// select_project_manager: "",

				awardee: "",
				design_consultant: "",
				consultant_name: "",
				corporate_secretary: "",
				consultant_address: "",
				corporate_president: "",
				company_representative_name: "",
				company_representative_title: "",

				select_documents: [],
			},
			validationSchema: AddNewProjectSchema[steps],

			onSubmit: (values) => {
				console.log(values);
				if (steps !== 3) {
					nextStep();
				} else {
					handleSubmit();
				}
			},
		});

	const props = {
		values,
		errors,
		touched,
		setValues,
		handleChange,
		steps,
		nextStep,
		prevStep,
	};

	// const projectOverview = {
	// 	...props,
	// };

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
				<article>{/* <ProjectOverviewNav />  */}</article>

				<main className="bg-[#fafafa] h-full ">
					{/* Page Marker */}
					<div className="bg-white h-[80px] border-b border-b-[#b1c3c9] flex items-center justify-between px-12">
						<div className="flex gap-6 items-center justify-start">
							<FormHeader active={steps} />
						</div>

						<button className="text-[#3b6979] font-semibold w-20 h-10 text-base border-none rounded hover:bg-gray-50 hover:text-blue-800">
							EXIT
						</button>
					</div>

					{/* Main Content */}
					<div className="container mx-auto pt-8 px-4 lg:px-24">
						{console.log(errors)}
						<form onSubmit={handleSubmit}>
							{steps === 0 && <ProjectOverview {...props} />}
							{steps === 1 && <AwardeeInformation {...props} />}
							{steps === 2 && <SelectDocuments {...props} />}
						</form>
					</div>
				</main>
			</section>
		</section>
	);
};

export default ProjectFormsController;
