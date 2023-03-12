import "react-datepicker/dist/react-datepicker.css";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo from "../../../assets/formlogo.png";
import LogoOne from "../../../assets/Durham.png";
import DownLoadForm from "../Lundsford/Download";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import {
	closeModal,
	fields,
	openDownload,
	savedResponse,
	showDownload,
} from "../reducer";
import moment from "moment/moment";
import { prev, stepDefault } from "./reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const ProjectCloseOutPreview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const [highlighted, setHighlighted] = useState();

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	const vendors = a?.data?.vendors;
	const project = a?.data?.project;
	const form_fields = a?.data?.form_fields;
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const props = {
		component: downloadComponent,
		name: "Project Close-out Documentation Checklist",
		show: show ? "block" : "hidden",
		stepDefault,
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
					{" "}
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg  text-gray-900">
								Project Closeout Checklist
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							type="button"
							onClick={() => dispatch(closeModal())}
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>
					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px] text-[10pt]">
						<div
							className="bg-white px-24 pt-3 pb-4 text-black arial-font  "
							ref={downloadComponent}>
							<div>
								<img
									src={LogoOne}
									alt="logo"
									className="h-24 object-cover  -ml-6"
								/>
								<h1 className="font-bold underline underline-offset-2 text-center mb-4 text-[14pt]">
									PROJECT CLOSE-OUT DOCUMENTATION CHECKLIST
								</h1>
								<div className="mb-2">
									<div className="flex justify-between items-center mb-3">
										<div>
											<p>
												Project:{" "}
												<span
													className={` ${nottoBeHighlighted} inline-block border-b border-black`}>
													{!project ? "" : project?.name}
												</span>
											</p>
										</div>
										<div className=" w-[20.5rem]">
											<p>
												Project No:{" "}
												<span
													className={` ${nottoBeHighlighted} inline-block border-b border-black w-36`}>
													{!project ? "" : project?.number}
												</span>
											</p>
										</div>
									</div>

									<div className="mb-3 flex justify-between items-center">
										<p>
											School:{" "}
											<span className="inline-block border-b border-black">
												Durham Public Schools{" "}
											</span>
										</p>
									</div>

									<div className="flex justify-between items-center mb-3">
										<div>
											<p>
												Contractor:{" "}
												<span
													className={` ${nottoBeHighlighted} inline-block border-b border-black`}>
													{!vendors ? "" : vendors[0]?.company_name}
												</span>
											</p>
										</div>
										<div className="ml-[49px]">
											<p>
												Substantial Completion Date:{" "}
												<span
													className={` ${nottoBeHighlighted} inline-block border-b border-black`}>
													{moment(form_fields?.completionDate).format(
														"MMMM D, YYYY "
													)}
												</span>
											</p>
										</div>
									</div>
								</div>

								<p className="mb-3 text-justify leading-[1.1] text-[9pt] ">
									NOTE: When all of the following documents have been completed
									and received, this checklist should be completed. Copies of
									documents should accompany the final application for payment
									as noted below by asterisks. The original checklist and
									original documents should be filed in the project’s close-out
									file when completed.
								</p>

								{/* Lists */}
								<div className="mb-6 leading-[1.1] w-full">
									<div className="flex ">
										<p className={``}>
											<span>{"__1.*"}</span>
										</p>
										<p className="ml-4">
											Fully executed Certificate of Substantial Completion with
											attached punch list(s).
										</p>
									</div>
									<div
										className={`flex ${
											form_fields?.two ? nottoBeHighlighted : ""
										}`}>
										<p className={``}>
											<span>{"__2.*"}</span>
										</p>
										<p className="ml-4">
											Fully executed Final Change Order (i.e., for allowances,
											deductions for work done by others, etc.)
										</p>
									</div>

									<div
										className={`flex ${
											form_fields?.three ? nottoBeHighlighted : ""
										}`}>
										<p className={``}>
											<span>{"__3."}</span>
										</p>
										<p className="ml-5">
											Final Approved Application for Payment
										</p>
									</div>

									<div className="flex">
										<p className={``}>
											<span>{"__4.**"}</span>
										</p>
										<p className="ml-2.5">Consent of Surety to Final Payment</p>
									</div>

									<div className="flex">
										<p className="">
											<span>{"__5.**"}</span>
										</p>
										<p className="ml-2.5">
											Contractor’s Affidavit of Release of Liens (properly
											signed, notarized, etc, with no exceptions)
										</p>
									</div>

									<div className="flex">
										<p className={``}>
											<span>{"__6.**"}</span>
										</p>
										<p className="ml-2.5">
											Contractor’s Affidavit of Payment of Debts and Claims
											(properly signed, notarized, etc., with no exceptions)
										</p>
									</div>

									<div className="flex">
										<p className={``}>
											<span>{"__7.**"}</span>
										</p>
										<p className="ml-2.5">
											Properly executed release of liens by subcontractors
											and/or vendors (if applicable for those who have had
											problems with payments, etc. per General Conditions)
										</p>
									</div>

									<div className="flex">
										<p className={` `}>
											<span>{"__8.**"}</span>
										</p>
										<p className="ml-2.5">
											Certificate of Occupancy from proper municipality (Durham
											County Inspections / Durham FM)
										</p>
									</div>
									<div className={`flex`}>
										<p className={``}>
											<span>{"__9.**"}</span>
										</p>
										<p className={`ml-2.5 `}>
											Contractor’s One-Year Warranty (notarized)
										</p>
									</div>
									<div className={`flex `}>
										<p className={``}>
											<span>{"__10.*"}</span>
										</p>
										<p className={`text-justify ml-2`}>
											Warranty summary sheet and original warranties for
											specific items (roofs, motors, etc.)
										</p>
									</div>
									<div className={`flex`}>
										<p className={``}>
											<span>{"__11.**"}</span>
										</p>
										<p className={`ml-0.5 text-justify`}>
											Contractor’s certification letter per General Conditions
										</p>
									</div>
									<div className={`flex`}>
										<p className={``}>
											<span>{"__12.**"}</span>
										</p>
										<p className={`text-justify ml-0.5`}>
											Certification letter from Contractor stating that no
											asbestos containing materials were used (copy to
											Environmental Management)
										</p>
									</div>
									<div className={`flex `}>
										<p className={``}>
											<span>{"__13.**"}</span>
										</p>
										<p className={`text-justify ml-0.5`}>
											Certification letter from Architect (or Engineer)
											regarding asbestos, per EPA regulations (copy to
											Environmental Management)
										</p>
									</div>
									<div className={`flex`}>
										<p className={``}>
											<span>{"__14.**"}</span>
										</p>
										<p className={`text-justify ml-0.5`}>
											Architect’s and MEP Engineer’s certification letter saying
											punch list is complete, the work is per contract
											requirements, and recommending final payment be made to
											Contractor
										</p>
									</div>
									<div className={`flex`}>
										<p className={``}>
											<span>{"__15.**"}</span>
										</p>
										<p className={`ml-1 text-justify`}>
											Architects (or Engineer’s) letter regarding liquidated
											damages
										</p>
									</div>

									<div className={`flex `}>
										<p className={``}>
											<span>{"__16.*"}</span>
										</p>
										<p className={`ml-2 text-justify`}>
											Transmittal indicating keys have been given to Principal –
											signed by Principal
										</p>
									</div>
									<div
										className={`flex
                    `}>
										<p className={``}>
											<span>{"__17.*"}</span>
										</p>
										<p className={` ml-2  text-justify`}>
											Final list of all subcontractors with names, addresses,
											and phone numbers (especially emergency numbers)
										</p>
									</div>

									<div
										className={`flex 
                    `}>
										<p className={``}>
											<span>{"__18.*"}</span>
										</p>
										<p className={` ml-2  text-justify`}>
											Letter from General Contractor Stating Removal of
											Temporary Facilities
										</p>
									</div>
									<div
										className={`flex 
                    `}>
										<p>
											<span>{"__19.*"}</span>
										</p>
										<p className={`   text-justify ml-2`}>
											As-Built Redline drawings (3 sets Stamped certified) and
											As-Built Electronic drawings (2 sets) received from A/E
											and cover letter from Architect and Engineer saying they
											have been reviewed and are as complete and accurate as
											possible, attach completed transmittal to Owner.
										</p>
									</div>
									<div
										className={`flex
                    `}>
										<p className={``}>
											<span>{"__20.*"}</span>
										</p>
										<p className={`   text-justify ml-2`}>
											Operations and Maintenance Manuals (3 sets) and cover
											letter from Architect and Engineer saying they are
											complete and have been reviewed, attach completed
											transmittal to Owner.
										</p>
									</div>
									<div
										className={`flex
                    `}>
										<p className={``}>
											<span>{"__21.*"}</span>
										</p>
										<p className={`text-justify ml-2`}>
											Final commissioning report with certified Test And Balance
											report. Include cover letter indicating it TAB has been
											reviewed and approved by consulting Engineer
										</p>
									</div>
									<div
										className={`flex 
                    `}>
										<p>__22.</p>
										<p className={`  ml-3 text-justify`}>
											2-CD’s record drawing files
										</p>
									</div>
								</div>

								<div className=" pt-[1in] h-[10in] ">
									<div className="mb-3">
										<span>Project Manager's Signature</span>
										<span className=" underline underline-offset-1">
											_________________Date_______
											<span className="">
												<span className={` ${nottoBeHighlighted}`}>
													{moment(form_fields?.signedDate).format(
														"MMMM D, YYYY "
													)}
												</span>
												{/* <span>_________________________________</span> */}
											</span>
										</span>
									</div>

									<p className="leading-[1]">
										*copy of cover document only to be attached with copy of
										checklist to final application for payment and
									</p>
									<p className="mb-10">
										**copy of document kept in project accounting notebook
									</p>

									<p className="text-[9pt] flex mt-[7.6in]">
										R:\01 Administration\04 Document & Form Templates\06
										Project\10 Project Closeout\Project Closeout Checklist -
										T20160317.doc
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prev(3))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
							onClick={() => {
								setHighlighted(true);
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCloseOutPreview;
