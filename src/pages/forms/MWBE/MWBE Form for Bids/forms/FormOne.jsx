import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormSelect } from "../../../components";
import {
	useFetchAllProjectManagerQuery,
	useFetchDurhamQuery,
	useGetAllProjectManagerQuery,
} from "../../../../../features/services/api";
import { useState } from "react";
import { useEffect } from "react";

const AddNewRep = (props) => {
	return (
		<div>
			<FormInputContainer name="Enter Name">
				<FormInputPlain
					type={"text"}
					onChange={props.handleChange}
					name="ownerRepName"
					placeholder={"Enter Owner’s Representative Title"}
				/>
			</FormInputContainer>
			<FormInputContainer name="Enter Owner’s Representative Title">
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="ownerRepTitle"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.ownerRepTitle}
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
				value={props.values?.ownerRepName}
				name="Select the Owner's representative"
				id="ownerRepName"
				error={props.errors.ownerRepName}
				touched={props.touched.ownerRepName}
				onChange={(e) => {
					props?.setFieldValue("ownerRepName", e.target.value);
					props?.setFieldValue("ownerRepTitle", e.target.selectedOptions[0].id);
				}}>
				{!props?.values?.ownerRepName ? (
					<option value="">Select Durham Profile</option>
				) : (
					<option value={props?.values?.ownerRepName}>
						{props?.values?.ownerRepName}
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

			<FormInputContainer name="Enter Owner’s Representative Title">
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="ownerRepTitle"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.ownerRepTitle}
				/>
			</FormInputContainer>
		</>
	);
};
const SelectProjectManager = ({ props, index }) => {
	const projectManager = useGetAllProjectManagerQuery({ queryValue: "" });
	const Profile = projectManager?.currentData?.data?.data;

	if (!Profile) {
		return;
	}
	return (
		<>
			<FormSelect
				value={props.values.ownerRepName}
				name="Select the Owner's representative"
				id="ownerRepName"
				error={props.errors.ownerRepName}
				touched={props.touched.ownerRepName}
				onChange={(e) => {
					props?.setFieldValue("ownerRepName", e.target.value);
					props?.setFieldValue("ownerRepTitle", "Project Manager");
				}}>
				{!props?.values?.ownerRepName ? (
					<option value="">Select Project Manager</option>
				) : (
					<option value={props?.values?.ownerRepName}>
						{props?.values?.ownerRepName}
					</option>
				)}
				{Profile?.map((dt, i) => {
					return (
						<option
							value={`${dt?.first_name} ${dt?.last_name}`}>{`${dt?.first_name} ${dt?.last_name}`}</option>
					);
				})}
			</FormSelect>

			<FormInputContainer name="Enter Owner’s Representative Title">
				<FormInputPlain
					type={"text"}
					onChange={props?.handleChange}
					name="ownerRepTitle"
					placeholder={"Enter Owner’s Representative Title"}
					value={props?.values?.ownerRepTitle}
				/>
			</FormInputContainer>
		</>
	);
};

const FormOne = (props) => {
	const dispatch = useDispatch();

	const ownerRepDate = {
		...props,
		value: props.values.ownerRepDate,
		onChange: props.handleChange,
		name: "ownerRepDate",
		error: props.errors.ownerRepDate,
		touched: props.touched.ownerRepDate,
		placeholder: "Select date",
		//    prevPage
	};

	const ownerRepDBs = [
		{ name: "Durham profile" },
		{ name: "Project Managers" },
		{ name: "Add New Owner’s Representative" },
	];

	return (
		<div>
			<div
				className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}
				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex items-baseline justify-between mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								MWBE Form for Bids
							</h3>
							<p className="text-base text-gray-700">Section I</p>
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
						<div className="bg-[#2F5461] h-2.5 w-1/2"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormSelect
								value={props.values.chooseData}
								name="Select the Owner's representative Database"
								id="chooseData"
								error={props.errors.chooseData}
								touched={props.touched.chooseData}
								onChange={props.handleChange}>
								<option value="">
									Select the Owner's representative Database
								</option>
								{ownerRepDBs?.map((chooseData, index) => {
									return (
										<option key={index} value={chooseData.name}>
											{chooseData.name}
										</option>
									);
								})}
							</FormSelect>
							{props?.values?.chooseData === "Project Managers" ? (
								<SelectProjectManager props={props} />
							) : null}
							{props?.values?.chooseData === "Durham profile" ? (
								<SelectDurham props={props} />
							) : null}
							{props?.values?.chooseData ===
							"Add New Owner’s Representative" ? (
								<AddNewRep props={props} />
							) : null}

							<FormInputContainer name="When will the Owner's representative sign this Form?">
								<SelectDate {...ownerRepDate} />
								{props.errors.ownerRepDate && props.touched.ownerRepDate && (
									<Error message={props.errors.ownerRepDate} />
								)}
							</FormInputContainer>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Cancel"
							onClick={() => dispatch(closeModal())}
						/>
						<DashboardButton
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

export default FormOne;
