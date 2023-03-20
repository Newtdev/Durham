import moment from "moment";

const PageSix = ({ form_fields, content, nottoBeHighlighted }) => {
	const durham_profile = content?.durham_profile;
	const durham = !durham_profile ? "" : durham_profile;
	return (
		<div className="mt-96 pt-16" style={{ height: "10in" }}>
			<div>
				{/* PAGE FIVE ENDS HERE */}

				{/* PAGE SIX ENDS HERE */}
				<div className="my-3">
					<div className="mb-3">
						<h1>ATTEST:</h1>
					</div>
					<p className="mb-0 font-bold text-black">
						__________________________________________
					</p>
					<span>Superintendent</span>
				</div>

				<p>
					This instrument has been pre-audited in the manner required by the
					School Budget and Fiscal Control Act
				</p>

				<div className="grid grid-cols-2 mt-4 ">
					<div>
						<p className="mb-0 border-b border-black">
							{" "}
							<span className={`${nottoBeHighlighted}`}>
								{!durham?.chief_finance_officer
									? ""
									: durham?.chief_finance_officer?.name}
							</span>
						</p>
						<span>School System Finance Officer </span>
					</div>
					<div>
						<p className="mb-0 border-b border-black ">
							<span className={`inline-block w-full ${nottoBeHighlighted}`}>
								\{" "}
								{!form_fields?.signedDocument
									? ""
									: moment(form_fields?.signedDocument).format(
											" MMMM D, YYYY "
									  )}
							</span>
						</p>
						<span>Date</span>
					</div>
				</div>
			</div>
			<div className="w-full h-[73vh] flex justify-center Times-font">
				<p className="mt-auto">6</p>
			</div>
		</div>
	);
};

export default PageSix;
