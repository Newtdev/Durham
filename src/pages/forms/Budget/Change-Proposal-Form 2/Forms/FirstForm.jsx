import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	useFetchAllProjectManagerQuery,
	useFetchDurhamQuery,
} from "../../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate, { FormInputPlain, FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-to-Proceed/Forms";
import { closeModal } from "../../../reducer";

const AddNewRep = ({ props }) => {
	return (
		<div>
			<FormInputContainer name="">
				<label className="block mb-1 text-sm font-medium text-gray-900 ">
					Enter Name
				</label>
				<FormInputPlain
					type={"text"}
					onChange={(e) =>
						props.setFieldValue("signedContractPerson", e.target.value)
					}
					name="signedContractPerson"
					value={props?.values?.signedContractPerson}
					placeholder={"Enter Owner’s Representative Title"}
				/>
			</FormInputContainer>
			<FormInputContainer name="">
				<label className="block mb-1 text-sm font-medium text-gray-900 ">
					Enter Title
				</label>
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="position"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.position}
				/>
			</FormInputContainer>
		</div>
	);
};

const SelectDurham = ({ props, index }) => {
	const durham = useFetchDurhamQuery();
	const [durhamNames, setNames] = useState([]);
	const durhamProfile = durham?.currentData;

	useEffect(() => {
		if (!durhamProfile) {
			return;
		}

		const data = durhamProfile?.filter(
			(d) =>
				d.slug !== "construction_capital_planning_project_managers_phone_number"
		);

		setNames(data);
	}, [durhamProfile]);

	return (
		<>
			<FormSelect
				value={props.values?.signedContractPerson}
				name="Select the Owner's representative"
				id="signedContractPerson"
				error={props.errors.signedContractPerson}
				touched={props.touched.signedContractPerson}
				onChange={(e) => {
					props?.setFieldValue("signedContractPerson", e.target.value);
					props?.setFieldValue("position", e.target.selectedOptions[0].id);
				}}>
				{!props?.values?.signedContractPerson ? (
					<option value="">Select Durham Profile</option>
				) : (
					<option value={props?.values?.signedContractPerson}>
						{props?.values?.signedContractPerson}
					</option>
				)}
				{durhamNames?.map((dt, i) => {
					return (
						<option id={dt?.name} value={dt?.value}>
							{dt?.value}
						</option>
					);
				})}
			</FormSelect>

			<FormInputContainer name="">
				<label className="block my-2 text-sm font-medium text-gray-900 ">
					Enter Owner’s Representative Title
				</label>
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="position"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.position}
				/>
			</FormInputContainer>
		</>
	);
};
const SelectProjectManager = ({ props, index }) => {
	const projectManager = useFetchAllProjectManagerQuery({ queryValue: "" });
	const Profile = projectManager?.currentData?.data?.data;

	if (!Profile) {
		return;
	}
	return (
		<>
			<FormSelect
				value={props.values.signedContractPerson}
				name="Select the Owner's representative"
				id="signedContractPerson"
				error={props.errors.signedContractPerson}
				touched={props.touched.signedContractPerson}
				onChange={(e) => {
					props?.setFieldValue("signedContractPerson", e.target.value);
					props?.setFieldValue("position", "Project Manager");
				}}>
				{!props?.values?.signedContractPerson ? (
					<option value="">Select Project Manager</option>
				) : (
					<option value={props?.values?.signedContractPerson}>
						{props?.values?.signedContractPerson}
					</option>
				)}
				{Profile?.map((dt, i) => {
					return (
						<option
							value={`${dt?.first_name} ${dt?.last_name}`}>{`${dt?.first_name} ${dt?.last_name}`}</option>
					);
				})}
			</FormSelect>

			<FormInputContainer name="">
				<label className="block my-2 text-sm font-medium text-gray-900 ">
					Enter Owner’s Representative Title
				</label>
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="position"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.position}
				/>
			</FormInputContainer>
		</>
	);
};

const FirstForm = (props) => {
	const dispatch = useDispatch();

	const userType = {
		value: props.values?.userType,
		onChange: props.handleChange,
		id: "userType",
	};
	// const SignedPerson = {
	// 	value: props.values?.SignedPerson,
	// 	onChange: props.handleChange,
	// 	id: "SignedPerson",
	// };

	const affectedDate = {
		...props,
		value: props.values.affectedDate,
		onChange: props.handleChange,
		name: "affectedDate",
		error: props.errors.affectedDate,
		touched: props.touched.affectedDate,
		placeholder: "Affected Date",
	};
	const signedDate = {
		...props,
		value: props.values.signedDate,
		onChange: props.handleChange,
		name: "signedDate",
		error: props.errors.signedDate,
		touched: props.touched.signedDate,
		placeholder: "Date",
	};
	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							Change Proposal Form
						</h3>
						<p className="text-base text-gray-700">Project information</p>
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
				<hr />
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<div className="flex flex-col my-5">
							<label className="text-sm text-gray-900 mb-1">
								What type of contract is it?
							</label>
							<input
								value={props.values.contract}
								id="contract"
								onChange={props.handleChange}
								type="text"
								placeholder="Contract"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.contract && props.touched.contract && (
								<Error message={props.errors.contract} />
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label className="text-sm text-gray-900 mb-1">
								Enter the proposal number.
							</label>
							<input
								value={props.values.proposal}
								id="proposal"
								onChange={props.handleChange}
								type="text"
								placeholder="Proposal number"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.proposal && props.touched.proposal && (
								<Error message={props.errors.proposal} />
							)}
						</div>
						{/* <div className="flex flex-col mb-5">
							<label className="text-sm text-gray-900 my-1">
								Enter the contractor number.
							</label>
							<input
								value={props.values.contractor}
								id="contractor"
								onChange={props.handleChange}
								type="text"
								placeholder="Contractor number"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.contractor && props.touched.contractor && (
								<Error message={props.errors.contractor} />
							)}
						</div> */}
						<label className="text-sm text-gray-900 mb-1">
							Enter the number of days requested for time extensions and
							affected date.
						</label>
						<div className="flex items-center  gap-4 mb-2">
							<div className="flex-1 mb-4">
								<input
									value={props.values.numberDays}
									id="numberDays"
									onChange={props.handleChange}
									type="text"
									placeholder="Number of days"
									className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2.5 flex items-center "
								/>
								{props.errors.numberDays && props.touched.numberDays && (
									<Error message={props.errors.numberDays} />
								)}
							</div>
							<div className="flex-1">
								<FormInputContainer name="">
									<SelectDate {...affectedDate} />
									{props.errors.selectDate && props.touched.selectDate && (
										<Error message={props.errors.selectDate} />
									)}
								</FormInputContainer>
							</div>
						</div>
						<FormInputContainer name="">
							<label className="text-sm text-gray-900 mb-1">
								Select the Owner's representative Database
							</label>
							<FormSelect {...userType}>
								<option>Select Owner’s representative</option>
								<option value="Durham profile">
									Select from Durham profile
								</option>
								<option value="Project Managers">
									Select from Project Managers
								</option>
								<option value="Add New Owner’s Representative">
									Add New Owner’s Representative
								</option>
							</FormSelect>

							{props.errors.userType && props.touched.userType && (
								<Error message={props.errors.userType} />
							)}
						</FormInputContainer>
						{props?.values?.userType === "Durham profile" ? (
							<SelectDurham props={props} />
						) : null}
						{props?.values?.userType === "Project Managers" ? (
							<SelectProjectManager props={props} />
						) : null}
						{props?.values?.userType === "Add New Owner’s Representative" ? (
							<AddNewRep props={props} />
						) : null}

						{/* <FormInputContainer name="Select Owner’s Representative ">
							<FormSelect {...ChooseData}>
								<option>Select</option>
							</FormSelect> */}

						{/* {props.errors.select && props.touched.select && (
								<Error message={props.errors.select} />
							)} */}
						{/* </FormInputContainer> */}
						<FormInputContainer name="">
							<label className="text-sm text-gray-900 mb-1">
								When does the Owner's representative sign this form?
							</label>
							<SelectDate {...signedDate} />
							{props.errors.date && props.touched.date && (
								<Error message={props.errors.date} />
							)}
						</FormInputContainer>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(closeModal())}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default FirstForm;
