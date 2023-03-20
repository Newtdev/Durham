import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import Logo from "../../../assets/newlogo.jpg";
import LogoOne from "../../../assets/Durham.png";

import { prevStep, stepDefault } from "./reducerSlice";
import {
	showDownload,
	openDownload,
	closeDownload,
	closeModal,
} from "../reducer";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../Lundsford/Download";
import moment from "moment";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const Preview = (data) => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();
	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	// const content = useSelector(savedResponse);
	// const { vendors, durham_profile, project } = content?.data?.data;
	let formData = a?.data;
	const vendors = formData?.vendors;
	const durham_profile = formData?.durham_profile;
	const project = formData?.project;
	const school = formData?.project?.school;
	const form_fields = formData?.form_fields;

	const [highlighted, setHighlighed] = useState(false);

	const [awardee, setAwardee] = useState({});

	useEffect(() => {
		if (!vendors) {
			return;
		}
		const data = vendors.filter((cur) => cur.role === "Contractor");
		setAwardee(data);
	}, [vendors]);

	const props = {
		component: downloadComponent,
		name: "Notice To Proceed",
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
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					{/* Hedaer */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Notice to Proceed - Contractor
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
							className="bg-white py-16 pl-24 pr-[1in] pb-4 text-black  adverstise"
							ref={downloadComponent}>
							<div className="flex justify-between items-center mb-8">
								<div>
									<img src={LogoOne} alt="logo" className="h-20 object-cover" />
								</div>
								<div className="text-[#3B6979] arial-font mt-3 text-[13px]">
									<p className=" font-bold">
										Construction and Capital Planning
									</p>
									<span className="block -my-1 font-bold">
										2011 Hamlin Road | Durham, NC 27704
									</span>
									<span className=" font-bold">
										919-560-2216 | www.dpsnc.net
									</span>
								</div>
							</div>
							<div className="text-[14.5px] leading-[1.2]">
								<p className="mb-2">
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{moment(form_fields?.creationDate).format("MMMM D, YYYY ")}
									</span>
								</p>
								<p>
									{/* <span className='bg-yellow-500'></span> */}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!awardee
											? ""
											: awardee[0]?.first_name + " " + awardee[0]?.last_name}
									</span>
									,
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{" "}
										{!awardee ? "" : awardee[0]?.title}
									</span>
								</p>
								<p>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!awardee ? "" : awardee[0]?.company_name}
									</span>
								</p>
								<p>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!awardee ? "" : awardee[0]?.street}
									</span>
								</p>
								<p>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!awardee
											? ""
											: awardee[0]?.city +
											  ", " +
											  awardee[0]?.state +
											  ", " +
											  awardee[0]?.zip_code}
									</span>
								</p>
							</div>
							{/* Subject */}
							<div className="my-4 text-[14.5px] leading-[1.3]">
								<div className="mb-4 flex items-start">
									<p className="mr-[70px]">Re:</p>
									<div>
										<p>Durham Public Schools (DPS)</p>
										<p>
											<span className={`${nottoBeHighlighted} bg-grey-800`}>
												{!school ? "" : school?.name}{" "}
											</span>
											-
											<span className={`${nottoBeHighlighted} bg-grey-800`}>
												{" "}
												{!project ? "" : project?.name}
											</span>
											(
											<span className={`${nottoBeHighlighted} bg-grey-800`}>
												{" "}
												{!project ? "" : project?.number}
											</span>
											)
										</p>
									</div>
								</div>
								<div className="mb-4 text-[14.5px]">
									<span className="mr-10">Subject:</span>
									<span>Notice to Proceed</span>
								</div>
								<div className={`${nottoBeHighlighted} bg-grey-800`}>
									<span>
										Dear <span className="bg-grey-800">Mr./Ms.</span>{" "}
									</span>{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{awardee[0]?.last_name}
									</span>
									:
								</div>
							</div>
							{/* Body */}
							<div className="leading-[1.3] text-[14.5px]">
								<p className="mb-3">
									We are pleased to offer this Notice to Proceed for the{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!school ? "" : school?.name}{" "}
									</span>{" "}
									-{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!project ? "" : project?.name}
									</span>
									. Effective{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{moment(form_fields?.startDate).format("MMMM D, YYYY ")}
									</span>{" "}
									at{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{moment(form_fields?.startTime).format("hh:mm A, ")}
									</span>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!awardee ? "" : awardee[0]?.company_name}
									</span>{" "}
									is authorized to proceed with the Work in earnest in
									accordance with the terms of your contract and the Contract
									Documents.
								</p>
								<p className="mb-3">
									Time is of the essence. The Notice to Proceed commences the
									Contract Time until Substantial Completion is achieved on or
									before{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{moment(form_fields?.effectiveDate).format("MMMM D, YYYY.")}
									</span>
								</p>
								<p className="mb-3 leading-[1.2]">
									We look forward to working with you and your team on this
									project. If you have any questions, please contact me at{" "}
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
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
								<p className="mb-12">Sincerely,</p>
								<p>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										{!durham_profile
											? ""
											: !durham_profile
													.construction_capital_planning_project_manager.name
											? ""
											: durham_profile
													.construction_capital_planning_project_manager.name}
									</span>
								</p>
								<p>
									<span className="bg-grey-800">C&CP Project Manager</span>
								</p>
								<p className="mt-4">Enclosure</p>
								<div className=" flex items-start">
									<p className="mr-3.5">CC:</p>
									<div className="leading-[1.0]">
										<p>
											<span className={`${nottoBeHighlighted} bg-grey-800 `}>
												{!durham_profile
													? ""
													: !durham_profile.director_of_design_and_construction
															.name
													? ""
													: durham_profile.director_of_design_and_construction
															.name}
												, DPS Design and Construction
											</span>
										</p>

										<p>
											<span className={`${nottoBeHighlighted} bg-grey-800`}>
												{!durham_profile
													? ""
													: !durham_profile
															.construction_capital_planning_business_manager
															.name
													? ""
													: durham_profile
															.construction_capital_planning_business_manager
															.name}{" "}
												- DPS C&CP Business Manager{" "}
											</span>
										</p>
									</div>
								</div>
								<div className="">
									<span className="mr-3">File:</span>
									<span className={`${nottoBeHighlighted} bg-grey-800`}>
										DPS Project No. {!project ? "" : project?.number}
									</span>
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
								dispatch(showDownload());
								setHighlighed(true);
							}}
							hidden
							name="CREATE DOCUMENT"
							type="button"
							width="w-[198px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
