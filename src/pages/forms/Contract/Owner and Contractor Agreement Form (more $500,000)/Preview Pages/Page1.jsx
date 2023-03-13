import moment from "moment";
import { YearsInWord } from "../../../../../shared-component";

const PageOne = ({
	projectDetails,
	formDetails,
	vendor,
	durham,
	nottoBeHighlighted,
}) => {
	// console.log(formDetails);
	return (
		<div className=" pb-4 text-black   text-[11pt] leading-[1.3] h-[11in] ">
			<div>
				{/* Page 1 */}

				<div className=" h-full pt-[1in] ml-[1in] mr-[1in] mb-[0.1in]">
					<div className="h-full flex flex-col justify-between ">
						<div>
							<div className="text-center mb-4">
								<h1 className=" font-bold underline mb-4 ">
									OWNER-CONTRACTOR AGREEMENT
								</h1>
								<p className="mb-4">
									PROJECT NUMBER:{" "}
									<span className={`${nottoBeHighlighted}`}>
										({projectDetails?.name})
									</span>
								</p>
								<p>
									SCHOOL NAME:{" "}
									<span className={`${nottoBeHighlighted}`}>
										({projectDetails?.school?.name})
									</span>
								</p>
							</div>

							<p className="mb-4 text-justify">
								<span className="ml-12">THIS AGREEMENT,</span> in four (4)
								copies, made this{" "}
								<span
									className={`${nottoBeHighlighted} inline-block border-b border-black`}>
									{moment(formDetails?.agreementDate).format("Do")}
								</span>
								{", "}
								day of{" "}
								<span
									className={`inline-block ${nottoBeHighlighted} border-b border-black`}>
									{moment(formDetails?.agreementDate).format("MMMM")}
								</span>
								, Two Thousand and{" "}
								<span
									className={`${nottoBeHighlighted} inline-block border-b border-black`}>
									{YearsInWord(formDetails?.agreementDate)}
								</span>{" "}
								by and between{" "}
								<span
									className={`${nottoBeHighlighted} inline-block border-b border-black`}>
									Durham Public Schools Board of Education
								</span>{" "}
								(herein referred to as the "Owner"), whose mailing address is{" "}
								{/* <span className={`${nottoBeHighlighted}`}>
								Durham Public Schools 511 Cleveland Street, Durham, NC 27702
							</span>{" "} */}
								and{" "}
								<span className={`${nottoBeHighlighted} border-b border-black`}>
									{!vendor[0] ? "" : vendor[0]?.company_name}
								</span>
								. (herein referred {"  "} to {"  "}as the "Contractor"), whose
								mailing address is{" "}
								<span className={`${nottoBeHighlighted} border-b border-black`}>
									{`${!vendor[0] ? "" : vendor[0]?.street}, ${
										!vendor[0] ? "" : vendor[0]?.city
									}, ${!vendor[0] ? "" : vendor[0]?.state}, ${
										!vendor[0] ? "" : vendor[0]?.zip_code
									}`}
								</span>
								. Correspondence, submittals, and notices relating to or
								required under this Contract shall be sent in writing to the
								above addresses; unless either party is notified in writing by
								the other, of a change in address.
							</p>

							<p className="mb-4 text-center">WITNESSETH:</p>

							<p className="mb-4 text-justify">
								<span className="ml-12">WHEREAS,</span> it is the intent of the
								Owner to obtain the services of the Contractor in connection
								with the new construction of{" "}
								<span className={`${nottoBeHighlighted} border-b border-black`}>
									{formDetails?.contractor}
								</span>{" "}
								(hereinafter referred to as the "Project" or the "Work"); and
							</p>
							<p className="mb-4 text-justify">
								<span className="ml-12">WHEREAS,</span> the Contractor desires
								to perform such construction in accordance with the terms and
								conditions of this Agreement,
							</p>
							<p className="mb-4 text-justify">
								<span className="ml-12">NOW, THEREFORE,</span> in consideration
								of the promises made herein and other good and valuable
								consideration, the following terms and conditions are hereby
								mutually agreed to, by and between the Owner and Contractor:
							</p>

							{/* ARTICLE 1 */}
							<div className="mb-4">
								<div className="text-center mb-4">
									<p className="mb-4">Article 1</p>
									<p className="underline">DEFINTIONS</p>
								</div>

								<div>
									<div className="flex gap-8 mb-4">
										<p>1.1</p>
										<p className="text-justify">
											All terms in this Agreement which are defined in the
											Information for Bidders and the General Conditions shall
											have the meanings designated therein.
										</p>
									</div>
									<div className="flex gap-8">
										<p>1.2</p>
										<p className="text-justify">
											The Contract Documents are as defined in the General
											Conditions. Such documents form the Contract, and all are
											as fully a part thereof as if attached to this Agreement
											or repeated herein. The Contract Documents consist of the
											Owner-Contractor Agreement, the General and Supplemental
											Conditions of the Contract, the Drawings, the
											Specifications, all Addenda issued prior to bidding, and
											all Modifications and Change Orders issued after execution
											of the Contract.
										</p>
									</div>
								</div>
							</div>

							{/* ARTICLE 2 */}
							<div>
								<div className="text-center mb-4">
									<p className="mb-4">Article 2</p>
									<p className="underline">STATEMENT OF THE WORK</p>
								</div>

								<div>
									<div className="flex gap-8 mb-4">
										<p>2.1</p>
										<div>
											<p className="text-justify mb-4">
												The Project is the Work identified in the plans and
												specifications prepared by{" "}
												<span
													className={`${nottoBeHighlighted} border-b border-black`}>
													{formDetails?.project}
												</span>{" "}
												dated{" "}
												<span
													className={`${nottoBeHighlighted} border-b border-black`}>
													{moment(formDetails?.projectDate).format("MMMM D")}
												</span>
												,{" "}
												<span
													className={`${nottoBeHighlighted} border-b border-black`}>
													{" "}
													{moment(formDetails?.projectDate).format("YYYY")}
												</span>{" "}
												for{" "}
												<span
													className={`${nottoBeHighlighted} border-b border-black`}>
													Durham Public School
												</span>{" "}
												Board of Education,{" "}
												<span
													className={`${nottoBeHighlighted} border-b border-black`}>
													511 Cleveland Street, Durham, NC 27702
												</span>
												, including the following addenda:
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-between mt-14 text-[8pt]">
							<p className="text-[8pt]">
								Section C, Owner-Contractor Agreement
							</p>
							<p>C-1</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageOne;
