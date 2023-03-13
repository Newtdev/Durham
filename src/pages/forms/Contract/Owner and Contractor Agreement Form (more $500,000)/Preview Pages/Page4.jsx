import moment from "moment";
import { doConvert } from "../../../../../shared-component";

const PageFour = ({ formDetails, durham, vendor, nottoBeHighlighted }) => {
	return (
		<div className=" pt-2 text-black text-[11pt] leading-[1.3] h-[11in]">
			<div>
				{/* Page 4 */}
				<div className="m-[1in]  h-full flex flex-col justify-between">
					<div>
						{/* ARTICLE 6 */}
						<div className="text-center">
							<p className="mb-4">Article 6</p>
							<p className="underline">PROGRESS PAYMENTS</p>
						</div>
						<div className="flex gap-8 mb-4">
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
						<div className="mb-8">
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
								<div className="flex gap-8 mb-4">
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

						<div>
							<p className="mb-8 text-justify">
								<span className="ml-12">IN WITNESS WHEREOF,</span>{" "}
								<span className={`${nottoBeHighlighted}`}>
									Durham Public Schools
								</span>{" "}
								Board of Education (hereinbefore called the "Owner") has caused
								these presents to be signed and its corporate seal to be
								hereunto affixed, attested by its Chairperson and Secretary, and{" "}
								<span className={`${nottoBeHighlighted}`}>
									{!vendor[0] ? "" : vendor[0]?.company_name}
								</span>{" "}
								(hereinbefore called "Contractor") has caused these presents to
								be signed by its President and its Corporate seal to be hereunto
								affixed, as hereinafter attested, all as of the day and year
								first above written.
							</p>

							<div className="flex gap-4 mb-4">
								<div className="mt-1">
									<p>
										______________________________________________________________
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{durham?.chairdps_board_of_education?.name}
										</span>
										, Chair, Durham Public Schools Board of Education
									</p>
								</div>
								<div>
									<p>
										<span
											className={`${nottoBeHighlighted} inline-block border-b border-black`}>
											{moment(formDetails?.chairmanSign).format("MMMM D, YYYY")}
										</span>
										<p>Date</p>
									</p>
								</div>
							</div>

							<p className="mb-8">
								This instrument has been pre-audited in the manner required by
								the School Budget and Fiscal Control Act.
							</p>

							<div className="flex gap-4 mb-6">
								<div className="mt-1">
									<p>
										______________________________________________________________
									</p>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{durham?.chief_finance_officer?.name}
										</span>
										, Chief Finance Officer, Durham Public Schools
									</p>
								</div>
								<div>
									<p>
										<span
											className={`${nottoBeHighlighted} inline-block border-b border-black`}>
											{moment(formDetails?.chiefFinanceSign).format(
												"MMMM D, YYYY"
											)}
										</span>
										<p>Date</p>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-between mt-12">
						<p className="text-[10px]">Section C, Owner-Contractor Agreement</p>
						<p>C-4</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageFour;
