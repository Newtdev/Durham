import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import {
	closeDownload,
	closeModal,
	fields,
	openDownload,
	showDownload,
} from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import Logo from "../../../../assets/formlogo.png";

import currency from "currency.js";
import moment from "moment";
import DownLoadForm from "../../Lundsford/Download";
import { prevChoiceStep, stepChoiceDefault } from "./reducer";

const Capital = () => {
	const show = useSelector(openDownload);

	const dispatch = useDispatch();
	const formID = useSelector(project_document_id);
	const downloadComponent = useRef();
	let content = useFetchFilledFormQuery(formID);
	let formData = !content?.data ? [] : content?.data?.data;
	// const durham_profile = formData?.durham_profile;
	const project = formData?.project;

	// const content = useSelector(savedResponse);
	const form_fields = useSelector(fields);
	const [highlighted, setHighlighed] = useState(false);

	const props = {
		component: downloadComponent,
		name: "Capital Project Request Form",
		show: show ? "block" : "hidden",
		stepDefault: stepChoiceDefault,
		close: closeDownload,
	};
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	const form_details = !form_fields ? "" : form_fields;
	const project_details = !project ? "" : project;

	const pur = Number(form_fields?.purchase);
	const des = Number(form_fields?.design);
	const con = Number(form_fields?.construction);
	const ren = Number(form_fields?.renovation);
	const rep = Number(form_fields?.repair);
	const fur = Number(form_fields?.furniture);
	const val = pur + des + con + ren + rep + fur;

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
								Capital Project Request Form
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

					<div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px] bg">
						<div
							className="text-black text-[10px] arial-font"
							ref={downloadComponent}
							style={{ margin: "0.5in 1in" }}>
							<div>
								<div className="mb-4 ml-20">
									<img
										src={Logo}
										alt="logo"
										className="h-16 -ml-20 -mt-1 object-cover"
									/>
								</div>

								<div>
									<h1 className="font-bold text-center mb-6">
										Capital Project Request Form
									</h1>

									<div className="mb-4 w-full flex">
										<p className="">
											Department:{" "}
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block w-64`}>
												Construction & Capital planning
											</span>
										</p>
										<p className="flex">
											<span className="inline-block w-[5rem]">
												Contact Person:{" "}
											</span>
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block w-40`}>
												{form_details.selectOption}
											</span>
										</p>
									</div>

									<div className="mb-4">
										<p className="flex w-full">
											<span className="inline-block w-[5rem]">
												Project Title:{" "}
											</span>
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block w-full -ml-4`}>
												{!project.name ? "" : project_details?.name}
											</span>
										</p>
									</div>

									<div className="mb-4">
										<p className="flex">
											Location:{" "}
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block w-full ml-1`}>
												{!project.name ? "" : project_details?.location},{" "}
												{!project.name ? "" : project_details?.city},{" "}
												{!project.name ? "" : project_details?.state},{" "}
												{!project.name ? "" : project_details?.zip_code}
											</span>
										</p>
									</div>

									<div className="mb-4">
										<p>Project Description:</p>
										<div className="p-2 border border-black w-full h-24">
											<span className={`${nottoBeHighlighted}`}>
												{!project.name ? "" : project_details?.description}
											</span>
										</div>
									</div>

									<p className="mb-4">
										Estimated Cost(s){" "}
										<i>(Budget estimates include contingencies):</i>
									</p>

									<div className="m-auto w-[500px] mb-6">
										<div className="border border-black">
											<div className="flex items-center justify-between border-b border-b-black py-0.5">
												<p className="p-2 w-[300px] border-r border-r-black">
													Land Purchase
												</p>
												<p className={`${nottoBeHighlighted} px-2`}>
													{currency(form_details?.purchase).format()}
												</p>
											</div>
											<div className="flex items-center justify-between border-b border-b-black">
												<p className="p-2 w-[300px] border-r border-r-black">
													Planning/Design
												</p>
												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(form_details?.design).format()}
												</p>
											</div>
											<div className="flex items-center justify-between border-b border-b-black">
												<p className="p-2 w-[300px] border-r border-r-black">
													New Construction/Addition(s)
												</p>
												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(form_details?.construction).format()}
												</p>
											</div>
											<div className="flex items-center justify-between border-b border-b-black">
												<p className="p-2 w-[300px] border-r border-r-black">
													Renovation/Uplift
												</p>
												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(form_details?.renovation).format()}
												</p>
											</div>
											<div className="flex items-center justify-between border-b border-b-black">
												<p className="p-2 w-[300px] border-r border-r-black">
													Repair
												</p>
												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(form_details?.repair).format()}
												</p>
											</div>
											<div className="flex items-center justify-between border-b border-b-black">
												<p className="p-2 w-[300px] border-r border-r-black">
													Furniture/Equipment
												</p>
												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(form_details?.furniture).format()}
												</p>
											</div>
											<div className="flex items-center justify-between">
												<p className="p-2 w-[300px] border-r border-r-black font-bold text-right">
													Total $
												</p>

												<p className={`${nottoBeHighlighted} p-2`}>
													{currency(val).format()}
												</p>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-2 justify-items-center mb-8">
										<p className="w-full">
											Estimated Project Beginning Date:{" "}
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block w-36`}>
												{moment(form_fields.startDate).format("MMMM D, YYYY ")}
											</span>
										</p>
										<p className="w-full flex justify-center items-center">
											Est. Project Completion Date:{" "}
											<span
												className={`${nottoBeHighlighted} border-b border-black inline-block ml-1`}>
												{moment(form_fields.completionDate).format(
													"MMMM D, YYYY "
												)}
											</span>
										</p>
									</div>

									<div className="mb-4">
										<p className="overflow-x-hidden">
											____________________________________________________________________________________________________________________________________________________
										</p>
										<p>
											<span className="ml-12">(Signature - Requestor)</span>{" "}
											<span className="ml-[22rem]">(Date)</span>
										</p>
									</div>

									<p className="font-bold text-center mb-4">
										--- FOR OFFICIAL USE ONLY ---
									</p>

									<div className="grid grid-cols-2">
										<div className="">
											<p className="font-bold mb-4">Funding Source</p>
											<div className="mb-3 flex items-center gap-2">
												<label
													htmlFor="capital"
													className="font-thin text-gray-600">
													Capital Outlay
												</label>
												<input
													type="checkbox"
													checked={
														form_details.Source === "Capital_Outlay"
															? true
															: false
													}
													name="capital"
													id="capital"
												/>
												{/* <span className="bg-yellow-500">F15</span> */}
											</div>
											<div className="flex items-center gap-2">
												<label
													htmlFor="other"
													className="font-thin text-gray-600">
													Other
												</label>
												<input
													type="checkbox"
													name="other"
													id="other"
													checked={
														form_details.Source === "Other" ? true : false
													}
												/>
												<span
													className={`${nottoBeHighlighted} inline-block w-36 inline-block border-b border-black`}>
													{form_details?.funding_source}
												</span>
											</div>
										</div>

										<div className="px-6">
											<p className="font-bold mb-6">Approved by</p>
											<p className="mb-4 overflow-x-hidden">
												_____________________________________________________________
											</p>
											<p className="flex justify-between">
												(Signature - Deputy Superintendent, Operations){" "}
												<span className="">(Date)</span>
											</p>

											<p className="mt-6 ml-3">Form Date: 7-15-21</p>
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
								dispatch(prevChoiceStep(1));
							}}
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

export default Capital;