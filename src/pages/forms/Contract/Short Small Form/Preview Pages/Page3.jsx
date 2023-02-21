import { configureStore } from "@reduxjs/toolkit";
import moment from "moment";

const PageThree = (props) => {
	const year = moment(props?.form_fields?.agreementDate).format("YYYY");
	console.log(year);

	var digit_map = [
		"Zero",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
	];
	var tens_map = [
		"Zero",
		"Ten",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	];

	var yearInWords = "";
	var digits = year.toString().split("");
	digits.forEach(function (digit, index) {
		if (index < 2) {
			yearInWords += tens_map[digit] + " ";
		} else if (index === 2) {
			yearInWords += digit_map[digit] + " Hundred ";
		} else {
			yearInWords += digit_map[digit] + " ";
		}
	});
	const correctDate =
		yearInWords.split(" ")[0] + " " + yearInWords.split(" ")[4];

	// console.log(yearInWords + "Thousand");

	return (
		<div
			className="text-black py-[0.7in] mt-[1in] pl-[0.7in] pr-[0.6in] leading-[1.1]"
			style={{ height: "11in" }}>
			<div>
				{/* Page 3 */}
				<div>
					<div className="">
						<p className="font-bold mb-4">AGREEMENT</p>
						<p className="mb-4">
							made this{" "}
							<span
								className={`${props?.nottoBeHighlighted} inline-block w-14 border-b border-black`}>
								{moment(props?.form_fields?.agreementDate).format("Do")}
							</span>{" "}
							day of{" "}
							<span
								className={`${props?.nottoBeHighlighted} inline-block w-14 border-b border-black`}>
								{moment(props?.form_fields?.agreementDate).format("MMMM")}
							</span>{" "}
							in the year of Two Thousand{" "}
							<span
								className={`${props?.nottoBeHighlighted} inline-block w-36 border-b border-black`}>
								{correctDate}
							</span>
						</p>
						<p className="mb-4">
							Between the Owner:{" "}
							<strong>Durham Public Schools Board of Education</strong>
						</p>
						<p className="mb-4">
							and the Design Consultant:{" "}
							<span
								className={`${props?.nottoBeHighlighted} inline-block w-56 border-b border-black`}>
								{props?.awardee[0]?.company_name}
							</span>
						</p>
						<p className="mb-2">
							Federal Tax ID # or Social Security # __________________________
						</p>
						<p className="flex ml-24 mb-4">
							<span>Address</span>
							<div className="ml-3">
								<span
									className={`${props?.nottoBeHighlighted} inline-block  border-b border-black w-60`}>
									{props?.awardee[0]?.street}
								</span>
								<br />
								<span
									className={`${props?.nottoBeHighlighted} inline-block border-b border-black w-60 my-1`}>
									{props?.awardee[0]?.city}, {props?.awardee[0]?.state},{" "}
									{props?.awardee[0]?.zip_code}
								</span>
							</div>
						</p>
					</div>

					{/* Article 1 */}
					<div className="">
						<div className="text-center font-bold mb-4">
							<p className="mb-2">ARTICLE 1</p>
							<p>TERMS AND CONDITION</p>
						</div>

						<div>
							<div className="flex gap-12 mb-2">
								<p>1.1</p>
								<p className="text-justify">
									<span className="mr-3">WORK:</span> The Design Consultant
									shall perform the services outlined on the attached Exhibit A.
									Exhibit A shall contain the scope of work and the authorized
									services.
								</p>
							</div>

							<div className="flex gap-12 mb-2">
								<p>1.2</p>
								<p className="text-justify">
									<span className="mr-3">TIME:</span> The work outlined in
									Exhibit A shall be completed in accordance with the schedule
									included in Exhibit A. In the event that circumstances beyond
									the Design Consultant’s control force a delay that prohibits
									or may prohibit the Design Consultant’s compliance with the
									schedule, the Design Consultant shall inform the Owner
									immediately.
								</p>
							</div>

							<div className="flex gap-12 mb-2">
								<p>1.3</p>
								<p className="text-justify">
									<span className="mr-3">COMPENSATION:</span> The Design
									Consultant shall be compensated in accordance with the fee
									schedule included in Exhibit A to this Agreement and this
									Paragraph. Exhibit A shall specify the hourly rate schedule
									for any services that may be utilized under this Agreement.
									The Design Consultant shall not be compensated for any work or
									services performed without specific authorization.
								</p>
							</div>

							<div className="flex gap-12 mb-2">
								<p>1.4</p>
								<p>BILLING AND PAYMENT:</p>
							</div>

							<div className="flex gap-[35px] mb-3">
								<p>1.4.1</p>
								<div>
									<p className="mb-1 text-justify">
										Billing for the work shall be directed to the Owner at the
										following address:
									</p>
									<div className="ml-6">
										<p>Durham Public Schools</p>
										<p>511 Cleveland Street</p>
										<p> Durham, NC 27702</p>
									</div>
								</div>
							</div>

							<div className="flex gap-[35px] mb-2">
								<p>1.4.2</p>
								<div>
									<p className="mb-1 text-justify">
										Payment shall be made within forty-five (45) days of receipt
										of an acceptable invoice from the Design Consultant.
									</p>
								</div>
							</div>

							<div className="flex gap-12 mb-2">
								<p>1.5</p>
								<div>
									<p className="mb-1">INSURANCE:</p>
									<p className="mb-1 text-justify">
										The Design Consultant shall purchase and maintain insurance
										for protection from claims under the workers compensation
										acts; claims resulting from negligent acts, errors or
										omissions for damages because of bodily injury, including
										personal injury, sickness, disease or death of any of the
										Design Consultant's employees or any other person; claims
										for damages because of injury to or destruction of personal
										property including loss of use resulting therefrom; and
										claims arising out of the performance of this Agreement and
										caused by negligent acts, errors or omissions for which the
										Design Consultant is legally liable. Minimum limits of
										coverage shall be:
									</p>

									<div className=" mb-2 grid grid-cols-2 mt-3">
										<div>
											<p className="mb-1 ml-4">Insurance Description</p>
											<p className="mb-1">
												<span className="mr-4">a.</span> Worker's Compensation
											</p>
											<p className="mb-10">
												<span className="mr-4">b.</span> Employer's Liability
											</p>
											<div className="flex gap-[20px]">
												<p>c.</p>
												<div>
													<p>Commercial General Liability</p>
													<p>Bodily Injury and Property Damage</p>
													<p>Personal & Advertising Injury</p>
												</div>
											</div>
										</div>

										<div>
											<p className="mb-1 ml-20">Minimum Required Coverage</p>
											<p className="mb-1">Statutory</p>

											<div className="mb-1">
												<p>$100,000 Each Accident</p>
												<p>$100,000 Disease – Each Employee</p>
												<p>$300,000 Disease – Policy Limit</p>
											</div>

											<div className="mb-1 mt-3">
												<p>Combined Single Limit</p>
												<p>$1,000,000 Each Occurrence</p>
												<p>$1,000,000 Each Occurrence</p>
												<p>$1,000,000 General Aggregate</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="-mt-4 flex flex-col justify-end">
					<div>
						<p className="text-[10px]">DCA (short form - $100K) 12-15-2020</p>
					</div>
					<div className="w-1  ml-auto">
						<p>3</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageThree;
