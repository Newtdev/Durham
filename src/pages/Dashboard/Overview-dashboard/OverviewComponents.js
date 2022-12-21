import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import { supabase } from "../../../lib/supabase";
import { Label, Error, Textarea } from "../../../ui";
// import { AddUsersSchema } from "../../../yup";

export function OverviewTableBody({ dataArray, onDelete, onEdit }) {
	const navigate = useNavigate();
	return (
		<tbody className="text-xs text-[#000000] bg-white font-medium">
			{dataArray.map((cur) => {
				let awardee = cur.awardeeInfo[0];
				const date = cur.created_at.split("T")[0];
				const { id, project_name, project_manager } = cur;

				const strip = id % 2 === 0 ? "bg-white" : "bg-gray-50";
				return (
					<tr
						key={id}
						className={`${strip} border-b cursor-pointer`}
						onClick={() => navigate(`/dashboard/project-details/${id}`)}>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{project_name}
						</td>
						<td className="py-4 px-4">{awardee.awardee}</td>
						<td className="py-4 px-4 whitespace-nowrap">
							{awardee.company_representative_name}
						</td>
						<td className="py-4 px-4 whitespace-nowrap">{project_manager}</td>
						<td className="py-4 px-4 whitespace-nowrap">{date}</td>
						<td className="py-4 px-4 flex items-center justify-start gap-3">
							<span className="w-4 cursor-pointer" onClick={() => onDelete(id)}>
								<img className="w-full" src={Delete} alt="delete" />
							</span>
							<span className="w-4 cursor-pointer" onClick={() => onEdit(cur)}>
								<img className="w-full" src={Edit} alt="edit" />
							</span>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export function OverviewTitleCard({ name, value }) {
	return (
		<div className="bg-white rounded-lg border border-[#d8e1e4] flex flex-col items-center justify-center h-[104px]">
			<small className="text-gray-900 text-sm block">{name}</small>
			<p className="text-[#3b6979] text-xl font-extrabold">{value}</p>
		</div>
	);
}

export function Input(props) {
	const { placeholder, id, onChange, value } = props;
	return (
		<input
			className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
			name={id}
			placeholder={placeholder}
			type="text"
			value={value}
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

export function ProjectInfo({ values, errors, touched, handleChange }) {
	const [names, setNames] = useState([]);
	useEffect(() => {
		async function getProjectManager() {
			const { data: project_manager, error } = await supabase
				.from("project_manager")
				.select("first_name,last_name");
			if (project_manager) {
				setNames(project_manager);
			}
			return;
		}
		getProjectManager();
	}, []);

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
							<DashboardSelect {...project_manager}>
								{!names && <option>No project Manager</option>}
								<option>Select Project Manager</option>
								{names?.map((cur, id) => {
									return (
										<option
											value={`${cur.first_name}${cur.last_name}`}
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
	);
}

export function AwardeeInfo(props) {
	const [names, setNames] = useState([]);
	useEffect(() => {
		async function getProjectManager() {
			const { data: vendor, error } = await supabase.from("vendor").select("*");
			if (vendor) {
				setNames(vendor);
			}

			return;
		}
		getProjectManager();
	}, []);

	const { values, errors, touched, handleChange, index } = props.data;
	const awardee = {
		name: "Select Awardee involve in this project",
		id: `awardeeInfo.${index}.awardee`,
		placeholder: "Select Awardee involve in this project",
		onChange: handleChange,

		value: values.awardeeInfo[index].awardee,
		// error: errors?.awardeeInfo[index].awardee,
		touched: touched.awardee,
	};

	function filtered() {
		if (!names) {
			return;
		}
		return names.filter((cur, id) => {
			return cur.industry === values.awardeeInfo[index].awardee;
		});
	}

	const design_consultant = {
		name: "Select Design Consultant",
		id: `awardeeInfo.${index}.design_consultant`,
		placeholder: "Select Design Consultant",

		onChange: handleChange,
		value: values.awardeeInfo[index].design_consultant,
		error: errors.design_consultant,
		touched: touched.design_consultant,
	};
	const consultant_name = {
		name: "Consultant Name",
		id: `awardeeInfo.${index}.consultant_name`,
		placeholder: "Enter Consultant Name",
		onChange: handleChange,
		value: values.awardeeInfo[index].consultant_name,
		error: errors.consultant_name,
		touched: touched.consultant_name,
	};
	const consultant_address = {
		name: "Consultant Address",
		id: `awardeeInfo.${index}.consultant_address`,
		placeholder: "Enter Consultant Address",

		onChange: handleChange,
		value: values.awardeeInfo[index].consultant_address,
		error: errors.consultant_address,
		touched: touched.consultant_address,
	};

	const corporate_president = {
		name: "Corperate President",
		id: `awardeeInfo.${index}.corporate_president`,
		placeholder: "Enter Corperate President",
		onChange: handleChange,
		value: values.awardeeInfo[index].corporate_president,
		error: errors.corporate_president,
		touched: touched.corporate_president,
	};

	const corporate_secretary = {
		name: "Corperate Secretary",
		id: `awardeeInfo.${index}.corporate_secretary`,
		placeholder: "Enter Corperate Secretary",

		onChange: handleChange,
		value: values.awardeeInfo[index].corporate_secretary,
		error: errors.corporate_secretary,
		touched: touched.corporate_secretary,
	};

	useEffect(() => {
		if (!values.awardeeInfo[index].design_consultant) {
			return;
		}
		filtered()?.forEach((cur, id) => {
			console.log(cur);
			props.data.values.awardeeInfo[index].consultant_name =
				cur.first_name + "" + cur.last_name;
			props.data.values.awardeeInfo[index].consultant_address = cur.address;
			props.data.values.awardeeInfo[index].corporate_president = cur.president;
			props.data.values.awardeeInfo[index].corporate_secretary = cur.secretary;

			// return cur.company_name === values.awardeeInfo[index].design_consultant;
		});
	}, [values]);

	return (
		<div onClick={(e) => e.stopPropagation()}>
			<div className="">
				<div className="">
					<div className="w-full overflow-auto">
						<div>
							<DashboardSelect {...awardee}>
								<option>Select Awardee</option>
								<option value="Design Consultant">Design Consultant</option>
								<option value="Contractor">Contractor</option>
								<option value="Engineer">Engineer</option>
								<option value="Construction Manager">
									Construction Manager
								</option>
								<option value="Others">Others</option>
							</DashboardSelect>
						</div>
						<div>
							{/* <OverviewInput {...design_consultant} /> */}
							<DashboardSelect {...design_consultant}>
								<option>Select</option>
								{filtered()?.map((cur, id) => {
									return (
										<option key={id} value={cur.company_name}>
											{cur.company_name}
										</option>
									);
								})}
							</DashboardSelect>
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

export function CompanyRep({ data }) {
	const { values, handleChange, errors, touched, index } = data;

	const company_representative_name = {
		name: "Name",
		id: `awardeeInfo.${index}.company_representative_name`,
		placeholder: "Enter Representative Name",
		onChange: handleChange,
		value: values.awardeeInfo[index].company_representative_name,
		error: errors.company_representative_name,
		touched: touched.company_representative_name,
	};
	const company_representative_title = {
		name: "Title",
		id: `awardeeInfo.${index}.company_representative_title`,
		placeholder: "Enter Representative Title",

		onChange: handleChange,
		value: values.awardeeInfo[index].company_representative_title,
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
