import moment from "moment";

const PageEleven = ({ formData, nottoBeHighlighted, awardee, form_fields }) => {
	const durham = formData?.durham_profile;
	const vendor = !awardee[0] ? "" : awardee[0];
	console.log(durham);
	return (
		<div>
			<div className="flex mb-2 mt-96 pt-10">
				<div className=" ml-7">
					<p className="text-justify">
						<span>
							and the DPS BOE. The parties agree that any statements,
							representations, discussions, or documentation, (including the
							attached exhibits) whether made prior to or contemporaneously with
							the execution of this Agreement, have been merged into this
							Agreement and this Agreement fairly and comprehensively
							memorializes the final negotiated agreement between the parties.
							The Agreement shall not be modified or amended in any manner
							except in writing signed by both parties hereto.
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
					<span className={`${nottoBeHighlighted} ml-2`}>
						____________________(Seal)
					</span>
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
							{!durham.chief_finance_officer
								? ""
								: durham.chief_finance_officer?.name}
						</span>

						<span className={`${nottoBeHighlighted}`}>
							{moment(form_fields.signedDate).format("MMMM D, YYYY ")}
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
			</div>
			<div className="w-full flex items-center justify-center mt-8">
				{/* PAGE ONE ENDS HERE */}
				<p>11</p>
			</div>
		</div>
	);
};

export default PageEleven;
