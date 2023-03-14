import currency from "currency.js";
import moment from "moment";

const PageFour = ({ formData, form_fields, nottoBeHighlighted, awardee }) => {
	return (
		<div className="pt-20" style={{ margin: "0.5in 1in", height: "10in" }}>
			<div className="mb-2 flex">
				<span className="pl-20 text-justify mt-4">
					country. During Contractor’s work with DPS and thereafter, Contractor
					agrees to execute any patent documents or papers relating to such
					developments as well as any documents and papers DPS BOE may consider
					necessary or helpful in obtaining or maintaining said patents during
					the prosecution of patent applications thereon or the conduct of any
					litigation or other proceeding in connection therewith. All expenses
					incident to such applications, litigation or proceedings shall be the
					sole responsibility of DPS.
				</span>
			</div>
			<div className="mb-2 flex pl-11">
				<span>m.</span>
				<span className="ml-5 text-justify">
					Contractor understands that DPS does not wish to receive from
					Contractor any information which may be considered confidential or
					proprietary to Contractor or any third party. Contractor represents
					and warrants that any information disclosed or provided by Contractor
					to DPS is not confidential or proprietary to Contractor or to any
					third party.
				</span>
			</div>
			<div className="mb-2 flex pl-11">
				<span>n.</span>
				<span className="ml-6 text-justify">
					Each party warrants to the other that it has good and marketable title
					to all of the inventions, information, material, work, or product
					made, created, conceived, written, invented, or provided by the party
					pursuant to the provisions of this Agreement (“Product”). Each party
					further warrants to the other that the Product shall be free and clear
					of all liens, claims, encumbrances, or demands of third parties,
					including any claims by any such third parties of any right, title, or
					interest in or to the product arising out of any trade secret,
					copyright, or patent.
				</span>
			</div>
			<div className="mb-2 flex pl-11">
				<span>o.</span>
				<span className="ml-6 text-justify">
					Should DPS permit Contractor to use any DPS equipment, tools or
					facilities during the term of this Agreement, such permission will be
					gratuitous, and Contractor shall indemnify and hold harmless DPS BOE
					and its officers, directors, agents, and employees from and against
					any claim, loss, expense, or judgment for injury to person or property
					(including death) arising out of the use of any such equipment, tools,
					or facilities, whether or not such claim is based upon the condition
					or on the alleged negligence of DPS BOE in permitting its use.
				</span>
			</div>
			<div className="mb-2 flex pl-12">
				<span>p.</span>
				<span className="ml-5 text-justify">
					Contractor shall keep accurate records and books of account showing
					all charges, disbursements or expenses made or incurred by Contractor
					in the performance of the services herein. DPS’s internal or outside
					auditor shall have the right, upon reasonable notice, to audit during
					business hours, the direct costs, compensation, expenses, and
					disbursements made or incurred in connection with the services to be
					performed herein, and may examine Contractor’s books and records
					relating to these several areas.
				</span>
			</div>
			<div className="flex mb-2">
				<p>2.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							PAYMENT OF FEES
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							DPS BOE agrees to pay to Contractor invoiced amounts to accomplish
							the services required under this Agreement. Such invoiced amounts
							shall not exceed{" "}
							<span className="font-bold">
								<span className={`${nottoBeHighlighted}`}>
									{currency(form_fields?.amount).format()}
								</span>
							</span>{" "}
							for the period of this contract without prior written consent of
							the parties. Invoiced amounts shall accurately reflect the work
							performed through the date of the invoice and will be paid within
							thirty (30) days of receipt and approval of Contractor’s invoice.
						</span>
					</p>
				</div>
			</div>
			<div className="flex mb-2">
				<p>3.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">TERM</span>.{" "}
						<span className="ml-1">
							{" "}
							This Agreement shall be for the time period between{" "}
							<span className={`${nottoBeHighlighted}`}>
								{moment(form_fields?.startDate).format("MMMM D, YYYY ")}
							</span>{" "}
							and{" "}
							<span className={`${nottoBeHighlighted}`}>
								{moment(form_fields?.endDate).format("MMMM D, YYYY ")}{" "}
							</span>
							unless terminated earlier as provided herein. The parties may
							renew
							{/* parties may
                          renew this Agreement only by separate written
                          agreement or addendum hereto, which must be executed
                          by both parties. */}
						</span>
					</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-center mt-2 courier-font text-[10pt]">
				{/* PAGE ONE ENDS HERE */}
				<p>4</p>
			</div>
		</div>
	);
};

export default PageFour;
