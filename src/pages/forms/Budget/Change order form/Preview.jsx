import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import { useEffect, useRef, useState } from "react";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import DownLoadForm from "../../Lundsford/Download";
import moment from "moment";
import currency from "currency.js";
import { CalculateAmount } from "./form/FormOne";
import { AddDate } from "./form/FormTwo";
import Logo from "../../../../assets/formlogo.png";
import { prevStep } from "./reducer";

const ToApprove = ({ name, nottoBeHighlighted }) => {
	return name?.map((person, i) => {
		return (
			<div key={i} className="grid grid-cols-4 gap-4 mb-3">
				<div>
					<p>
						<span className={`${nottoBeHighlighted}`}>
							Durham Public Schools
						</span>
					</p>
					<p className="border-t border-black">
						<i className="text-[7pt]">Durham Public Schools</i>
					</p>
				</div>
				<div>
					<p>
						<span className={`${nottoBeHighlighted}`}>{person?.name}</span>
					</p>
					<p className=" border-t border-black">
						<i className="text-[7pt]">By</i>
					</p>
				</div>
				<div>
					<br />
					<p></p>
					<p className=" border-t border-black">
						<i className="text-[7pt]">Signature</i>
					</p>
				</div>
				<div>
					<br />
					<p></p>
					<p className=" border-t border-black">
						<i className="text-[7pt]">Date</i>
					</p>
				</div>
			</div>
		);
	});
};

const ChangeOrderForm = () => {
	const forms_fields = useSelector(fields);

	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const content = useFetchFilledFormQuery(formID);
	// const content = useSelector(savedResponse);
	const [highlighted, setHighlighted] = useState(false);
	// const project = content?.data?.data?.project;
	// const vendors = content?.data?.data?.vendors;
	let formData = !content?.data ? [] : content?.currentData?.data;

	const vendors = formData?.vendors;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const manager = formData?.project_manager;
	// const form_fields = formData?.form_fields;
	// const form_fields = useSelector(fields);
	const [awardee, setAwardee] = useState({ design: {}, contractor: {} });
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

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
		name: "Change Order Form",
		show: show ? "block" : "hidden",
		// stepDefault,
		// close: closeDownload,
	};
	return (
		<div>
			<DownLoadForm {...props} />

			<div>
				{/* Modal content */}
				<div className="relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14">
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="font-bold text-gray-900">Change Order Form</h3>
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
						<div
							className=" pt-8 pb-4 text-black font11 text-[10pt] arial-font leading-[1.2]"
							ref={downloadComponent}>
							<div>
								{/* Page 1 */}
								<div className="ml-[0.5in] mt-[0.5in] mr-[0.6in] h-[10.5in]  overflow-x-hidden ">
									<div className="mb-8 w-full pl-36">
										<img
											src={Logo}
											alt="logo"
											className="h-20 object-cover mb-12"
										/>
									</div>
									<div className="mb-16 -ml-3">
										<div className="flex mb-8">
											<p className=" w-28 flex justify-end">
												<i className="text-start text-[7pt]">Project:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{project?.name}
											</span>
										</div>
										<div className="flex  mb-8">
											<p className="w-28 flex justify-end text-[7pt]">
												<i className="">Project No:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{project?.number}
											</span>
										</div>
										<div className="flex  mb-8">
											<p className="w-28 flex justify-end text-[7pt]">
												<i className="text-end">Change Order No:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{forms_fields?.number}
											</span>
										</div>
										<div className="flex ">
											<p className="flex w-28 justify-end text-[7pt]">
												<i>Date:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{moment(forms_fields?.creatingDate).format(
													"MMMM D, YYYY"
												)}
											</span>
										</div>
									</div>

									<div className="ml-[7.2rem] ">
										<div className="mb-3 border-b-2 border-b-black ml-[1.5rem]">
											<p className="text-[16pt] text-right font-bold ">
												CHANGE ORDER
											</p>
										</div>

										<div className="border-y-2 border-y-black bg-gray-200 ml-6">
											<p className="font-bold">
												<span className="font-extrabold">T</span>
												<span className="font-thin text-[9pt]">HE</span>{" "}
												CONTRACT IS CHANGED AS FOLLOWS:
											</p>
										</div>
									</div>

									<div className="mt-4">
										<div className="flex mb-24">
											<div className="ml-[5.5rem]">
												<p>1.</p>
											</div>
											<div className="ml-[2.5rem] w-full">
												<p className="border-b-2 border-b-black font-bold text-sm mb-3">
													DESCRIPTION OF CHANGE
													<span>
														{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
													</span>
												</p>

												<p>
													<span className={`${nottoBeHighlighted} text-[9pt]`}>
														{forms_fields?.description}
													</span>
												</p>
											</div>
										</div>

										<div className="flex mb-4">
											<div className="ml-[5.5rem]">
												<p>2.</p>
											</div>
											<div className="ml-[2.5rem] w-full">
												<p className="border-b-2 border-b-black font-bold text-[11pt] mb-6 w-full flex items-end">
													<p className=" whitespace-nowrap inline-block w-full">
														CHANGE TO THE CONTRACT SUM
													</p>
													<span>
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													</span>
												</p>

												<p className="mb-4 text-[10pt]">
													The Contract Sum is changed as follows:
												</p>

												<div>
													<div className="grid grid-cols-4 border-y-2 border-y-black bg-gray-300 text-[8pt]">
														<div className=" text-center border-r-2 border-r-black  font-bold">
															<p>Original Contract Sum</p>
														</div>
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Net Sum of Prior <br /> Change Order(s)
															</p>
														</div>
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Amount of this Change <br /> Order - Add or
																(Deduct)
															</p>
														</div>
														<div className="font-bold text-center mr-2">
															<p>New Contract Sum</p>
														</div>
													</div>

													<div className="grid grid-cols-4 border-b-2 border-b-black">
														<div className="text-center border-r border-r-gray-300 text-[9pt] font-thin">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(forms_fields?.originalSum).format()}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(forms_fields?.netSum).format()}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span>
																	{forms_fields?.amountEffect === "Increased"
																		? "+"
																		: "-"}
																</span>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(forms_fields?.amount).format()}
																</span>
															</p>
														</div>
														<div className=" text-center">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{CalculateAmount(
																		forms_fields?.originalSum,
																		forms_fields?.netSum,
																		forms_fields?.amount,
																		forms_fields?.amountEffect
																	)}
																</span>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="flex mb-4">
											<div className="ml-[5.5rem]">
												<p>3.</p>
											</div>
											<div className="ml-[2.5rem] w-full text-[8pt]">
												<p className="border-b-2 border-b-black font-bold text-[11pt] w-full mb-6 flex items-end justify-start">
													<p className="whitespace-nowrap">
														CHANGE TO THE CONTRACT TIME
													</p>
													<span>
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													</span>
												</p>

												<p className="mb-4 text-[10pt]">
													The Contract Time is changed as follows:
												</p>

												<div>
													<div className="grid grid-cols-4 border-y-2 border-y-black bg-gray-300">
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Original Contract Substantial <br /> Completion
																Date
															</p>
														</div>
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Days Added by Prior <br /> Change Order(s)
															</p>
														</div>
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Number of Days Added by <br /> this Change Order
															</p>
														</div>
														<div className="font-bold text-center mr-4">
															<p>
																New Contract <br /> Substantial Completion
																<br />
																Date
															</p>
														</div>
													</div>

													<div className="grid grid-cols-4 border-b-2 border-b-black text-[9pt]">
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{moment(forms_fields?.completionDate).format(
																		"MMMM D, YYYY"
																	)}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{forms_fields?.priorChangeDays} days
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{forms_fields?.changeDays}
																</span>{" "}
																Calendar Days
															</p>
														</div>
														<div className=" text-center">
															<p className="">
																<span className={`${nottoBeHighlighted}`}>
																	{AddDate(
																		forms_fields?.completionDate,
																		forms_fields?.priorChangeDays,
																		forms_fields?.changeDays
																	)}
																</span>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="flex w-full">
											<div className="ml-[5.5rem]">
												<p>4.</p>
											</div>
											<div className="ml-[2.5rem] w-full">
												<p className="border-b-2 border-b-black font-extrabold text-[11pt] w-full">
													APPROVAL SIGNATURES
												</p>
											</div>
										</div>
										<div className="w-full ml-[8.5rem] h-24 flex justify-between items-end pb-4">
											<p className="text-[8pt]">1 of 2</p>
											<p className="text-end text-[5pt] ">
												{" "}
												FILENAME \p \* MERGEFORMAT R:\01 Administration\04
												Document & Form Templates\01 Document <br />
												Templates\T20160810 - DPS Change Order Form
												(Contractor).doc
											</p>
										</div>
									</div>
								</div>

								{/* Page 2 */}
								<div className="ml-[0.5in] mt-[1in] pt-[1in] pr-[0.6in]">
									<p>
										{" "}
										<span>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</span>
									</p>
									<div className="ml-[8.6rem]">
										<p className="mb-4 font-bold text-[9pt]">
											NOT VALID UNTIL SIGNED BY DESIGNER (IF APPLICABLE),
											CONTRACTOR, AND OWNER
										</p>

										<div>
											<div className="grid grid-cols-4 gap-4 mb-3">
												{forms_fields?.approval === "Approved" ? (
													<div>
														<p>
															<span className={`${nottoBeHighlighted}`}>
																{awardee?.design?.company_name}
															</span>
														</p>
														<p className="border-t border-black">
															<i className="text-[7pt]">Designer</i>
														</p>
													</div>
												) : null}
												<div>
													<p className="border-b border-black">
														<span
															className={`${nottoBeHighlighted}`}>{`${awardee?.design?.first_name} ${awardee?.design?.last_name}`}</span>
													</p>
													<p>
														<i>
															<span className="text-[7pt]">By</span>
														</i>
													</p>
												</div>
												<div>
													<p>
														<span></span>
													</p>
													<br />
													<p className="border-t border-black ">
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<p>
														<span></span>
													</p>
													<br />
													<p className="border-t border-black">
														<i className="text-[7pt]">Date</i>
													</p>
												</div>
											</div>

											<div className="grid grid-cols-4 gap-4 mb-3">
												<div>
													<p>
														{awardee?.contractor?.company_name}
														<span className={`${nottoBeHighlighted}`}></span>
													</p>
													<p className="border-t border-black">
														<i className="text-[7pt]">Contractor</i>
													</p>
												</div>
												<div>
													<p
														className={`${nottoBeHighlighted} border-b border-black`}>{`${awardee?.contractor?.first_name} ${awardee?.contractor?.last_name}`}</p>
													<p>
														<i className="text-[7pt]">By</i>
													</p>
												</div>
												<div>
													<br />
													<p className="border-b border-black"></p>
													<p>
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<br />
													<p className="border-b border-black"></p>
													<p>
														<i className="text-[7pt]">Date</i>
													</p>
												</div>
											</div>

											<div className="grid grid-cols-4 gap-4 mb-3">
												<div>
													<p className="border-b border-black">
														Durham Public Schools
													</p>
													<p>
														<i className="text-[7pt]">DPS Project Manager</i>
													</p>
												</div>
												<div>
													<p>
														<span className={`${nottoBeHighlighted}`}>
															{manager?.name}
														</span>
													</p>
													<p className="border-t border-black">
														<i className="text-[7pt]">By</i>
													</p>
												</div>
												<div>
													<br />
													<p className="border-b border-black"></p>
													<p>
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<p
														className={`${nottoBeHighlighted} border-b border-black`}>
														{moment(forms_fields?.signDate).format(
															"MMMM D, YYYY"
														)}
													</p>
													<p>
														<i className="text-[7pt]">Date</i>
													</p>
												</div>
											</div>
											<ToApprove
												name={forms_fields?.persons}
												nottoBeHighlighted={nottoBeHighlighted}
											/>

											<div className="grid grid-cols-4 gap-4">
												<div>
													<br />
													<p></p>
													<p className=" border-t border-black">
														<i className="text-[7pt]">Durham Public Schools</i>
													</p>
												</div>
												<div>
													<br />
													<p></p>
													<p className=" border-t border-black">
														<i className="text-[7pt]">By</i>
													</p>
												</div>
												<div>
													<br />
													<p></p>
													<p className=" border-t border-black">
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<br />
													<p></p>
													<p className=" border-t border-black">
														<i className="text-[7pt]">Date</i>
													</p>
												</div>
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
							onClick={() => dispatch(prevStep(2))}
						/>
						<DashboardButton
							onClick={() => {
								setHighlighted(true);
								dispatch(showDownload());
							}}
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

export default ChangeOrderForm;
