const PageSeven = ({ form_fields, content, nottoBeHighlighted, awardee }) => {
	//vendors, project, durham_profile
	const project = content?.data?.project || "";
	// const vendors = content?.data?.vendors || "";
	return (
		<div className="mt-[30rem] pt-20 leading-[1.3]">
			<p className="font-bold mb-4">Exhibit A</p>
			<p className="font-bold mb-4 text-center">
				Sexual Offender Registry Check Certification Form
			</p>
			<p className="font-bold mb-3">
				<em>PLEASE SUBMIT THIS FORM TO YOUR SCHOOL SYSTEM’S REPRESENTATIVE</em>
			</p>
			<p className="mb-4 flex justify-between w-3/4">
				<div clas>
					<span>Project Name:</span>
					<span className="inline-block border-b border-black w-40 ml-0.5">
						{" "}
						{!project ? "" : project?.name}
					</span>{" "}
				</div>
				<div>
					<span> Project Number/Contract:</span>{" "}
					<span className="inline-block w-24 border-b border-black">
						{!project ? "" : project?.number}
					</span>
				</div>
			</p>
			<p className="mb-3">
				Check the appropriate box to indicate the type of check:
			</p>
			<div className="flex justify-between mb-2">
				<div className="flex items-center mb-2">
					<input
						id="default-radio-1"
						type="checkbox"
						value="Initial"
						name="type"
						checked={form_fields.type === "Initial" ? true : false}
						readOnly
						className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-300"
					/>
					<label for="default-radio-1" className="ml-2 text-gray-900">
						Initial
					</label>
				</div>
				<div className="flex items-center mb-2">
					<input
						id="default-radio-1"
						type="checkbox"
						value="Supplimental"
						name="type"
						checked={form_fields.type === "Supplemental" ? true : false}
						readOnly
						className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-300"
					/>
					<label for="default-radio-1" className="ml-2 text-gray-900">
						Supplimental
					</label>
				</div>
				<div className="flex items-center mb-2">
					<input
						id="default-radio-1"
						type="checkbox"
						value="Annual"
						name="type"
						checked={form_fields.type === "Annual" ? true : false}
						className="w-6 h-6 text-gray-600 bg-gray-100 border-gray-300"
					/>
					<label for="default-radio-1" className="ml-2  text-gray-900">
						Annual
					</label>
				</div>

				<p></p>
			</div>
			<p className="text-justify mb-2">
				I,{" "}
				<span className={`${nottoBeHighlighted}`}>
					{!awardee[0]
						? ""
						: awardee[0].first_name + " " + awardee[0].last_name}
				</span>{" "}
				,{" "}
				<span className={`${nottoBeHighlighted}`}>
					{!awardee[0] ? "" : awardee[0].title}
				</span>{" "}
				of{" "}
				<span className={`${nottoBeHighlighted}`}>
					{!awardee[0] ? "" : awardee[0].company_name}
				</span>{" "}
				hereby certify that I have performed all of the required sexual offender
				registry checks required under this Contract for all Contractual
				Personnel (employees, agents, ownership personnel, or contractors ) who
				may be used to deliver goods or provide services under this Contract,
				including the North Carolina Sex Offender and Public Protection
				Registration Program, the North Carolina Sexually Violent Predator
				Registration Program, and the National Sex Offender Registry (
				<span className="text-red-500">
					Note: all of the required registry checks may be completed at no cost
					by accessing the United States Department of Justice Sex Offender
					Public Website at
				</span>{" "}
				<em className="text-blue-500">http://www.nsopw.gov/</em>). I further
				certify that none of the individuals listed below appears on any of the
				above-named registries and that I will not assign any individual to
				deliver goods or perform services under this Contract if said individual
				appears on any of the sex offender registries. I agree to maintain all
				records and documents associated with these registry checks, and that I
				will provide such records and documents to the school system upon
				request. I specifically acknowledge that the school system retains the
				right to audit these records to ensure compliance with this section at
				any time in the school system’s sole discretion. I acknowledge that I am
				required to perform these checks and provide this certification form
				before any work is performed under the Contract (initial check), any
				time additional Contractual Personnel may perform work under the
				Contract (supplemental check), and at each anniversary date of the
				Contract (annual check).
			</p>

			<div className="flex justify-between mb-3">
				<div>
					<p className="font-bold mb-3">Contractual Personnel Names</p>
					<p className=" mb-3">
						<span className="mr-3">1.</span>
						<span>___________________________________</span>
					</p>
					<p className=" mb-3">
						<span className="mr-3">2.</span>
						<span>___________________________________</span>
					</p>
					<p className=" mb-3">
						<span className="mr-3">3.</span>
						<span>___________________________________</span>
					</p>
					<p className=" mb-3">
						<span className="mr-3">4.</span>
						<span>___________________________________</span>
					</p>

					<p className=" mb-3">
						<span className="mr-3">5.</span>
						<span>___________________________________</span>
					</p>
					<p className=" mb-3">
						<span className="mr-3">6.</span>
						<span>___________________________________</span>
					</p>
					<p className=" mb-3">
						<span className="mr-3">7.</span>
						<span>___________________________________</span>
					</p>
					<p className="">
						<span className="mr-3">8.</span>
						<span>___________________________________</span>
					</p>
				</div>
				<div>
					<p className="font-bold mb-3">Job Title</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className=" mb-3">___________________________________</p>
					<p className="">___________________________________</p>
				</div>
				<div></div>
			</div>

			<p className="mb-4">
				I attest that the forgoing information is true and accurate to the best
				of my knowledge.
			</p>

			<p className="mb-8 ">
				<span className={`${nottoBeHighlighted} border-b border-black`}>
					{!awardee[0]
						? ""
						: awardee[0].first_name + " " + awardee[0].last_name}
				</span>
				<span className="pt-1">__________________________</span>
				{"    "}
				<span>(print name)</span>
			</p>
			<p className="mb-6">
				__________________________________________ (signature / date)
			</p>

			{/* <small className="text-[11px]">R2468186</small> */}
			<div className="w-full flex justify-center mt-10">
				<p>7</p>
			</div>
		</div>
	);
};

export default PageSeven;
