import moment from "moment";

const PageOne = ({ formData, form_fields, nottoBeHighlighted, awardee }) => {
	const vendor = !awardee ? "" : !awardee[0] ? "" : awardee[0];
	return (
		<div style={{ margin: "1in", pageBreakAfter: "always" }}>
			<div className="text-center mb-4 font-bold">
				<h1>DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION</h1>
				<h1>TECHNOLOGY SERVICES AGREEMENT</h1>
			</div>
			<p className="text-justify mb-4">
				<span className="ml-10">THIS TECHNOLOGY SERVICES AGREEMENT</span> (the
				"Agreement") effective
				<span className="">
					{" "}
					{moment(form_fields?.creationDate).format("MMMM D, YYYY ")}
				</span>
				{/* <span className={`${nottoBeHighlighted}`}>
					{" "}
					{moment(form_fields.creationDate).format("MMMM D, YYYY ")}{" "}
				</span> */}
				is made and entered into by and between the Durham Public Schools Board
				of Education at 511 Cleveland St., Durham, NC 27701 (“DPS BOE” or “DPS”
				or “the Board”) and{" "}
				<span className={`${nottoBeHighlighted}`}>{vendor?.company_name}</span>{" "}
				at{" "}
				<span className={`${nottoBeHighlighted}`}>
					{vendor?.street +
						", " +
						vendor?.city +
						", " +
						vendor?.state +
						", " +
						vendor?.zip_code}
				</span>
				. (“Contractor”).
			</p>
			<div>
				<p className="mb-4 text-center font-bold">RECITALS</p>
				<p className="mb-4">
					<span className="font-bold ml-10">WHEREAS</span>, DPS BOE is a local
					board of education working to provide public schools within its local
					school administrative unit as directed by law.
				</p>
				<p className="mb-4">
					<span className="font-bold ml-10">WHEREAS</span>, Contractor is in the
					business of computer technology management and operation services, and
					other related services, including computer network specialties.
				</p>

				<p className="mb-4">
					<span className="font-bold ml-10">WHEREAS</span>, Contractor desires
					to provide its services to DPS and DPS desires to obtain such
					services.
				</p>

				<p className="mb-4">
					<span className="font-bold ml-10">NOW, THEREFORE</span>, in
					consideration of the mutual covenants and agreements contained herein,
					and intending to be mutually bound, the parties hereby agree as
					follows:
				</p>
			</div>
			<p className="mb-4 text-center font-bold">AGREEMENT</p>
			<div className="flex ml-4 ">
				<div className=" ml-7">
					<p>
						<span className="underline underline-offset-2">
							TERMS OF SERVICE
						</span>
						.
					</p>
					<div className="mb-2 flex mt-1">
						<span>a.</span>
						<span className="ml-2 text-justify">
							Contractor shall, in performing services under this Agreement,
							exercise the highest degree of care and perform such services in
							an expert fashion. The services to be performed are described in
							the Statement of Work attached hereto as Exhibit 1 (“Statement of
							Work”) and incorporated herein by reference.
						</span>
					</div>
					<div className="mb-2 flex  ">
						<span>b.</span>
						<span className="ml-2 text-justify">
							Contractor shall maintain such supplies, equipment and employees
							as are necessary to perform of the services provided for herein.
							Contractor warrants its services and warrants that the contracted
							for services will perform substantially in conformance with the
							agreed upon DPS specifications. In the event any non-conformance
							cannot be corrected within seven days, DPS shall be entitled to a
							refund for services and expenses.
						</span>
					</div>
					<div className="mb-2 flex">
						<span>c.</span>
						<span className="ml-3 text-justify">
							The parties may agree to amend or modify the Statement of Work if
							documented and signed by the parties.
						</span>
					</div>
					<div className="flex mb-2">
						<span>d.</span>
						<span className="ml-3 text-justify ">
							Contractor has obtained and shall maintain insurance to
							sufficiently protect Contractor and DPS BOE from any and all
							potential claims or damages, including but not limited to Worker’s
							Compensation, Comprehensive General and Contractual Liability
							Insurance in no event less than the amount of
						</span>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-center mt-2 courier-font text-[10pt]">
				{/* PAGE ONE ENDS HERE */}
				<p>1</p>
			</div>
		</div>
	);
};

export default PageOne;
