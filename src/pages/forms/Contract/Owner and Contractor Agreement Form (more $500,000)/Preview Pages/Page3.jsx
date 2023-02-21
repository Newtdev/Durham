import currency from "currency.js";
import moment from "moment";
import { doConvert } from "../../../../../shared-component";

const PageThree = ({ formDetails, nottoBeHighlighted }) => {
	return (
		<div className=" pt-8 pb-4 text-black text-[11pt] leading-[1.3] h-[11in]">
			<div>
				{/* Page 3 */}
				<div className="m-[1in]">
					<div>
						<div>
							<div className="flex gap-8 mb-4">
								<p>4.1</p>
								<p className="text-justify">
									The Contractor shall commence the Work promptly upon the date
									established in the Notice to Proceed. If there is no Notice to
									Proceed, the date of commencement of the Work shall be the
									date of this Agreement or such other date as may be
									established herein.
								</p>
							</div>
							<div className="flex gap-8 mb-4">
								<p>4.2</p>
								<p className="text-justify">
									Time is of the essence. The Contractor shall achieve
									Substantial Completion as defined in the General Conditions,
									on or before{" "}
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
							<div className="flex gap-8 mb-4">
								<p>4.3</p>
								<p className="text-justify">
									The Supplemental Conditions contains certain specific dates
									that shall be adhered to and are the last acceptable dates
									unless modified in writing by mutual agreement between the
									Contractor and the Owner. All dates indicate midnight unless
									otherwise stipulated. The only exceptions to this schedule are
									defined in the General Conditions under 8.3 DELAYS AND
									EXTENSIONS OF TIME.
								</p>
							</div>
							<div className="flex gap-8 mb-4">
								<p>4.4</p>
								<p className="text-justify">
									Should the Contractor fail to complete the Work on or before
									the dates stipulated for Substantial Completion and/or Final
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
							<div className="flex gap-8 mb-4">
								<p>5.1</p>
								<p className="text-justify">
									Provided that the Contractor shall strictly and completely
									perform all of its obligations under the Contract Documents,
									and subject only to additions and deductions by Modification
									or as otherwise provided in the Contract Documents, the Owner
									shall pay to the Contractor, in current funds and at the time
									and in the installments hereinafter specified, the sum of{" "}
									<span className={`${nottoBeHighlighted}`}>
										{doConvert(formDetails?.contractAmount)}
									</span>{" "}
									Dollars{" "}
									<span className={`${nottoBeHighlighted}`}>
										{" "}
										{currency(formDetails?.contractAmount).format()}
									</span>{" "}
									herein referred to as the "Contract Sum". This amount includes
									the base bid and the Alternates in Section 2.2
								</p>
							</div>
							<div className="flex gap-8 mb-4">
								<p>5.2</p>
								<p className="text-justify">
									The Contract Sum includes the value engineering items and
									other contract modifications noted in Section 2.3 above that
									total{" "}
									<span className={`${nottoBeHighlighted}`}>
										{currency(formDetails?.modificationAmount).format()}
									</span>
									.
								</p>
							</div>
							<div className="flex gap-8 mb-4">
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
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[0]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[0]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[0]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 2</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[1]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[1]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[1]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 3</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[2]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[2]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[2]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 4</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[3]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[3]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[3]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 5</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[4]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[4]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[4]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 6</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[5]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[5]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[5]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 7</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[6]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[6]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[6]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 8</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[7]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[7]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[7]?.field_value
													).format()}
												</td>
											</tr>
											<tr className="border border-black border-collapse">
												<td className="px-3 w-[30%]">Unit Price No. 9</td>
												<td
													className={`${nottoBeHighlighted} px-3 border-x border-x-black w-[45%]`}>
													{doConvert(
														!formDetails?.units
															? ""
															: formDetails?.units[8]?.field_value
													)}{" "}
													{!formDetails?.units
														? ""
														: formDetails?.units[8]?.field_value
														? "dollars"
														: ""}
												</td>
												<td
													className={`${nottoBeHighlighted} text-center px-3`}>
													{currency(
														!formDetails?.units
															? ""
															: formDetails?.units[8]?.field_value
													).format()}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

					{/* ARTICLE 6 */}
					<div className="text-center">
						<p className="mb-4">Article 6</p>
						<p className="underline">PROGRESS PAYMENTS</p>
					</div>

					<div className="flex justify-between mt-6">
						<p className="text-[10px]">Section C, Owner-Contractor Agreement</p>
						<p>C-3</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageThree;
