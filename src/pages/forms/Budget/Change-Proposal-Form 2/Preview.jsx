import currency from "currency.js";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../../Lundsford/Download";
import { closeModal, openDownload } from "../../reducer";
import {
	HandleMultiplication,
	HandleSubTotal,
	HandleTotal,
	MasterhandleSubTotal,
} from "./Component";
import { prevChoiceStep } from "./reducer";

const Preview = () => {
	const formID = useSelector(project_document_id);
	const dispatch = useDispatch();
	const [awardee, setAwardee] = useState({ design: {}, contractor: {} });
	const [highlighted, setHighlighed] = useState(false);
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const [a] = UseFetchFilledFormDetails(formID);
	const projectDetails = a?.data?.project;
	const formDetails = a?.data?.form_fields;
	const vendors = a?.data?.vendors;

	useEffect(() => {
		if (!vendors) {
			return;
		}

		vendors?.forEach((cur) => {
			if (
				cur.role === "Design Consultant" ||
				cur.role === "Engineering Consultant"
			) {
				setAwardee((prev) => {
					return { ...prev, design: cur };
				});
			} else if (cur.role === "Contractor") {
				setAwardee((prev) => {
					return { ...prev, contractor: cur };
				});
			}
		});
	}, [vendors]);

	const props = {
		component: downloadComponent,
		name: "Change Proposal Form",
		show: show ? "block" : "hidden",
	};

	const BondsTotal = HandleTotal(
		formDetails?.bonds,
		MasterhandleSubTotal(
			HandleSubTotal(
				formDetails?.material,
				HandleTotal(formDetails?.overhead, formDetails?.material),
				HandleTotal(formDetails?.sale, formDetails?.material),
				formDetails?.shipping
			),
			HandleSubTotal(
				HandleMultiplication(formDetails?.hours, formDetails?.amount),
				HandleTotal(
					formDetails?.profit,
					HandleMultiplication(formDetails?.hours, formDetails?.amount)
				),
				HandleTotal(
					formDetails?.insurance,
					HandleMultiplication(formDetails?.hours, formDetails?.amount)
				),
				HandleTotal(
					formDetails?.allowable,
					HandleMultiplication(formDetails?.Thours, formDetails?.Tamount)
				),
				HandleMultiplication(formDetails?.Thours, formDetails?.Tamount)
			),
			HandleSubTotal(
				HandleTotal(formDetails?.overhead_exprimental, formDetails?.rental),
				formDetails?.rental
			),
			HandleSubTotal(
				HandleTotal(
					formDetails?.profit_subcontractor,
					formDetails?.subcontractors
				),
				formDetails?.subcontractors
			)
		)
	);
	return (
		<div>
			<div>
				<DownLoadForm {...props} />

				{/* Modal content */}
				<div className="relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14">
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="font-extrabold text-[9.9pt] text-gray-900">
								Change Proposal Form
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div className="px-20 pt-8 pb-4 text-black font11 text-[7.7pt] leading-[1.2a]">
							<div className="m-[1in]">
								<div className="text-center font-bold text-[9.9pt] mb-6">
									<p>CHANGE PROPOSAL FORM</p>
								</div>

								<div className="grid grid-cols-2 border-b-2 border-b-black">
									<div>
										<p className="mb-2">
											<strong>Project: </strong>
											<span
												className={`inline-block w-56 border-b border-black`}>
												{projectDetails?.name || ""}
											</span>
										</p>
										<p className="mb-2">
											<strong>Contract: </strong>
											<span className="bg-yellow-500 inline-block w-56 border-b border-black">
												{formDetails?.contract || ""}
											</span>
										</p>
										<p className="mb-2">
											<strong>Contractor: </strong>
											<span className="bg-yellow-500 inline-block w-56 border-b border-black">
												{awardee?.contractor?.company_name || ""}
											</span>
										</p>
									</div>
									<div>
										<p className="mb-2">
											<strong>Proposal#: </strong>
											<span className="bg-yellow-500 inline-block w-56 border-b border-black">
												{formDetails?.proposal || ""}
											</span>
										</p>
										<p className="mb-2">
											<strong>Project#: </strong>
											<span className="bg-yellow-500 inline-block w-56 border-b border-black">
												{projectDetails?.number || ""}
											</span>
										</p>
										<p className="mb-2">
											<strong>Contractor#: </strong>
											<span className="bg-yellow-500 inline-block w-56 border-b border-black">
												{" "}
												{formDetails?.contractor || ""}
											</span>
										</p>
									</div>
								</div>

								<div className="border-b-2 border-b-black">
									<p className="font-bold">Description of change:</p>
									<div className="h-32"></div>
								</div>

								<div className="grid grid-cols-5 border-b-2 border-black">
									{/* First grid */}
									<div className="col-span-3">
										<div className="mb-3">
											<p className="font-bold">
												Materials{" "}
												<span className="ml-3 font-normal">
													(Attach list with Qty, Item, Unit $, Unit mh, Total
													mh, OT mh, Total $)
												</span>
											</p>
											<div className="ml-20 overflow-hidden">
												<div className="flex gap-3">
													<p>1</p>
													<p>Total Direct Cost of Materials</p>
												</div>
												<div className="flex gap-3">
													<p>2</p>
													<div>
														<p>Overhead & Profit on Item 1.</p>
														<p>
															(
															<span className="bg-yellow-500">
																{" "}
																{formDetails?.overhead}%
															</span>{" "}
															maximum, includes small tools & consumables)
														</p>
													</div>
												</div>
												<div className="flex gap-3">
													<p>3</p>
													<p>
														Sales Tax (
														<span className="bg-yellow-500">
															{formDetails?.sale}%
														</span>
														)
													</p>
												</div>
												<div className="flex gap-3">
													<p>4</p>
													<p>Shipping & Transportation</p>
												</div>
											</div>
										</div>

										<div className="mb-3">
											<p className="font-bold">Labor</p>
											<div className="ml-20">
												<div className="flex gap-3">
													<p>5</p>
													<p>
														Total Manhours:{" "}
														<span className="ml-[11rem] bg-yellow-500">
															{formDetails?.hours || 0}
														</span>
														MH @{" "}
														<span className="bg-yellow-500">
															{" "}
															{formDetails?.amount || 0}
														</span>
														/hr.
													</p>
												</div>
												<div className="flex gap-3">
													<p>6</p>
													<div>
														<p>Overhead & Profit on Item 5. </p>
														<p>
															(
															<span className="bg-yellow-500">
																{formDetails?.profit}%
															</span>{" "}
															maximum on straight labor cost, not premium
															portion)
														</p>
														<p className="mt-2">
															(O & P includes supervisor's time)
														</p>
													</div>
												</div>
												<div className="flex gap-3">
													<p>7</p>
													<div>
														<p>
															Payroll Taxes & Insurance
															<span className="ml-[9.7rem] bg-yellow-500">
																{currency(formDetails?.insurance).format()}
															</span>
														</p>
														<p>
															Total Overtime Manhours:
															<span className="ml-[8rem] bg-yellow-500">
																{formDetails?.Thours}
															</span>
															MH @{" "}
															<span className="bg-yellow-500">
																{formDetails?.Tamount}
															</span>
															/hr.
														</p>
														<p>
															Allowable Mark-up
															<span className="ml-[12rem] bg-yellow-500">
																{formDetails?.allowable}%
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className="mb-3">
											<p className="font-bold">
												Equipment Rental{" "}
												<span className="ml-3 font-normal">
													(Include quotes)
												</span>
											</p>
											<div className="ml-20">
												<div className="flex gap-3">
													<p>8</p>
													<p>Equipment Rental</p>
												</div>
												<div className="flex gap-3">
													<p>9</p>
													<div>
														<p>Overhead & Profit on Item 8. </p>
														<p>
															(
															<span className="bg-yellow-500">
																{formDetails?.overhead_exprimental}%
															</span>{" "}
															maximum)
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className="mb-3">
											<p className="font-bold">
												Subcontractors{" "}
												<span className="ml-3 font-normal">
													(Include quotes with material & equipment backup)
												</span>
											</p>
											<div className="ml-20">
												<div className="flex gap-3">
													<p>10</p>
													<p>Subcontractors</p>
												</div>
												<div className="flex gap-3">
													<p>11</p>
													<div>
														<p>Overhead & Profit on Item 10. </p>
														<p>
															(
															<span className="bg-yellow-500">
																{formDetails?.profit_subcontractor}%
															</span>{" "}
															maximum)
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Second grid */}
									<div>
										<div className="mb-[1.6rem]">
											<p className="mb-[1.1rem]"></p>
											<div>
												<span className="bg-yellow-500">
													{currency(formDetails?.material).format()}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													$
													{HandleTotal(
														formDetails?.overhead,
														formDetails?.material
													)}
												</span>
											</div>
											<div className="border-t border-t-black mt-[1.1rem] w-max">
												<span className="bg-yellow-500">
													{" "}
													$
													{HandleTotal(
														formDetails?.sale,
														formDetails?.material
													)}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													{currency(formDetails?.shipping).format()}
												</span>
											</div>
										</div>

										<div className="mb-[1.6rem]">
											<div>
												{/* F17 */}
												<span className="bg-yellow-500">
													$
													{HandleMultiplication(
														formDetails?.amount,
														formDetails?.hours
													)}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													$
													{HandleTotal(
														formDetails?.profit,
														HandleMultiplication(
															formDetails?.hours,
															formDetails?.amount
														)
													) || "0.00"}
												</span>
											</div>
											<div className="mt-[2.6rem]">
												<span className="bg-yellow-500">
													{HandleTotal(
														formDetails?.insurance,
														HandleMultiplication(
															formDetails?.hours,
															formDetails?.amount
														)
													) || "0.00"}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													$
													{HandleMultiplication(
														formDetails?.Thours,
														formDetails?.Tamount
													)}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													{HandleTotal(
														formDetails?.allowable,
														HandleMultiplication(
															formDetails?.Thours,
															formDetails?.Tamount
														)
													) || "0.00"}
												</span>
											</div>
										</div>

										<div className="mb-[3rem]">
											<div>
												<span className="bg-yellow-500">
													${formDetails?.rental}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													$
													{HandleTotal(
														formDetails?.overhead_exprimental,
														formDetails?.rental
													) || "0.00"}
												</span>
											</div>
										</div>

										<div>
											<div>
												<span className="bg-yellow-500">
													${formDetails?.subcontractors}
												</span>
											</div>
											<div>
												<span className="bg-yellow-500">
													$
													{HandleTotal(
														formDetails?.profit_subcontractor,
														formDetails?.subcontractors
													)}
												</span>
											</div>
										</div>
									</div>

									{/* Third grid */}
									<div>
										<p className="font-bold">SUBTOTALS</p>
										<div>
											<div className="h-[3.8rem] bg-gray-300"></div>
											<p className="mt-2">
												<span className="bg-yellow-500">
													$
													{HandleSubTotal(
														formDetails?.material,
														HandleTotal(
															formDetails?.overhead,
															formDetails?.material
														),
														HandleTotal(
															formDetails?.sale,
															formDetails?.material
														),
														formDetails?.shipping
													) || "0.00"}
												</span>
											</p>
										</div>

										<div className="mt-[0.7rem]">
											<div className="h-[7rem] bg-gray-30"></div>
											<p className="mt-2">
												<span className="bg-yellow-500">
													$
													{HandleSubTotal(
														HandleMultiplication(
															formDetails?.hours,
															formDetails?.amount
														),
														HandleTotal(
															formDetails?.profit,
															HandleMultiplication(
																formDetails?.hours,
																formDetails?.amount
															)
														),
														HandleTotal(
															formDetails?.insurance,
															HandleMultiplication(
																formDetails?.hours,
																formDetails?.amount
															)
														),
														HandleTotal(
															formDetails?.allowable,
															HandleMultiplication(
																formDetails?.Thours,
																formDetails?.Tamount
															)
														),
														HandleMultiplication(
															formDetails?.Thours,
															formDetails?.Tamount
														)
													)}
												</span>
											</p>
										</div>

										<div className="mt-[0.4rem]">
											<div className="h-[2rem] bg-gray-300"></div>
											<p className="mt-2">
												<span className="bg-yellow-500">
													$
													{HandleSubTotal(
														HandleTotal(
															formDetails?.overhead_exprimental,
															formDetails?.rental
														),
														formDetails?.rental
													)}
												</span>
											</p>
										</div>

										<div className="mt-[2rem]">
											<div className="h-[1.4rem] bg-gray-300"></div>
											<p className="mt-2">
												<span className="bg-yellow-500">
													$
													{HandleSubTotal(
														HandleTotal(
															formDetails?.profit_subcontractor,
															formDetails?.subcontractors
														),
														formDetails?.subcontractors
													)}
												</span>
											</p>
										</div>
									</div>
								</div>

								<div>
									<div className="text-right font-bold">
										Subtotal of Proposal{" "}
										<span className="bg-yellow-500">
											{currency(formDetails?.subtotalValue).format()}
										</span>
									</div>

									<div className="ml-20">
										<div className="flex gap-3">
											<p>12</p>
											<p>
												Bonds ( % of subtotal of proposal){" "}
												<span className="bg-yellow-500 ml-[132px]">
													{formDetails?.bonds}%
												</span>
											</p>
											<p className="ml-auto bg-red-900">
												<span className="bg-yellow-500">
													{currency(BondsTotal).format() || "0.00"}
												</span>
											</p>
										</div>
									</div>

									<div className="text-right font-bold">
										TOTAL OF CHANGE PROPOSAL{" "}
										<span className="bg-yellow-500">
											{currency(formDetails?.totalValue).format()}
										</span>
									</div>

									<div className="mt-4">
										<p className="ml-[105px] mb-4">
											Time Extension Requests:{" "}
											<span className="bg-yellow-500">
												{formDetails?.numberDays || 0}
											</span>{" "}
											day(s) Schedule Activity # Affected:{" "}
											<span className="bg-yellow-500">
												{moment(formDetails?.affectedDate).format(
													"MMMM D, YYYY"
												)}
											</span>
										</p>

										<p className="mb-6">
											The Contractor agrees to perform the work outlined in this
											change proposal for the amount specified above and in
											accordance with the Contract documents if the work is
											authorized by the Owner.
										</p>
									</div>

									<div className="grid grid-cols-5">
										<div className="col-span-3">
											<div>
												<p className="font-bold mb-4">
													Contractor's Signature:{" "}
													<span className="bg-yellow-500">
														{awardee?.contractor?.first_name || ""}{" "}
														{awardee?.contractor?.last_name || ""}
													</span>
												</p>
												<p className="font-bold mb-4">
													Approval Recommended by Design Consultant:{" "}
													<span className="bg-yellow-500">F42</span>
												</p>
												<p className="font-bold">
													Owner's Representative Approval:{" "}
													<span className="bg-yellow-500">F43</span>
												</p>
											</div>
										</div>

										<div>
											<div>
												<p className="mb-4">_____</p>
												<p className="mb-4">_____</p>
												<p>_____</p>
											</div>
										</div>

										<div>
											<div>
												<p className="mb-4 text-right font-bold">
													Date: ____________
												</p>
												<p className="mb-4 text-right font-bold">
													Date: ____________
												</p>
												<p className="text-right font-bold">
													Date: <span className="bg-yellow-500">F44</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevChoiceStep(3))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
