import moment from "moment";

const PageSix = ({ form_fields, content, nottoBeHighlighted }) => {
	const durham_profile = content?.data?.durham_profile;
	const durham = !durham_profile ? "" : durham_profile;
	return (
		<div className="mt-96 pt-20" style={{ height: "10in" }}>
			<div className="flex mb-2">
				<p>29.</p>
				<div className=" ml-7">
					<p className="text-justify">
						<span className="underline underline-offset-2">
							Authority to Enter Contract
						</span>
						.{" "}
						<span className="ml-1">
							{" "}
							The person(s) executing this Contract on behalf of Provider have
							authority to do so as an official, binding act of Provider.
						</span>
					</p>
				</div>
			</div>
			<div className="my-4">
				<p>
					IN WITNESS WHEREOF, the parties have hereunto set their hands and
					seals the day and year first indicated above.
				</p>
			</div>

			<div className="grid grid-cols-2  w-full">
				<div className=" overflow-x-hidden">
					<div className="mb-6 pb-1">
						<h1 className="font-bold">DURHAM PUBLIC SCHOOLS</h1>
						<h1 className="font-bold">BOARD OF EDUCATION</h1>
					</div>
					<p className={`mb-0 mt-10 mr-8 border-t-2 border-black`}>
						<span className={`${nottoBeHighlighted} mb-0`}>
							{!durham.chairdps_board_of_education
								? ""
								: durham_profile.chairdps_board_of_education.name}
							{",  "}
						</span>
						<span className="">Board Chair </span>
					</p>
				</div>
				<div className=" overflow-x-hidden">
					<div className="mb-[60px]">
						<h1 className="font-bold">PROVIDER</h1>
						<h1></h1>
					</div>
					<p className="mb-0 border-b-2 border-black"></p>
					<span>Authorized Signature</span>
				</div>
			</div>
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
						<p className="mb-0 border-b-2 border-black">
							={" "}
							<span className={`${nottoBeHighlighted}`}>
								{!durham.chief_finance_officer
									? ""
									: durham.chief_finance_officer.name}
							</span>
						</p>
						<span>School System Finance Officer </span>
					</div>
					<div>
						<p className="mb-0 border-b-2 border-black ">
							<span className={`${nottoBeHighlighted}`}>
								{moment(form_fields.signedDate).format(" MMMM Do YYYY ")}
							</span>
						</p>
						<span>Date</span>
					</div>
				</div>
			</div>
			<div className="w-full h-[50vh] flex justify-center">
				<p className="mt-auto">6</p>
			</div>
		</div>
	);
};

export default PageSix;
