import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate, { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-to-Proceed/Forms";
import { closeModal } from "../../../reducer";

const SecondForm = (props) => {
	const dispatch = useDispatch();

	const userTypeChange = {
		value: props.values.userTypeChange,
		onChange: props.handleChange,
		id: "userTypeChange",
	};
	const selectChange = {
		value: props.values.selectChange,
		onChange: props.handleChange,
		id: "selectChange",
	};

	const selectDateChange = {
		...props,
		value: props.values.selectDateChange,
		onChange: props.handleChange,
		name: "selectDateChange",
		error: props.errors.selectDateChange,
		touched: props.touched.selectDateChange,
		placeholder: "Affected Date",
	};
	const dateChange = {
		...props,
		value: props.values.dateChange,
		onChange: props.handleChange,
		name: "dateChange",
		error: props.errors.dateChange,
		touched: props.touched.dateChange,
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
						<p className="text-base text-gray-700">Description of change</p>
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
							<label className="text-base text-gray-900 mb-1">
								What type of contract is it?
							</label>
							<input
								value={props.values.contractChange}
								id="contractChange"
								onChange={props.handleChange}
								type="text"
								placeholder="Contract"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.contractChange && props.touched.contractChange && (
								<Error message={props.errors.contractChange} />
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label className="text-base text-gray-900 mb-1">
								Enter the proposal number.
							</label>
							<input
								value={props.values.proposalChange}
								id="proposalChange"
								onChange={props.handleChange}
								type="text"
								placeholder="Proposal number"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.proposalChange && props.touched.proposalChange && (
								<Error message={props.errors.proposalChange} />
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label className="text-base text-gray-900 my-1">
								Enter the contractor number.
							</label>
							<input
								value={props.values.contractorChange}
								id="contractorChange"
								onChange={props.handleChange}
								type="text"
								placeholder="Contractor number"
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.contractorChange &&
								props.touched.contractorChange && (
									<Error message={props.errors.contractorChange} />
								)}
						</div>
						<label className="text-base text-gray-900 mb-1">
							Enter the number of days requested for time extensions and
							affected dateChange.
						</label>
						<div className="flex gap-2 mb-5">
							<div className="flex-1">
								<input
									value={props.values.numberDaysChange}
									id="numberDaysChange"
									onChange={props.handleChange}
									type="text"
									placeholder="Number of days"
									className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
								/>
								{props.errors.numberDaysChange &&
									props.touched.numberDaysChange && (
										<Error message={props.errors.numberDaysChange} />
									)}
							</div>
							<div className="flex-1">
								<FormInputContainer name="">
									<SelectDate {...selectDateChange} />
									{props.errors.selectDateChange &&
										props.touched.selectDateChange && (
											<Error message={props.errors.selectDateChange} />
										)}
								</FormInputContainer>
							</div>
						</div>
						<FormInputContainer name="Select the Owner's representative Database">
							<FormSelect {...userTypeChange}>
								<option>Select Owner’s representative</option>
								<option value="Select from Durham profile">
									Select from Durham profile
								</option>
								<option value="Select from Project Managers">
									Select from Project Managers
								</option>
								<option value="Add New Owner’s Representative">
									Add New Owner’s Representative
								</option>
							</FormSelect>

							{props.errors.userTypeChange && props.touched.userTypeChange && (
								<Error message={props.errors.userTypeChange} />
							)}
						</FormInputContainer>
						<FormInputContainer name="Select Owner’s Representative ">
							<FormSelect {...selectChange}>
								<option>Select</option>
							</FormSelect>

							{props.errors.selectChange && props.touched.selectChange && (
								<Error message={props.errors.selectChange} />
							)}
						</FormInputContainer>
						<FormInputContainer name="When does the Owner's representative sign this form?">
							<SelectDate {...dateChange} />
							{props.errors.dateChange && props.touched.dateChange && (
								<Error message={props.errors.dateChange} />
							)}
						</FormInputContainer>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(closeModal(1))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default SecondForm;
