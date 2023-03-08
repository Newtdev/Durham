import currency from "currency.js";
import moment from "moment";

const PageTwo = ({ formDetails }) => {
	return (
		<div className="pt-8 pb-4 text-black text-[11pt] leading-[1.3] h-[10.5in]">
			<div>
				{/* Page 2 */}
				<div className="ml-[1in] my-[0.8in] mr-[0.7in]">
					{/* Section II */}
					<div className="mb-4">
						<p className="font-bold text-[13.5pt]  mb-4">
							Section II - Portion of the Work to be Performed by Minority Firms
						</p>

						<p className="text-justify mb-4">
							I will expend a minimum of{" "}
							<span className="bg-yellow-500">
								{formDetails?.minPercentage}
							</span>
							% of the total dollar amount of the contract with MWBE. MWBE will
							be employed as construction subcontractors, vendors, suppliers or
							providers of professional services. Such work will be
							subcontracted to the following firms listed below.
						</p>

						<p className="mb-4 text-center text-[9pt]">
							(Attach additional sheets if necessary)
						</p>

						<table className="w-full border border-black border-collapse text-center">
							<thead>
								<tr>
									<th
										colSpan={2}
										className="border-b border-b-black text-left pl-1">
										Name and Phone Number
									</th>
									<th className="border-b border-b-black">
										*MWBE <br />
										Category
									</th>
									<th className="border border-black border-collapse">
										Work Description
									</th>
									<th className="border border-black border-collapse">
										Dollar Value
									</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[0]?.field_value}
									</td>
									<td className="text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[2]?.field_value}
									</td>
									<td>
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[3]?.field_value}
									</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[4]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[5]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[5]?.field_value
											  ).format()}
									</td>
								</tr>

								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[6]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[8]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[9]?.field_value}
									</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[10]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[11]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[11]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[19]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[20]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[21]?.field_value}
									</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[22]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[23]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[23]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[25]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[26]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[27]?.field_value}
									</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[28]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[29]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[29]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[31]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[32]?.field_value}
									</td>
									<td className="border-t border-t-black ">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[33]?.field_value}
									</td>
									<td className="border border-black border-collapse pl-1 text-left">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[34]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[35]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[35]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[37]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[38]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[39]?.field_value}
									</td>
									<td className="border border-black border-collapse">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[40]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[41]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[41]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[42]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[43]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[44]?.field_value}
									</td>
									<td className="border border-black border-collapse">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[45]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[46]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[46]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[48]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[49]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[50]?.field_value}
									</td>
									<td className="border border-black border-collapse">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[51]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[6]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[52]?.field_value
											  ).format()}
									</td>
								</tr>
								<tr className="h-[19.5px]">
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[54]?.field_value}
									</td>
									<td className="text-left pl-1 border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[55]?.field_value}
									</td>
									<td className="border-t border-t-black">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[56]?.field_value}
									</td>
									<td className="border border-black border-collapse">
										{!formDetails?.mwbeInfo
											? ""
											: formDetails?.mwbeInfo[57]?.field_value}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!formDetails?.mwbeInfo
											? ""
											: !formDetails?.mwbeInfo[6]
											? "0.00"
											: currency(
													formDetails?.mwbeInfo[51]?.field_value
											  ).format()}
									</td>
								</tr>
							</tbody>
						</table>

						<p className="text-center mb-4 text-[10pt]">
							*MWBE categories: Black, African American <strong>(B)</strong>,
							Hispanic <strong>(H)</strong>, Asian American <strong>(A)</strong>{" "}
							American Indian <strong>(I)</strong>, Female <strong>(F)</strong>{" "}
							Socially and Economically Disadvantaged <strong>(D)</strong>
						</p>

						<p className="text-justify mb-4">
							Pursuant to GS143-128.2(d), the undersigned will enter into a
							formal agreement with MWBE for work listed in this schedule
							conditional upon execution of a contract with the Owner. Failure
							to fulfill this commitment may constitute a breach of the
							contract.
						</p>

						<p className="text-justify mb-6">
							The undersigned hereby certifies that he or she has read the terms
							of this commitment and is authorized to bind the bidder to the
							commitment herein set forth.
						</p>

						<div className="flex justify-between mb-4">
							<p>
								Date:{" "}
								<span className="bg-yellow-500 border-b border-black">
									{moment(formDetails?.ownerRepDate).format("MMMM D, YYYY")}
								</span>
							</p>
							<p>
								Name of Authorized Officer:{" "}
								<span className="bg-yellow-500 inline-block w-[17.7rem] border-b border-black">
									{formDetails?.ownerRepName}
								</span>
							</p>
						</div>

						<p className="text-right">
							Signature: ___________________________________
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageTwo;
