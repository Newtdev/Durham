import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputBigContainer } from "../../../3 bids/forms/VendorsInfo";
import { prevChoiceStep } from "../reducer";
import { closeModal } from "../../../reducer";
import Component from "../Component";

const ThirdForm = (props) => {
	const dispatch = useDispatch();
	const [overheadResult, setOverheadResult] = useState(0.0);
	const [profitResult, setProfitResult] = useState(0.0);
	//   const [overheadFocus, setOverheadFocus] = useState(false);
	const [Focus, setFocus] = useState("");

	const [percentage, setPercentage] = useState({
		overhead: 6.0,
		profit: 6.0,
	});

	const handlePercentageChange = (newPercentage) => {
		setPercentage(newPercentage);
	};

	const mat = Number(props.values.rental);
	const hour = Number(props.values.subcontractors);
	useEffect(() => {
		const over = percentage.overhead / 100;
		const prof = percentage.profit / 100;

		const result = over * mat;
		const result1 = prof * hour;
		setOverheadResult(result.toFixed(2));
		setProfitResult(result1.toFixed(2));
	}, [props.values.rental, props.values.subcontractors, percentage, hour, mat]);

	const handleClick = (props) => {
		if (props === "third") {
			setFocus("third");
		} else if (props === "fourth") {
			setFocus("fourth");
		}
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
				<div className="mx-6 mb-3">
					<div className=" my-3">
						<div className=" border-spacing-10 bg-gray-50 rounded-md p-1">
							<FormInputBigContainer
								name={`Equipment Rental`}
								close={
									<button
										type="button"
										className="text-gray-900 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
										data-modal-toggle="small-modal">
										<Close />
									</button>
								}>
								<div className="flex flex-col rounded-md bg-white px-1">
									<div className="flex flex-col my-4">
										<label className="text-base text-gray-900 mb-1">
											Equipment Rental
										</label>
										<div className="relative w-full">
											<input
												value={props.values.rental}
												id="rental"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue("rental", e.target.value);
													}
												}}
												placeholder="0.00"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
											/>
											<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
												$
											</small>
										</div>
										{props.errors.rental && props.touched.rental && (
											<Error message={props.errors.rental} />
										)}
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Overhead & Profit on Item 8.</p>
											<p className=" w-[10%]">
												{Focus === "third" ? (
													<Component
														onChange={handlePercentageChange}
														value={percentage}
														id="overhead"
													/>
												) : (
													`${percentage.overhead}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">{`$ ${overheadResult}`}</p>
									</div>
									<div className="my-4">
										<button
											className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
											type="button"
											onClick={() => handleClick("third")}>
											EDIT PERCENTAGE
										</button>
									</div>
								</div>
							</FormInputBigContainer>
						</div>
						<div className=" border-spacing-10 bg-gray-50 rounded-md p-1 my-4">
							<FormInputBigContainer
								name={`Subcontractors`}
								close={
									<button
										type="button"
										className="text-gray-900 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
										data-modal-toggle="small-modal">
										<Close />
									</button>
								}>
								<div className="flex flex-col rounded-md bg-white px-1">
									<div className="flex flex-col my-4">
										<label className="text-base text-gray-900 mb-1">
											Subcontractors
										</label>
										<div className="relative w-full">
											<input
												value={props.values.subcontractors}
												id="subcontractors"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue(
															"subcontractors",
															e.target.value
														);
													}
												}}
												placeholder="0.00"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
											/>
											<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
												$
											</small>
										</div>
										{props.errors.subcontractors &&
											props.touched.subcontractors && (
												<Error message={props.errors.subcontractors} />
											)}
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Overhead & Profit on Item 10</p>
											<p className=" w-[10%]">
												{Focus === "fourth" ? (
													<Component
														onChange={handlePercentageChange}
														value={percentage}
														id="profit"
													/>
												) : (
													`${percentage.profit}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">{`$ ${profitResult}`}</p>
									</div>
									<div className="my-4">
										<button
											className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
											type="button"
											onClick={() => handleClick("fourth")}>
											EDIT PERCENTAGE
										</button>
									</div>
								</div>
							</FormInputBigContainer>
						</div>
						<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
							<div className="flex items-center justify-between">
								<p className="">Subtotal of Proposal</p>
								<p></p>
							</div>
							<p className="text-[#693B79] font-bold">$ 0.0</p>
						</div>
						<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg mt-4">
							<div className="flex items-center justify-between">
								<p className="">Bonds ( % of subtotal of proposal)</p>
								<p>{"1.5%"}</p>
							</div>
							<p className="text-[#693B79] font-bold">$ 0.0</p>
						</div>
						<div className="my-4">
							<button
								className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
								type="button">
								EDIT PERCENTAGE
							</button>
						</div>
						<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
							<div className="flex items-center justify-between">
								<p className="text-base">TOTAL OF CHANGE PROPOSAL</p>
								<p></p>
							</div>
							<p>$ 0.0</p>
						</div>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(prevChoiceStep(2))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default ThirdForm;
