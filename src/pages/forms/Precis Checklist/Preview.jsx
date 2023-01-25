import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { useDispatch, useSelector } from "react-redux";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import {
	closeDownload,
	closeModal,
	fields,
	openDownload,
	showDownload,
} from "../reducer";
import { prevChoiceStep, stepChoiceDefault } from "./Reducer";
import DownLoadForm from "../Lundsford/Download";

const Preview = () => {
	// const formID = useSelector(project_document_id);
	const show = useSelector(openDownload);

	const downloadComponent = useRef();
	const form_fields = useSelector(fields);
	console.log(form_fields);

	// const content = useFetchFilledFormQuery(formID);
	// const formsDetails = !content?.data ? "" : content?.data?.data;
	const dispatch = useDispatch();
	// const fields = !formsDetails?.form_fields ? "" : formsDetails?.form_fields;
	const props = {
		component: downloadComponent,
		name: "Precis Folders for Projects",
		show: show ? "block" : "hidden",
		stepChoiceDefault,
		close: closeDownload,
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
					{/* Header */}

					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">
								Precis Checklist
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
							className="px-12 pt-8 pb-4 text-black calibri-font text-[17.5px]"
							ref={downloadComponent}>
							<div className="flex justify-center items-center">
								<div className="border-2 border-gray-200">
									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full"></div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p className="font-bold">Precis Folders for Projects</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.precis ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>Precis</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.bidTab ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>Bid Tab (certified if 3rd party led)</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.contract ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>Contract(with proposal)</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.participation ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>MWBE Participation Sheet (% Form)</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.affidavits ? true : false}
												// checked={fields.affidavits ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>Affidavits(A,C or D)</p>
										</div>
									</div>

									<div className="flex border-b border-b-gray-200 h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												checked={form_fields.plan ? true : false}
												// checked={fields.plan ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>HUB Plan(If they did not achieve the 10%)</p>
										</div>
									</div>

									<div className="flex h-8">
										<div className="w-8 h-full flex justify-center items-center">
											<input
												// checked={
												// 	fields.presentation === "presentation" ? true : false
												// }
												checked={form_fields.presentation ? true : false}
												type="checkbox"
												value=""
												class="h-6 w-6 border-[3px] border-gray-400 bg-gray-100"
											/>
										</div>
										<div className="border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center">
											<p>Presentation Slides (if required)</p>
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
							onClick={() => dispatch(prevChoiceStep(0))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								dispatch(showDownload());
								// setHighlighed(true);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
