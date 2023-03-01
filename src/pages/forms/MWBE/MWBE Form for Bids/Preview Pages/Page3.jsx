import moment from "moment";

const PageThree = ({ formDetails }) => {
	return (
		<div className=" pt-8 pb-4 text-black h-[11in] leading-[1.2] text-[11pt]">
			<div>
				{/* Page 3 */}
				<div className="ml-[1in] my-[0.7in] mr-[0.7in]">
					<p className="font-bold text-[13.5pt] mb-4">
						Section III - Documentation of Good Faith Efforts
					</p>

					<div className="mb-4">
						<p className="mb-4 text-justify">
							<strong>ALL BIDDERS</strong>, regardless of percentage of MWBE
							participation, <strong>MUST</strong> provide documentation of all
							Good Faith Efforts checked in Section I within the timeframes set
							forth in Parts A and B below.
						</p>

						<p className="text-justify mb-4">
							Failure to submit these documents/ information shall be grounds
							for deduction of Good Faith Points. In the event such a deduction
							results in a failure to achieve the required number of Good Faith
							Points, the Bid shall be rejected unless the bidder has otherwise
							demonstrated Good Faith Efforts.
						</p>

						<p className="font-bold text-xs mb-4">
							PART A (Documentation Required to be Submitted With Bid)
						</p>

						<p className="mb-4 text-[#9f0002] text-justify">
							Documentation <strong>MUST</strong> be provided{" "}
							<strong>WITH THE BID</strong> in order for the bidder to receive
							credit for certain items checked. If the bidder checked Items 1 or
							7 in Section I, the bidder <strong>MUST</strong> provide
							documentation supporting those Good Faith Efforts{" "}
							<strong>WITH THE BID</strong>.
						</p>

						<p>
							Examples of such documentation include, but are not limited to,
							the following:
						</p>
					</div>

					{/* First List Group */}
					<div className="mb-4">
						<div className="mb-4">
							<p className="font-bold text-center mb-4">ITEM 1</p>

							<ul className="list-disc pl-12">
								<li>
									Copies of solicitations for quotes to at least three (3)
									MWBE's from the source list provided by the State for each
									subcontract to be let under this contract (if 3 or more firms
									are shown on the source list). Each solicitation shall contain
									a specific description of the work to be subcontracted,
									location where bid documents can be reviewed, representative
									of the Prime Bidder to contact, and location, date and time
									when quotes must be received.
								</li>
								<li>
									Copies of quotes and responses received from each firm
									responding to the solicitation.
								</li>
								<li>
									A telephone log of follow-up calls to each firm sent a
									solicitation.
								</li>
							</ul>
						</div>

						<div className="pb-8 border-b border-b-black">
							<p className="font-bold text-center mb-4">ITEM 7</p>

							<ul className="list-disc pl-12">
								<li>
									Copies of quotes or responses received from all firms
									submitting quotes or responses for each subcontract, and, if
									applicable a letter detailing the reason(s) for any rejection
									of minority business(es) due to lack of qualification.
								</li>
							</ul>
						</div>
					</div>

					<div className="mb-4">
						<p className="mb-4">
							I do certify the attached documentation as true and accurate
							representation of my good faith efforts.
						</p>

						<div className="mb-4">
							<div className="flex justify-between mb-4">
								<p>
									Date:{" "}
									<span className="bg-yellow-500 ">
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

							<p className="text-right mb-4">
								Signature: _____________________________________
							</p>
							<p className="text-right mb-4">
								Title:
								<span className="bg-yellow-500 text-left ml-1 inline-block border-b border-black w-[24.5rem] ">
									{formDetails?.ownerRepTitle}
								</span>
							</p>

							<div className="flex gap-8 justify-center items-center text-[10pt]">
								<div className="h-24 w-24 rounded-full flex items-center justify-center border border-black">
									<p className="text-sm">SEAL</p>
								</div>

								<div>
									<p className="mb-3">
										State of North Carolina, County of
										_______________________________________________
									</p>
									<p className="mb-3">
										Subscribed and sworn to before me this _________ day of
										__________________ 20____
									</p>
									<p className="mb-3">Notary Public ________________________</p>
									<p>My commission expires __________________</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageThree;
