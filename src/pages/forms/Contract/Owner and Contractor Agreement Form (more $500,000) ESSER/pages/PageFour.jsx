import "react-datepicker/dist/react-datepicker.css";
import { doConvert } from "../../../../../shared-component";

const PageFour = ({ nottoBeHighlighted, formDetails }) => {
	return (
		<div className=" pt-8 pb-4 text-black text-[11pt] leading-[1.3] h-[11in]">
			<div>
				{/* Page 4 */}
				<div className="h-[10.5] mx-[1in] mt-[0.5in] flex flex-col justify-between ">
					<div>
						<div className="flex gap-8 mb-3">
							<p>6.1</p>
							<p className="text-justify">
								The Contractor hereby agrees that on or about the First day of
								the month for every month during the performance of the Work he
								will deliver to the Owner's Project Manager an Application for
								Payment in accordance with the provisions of Article 9 of the
								General Conditions. This date may be changed upon mutual
								agreement, stated in writing, between the Owner and Contractor.
								Payment under this Contract shall be made as provided in the
								General Conditions. Payments due and unpaid under the Contract
								Documents shall not bear interest.
							</p>
						</div>

						{/* ARTICLE 7 */}
						<div className="mb-4">
							<div className="text-center mb-4">
								<p className="mb-4">Article 7</p>
								<p className="underline">OTHER REQUIREMENTS</p>
							</div>

							<div>
								<div className="flex gap-8 mb-4">
									<p>7.1</p>
									<p className="text-justify">
										The Contractor shall submit the Performance Bond, Labor and
										Material Payment Bond and Certification of Insurance as
										required by the Contract Documents.
									</p>
								</div>
								<div className="flex gap-8 mb-3">
									<p>7.2</p>
									<p className="text-justify">
										The Owner shall furnish to the Contractor{" "}
										<span className={`${nottoBeHighlighted}`}>
											{doConvert(formDetails?.drawings)}
										</span>{" "}
										<span className={`${nottoBeHighlighted}`}>
											({formDetails?.drawings})
										</span>{" "}
										set of drawings and{" "}
										<span className={`${nottoBeHighlighted}`}>
											{doConvert(formDetails?.specifications)}
										</span>{" "}
										<span className={`${nottoBeHighlighted}`}>
											({formDetails?.specifications})
										</span>{" "}
										set of specifications, at no extra cost, for use in the
										Construction of the Work. Additional sets of drawings or
										specifications may be obtained by the Contractor by paying
										the Owner for the costs of reproduction, handling and
										mailing.
									</p>
								</div>
								<div className="flex gap-8 mb-4">
									<p>7.3</p>
									<p className="text-justify">
										The Contractor shall make a good faith effort to utilize
										Historically Underutilized Businesses (HUB’s) per N.C. Gen.
										Stat. 143-128.2, and as described in the construction
										documents.
									</p>
								</div>
								<div className="flex gap-8 mb-4">
									<p>7.4</p>
									<p className="text-justify">
										The General Conditions, Supplemental Conditions and the
										plans and specifications, including any addenda, are
										incorporated herein by reference.
									</p>
								</div>
							</div>
						</div>

						<p className="mb-4">
							Articles 8-12: These Articles Are Intentionally Left Blank
						</p>

						{/* Article 13 */}
						<div>
							<div className="mb-4">
								<p className="underline text-center">Federal Requirements</p>
								<p>Article 13</p>
								<p className="mb-4">FEDERALLY FUNDED PROJECTS</p>
								<p className="text-justify">
									The Contractor is notified that this project will be financed
									with federal funds. The Contractor shall ensure that all
									subcontracts and other contracts for goods and services for
									this project have the below provisions of this section their
									contracts. Contractor agrees to comply with the following
									provisions. Failure to comply with any and all provisions
									herein may be cause for the Owner to issue a cancellation
									notice to the Contractor. In the event of a conflict between
									this section and any other provision in this Agreement, the
									parties agree that this section shall prevail.
								</p>
							</div>

							<div className="flex gap-8">
								<p>13.1</p>
								<div>
									<p>REMEDIES FOR BREACH.</p>
									<p className="text-justify">
										<span className="inline-block -ml-14">
											The Owner reserves all rights and privileges under the
										</span>{" "}
										applicable laws and regulations with respect to this
										Agreement in the event of breach of contract by either
										party.
									</p>
								</div>
							</div>

							<div className="flex gap-8">
								<p>13.2</p>
								<div>
									<p>TERMINATION FOR CAUSE AND FOR CONVENIENCE BY OWNER.</p>
									<p className="text-justify">
										<span className="inline-block -ml-14">
											The Owner reserves the right to immediately terminate this
										</span>{" "}
										Agreement in the event of a breach or default of the
										agreement by Contractor, in the event Contractor fails to:
										(1) meet schedules, deadlines, and/or delivery dates within
										the time specified by this Agreement and/or an IPPA; (2)
										make any payments owed; or (3) otherwise perform in
										accordance with the Agreement and/or the IPPA. The Owner
										also reserves the right to terminate the Agreement
										immediately, with written notice
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between mt-10 pt-2">
						<p className="text-[8pt]">Section C, Owner-Contractor Agreement</p>
						<p className="text-[8pt]">C-4</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageFour;
