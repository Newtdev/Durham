import { FieldArray } from "formik";
import { Fragment, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate, {
	FormSelect,
	FormInputPlain,
	FormInput,
	FormTextArea,
} from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

import moment from "moment";
import {
	useFetchAllProjectManagerQuery,
	useFetchDurhamQuery,
	useFetchProjectManagerQuery,
} from "../../../../../features/services/api";
import { AddDate } from "../../Change order form/form/FormTwo";

const SelectDurham = ({ props }) => {
	const durham = useFetchDurhamQuery();
	const durhamProfile = durham?.currentData;
	if (!durhamProfile) {
		return null;
	}

	return (
		<>
			<label className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center">
				<input
					className="bg-gray-50 borde text-gray-900 text-sm rounded-sm focus:outline-none block w-full px-1 py-2"
					list="browsers"
					id="browser"
					type={"text"}
					onChange={props.handleChange}
					name={`name`}
					placeholder={"Select name"}
					value={props?.values?.name}
				/>
				{/* <Icon /> */}
			</label>

			<datalist id="browsers">
				{durhamProfile?.map((dt, i) => {
					return <option value={dt?.value}></option>;
				})}
			</datalist>
		</>
	);
};
const SelectProjectManager = ({ props }) => {
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
					onChange={props.handleChange}
					name={`name`}
					placeholder={"Select  name"}
					value={props?.values?.name}
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

const FormTwo = (props) => {
	const dispatch = useDispatch();

	const completionDate = {
		...props,
		value: props.values.completionDate,
		onChange: props.handleChange,
		name: "completionDate",
		error: props.errors.completionDate,
		touched: props.touched.completionDate,
		placeholder: "Select date",
		//    prevPage
	};

	const signDate = {
		...props,
		value: props.values.signDate,
		onChange: props.handleChange,
		name: "signDate",
		error: props.errors.signDate,
		touched: props.touched.signDate,
		placeholder: "Select date",
		//    prevPage
	};

	const approval = [
		{ value: "Approved", label: "Approved" },
		{ value: "Not Approved", label: "Not Approved" },
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
								Design Phase Change Order
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
										name="priorChangeDays"
										placeholder={"Enter Number of Days"}
										value={props?.values?.priorChangeDays}
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
										name="changeDays"
										placeholder={"Enter Number of Days"}
										value={props?.values?.changeDays}
									/>
									{props.errors.changeDays && props.touched.changeDays && (
										<Error message={props.errors.changeDays} />
									)}
								</FormInputContainer>
							</div>
						</div>

						<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
							<h2 className="text-sm font-medium">
								New contract completion date
							</h2>
							<span className="text-sm font-bold">
								{AddDate(
									props?.values?.completionDate,
									props?.values?.priorChangeDays,
									props?.values?.changeDays
								)}
							</span>
						</div>

						<div className="flex flex-col">
							<FormSelect
								value={props?.values?.persons}
								name="Select Owner Representative"
								id={`persons`}
								error={props.errors.persons}
								touched={props.touched.persons}
								onChange={props.handleChange}>
								{!props?.values?.persons ? (
									<option value="">Select</option>
								) : (
									<option value={props?.values?.persons}>
										{props?.values?.persons}
									</option>
								)}
								{database?.map((database, index) => {
									return (
										<option key={index} value={database?.value}>
											{database?.label}
										</option>
									);
								})}
							</FormSelect>
							<br />

							<FormInputContainer name="Name">
								{props?.values?.persons === "Durham Profile" ? (
									<SelectDurham props={props} />
								) : null}
								{props?.values?.persons === "Project Manager" ? (
									<SelectProjectManager props={props} />
								) : null}

								{props?.values?.persons === "Add New" ? (
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name={`name`}
										value={props?.values?.name}
										placeholder={"Name"}
									/>
								) : null}

								{props.errors.name && props.touched.name && (
									<Error message={props.errors.name} />
								)}
							</FormInputContainer>
						</div>

						<FormInputContainer name="When does the project manager sign this form?">
							<SelectDate {...signDate} />
							{props.errors.signDate && props.touched.signDate && (
								<Error message={props.errors.signDate} />
							)}
						</FormInputContainer>
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
