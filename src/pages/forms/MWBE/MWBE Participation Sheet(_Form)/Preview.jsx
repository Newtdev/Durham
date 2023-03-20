import currency from "currency.js";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	limitDescription,
	parseDynamicInput,
} from "../../../../shared-component";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import {
	project_document_id,
	selectFilled,
} from "../../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../../Lundsford/Download";
import { closeModal, openDownload, showDownload } from "../../reducer";
import MainPreview from "./MainPreview";
import PageTwo from "./pages/PageTwo";
import { prevStep, stepDefault } from "./reducer";

export const CalculatePercentage = (a, b) => {
	return useMemo(() => {
		if (!b) {
			return "";
		}
		return ((Number(a) / Number(b)) * 100).toFixed(2);
	}, [a, b]);
};
export const RenderContractor = ({ formDetails, data, color }) => {
	return data?.map((contractor, index) => {
		return (
			<tr className={`${color}`}>
				<td className="border border-black border-collapse">
					{contractor?.companyName}
				</td>
				<td className="border border-black border-collapse text-left pl-2">
					{" "}
					{limitDescription(contractor?.description)}
				</td>
				{/* //contractor?.companyType === 'WBE' && */}
				<td className="border border-black border-collapse">
					{contractor?.companyType === "MBE" ? <span>&#10003;</span> : null}
				</td>
				<td className="border border-black border-collapse">
					{contractor?.companyType === "WBE" ? <span>&#10003;</span> : null}
				</td>
				<td className="border border-black border-collapse">
					{currency(contractor?.companyContractAmount).format()}
				</td>
				<td className=" border border-black border-collapse">
					{`${CalculatePercentage(
						contractor?.companyContractAmount,
						formDetails?.totalContractAmount
					)}%`}
				</td>
			</tr>
		);
	});
};

export const RenderTotal = ({ formDetails, data, color }) => {
	// const contractors = parseDynamicInput(formDetails?.contractors);
	// const getTotal = (type) => {
	// };
	const getTotal = useCallback(
		(type) => {
			if (!data) return;
			let sum = 0;
			let a = data?.filter((contractor) => contractor?.companyType === type);
			for (const object of a) {
				sum += Number(object.companyContractAmount);
			}
			console.log(sum);
			return sum;
		},
		[data]
	);

	const TotalAmount = useMemo(() => {
		return getTotal("MBE") + getTotal("WBE");
	}, [getTotal]);

	return (
		<>
			<tr className="font-bold">
				<td></td>
				<td></td>
				<td></td>
				<th className="border border-black border-collapse">MBE</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>
						{currency(getTotal("MBE")).format()}
					</span>
				</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>{`${CalculatePercentage(
						getTotal("MBE"),
						formDetails?.totalContractAmount
					)}%`}</span>
				</th>
			</tr>

			<tr className="font-bold">
				<td></td>
				<td></td>
				<td></td>
				<th className="border border-black border-collapse">WBE</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>
						{currency(getTotal("WBE")).format()}
					</span>
				</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>{`${CalculatePercentage(
						getTotal("WBE"),
						formDetails?.totalContractAmount
					)}%`}</span>
				</th>
			</tr>

			<tr className="font-bold">
				<td></td>
				<td></td>
				<td></td>
				<th className="border border-black border-collapse">
					TOTAL <br /> M/WBE
				</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>{currency(TotalAmount).format()}</span>
				</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>
						{`${CalculatePercentage(
							TotalAmount,
							formDetails?.totalContractAmount
						)}%`}
					</span>
				</th>
			</tr>
		</>
	);
};

export const slicedFunct = (contractors, start, end) => {
	if (!contractors) {
		return;
	}
	return contractors.slice(start, end);
};

const MWBEParticipation = () => {
	const [highlighted, setHighlighed] = useState(false);
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	const project = a?.data?.project;

	// const pageContent = content?.data;
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const projectDetails = !project ? "" : project;
	const formDetails = a?.data?.form_fields;

	const contractors = parseDynamicInput(formDetails?.contractors);
	const handleText = projectDetails?.description?.split(" ").length;

	const props = {
		component: downloadComponent,
		name: "MWBE Participation Sheet (% Form)",
		show: !show ? "hidden" : "block",
		stepDefault,
		// close: closeDownload,
		project: projectDetails,
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
							<h3 className="font-extrabold text-gray-900 text-[17px]">
								MWBE Participation Sheet (% Form)
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
							cclassName=" text-black arial-font text-[11.5px]"
							ref={downloadComponent}>
							{formDetails?.purpose === "To provide it to the vendor" ? (
								<MainPreview />
							) : (
								<div className="h-[11in]" style={{ padding: "1in 0.5in" }}>
									<div className="mb-8">
										<h1 className="font-extrabold text-[17px]  mb-8 text-center">
											MWBE Participation Sheet (% Form)
										</h1>
										<p>
											Project Name:{" "}
											<span
												className={`${nottoBeHighlighted} inline-block  border-b border-black w-56`}>
												{!projectDetails?.name ? "" : projectDetails.name}
											</span>
										</p>
										<p className="mb-4">
											Bidder Name:{" "}
											<span className=" inline-block  border-b border-black w-56">
												Durham Public Schools
											</span>
										</p>

										<p className="mb-4">Description of Project:</p>
										<div className="mb-4">
											<p>Project Description:</p>
											<div
												className={`${
													handleText > 60 ? "text-[8pt]" : "text-[10pt]"
												} p-2 border border-black w-full leading-[1.1]  h-28 overflow-y-hidden`}>
												<span
													className={`${nottoBeHighlighted} inline-block h-full`}>
													{!projectDetails ? "" : projectDetails?.description}
												</span>
											</div>
										</div>

										{/* <div className="border border-black p-2 mb-4 break-words h-full">
											<p className={`${nottoBeHighlighted}`}>
												{!projectDetails?.description
													? ""
													: projectDetails.description}
											</p>
										</div> */}

										<p>
											Total Contract Amount:{" "}
											<span
												className={`${nottoBeHighlighted} inline-block  border-b border-black w-56`}>
												{currency(formDetails?.totalContractAmount).format()}
											</span>
										</p>
									</div>

									<div>
										<p className="font-bold mb-4">
											Participation Percentage Sheet
										</p>
										<table className="w-full mt-6 border border-black border-l-0 border-b-0 border-collapse text-center">
											<thead>
												<tr className="bg-gray-300">
													<th className="border border-black border-collapse">
														Contractor
													</th>
													<th className="border border-black border-collapse">
														Description of Work
													</th>
													<th className="border border-black border-collapse w-14">
														MBE
													</th>
													<th className="border border-black border-collapse w-14">
														WBE
													</th>
													<th className="border border-black border-collapse">
														Amount
													</th>
													<th className="border border-black border-collapse">
														Percent of <br />
														Contract <br />
														Participation
													</th>
												</tr>
											</thead>
											<tbody>
												<RenderContractor
													formDetails={formDetails}
													data={slicedFunct(contractors, 0, 10)}
													color={nottoBeHighlighted}
												/>

												{contractors?.length <= 10 ? (
													<>
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<th className="border border-black border-collapse"></th>
															<th className="border border-black border-collapse font-bold">
																Total Amount
															</th>
															<th className="border border-black border-collapse font-bold">
																Total <br /> Percentage
															</th>
														</tr>
														<RenderTotal
															formDetails={formDetails}
															data={slicedFunct(contractors, 0, 10)}
														/>
													</>
												) : null}
											</tbody>
										</table>
									</div>
								</div>
							)}
							<PageTwo
								formDetails={formDetails}
								nottoBeHighlighted={nottoBeHighlighted}
							/>
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

export default MWBEParticipation;
