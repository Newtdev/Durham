import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import {
	useFetchVendorsQuery,
} from "../../../features/services/api";
import { Label, Error, Textarea } from "../../../ui";
import { saveID, saveVendorID } from "../add-project/reducer";
import { projectData } from "./editReducer";

export function OverviewTableBody({ dataArray, onDelete, onEdit }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<tbody className="text-xs text-[#000000] bg-white font-medium">
			{dataArray?.map((project, index) => {
				const {id, name, project_manager, project_vendors, created_At,slug } = project;
				const awardee = !project_vendors.length === 0 ? 'hello' : project_vendors[0];

		const strip = index % 2 !== 0 ? "bg-white" : "bg-gray-50";
				return (
					<tr
						key={id}
						className={`${strip} border-b cursor-pointer`}
						onClick={() => {
							dispatch(saveID(id))
					navigate(`/dashboard/project-details/${slug}`)
						}}>
						<td className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap">
							{name}
						</td>
						<td className="py-4 px-4">{!awardee? '' :awardee.company_name}</td>
						<td className="py-4 px-4 whitespace-nowrap">
							{!awardee? '' :awardee.first_name + ' ' + awardee.last_name}
						</td>
						<td className="py-4 px-4 whitespace-nowrap">{project_manager.first_name + ' ' + project_manager.last_name}</td>
						<td className="py-4 px-4 whitespace-nowrap">{moment(created_At).format('MMM DD, YYYY')}</td>
						<td className="py-4 px-4 flex items-center justify-start gap-3">
							<span className="w-4 cursor-pointer" onClick={(e) => {
								e.stopPropagation()
								onDelete(id)
							}}>
								<img className="w-full" src={Delete} alt="delete" />
							</span>
							<span className="w-4 cursor-pointer" onClick={(e) => {
								e.stopPropagation()
								onEdit(project)
							}}>
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



export function AwardeeInfo(props) {
	const response = useFetchVendorsQuery();
	const dispatch = useDispatch()
	// const details = useSelector(projectData);

	// design_consultant: "",
	const { values, errors, touched, handleChange, index } = props.data;
	const awardee = {
		name: "Select Awardee involve in this project",
		id: `project_vendors.${index}.industry`,
		placeholder: "Select Awardee involve in this project",
		onChange: handleChange,

		value: values.project_vendors[index].industry,
		touched: touched.industry,
	};

	function filtered() {
		if (!response?.data?.data?.data) {
			return;
		}
		return response?.data?.data?.data.filter((cur) => {
			return cur.industry === values.project_vendors[index].industry;
		});
	}

	const design_consultant = {
		name: `Select ${values.project_vendors[index].industry}`,
		id: `project_vendors.${index}.company_name`,
		placeholder: `Select ${values.project_vendors[index].industry}`,

		onChange: handleChange,
		value: values.project_vendors[index].company_name,
		error: errors.company_name,
		touched: touched.company_name,
	};
	const consultant_name = {
		name: "Consultant Name",
		id: `project_vendors.${index}.company_name`,
		placeholder: "Enter Consultant Name",
		onChange: handleChange,
		value: values.project_vendors[index].company_name,
		error: errors.company_name,
		touched: touched.company_name,
	};
	const consultant_address = {
		name: "Consultant Address",
		id: `project_vendors.${index}.address`,
		placeholder: "Enter Consultant Address",

		onChange: handleChange,
		value: values.project_vendors[index].address,
		error: errors.address,
		touched: touched.address,
	};

	const corporate_president = {
		name: "Corperate President",
		id: `project_vendors.${index}.president`,
		placeholder: "Enter Corperate President",
		onChange: handleChange,
		value: values.project_vendors[index].president,
		error: errors.president,
		touched: touched.president,
	};

	const corporate_secretary = {
		name: "Corperate Secretary",
		id: `project_vendors.${index}.corporate_secretary`,
		placeholder: "Enter Corperate Secretary",

		onChange: handleChange,
		value: values.project_vendors[index].secretary,
		error: errors.secretary,
		touched: touched.secretary,
	};

	useEffect(() => {
		if (!values.project_vendors[index].company_name) {
			return;
		} else {
			filtered()?.forEach((cur, id) => {
				if (values.project_vendors[index].company_name === cur.company_name) {
					dispatch(saveVendorID(cur.id))
					props.data.values.project_vendors[index].first_name =
					cur?.first_name + " " + cur?.last_name;
				props.data.values.project_vendors[index].title =
					cur?.title;
				props.data.values.project_vendors[index].company_name =
					cur?.company_name;
				props.data.values.project_vendors[index].address = cur?.address;
				props.data.values.project_vendors[index].president =
					cur?.president;
				props.data.values.project_vendors[index].secretary =
						cur?.secretary;
				}
				// else {

				// 	props.data.values.project_vendors[index].first_name =
				// 		cur?.first_name + " " + cur?.last_name;
				// 	props.data.values.project_vendors[index].title =
				// 		cur?.title;
				// 	props.data.values.project_vendors[index].company_name =
				// 		cur?.company_name;
				// 	props.data.values.project_vendors[index].address = cur?.address;
				// 	props.data.values.project_vendors[index].president =
				// 		cur?.president;
				// 	props.data.values.project_vendors[index].secretary =
				// 			cur?.secretary;
				// 		}
					});
			
		}
	}, [values.project_vendors]);



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
								<option value="Engineering">Engineering</option>
								<option value="Construction Manager">
									Construction Manager
								</option>
								<option value="Others">Others</option>
							</DashboardSelect>
						</div>
						<div>
							{/* <OverviewInput {...design_consultant} /> */}
							<DashboardSelect {...design_consultant}>
								{/* {design_consultant.value && <option value={design_consultant.value}>{design_consultant.value}</option>} */}
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
		id: `project_vendors.${index}.first_name`,
		placeholder: "Enter Representative Name",
		onChange: handleChange,
		value: values.project_vendors[index].first_name,
		error: errors.first_name,
		touched: touched.first_name,
	};
	const company_representative_title = {
		name: "Title",
		id: `project_vendors.${index}.company_representative_title`,
		placeholder: "Enter Representative Title",

		onChange: handleChange,
		value: values.project_vendors[index].title,
		error: errors.title,
		touched: touched.title,
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
		<div className="mb-4 w-full">
			<Label
				name={name}
				styles="block mb-2 text-sm font-medium text-gray-900"
			/>

			<select
				onChange={onChange}
				className=" cursor-pointer bg-white border border-gray-400 text-gray-900 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
				name={id}
				type="text"
				value={values}>
				{children}
			</select>
			{error && touched && <Error message={error} />}
		</div>
	);
}
