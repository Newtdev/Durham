import moment from "moment";

const PageFive = ({ formDetails, project }) => {
	return (
		<div className=" pt-8 pb-4 text-black h-[11in] leading-[1.2] text-[11pt]">
			<div>
				{/* Page 5 */}
				<div className="ml-[1in] mr-[0.7in] mt-[0.5in] ">
					<p className="font-bold text-center text-[15.9pt] mb-0">
						State of North Carolina --AFFIDAVIT B-- Intent to Perform Contract
						with Own Workforce.
					</p>

					<div className="mb-10">
						<p className="font-bold mb-4">
							County of <span className="bg-yellow-500">Durham</span>
						</p>
						<p className="mb-0">
							Affidavit of{" "}
							<span className="bg-yellow-500">
								Durham Public Schools Board of Education
							</span>
						</p>
						<p className="mb-4 text-[10px] text-center">(Name of Bidder)</p>

						<p className="mb-4">
							I hereby certify that it is our intent to perform 100% of the work
							required for the{" "}
							<span>
								<span className="bg-yellow-500">{project?.name}</span> <br />{" "}
								(Name of Project)
							</span>{" "}
							contract.
						</p>

						<p className="mb-4 text-jusify">
							In making this certification, the Bidder states that the Bidder
							does not customarily subcontract elements of this type project,
							and normally performs and has the capability to perform and will
							perform{" "}
							<span className="underline">all elements of the work</span> on
							this project with his/her own current work forces; and
						</p>
						<p className="mb-4 text-jusify">
							The Bidder agrees to provide any additional information or
							documentation requested by the owner in support of the above
							statement. The Bidder agrees to make a Good Faith Effort to
							utilize minority suppliers where possible.
						</p>
						<p className="text-jusify">
							The undersigned hereby certifies that he or she has read this
							certification and is authorized to bind the Bidder to the
							commitments herein contained.
						</p>
					</div>

					<div className="mb-36">
						<div className="flex justify-between mb-4">
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
								</span>{" "}
							</p>
						</div>

						<p className="text-right mb-4">
							Signature: ___________________________________
						</p>
						<p className="text-right mb-4">
							Title:
							<span className="bg-yellow-500 text-left pl-0.5 inline-block border-b border-black w-[24.3rem]">
								{formDetails?.ownerRepTitle}
							</span>{" "}
						</p>

						<div>
							<div className="h-24 w-24 rounded-full flex items-center justify-center border border-black mb-4 ml-14">
								<p className="text-sm">SEAL</p>
							</div>

							<div className="text-[9.9pt]">
								<p className="mb-3">
									State of ____________________________________, County of
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

					<p className="text-[9.9pt] Times-font">
						MBForms 2002-Revised May 2010
					</p>
				</div>
			</div>
		</div>
	);
};

export default PageFive;
