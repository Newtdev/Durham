import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate, { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-to-Proceed/Forms";
import { closeModal } from "../../../reducer";

const FirstForm = (props) => {
	const dispatch = useDispatch();

	const userType = {
		value: props.values.userType,
		onChange: props.handleChange,
		id: "userType",
	};
	const select = {
		value: props.values.select,
		onChange: props.handleChange,
		id: "select",
	};

	const selectDate = {
		...props,
		value: props.values.selectDate,
		onChange: props.handleChange,
		name: "selectDate",
		error: props.errors.selectDate,
		touched: props.touched.selectDate,
		placeholder: "Affected Date",
	};
	const date = {
		...props,
		value: props.values.date,
		onChange: props.handleChange,
		name: "date",
		error: props.errors.date,
		touched: props.touched.date,
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
							<label className="text-base text-gray-900 mb-1">
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
							<label className="text-base text-gray-900 mb-1">
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
						<div className="flex flex-col mb-5">
							<label className="text-base text-gray-900 my-1">
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
						</div>
						<label className="text-base text-gray-900 mb-1">
							Enter the number of days requested for time extensions and
							affected date.
						</label>
						<div className="flex gap-2 mb-5">
							<div className="flex-1">
								<input
									value={props.values.numberDays}
									id="numberDays"
									onChange={props.handleChange}
									type="text"
									placeholder="Number of days"
									className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
								/>
								{props.errors.numberDays && props.touched.numberDays && (
									<Error message={props.errors.numberDays} />
								)}
							</div>
							<div className="flex-1">
								<FormInputContainer name="">
									<SelectDate {...selectDate} />
									{props.errors.selectDate && props.touched.selectDate && (
										<Error message={props.errors.selectDate} />
									)}
								</FormInputContainer>
							</div>
						</div>
						<FormInputContainer name="Select the Owner's representative Database">
							<FormSelect {...userType}>
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

							{props.errors.userType && props.touched.userType && (
								<Error message={props.errors.userType} />
							)}
						</FormInputContainer>
						<FormInputContainer name="Select Owner’s Representative ">
							<FormSelect {...select}>
								<option>Select</option>
							</FormSelect>

							{props.errors.select && props.touched.select && (
								<Error message={props.errors.select} />
							)}
						</FormInputContainer>
						<FormInputContainer name="When does the Owner's representative sign this form?">
							<SelectDate {...date} />
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
