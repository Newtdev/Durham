import moment from "moment";

const PageEleven = ({ formData, nottoBeHighlighted, awardee, form_fields }) => {
	const durham = !formData?.durham_profile ? "" : formData.durham_profile;
	const vendor = !awardee ? "" : !awardee[0] ? "" : awardee[0];
	return (
		<div style={{ margin: "1in", paddingTop: "1in" }}>
			<div className="flex mb-2  ">
				<div className=" ml-7">
					<p className="text-justify pl-5">
						<span>
							contemporaneously with the execution of this Agreement, have been
							merged into this Agreement and this Agreement fairly and
							comprehensively memorializes the final negotiated agreement
							between the parties. The Agreement shall not be modified or
							amended in any manner except in writing signed by both parties
							hereto.
						</span>
					</p>
				</div>
			</div>
			<div className="mt-8">
				<p className="ml-[40px] mb-8">
					IN WITNESS WHEREOF, the parties to this agreement have hereunder set
					their respective hands on the day and year first above written.
				</p>

				<p className="font-bold mb-3">
					DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION, BY AND THROUGH ITS <br />
					AUTHORIZED AGENT
				</p>

				<p className="font-bold mb-4">
					Durham Public Schools Board of Education
				</p>

				<p className="mb-5">
					<span>By:</span>
					<span className="ml-6">
						__________________________________
						{/* {!durham_profile ? '' : durham_profile.chair_board_education} */}
					</span>
				</p>
				<p className="mb-6">Signature__________________________________</p>

				<p className="mb-5">
					<span className={`${nottoBeHighlighted}`}>
						{vendor?.company_name}
					</span>
				</p>

				<p className="mb-5">
					<span>By:</span>
					<span className="ml-6">____________________(Seal)</span>
					<p className={`${nottoBeHighlighted} ml-12`}>{vendor?.president}</p>
				</p>

				<p className="mb-10">
					<span>Attest:</span>
					<span className={` ml-2`}>____________________(Seal)</span>
					<p className={`${nottoBeHighlighted} ml-12`}>{vendor?.secretary}</p>
				</p>

				<div className="mb-4">
					<p className="mb-0">
						This instrument has been pre-audited in the manner required by the
						School Budget and Fiscal Control Act.
					</p>
					<p className="mt-0">G.S. 115C-441(a).</p>
				</div>

				<div className="">
					<p className="-mb-2">
						<span className={`${nottoBeHighlighted} mr-40`}>
							{!durham?.chief_finance_officer?.name
								? ""
								: durham?.chief_finance_officer?.name}
						</span>

						<span className={`${nottoBeHighlighted}`}>
							{!form_fields?.signedDate
								? ""
								: moment(form_fields?.signedDate).format("MMMM D, YYYY ")}
						</span>
					</p>
					<span className="block ">
						_______________________________________________________
					</span>
					<p className="mt-0">
						<span>Finance Officer</span>
						<span className="ml-[170px]">Date</span>
					</p>
				</div>
				<div className="w-full flex items-start justify-center mt-40 pt-1 courier-font text-[10pt]">
					{/* PAGE ONE ENDS HERE */}
					<span>11</span>
				</div>
			</div>
		</div>
	);
};

export default PageEleven;
