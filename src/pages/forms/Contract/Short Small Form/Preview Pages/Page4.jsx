import { SmallShortWrapper } from "./Page10";

const PageFour = (props) => {
	const editEmailAddress = () => {
		return props?.form_fields?.ownerEmail;
	};
	return (
		// <div
		// 	className="text-black py-[0.8in] mt-[1in] px-[0.6in] leading-[1.1] text-[13.5px]"
		// 	style={{ height: "10.5in" }}>
		<SmallShortWrapper num={4}>
			<div className="leading-[1.1]">
				{/* Page 4 */}
				<div>
					<div className="mb-10">
						<div>
							<div className="flex gap-12 mb-1.5 ml-[63px]">
								<div>
									<div className="ml-3 mb-1.5 grid grid-cols-2">
										<div>
											<div className="flex gap-[20px] mb-1.5">
												<p>d.</p>
												<div>
													<p>Automobile Liability (Symbol 1)</p>
													<p>Bodily Injury and Property Damage</p>
												</div>
											</div>
											<div className="flex gap-[20px]">
												<p>e.</p>
												<div>
													<p>Professional Liability</p>
													<p>Original Project Value</p>
												</div>
											</div>
										</div>

										<div>
											<div className="mb-1.5">
												<p>Combined Single Limit</p>
												<p>$1,000,000 Each Accident</p>
											</div>

											<div>
												<p>$1,000,000 Each Chain</p>
												<p>$1,000,000 Policy Aggregate</p>
											</div>
										</div>
									</div>

									<p className="ml-11 text-justify">
										Design Consultant’s Professional Liability policy shall
										explicitly include coverage for Bodily Injury and/or have
										any Bodily Injury exclusion deleted by endorsement as
										necessary to provide this coverage.
									</p>
								</div>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>1.5.1</p>
								<p className="text-justify">
									A certificate of insurance documenting evidence of such
									insurance shall be furnished to the Owner. The Design
									Consultant shall also provide a policy endorsement requiring
									the Owner to receive thirty (30) days prior written notice of
									cancellation for any statutorily permitted reason other than
									non-payment of premium. In addition, the Design Consultant
									shall provide at least five (5) business days written prior
									notice to the Owner’s Representative at the address noted
									above and via email ("
									<span className={`underline ${props?.nottoBeHighlighted}`}>
										{editEmailAddress()}
									</span>
									") of the cancellation, non-renewal (without replacement), or
									the material reduction of coverage or limits of any of the
									policies. Upon notice of such cancellation, nonrenewal or
									reduction, the Design Consultant shall procure substitute
									insurance so as to assure the Owner that the minimum limits of
									coverage are maintained continuously throughout the period of
									this Agreement.
								</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>1.5.2</p>
								<p className="text-justify">
									The Design Consultant shall deliver to the Owner a Certificate
									of Insurance for all of its insurance coverage for as long as
									it is required to maintain such coverage under paragraph this
									Agreement.
								</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>1.5.3</p>
								<p className="text-justify">
									The Owner, Durham Public Schools Board of Education, shall be
									named by endorsement as additional insureds on Design
									Consultant’s General Liability policy.
								</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>1.5.4</p>
								<p className="text-justify">
									The Design Consultant shall maintain in force during the
									performance of this Agreement and for one year after final
									completion of the Project, the Professional Liability
									insurance coverage referenced above.
								</p>
							</div>

							<div className="flex gap-12 mb-1.5">
								<p>1.6</p>
								<p className="text-justfy">
									<span className="mr-3">QUALIFICATIONS:</span> All work shall
									be performed by qualified personnel under the supervision of a
									North Carolina Licensed Architect, and the documents submitted
									shall bear the Architect’s seal and certification.
								</p>
							</div>

							<div className="flex gap-12">
								<p>1.7</p>
								<p className="text-justfy">
									<span className="mr-3">USE OF DRAWINGS:</span> It is
									understood that the Owner, or his representatives and/or
									agents, may reproduce the drawings without modifications and
									distribute the prints without incurring obligation for
									additional compensation to the Design Consultant. One printed
									copy and one digital copy in both .PDF and .DWG formats of all
									drawings shall be provided to the Owner for this purpose.
								</p>
							</div>
						</div>
					</div>

					{/* Article 2 */}
					<div>
						<div className="text-center font-bold mb-1.5 -mt-6">
							<p className="mb-2">ARTICLE 2</p>
							<p>BASIC SERVICES</p>
						</div>

						<div>
							<div className="flex gap-12 mb-1.5">
								<p>2.1</p>
								<p className="underline">Scope of Services.</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>2.1.1</p>

								<p className="text-justify">
									The Basic Services to be provided by the Design Consultant
									shall be as described in Exhibit A and shall include all
									services customarily furnished by an architect/engineer and
									its consultants in accordance with generally accepted
									architectural and engineering practices consistent with the
									terms of this Agreement.
								</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>2.1.2</p>

								<p className="text-justify">
									It is the responsibility of the Design Consultant to ensure
									that the Individual Project Construction Documents require
									that no asbestos-containing materials are to be incorporated
									in the Project.
								</p>
							</div>

							<div className="flex gap-12 mb-1.5">
								<p>2.2</p>
								<p className="underline">
									Design Consultant's Professional Responsibility and Standard
									of Care.
								</p>
							</div>

							<div className="flex gap-[35px] mb-1.5">
								<p>2.2.1</p>

								<p className="text-justify">
									By execution of this Agreement, the Design Consultant warrants
									that (a) it is an experienced and duly licensed firm or
									individual having the ability and skill necessary to perform
									all the Services required of it under this Agreement in
									connection with the design and construction of a project
									having the scope and complexity of the Project contemplated
									herein; (b) it has the capabilities and resources necessary to
									perform its obligations hereunder; and (c) it is familiar with
									all current laws, rules and regulations which are applicable
									to the design and construction of the Project (such laws,
									rules and regulations including, but not limited to, all local
									ordinances, requirements of building codes of city, county,
									state and federal authorities which are applicable to the
									Project, local sanitary laws and rules and regulations, and
									all orders and interpretations by governing public authorities
									of such ordinances, requirements, codes, laws, rules and
									regulations in effect at the time of commencement of services
									on the Project), and that all drawings, specifications and
									other documents prepared by the Design Consultant shall be
									prepared in accordance with and shall accurately meet, reflect
									and incorporate all such laws, rules and regulations.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SmallShortWrapper>
	);
};

export default PageFour;
