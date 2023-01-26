import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { OverviewTextarea } from "../../../Dashboard/Overview-dashboard/OverviewComponents";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";

const BidInfo = (props) => {
	const dispatch = useDispatch();

	const services = {
		value: props.values.services,
		onChange: props.handleChange,
		id: "services",
		error: props.errors.services,
		touched: props.touched.services,
		placeholder: "Text input",
	};

	const selectDate = {
		...props,
		value: props.values.selectDate,
		onChange: props.handleChange,
		name: "selectDate",
		error: props.errors.selectDate,
		touched: props.touched.selectDate,
		placeholder: "Select date",
	};

	const input = {
		value: props.values.input,
		onChange: props.handleChange,
		name: "input",
		placeholder: "Text input",
		type: "text",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">3 bids</h3>
						<p className="text-base text-gray-700">Bid information</p>
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
					<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
				</div>

				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<div className="flex flex-col">
							<label className="text-base text-gray-900 mb-1">
								Enter the description of the items
							</label>
							<OverviewTextarea {...services} />
						</div>

						<div className="flex flex-col mb-4">
							<label
								for="default-radio-1"
								className="text-base text-gray-900 mb-1">
								Enter the quantity of the items
							</label>
							<input
								{...input}
								className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
							/>
							{props.errors.input && props.touched.input && (
								<Error message={props.errors.input} />
							)}
						</div>
						<FormInputContainer name="When we this document be signed?">
							<SelectDate {...selectDate} />
							{props.errors.selectDate && props.touched.selectDate && (
								<Error message={props.errors.selectDate} />
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
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default BidInfo;
