import { FieldArray } from "formik";
import { Fragment, useMemo } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate, { FormSelect, FormInputPlain } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

import moment from "moment";
import {
	useFetchAllProjectManagerQuery,
	useFetchDurhamQuery,
} from "../../../../../features/services/api";

const SelectDurham = ({ props, index }) => {
	const durham = useFetchDurhamQuery();
	const durhamProfile = durham?.currentData;
	if (!durhamProfile) {
		return null;
	}

	return (
		<>
			<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
				<select
					className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-2"
					list="browsers"
					type={"text"}
					onChange={(e) => {
						props?.setFieldValue(`persons[${index}].name`, e.target.value);
						props?.setFieldValue(
							`persons[${index}].position`,
							e.target.selectedOptions[0].id
						);
					}}
					name={`persons[${index}].name`}
					placeholder={"Select name"}
					value={props?.values?.persons?.[index].name}>
					{[
						...durhamProfile?.filter(
							(cur) =>
								cur.slug !==
								"construction_capital_planning_project_managers_phone_number"
						),
					]?.map((dt, i) => {
						return (
							<option id={dt.name} value={dt?.value}>
								{dt.value}
							</option>
						);
					})}
				</select>
				{/* <Icon /> */}
			</label>

			{/* <datalist id="browsers" onChange={(e) => console.log(e)}>
				
			</datalist> */}
		</>
	);
};
const SelectProjectManager = ({ props, index }) => {
	const projectManager = useFetchAllProjectManagerQuery({ queryValue: "" });
	const Profile = projectManager?.currentData?.data?.data;

	if (!Profile) {
		return null;
	}
	return (
		<>
			<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
				<input
					className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-2"
					list="name"
					id="browser"
					type={"text"}
					onChange={(e) => {
						props?.setFieldValue(
							`persons[${index}].position`,
							"Project manager"
						);
						props?.setFieldValue(`persons[${index}].name`, e.target.value);
					}}
					name={`persons[${index}].name`}
					placeholder={"Select name"}
					value={props?.values?.persons?.[index].name}
				/>
				{/* <Icon /> */}
			</label>

			<datalist id="name">
				{Profile?.map((dt, i) => {
					return <option value={`${dt?.first_name} ${dt?.last_name}`}></option>;
				})}
			</datalist>
		</>
	);
};

export const AddDate = (a, b, c) => {
	return useMemo(() => {
		if (!a || !b || !c) {
			return "";
		}

		if (c) {
			let sum = Number(b) + Number(c);
			return moment(a).add(sum, "days").format("MMMM D, YYYY");
		}
	}, [a, b, c]);
};

const FormTwo = (props) => {
	const dispatch = useDispatch();

	const completionDate = {
		...props,
		value: props.values.orderCompletionDate,
		onChange: props.handleChange,
		name: "orderCompletionDate",
		error: props.errors.orderCompletionDate,
		touched: props.touched.orderCompletionDate,
		placeholder: "Select date",
		//    prevPage
	};

	const signDate = {
		...props,
		value: props.values.orderSignDate,
		onChange: props.handleChange,
		name: "orderSignDate",
		error: props.errors.orderSignDate,
		touched: props.touched.orderSignDate,
		placeholder: "Select date",
		//    prevPage
	};

	const approval = [
		{ value: "Yes", label: "Yes" },
		{ value: "No ", label: "No" },
	];

	const database = [
		{ value: "Durham Profile", label: "Select from Durham Profile" },
		{ value: "Project Manager", label: "Select from Project Manager Database" },
		{ value: "Add New", label: "Add New" },
	];

	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}

				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								Change Order Form
							</h3>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					{/* Progress */}
					<div className="w-full bg-[#89A5AF] h-2.5 my-4">
						<div className="bg-[#2F5461] h-2.5 w-full"></div>
					</div>

					{/* form */}
					<div className="flex flex-col gap-2 mx-6 mb-12">
						<div className="flex flex-col p-2 border rounded-lg border-[#D1D5DB]">
							<h2 className="font-semibold border-b pb-1 border-[#D1D5DB]">
								Enter the following changes to the contract time.
							</h2>
							<div className="flex flex-col pt-3 gap-2">
								<FormInputContainer name="Original Contract Substantial Completion Date">
									<SelectDate {...completionDate} />
									{props.errors.completionDate &&
										props.touched.completionDate && (
											<Error message={props.errors.completionDate} />
										)}
								</FormInputContainer>

								<FormInputContainer name="Days Added by Prior Change Order(s)">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="orderPriorChangeDays"
										placeholder={"Enter Number of Days"}
										value={props?.values?.orderPriorChangeDays}
									/>
									{props.errors.priorChangeDays &&
										props.touched.priorChangeDays && (
											<Error message={props.errors.priorChangeDays} />
										)}
								</FormInputContainer>

								<FormInputContainer name="Number of Days Added by this Change Order ">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="orderChangeDays"
										placeholder={"Enter Number of Days"}
										value={props?.values?.orderChangeDays}
									/>
									{props.errors.changeDays && props.touched.changeDays && (
										<Error message={props.errors.changeDays} />
									)}
								</FormInputContainer>
							</div>
						</div>

						<div className="flex flex-col w-full mb-2 bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
							<h2 className="text-sm font-medium">
								New contract completion date
							</h2>
							<span className="text-sm font-bold">
								{AddDate(
									props?.values?.orderCompletionDate,
									props?.values?.orderPriorChangeDays,
									props?.values?.orderChangeDays
								)}
							</span>
						</div>

						<FormSelect
							value={props?.values?.orderApproval}
							name="Does this form require the approval of the design consultant?"
							id="orderApproval"
							error={props.errors.orderApproval}
							touched={props.touched.orderApproval}
							onChange={props.handleChange}>
							{!props?.values?.orderApproval ? (
								<option>select</option>
							) : (
								<option value={props?.values?.orderApproval}>
									{props?.values?.orderApproval}
								</option>
							)}
							{approval?.map((approval, index) => {
								return (
									<option key={index} value={approval.value}>
										{approval.label}
									</option>
								);
							})}
						</FormSelect>

						<FieldArray
							name="persons"
							render={({ remove, push }) => (
								<>
									<div className="flex flex-col gap-2 mt-5">
										{props?.values?.persons?.map((person, index) => (
											<Fragment key={index}>
												<div className="flex flex-col w-full">
													<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
														<h2 className="font-bold ml-1">
															New approval person {index + 1}
														</h2>
														<button
															disabled={index === 0 ? true : false}
															onClick={() => remove(index)}
															type="button"
															className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
															data-modal-toggle="small-modal">
															<Close />
														</button>
													</div>
													<div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
														<FormSelect
															value={props?.values?.persons[index].database}
															name="Select database"
															id={`persons[${index}].database`}
															error={props.errors.database}
															touched={props.touched.database}
															onChange={props.handleChange}>
															{!props?.values?.persons[index].database ? (
																<option value="">Select</option>
															) : (
																<option
																	value={
																		props?.values?.persons[index].database
																	}>
																	{props?.values?.persons[index].database}
																</option>
															)}
															<option value="">Select</option>
															{database?.map((database, index) => {
																return (
																	<option key={index} value={database.value}>
																		{database.label}
																	</option>
																);
															})}
														</FormSelect>
														<br />

														<FormInputContainer name="">
															{props?.values?.persons?.[index].database ===
															"Durham Profile" ? (
																<SelectDurham props={props} index={index} />
															) : null}
															{props?.values?.persons?.[index].database ===
															"Project Manager" ? (
																<SelectProjectManager
																	props={props}
																	index={index}
																/>
															) : null}

															{props?.values?.persons?.[index].database ===
															"Add New" ? (
																<FormInputPlain
																	type={"text"}
																	onChange={props.handleChange}
																	name={`persons[${index}].name`}
																	value={props?.values?.persons?.[index].name}
																	placeholder={"Name"}
																/>
															) : null}
															{props.errors.amount && props.touched.amount && (
																<Error message={props.errors.amount} />
															)}

															{props.errors.name && props.touched.name && (
																<Error message={props.errors.name} />
															)}
														</FormInputContainer>
													</div>
												</div>
											</Fragment>
										))}
										<div className="mt-4">
											<button
												className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
												type="button"
												disabled={
													props?.values?.persons?.length === 3 ? true : false
												}
												onClick={() =>
													push({
														database: "",
														name: "",
													})
												}>
												ADD NEW A PERSON FOR APPROVAL
											</button>
										</div>
									</div>
								</>
							)}></FieldArray>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Back"
							onClick={() => dispatch(prevStep(1))}
						/>
						<DashboardButton
							loading={props.isLoading}
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormTwo;
