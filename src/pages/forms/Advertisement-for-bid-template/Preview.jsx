import moment from "moment";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { doConvert } from "../../../shared-component";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
import {
	closeModal,
	fields,
	openDownload,
	savedResponse,
	showDownload,
} from "../reducer";
import { prevChoiceStep, stepChoiceDefault } from "./reducer";

const PageTwo = ({ form_fields, nottoBeHighlighted, project }) => {
	return (
		<div className="text-[11pt] arial-font leading-[1.2] pt-[1in] ">
			<div className={``}>
				<div className="text-right ">
					<p>Durham Public Schools</p>
					<p className={`text-[10pt] ${nottoBeHighlighted}`}>
						{!project ? "" : project.name}
					</p>
					<p className={`text-[10pt] ${nottoBeHighlighted}`}>
						{!project ? "" : project.number}
					</p>
				</div>
				<p>
					<em>
						{" "}
						Prospective Bidders should contact{" "}
						<span className={` font-bold ${nottoBeHighlighted}`}>
							{!form_fields ? "" : form_fields.company_name}
						</span>{" "}
						at the contact noted below in order to be e-mailed a link to
						download the project manual and bid documents.
					</em>
				</p>

				<p className="mt-8 mb-3 ">
					For questions regarding this bid, please contact:
				</p>
				<p className={` font-bold ${nottoBeHighlighted}`}>
					{!form_fields ? "" : form_fields.company_name}
				</p>
				<p className={` font-bold ${nottoBeHighlighted}`}>
					<span className=" font-bold">
						{!form_fields ? "" : form_fields.manager_name}
					</span>
					<span>- Program Manager</span>
				</p>
				<p className={` font-bold ${nottoBeHighlighted}`}>
					{!form_fields ? "" : form_fields.manager_phone_number}
				</p>
				<p className={` font-bold ${nottoBeHighlighted}`}>
					{!form_fields ? "" : form_fields.manager_email_address}
				</p>
			</div>{" "}
			<div className="mt-6 flex justify-start items-end  h-[66vh]">
				<span className="">Advertisement for bids</span>
				<span className=" inline-block ml-24 text-center">00 11 13-1</span>
				<span> </span>
			</div>
		</div>
	);
};

const Preview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const [highlighted, setHighlighed] = useState(false);
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const formID = useSelector(project_document_id);

	useFetchFilledFormQuery(formID);
	const content = useSelector(savedResponse);
	const { project } = content;
	const form_fields = useSelector(fields);

	const downloadComponent = useRef();

	const props = {
		component: downloadComponent,
		name: "00 11 13 - Advertisement for Bid Template",
		show: show ? "block" : "hidden",
		stepDefault: stepChoiceDefault,
	};

	return (
		<div>
			<DownLoadForm {...props} />

			<div>
				{/* Modal content */}
				<div
					className={`${
						show ? "hidden" : "block"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								00 11 13 - Advertisement for Bid Template
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

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%] h-[380px]">
						<div
							className="bg-white mx-[1in] py-10 text-black text-[11pt] leading-[1.2] h-[11in]"
							ref={downloadComponent}>
							<div className="text-right ">
								<p>Durham Public Schools</p>
								<p className={`text-[10pt] ${nottoBeHighlighted}`}>
									{!project ? "" : project.name}
								</p>
								<p className={`text-[10pt] ${nottoBeHighlighted}`}>
									{!project ? "" : project.number}
								</p>
							</div>
							<div className="text-center mb-8">
								<h1 className="font-bold">ADVERTISEMENT FOR BIDS</h1>
								<h2 className="font-bold">
									Durham Public Schools / Durham County
								</h2>
							</div>
							<div className="text-start">
								<p className="">
									Sealed bids from licensed contractors will be received by
									Durham Public Schools, Durham, North Carolina on{" "}
									<span className={`font-bold  ${nottoBeHighlighted}`}>
										{moment(form_fields.bidDate).format("dddd, MMMM D, YYYY")}
									</span>{" "}
									for furnishing of labor, material and equipment for the{" "}
									<span className={`font-bold  ${nottoBeHighlighted}`}>
										{!project ? "" : project.name}
									</span>
									. Bids will be received up to{" "}
									<span className={`font-bold  ${nottoBeHighlighted}`}>
										{moment(form_fields.deadlineTime).format("h:mm a")}
									</span>{" "}
									from Single Prime bidders. Bids will be opened at{" "}
									<span className={`font-bold ${nottoBeHighlighted}`}>
										{moment(form_fields.openingTime).format("h:mm a")}
									</span>{" "}
									via a virtual teleconference and read aloud. Deliver bids to
									the{" "}
									<span className={`font-bold`}>
										Durham Public Schools Main Office located at 511 Cleveland,
										Durham, North Carolina 27701.
									</span>{" "}
								</p>
							</div>
							{/* Lists */}
							<div className="mt-4 px-8">
								<ul className="list-disc">
									<li className="">
										No bid may be withdrawn after the scheduled closing time for
										the receipt of bids for a period of{" "}
										<span className={`font-bold ${nottoBeHighlighted}`}>
											{doConvert(form_fields.withdrawingBid)}(
											{!form_fields ? "" : form_fields.withdrawingBid}) days.
										</span>
									</li>
									<li className="">
										Bid security required is 5% of the bid in cash, certified
										check, or Bid Bond.
									</li>
									<li className="">
										Performance and Payment Bonds for 100% of the contract
										amount will be required.
									</li>
									<li className="">
										Durham Public Schools reserves the right to reject any and
										all bids and to waive informalities or irregularities.
									</li>
								</ul>
							</div>

							<div className="mt-4">
								<div className="mb-3 ">
									<p>
										<span className={`font-bold underline`}>
											Minority Business Participation:
										</span>{" "}
										Bidders shall note that compliance with the North Carolina
										Statute 143-128.2 (c) is required for this project.
									</p>
								</div>
								<div className="mb-3 ">
									<p>
										<span className="font-bold underline ">
											Iran Divestment Act:
										</span>{" "}
										Bidders shall note that the submission of a bid constitutes
										the bidder’s certification to the State Treasurer that, as
										of the date of bid, it is not listed on the Final Divestment
										List created and maintained by the North Carolina Department
										of State Treasurer (the “Treasurer’s Office”) pursuant to
										the Iran Divestment Act of 2015, Chapter 147-Article 6E of
										the General Statutes of North Carolina (the “Iran Divestment
										Act”).
									</p>
								</div>
								<div className="mb-3 ">
									<p>
										<span className="font-bold underline">
											Davis-Bacon Act:
										</span>{" "}
										The successful bidder will be required to conform to the
										wage requirements prescribed by the federal Davis-Bacon and
										Related Acts which requires that all laborers and mechanics
										employed by contractors and subcontractors performing on
										contracts funded in whole or in part with federal funds in
										excess of $2,000 pay their laborers and mechanics not less
										than the prevailing wage rates and fringe benefits, as
										determined by the Secretary of Labor, for corresponding
										classes of laborers and mechanics employed on similar
										projects in the area.
									</p>
								</div>
								<div className="mb-3 ">
									<p>
										<span className="font-bold underline">Project scope:</span>{" "}
										Provide additional security vestibules and/or measures at
										entrances at multiple DPS Schools and Sites.
									</p>
								</div>
								<div className=" ">
									<p>
										<span className="font-bold underline ">
											Pre-Bid Conference:
										</span>{" "}
										Scheduled for{" "}
										<span className={`font-bold  ${nottoBeHighlighted}`}>
											{moment(form_fields.conferenceDate).format(
												"dddd, MMMM D, YYYY"
											)}
										</span>{" "}
										at{" "}
										<span className={`font-bold  ${nottoBeHighlighted}`}>
											{moment(form_fields.conferenceTime).format("h:mm a")}
										</span>{" "}
										at{" "}
										<span className={`font-bold ${nottoBeHighlighted}`}>
											{form_fields.conferenceAddress},{" "}
											{form_fields.conferenceCity},{" "}
											{form_fields.conferenceState},{" "}
											{form_fields.conferenceZipCode}
										</span>
										.{" "}
										{/* <span className='font-bold uppercase bg-yellow-300 '> {!form_fields.presenceOfBiders ? '' : form_fields.presenceOfBiders}. </span> */}
										<br />
										Inspection of all sites shall be scheduled immediately after
										the Pre-Bid Conference. The design team and owner will
										provide access to the necessary location. The project
										Designer or Designer’s representative will be available to
										answer questions.
									</p>
									<p className="">
										It is{" "}
										<span className={`font-bold  ${nottoBeHighlighted}`}>
											{" "}
											{!form_fields.presenceOfBiders
												? ""
												: form_fields.presenceOfBiders}
										</span>{" "}
										that prime bidders attend the entire conference and visit
										the site prior to bidding.
									</p>
									<br />
								</div>
								<div className="mb-3 ">
									<p>
										<span className="font-bold underline">
											Statement of Qualifications:
										</span>{" "}
										Each proposal shall be accompanied by a statement of
										qualifications that demonstrates experience in at least five
										(5) projects of similar scope within the past three (3)
										years with references.
									</p>
								</div>
								<div className="mb-3 ">
									<p>
										<span className="font-bold underline">
											Statement of ability to staff project:
										</span>{" "}
										Each proposal shall be accompanied by a statement of ability
										to staff including current project load, current staff
										levels and individual staff to be committed to this project
										if awarded.
									</p>
								</div>
							</div>

							{/* Next Page */}
							{/* <div className='text-right '>
                  <p>Durham Public Schools</p>
                  <p className=''>{!project?'': project.name}</p>
                  <p className=''>{!project?'': project.number}</p>
                </div> */}

							{/* <div className={``}>
								<p>
									<em>
										{" "}
										Prospective Bidders should contact{" "}
										<span className={` font-bold ${nottoBeHighlighted}`}>
											{!form_fields ? "" : form_fields.company_name}
										</span>{" "}
										at the contact noted below in order to be e-mailed a link to
										download the project manual and bid documents.
									</em>
								</p>
					
								<p className="mt-8 mb-3 ">
									For questions regarding this bid, please contact:
								</p>
								<p className={` font-bold ${nottoBeHighlighted}`}>
									{!form_fields ? "" : form_fields.company_name}
								</p>
								<p className={` font-bold ${nottoBeHighlighted}`}>
									<span className=" font-bold">
										{!form_fields ? "" : form_fields.manager_name}
									</span>
									<span>- Program Manager</span>
								</p>
								<p className={` font-bold ${nottoBeHighlighted}`}>
									{!form_fields ? "" : form_fields.manager_phone_number}
								</p>
								<p className={` font-bold ${nottoBeHighlighted}`}>
									{!form_fields ? "" : form_fields.manager_email_address}
								</p>
							</div> */}
							<div className="mt-6 flex justify-start">
								<span className="">Advertisement for bids</span>
								<span className=" inline-block ml-24 text-center">
									00 11 13-1
								</span>
								<span> </span>
							</div>
							<PageTwo
								nottoBeHighlighted={nottoBeHighlighted}
								form_fields={form_fields}
								project={project}
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevChoiceStep(2))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="button"
							onClick={() => {
								setHighlighed(true);
								dispatch(showDownload());
							}}
							width="w-[198px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
