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
import { CalculateAmount } from "./form/FormOne";
import { AddDate } from "./form/FormTwo";
import Logo from "../../../../assets/formlogo.png";
import LogoOne from "../../../../assets/Durham.png";
import { prevStep } from "./reducer";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { parseDynamicInput, trucateText } from "../../../../shared-component";

const ToApprove = ({ name, nottoBeHighlighted, vendors }) => {
	if (!name) {
		return null;
	}
	const approvalPerson = parseDynamicInput(name?.persons);

	return (
		<table className="w-full border border-white  text-center  border-separate border-spacing-y-6 ">
			{name?.approval === "Yes" ? (
				<tr>
					<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse  relative">
						<p>
							<p>
								<span
									className={`inline-block text-left ${nottoBeHighlighted} `}>
									{vendors?.design?.company_name}
								</span>
							</p>
							<p className="">
								<i className="text-[7pt] absolute -bottom-3.5">Designer</i>
							</p>
						</p>
					</td>
					<td className="w-1"></td>
					<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse relative">
						<p>
							<p>
								<span
									className={`inline-block text-left ${nottoBeHighlighted} `}>
									{vendors?.design?.first_name +
										" " +
										vendors?.design?.last_name}
								</span>
							</p>
							<p className="">
								<i className="text-[7pt] absolute -bottom-3.5">By</i>
							</p>
						</p>
					</td>
					<td className="w-1"></td>
					<td className="text-[8pt] border-b w-[25%] mx-2 text-left border-black border-collapse relative">
						<div className="">
							<p>
								<span
									className={`inline-block text-left ${nottoBeHighlighted} border-red-900 `}></span>
							</p>
							<p className="">
								<i className="text-[7pt] absolute -bottom-3.5">Signature</i>
							</p>
						</div>
					</td>
					<td className="w-1"></td>
					<td className="text-[8pt] border-b w-[25%s] text-left border-black border-collapse relative">
						<div>
							<p>
								<span
									className={`inline-block text-left ${nottoBeHighlighted} `}></span>
							</p>
							<p className="">
								<i className="text-[7pt] absolute -bottom-3.5 ">Date</i>
							</p>
						</div>
					</td>
				</tr>
			) : null}
			<tr>
				<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse  relative">
					<p>
						<p>
							<span className={`inline-block text-left ${nottoBeHighlighted} `}>
								{vendors?.contractor?.company_name}
							</span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">Contractor</i>
						</p>
					</p>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse relative">
					<p>
						<p>
							<span className={`inline-block text-left ${nottoBeHighlighted} `}>
								{!vendors?.contractor
									? ""
									: vendors?.contractor?.first_name + " " + !vendors?.contractor
									? ""
									: vendors?.contractor?.last_name}
							</span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">By</i>
						</p>
					</p>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%] mx-2 text-left border-black border-collapse relative">
					<div className="">
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} border-red-900 `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">Signature</i>
						</p>
					</div>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%s] text-left border-black border-collapse relative">
					<div>
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5 ">Date</i>
						</p>
					</div>
				</td>
			</tr>

			{approvalPerson?.map((person, i) => {
				return (
					<tr>
						<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse relative">
							<p>
								<p>
									<span
										className={`inline-block text-left ${nottoBeHighlighted} `}>
										{person?.position}
									</span>
								</p>
								<p className="">
									<i className="text-[7pt] absolute -bottom-3.5">
										Durham Public School
									</i>
								</p>
							</p>
						</td>
						<td className="w-1"></td>
						<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse relative">
							<p>
								<p>
									<span
										className={`inline-block text-left ${nottoBeHighlighted} `}>
										{person?.name}
									</span>
								</p>
								<p className="">
									<i className="text-[7pt] absolute -bottom-3.5">By</i>
								</p>
							</p>
						</td>
						<td className="w-1"></td>
						<td className="text-[8pt] border-b w-[25%] mx-2 text-left border-black border-collapse relative">
							<div className="">
								<p>
									<span
										className={`inline-block text-left ${nottoBeHighlighted} border-red-900 `}></span>
								</p>
								<p className="">
									<i className="text-[7pt] absolute -bottom-3.5">Signature</i>
								</p>
							</div>
						</td>
						<td className="w-1"></td>
						<td className="text-[8pt] border-b w-[25%s] text-left border-black border-collapse relative">
							<div>
								<p>
									<span
										className={`inline-block text-left ${nottoBeHighlighted} `}></span>
								</p>
								<p className="">
									<i className="text-[7pt] absolute -bottom-3.5 ">Date</i>
								</p>
							</div>
						</td>
					</tr>
				);
			})}
			<tr>
				<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse  relative">
					<p>
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">
								Durham Public School
							</i>
						</p>
					</p>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%] text-left border-black border-collapse relative">
					<p>
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">By</i>
						</p>
					</p>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%] mx-2 text-left border-black border-collapse relative">
					<div className="">
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} border-red-900 `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5">Signature</i>
						</p>
					</div>
				</td>
				<td className="w-1"></td>
				<td className="text-[8pt] border-b w-[25%s] text-left border-black border-collapse relative">
					<div>
						<p>
							<span
								className={`inline-block text-left ${nottoBeHighlighted} `}></span>
						</p>
						<p className="">
							<i className="text-[7pt] absolute -bottom-3.5 ">Date</i>
						</p>
					</div>
				</td>
			</tr>
		</table>
	);

	{
		/* 
			<tr>
				<td
					className={`${
						forms?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse text-[8pt] py-[0.5px] text-[8pt] py-[0.5px]`}>
					{!data ? "" : !data[0] ? "" : data[0].quantity}
				</td>
				
			</tr> */
	}

	{
		/* <tr className="text-xs">
			
				
			</tr> */
	}

	// <div key={i} className="grid grid-cols-4 gap-4 mb-3">
	// 	<div className="relative">
	// 		<p>
	// 			<span
	// 				className={`${nottoBeHighlighted} ${
	// 					positionlength > 25
	// 						? "text-[7pt]"
	// 						: positionlength === 0
	// 						? ""
	// 						: positionlength <= 19
	// 						? ""
	// 						: ""
	// 				}`}>
	// 				{person?.position}
	// 			</span>
	// 		</p>
	// 		<p className="border-t border-black"></p>
	// 	</div>
	// 	<div>
	// 		<p>
	// 			{console.log(positionlength > 25)}
	// 			<span
	// 				className={`inline-block ${nottoBeHighlighted} ${
	// 					positionlength > 25
	// 						? "text-[7pt]"
	// 						: positionlength === 0
	// 						? "bg-red-900"
	// 						: positionlength <= 19
	// 						? "bg-red-900"
	// 						: "bg-red-900"
	// 				}`}>
	// 				{person?.name}
	// 			</span>
	// 		</p>
	// 		<p className=" border-t border-black">
	// 			<i className="text-[7pt]">By</i>
	// 		</p>
	// 	</div>
	// 	<div>
	// 		<br />
	// 		<p></p>
	// 		<p className=" border-t border-black">
	// 			<i className="text-[7pt]">Signature</i>
	// 		</p>
	// 	</div>
	// 	<div>
	// 		<br />
	// 		<p></p>
	// 		<p className=" border-t border-black">
	// 			<i className="text-[7pt]">Date</i>
	// 		</p>
	// 	</div>
	// </div>
};

const ChangeOrderForm = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);
	const [highlighted, setHighlighted] = useState(false);

	let formData = a?.data;

	const vendors = formData?.vendors;
	console.log(vendors);
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
			console.log(cur);
			if (
				cur.role === "Design Consultant" ||
				cur.role === "Engineering Consultant"
			) {
				setAwardee((prev) => {
					return { ...prev, design: cur };
				});
				console.log(cur);
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
	const school = "Durham Public Schools";
	const design = undefined;
	const contractorlength = design;
	// const contractorlength = awardee?.contractor?.company_name?.length;
	const designlength = awardee?.design?.company_name?.length;
	const schoollength = school?.length;
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
											src={LogoOne}
											alt="logo"
											className="h-24 object-cover mb-"
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
												{forms_fields?.orderNumber}
											</span>
										</div>
										<div className="flex ">
											<p className="flex w-28 justify-end text-[7pt]">
												<i>Date:</i>
											</p>
											<span className={`${nottoBeHighlighted} ml-[2.5rem]`}>
												{moment(forms_fields?.orderCreatingDate).format(
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
														{trucateText(forms_fields?.orderDescription, 50)}
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

													<div className="grid grid-cols-4 border-b-2 border-b-black py-0.5">
														<div className="text-center border-r border-r-gray-300 text-[9pt] font-thin">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(
																		forms_fields?.orderOriginalSum
																	).format()}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(forms_fields?.orderNetSum).format()}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span>
																	{forms_fields?.orderAmountEffect ===
																	"Increased"
																		? "+"
																		: "-"}
																</span>
																<span className={`${nottoBeHighlighted}`}>
																	{currency(forms_fields?.orderAmount).format()}
																</span>
															</p>
														</div>
														<div className=" text-center">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{CalculateAmount(
																		forms_fields?.orderOriginalSum,
																		forms_fields?.orderNetSum,
																		forms_fields?.orderAmount,
																		forms_fields?.orderAmountEffect
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

													<div className="grid grid-cols-4 border-b-2 border-b-black text-[9pt] py-0.5">
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{moment(
																		forms_fields?.orderCompletionDate
																	).format("MMMM D, YYYY")}
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{forms_fields?.orderPriorChangeDays} days
																</span>
															</p>
														</div>
														<div className=" text-center border-r border-r-gray-300">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{forms_fields?.orderChangeDays}
																</span>{" "}
																Calendar Days
															</p>
														</div>
														<div className=" text-center">
															<p className="">
																<span className={`${nottoBeHighlighted}`}>
																	{AddDate(
																		forms_fields?.orderCompletionDate,
																		forms_fields?.orderPriorChangeDays,
																		forms_fields?.orderChangeDays
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
								<div className="ml-[0.5in] pt-[1in] pr-[0.6in]">
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
											<ToApprove
												name={forms_fields}
												vendors={awardee}
												nottoBeHighlighted={nottoBeHighlighted}
											/>
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

export default ChangeOrderForm;
