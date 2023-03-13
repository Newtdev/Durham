import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload, showDownload } from "../../reducer";
import { useEffect, useRef, useState } from "react";
import {
	project_document_id,
	selectFilled,
} from "../../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../../Lundsford/Download";
import moment from "moment";
import currency from "currency.js";

import LogoOne from "../../../../assets/Durham.png";
import { prevStep } from "./reducer";
import { CalculateAmount } from "../Change order form/form/FormOne";
import { AddDate } from "../Change order form/form/FormTwo";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";

// const ToApprove = ({ name, nottoBeHighlighted }) => {
// 	return name?.map((person, i) => {
// 		return (
// 			<div className="grid grid-cols-4 gap-4 mb-3">
// 				<div>
// 					<p>
// 						<span className={`${nottoBeHighlighted}`}>
// 							Durham Public Schools
// 						</span>
// 					</p>
// 					<p className="border-t border-black">
// 						<i className="text-[7pt]">Durham Public Schools</i>
// 					</p>
// 				</div>
// 				<div>
// 					<p>
// 						<span className={`${nottoBeHighlighted}`}>{person?.name}</span>
// 					</p>
// 					<p className=" border-t border-black">
// 						<i className="text-[7pt]">By</i>
// 					</p>
// 				</div>
// 				<div>
// 					<br />
// 					<p></p>
// 					<p className=" border-t border-black">
// 						<i className="text-[7pt]">Signature</i>
// 					</p>
// 				</div>
// 				<div>
// 					<br />
// 					<p></p>
// 					<p className=" border-t border-black">
// 						<i className="text-[7pt]">Date</i>
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	});
// };

const Preview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	const [highlighted, setHighlighted] = useState(false);

	let formData = a?.data;

	const vendors = formData?.vendors;
	const project = formData?.project;
	const manager = formData?.project_manager;
	const forms_fields = formData?.form_fields;

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
		name: "Design Phase Change Order",
		show: show ? "block" : "hidden",
		// stepDefault,
		// close: closeDownload,
	};
	const companynameLength = awardee?.design?.company_name?.length;
	console.log(companynameLength);
	return (
		<div>
			<DownLoadForm {...props} />

			<div>
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="font-bold text-gray-900">
								Design Phase Change Order
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
						<div
							className=" pt-8 pb-4 text-black  text-[10pt] arial-font leading-[1.2]"
							ref={downloadComponent}>
							<div>
								{/* Page 1 */}
								<div className="ml-[0.5in] mt-[0.3in] mr-[0.6in] h-[11in]  overflow-x-hidden  ">
									<div className=" w-full pl-36">
										{/* <img
											src={Logo}
											alt="logo"
											className="h-20 object-cover mb-12"
										/> */}
										<img
											src={LogoOne}
											alt="logo"
											className="h-24 object-cover mb-6"
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
										<div className="flex mb-8">
											<p className="flex w-28 justify-end text-[7pt]">
												<i>Date:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{moment(forms_fields?.creatingDate).format(
													"MMMM D, YYYY"
												)}
											</span>
										</div>
										<div className="flex">
											<p className="flex w-28 justify-end text-[7pt]">
												<i>File:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{forms_fields?.file}
											</span>
										</div>
									</div>

									<div className="ml-[7.2rem] ">
										<div className="mb-3 border-b-2 border-b-black ml-[1.5rem]">
											<p className="text-[16pt] text-right font-bold ">
												DESIGN CONSULTANT CHANGE ORDER
											</p>
										</div>

										<div className="border-y-2 border-y-black bg-gray-200 ml-6">
											<p className="font-bold">
												THE CONTRACT IS CHANGED AS FOLLOWS:
											</p>
										</div>
									</div>

									<div className="mt-4">
										<div className="flex mb-24">
											<div className="ml-[5.5rem]">
												<p>1.</p>
											</div>
											<div className=" w-full">
												<p className=" ml-[2.5rem] border-b-2 border-b-black font-bold text-sm mb-3">
													DESCRIPTION OF CHANGE
													<span>
														{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&
                                                        nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
													</span>
												</p>

												<p className="ml-[2.5rem]">
													<p className="flex  justify-between  text-[9pt]">
														{/* <span className="inline-block -mr-6">2</span> */}
														<span>
															<span
																className={`${nottoBeHighlighted} break-word narrow-font text-[10pt]`}>
																{forms_fields?.description + "."}{" "}
															</span>
															<span>
																{forms_fields?.amountEffect === "Increased"
																	? "Add"
																	: forms_fields?.amountEffect === "Decreased"
																	? "Subtract"
																	: "No change"}
															</span>{" "}
															<span className={`${nottoBeHighlighted}`}>
																<span></span>
																{!forms_fields?.amountEffect
																	? ""
																	: currency(forms_fields?.amount).format()}
															</span>{" "}
															to the Contract Sum and{" "}
															<span className={`${nottoBeHighlighted}`}>
																{forms_fields?.changeDays + " " + "days"}
															</span>{" "}
															{!forms_fields?.changeDays ? (
																<span className={`${nottoBeHighlighted}`}>
																	No change
																</span>
															) : null}{" "}
															to the Contract Time
														</span>
													</p>
												</p>
											</div>
										</div>

										<div className="flex mb-4">
											<div className="ml-[5.5rem]">
												<p>2.</p>
											</div>
											<div className="ml-[2.5rem] w-full">
												<p className="border-b-2 border-b-black font-bold text-[11pt] mb-6 w-full flex items-end">
													<p className=" whitespace-nowrap inline-block w-full ">
														CHANGE TO THE CONTRACT SUM
													</p>
													<span>
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													</span>
												</p>

												<p className="mb-4 narrow-font text-[10pt]">
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

													<div className="grid grid-cols-4 border-b-2 border-b-black py-0.5">
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
																		: forms_fields?.amountEffect === "Decreased"
																		? "-"
																		: ""}
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

												<p className="mb-4 narrow-font text-[10pt]">
													The Contract Time is changed as follows:
												</p>

												<div>
													<div className="grid grid-cols-4 border-y-2 border-y-black bg-gray-300">
														<div className="font-bold text-center border-r-2 border-r-black">
															<p>
																Original Contract
																<br />
																End Date
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
																New Contract <br /> End Date New Contract
															</p>
														</div>
													</div>

													<div className="grid grid-cols-4 border-b-2 border-b-black text-[9pt] py-0.5">
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

										<div className="w-full ml-[8.5rem] h-16 flex justify-between items-end pb-4">
											<p className="text-[8pt]">1 of 2</p>
											<p className="text-end text-[5pt] mr-36">
												FILENAME \p \* MERGEFORMAT R:\01 Administration\04
												Document & Form Templates\01 Document <br />{" "}
												Templates\DRAFTS for review\T2016xxxx - DPS Change Order
												Form.doc{" "}
											</p>
										</div>
									</div>
								</div>

								{/* Page 2 */}
								<div className="ml-[0.5in] pr-[0.6in]">
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
									<div className="flex w-full ">
										<div className="ml-[5.5rem]">
											<p>4.</p>
										</div>
										<div className="ml-[2.5rem] w-full">
											<p className="border-b-2 border-b-black font-extrabold text-[11pt] w-full">
												APPROVAL SIGNATURES
											</p>
										</div>
									</div>
									<div className="ml-[8.4rem]">
										<p className="mb-4 font-bold text-[9pt]">
											NOT VALID UNTIL SIGNED BY DESIGNER AND OWNER
										</p>

										<div className="mt-10">
											<div className="grid grid-cols-4 gap-4 mb-3">
												<div>
													<p
														className={`border-b border-black ${
															companynameLength > 19
																? "pb-2"
																: companynameLength === 0
																? "mt-3.5"
																: ""
														}`}>
														<span
															className={`${nottoBeHighlighted} text-[9pt]`}>
															{`${awardee?.design?.company_name || ""}`}
														</span>
													</p>
													<p>
														<i className="text-[7pt]">Consultant</i>
													</p>
												</div>
												<div>
													<p
														className={`border-b border-black text-[9pt] ${
															companynameLength > 19
																? "pb-2"
																: companynameLength === 0
																? "mt-3.5"
																: ""
														}`}>
														<span className={`${nottoBeHighlighted} `}>
															{`${awardee?.design?.first_name || ""} ${
																awardee?.design?.last_name || ""
															}`}
														</span>
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

													<p
														className={`${
															companynameLength > 19
																? "mt-9"
																: companynameLength === 0
																? "mt-3.5"
																: companynameLength <= 19
																? "mt-3.5"
																: ""
														} border-t border-black`}>
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<p>
														<span></span>
													</p>
													<p
														className={`${
															companynameLength > 19
																? "mt-9"
																: companynameLength === 0
																? "mt-3.5"
																: companynameLength <= 19
																? "mt-3.5"
																: ""
														} border-t border-black`}>
														<i className="text-[7pt]">Date</i>
													</p>
												</div>
											</div>

											<div className="grid grid-cols-4 gap-4 mb-3">
												<div>
													<p className="border-b border-black pb-2 text-[9pt]">
														Durham Public Schools
													</p>
													<p>
														<i className="text-[7pt]">Owner</i>
													</p>
												</div>
												<div>
													<p className="pb-2 text-[9pt]">
														<span className={`${nottoBeHighlighted}`}>
															{forms_fields?.name}
														</span>
													</p>
													<p className="border-t border-black">
														<i className="text-[7pt]">By</i>
													</p>
												</div>
												<div>
													<br />
													<p className="border-b border-black pb-2"></p>
													<p>
														<i className="text-[7pt]">Signature</i>
													</p>
												</div>
												<div>
													<p
														className={`${nottoBeHighlighted} border-b border-black pb-2 text-[9pt]`}>
														{moment(forms_fields?.signDate).format(
															"MMMM D, YYYY"
														)}
													</p>
													<p>
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
							onClick={() => {
								dispatch(prevStep(2));
								dispatch(selectFilled(false));
							}}
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

export default Preview;
