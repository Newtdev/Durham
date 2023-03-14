import moment from "moment";

const PageSeven = ({ formDetails, durham, nottoBeHighlighted, vendor }) => {
	return (
		<div className=" pt-2 text-black  text-[11pt] leading-[1.3] h-[11in]">
			<div>
				{/* Page 7 */}
				<div className="h-[10in] flex flex-col justify-between  mx-[1in] mt-[0.5in]">
					<div>
						<div className="flex gap-8">
							<p>13.11</p>
							<div>
								<p>
									PROHIBITION ON CERTAIN TELECOMMUNICATIONS AND VIDEO
									SURVEILLANCE SERVICES OR EQUIPMENT.
								</p>
								<p className="text-justify">
									<span className="inline-block -ml-16">
										As detailed in 2 CFR § 200.216, Contractor certifies that
										any
									</span>{" "}
									equipment, services, or systems provided through this
									Agreement shall not use covered telecommunications equipment
									or services as a substantial or essential component of a
									system or as part of any system.
								</p>
							</div>
						</div>

						<div className="flex gap-8">
							<p>13.12</p>
							<div>
								<p>DOMESTIC PREFERENCE</p>
								<p className="text-justify">
									<span className="inline-block -ml-16">
										As detailed in 2 CFR § 200.322, as appropriate and to the
										extent
									</span>{" "}
									consistent with law, Contractor certifies that, to the
									greatest extent practicable, the goods, products, or materials
									furnished through this award will be produced in the United
									States (including but not limited to iron, aluminum, steel,
									cement, and other manufactured products).
								</p>
							</div>
						</div>

						<div className="flex gap-8">
							<p>13.13</p>
							<div>
								<p>RECORDS RETENTION REQUIREMENTS.</p>
								<p className="text-justify">
									<span className="inline-block -ml-16">
										The Contractor certifies that it will comply with the record
									</span>{" "}
									retention requirements detailed in 2 CFR § 200.334. The
									Contractor further certifies that Contractor will retain all
									records as required by 2 CFR § 200.334 for a period of three
									years after grantees or subgrantees submit final expenditure
									reports or quarterly or annual financial reports, as
									applicable, and all other pending matters are closed.
								</p>
							</div>
						</div>

						<div className="flex gap-8">
							<p>13.14</p>
							<div>
								<p>CERTIFICATION OF NON-COLLUSION STATEMENT.</p>
								<p className="text-justify">
									<span className="inline-block -ml-16">
										Contractor certifies under penalty of perjury that its
										response
									</span>{" "}
									to this procurement solicitation is in all respects bona fide,
									fair, and made without collusion or fraud with any person,
									joint venture, partnership, corporation or other business or
									legal entity.
								</p>
							</div>
						</div>

						<div className="flex gap-8 mb-10">
							<p>13.15</p>
							<div>
								<p>PROHIBITION ON GIFTS.</p>
								<p className="text-justify">
									<span className="inline-block -ml-16">
										Contractor certifies that it will comply with the
										prohibition
									</span>{" "}
									against giving gifts, gratuities, favors or anything of
									monetary value to an officer, employee or agent of the School
									System. Contractor understands and agrees that violation of
									these standards will result in termination of the Agreement
									and may result in ineligibility for future contract awards. In
									witness whereof, each individual executing this agreement
									acknowledges that he/she/it is authorized to execute this
									agreement on behalf of his/her/its principle and further
									acknowledges the execution of this agreement the day and year
									first written above.
								</p>
							</div>
						</div>

						<div>
							{/* <p className="mb-8 text-justify">
							<span className="ml-12">IN WITNESS WHEREOF,</span>{" "}
							<span className="bg-yellow-500">F33</span> Board of Education
							(hereinbefore called the "Owner") has caused these presents to be
							signed and its corporate seal to be hereunto affixed, attested by
							its Chairperson and Secretary, and{" "}
							<span className="bg-yellow-500">F34</span> (hereinbefore called
							"Contractor") has caused these presents to be signed by its
							President and its Corporate seal to be hereunto affixed, as
							hereinafter attested, all as of the day and year first above
							written.
						</p>

						<div className="flex gap-4 mb-4">
							<div>
								<p>
									______________________________________________________________
								</p>
								<p>
									<span className="bg-yellow-500">F35</span>, Chair, Durham
									Public Schools Board of Education
								</p>
							</div>
							<div>
								<p>_____________________</p>
								<p>
									<span className="bg-yellow-500">F36</span>
								</p>
							</div>
						</div>

						<p>
							This instrument has been pre-audited in the manner required by the
							School Budget and Fiscal Control Act.
						</p> */}
							<div>
								<p className="mb-8 text-justify">
									<span className="ml-12">IN WITNESS WHEREOF,</span>{" "}
									<span className={`${nottoBeHighlighted}`}>
										Durham Public Schools
									</span>{" "}
									Board of Education (hereinbefore called the "Owner") has
									caused these presents to be signed and its corporate seal to
									be hereunto affixed, attested by its Chairperson and
									Secretary, and{" "}
									<span className={`${nottoBeHighlighted}`}>
										{!vendor[0] ? "" : vendor[0]?.company_name}
									</span>{" "}
									(hereinbefore called "Contractor") has caused these presents
									to be signed by its President and its Corporate seal to be
									hereunto affixed, as hereinafter attested, all as of the day
									and year first above written.
								</p>

								<div className="flex gap-4 mb-4">
									<div>
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
										<p>_____________________</p>
										<p>
											<span className={`${nottoBeHighlighted}`}>
												{!formDetails?.chairmanSign
													? ""
													: moment(formDetails?.chairmanSign).format(
															"MMMM D, YYYY"
													  )}
											</span>
										</p>
									</div>
								</div>

								<p className="mb-8">
									This instrument has been pre-audited in the manner required by
									the School Budget and Fiscal Control Act.
								</p>
							</div>
						</div>

						<div className="flex justify-between mt-32 pt-4">
							<p className="text-[8pt]">
								Section C, Owner-Contractor Agreement
							</p>
							<p className="text-[8pt]">C-7</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageSeven;
