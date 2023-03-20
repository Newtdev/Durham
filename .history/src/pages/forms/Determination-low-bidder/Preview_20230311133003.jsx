import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import LogoOne from "../../../assets/Durham.png";

import { Close, DashboardButton } from "../../Dashboard/Components";
import { prevStep, stepDefault } from "./reducer";
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import { useEffect, useRef, useState } from "react";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
import moment from "moment";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const Preview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const [highlighted, setHighlighed] = useState(false);
	const [awardee, setAwardee] = useState([]);

	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);
	const project = a?.data?.project;
	const vendors = a?.data?.vendors;
	const durham_profile = a?.data?.durham_profile;
	const school = project?.school;
	const form_fields = a?.data?.form_fields;

	const props = {
		component: downloadComponent,
		name: "Determination of Apparent Low Bidder",
		show: show ? "block" : "hidden",
		stepDefault,
		remove: () => setHighlighed(true),
	};

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter((cur) => cur.role === "Contractor");

		setAwardee(data);
	}, [vendors]);

	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	return (
		<div>
			<div>
				<DownLoadForm {...props} />

				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					{" "}
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Determination of Apparent Low Bidders
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
							className="pl-16 pr-[1in] pt-10 pb-4 text-black arial-font text-[14.5px] leading-[1.3]"
							ref={downloadComponent}>
							<div>
								<div className="flex mb-4">
									<div className="w-1/2">
										<img
											src={LogoOne}
											alt="logo"
											className="h-20 -ml-16 w-full object-contain"
										/>
									</div>
									<div className="ml-[5.7rem] mt-5">
										<p className="text-[9.9px] text-[#3B6979]">
											Construction and Capital Planning
										</p>
										<p className="text-[9.9px] text-[#3B6979]">
											2011 Hamlin Road / Durham, North Carolina 27704
											<br />
											919-560-2216
										</p>
									</div>
								</div>
								<div className="mb-6 pl-20 text-[14.5px]">
									<p className="mb-4">
										<span className={`${nottoBeHighlighted} text-[14.5px]  `}>
											{moment(form_fields?.creationDate).format(
												"MMMM D, YYYY "
											)}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}   `}>
											{!awardee[0]
												? ""
												: awardee[0]?.first_name + " " + awardee[0]?.last_name}
										</span>{" "}
									</p>
									<p>
										<span className={`${nottoBeHighlighted}  `}>
											{!awardee[0] ? "" : awardee[0]?.company_name}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}  `}>
											{!awardee[0] ? "" : awardee[0]?.street}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted} `}>
											{!awardee[0] ? "" : awardee[0]?.city},{" "}
											{!awardee[0] ? "" : awardee[0]?.state},{" "}
											{!awardee[0] ? "" : awardee[0]?.zip_code}
										</span>
									</p>
								</div>

								<div>
									<div className="flex mb-4 leading-[1.3] pl-20">
										<p>RE:</p>
										<div className="ml-[4.8rem]">
											<p>Durham Public Schools (DPS)</p>
											<p>
												{/* <span className='bg-yellow-500 font-bold '>F6</span> -{" "} */}
												<span className={`${nottoBeHighlighted}  `}>
													{!school ? "" : school?.name} -{" "}
													{!project ? "" : project?.name}
												</span>{" "}
												(
												<span className={`${nottoBeHighlighted} `}>
													{!project ? "" : project?.number}
												</span>
												)
											</p>
										</div>
									</div>
									<div className="flex mb-9 pl-20">
										<p>SUBJECT:</p>
										<div className="ml-8">
											<p className="font-bold">
												Determination of Apparent Low Bidders
											</p>
										</div>
									</div>
									<p className="mb-4 pl-20 text-[14.5px]">
										Dear{" "}
										<span className={`${nottoBeHighlighted}  `}>Mr./Ms.</span>{" "}
										<span className={`${nottoBeHighlighted}  `}>
											{!awardee[0] ? "" : awardee[0]?.last_name}
										</span>
										:
									</p>
									<p className="mb-3 pl-20 leading-[1.3] text-[14.5px]">
										Your firm has been determined to be the apparent low bidder
										by Durham Public Schools.
									</p>
									<p className="mb-3 pl-20 text-[14.5px]">
										You are required to submit MWBE Affidavit C (Portion of Work
										to be Performed by Minority Firms) and, if necessary,
										Affidavit D (Good Faith Efforts) within 72 hours of receipt
										of this notice. For Affidavit C, if you are self-performing
										and a certified minority firm, you must list information for
										your firm in the table. Affidavit D must include all
										supporting documentation. Failure to submit Affidavit C or D
										will result in the rejection of your bid.
									</p>
									<p className="mb-3 pl-20 text-[14.5px]">
										Once we have received, and verified the MWBE documents
										listed above are complete and acceptable, a contract will be
										forwarded to you for signature.
									</p>
									<p className="mb-3 pl-20 text-[14.5px]">
										We look forward to working with you and your team on this
										project. If you have any questions, please contact me at
										<span className={`${nottoBeHighlighted}  `}>
											{" "}
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
									<p className="mb-14 pl-20">Sincerely,</p>
									<div className="mb-4 pl-20">
										<p className="mb-0">
											<span className={`${nottoBeHighlighted}  `}>
												{!durham_profile
													? ""
													: !durham_profile
															.construction_capital_planning_project_manager
															.name
													? ""
													: durham_profile
															.construction_capital_planning_project_manager
															.name}
											</span>
										</p>
										<p className="mt-0">C&CP Project Manager</p>
									</div>

									<p className="mb-0 pl-20">Enclosure</p>
									<div className="mb-4 flex pl-20">
										<p>Cc:</p>
										<div className="ml-8 ">
											<p>
												<span className={`${nottoBeHighlighted}  `}>
													{!durham_profile
														? ""
														: !durham_profile
																.construction_capital_planning_interim_executive_director
																.name
														? ""
														: durham_profile
																.construction_capital_planning_interim_executive_director
																.name}
												</span>
												, Interim Executive Director, C&CP
											</p>
											<p>
												<span className={`${nottoBeHighlighted}  `}>
													{!form_fields ? "" : form_fields.recipientCopy} -{" "}
													{!form_fields ? "" : form_fields.position}
												</span>
												{!form_fields
													? ""
													: form_fields?.userValue &&
													  !form_fields?.recipientCopy && (
															<span className={`${nottoBeHighlighted}  `}>
																{!form_fields ? "" : form_fields?.userValue}
															</span>
													  )}
											</p>
										</div>
									</div>

									<div className="flex pl-20">
										<p>File:</p>
										<div className="ml-[1.6rem]">
											<p>
												[DPS Project No.{" "}
												<span className={`${nottoBeHighlighted}  `}>
													{!project ? "" : project.number}
												</span>
												]
											</p>
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
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								setHighlighed(true);
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
