const PageFourteen = ({ formDetails, vendor, nottoBeHighlighted }) => {
	return (
		<div className="pt-8 pb-4 text-black text-[12pt] h-[11in] ">
			<div>
				{/* Page 14 */}
				<div className="m-[1in]">
					<div>
						<p className="font-bold mb-5">Exhibit C</p>
						<p className="text-center font-bold mb-4">
							Sexual Offender Registry Check Certification Form
						</p>
					</div>

					<div>
						<div className="mb-6">
							<p>Check the appropriate box to indicate the type of check:</p>
							<div>
								<div className="flex gap-4 items-center">
									<input
										type="checkbox"
										name="initial"
										id="initial"
										className="h-2 w-2"
										checked={
											formDetails?.checkType === "Initial" ? true : false
										}
									/>
									<label htmlFor="initial">Initial</label>
									{/* <span className="bg-yellow-500">F18</span> */}
								</div>
								<div className="flex gap-4 items-center my-2">
									<input
										type="checkbox"
										name="Supplemental"
										id="initial"
										checked={
											formDetails?.checkType === "Supplemental" ? true : false
										}
										className="h-2 w-2"
									/>
									<label htmlFor="initial">Supplemental</label>
								</div>
								<div className="flex gap-4 items-center">
									<input
										type="checkbox"
										name="Annual"
										id="initial"
										checked={formDetails?.checkType === "Annual" ? true : false}
										className="h-2 w-2"
									/>
									<label htmlFor="initial">Annual</label>
								</div>
							</div>
						</div>
						<div className=" w-full">
							<p className="mb-4 text-justify">
								I,{" "}
								<span
									className={`${nottoBeHighlighted} border-b border-black`}>{`${
									!vendor[0] ? "" : vendor[0]?.first_name
								} ${vendor[0]?.last_name}`}</span>{" "}
								(insert name),{" "}
								<span
									className={`${nottoBeHighlighted} border-b border-black`}>{`${
									!vendor[0] ? "" : vendor[0]?.title
								}`}</span>{" "}
								(insert title) of{" "}
								<span
									className={`${nottoBeHighlighted} border-b border-black`}>{`${
									!vendor[0] ? "" : vendor[0]?.company_name
								}`}</span>{" "}
								(insert company name) hereby certify that I have performed all
								of the required sexual offender registry checks required under
								this Agreement for all contractual personnel (employees, agents,
								ownership personnel, or contractors ) who may be used to deliver
								goods or provide services under this Agreement, including the
								North Carolina Sex Offender and Public Protection Registration
								Program, the North Carolina Sexually Violent Predator
								Registration Program, and the National Sex Offender Registry. I
								further certify that none of the individuals listed below
								appears on any of the above-named registries and that I will not
								assign any individual to deliver goods or perform services under
								this Agreement if said individual appears on any of the sex
								offender registries. I agree to maintain all records and
								documents associated with these registry checks, and that I will
								provide such records and documents to the school system upon
								request. I specifically acknowledge that the school system
								retains the right to audit these records to ensure compliance
								with this section at any time in the school system’s sole
								discretion. I acknowledge that I am required to perform these
								checks and provide this certification form before any work is
								performed under the Agreement (initial check), any time
								additional contractual personnel may perform work under the
								Agreement (supplemental check), and at each anniversary date of
								the Agreement (annual check).
							</p>
						</div>

						<div className="flex justify-between gap-16 mb-3 w-full overflow-x-hidden ">
							<div>
								<p className="font-bold mb-3">Contractual Personnel Names</p>
								<p className=" mb-2">
									<span className="mr-3 pr-4">1.</span>
									<span>_________________________</span>
								</p>
								<p className=" mb-2">
									<span className="mr-3 pr-4">2.</span>
									<span>_________________________</span>
								</p>
								<p className=" mb-2">
									<span className="mr-3 pr-4">3.</span>
									<span>_________________________</span>
								</p>
								<p className=" mb-2">
									<span className="mr-3 pr-4">4.</span>
									<span>_________________________</span>
								</p>

								<p className=" mb-2">
									<span className="mr-3 pr-4">5.</span>
									<span>_________________________</span>
								</p>
							</div>
							<div>
								<p className="font-bold mb-3">Job Title</p>
								<p className=" mb-2">___________________________________</p>
								<p className=" mb-2">___________________________________</p>
								<p className=" mb-2">___________________________________</p>
								<p className=" mb-2">___________________________________</p>
								<p className=" mb-2">___________________________________</p>
							</div>
						</div>
						<p>(attach additional page(s) if needed)</p>
						<div>
							<p className="my-4">
								I attest that the forgoing information is true and accurate to
								the best of my knowledge.
							</p>
							<div className="flex gap-x-24">
								<div>
									<p className="mb-4 ">
										<span
											className={`${nottoBeHighlighted} inline-block w-32 border-b border-black`}>
											{!vendor[0]
												? ""
												: vendor[0].first_name + " " + vendor[0].last_name}
										</span>
										{/* <span className="pt-1">___________</span> */}
										{"    "}
										<span>(print name)</span>
									</p>
									{/* <p className="mb-6">_______________ (signature / date)</p> */}
									<p className="">
										<span
											className={`${nottoBeHighlighted} inline-block w-32 border-b border-black`}>
											{!vendor[0] ? "" : vendor[0].title}
										</span>
										{"  "}
										<span>(title)</span>
									</p>
								</div>
								<div>
									<p className="mb-4 ">
										<span
											className={`${nottoBeHighlighted} inline-block w-48 border-b border-black`}>
											{!vendor[0]
												? ""
												: vendor[0].first_name + " " + vendor[0].last_name}
										</span>
										{/* <span className="pt-1">___________</span> */}
										{"    "}
										<span>(signature)</span>
									</p>
									{/* <p className="mb-6">_______________ (signature / date)</p> */}
									<p className="">
										<span
											className={`${nottoBeHighlighted} inline-block w-48 border-b border-black`}>
											{!vendor[0] ? "" : vendor[0].title}
										</span>
										{"  "}
										<span>(date)</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="h-[8rem]  text-[12pt] mt-auto flex items-end justify-center">
						14
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageFourteen;
