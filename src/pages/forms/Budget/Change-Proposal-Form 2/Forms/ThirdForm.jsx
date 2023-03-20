import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputBigContainer } from "../../../3 bids/forms/VendorsInfo";
import { nextChoiceStep, prevChoiceStep } from "../reducer";
import { closeModal } from "../../../reducer";
import Component, {
	HandleMultiplication,
	HandleSubTotal,
	HandleTotal,
	MasterhandleSubTotal,
} from "../Component";
import currency from "currency.js";
import { project_document_id } from "../../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../../features/services/api";
import { setResult } from "../../../../../shared-component";
import { toast } from "react-toastify";

const ThirdForm = (props) => {
	const dispatch = useDispatch();

	const [Focus, setFocus] = useState("");

	const handleClick = (props) => {
		if (props === "third") {
			setFocus("third");
		} else if (props === "fourth") {
			setFocus("fourth");
		} else if (props === "sixth") {
			setFocus("sixth");
		}
	};

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: setResult(values),
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextChoiceStep(4));
			}
		}
	};

	const BondsTotal = HandleTotal(
		props?.values?.bonds,
		MasterhandleSubTotal(
			HandleSubTotal(
				props?.values?.material,
				HandleTotal(props?.values?.overhead, props?.values?.material),
				HandleTotal(props?.values?.sale, props?.values?.material),
				props.values?.shipping
			),
			HandleSubTotal(
				HandleMultiplication(props?.values?.hours, props?.values?.amount),
				HandleTotal(
					props?.values?.profit,
					HandleMultiplication(props?.values?.hours, props?.values?.amount)
				),
				HandleTotal(
					props?.values?.insurance,
					HandleMultiplication(props?.values?.hours, props?.values?.amount)
				),
				HandleTotal(
					props?.values?.allowable,
					HandleMultiplication(props?.values?.Thours, props?.values?.Tamount)
				),
				HandleMultiplication(props?.values?.Thours, props?.values?.Tamount)
			),
			HandleSubTotal(
				HandleTotal(props?.values?.overhead_exprimental, props?.values?.rental),
				props?.values?.rental
			),
			HandleSubTotal(
				HandleTotal(
					props?.values?.profit_subcontractor,
					props?.values?.subcontractors
				),
				props?.values?.subcontractors
			)
		)
	);

	const SubTotal = MasterhandleSubTotal(
		HandleSubTotal(
			props?.values?.material,
			HandleTotal(props?.values?.overhead, props?.values?.material),
			HandleTotal(props?.values?.sale, props?.values?.material),
			props.values?.shipping
		),
		HandleSubTotal(
			HandleMultiplication(props?.values?.hours, props?.values?.amount),
			HandleTotal(
				props?.values?.profit,
				HandleMultiplication(props?.values?.hours, props?.values?.amount)
			),
			HandleTotal(
				props?.values?.insurance,
				HandleMultiplication(props?.values?.hours, props?.values?.amount)
			),
			HandleTotal(
				props?.values?.allowable,
				HandleMultiplication(props?.values?.Thours, props?.values?.Tamount)
			),
			HandleMultiplication(props?.values?.Thours, props?.values?.Tamount)
		),
		HandleSubTotal(
			HandleTotal(props?.values?.overhead_exprimental, props?.values?.rental),
			props?.values?.rental
		),
		HandleSubTotal(
			HandleTotal(
				props?.values?.profit_subcontractor,
				props?.values?.subcontractors
			),
			props?.values?.subcontractors
		)
	);

	const GrandTotal = HandleSubTotal(BondsTotal, SubTotal);

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={(e) => {
					e.preventDefault();
					HandleSubmit({
						...props?.values,
						subtotalValue: SubTotal,
						totalValue: GrandTotal,
					});
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
				<div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
				{/* <hr /> */}
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
										{/* <Close /> */}
									</button>
								}>
								<div className="flex flex-col rounded-md bg-white px-1">
									<div className="flex flex-col my-4">
										<label className="text-base text-gray-900 mb-1">
											Equipment Rental
										</label>
										<div className="relative w-full">
											<input
												value={props.values?.rental}
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
														value={props?.values?.overhead_exprimental}
														id="overhead_exprimental"
														onChange={(e) =>
															props?.setFieldValue(
																"overhead_exprimental",
																e.target.value
															)
														}
													/>
												) : (
													`${props?.values?.overhead_exprimental}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{`$ ${HandleTotal(
												props?.values?.overhead_exprimental,
												props?.values?.rental
											)}` || "0.00"}
										</p>
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
										{/* <Close /> */}
									</button>
								}>
								<div className="flex flex-col rounded-md bg-white px-1">
									<div className="flex flex-col my-4">
										<label className="text-base text-gray-900 mb-1">
											Subcontractors
										</label>
										<div className="relative w-full">
											<input
												value={props.values?.subcontractors}
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
														value={props?.values?.profit_subcontractor}
														id="profit_subcontractor"
														onChange={(e) =>
															props?.setFieldValue(
																"profit_subcontractor",
																e.target.value
															)
														}
													/>
												) : (
													`${props?.values?.profit_subcontractor}%`
												)}
											</p>
										</div>
										<p className="text-[#693B79] font-bold">
											{`$ ${HandleTotal(
												props?.values?.profit_subcontractor,
												props?.values?.subcontractors
											)}` || "0.00"}
										</p>
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
							<p className="text-[#693B79] font-bold">
								{currency(SubTotal).format() || "0.00"}
							</p>
						</div>
						<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg mt-4">
							<div className="flex items-center justify-between">
								<p className="">Bonds ( % of subtotal of proposal)</p>

								<div className=" w-[10%]">
									{Focus === "sixth" ? (
										<Component
											value={props?.values?.bonds}
											id="bonds"
											onChange={(e) =>
												props?.setFieldValue("bonds", e.target.value)
											}
										/>
									) : (
										`${props?.values?.bonds}%`
									)}
								</div>
							</div>
							<p className="text-[#693B79] font-bold">
								${BondsTotal || "0.00"}
							</p>
						</div>
						<div className="my-4">
							<button
								className={`text-white text-md hover:bg-blue-600 hover:text-white focus:ring-4 bg-[#693B79] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
								type="button"
								onClick={() => handleClick("sixth")}>
								EDIT PERCENTAGE
							</button>
						</div>
						<div className="flex flex-col gap-2 px-6 py-2 bg-[#F3F4F6] rounded-lg">
							<div className="flex items-center justify-between">
								<p className="text-base">TOTAL OF CHANGE PROPOSAL</p>
								<p></p>
							</div>
							{/*  */}
							<p>{currency(GrandTotal).format() || "0.00"}</p>
						</div>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
					<ButtonWhiteBG
						width="w-[100px]"
						name="back"
						onClick={() => dispatch(prevChoiceStep(2))}
					/>
					<DashboardButton
						hidden
						name="NEXT"
						type="submit"
						width="w-[77px]"
						loading={isLoading}
					/>
				</div>
			</form>
		</div>
	);
};

export default ThirdForm;
