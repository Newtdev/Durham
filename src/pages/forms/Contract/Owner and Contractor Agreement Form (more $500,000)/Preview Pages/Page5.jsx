import moment from "moment";
import { PageWrapper } from "./Page1";

const PageFive = ({ formDetails, vendor, nottoBeHighlighted, durham }) => {
	return (
		// <div className="pt-2 text-black text-[11pt] leading-[1.3] h-[11in] ">
		// 	<div>
		// 		{/* Page 5 */}
		// 		<div className="m-[1in]  flex flex-col justify-between">
		<PageWrapper num={5}>
			<div>
				<div className="border-4 border-gray-300 p-2 mb-4 w-1/2">
					<div className="flex gap-12">
						<p>Endorsement:</p>
						<div>
							<p>
								<span className={`${nottoBeHighlighted}`}>
									{
										durham
											?.executive_director_durham_public_schools_building_services
											?.name
									}
								</span>
							</p>
							<p>Executive Director</p>
							<p>
								Durham Public Schools{" "}
								<span className="ml-1">Building services</span>
							</p>
						</div>
					</div>
				</div>
				<div>
					<p className="mb-4">
						This contract was approved by the Board on the{" "}
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.boardApprovalDate ? "w-4" : ""
							}`}>
							{!formDetails?.boardApprovalDate
								? ""
								: moment(formDetails?.boardApprovalDate).format("Do")}
						</span>{" "}
						day of{" "}
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.boardApprovalDate ? "w-10" : ""
							}`}>
							{" "}
							{!formDetails?.boardApprovalDate
								? ""
								: moment(formDetails?.boardApprovalDate).format("MMMM, ")}
						</span>{" "}
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.boardApprovalDate ? "w-10" : ""
							}`}>
							{" "}
							{!formDetails?.boardApprovalDate
								? ""
								: moment(formDetails?.boardApprovalDate).format("YYYY")}
						</span>
					</p>
					<p className="mb-8">
						<span className={`${nottoBeHighlighted} `}>
							{!vendor[0] ? "" : vendor[0]?.company_name}
						</span>
					</p>
					<p className="mb-3">
						By:{" "}
						<span className="ml-16">
							________________________________________________________
						</span>
					</p>
					<p className="mb-4">
						Name/Title:{" "}
						<span className="ml-2">
							_______________________________________________________
						</span>
					</p>
					<p>STATE OF NORTH CAROLINA</p>
					<p>COUNTY OF DURHAM</p>

					<p className="my-4 text-justify">
						<span className="ml-7">I,</span> a Notary Public in and for the
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
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.notarySealDate ? "w-4" : ""
							}`}>
							{" "}
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format("Do")}
						</span>{" "}
						day of{" "}
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.notarySealDate ? "w-10" : ""
							}`}>
							{" "}
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format("MMMM ")}
						</span>
						, 20
						<span
							className={`${nottoBeHighlighted} border-b border-black inline-block ${
								!formDetails?.notarySealDate ? "w-10" : ""
							}`}>
							{" "}
							{!formDetails?.notarySealDate
								? ""
								: moment(formDetails?.notarySealDate).format("YY")}
						</span>
						.
					</p>
					<div className="mb-8 flex gap-8">
						<div>
							<p>__________________________________________</p>
							<p>Notary Public</p>
						</div>
						<p>(SEAL/STAMP)</p>
					</div>
					<p>My commission expires:___________</p>
				</div>
			</div>
		</PageWrapper>
	);
};

export default PageFive;
