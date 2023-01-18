import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import {
	useFetchVendorsQuery,
} from "../../../features/services/api";
import { Label, Error, Textarea } from "../../../ui";
import { getList, getStates } from "../../forms/Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../forms/Notice-of-intent-consultant/Forms";
import { saveID, saveVendorID } from "../add-project/reducer";

export function OverviewTableBody({ dataArray, onDelete, onEdit }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();


	return (
		<tbody className="text-xs text-[#000000] bg-white font-medium">
			{dataArray?.map((project, index) => {
				const {id, name, project_manager, project_vendors, created_at,slug } = project;
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
						<td className="py-4 px-4 whitespace-nowrap">{moment(created_at).format('MMM DD, YYYY')}</td>
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
	const { placeholder, id, onChange, value, disabled } = props;
	return (
		<input
			disabled={disabled}
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
	const response = useFetchVendorsQuery({queryValue:''});
	const dispatch = useDispatch();
	const states = useSelector(getList);
	const [toFilter, setFilter] = useState(false)
		// const details = useSelector(projectData);

	// role: "",
	const { values, errors, touched, handleChange, index, setFieldValue, } = props.data;
	const projectError = (errors.project_vendors?.length && errors.project_vendors[index]) || {};
	const projectTouched = (touched.project_vendors?.length && touched.project_vendors[index]) || {};
	
	// let err = errors.project_vendors
	// console.log(err)
	const awardee = {
		name: "Select Awardee involve in this project",
		id: `project_vendors.${index}.role`,
		placeholder: "Select Awardee involve in this project",
		onChange: handleChange,
		error:projectError.role ,
		touched:projectTouched.role,
		value: values.project_vendors[index].role,
	};

	useEffect(() => {
        (async function () {
          const response = await (await fetch('/states.json')).json();
          dispatch(getStates(response))
    
        }())
      }, [dispatch]);

	function filtered() {
		if (!response?.data?.data?.data) {
			return [];
		}
		return response?.data?.data?.data;
	}
	const consultant_name = {
		name: "Company Name",
		id: `project_vendors.${index}.company_name`,
		placeholder: "Enter Consultant Name",
		onChange: handleChange,
		value: values.project_vendors[index].company_name,
		// disabled:!values.project_vendors[index].role ? true : false,
		error:projectError.company_name,
		touched:projectTouched.company_name,
	};
	const consultant_address = {
		name: "Company Address",
		id: `project_vendors.${index}.street`,
		placeholder: "Street",
		disabled:!values.project_vendors[index].company_name? true : false,
		onChange: handleChange,
		value: values.project_vendors[index].street,
		error:projectError.street && 'Field is required',
		touched:projectTouched.street,
	};

	const corporate_president = {
		name: "Awardee President",
		id: `project_vendors.${index}.president`,
		placeholder: "Enter Awardee President",
		onChange: handleChange,
		disabled:!values.project_vendors[index].company_name? true : false,
		value: values.project_vendors[index].president,
		error:projectError.president,
		touched:projectTouched.president,
	};

	const corporate_secretary = {
		name: "Awardee Secretary",
		id: `project_vendors.${index}.secretary`,
		placeholder: "Enter Awardee Secretary",
		disabled:!values.project_vendors[index].company_name? true : false,

		onChange: handleChange,
		value: values.project_vendors[index].secretary,
		error:projectError.secretary,
		touched:projectTouched.secretary,
	};
	function CheckState() {
        if (!values.project_vendors[index].state) {
            return;
        }
        let stat = Object.values(states)?.find((state) => state.name === values.project_vendors[index].state);
        return !stat? '': Object.keys(stat.cities)?.map((cur, id) => {

         return <option key={id} value={cur}>{cur}</option>
        })
    };

	function CheckZipCode() {
        if (!values.project_vendors[index].city) {
            return;
        }
		const city = !states ? '' : Object.values(states)?.filter((state) => state.name === values.project_vendors[index].state)
		
		const zipcode = city?.find((cities) => cities);
		
        return zipcode?.cities[values?.project_vendors[index]?.city]?.map((zipcode, index) => {
            return <option key={index} value={zipcode}>{zipcode}</option>
        })



	};
	
	const filterData = () => {
		if (!toFilter) {
			return null
		}
		filtered().forEach((cur, id) => {
			if (values.project_vendors[index].company_name === cur.company_name) {
				// setFieldValue(`	props.data.values.project_vendors[index].first_name`, 'Jahn')
				props.data.values.project_vendors[index].first_name =
					cur?.first_name
				props.data.values.project_vendors[index].last_name =
					cur?.last_name
					
				props.data.values.project_vendors[index].title =
					cur?.title;
				props.data.values.project_vendors[index].company_name =
					cur?.company_name;
				props.data.values.project_vendors[index].street = cur?.street;
				props.data.values.project_vendors[index].state = cur?.state;
				props.data.values.project_vendors[index].city = cur?.city;
				props.data.values.project_vendors[index].zip_code = cur?.zip_code;
				props.data.values.project_vendors[index].president =
					cur?.president;
				props.data.values.project_vendors[index].secretary =
					cur?.secretary;
			}
		})
	}

	useEffect(() => {
		// console.log(values.project_vendors[index].company_name)
		if (!values.project_vendors[index].company_name) {
			return;
		} else {
			
			 
			filterData()
			
		}
	// }, [values.project_vendors,filtered,index,props.data.values.project_vendors]);
	}, [props.data.values.project_vendors,index]);

	
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<div className="">
				<div className="">
					<div className="w-full overflow-auto">
						<div>
							<DashboardSelect {...awardee}>
								<option value={awardee.value && awardee.value}>{!awardee.value? 'Select Awardee' :awardee.value}</option>
								<option value="Design Consultant">Design Consultant</option>
								<option value="Contractor">Contractor</option>
								<option value="Engineering">Engineering</option>
								<option value="Construction Manager">
									Construction Manager
								</option>
							
							</DashboardSelect>
						</div>
						<div>
							{/* <OverviewInput {...design_consultant} /> */}
							
							<FormInputContainer name={`Search ${values.project_vendors[index].role}`} >
								<input list="consultant"
									onFocus={(e) => setFilter(true)}
									id={`project_vendors.${index}.company_name`}
									name={`project_vendors.${index}.company_name`}
									value={values.project_vendors[index].company_name}
									onChange={(e) => {
										if (e.target.value === 'Add New Vendor') {
											setFieldValue(`project_vendors.${index}.type`, 'new')
											setFieldValue(`project_vendors.${index}.company_name`, '')
										} else {
											setFieldValue(`project_vendors.${index}.company_name`, e.target.value)
											setFieldValue(`project_vendors.${index}.type`, 'old')
				
										}

									}}
									placeholder={`Search ${values.project_vendors[index].role}`} className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}
									disabled={!values.project_vendors[index].role ? true : false}

								
								/>
								{}
								<datalist id="consultant">
									{[...filtered(), { id: 'new-vendor', company_name: 'Add New Vendor' }]?.map((cur, id) => {
										return <option key={cur.id} value={cur.company_name}>{cur.consultant_name}</option>
									})}
									
							</datalist>
							{/* {projectError.company_name && projectTouched.company_name && <Error message={'Field is required'} />} */}

                        
						</FormInputContainer>
						</div>
						<div>
							<OverviewInput {...consultant_name} />
						</div>
						<div>
							<OverviewInput {...consultant_address} />
						</div>
						<FormInputContainer name='Select State'>
							<input list="states" id={`project_vendors.${index}.state`} name={`project_vendors.${index}.state`} value={values.project_vendors[index].state} onChange={handleChange}
								disabled={!values.project_vendors[index].company_name ? true : false}
								placeholder='Select State' className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`}  />
							<datalist id="states">
							{!states ? null : Object.entries(states).map((cur, index) => { 
							return <option key={index} value={cur[1].name}>{cur[1].name}</option> })}
							</datalist>
							{projectError.state && projectTouched.state && <Error message={'Field is required'} />}

                        
						</FormInputContainer>

						<FormInputContainer name='Select City'>
							<input list="city" id={`project_vendors.${index}.city`} name={`project_vendors.${index}.city`} value={values.project_vendors[index].city} onChange={handleChange} className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2`} placeholder='Select City' disabled={!values.project_vendors[index].company_name ? true : false} />
							<datalist id="city">
							{CheckState()}
							
							</datalist>
							{projectError.city && projectTouched.city && <Error message={'Field is required'} />}
                        
						</FormInputContainer>

						<FormInputContainer name='Select Zip code'>
							<input list="zip_code" id={`project_vendors.${index}.zip_code`} name={`project_vendors.${index}.zip_code`} value={values.project_vendors[index].zip_code} onChange={handleChange} className={`bg-white border border-gray-400 text-gray-500 text-sm rounded focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2 `} placeholder='Select Zip Code' disabled={!values.project_vendors[index].company_name ? true : false}/>
							<datalist id="zip_code">
								{CheckZipCode()}
							
							</datalist>
								{projectError.zip_code && projectTouched.zip_code && <Error message={'Field is required'} />}
						</FormInputContainer>
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
	const projectError =( errors.project_vendors?.length && errors.project_vendors[index]) || {};
	const projectTouched = (touched.project_vendors?.length && touched.project_vendors[index] )|| {};

	const company_representative_name = {
		name: "First Name",
		id: `project_vendors.${index}.first_name`,
		placeholder: "Enter Representative First Name",
		onChange: handleChange,
		value: values.project_vendors[index].first_name,
		error: projectError.first_name,
		touched: projectTouched.first_name,
	};
	const company_representative_last_name = {
		name: "Last Name",
		id: `project_vendors.${index}.last_name`,
		placeholder: "Enter Representative Last Name",
		onChange: handleChange,
		value: values.project_vendors[index].last_name,
		error: projectError.last_name,
		touched: projectTouched.last_name,
	};
	const company_representative_title = {
		name: "Title",
		id: `project_vendors.${index}.company_representative_title`,
		placeholder: "Enter Representative Title",

		onChange: handleChange,
		value: values.project_vendors[index].title,
		error: projectError.title,
		touched: projectTouched.title,
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
							<OverviewInput {...company_representative_last_name} />
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
	const { id, value, children, onChange, name, error, touched } = props;
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
				value={value}>
				{children}
			</select>
			{error && touched && <Error message={error} />}
		</div>
	)
}
