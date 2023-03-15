import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import DownLoadForm from "../../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import {
	project_document_id,
	selectFilled,
} from "../../../Dashboard/project-dashboard/ReducerSlice";
import { closeModal, openDownload, showDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";
import currency from "currency.js";
import moment from "moment";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";

const Change = () => {
	const [awardee, setAwardee] = useState([]);
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);

	const [highlighted, setHighlighted] = useState(false);
	// const project = content?.data?.data?.project;
	// const vendors = content?.data?.data?.vendors;
	let formData = a?.data;

	const vendors = formData?.vendors;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const form_fields = formData?.form_fields;
	// const form_fields = formData?.form_fields;

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter((cur) => cur.role === "Contractor");
		setAwardee(data);
	}, [vendors]);

	// const form_fields = useSelector(fields);
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const props = {
		component: downloadComponent,
		name: "Change Order Directive",
		show: show ? "block" : "hidden",
		stepDefault,
		// close: closeDownload,
	};
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
							<h3 className="text font-bold text-gray-900">
								Change Order Directive
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
							className=" pt-8 pb-4 text-black m-[1in] arial-font text-[9.9pt] leading-[1.3]"
							ref={downloadComponent}>
							<div>
								<div className="">
									<h1 className="font-bold pb-2 w-full border-b-1 border-b-black text-[15.9pt]">
										<em>Construction Change Directive</em>
										<span className="block bg-gray-400 w-full h-0.5 mt-1  "></span>
									</h1>

									<div className="grid grid-cols-2 pb-16 mb-4 mt-1 border-b border-b-black">
										<div>
											<div className="mb-3">
												<p className="font-bold text-[9pt]">PROJECT:</p>
												<p>
													<span
														className={`${nottoBeHighlighted} text-[9pt] Times-font`}>
														{project?.name}
													</span>
												</p>
											</div>
											<div>
												<p className="font-bold text-[9pt]">OWNER:</p>
												<p className="text-[9pt] Times-font">
													Durham Public Schools
												</p>
											</div>
										</div>

										<div>
											<div className="mb-3">
												<p className="font-bold text-[9pt]">Contractor:</p>
												<p>
													<span
														className={`${nottoBeHighlighted} text-[9pt] Times-font`}>
														{!awardee[0] ? "" : awardee[0]?.company_name}
													</span>
												</p>
											</div>
										</div>
									</div>

									<p className="font-bold mb-10 Times-font">
										The Contractor is hereby directed to make the following
										change(s) in this Contract:
									</p>

									<div className="mb-4">
										<p className="font-bold ">PROPOSED ADJUSTMENTS</p>

										<div className="mb-4 flex gap-12">
											<p>1.</p>
											<div>
												<p className="mb-4 Times-font">
													The proposed basis of adjustment to the Contract Sum
													or Guaranteed Maximum Price is:
												</p>
												<div className="flex items-center gap-1 mb-2 Times-font">
													{form_fields?.maxPrice !== "0" ? (
														<span className="inline-block"> &#10003;</span>
													) : (
														<input
															type="checkbox"
															name="lump"
															id="lump"
															disabled
														/>
													)}

													<label htmlFor="lump">
														Lump Sum increase of{" "}
														<span className={`${nottoBeHighlighted}`}>
															{form_fields?.maxPrice === "0"
																? ""
																: currency(form_fields?.amount).format()}
														</span>
													</label>
												</div>
												<div className="flex items-center gap-1 mb-2 Times-font">
													{form_fields?.unitPrice !== "0" ? (
														<span className="inline-block"> &#10003;</span>
													) : (
														<input
															type="checkbox"
															name="lump"
															id="lump"
															disabled
														/>
													)}
													{/* <input
														type="checkbox"
														name="lump"
														id="lump"
														disabled
														checked={
															form_fields?.unitPrice === "0" ? false : true
														}
													/> */}
													<label htmlFor="lump">
														Unit Price of{" "}
														<span className={`${nottoBeHighlighted}`}>
															{form_fields?.unitPrice === "0"
																? ""
																: currency(form_fields?.price).format()}
														</span>{" "}
														per{" "}
														<span className={`${nottoBeHighlighted}`}>
															{!form_fields
																? "0"
																: form_fields?.unitPrice === "0"
																? ""
																: form_fields?.contractTimePerHour}
														</span>
													</label>
												</div>

												<div className="flex items-center gap-1 mb-2 Times-font">
													{form_fields?.exceed !== "0" ? (
														<span className="inline-block"> &#10003;</span>
													) : (
														<input
															type="checkbox"
															name="lump"
															id="lump"
															disabled
														/>
													)}
													<label htmlFor="lump">
														Not to Exceed{" "}
														<span className={`${nottoBeHighlighted}`}>
															{form_fields?.exceed === "0"
																? ""
																: currency(form_fields?.exceedAmount).format()}
														</span>
													</label>
												</div>
											</div>
										</div>

										<div className="mb-1 flex gap-12 Times-font">
											<p>2.</p>
											<p className="mb-4">
												The Contract Time is proposed to remain unchanged. The
												proposed adjustment, if any, is{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!form_fields?.contractTime
														? "0"
														: form_fields.contractTime}{" "}
													days
												</span>
												.
											</p>
										</div>

										<p className="mb-12 Times-font">
											<em>
												NOTE: The Owner, Architect and Contractor should execute
												a Change Order to supersede this Construction Change
												Directive to the extent they agree upon adjustments to
												the Contract Sum, Contract Time, or Guaranteed Maximum
												price for the change(s) described herein.
											</em>
										</p>

										<div className="border-t border-t-black pt-4">
											<div className="flex justify-between mb-12 Times-font">
												<p className="text-[15pt]">OWNER </p>
												<p className="text-[15pt] mr-[8.5rem]">CONTRACTOR</p>
											</div>
											<div className="grid grid-cols-2  mb-12">
												<div>
													<div className="mb-12">
														<p className="border-t border-black font-bold">
															SIGNATURE
														</p>
													</div>

													<div className="mb-12 ">
														<p>
															<span className={`${nottoBeHighlighted}`}>
																{form_fields?.ownerDatabase}{" "}
															</span>{" "}
															<br />
															<span className={`${nottoBeHighlighted}`}>
																{form_fields?.position}
															</span>
														</p>
														<p className=" border-t border-black font-bold">
															PRINTED NAME AND TITLE
														</p>
													</div>

													<div>
														<p className=" border-b border-black">
															<span className={`${nottoBeHighlighted}`}>
																{!form_fields?.signDate
																	? ""
																	: moment(form_fields?.signDate).format(
																			"MMMM D, YYYY"
																	  )}
															</span>
														</p>
														<p className="font-bold">DATE</p>
													</div>
												</div>
												<div>
													<div className="mb-12 ml-10">
														{/* <p>_____________________________</p> */}
														<p className="flex justify-start border-t border-black font-bold">
															SIGNATURE
														</p>
													</div>

													<div className="mb-12 ml-10">
														<div className="mb-12 text-start">
															<p>
																<span className={`${nottoBeHighlighted}`}>
																	{awardee[0]?.first_name}{" "}
																	{awardee[0]?.last_name}
																</span>{" "}
																<br />
																<span className={`${nottoBeHighlighted}`}>
																	{awardee[0]?.title}
																</span>
															</p>
															<p className=" border-t border-black text-start font-bold">
																PRINTED NAME AND TITLE
															</p>
														</div>
													</div>

													<div className=" ml-10 mt-10 pt-4">
														<p className="border-t border-black font-bold">
															DATE
														</p>
													</div>
												</div>
											</div>
											<span className="block bg-gray-400 w-full h-0.5 -mt-10 "></span>
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
								dispatch(prevStep(1));
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

export default Change;
