import currency from "currency.js";
import moment from "moment";
import { doConvert, parseDynamicInput } from "../../../../../shared-component";
import { Total } from "../../Owner and Contractor Agreement Form (more $500,000) ESSER/pages/PageThree";
import { PageWrapper } from "./Page1";

const PageThree = ({ formDetails, nottoBeHighlighted }) => {
	const units = parseDynamicInput(formDetails?.units) || "";
	const modificationTotal =
		parseDynamicInput(formDetails?.modificationArray) || "";

	return (
		// <div className=" pt-2 pb-4 text-black text-[11pt] leading-[1.3] h-[11in] ">
		// 	<div>
		// 		{/* Page 3 */}
		// 		<div className="mx-[1in] mt-[0.8in]  flex flex-col justify-between">
		<PageWrapper num={3}>
			<div>
				<div>
					<div>
						<div className="mb-4">
							<div className="text-center mb-4">
								<p className="mb-4">Article 4</p>
								<p className="underline">TIME OF COMMENCEMENT AND COMPLETION</p>
							</div>
						</div>
						<div className="flex gap-8 mb-3">
							<p>4.1</p>
							<p className="text-justify">
								The Contractor shall commence the Work promptly upon the date
								established in the Notice to Proceed. If there is no Notice to
								Proceed, the date of commencement of the Work shall be the date
								of this Agreement or such other date as may be established
								herein.
							</p>
						</div>
						<div className="flex gap-8 mb-3">
							<p>4.2</p>
							<p className="text-justify">
								Time is of the essence. The Contractor shall achieve Substantial
								Completion as defined in the General Conditions, on or before{" "}
								<span className={`${nottoBeHighlighted}`}>
									{moment(formDetails?.substantialCompletionDate).format(
										"MMMM D, YYYY"
									)}
								</span>
								. The Contractor shall achieve Final Completion, as defined in
								the General Conditions on or before{" "}
								<span className={`${nottoBeHighlighted}`}>
									{moment(formDetails?.finalCompletionDate).format(
										"MMMM D, YYYY"
									)}
								</span>
								.
							</p>
						</div>
						<div className="flex gap-8 mb-3">
							<p>4.3</p>
							<p className="text-justify">
								The Supplemental Conditions contains certain specific dates that
								shall be adhered to and are the last acceptable dates unless
								modified in writing by mutual agreement between the Contractor
								and the Owner. All dates indicate midnight unless otherwise
								stipulated. The only exceptions to this schedule are defined in
								the General Conditions under 8.3 DELAYS AND EXTENSIONS OF TIME.
							</p>
						</div>
						<div className="flex gap-8 mb-3">
							<p>4.4</p>
							<p className="text-justify">
								Should the Contractor fail to complete the Work on or before the
								dates stipulated for Substantial Completion and/or Final
								Completion, or such later date as may result from an extension
								of time granted by the Owner, he shall pay the Owner, as
								liquidated damages the sums set forth in the General and
								Supplemental Conditions.
							</p>
						</div>
					</div>
				</div>

				{/* ARTICLE 5 */}
				<div className="mb-4">
					<div className="text-center mb-4">
						<p className="mb-4">Article 5</p>
						<p className="underline">CONTRACT SUM</p>
					</div>

					<div>
						<div className="flex gap-8 mb-3">
							<p>5.1</p>
							<p className="text-justify">
								Provided that the Contractor shall strictly and completely
								perform all of its obligations under the Contract Documents, and
								subject only to additions and deductions by Modification or as
								otherwise provided in the Contract Documents, the Owner shall
								pay to the Contractor, in current funds and at the time and in
								the installments hereinafter specified, the sum of{" "}
								<span className={`${nottoBeHighlighted}`}>
									{doConvert(formDetails?.contractAmount)}
								</span>{" "}
								Dollars{" "}
								<span className={`${nottoBeHighlighted}`}>
									{" "}
									({currency(formDetails?.contractAmount).format()})
								</span>{" "}
								herein referred to as the "Contract Sum". This amount includes
								the base bid and the Alternates in Section 2.2
							</p>
						</div>
						<div className="flex gap-8 mb-3">
							<p>5.2</p>
							<p className="text-justify">
								The Contract Sum includes the value engineering items and other
								contract modifications noted in Section 2.3 above that total{" "}
								<span className={`${nottoBeHighlighted}`}>
									{!modificationTotal || modificationTotal.length < 1
										? "N/A"
										: Total(modificationTotal)}
								</span>
								.
							</p>
						</div>
						<div className="flex gap-8 mb-3">
							<p>5.3</p>
							<div>
								<p className="mb-4">
									Unit Prices are established as follows for the Project:
								</p>

								<table className="border border-black w-[550px] mb-4">
									<tbody>
										{/* {GetSlicedData(formDetails?.units)} */}
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 1</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[0] ? "" : units[0].unit)}{" "}
												{!units[0] ? "" : units[0].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[0] ? "" : units[0]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 2</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[1] ? "" : units[1].unit)}{" "}
												{!units[1] ? "" : units[1].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[1] ? "" : units[1]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 3</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[2] ? "" : units[2].unit)}{" "}
												{!units[2] ? "" : units[2].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[2] ? "" : units[2]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 4</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[3] ? "" : units[3].unit)}{" "}
												{!units[3] ? "" : units[3].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[3] ? "" : units[3]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 5</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[4] ? "" : units[4].unit)}{" "}
												{!units[4] ? "" : units[4].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[4] ? "" : units[4]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 6</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[5] ? "" : units[5].unit)}{" "}
												{!units[5] ? "" : units[5].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[5] ? "" : units[5]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 7</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[6] ? "" : units[6].unit)}{" "}
												{!units[6] ? "" : units[6].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[6] ? "" : units[6]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 8</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[7] ? "" : units[7].unit)}{" "}
												{!units[7] ? "" : units[7].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[7] ? "" : units[7]?.unit).format()}
											</td>
										</tr>
										<tr className="border border-black border-collapse">
											<td className="px-3 w-[30%]">Unit Price No. 9</td>
											<td
												className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
												{doConvert(!units[8] ? "" : units[8].unit)}{" "}
												{!units[8] ? "" : units[8].unit ? "dollars" : ""}
											</td>
											<td className={`${nottoBeHighlighted} text-right px-3`}>
												{currency(!units[8] ? "" : units[8]?.unit).format()}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default PageThree;
