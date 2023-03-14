import moment from "moment";
import { DPSPageWrapper } from "./Page5";

const PageTen = ({ durham, formDetails, vendor, nottoBeHighlighted }) => {
	return (
		<DPSPageWrapper num={10}>
			<div>
				<div className="mt-12">
					<p className="mb-8 text-justify">
						In witness whereof, each individual executing this agreement
						acknowledges that he/she/it is authorized to execute this agreement
						on behalf of his/her/its principle and further acknowledges the
						execution of this agreement the day and year first written above.
					</p>

					<div className="grid grid-cols-4 gap-4 mb-8">
						<div className="col-span-3">
							<p className="border-b border-black">
								<span className={`${nottoBeHighlighted}`}>
									{durham?.director_of_construction_and_sustainability?.name}
								</span>
								, Director of Construction and Sustainability
							</p>
						</div>
						<div>
							<p className=" border-b border-black">
								<span className={`${nottoBeHighlighted} inline-block`}>
									{!formDetails?.directorSignDate
										? ""
										: moment(formDetails?.directorSignDate).format(
												"MMMM D, YYYY"
										  )}
								</span>
							</p>
							<p>Date</p>
						</div>
					</div>

					<p className="mb-8 text-justify">
						This instrument has been pre-audited in the manner required by the
						School Budget and Fiscal Control Act.
					</p>

					<div className="grid grid-cols-4 gap-4 mb-6">
						<div className="col-span-3">
							<p className="border-b border-black">
								<span className={`${nottoBeHighlighted}`}>
									{durham?.chief_finance_officer?.name}
								</span>
								, Chief Finance Officer, Durham Public Schools
							</p>
						</div>
						<div>
							<p className="border-b border-black">
								<span className={`${nottoBeHighlighted} inline-block`}>
									{!formDetails?.officerSignDate
										? ""
										: moment(formDetails?.officerSignDate).format(
												"MMMM D, YYYY"
										  )}
								</span>
							</p>
							<p>Date</p>
						</div>
					</div>

					<div className="border-4 border-gray-300 p-2 mb-10 w-1/2">
						<div className="flex gap-12">
							<p>Endorsement:</p>
							<div>
								<p>
									<span className={`${nottoBeHighlighted}`}>
										{" "}
										{
											durham?.construction_capital_planning_project_manager
												?.name
										}
									</span>
								</p>
								<p>Project Manager</p>
								<p>Durham Public Schools</p>
								<p>Construction & Capital Planning</p>
							</div>
						</div>
					</div>

					<p className="mb-8 ">
						<span className={`${nottoBeHighlighted}`}>
							{!vendor[0] ? "" : vendor[0]?.company_name}
						</span>
					</p>
					<p className="mb-6">
						By: ________________________________________________________
					</p>
					<p className="mb-6">
						Name/Title: _______________________________________________________
					</p>
					<p>STATE OF NORTH CAROLINA</p>
					<p>COUNTY OF DURHAM</p>

					<p className="my-4 text-justify leading-[1.3]">
						<span className="ml-12">I,</span> a Notary Public in and for the
						aforesaid County and State, do hereby certify that
						____________________ personally appeared before me this day and
						acknowledged that he/she is _____________ of
						_________________________., a _________________ (state of
						incorporation) corporation, duly authorized to do business in the
						state of North Carolina, and that by authority duly given and as the
						act of the corporation, the foregoing instrument was signed in its
						name by its ________, sealed with its corporate seal and attested by
						___________________ as its Corporate Secretary.
					</p>

					<p className="mb-8 text-justify">
						Witness my hand and notarial seal this{" "}
						<span className={`${nottoBeHighlighted}`}>
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format("Do")}
						</span>{" "}
						day of{" "}
						<span className={`${nottoBeHighlighted}`}>
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format("MMMM,")}
						</span>
						<span className={`${nottoBeHighlighted}`}>
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format(" YYYY")}
						</span>
						.
					</p>

					<div className="mb-8 flex gap-8">
						<div className="flex gap-12">
							<div>
								<p>__________________________________________</p>
								<p className="text-center">Notary Public</p>
							</div>
							<p>(SEAL/STAMP)</p>
						</div>
					</div>
					<p>My commission expires:___________</p>
				</div>
			</div>
		</DPSPageWrapper>
	);
};

export default PageTen;
