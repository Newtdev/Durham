import { useMemo, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";
import moment from "moment";
import currency from "currency.js";
import { CalculateTotal, GrandTotals } from "./forms/FormThree";
import DownLoadForm from "../../Lundsford/Download";

const Preview = () => {
	const [highlighted, setHighlighed] = useState(false);
	const dispatch = useDispatch();
	const show = useSelector(openDownload);
	const downloadComponent = useRef();

	const formID = useSelector(project_document_id);

	const content = useFetchFilledFormQuery(formID);

	// const [awardee, setAwardee] = useState([]);
	// const [showPage, setShow] = useState(false);
	// const content = useSelector(savedResponse);
	// const vendors = content?.data?.data.vendors;
	const forms = useSelector(fields);

	// const pageContent = content?.data;
	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 text-[9pt]"
		: "bg-white text-[9pt]";

	const props = {
		component: downloadComponent,
		name: "CCP Requisition - MODIFIED 4-22-22FM",
		show: !show ? "hidden" : "block",
		stepDefault,
		// close: closeDownload,
	};

	const subTotal = (a) => {
		if (!a) {
			return;
		}
		let quantitySum = 0;
		for (const object of a) {
			quantitySum += Number(object.quantity * object.unitPrice);
		}
		return quantitySum;
	};

	const taxPercentage = useMemo(() => {
		if (!forms?.shippingCost) {
			return "";
		}

		if (!forms?.tax) {
			return Number(forms?.shippingCost) * 4.75;
		} else {
			return Number(forms?.shippingCost) * Number(forms?.tax);
		}
	}, [forms]);

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
										<h2 className="font-bold text-[12pt] font-extrabold">
											DURHAM PUBLIC SCHOOLS
										</h2>
										<h1 className="font-bold text-[14pt] font-extrabold">
											REQUISITION
										</h1>
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
													<span className={`${nottoBeHighlighted}`}>
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
												<p className="border border-black py-1 px-2">
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
												<p className="border border-black p-2">
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
												<p className="border border-black p-1 w-[16.5rem]">
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
												<p className="border border-black p-1 ">
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

										<div className="mb-4 mt-2">
											<div className="flex gap-2 items-end mb-[4.3rem]">
												<p>SHIPPING #:</p>
												<p className="border border-black p-1">
													<span className={`${nottoBeHighlighted}`}>
														{`${forms?.street}, ${forms?.city}, ${forms?.state}, ${forms?.zipCode}`}
													</span>
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
										{/* <TableRow data={forms} /> */}

										<tr className="text-xs">
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[0] ? "" : forms?.items[0].quantity}
											</td>
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[0] ? "" : forms?.items[0].unit}
											</td>
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[0] ? "" : forms?.items[0].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[0] ? "" : forms?.items[0].description}
											</td>
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[0]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[0] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[0]?.quantity,
														forms?.items[0]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[1] ? "" : forms?.items[1].quantity}
											</td>
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[1] ? "" : forms?.items[1].unit}
											</td>
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[1] ? "" : forms?.items[1].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[1] ? "" : forms?.items[1].description}
											</td>
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[1]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[1] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[1]?.quantity,
														forms?.items[1]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[2] ? "" : forms?.items[2].quantity}
											</td>
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[2] ? "" : forms?.items[2].unit}
											</td>
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[2] ? "" : forms?.items[2].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[2] ? "" : forms?.items[2].description}
											</td>
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[2]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[2] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[2]?.quantity,
														forms?.items[2]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[3] ? "" : forms?.items[3].quantity}
											</td>
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[3] ? "" : forms?.items[3].unit}
											</td>
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[3] ? "" : forms?.items[3].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[3] ? "" : forms?.items[3].description}
											</td>
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[3]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[3] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[3]?.quantity,
														forms?.items[3]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[4] ? "" : forms?.items[4].quantity}
											</td>
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[4] ? "" : forms?.items[4].unit}
											</td>
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[4] ? "" : forms?.items[4].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[4] ? "" : forms?.items[4].description}
											</td>
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[4]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[4] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[4]?.quantity,
														forms?.items[4]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[5] ? "" : forms?.items[5].quantity}
											</td>
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[5] ? "" : forms?.items[5].unit}
											</td>
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[5] ? "" : forms?.items[5].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[5] ? "" : forms?.items[5].description}
											</td>
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[5]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[5] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[5]?.quantity,
														forms?.items[5]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[6] ? "" : forms?.items[6].quantity}
											</td>
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[6] ? "" : forms?.items[6].unit}
											</td>
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[6] ? "" : forms?.items[6].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[6] ? "" : forms?.items[6].description}
											</td>
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[6]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[6] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[6]?.quantity,
														forms?.items[6]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[7] ? "" : forms?.items[7].quantity}
											</td>
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[7] ? "" : forms?.items[7].unit}
											</td>
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[7] ? "" : forms?.items[7].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[7] ? "" : forms?.items[7].description}
											</td>
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[7]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[7] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[7]?.quantity,
														forms?.items[7]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[8] ? "" : forms?.items[8].quantity}
											</td>
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[8] ? "" : forms?.items[8].unit}
											</td>
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[8] ? "" : forms?.items[8].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[8] ? "" : forms?.items[8].description}
											</td>
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[8]?.unitPrice).format()}
											</td>
											<td
												className={`${
													forms?.items[8] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(
													CalculateTotal(
														forms?.items[8]?.quantity,
														forms?.items[8]?.unitPrice
													)
												).format()}
											</td>
										</tr>
										<tr className="text-xs">
											<td
												className={`${
													forms?.items[9] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[9] ? "" : forms?.items[9].quantity}
											</td>
											<td
												className={`${
													forms?.items[9] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[9] ? "" : forms?.items[9].unit}
											</td>
											<td
												className={`${
													forms?.items[9] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[9] ? "" : forms?.items[9].stockNumber}
											</td>
											<td
												className={`${
													forms?.items[9] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{!forms?.items[9] ? "" : forms?.items[9].description}
											</td>
											<td
												className={`${
													forms?.items[9] ? nottoBeHighlighted : ""
												} border border-black border-collapse`}>
												{currency(forms?.items[9]?.unitPrice).format()}
											</td>
											<td className="border border-black border-collapse">
												{currency(
													CalculateTotal(
														forms?.items[9]?.quantity,
														forms?.items[9]?.unitPrice
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
													<p>
														<span className={`${nottoBeHighlighted}`}>
															{moment(forms?.signDate).format("MMMM D, YYYY ")}
														</span>
													</p>
												</div>
												<div className="flex justify-between pt-9 h-14 pl-2 pr-2 border-b border-b-blue-300 text-[10.9pt]">
													<p>Business Manager:</p>
													<p>
														<span className={`${nottoBeHighlighted}`}>
															{moment(forms?.signDate).format("MMMM D, YYYY ")}
														</span>
													</p>
												</div>
												<div className="flex justify-between pt-9 h-14  pl-2 pr-2 border-b border-b-blue-300 text-[10.9pt]">
													<p>Director of Construction and Sustainability</p>
													<p>
														<span className={`${nottoBeHighlighted}`}>
															{moment(forms?.signDate).format("MMMM D, YYYY ")}
														</span>
													</p>
												</div>
												<div className="flex justify-between pt-8 h-14 pl-2 pr-2 border-b border-b-blue-300 pt-9 text-[10.9pt]">
													<p>Executive Director Building Services</p>
													<p>
														<span className={`${nottoBeHighlighted}`}>
															{moment(forms?.signDate).format("MMMM D, YYYY ")}
														</span>
													</p>
												</div>
												<div className="flex justify-between h-14 pt-9 pb-[4px] pl-1">
													<p>Deputy Superintendent Operational Services:</p>
													<p>
														<span
															className={`${nottoBeHighlighted} text-[10.9pt]`}>
															{moment(forms?.signDate).format("MMMM D, YYYY ")}
														</span>
													</p>
												</div>
											</div>
										</div>

										<div className="col-span-2">
											<div className="border border-black border-t-0 border-collapse ">
												<div className="text-right p-2 h-[11rem]">
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>SUB-TOTAL</p>
														<p className="border border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(subTotal(forms?.items)).format()}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>
															SHIPPING <br />
															(IF APPLICABLE)
														</p>
														<p className="border border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(forms?.shippingCost).format()}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[9pt]">
														<p>
															If applicable enter, NC <br />
															SALES TAX @{" "}
															<span className={`${nottoBeHighlighted}`}>
																{forms?.tax}%
															</span>
														</p>
														<p className="border border-2 border-black p-1 text-right w-28">
															<span className={`${nottoBeHighlighted}`}>
																{currency(taxPercentage).format()}
															</span>
														</p>
													</div>
													<div className="flex items-center gap-1 mb-2 justify-end text-[12pt]">
														<p>GRAND TOTAL</p>
														<p className="border border-2 border-black p-1 text-right  w-28">
															<span className={`${nottoBeHighlighted}`}>
																{/* // subtotal, shipping, sales total */}
																{GrandTotals(
																	forms?.items,
																	forms?.shippingCost,
																	taxPercentage,
																	forms?.salesTax
																)}
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
							onClick={() => dispatch(prevStep(3))}
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
