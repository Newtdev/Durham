import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputBigContainer } from "../../../3 bids/forms/VendorsInfo";
import { moveSubTotal, prevChoiceStep } from "../reducer";
import { closeModal } from "../../../reducer";
import Component from "../Component";
import currency from "currency.js";

export const HandleMultiplication = (c, d) => {
	return useMemo(() => {
		if (!c || !d) {
			return;
		}
		return c * d;
	}, [c, d]);
};

export const HandleTotal = (a, b) => {
	// const dispatch = useDispatch();
	return useMemo(() => {
		if (!a) {
			return b;
		} else if (!b) {
			return "";
		}
		let percentage = a / 100;
		let total = percentage * Number(b);
		// dispatch(moveSubTotal(total));
		return total?.toFixed(2);
	}, [a, b]);
};

export const HandleSubTotal = (...val) => {
	return useMemo(() => {
		let sum = 0;
		for (let i of val) {
			sum += Number(i);
		}
		return sum;
	}, [val]);
};
const SecondForm = (props) => {
	const [percentage, setPercentage] = useState({
		overhead: 6.0,
		sale: 6.75,
		insurance: 30,
		profit: 10,
		allowable: 15.7,
	});
	const [focuse, setFocuse] = useState("");
	const dispatch = useDispatch();

	const handleClick = (props) => {
		if (props === "first") {
			setFocuse("first");
		} else if (props === "second") {
			setFocuse("second");
		} else if (props === "fifth") {
			setFocuse("fifth");
		}
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={(e) => {
					e.preventDefault();
					// console.log(
					// 	handleSubTotal(
					// 		HandleTotal(percentage?.overhead, props?.values?.material),
					// 		HandleTotal(percentage.sale, props?.values?.material),
					// 		HandleTotal(
					// 			percentage?.profit,
					// 			HandleMultiplication(props.values?.hours, props?.values?.amount)
					// 		),
					// 		HandleTotal(
					// 			percentage?.allowable,
					// 			HandleMultiplication(
					// 				props?.values?.Thours,
					// 				props?.values?.Tamount
					// 			)
					// 		)
					// 	)
					// );
					props.handleSubmit();
					// dispatch(moveSubTotal());
				}}>
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
								name={`Materials`}
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
											Total Direct Cost of Materials
										</label>
										<div className="relative w-full">
											<input
												value={props.values?.material}
												id="material"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue("material", e.target.value);
													}
												}}
												placeholder="0.00"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
											/>
											<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
												$
											</small>
										</div>
										{props.errors.material && props.touched.material && (
											<Error message={props.errors.material} />
										)}
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Overhead & Profit on Item 1.</p>
											<p className=" w-[10%]">
												{focuse === "first" ? (
													<Component
														props={props}
														value={props?.values?.overhead}
														id="overhead"
														onChange={(e) =>
															props?.setFieldValue("overhead", e.target.value)
														}
													/>
												) : (
													`${percentage.overhead}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{`$${HandleTotal(
												props?.values?.overhead,
												props?.values?.material
											)}`}
										</p>
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg my-4">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Sales Tax</p>
											<p className=" w-[10%]">
												{focuse === "first" ? (
													<Component
														value={props?.values?.sale}
														id="sale"
														onChange={(e) =>
															props?.setFieldValue("sale", e.target.value)
														}
													/>
												) : (
													`${percentage.sale}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{`$${HandleTotal(
												props?.values?.sale,
												props?.values?.material
											)}`}
										</p>
									</div>
									<div className="my-4">
										<button
											className={`text-white text-md  hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
											type="button"
											onClick={() => handleClick("first")}>
											EDIT PERCENTAGE
										</button>
									</div>
									<div className="flex flex-col my-4">
										<label className="text-base text-gray-900 mb-1">
											Shipping & Transportation
										</label>
										<div className="relative w-full">
											<input
												value={props.values?.shipping}
												id="shipping"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue("shipping", e.target.value);
													}
												}}
												placeholder="0.00"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
											/>
											<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
												$
											</small>
											<p>
												{HandleSubTotal(
													props?.values?.material,
													HandleTotal(
														props?.values?.overhead,
														props?.values?.material
													),
													HandleTotal(percentage.sale, props?.values?.material),
													props.values?.shipping
												)}
											</p>
										</div>
										{props.errors.shipping && props.touched.shipping && (
											<Error message={props.errors.shipping} />
										)}
									</div>
								</div>
							</FormInputBigContainer>
						</div>
						<div className=" border-spacing-10 bg-gray-50 rounded-md p-1 my-4">
							<FormInputBigContainer
								name={`Labor`}
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
											Total Manhours
										</label>
										<div className="flex items-center gap-4">
											<input
												value={props.values?.hours}
												id="hours"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue("hours", e.target.value);
													}
												}}
												placeholder="Hours"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
											/>
											{props.errors.hours && props.touched.hours && (
												<Error message={props.errors.hours} />
											)}
											<input
												value={props.values.amount}
												id="amount"
												onChange={(e) => {
													if (isNaN(e.target.value)) {
														return;
													} else {
														props.setFieldValue("amount", e.target.value);
													}
												}}
												placeholder="Amount/Hour"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
											/>
											{props.errors.amount && props.touched.amount && (
												<Error message={props.errors.amount} />
											)}
										</div>
									</div>
									<div className="flex flex-col gap-2 px-6 py-3 bg-[#F3F4F6] rounded-lg mb-4">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Overhead & Profit on Item 5</p>
											<p className=" w-[10%]">
												{focuse === "second" ? (
													<Component
														value={props?.values?.profit}
														id="profit"
														onChange={(e) =>
															props?.setFieldValue("profit", e.target.value)
														}
													/>
												) : (
													`${percentage.profit}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{HandleTotal(
												props?.values?.profit,
												HandleMultiplication(
													props.values?.hours,
													props?.values?.amount
												)
											)}
										</p>
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg mb-4">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Payroll Taxes & Insurance</p>
											<p className=" w-[10%]">
												{focuse === "second" ? (
													<Component
														value={props?.values?.insurance}
														id="insurance"
														onChange={(e) =>
															props?.setFieldValue("insurance", e.target.value)
														}
													/>
												) : (
													`${percentage.insurance}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{HandleTotal(
												props?.values?.insurance,
												HandleMultiplication(
													props?.values?.hours,
													props?.values?.amount
												)
											)}
										</p>
									</div>

									<div className="my-4">
										<button
											className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
											type="button"
											onClick={() => handleClick("second")}>
											EDIT PERCENTAGE
										</button>
									</div>
									<div className="flex flex-col my-1">
										<label className="text-base text-gray-900 mb-1">
											Total Overtime Manhours
										</label>
										<div className="flex items-center gap-4">
											<input
												value={props?.values?.Thours}
												id="Thours"
												onChange={props.handleChange}
												placeholder="Hours"
												className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
											/>

											{props.errors.Thours && props.touched.Thours && (
												<Error message={props.errors.Thours} />
											)}
											<div className="relative w-full">
												<input
													value={props.values.Tamount}
													id="Tamount"
													onChange={(e) => {
														if (isNaN(e.target.value)) {
															return;
														} else {
															props.setFieldValue("Tamount", e.target.value);
														}
													}}
													placeholder="Amount/Hour"
													className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
												/>
												<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
													$
												</small>
											</div>
											{props.errors.Tamount && props.touched.Tamount && (
												<Error message={props.errors.Tamount} />
											)}
										</div>
									</div>
									<div className="flex flex-col gap-2 px-6 py-2 mt-4 bg-[#F3F4F6] rounded-lg mb-4">
										<div className="flex items-center justify-between">
											<p className=" w-[70%]">Allowable Mark-up</p>
											<p className=" w-[10%]">
												{focuse === "fifth" ? (
													<Component
														value={props?.values?.allowable}
														id="allowable"
														onChange={(e) =>
															props?.setFieldValue("allowable", e.target.value)
														}
													/>
												) : (
													`${percentage.allowable}%`
												)}
											</p>
										</div>
										<p>
											{HandleTotal(
												props?.values?.allowable,
												HandleMultiplication(
													props?.values?.Thours,
													props?.values?.Tamount
												)
											)}
										</p>
									</div>
									<div className="my-4">
										<button
											className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
											type="button"
											onClick={() => handleClick("fifth")}>
											EDIT PERCENTAGE
										</button>
									</div>
								</div>
							</FormInputBigContainer>
						</div>
						<p>
							{HandleSubTotal(
								HandleMultiplication(
									props?.values?.hours,
									props?.values?.amount
								),
								HandleTotal(
									props?.values?.profit,
									HandleMultiplication(
										props?.values?.hours,
										props?.values?.amount
									)
								),
								HandleTotal(
									props?.values?.insurance,
									HandleMultiplication(
										props?.values?.hours,
										props?.values?.amount
									)
								),
								HandleTotal(
									props?.values?.allowable,
									HandleMultiplication(
										props?.values?.Thours,
										props?.values?.Tamount
									)
								),
								HandleMultiplication(
									props?.values?.Thours,
									props?.values?.Tamount
								)
							)}
						</p>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(prevChoiceStep(1))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default SecondForm;
