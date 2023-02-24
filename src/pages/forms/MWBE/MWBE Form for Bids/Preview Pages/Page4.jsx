import moment from "moment";

const PageFour = ({ formDetails }) => {
	return (
		<div className=" pt-8 pb-4 text-black h-[11in]  leading-[1.1]">
			<div>
				{/* Page 4 */}
				<div className="ml-[1in] mt-[0.7in] mr-[0.7in]  text-[10pt]">
					<div className="mb-3">
						<p className="font-bold text-[11pt] mb-2">
							PART B (Documentation Required to be Submitted Within 72 Hours of
							Notification)
						</p>

						<p className="text-red-900 mb-3 text-justify text-[11pt] leading-[1.1]">
							Certain documentation <strong>MUST</strong> be provided within 72
							hours of notification of being the apparent lowest responsible,
							responsive bidder in order to receive credit for certain
							additional Items checked. If the bidder checked Items 2, 3, 4, 5,
							6, 8, 9 or 10, the bidder <strong>MUST</strong> provide
							documentation supporting those Good Faith Efforts within 72 hours
							of notification of being the apparent lowest responsible,
							responsive bidder.
						</p>

						<p>
							Examples of such documentation include, but are not limited to the
							following:
						</p>
					</div>

					{/* Second List Group */}
					<div className="mb-3 pb-1 border-b border-b-black text-[10pt]">
						<div className="mb-3">
							<p className="font-bold text-center text-[10pt] mb-2">ITEM 2</p>
							<ul className="list-disc space-y-2 pl-12 text-[10pt]">
								<li>
									Invitation to view construction plans, specifications and
									requirements.
								</li>
								<li>
									Cover letter enclosing construction plans, specifications and
									requirements.
								</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2 text-[10pt]">ITEM 3</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>
									Copies of all bid solicitations or request for proposals
									broken down by scope of work.
								</li>
								<li>
									Letter detailing contractor's efforts to break down or combine
									elements of work into economically feasible units to
									facilitate minority participation.
								</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2">ITEM 4</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>
									Documentation of any contacts or correspondence to MWBE,
									community, or contractor organizations in an attempt to meet
									the goal.
								</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2">ITEM 5</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>Copy of pre-bid roster.</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2">ITEM 6</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>
									Letter documenting efforts to provide assistance in obtaining
									required bonding or insurance for MWBE.
								</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2">ITEM 8</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>
									Letter documenting proposed assistance offered to minority
									business in need of equipment, loan capital, lines of credit,
									or joint pay agreements to secure loans, supplies, or letter
									of credit, including waiving credit that is ordinarily
									required.
								</li>
							</ul>
						</div>

						<div className="mb-3">
							<p className="font-bold text-center mb-2">ITEM 9</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>
									Letter documenting negotiations with MWBE businesses to create
									joint venture or partnership arrangement for the construction
									or repair project.
								</li>
							</ul>
						</div>

						<div>
							<p className="font-bold text-center mb-2">ITEM 10</p>
							<ul className="list-disc space-y-2 pl-12">
								<li>Copy of quick pay agreements.</li>
								<li>Copy of quick pay policies.</li>
							</ul>
						</div>
					</div>

					<div>
						<p className="mb-3">
							I do certify the attached documentation as true and accurate
							representation of my good faith efforts.
						</p>

						<div className="mb-3">
							<div className="flex justify-between mb-3">
								<p>
									Date:{" "}
									<span className="bg-yellow-500 border-b border-black">
										{" "}
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

							<p className="text-right mb-3">
								Signature: _______________________________________
							</p>
							<p className="text-right mb-3">
								Title:
								<span className="bg-yellow-500 text-left pl-0.5 inline-block border-b border-black w-[22.1rem]">
									{formDetails?.ownerRepTitle}
								</span>
							</p>

							<div className="flex gap-4 justify-center items-center">
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

export default PageFour;
