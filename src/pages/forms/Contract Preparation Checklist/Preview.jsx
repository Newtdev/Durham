import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { openDownload, showDownload } from "../reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import DownLoadForm from "../Lundsford/Download";
import moment from "moment/moment";

const Preview = () => {
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const [highlighted, setHighlighed] = useState(false);

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);

	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const project = a?.data?.project;
	const form_fields = a?.data?.form_fields;
	const durham = a?.data?.durham_profile;
	// console.log(form_fields);

	const downloadComponent = useRef();

	const props = {
		component: downloadComponent,
		name: "Contract Preparation Checklist",
		show: show ? "block" : "hidden",
	};
	return (
		<div>
			<div>
				<DownLoadForm {...props} />
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					{/* Header */}
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Contract Preparation Checklist
							</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
						<div className="px-12 pt-8 pb-4 text-black" ref={downloadComponent}>
							<div className="h-[10.5in] text-[9.8pt] calibri-font ml-[0.5in] leading[1.3]">
								<h1 className="text-lg mb-12 text-center arial-font text-[9.7pt]">
									Contract Preparation Checklist
								</h1>
								<div className="mb-6">
									<p>
										<span className="font-bold">Project Name:</span>{" "}
										<span className={`${nottoBeHighlighted}`}>
											{project?.name}
										</span>
									</p>
									<p>
										<span className="font-bold">Contact Type:</span>{" "}
										<span className={`${nottoBeHighlighted}`}>
											{form_fields?.contractType}
										</span>
									</p>
									<p>
										<span className="font-bold">Project Number:</span>{" "}
										<span className={`${nottoBeHighlighted}`}>
											{project?.number}
										</span>
									</p>
								</div>

								<div className="mb-8">
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Most recent template used</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>

										<p>Bid documents for ALL bidders (1 copy)</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Project number assigned by / confirmed with Business
											Manager
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Project title=County title. If "Renovations", specify type
											of consulting
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Exhibit 1: Scope of Services (Consultant under $90k)</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Exhibit 2: Hourly Rate Schedule (Consultant under $90k,
											locally funded)
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Exhibit A: DPS Management Plan (Consultant over $90k)</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Exhibit B: Hourly Rate Schedule (Consultant over $90k,
											locally funded)
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Exhibit C: Closeout Documentation (Consultant over $90K)
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Attachment A: Lunsford Act</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100 "
											/>
										</div>
										<p>Performance Bond (contract &gt; $300k)</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Labor and Materials Bond (contract &gt; $300k)</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>
											Certificate of Liability Insurance with project name in
											"Description"
										</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>If vendor is new to DPS, W-9 form</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Three originals of all documents</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Single-sided</p>
									</div>
									<div className="flex items-center gap-4 mb-2">
										<div className="h-8 w-8 border-2 border-red-500 flex justify-center items-center">
											<input
												type="checkbox"
												value=""
												class="h-full w-full bg-gray-100"
											/>
										</div>
										<p>Pages in order, no staples</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div>
										<p
											className={`w-[30rem] border-b border-black ${nottoBeHighlighted}`}>
											{durham?.construction_capital_planning_project_manager
												?.name || ""}
										</p>
										<p className="text-sm font-bold">Project Manager</p>
									</div>
									<div>
										<p
											className={`inline-block w-24 border-b border-black ${nottoBeHighlighted}`}>
											{!form_fields?.signDate
												? ""
												: moment(form_fields?.signDate).format("MMMM D, YYYY")}
										</p>
										<p className="text-sm font-bold">Date</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG width="w-[171px]" name="Edit document" />
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
