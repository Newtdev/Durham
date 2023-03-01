import moment from "moment";

const PageOne = ({ formDetails }) => {
	// console.log(formDetails);
	return (
		<div className="pt-8 pb-4 text-black text-[10pt] h-[11in] leading-[1.2]">
			<div>
				{/* Page 1 */}
				<div className="ml-[1in] my-[0.5in] mr-[0.7in] ">
					<div className="mb-4">
						<p className="font-bold text-[12pt] mb-8">
							The total value of minority business contracting will be ($ ){" "}
							<span className="bg-yellow-500 inline-block border-b border-black">
								{formDetails?.totalValue}
							</span>
							.
						</p>

						<p className="text-center font-bold text-[15.5pt] mb-4">
							AFFIDAVIT A
						</p>

						<p className="text-[#9f0002] text-justify text-[10pt]">
							This Affidavit and <strong>ALL THREE (3) SECTIONS</strong> Herein
							Must Be Completed By <strong>ALL BIDDERS</strong> and Submitted
							with Bid.
						</p>
					</div>

					{/* Section I */}
					<div className="mb-4">
						<div className="mb-4">
							<p className="font-bold text-[13.5pt] mb-4">
								Section I - Listing of the Good Faith Effort
							</p>

							<p className="text-xs text-[#9f0002] text-justify mb-4 text-[11pt]">
								Bidder must earn at least 50 points from the Good Faith Efforts
								list for their Bid to be considered responsive and must submit
								documentation supporting all items checked within the timeframes
								set forth in Section Ill below.
							</p>

							<p className="text-center font-bold text-[10pt]">
								I have made Good Faith Effort to comply under the following
								areas checked:
							</p>
						</div>

						<div className="mb-4">
							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F2</span> */}

									<label
										htmlFor="one"
										className="h-5 w-5 bg-[#9f0002] shadow-md flex justify-center rounded-sm">
										<input
											type="checkbox"
											name=""
											id="one"
											className="text-transparent checked:text-transparent border-0 rounded-md focus:ring-0e"
										/>
									</label>
								</div>

								<p className="text-justify">
									<strong>1 - </strong>Contacted minority businesses that
									reasonably could have been expected to submit a quote and that
									were known to the contractor, or available on State or local
									government maintained lists, at least 10 days before the bid
									date and notified them of the nature and scope of the work to
									be performed. "Contact" means contact by letter, fax, e-mail
									or other means to a viable and active address.{" "}
									<strong className="text-[11pt]">
										CONTRACTOR MUST ATTACH EVIDENCE OF CONTACT TO THIS AFFIDAVIT
										AND SUBMIT WITH BID
									</strong>
									. Value= 10 points.{" "}
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F3</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>2 - </strong>Made the construction plans,
									specifications and requirements available for review by
									prospective MWBE businesses, or providing these documents to
									them at least 10 days before the bids are due. Value= 10
									points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F4</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>3 - </strong>Broken down or combined elements of work
									into economically feasible units to facilitate minority
									participation. Value= 15 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F5</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>4 - </strong>Worked with MWBE trade, community, or
									contractor organizations identified by the Office of
									Historically Underutilized Businesses and included in the bid
									documents that provide assistance in recruitment of MWBE'S.
									Value= 10 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F6</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>5 - </strong>Attended prebid meetings scheduled by the
									public owner. Value = 10 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F7</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>6 - </strong>Provided assistance in getting required
									bonding or insurance or provided alternatives to bonding or
									insurance for subcontractors. Value = 20 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F8</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>7 - </strong>Negotiated in good faith with interested
									MWBE'S and did not reject them as unqualified without
									discussing with MWBE'S sound reasons based on their
									capabilities.{" "}
									<strong>
										CONTRACTOR MUST ATTACH TO THIS AFFIDAVIT AND SUBMIT WITH BID
										COPIES OF QUOTES OR RESPONSES FROM ALL FIRMS SUBMITTING
										QUOTES OR RESOPNSES, AND, IF APPLICABLE, WRITTEN
										JUSTIFICATION FOR ANY REJECTION OF A MWBE BASED ON LACK OF
										QUALIFICATION.
									</strong>{" "}
									Value= 15 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F9</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>8 - </strong>Provided assistance to an otherwise
									qualified MWBE in need of equipment, loan capital, lines of
									credit, or joint pay agreements to secure loans, supplies, or
									letters of credit, including waiving credit that is ordinarily
									required. Assisted minority businesses in obtaining the same
									unit pricing with the bidder's suppliers in order to help MWBE
									businesses in establishing credit. Value = 25 points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F10</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>9 - </strong>Negotiated joint venture and partnership
									arrangements with MWBE businesses in order to increase
									opportunities for MWBE business participation on the
									construction or repair project when possible. Value = 20
									points.
								</p>
							</div>

							<div className="flex items-start gap-2 mb-2">
								<div className="flex items-center gap-2">
									{/* <span className="bg-yellow-500">F11</span> */}
									<input type="checkbox" name="" id="" />
								</div>

								<p className="text-justify">
									<strong>10 - </strong>Provided quick pay agreements and
									policies to enable MWBE contractors and suppliers to meet
									cash-flow demands. Value = 20 points.
								</p>
							</div>
						</div>

						<div>
							<p className="text-justify mb-4">
								The undersigned hereby certifies that he or she has read the
								terms of the MWBE business commitment, that the bidder has made
								the Good Faith Efforts in the areas checked above, and that he
								or she is authorized to bind the bidder to the commitment herein
								set forth.
							</p>

							<div className="flex justify-between mb-4">
								<p>
									Date:{" "}
									<span className="bg-yellow-500 inline-block border-b border-black">
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
								Signature: _______________________________________
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
