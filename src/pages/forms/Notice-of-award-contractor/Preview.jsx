import moment from "moment";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../../../assets/formlogo.png";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { ButtonWhiteBG } from "../../../ui";
import { setDefault } from "../../Dashboard/add-project/reducer";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";

import {
	closeDownload,
	closeModal,
	fields,
	openDownload,
	showDownload,
} from "../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
	const dispatch = useDispatch();
	const formID = useSelector(project_document_id);

	// const data = useSelector(selectForm);
	// const masterInfo = useSelector(project_details)

	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	let content = useFetchFilledFormQuery(formID);
	let formData = !content?.data ? [] : content?.data?.data;
	const vendors = formData?.vendors;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;

	// const content = useSelector(savedResponse);
	const form_fields = useSelector(fields);
	const [highlighted, setHighlighed] = useState(false);
	const [awardee, setAwardee] = useState([]);

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors?.filter((cur) => cur.role === "Contractor");
		setAwardee(data);
	}, [vendors]);

	const props = {
		component: downloadComponent,
		name: "Notice of Award - Contractor",
		show: show ? "block" : "hidden",
		stepDefault,
		close: closeDownload,
	};
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	return (
		<div>
			<DownLoadForm {...props} />

			<div>
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14  text-[10px]`}>
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Notice of Award - Contractor
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

					<div className="overflow-y-scroll mx-auto  mb-10 arial-font px-6 h-[380px]">
						<div
							className=" pt-8 pb-4 text-black mt-8 adverstise px-28 text-[14.5px]"
							ref={downloadComponent}>
							<div>
								<div className="flex justify-between mb-4">
									<img
										src={Logo}
										alt="logo"
										className="h-16 -ml-20 -mt-1 object-cover"
									/>

									<div className="ml-[10rem] arial-font text-[10.5px] mt-2.5">
										<p className=" text-[#3B6979]">
											Construction and Capital Planning
										</p>
										<p className=" text-[#3B6979]">
											2011 Hamlin Road / Durham, North Carolina 27704
										</p>
										<p className=" text-[#3B6979]">
											919-560-2216 <span className="ml-3">F919-560-9119</span>
											<span className="ml-3">www.dpsnc.net</span>
										</p>
									</div>
								</div>

								<div className="mb-4 text-[14.5px] leading-[1.3]">
									<p className="mb-4">
										<span className={`${nottoBeHighlighted}`}>
											{moment(form_fields.creationDate).format("MMMM D, YYYY ")}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.company_name}
										</span>
									</p>
									<p>
										<span className={`${nottoBeHighlighted} block`}>
											{!awardee ? "" : awardee[0]?.street}
										</span>
										<span className={`${nottoBeHighlighted} block mb-4`}>
											{!awardee
												? ""
												: awardee[0]?.city +
												  ", " +
												  awardee[0]?.state +
												  ", " +
												  awardee[0]?.zip_code}
										</span>
									</p>
									<div className="flex mt-4 mb-4 text-[14.5px]">
										<p>RE:</p>
										<div className="ml-10">
											<p className={`${nottoBeHighlighted}`}>
												{!project ? "" : project.name}
											</p>
											<p className="font-bold">Notice of Award</p>
										</div>
									</div>
									<p className="mb-4 ml[-3rem]">
										Dear Mr./Ms.{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.first_name}:
										</span>
									</p>
								</div>

								<div className="text-[14.5px] leading-[1.3]">
									<p className="mb-2">
										This letter is to serve as your{" "}
										<span className="font-bold">Notice of Award</span> for the{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!project ? "" : project.name}
										</span>{" "}
										project, which was approved by the Durham Public Schools
										Board of Education on{" "}
										<span className={`${nottoBeHighlighted}`}>
											{moment(form_fields.approvalDate).format("MMMM D, YYYY ")}
										</span>
										.
									</p>
									<p className="mb-2 leading-[1.3]">
										<span className={`${nottoBeHighlighted}`}>
											{!awardee ? "" : awardee[0]?.company_name}
										</span>{" "}
										shall execute the attached enclosed contract and forward it
										to{" "}
										<span
											className={`${nottoBeHighlighted} underline-offset-4`}>
											{!form_fields ? "" : form_fields.contractorContact}
										</span>{" "}
										along with all required bonds and insurances, to Durham
										Public Schools, 2011 Hamlin Rd. Durham, NC 27704 or via
										email to:{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!form_fields ? "" : form_fields.email}
										</span>
									</p>
									<p className="mb-2">
										Congratulations from Durham Public Schools. We look forward
										to the successful completion of the{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!project ? "" : project?.name}
										</span>{" "}
										project. If you have any questions, please do not hesitate
										to contact me at{" "}
										<span className={`${nottoBeHighlighted}`}>
											{!form_fields ? "" : form_fields?.phone}
										</span>
										.
									</p>
									<p className="mb-12 text-[14.5px]">Sincerely,</p>
									<p className="mb-4">
										<span className={`${nottoBeHighlighted}`}>
											{!form_fields ? "" : form_fields?.sendersName}
										</span>
									</p>
									<p>
										Cc:{" "}
										{form_fields.recipientCopy && (
											<span className={`${nottoBeHighlighted}`}>
												{!form_fields ? "" : form_fields?.recipientCopy} -{" "}
												{!form_fields ? "" : form_fields?.position}
											</span>
										)}
										{!form_fields.recipientCopy && (
											<>
												<span className={`${nottoBeHighlighted}`}>
													{!form_fields ? "" : form_fields?.recipientName}-
												</span>{" "}
												-{" "}
												<span className={`${nottoBeHighlighted}`}>
													{!form_fields ? "" : form_fields?.recipientTitle}
												</span>
											</>
										)}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4 text-base">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevStep())}
						/>
						<DashboardButton
							onClick={() => {
								setHighlighed(true);
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
