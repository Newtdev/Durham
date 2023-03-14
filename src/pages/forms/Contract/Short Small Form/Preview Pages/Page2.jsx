import { SmallShortWrapper } from "./Page10";

const PageTwo = () => {
	return (
		// <div
		// 	className=" text-black  ml-[0.43in] mt-[1in] mr-[0.69in] pb-0 pt-36 text-[14.5px] flex flex-col justify-between "
		// 	style={{ height: "10.4in" }}>
		<SmallShortWrapper num={2}>
			<div>
				{/* Page 2 */}
				<div className="">
					<p className="text-[14.5px] text-center mb-12">TABLE OF CONTENTS</p>
					<div className="flex justify-between">
						<div>
							<p className="mb-3">Article 1</p>
							<p className="mb-3">Article 2</p>
							<p className="mb-3">Article 3</p>
							<p className="mb-3">Article 3</p>
							<p className="mb-3">Article 5</p>
							<p className="mb-3">Article 6</p>
							<p className="mb-3">Exhibit A</p>
							<p className="mb-3">Exhibit B</p>
							<p className="mb-3">Exhibit C</p>
							<p className="mb-3">Exhibit D</p>
							<p>Exhibit E</p>
						</div>

						<div>
							<p className="mb-3">Terms & Conditions</p>
							<p className="mb-3">Basic Services</p>
							<p className="mb-3">Additional Services</p>
							<p className="mb-3">Termination of Agreement</p>
							<p className="mb-3">
								Ownership of Documents/ Confidential Information
							</p>
							<p className="mb-3">Additional Requirements</p>
							<p className="mb-3">Scope of Work & Authorized Services</p>
							<p className="mb-3">Not Applicable</p>
							<p className="mb-3">Not Applicable</p>
							<p className="mb-3">Not Applicable</p>
							<p>Not Applicable</p>
						</div>

						<div>
							<p className="mb-3">Page 03</p>
							<p className="mb-3">Page 04</p>
							<p className="mb-3">Page 05</p>
							<p className="mb-3">Page 05</p>
							<p className="mb-3">Page 06</p>
							<p className="mb-3">Page 07</p>
							<p className="mb-3">Page A1</p>
							<p className="mb-3">Page NA</p>
							<p className="mb-3">Page NA</p>
							<p className="mb-3">Page NA</p>
							<p className="mb-3">Page NA</p>
						</div>
					</div>
				</div>
			</div>
			<div className=" h-[31.4rem] flex flex-col justify-end mt-14">
				<p className="font-extrabold text-black mb-3 text-center">
					<b>SHORT FORM DESIGN CONSULTANT AGREEMENT</b>
				</p>
			</div>
		</SmallShortWrapper>
	);
};

export default PageTwo;
