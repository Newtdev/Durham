import currency from "currency.js";
import moment from "moment";
import { parseDynamicInput } from "../../../../../shared-component";

const PageTwo = ({ formDetails, nottoBeHighlighted }) => {
	const companies = parseDynamicInput(formDetails?.mwbeInfo) || [];
	// console.log(companies);
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
							<span className={`${nottoBeHighlighted}`}>
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
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[0] ? "" : companies[0]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[0] ? "" : companies[0]?.companyNumber}
									</td>
									<td>{!companies[0] ? "" : companies[0]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[0] ? "" : companies[0]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[0]
											? "0.00"
											: currency(companies[0]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[1] ? "" : companies[1]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[1] ? "" : companies[1]?.companyNumber}
									</td>
									<td>{!companies[1] ? "" : companies[1]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[1] ? "" : companies[1]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[1]
											? "0.00"
											: currency(companies[1]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[2] ? "" : companies[2]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[2] ? "" : companies[2]?.companyNumber}
									</td>
									<td>{!companies[2] ? "" : companies[2]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[2] ? "" : companies[2]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[2]
											? "0.00"
											: currency(companies[2]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[3] ? "" : companies[3]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[3] ? "" : companies[3]?.companyNumber}
									</td>
									<td>{!companies[3] ? "" : companies[3]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[3] ? "" : companies[3]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[3]
											? "0.00"
											: currency(companies[3]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[4] ? "" : companies[4]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[4] ? "" : companies[4]?.companyNumber}
									</td>
									<td>{!companies[4] ? "" : companies[4]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[4] ? "" : companies[4]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[4]
											? "0.00"
											: currency(companies[4]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[5] ? "" : companies[5]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[5] ? "" : companies[5]?.companyNumber}
									</td>
									<td>{!companies[5] ? "" : companies[5]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[5] ? "" : companies[5]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[5]
											? "0.00"
											: currency(companies[5]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[6] ? "" : companies[6]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[6] ? "" : companies[6]?.companyNumber}
									</td>
									<td>{!companies[6] ? "" : companies[6]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[6] ? "" : companies[6]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[6]
											? "0.00"
											: currency(companies[6]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} border-b border-black`}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[7] ? "" : companies[7]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[7] ? "" : companies[7]?.companyNumber}
									</td>
									<td>{!companies[7] ? "" : companies[7]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[7] ? "" : companies[7]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[7]
											? "0.00"
											: currency(companies[7]?.contractAmount).format()}
									</td>
								</tr>
								<tr className={`${nottoBeHighlighted} `}>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[8] ? "" : companies[8]?.companyName}
									</td>
									<td className={`${nottoBeHighlighted} text-left pl-1`}>
										{!companies[8] ? "" : companies[8]?.companyNumber}
									</td>
									<td>{!companies[8] ? "" : companies[8]?.mwbeCategory}</td>
									<td className="border border-black border-collapse text-left pl-1">
										{!companies[8] ? "" : companies[8]?.workDescription}
									</td>
									<td className="border border-black border-collapse text-right pr-1">
										{!companies
											? ""
											: !companies[8]
											? "0.00"
											: currency(companies[8]?.contractAmount).format()}
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
								<span className={`${nottoBeHighlighted} border-b border-black`}>
									{moment(formDetails?.ownerRepDate).format("MMMM D, YYYY")}
								</span>
							</p>
							<p>
								Name of Authorized Officer:{" "}
								<span
									className={`${nottoBeHighlighted} inline-block w-[17.7rem] border-b border-black`}>
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
