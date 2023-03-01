import moment from "moment";

const PageEight = ({ formDetails, durham, vendor, nottoBeHighlighted }) => {
	return (
		<div className=" pt-8 pb-4 text-black text-[11pt] leading-[1.3] h-[11in]">
			<div>
				{/* Page 4 */}
				<div className="mx-[1in] mt-[0.5in]">
					{/* <div className="flex gap-8 mb-4">
						<p>6.1</p>
						<p className="text-justify">
							The Contractor hereby agrees that on or about the First day of the
							month for every month during the performance of the Work he will
							deliver to the Owner's Project Manager an Application for Payment
							in accordance with the provisions of Article 9 of the General
							Conditions. This date may be changed upon mutual agreement, stated
							in writing, between the Owner and Contractor. Payment under this
							Contract shall be made as provided in the General Conditions.
							Payments due and unpaid under the Contract Documents shall not
							bear interest.
						</p>
					</div> */}

					{/* ARTICLE 7 */}
					{/* <div className="mb-8">
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
									specifications may be obtained by the Contractor by paying the
									Owner for the costs of reproduction, handling and mailing.
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
									The General Conditions, Supplemental Conditions and the plans
									and specifications, including any addenda, are incorporated
									herein by reference.
								</p>
							</div>
						</div>
					</div> */}

					<div>
						<div className="flex gap-4 mb-6">
							<div>
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
								<p>_____________________</p>
								<p>
									<span className={`${nottoBeHighlighted}`}>
										{moment(formDetails?.chiefFinanceSign).format(
											"MMMM D, YYYY"
										)}
									</span>
								</p>
							</div>
						</div>

						<div className="border-4 border-gray-300 p-2">
							<div className="flex gap-12">
								<p>Endorsement:</p>
								<div>
									<p>
										<span className={`${nottoBeHighlighted}`}>
											{
												durham
													?.executive_director_durham_public_schools_building_services
													?.name
											}
										</span>
									</p>
									<p>Executive Director</p>
									<p>
										Durham Public Schools{" "}
										<span className="ml-12">Building services</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Page 5 */}
					<p className="mb-4">
						This contract was approved by the Board on the{" "}
						<span className={`${nottoBeHighlighted}`}>
							{moment(formDetails?.boardApprovalDate).format("MMMM D, YYYY")}
						</span>
					</p>
					<p className="mb-8">
						<span className={`${nottoBeHighlighted}`}>
							{!vendor[0] ? "" : vendor[0]?.company_name}
						</span>
					</p>
					<p className="mb-8">
						By:{" "}
						<span className="ml-16">
							________________________________________________________
						</span>
					</p>
					<p className="mb-4">
						Name/Title:{" "}
						<span className="ml-2">
							_______________________________________________________
						</span>
					</p>
					<p>STATE OF NORTH CAROLINA</p>
					<p>COUNTY OF DURHAM</p>

					<p className="my-4 text-justify">
						<span className="ml-7">I,</span> a Notary Public in and for the
						aforesaid County and State, do hereby certify that
						____________________ personally appeared before me this day and
						acknowledged that he/she is _____________ of
						_________________________., a _________________ (state of
						incorporation) corporation, duly authorized to do business in the
						state of North Carolina, and that by authority duly given and as the
						act of the corporation, the foregoing instrument was signed in its
						name by its ________, sealed with its corporate seal and attested by
						___________________ as its Corporate Secretary.
					</p>
					<p className="mb-8 text-justify">
						Witness my hand and notarial seal this{" "}
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("Do")}
						</span>{" "}
						day of{" "}
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("MMMM, ")}
						</span>
						, 20
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("YY")}
						</span>
						.
					</p>
					<div className="mb-8 flex gap-8">
						<div>
							<p>__________________________________________</p>
							<p>Notary Public</p>
						</div>
						<p>(SEAL/STAMP)</p>
					</div>
					<p>My commission expires:___________</p>
					<div className="flex justify-between mt-80 pt-12 mb-4 text-[8pt]">
						<p>Section C, Owner-Contractor Agreement</p>
						<p>C-8</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageEight;
