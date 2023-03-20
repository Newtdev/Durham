import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import LogoOne from "../../../assets/Durham.png";
import { prevStep, stepDefault } from "./reducerSlice";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { closeDownload } from "../reducer";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { closeModal } from "../reducer";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const PreviewElement = () => {
	const dispatch = useDispatch();
	const downloadComponent = useRef();
	const [showModal, setShowModal] = useState(false);
	const [highlighted, setHighlighed] = useState(false);

	const formID = useSelector(project_document_id);
	// RETURNS DURHAM PROFILE DETAILS, FORM FIELDS, VENDOR AND PROJECT MANAGER INFO
	const [a] = UseFetchFilledFormDetails(formID);

	const [awardee, setAwardee] = useState([]);

	let formData = a?.data;
	const vendors = formData?.vendors;
	const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const form_fields = formData?.form_fields;
	const school = formData?.project?.school;

	const props = {
		component: downloadComponent,
		name: "Notice of Intent to Award - Consultant",
		show: showModal ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter(
			(cur) =>
				cur.role === "Design Consultant" ||
				cur.role === "Engineering Consultant"
		);
		setAwardee(data);
	}, [vendors]);

	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	const vendor = awardee[0] || {};
	return (
		<>
			<div>
				{/* Modal content */}
				<DownLoadForm {...props} />
				<div
					className={` ${
						showModal
							? "hidden"
							: " relative mx-auto w-[60rem] h-[46rem] bg-white rounded-lg shadow mt-4"
					}`}>
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Notice of Intent to Award - Consultant
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					{/* Forms */}
					<div className=" mx-auto mt-6  w-[95%] h-[35rem] overflow-y-auto">
						<div
							className="bg-white pt-8 pb-4 text-black adverstise  pr-[1in]"
							ref={downloadComponent}>
							<div className="mb-6 text-center"></div>
							<div className="flex justify-between items-center pt-3 pl-16 pr-4 ">
								<div>
									<img
										src={LogoOne}
										alt="logo"
										className="h-20 object-cover ml-1"
									/>
								</div>
								<div className="arial-font text-[10.5px] mt-1.5 text-[#3B6979] pr-4">
									<p className="">Construction and Capital planning</p>
									<p className="">
										2011 Hamlin Road / Durham, North Carolina 27704
									</p>
									<div className="flex justify-between">
										<p className="">919-560-2216</p>
									</div>
								</div>
							</div>
							<div className="pl-36 text-[14.5px]">
								<div className="mt-3">
									<div className="flex items-center adverstise">
										{" "}
										<p
											className={`${nottoBeHighlighted} text-[13.5px]  text-justify my-2`}>
											{moment(form_fields?.creationDate).format(
												"MMMM D, YYYY "
											)}
										</p>
										{form_fields?.approval === "Yes" && (
											<p
												className={`${nottoBeHighlighted} text-[13.5px] ml-10`}>
												**NOTE: Director approval is required to issue this
												letter**
											</p>
										)}
									</div>
									<p
										className={`${nottoBeHighlighted}  text-justify leading-[1.2]`}>
										{!vendor
											? ""
											: vendor?.first_name ||
											  "" + " " + vendor?.last_name ||
											  ""}
										, {!vendor ? "" : vendor?.title || ""}
									</p>
									<p
										className={`${nottoBeHighlighted} leading-[1.2]  text-justify`}>
										{!vendor ? "" : vendor?.company_name || ""}
									</p>
									<p
										className={`${nottoBeHighlighted} leading-[1.2] text-justify`}>
										{!vendor ? "" : vendor?.street || ""}
									</p>
									<p
										className={`${nottoBeHighlighted} leading-[1.2] text-justify`}>
										{!vendor?.city ? "" : vendor?.city}
										{!vendor?.state ? "" : ", " + vendor?.state}
										{!vendor?.zip_code ? "" : ", " + vendor?.zip_code}
									</p>
									{/* <p className='text-base text-justify'>City, State XXXXX</p> */}
									{/* //{`${nottoBeHighlighted}`} */}
								</div>

								<div className="">
									<div className="overflow-hidden flex mt-4">
										<p className=" mb-2">RE:</p>
										<div className=" ml-14">
											<p>Durham Public Schools (DPS)</p>
											<p className={`${nottoBeHighlighted} -my-1`}>
												{!school ? "" : school.name} –{" "}
												{!project ? "" : project.name}
											</p>
											<p className={`w-full ${nottoBeHighlighted}`}>
												DPS Project No. {!project ? "" : project.number}
											</p>
										</div>
									</div>
								</div>

								<div className="flex  mt-4">
									<span>SUBJECT:</span>
									<h2 className="ml-3 font-black  text-black">
										NOTICE OF INTENT TO AWARD – DESIGN SERVICES
									</h2>
								</div>

								<div className="mt-6 mb-4">
									<p className={`${nottoBeHighlighted}`}>
										Dear Mr./Ms. {vendor?.last_name}:
									</p>
									<div className="mt-2 flex gap-8 leading-[1.2]">
										<p>
											This letter serves as a Notice of Intent to Award for the{" "}
											<span className={`${nottoBeHighlighted}`}>
												{!project ? "" : project.name}
											</span>{" "}
											project located at{" "}
											<span className={`${nottoBeHighlighted}`}>
												{!school ? "" : school.address}
											</span>{" "}
											in Durham, North Carolina. Durham Public School
											Administration is recommending award of the work to{" "}
											<span className={`${nottoBeHighlighted}`}>
												{!vendor ? "" : vendor?.company_name}
											</span>{" "}
											at a lump sum fee of{" "}
											<span className={`${nottoBeHighlighted}`}>
												{currency(form_fields?.projectAmount).format()}
											</span>
											. Consultant services shall include the deliverables and
											scopes of work as outlined in the Contract.
										</p>
									</div>
									{form_fields?.approval === "Yes" && (
										<div className="mt-2 flex gap-8 leading-[1.2]">
											<p>
												Issuance of this contract does not represent any
												commitment on behalf of Durham Public Schools until
												reviewed and approved by the Board of Education. We
												anticipate the project being presented to the Board of
												Education for consideration of award on{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!form_fields?.approvalDate
														? ""
														: moment(form_fields?.approvalDate).format(
																"MMMM D, YYYY."
														  )}
												</span>
											</p>
										</div>
									)}
									<div className="mt-3 flex gap-8 leading-[1.3]">
										<p>
											The attached contract is being transmitted to your office
											for review. If in agreement,{" "}
											<span className="font-bold underline">
												please print (single-sided) and execute (3) three sets
												of originals, and forward all documents (including (3)
												originals of all required insurance certificates)
											</span>{" "}
											to Construction & Capital Planning, 2011 Hamlin Road,
											Durham, North Carolina 27704 no later than{" "}
											<span className={`${nottoBeHighlighted}`}>
												{!form_fields?.deliveryDate
													? ""
													: moment(form_fields?.deliveryDate).format(
															"dddd"
													  )}{" "}
												{!form_fields?.deliveryDate
													? ""
													: moment(form_fields?.deliveryDate).format(
															"MMMM D, YYYY."
													  )}
											</span>{" "}
											Pending award, one (1) fully executed copy of the contract
											will be returned for your records.
										</p>
									</div>
									<div className="mt-3 flex gap-8 leading-[1.3]">
										<p>
											We look forward to working with you and your team on this
											project. If you have any questions, please contact me at{" "}
											<span className={`${nottoBeHighlighted}`}>
												{!durham_profile
													? ""
													: !durham_profile
															.construction_capital_planning_project_managers_phone_number
															.name
													? ""
													: durham_profile
															.construction_capital_planning_project_managers_phone_number
															.name}
											</span>
											.
										</p>
									</div>
									<div className="mt-2 gap-8">
										<p className="mb-10">Sincerely,</p>
										<p className={`${nottoBeHighlighted} mb-4`}>
											{!durham_profile
												? ""
												: !durham_profile
														.construction_capital_planning_project_manager.name
												? ""
												: durham_profile
														.construction_capital_planning_project_manager.name}
											<br />
											C&CP Project Manager
										</p>
										<p>Enclosure</p>
										<p>
											Cc:{" "}
											<span
												className={`inline-block my-3 ml-3 ${nottoBeHighlighted}`}>
												{!durham_profile
													? ""
													: !durham_profile.director_of_design_and_construction
															.name
													? ""
													: durham_profile.director_of_design_and_construction
															.name}
											</span>{" "}
											- DPS Director of Design and Construction
										</p>
										<p>
											File:{" "}
											<span
												className={`inline-block ml-2 ${nottoBeHighlighted}`}>
												{!project ? "" : project.number}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons exportPDFWithComponent */}
					<div className="flex justify-end items-center h-20 gap-4 py-4 pr-6">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => {
								dispatch(prevStep(1));
								dispatch(selectFilled(false));
							}}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
							onClick={() => {
								setShowModal(true);
								setHighlighed(true);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviewElement;
