import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo from "../../../assets/formlogo.png";
import { prevStep, stepDefault } from "./reducerSlice";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { closeDownload, fields, savedResponse } from "../reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { project_details } from "../../Dashboard/add-project/projectSlice";
import { closeModal } from "../reducer";

const PreviewElement = () => {
	const dispatch = useDispatch();
	const downloadComponent = useRef();
	const [showModal, setShowModal] = useState(false);
	const [highlighted, setHighlighed] = useState(false);

	const formID = useSelector(project_document_id);
	const form_fields = useSelector(fields);
	const content = useFetchFilledFormQuery(formID);
	// const content = useSelector(savedResponse);
	const projectDetails = useSelector(project_details);
	const school = !projectDetails ? "" : projectDetails.school;
	const [awardee, setAwardee] = useState([]);
	// const { vendors, durham_profile, project } = content?.data?.data;

	// const vendors = content?.data?.data?.vendors;
	// const project = content?.data?.data?.project;
	// const durham_profile = content?.data?.data?.durham_profile;

	let formData = !content?.data ? [] : content?.data?.data;
	const vendors = formData?.vendors;
	const durham_profile = formData?.durham_profile;
	const project = formData?.project;

	const props = {
		component: downloadComponent,
		name: "Notice of Intent to Award - Consultant",
		show: showModal ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};

	useEffect(() => {
		if (!vendors) {
			return null;
		}
		const data = vendors?.filter((cur) => {
			if (cur.role !== "Design Consultant") {
				return {};
			}
			return cur;
		});
		setAwardee(data);
	}, [vendors]);

	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";
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
					<div className=" mx-auto mt-6  w-[95%] h-[35rem] overflow-y-auto b-red-900">
						<div
							className="bg-white pt-8 pb-4 text-black adverstise "
							ref={downloadComponent}>
							<div className="mb-6 text-center"></div>
							<div className="flex justify-between items-center pt-3 px-16">
								<div>
									<img src={Logo} alt="logo" className="h-16 object-cover" />
								</div>
								<div className="arial-font text-[8px] text-[#3B6979] pr-4">
									<p className="">Construction and Capital planning</p>
									<p className="">
										2011 Hamlin Road / Durham, North Carolina 27704
									</p>
									<div className="flex justify-between">
										<p className="">919-560-2216</p>
									</div>
								</div>
							</div>
							<div className="pl-36 pr-14 ">
								<div className="mt-3">
									<div className="flex items-center adverstise">
										{" "}
										<p className={`${nottoBeHighlighted}  text-justify my-2`}>
											{moment(form_fields.creationDate).format("MMMM D, YYYY ")}
										</p>
										{form_fields.approval === "Yes" && (
											<p className={`${nottoBeHighlighted} ml-10`}>
												**NOTE: Director approval is required to issue this
												letter**
											</p>
										)}
									</div>
									<p className={`${nottoBeHighlighted}  text-justify`}>
										{!awardee
											? ""
											: awardee[0]?.first_name + " " + awardee[0]?.last_name}
										, {!awardee ? "" : awardee[0]?.title}
									</p>
									<p className={`${nottoBeHighlighted}  text-justify`}>
										{!awardee ? "" : awardee[0]?.company_name}
									</p>
									<p className={`${nottoBeHighlighted}  text-justify`}>
										{!awardee ? "" : awardee[0]?.street}
									</p>
									<p className={`${nottoBeHighlighted}  text-justify`}>
										{!awardee
											? ""
											: awardee[0]?.city +
											  ", " +
											  awardee[0]?.state +
											  ", " +
											  awardee[0]?.zip_code}
									</p>
									{/* <p className='text-base text-justify'>City, State XXXXX</p> */}
									{/* //{`${nottoBeHighlighted}`} */}
								</div>

								<div className="">
									<div className="overflow-hidden w-96  flex justify-between mt-8">
										<p className="font-bold mb-2">RE:</p>
										<div className=" ml-14">
											<p>Durham Public Schools (DPS)</p>
											<p className={`${nottoBeHighlighted}`}>
												{!school ? "" : school.name} –{" "}
												{!project ? "" : project.name}
											</p>
											<p className={`${nottoBeHighlighted}`}>
												DPS Project No. {!project ? "" : project.number}
											</p>
										</div>
									</div>
								</div>

								<div className="flex  mt-4">
									<span>SUBJECT:</span>
									<h2 className="ml-6 font-black  text-black">
										NOTICE OF AWARD FOR CONSULTANT SERVICES
									</h2>
								</div>

								<div className="mt-6 mb-4">
									<p className={`${nottoBeHighlighted}`}>
										Dear Mr./Ms. {awardee[0]?.last_name},
									</p>
									<div className="mt-4 flex gap-8 leading-normal">
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
												{!awardee ? "" : awardee[0]?.company_name}
											</span>{" "}
											at a lump sum fee of{" "}
											<span className={`${nottoBeHighlighted}`}>
												{currency(form_fields.projectAmount).format()}
											</span>
											. Consultant services shall include the deliverables and
											scopes of work as outlined in the Contract.
										</p>
									</div>
									{console.log(form_fields.approval)}
									{form_fields.approval === "Yes" && (
										<div className="mt-4 flex gap-8">
											<p>
												Issuance of this contract does not represent any
												commitment on behalf of Durham Public Schools until
												reviewed and approved by the Board of Education. We
												anticipate the project being presented to the Board of
												Education for consideration of award on{" "}
												<span className={`${nottoBeHighlighted}`}>
													{moment(form_fields.approvalDate).format(
														"MMMM D, YYYY "
													)}
													.
												</span>
											</p>
										</div>
									)}
									<div className="mt-4 flex gap-8">
										<p>
											The attached contract is being transmitted to your office
											for review.{" "}
											<span className="font-bold underline">
												If in agreement, please print (single-sided) and execute
												(3) three sets of originals, and forward all documents
												(including (3) originals of all required insurance
												certificates)
											</span>{" "}
											to Construction & Capital Planning, 2011 Hamlin Road,
											Durham, North Carolina 27704 no later than{" "}
											<span className={`${nottoBeHighlighted}`}>
												{" "}
												{moment(form_fields.deliveryDate).format("dddd")},{" "}
												{moment(form_fields.deliveryDate).format(
													"MMMM D, YYYY "
												)}
											</span>
											. Pending award, one (1) fully executed copy of the
											contract will be returned for your records.
										</p>
									</div>
									<div className="mt-4 flex gap-8">
										<p>
											We look forward to working with you and your team on this
											project. If you have any questions, please contact me at{" "}
											<br />
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
									<div className="mt-4 gap-8">
										<p>Sincerely,</p>
										<p className={`${nottoBeHighlighted} my-6`}>
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
											<span className={`${nottoBeHighlighted}`}>
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
											<span className={`${nottoBeHighlighted}`}>
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
							onClick={() => dispatch(prevStep())}
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
