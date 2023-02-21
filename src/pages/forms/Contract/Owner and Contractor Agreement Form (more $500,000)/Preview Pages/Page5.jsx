import moment from "moment";

const PageFive = ({ formDetails, vendor, nottoBeHighlighted }) => {
	return (
		<div className="pt-8 pb-4 text-black text-[11pt] leading-[1.3] h-[11in] ">
			<div>
				{/* Page 5 */}
				<div className="m-[1in]">
					<p className="mb-4">
						This contract was approved by the Board on the{" "}
						<span className={`${nottoBeHighlighted}`}>
							{moment(formDetails?.boardApprovalDate).format("MMMM D, YYYY")}
						</span>
					</p>
					<p className="mb-8">
						<span className={`${nottoBeHighlighted}`}>
							{!vendor[0] ? "" : vendor[0]?.company_name}
						</span>
					</p>
					<p className="mb-8">
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
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("Do")}
						</span>{" "}
						day of{" "}
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("MMMM, ")}
						</span>
						, 20
						<span className={`${nottoBeHighlighted}`}>
							{" "}
							{moment(formDetails?.notarySealDate).format("YY")}
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

					<div className="flex justify-between items-end h-[40vh] ">
						<p className="text-[10px]">Section C, Owner-Contractor Agreement</p>
						<p>C-5</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageFive;
