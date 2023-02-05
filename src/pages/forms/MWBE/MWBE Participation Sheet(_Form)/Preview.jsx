import { height } from "@mui/system";
import currency from "currency.js";
import { useMemo } from "react";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../../Lundsford/Download";
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import MainPreview from "./MainPreview";
import { prevStep, stepDefault } from "./reducer";

const CalculatePercentage = (a, b) => {
	return useMemo(() => {
		return ((Number(a) / Number(b)) * 100).toFixed(2);
	}, [a, b]);
};
const RenderContractor = ({ formDetails, color }) => {
	return formDetails?.contractors?.map((contractor, index) => {
		return (
			<tr className={`${color}`}>
				<td className="border border-black border-collapse">
					{contractor?.companyName}
				</td>
				<td className="border border-black border-collapse">
					{" "}
					{contractor?.description}
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

const RenderTotal = ({ formDetails, color }) => {
	const getTotal = (type) => {
		if (!formDetails?.contractors) return;
		let sum = 0;
		let a = formDetails?.contractors?.filter(
			(contractor) => contractor?.companyType === type
		);

		for (const object of a) {
			sum += Number(object.companyContractAmount);
		}
		return sum;
	};

	const TotalAmount = () => {
		return getTotal("MBE") + getTotal("WBE");
	};

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
					<span className={`${color}`}>{currency(TotalAmount()).format()}</span>
				</th>
				<th className="border border-black border-collapse">
					<span className={`${color}`}>
						{`${CalculatePercentage(
							TotalAmount(),
							formDetails?.totalContractAmount
						)}%`}
					</span>
				</th>
			</tr>
		</>
	);
};

const MWBEParticipation = () => {
	const [highlighted, setHighlighed] = useState(false);
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const content = useFetchFilledFormQuery(formID);
	const project = content?.currentData?.data?.project;
	// const [awardee, setAwardee] = useState([]);
	// const [showPage, setShow] = useState(false);
	// const content = useSelector(savedResponse);
	// const vendors = content?.data?.data.vendors;
	const form_fields = useSelector(fields);

	// const pageContent = content?.data;
	const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

	const props = {
		component: downloadComponent,
		name: "MWBE Participation Sheet (% Form)",
		show: !show ? "hidden" : "block",
		stepDefault,
		// close: closeDownload,
	};
	const projectDetails = !project ? "" : project;
	const formDetails = !form_fields ? "" : form_fields;

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
							ref={downloadComponent}
							style={{ margin: "1in 0.5in" }}>
							{/* Condition to show the details or empty details */}
							{formDetails?.purpose === "To provide it to the vendor" ? (
								<MainPreview />
							) : (
								<div className="">
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

										<div className="border border-black p-2 mb-4 break-words h-full">
											<p className={`${nottoBeHighlighted}`}>
												{!projectDetails?.description
													? ""
													: projectDetails.description}
											</p>
										</div>

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
													<th className="border border-black border-collapse">
														MBE
													</th>
													<th className="border border-black border-collapse">
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
													color={nottoBeHighlighted}
												/>

												<tr>
													<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
													<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
													<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
													<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
													<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
													<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
												</tr>

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
													color={nottoBeHighlighted}
												/>
											</tbody>
										</table>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevStep(1))}
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
