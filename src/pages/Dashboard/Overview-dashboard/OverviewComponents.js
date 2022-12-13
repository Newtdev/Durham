import { useFormik } from "formik";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { Label, Error, Textarea, Select } from "../../../ui";
// import { AddUsersSchema } from "../../../yup";
import { SelectContainer } from "../Components";

export const OverviewTableHeader = [
	"Project Name",
	"Awardee",
	"Company Rep",
	"Project Manager",
	"Date",
	"",
];

export const OverviewContent = [
	{
		id: 1,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 2,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 3,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 4,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 5,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 6,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 7,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 8,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
	{
		id: 9,
		projectName: "Burton Elementary School - Boiler Replacement",
		awardee: "John Doe",
		companyRep: "John Doe",
		projectManager: "John Doe",
		date: "12/08/22",
	},
];

export function OverviewTableBody({ dataArray, onDelete, onEdit }) {
	return (
		<tbody className="text-xs text-[#000000] bg-white font-medium">
			{dataArray.map(
				({ id, projectName, awardee, companyRep, projectManager, date }) => {
					const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";

					return (
						<tr key={id} className={`${strip} border-b`}>
							<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
								{projectName}
							</td>
							<td className="py-3 px-4">{awardee}</td>
							<td className="py-3 px-4 whitespace-nowrap">{companyRep}</td>
							<td className="py-3 px-4 whitespace-nowrap">{projectManager}</td>
							<td className="py-3 px-4 whitespace-nowrap">{date}</td>
							<td className="py-3 px-4 flex items-center justify-start gap-3">
								<span className="w-4 cursor-pointer" onClick={onDelete}>
									<img className="w-full" src={Delete} alt="delete" />
								</span>
								<span className="w-4 cursor-pointer" onClick={onEdit}>
									<img className="w-full" src={Edit} alt="edit" />
								</span>
							</td>
						</tr>
					);
				}
			)}
		</tbody>
	);
}

export function OverviewTitleCard() {
	return (
		<div className="bg-white rounded-lg border border-[#d8e1e4] flex flex-col items-center justify-center h-[104px]">
			<small className="text-gray-900 text-xs block">Title</small>
			<p className="text-[#3b6979] text-lg font-bold">Amount</p>
		</div>
	);
}

export function Input(props) {
	const { placeholder, id, onChange, values } = props;
	return (
		<input
			className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
			name={id}
			placeholder={placeholder}
			type="text"
			value={values}
			onChange={onChange}
		/>
	);
}

export function OverviewInput(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Input {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}

export function OverviewTextarea(props) {
	const { name, error, touched } = props;
	return (
		<div className="mb-4">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>
			<Textarea {...props} />
			{error && touched && <Error message={error} />}
		</div>
	);
}

export function ProjectInfo({
	values,
	errors,
	touched,
	handleChange,
	nextStep,
	prevStep,
	steps,
}) {
	const project_name = {
		name: "Project Name",
		id: "project_name",
		value: values.project_name,
		error: errors.project_name,
		touched: touched.project_name,
		onChange: handleChange,
		placeholder: "Enter Product Name",
	};
	const project_number = {
		name: "Project Number",
		id: "project_number",
		value: values.project_number,
		error: errors.project_number,
		touched: touched.project_number,
		onChange: handleChange,
		placeholder: "Enter Product Number",
	};
	const project_description = {
		name: "Project Description",
		id: "project_description",
		value: values.project_description,
		error: errors.project_description,
		touched: touched.project_description,
		onChange: handleChange,
		placeholder: "Enter Product Description",
	};
	const project_manager = {
		name: "Project Manager",
		id: "project_manager",
		value: values.project_manager,
		error: errors.project_manager,
		touched: touched.project_manager,
		onChange: handleChange,
		placeholder: "Enter Product Manager",
	};

	return (
		<div onClick={(e) => e.stopPropagation()}>
			<div className="">
				<div>
					<div className="w-full overflow-auto">
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
							<DashboardSelect {...project_manager} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function AwardeeInfo({ values, errors, touched, handleChange }) {
	const awardee = {
		name: "Select Awardee involve in this project",
		id: "awardee",
		placeholder: "Select Awardee involve in this project",
		onChange: handleChange,
		value: values.awardee,
		error: errors.awardee,
		touched: touched.awardee,
	};

	const design_consultant = {
		name: "Select Design Consultant",
		id: "design_consultant",
		placeholder: "Select Design Consultant",

		onChange: handleChange,
		value: values.design_consultant,
		error: errors.design_consultant,
		touched: touched.design_consultant,
	};
	const consultant_name = {
		name: "Consultant Name",
		id: "consultant_name",
		placeholder: "Enter Consultant Name",
		onChange: handleChange,
		value: values.consultant_name,
		error: errors.consultant_name,
		touched: touched.consultant_name,
	};
	const consultant_address = {
		name: "Consultant Address",
		id: "consultant_address",
		placeholder: "Enter Consultant Address",

		onChange: handleChange,
		value: values.consultant_address,
		error: errors.consultant_address,
		touched: touched.consultant_address,
	};
	const corporate_president = {
		name: "Corperate President",
		id: "corporate_president",
		placeholder: "Enter Corperate President",
		onChange: handleChange,
		value: values.corporate_president,
		error: errors.corporate_president,
		touched: touched.corporate_president,
	};

	const corporate_secretary = {
		name: "Corperate Secretary",
		id: "corporate_secretary",
		placeholder: "Enter Corperate Secretary",

		onChange: handleChange,
		value: values.corporate_secretary,
		error: errors.corporate_secretary,
		touched: touched.corporate_secretary,
	};

	return (
		<div onClick={(e) => e.stopPropagation()}>
			<div className="">
				<div className="">
					<div className="w-full overflow-auto">
						<div>
							<SelectContainer {...awardee} />
						</div>
						<div>
							<OverviewInput {...design_consultant} />
						</div>
						<div>
							<OverviewInput {...consultant_name} />
						</div>
						<div>
							<OverviewInput {...consultant_address} />
						</div>
						<div>
							{/* <OverviewTextarea {} /> */}
							<OverviewInput {...corporate_president} />
						</div>
						<div>
							<OverviewInput {...corporate_secretary} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function CompanyRep({ values, handleChange, errors, touched }) {
	const company_representative_name = {
		name: "Name",
		id: "company_representative_name",
		placeholder: "Enter Representative Name",
		onChange: handleChange,
		value: values.company_representative_name,
		error: errors.company_representative_name,
		touched: touched.company_representative_name,
	};
	const company_representative_title = {
		name: "Title",
		id: "company_representative_title",
		placeholder: "Enter Representative Title",

		onChange: handleChange,
		value: values.company_representative_title,
		error: errors.company_representative_title,
		touched: touched.company_representative_title,
	};
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<div className="">
				<div className="">
					<div className="w-full overflow-auto">
						<div>
							<OverviewInput {...company_representative_name} />
						</div>
						<div>
							<OverviewInput {...company_representative_title} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function DashboardSelect(props) {
	// const { name, error, touched } = props;
	const { id, values, children, onChange, name, error, touched } = props;
	return (
		<div className="mb-4 w-[531px] pr-3">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>

			<select
				onChange={onChange}
				className="cursor-pointer bg-white border border-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
				name={id}
				type="text"
				value={values}>
				{children}
			</select>
			{error && touched && <Error message={error} />}
		</div>
	);
}
