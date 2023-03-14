import moment from "moment";

const PageTwo = ({ formsDetails, vendor, nottoBeHighlighted }) => {
	return (
		<div className=" pb-4 text-black h-[10.5in] text-[10pt] leading-[1.2] ">
			<div>
				<div className="flex flex-col justify-between">
					{/* Page 2 */}
					<div className="mx-[1in] pt-[0.5in] ">
						<p className="mb-6 text-center">ENGINEERING CONSULTANT AGREEMENT</p>

						<p className="text-justify mb-8">
							This AGREEMENT made this{" "}
							<span className={`${nottoBeHighlighted}`}>
								{moment(formsDetails?.agreementDate).format("Do")}
							</span>{" "}
							day of{" "}
							<span className={`${nottoBeHighlighted}`}>
								{moment(formsDetails?.agreementDate).format("MMMM")}
							</span>
							,{" "}
							<span className={`${nottoBeHighlighted}`}>
								{" "}
								{moment(formsDetails?.agreementDate).format("YYYY")}
							</span>{" "}
							between Durham Public Schools Board of Education, located at{" "}
							<span className={`${nottoBeHighlighted}`}>
								511 Cleveland Street, Durham, NC 27702
							</span>{" "}
							(hereinafter, “Owner”), and{" "}
							<span className={`${nottoBeHighlighted}`}>
								{!vendor[0] ? "" : vendor[0]?.company_name}
							</span>
							, located at{" "}
							{!vendor[0] ? (
								""
							) : (
								<span className={`${nottoBeHighlighted}`}>
									{`${!vendor[0] ? "" : vendor[0]?.street}, ${
										!vendor[0] ? "" : vendor[0]?.city
									}, ${!vendor[0] ? "" : vendor[0]?.state}, ${
										!vendor[0] ? "" : vendor[0]?.zip_code
									}`}
								</span>
							)}{" "}
							(hereinafter, the “Engineer”). The Agreement is for Professional
							Services to be provided as authorized by the Owner and as outlined
							in the Proposal and Scope of Services attached to this Agreement
							as Exhibit A.
						</p>

						{/* Article 1 */}
						<div className="text-[10pt]">
							<div className="mb-6 text-center">
								<p className="mb-4">ARTICLE 1</p>
								<p>TERMS AND CONDITIONS</p>
							</div>

							<div>
								<div className="flex gap-8 mb-4">
									<p>1.1</p>
									<p>
										<span className="mr-3">WORK:</span> The Engineer shall
										perform the services outlined on the attached Exhibit A as
										authorized by the Owner and in accordance with the terms and
										conditions of this Agreement. The Engineer agrees that all
										plans, drawing, specifications, designs and surveys in draft
										or final form are the property of the Owner, who may demand
										possession of them at anytime from Engineer and receive the
										same within three business days of demand.
									</p>
								</div>

								<div className="flex gap-8 mb-4">
									<p>1.2</p>
									<div>
										<p className="mb-3">
											<span className="mr-3">TIME:</span> The Engineer shall
											perform the services outlined on the attached Exhibit A as
											authorized by the Owner and in accordance with the terms
											and conditions of this Agreement. The Engineer agrees that
											all plans, drawing, specifications, designs and surveys in
											draft or final form are the property of the Owner, who may
											demand possession of them at anytime from Engineer and
											receive the same within three business days of demand.
										</p>
										<p>
											In the event that circumstances beyond the Engineer’s
											control force a delay that prohibits or may prohibit the
											Engineer’s compliance with the schedule, the Engineer
											shall inform the Owner immediately.
										</p>
									</div>
								</div>

								<div className="flex gap-8 mb-4">
									<p>1.3</p>
									<p>
										<span className="mr-3">COMPENSATION:</span> The Engineer
										shall be compensated in accordance with the fee schedule
										included in Exhibit A to this Agreement and this Paragraph.
										The fee described in Exhibit A shall cover the cost of the
										engineering services (including the furnishing of all
										materials, apparatus, labor and any required insurance).
										Attached as Exhibit B is an hourly rate schedule for any
										services to be provided by the hour and any additional
										services that may be authorized under this Agreement. The
										Engineer shall not be compensated for any work or services
										performed without specific authorization from Owner.
									</p>
								</div>

								<div className="flex gap-12 mb-4">
									<p>1.4</p>
									<p>BILLING AND PAYMENT:</p>
								</div>

								<div className="flex gap-[35px] mb-4">
									<p>1.4.1</p>
									<div>
										<p className="mb-1 text-justify">
											Billing for the work shall be directed to the Owner at the
											following address:
										</p>
										<div className="ml-10">
											<p>Superintendent</p>
											<p>Durham Public Schools</p>
											<p className="">
												<span className={`${nottoBeHighlighted}`}>
													{formsDetails?.address}
												</span>
											</p>
											<p className="">
												<span className={`${nottoBeHighlighted}`}>
													{console.log(formsDetails)}
													{`${formsDetails?.city} 
												${formsDetails?.state + ","} ${formsDetails?.zipCode}`}
												</span>
											</p>
										</div>
									</div>
								</div>

								<div className="flex gap-[35px] mb-4">
									<p>1.4.2</p>
									<p className="text-justify">
										Payment shall be made within thirty (30) days of receipt of
										an acceptable invoice from the Engineer.
									</p>
								</div>

								<div className="flex gap-12 mb-4">
									<p>1.5</p>
									<div>
										<p className="mb-1">INSURANCE:</p>
										<p className="mb-1 text-justify">
											The Engineer shall purchase and maintain insurance for
											protection from claims under workers' or workmen's
											compensation acts; claims resulting from negligent acts or
											omissions for damages because of bodily injury, including
											personal injury, sickness, disease or death of any of the
											Engineer's employees or any other person; claims for
											damages because of injury to or destruction of personal
											property including loss of use resulting therefrom; and
											claims arising out
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-6 text-[12pt] mt-auto flex items-end justify-center">
						2
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageTwo;
