import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo from "../../../assets/formlogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	closeDownload,
	closeModal,
	fields,
	openDownload,
	savedResponse,
	showDownload,
} from "../reducer";
import { useEffect, useRef, useState } from "react";
// import { prevStep, selectForm, stepDefault } from "../Notice-of-intent-consultant/reducerSlice";
import moment from "moment";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import {
	useFetchDurhamQuery,
	useFetchFilledFormQuery,
} from "../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";
import { project_details } from "../../Dashboard/add-project/projectSlice";

const Preview = () => {
	const dispatch = useDispatch();

	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const formID = useSelector(project_document_id);
	const content = useFetchFilledFormQuery(formID);
	const [highlighted, setHighlighed] = useState(false);

	// const content = useSelector(savedResponse);
	const projectDetails = useSelector(project_details);
	const school = !projectDetails ? "" : projectDetails.school;
	// const { vendors, durham_profile, project } = content?.data?.data;
	// const vendors = content?.data?.data?.vendors;
	// const project = content?.data?.data?.project;
	// const durham_profile = content?.data?.data?.durham_profile;
	let formData = !content?.data ? [] : content?.data?.data;
	const vendors = formData?.vendors;
	const durham_profile = formData?.durham_profile;
	const project = formData?.project;

	const form_fields = useSelector(fields);
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	const [awardee, setAwardee] = useState({});

	useEffect(() => {
		if (!vendors) {
			return null;
		}
		const data = vendors?.filter((cur) => {
			return cur.role === "Design Consultant";
		});
		setAwardee(data);
	}, [vendors]);

	const props = {
		component: downloadComponent,
		name: "Notice of Award - Consultant",
		show: show ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};
	// creationDate
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
							<h3 className="text-lg font-bold text-gray-900">
								Notice of Award - Consultant
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
							className="px-12 pt-8 pb-4 text-black adverstise mt-4"
							ref={downloadComponent}>
							<div>
								<div className="flex mb-4">
									<img src={Logo} alt="logo" className="h-16 object-cover" />
									<div className="ml-[18rem] arial-font text-[8px] mt-3">
										<p className=" text-[#3B6979]">
											Construction and Capital Planning
										</p>
										<p className=" text-[#3B6979]">
											2011 Hamlin Road / Durham, North Carolina 27704
										</p>
										<p className=" text-[#3B6979]">
											919-560-2216 <span className="ml-2">F919-560-9119</span>
											<span className="ml-2"> www.dpsnc.net</span>
										</p>
									</div>
								</div>

								<div className="mb-4 pl-20">
									<p className="mb-4">
										<span className={`${nottoBeHighlighted}`}>
											{moment(form_fields.creationDate).format("MMMM D, YYYY ")}
										</span>{" "}
										{form_fields.approval === "Yes" && (
											<span className={`${nottoBeHighlighted} ml-12`}>
												**NOTE:Exec Director approval is required to issue
												this**
											</span>
										)}
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee
												? ""
												: awardee[0]?.first_name + " " + awardee[0]?.last_name}
										</span>
										,{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.title}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.company_name}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.street}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.city},{" "}
										</span>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.state},{" "}
										</span>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.zip_code}
										</span>
									</p>
								</div>

								<div>
									<div className="flex mb-4 pl-20">
										<p>RE:</p>
										<div className="ml-16">
											<p>Durham Public Schools (DPS)</p>
											<p>
												<span className={`${nottoBeHighlighted}`}>
													{!school ? "" : school?.name}
												</span>{" "}
												-{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!project ? "" : project?.name}
												</span>
											</p>
											<p>
												DPS Project No.{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!project ? "" : project?.number}
												</span>
											</p>
										</div>
									</div>
									<div className="flex mb-4 pl-20">
										<p>SUBJECT:</p>
										<div className="ml-8">
											<p className="font-bold uppercase">
												NOTICE OF AWARD for{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!form_fields ? "" : form_fields?.services}
												</span>{" "}
												SERVICES
											</p>
										</div>
									</div>
									<p className="mb-4 pl-20">
										Dear Mr./Ms.{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.last_name},
										</span>
									</p>
									<p className="mb-4 pl-20 pr-10">
										This letter serves as a Notice of Award for the{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!project ? "" : project?.name}
										</span>{" "}
										project located at{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!school ? "" : school?.address}
										</span>{" "}
										in Durham, North Carolina. Durham Public School
										Administration is awarding the work to{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.company_name}
										</span>{" "}
										at a lump sum fee of{" "}
										<span className={`${nottoBeHighlighted}`}>
											{currency(form_fields.amount).format()}
										</span>
										. Consultant services shall include the deliverables and
										scopes of work as outlined in the Consultant proposal
										attached to the Contract by Exhibit.{" "}
									</p>
									<p className="mb-4 pl-20 pr-10">
										The attached contract is being transmitted to your office
										for review and execution. If in agreement,{" "}
										<span className="font-bold underline">
											please sign and notarize the agreement and forward all it,
											along with insurance certificates
										</span>{" "}
										to Construction & Capital Planning, 2011 Hamlin Road,
										Durham, North Carolina 27704 or via email to{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!form_fields ? "" : form_fields?.email}
										</span>{" "}
										no later than{" "}
										<span className={`${nottoBeHighlighted}`}>
											{moment(form_fields.deliveryDate).format(
												"dddd, MMMM D, YYYY "
											)}
										</span>
										. Once we have received and processed the contract, one (1)
										fully executed copy will be returned for your records.
									</p>
									<p className="mb-4 pl-20 pr-10">
										We look forward to working with you and your team on this
										project. If you have any questions, please contact me at
										<br />
										<span className={`${nottoBeHighlighted}`}>
											{" "}
											{!durham_profile
												? ""
												: !durham_profile.construction_capital_planning_project_managers_phone_number
												? ""
												: durham_profile
														?.construction_capital_planning_project_managers_phone_number
														?.name}
										</span>
										.
									</p>
									<p className="mb-4 pl-20">Sincerely,</p>

									<>
										<p className="pl-20">
											<span className={`${nottoBeHighlighted}`}>
												{console.log(durham_profile)}
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
										<p className="mb-6 pl-20">C&CP Project Manager</p>
									</>

									{/* {!form_fields.recipientCopy &&
                                        <>
                                            <p
                                                className="pl-20">

                                                <span className={`${nottoBeHighlighted}`}>{!form_fields ? "" : form_fields.recipientCopy
                                                }</span>
                                    </p>
                                            <p className={`${nottoBeHighlighted} mb-8 pl-20 mt-1`}>{!form_fields ? "" : form_fields.recipientTitle
                                            }</p>
                                        </>
                                    } */}
									<p className="pl-20">Enclosure</p>
									{!form_fields.recipientCopy && (
										<p className="pl-20">
											Cc:{" "}
											<span className={`${nottoBeHighlighted}`}>
												{" "}
												{!form_fields ? "" : form_fields.recipientName} -{" "}
												{!form_fields ? "" : form_fields.recipientTitle}
											</span>
										</p>
									)}
									{console.log(form_fields.recipientCopy)}
									{form_fields.recipientCopy && (
										<p className="pl-20">
											Cc:{" "}
											<span className={`${nottoBeHighlighted}`}>
												{" "}
												{!form_fields ? "" : form_fields.recipientCopy} -{" "}
												{!form_fields ? "" : form_fields.position}
											</span>
										</p>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevStep())}
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
