import { useMemo, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload, showDownload } from "../../reducer";
import {
	project_document_id,
	selectFilled,
} from "../../../Dashboard/project-dashboard/ReducerSlice";
import { prevStep, stepDefault } from "./reducer";
import moment from "moment";
import currency from "currency.js";
import { CalculateTotal } from "./forms/FormThree";
import DownLoadForm from "../../Lundsford/Download";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { parseDynamicInput } from "../../../../shared-component";

const TableRow = ({ form, nottoBeHighlighted }) => {
	console.log(form);
	if (!form) {
		return;
	}
	return form.map((d, i) => {
		console.log(d);
		return (
			<tr className="text-xs">
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse`}>
					{d?.quantity}
				</td>
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse`}>
					{d?.unit}
				</td>
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse`}>
					{d?.stockNumber}
				</td>
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					}  border border-black border-collapse text-left pl-2`}>
					{d?.description}
				</td>
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse text-right pr-1`}>
					{currency(d?.unitPrice).format()}
				</td>
				<td
					className={`${
						form?.items ? nottoBeHighlighted : ""
					} border border-black border-collapse text-right pr-1`}>
					{currency(
						CalculateTotal(form?.items[i]?.field_value, d?.unitPrice)
					).format()}
				</td>
			</tr>
		);
	});
};

const Preview = () => {
	const [highlighted, setHighlighed] = useState(false);
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	const forms = a?.data?.form_fields;

	// const pageContent = content?.data;
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 text-[10.9pt]"
		: "bg-white text-[10.9pt]";

	const props = {
		component: downloadComponent,
		name: "CCP Requisition - MODIFIED 4-22-22FM",
		show: !show ? "hidden" : "block",
		stepDefault,
		// close: closeDownload,
	};

	// const subTotal = (a) => {
	// 	if (!a) {
	// 		return;
	// 	}
	// 	let quantitySum = 0;
	// 	for (const object of a) {
	// 		quantitySum += Number(object.quantity * object.unitPrice);
	// 	}
	// 	return quantitySum;
	// };

	const taxPercentage = useMemo(() => {
		let per;
		if (!forms?.ccpsubtotal) {
			return "";
		}

		if (!forms?.ccptax) {
			per = 4.75 / 100;
			return Number(forms?.ccpsubtotal) * per;
		} else {
			per = forms?.ccptax / 100;
			return Number(forms?.ccpsubtotal) * Number(per);
		}
	}, [forms]);

	const data = parseDynamicInput(forms?.items);
	console.log(data);

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
							<h3 className="font-bold text-gray-900">
								CCP Requisition - MODIFIED 4-22-22FM
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
							className="px-20 pt-16 pb-4 text-black text-[10.9pt] calibri-font leading-[1.1]"
							ref={downloadComponent}>
							<div>
								<div>
									<div className="text-center mb-3">
										<h2 className=" text-[12pt] font-extrabold">
											DURHAM PUBLIC SCHOOLS
										</h2>
										<h1 className=" text-[14pt] font-extrabold">REQUISITION</h1>
									</div>

									<div className="border-b border-b-black flex justify-between pb-2">
										<div>
											<div className="flex gap-2 items-end mb-2">
												<p>DATE:</p>
												<p className="border border-black p-1 w-36 text-center">
													<span className={`${nottoBeHighlighted}`}>
														{moment(forms?.creationDate).format(
															"MMMM D, YYYY "
														)}
													</span>
												</p>
											</div>
											<div className="flex gap-2 items-end mb-2">
												<p className="">BUDGET CODE:</p>
												<p className="border border-black p-1 w-[10.9rem] flex justify-end">
													<span
														className={`${nottoBeHighlighted} text-[10.9pt]`}>
														{forms?.budgetCode}
													</span>
												</p>
											</div>
											<div className="flex gap-2 items-end mb-2">
												<p>COMMODITY CODE:</p>
												<p className="border border-black p-1 w-[9rem] flex justify-end">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.commodityCode}
													</span>
												</p>
											</div>
											<div className="flex gap-2 items-center mt-6">
												<p>BEST PRICE(ATTACHED):</p>
												<p className="border border-black h-5 w-5 flex justify-center items-center">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.attached === "Best Price(Attached)" ? (
															<span>&#10003;</span>
														) : null}
													</span>
												</p>
											</div>
										</div>
										<div>
											<div className="border-t border-l border-t-black border-l-black pt-1 pl-1 ml-36">
												<p>Requisition/Work Order #:</p>
												<p className="border border-black p-1 flex justify-end w-36">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.requisitionOrder}
													</span>
												</p>
												<p>P.O. #:</p>
												<p className="border flex justify-end border-black p-1 mb-3 w-36">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.po}
													</span>
												</p>
											</div>
											<div className="flex gap-1 items-center mt-7 mr-6">
												<p>FRANCHISE/SOLE SOURCE(ATTACHED):</p>
												<p className="border border-black  h-5 w-5 flex justify-center items-center">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.attached ===
														"Franchise/Sole Source(Attached)" ? (
															<span>&#10003;</span>
														) : null}
													</span>
												</p>
											</div>
										</div>
									</div>

									<div className="flex justify-between">
										<div>
											<div className="flex gap-2 items-end mb-2 mt-6">
												<p>VENDOR #:</p>
												<p className="border border-black p-1 w-[16.7rem]">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.vendorId}
													</span>
												</p>
											</div>
											<div className="flex gap-2 items-end mb-2">
												<p>NAME:</p>
												<p className="border border-black ml-5 p-1 w-[17rem]">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.vendor}
													</span>
												</p>
											</div>
											<div className="flex gap-2 items-end mb-2">
												<p>ADDRESS:</p>
												<p className="border border-black p-1 w-[17.1rem]">
													<span
														className={`${nottoBeHighlighted}`}>{`${forms?.addressStreet}, ${forms?.addressCity}, ${forms?.addressState}, ${forms?.addressZipCode}`}</span>
												</p>
											</div>
											<div className="flex gap-2 items-end">
												<p>ATTN:</p>
												<p className="border border-black p-1 w-[18.6rem]">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.name}
													</span>
												</p>
											</div>
										</div>

										<div className="mb-4 mt-1">
											<div className="flex gap-2 items-center justify-center mb-[4.2rem] ">
												<p>SHIPPING #:</p>
												<p className="border border-black p-1 w-[13.5rem]">
													{forms?.street ? (
														<span className={`${nottoBeHighlighted}`}>
															{`${forms?.street || ""}, ${forms?.city || ""}, ${
																forms?.state || ""
															}, ${forms?.zipCode || ""}`}
														</span>
													) : (
														<span className={`${nottoBeHighlighted}`}></span>
													)}
												</p>
											</div>

											<div>
												<p>SHIP TO: DURHAM PUBLIC SCHOOLS</p>
												<p>SCHOOL/DEPT. NAME:</p>
												<p className="border border-black p-1">
													<span className={`${nottoBeHighlighted}`}>
														{forms?.location}
													</span>
												</p>
											</div>
										</div>
									</div>

									{/* Table */}
									<table className="w-full border border-black text-center border-collapse">
										<tr>
											<th
												className="border border-black border-collapse"
												colspan={2}>
												ORDERED
											</th>

											<th
												className="border border-black border-collapse"
												rowSpan={2}>
												STOCK <br />
												NUMBER
											</th>
											<th
												className="border border-black border-collapse w-[40%]"
												rowSpan={2}>
												DESCRIPTION
											</th>
											<th
												className="border border-black border-collapse"
												rowSpan={2}>
												UNIT <br /> PRICE
											</th>
											<th
												className="border border-black border-collapse"
												rowSpan={2}>
												TOTAL <br /> COST
											</th>
										</tr>

										<tr>
											<td className="border border-black border-collapse font-bold">
												QTY
											</td>
											<td className="border border-black border-collapse font-bold">
												U/M
											</td>
										</tr>

										<tr>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-[8pt]`}>
												{!data ? "" : !data[0] ? "" : data[0].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[0] ? "" : data[0].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[0] ? "" : data[0].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[0] ? "" : data[0].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? 0
													: !data[0]
													? 0
													: currency(data[0]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[0]
													? "0.00"
													: currency(
															CalculateTotal(
																data[0]?.quantity,
																data[0]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[1] ? "" : data[1].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[1] ? "" : data[1].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[1] ? "" : data[1].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[1] ? "" : data[1].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? 0
													: !data[1]
													? 0
													: currency(data[1]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[1]
													? "0.00"
													: currency(
															CalculateTotal(
																data[1]?.quantity,
																data[1]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[2] ? "" : data[2].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[2] ? "" : data[2].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[2] ? "" : data[2].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[2] ? "" : data[2].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[2]
													? "0.00"
													: currency(data[2]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[2]
													? "0.00"
													: currency(
															CalculateTotal(
																data[2]?.quantity,
																data[2]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[3] ? "" : data[3].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[3] ? "" : data[3].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[3] ? "" : data[3].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[3] ? "" : data[3].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[3]
													? "0.00"
													: currency(data[3]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[3]
													? "0.00"
													: currency(
															CalculateTotal(
																data[3]?.quantity,
																data[3]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[4] ? "" : data[4].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[4] ? "" : data[4].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[4] ? "" : data[4].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[4] ? "" : data[4].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[4]
													? "0.00"
													: currency(data[4]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[4]
													? "0.00"
													: currency(
															CalculateTotal(
																data[4]?.quantity,
																data[4]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[5] ? "" : data[5].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[5] ? "" : data[5].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[5] ? "" : data[5].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[5] ? "" : data[5].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[5]
													? "0.00"
													: currency(data[5]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[5]
													? "0.00"
													: currency(
															CalculateTotal(
																data[5]?.quantity,
																data[5]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[6] ? "" : data[6].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[6] ? "" : data[6].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[6] ? "" : data[6].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[6] ? "" : data[6].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[6]
													? "0.00"
													: currency(data[6]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[6]
													? "0.00"
													: currency(
															CalculateTotal(
																data[6]?.quantity,
																data[6]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[7] ? "" : data[7].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[7] ? "" : data[7].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[7] ? "" : data[7].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[7] ? "" : data[7].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[7]
													? "0.00"
													: currency(data[7]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[7]
													? "0.00"
													: currency(
															CalculateTotal(
																data[7]?.quantity,
																data[7]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[8] ? "" : data[8].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[8] ? "" : data[8].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[8] ? "" : data[8].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[8] ? "" : data[8].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[8]
													? "0.00"
													: currency(data[8]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[8]
													? "0.00"
													: currency(
															CalculateTotal(
																data[8]?.quantity,
																data[8]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>

										<tr className="text-xs">
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[9] ? "" : data[9].quantity}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[9] ? "" : data[9].unit}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt]`}>
												{!data ? "" : !data[9] ? "" : data[9].stockNumber}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												}  border border-black border-collapse text-[8pt] text-left pl-2`}>
												{!data ? "" : !data[9] ? "" : data[9].description}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[9]
													? "0.00"
													: currency(data[9]?.unitPrice || 0).format()}
											</td>
											<td
												className={`${
													forms?.items ? nottoBeHighlighted : ""
												} border border-black border-collapse text-[8pt] text-right pr-1`}>
												{!data
													? "0.00"
													: !data[9]
													? "0.00"
													: currency(
															CalculateTotal(
																data[9]?.quantity,
																data[9]?.unitPrice
															)
													  ).format()}
											</td>
										</tr>
									</table>

									<div className="grid grid-cols-5 w-full">
										<div className="col-span-3">
											<p className="bg-slate-400 font-bold px-2 py-4 border-l border-l-black text-[11pt]">
												I have verified that the items requested above have been
												selected from the appropriate sources and that
												appropriate funds have been authorized to cover the cost
												of the items.
											</p>

											<div className="border border-black border-r-0 border-t-0 border-collapse">
												<div className="flex justify-between h-14 pl-2 pr-2 border-b border-b-blue-300 pt-9 text-[10.9pt]">
													<p>Project Manager:</p>
													<p className="flex flex-col justify-center items-center">
														{!forms?.signDate ? (
															<span
																className={`block w-24 h-4 bg-red-900`}></span>
														) : (
															<span className={`${nottoBeHighlighted}`}>
																{moment(forms?.signDate).format(
																	"MMMM D, YYYY "
																)}
															</span>
														)}
														<span className="inline-block my-2">Date</span>
													</p>
												</div>
												<div className="flex justify-between pt-9 h-14 pl-2 pr-2 border-b border-b-blue-300 text-[10.9pt]">
													<p>Business Manager:</p>
													<p className="flex justify-start items-start w-16 ">
														<span className="inline-block my-2">Date</span>
													</p>
												</div>
												<div className="flex justify-between pt-9 h-14  pl-2 pr-2 border-b border-b-blue-300 text-[10.9pt]">
													<p>Director of Construction and Sustainability</p>
													<p className="flex justify-start items-start w-16 ">
														<span className="inline-block my-2">Date</span>
													</p>
												</div>
												<div className="flex justify-between pt-8 h-14 pl-2 pr-2 border-b border-b-blue-300 pt-9 text-[10.9pt]">
													<p>Executive Director Building Services</p>
													<p className="flex justify-start items-start w-16 ">
														<span className="inline-block my-2">Date</span>
													</p>
												</div>
												<div className="flex justify-between h-10 pt-5 pb-[4px] pl-2 text-[10.9pt]">
													<p>Deputy Superintendent Operational Services:</p>
													<p className="mr-2 flex justify-start items-start w-16 ">
														<span className="inline-block mt-1">Date</span>
													</p>
												</div>
											</div>
										</div>

										<div className="col-span-2">
											<div className="border border-black border-t-0 border-collapse ">
												<div className="text-right py-2 px-1 h-[11rem]">
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>SUB-TOTAL</p>
														<p className=" border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(forms?.ccpsubtotal).format() ||
																	"0.00"}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>
															SHIPPING <br />
															(IF APPLICABLE)
														</p>
														<p className="border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(forms?.ccpshippingCost).format()}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>
															If applicable enter, NC <br />
															SALES TAX @{" "}
															<span className={`${nottoBeHighlighted}`}>
																{forms?.ccptax}%
															</span>
														</p>
														<p className=" border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(taxPercentage).format()}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[12pt]">
														<p>GRAND TOTAL</p>
														<p className=" border-2 border-black p-1 text-right  w-28">
															<span className={`${nottoBeHighlighted}`}>
																{forms?.ccpgrandTotal}
															</span>
														</p>
													</div>
												</div>

												<div className="h-[2px] bg-black w-full"></div>

												<div className="text-center overflow-hidden">
													<p className="pt-6 mb-4 text-[10.9pt]">
														_______________________________________________
														<br />
														PURCHASING DEPT.
													</p>
													<p className="mb-2">
														_______________________________________________
														<br />
														DATE
													</p>
													<p className="mb-10">
														__________________________________________________________________________________________________
													</p>
													{/* <p className="mb-6">
														__________________________________________________________________________________________________
													</p> */}
												</div>
											</div>
										</div>
									</div>

									<p className="mt-6 text-[10px] ml-[8px]">
										Rev: 4/22/2022 - FM
									</p>
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
								dispatch(prevStep(3));
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

export default Preview;
