import currency from "currency.js";
import "react-datepicker/dist/react-datepicker.css";
import { parseDynamicInput } from "../../../../../shared-component";
import { PageWrapper } from "./Page1";

const PageTwo = ({ formDetails, vendors, nottoBeHighlighted }) => {
	const allowances = parseDynamicInput(formDetails?.allowancesArray);
	const modifications = parseDynamicInput(formDetails?.modificationArray);

	const List = ({ data }) => {
		return (
			<ul>
				{data?.map((d, i) => {
					return (
						<li key={i} className={`${nottoBeHighlighted} list-decimal`}>
							{d}
						</li>
					);
				})}
			</ul>
		);
	};
	const ListObject = ({ data }) => {
		return (
			<ul>
				{data?.map((d, i) => {
					return (
						<li key={i} className={`${nottoBeHighlighted} list-decimal`}>
							{d?.modification} {currency(d?.modificationAmount).format()}
						</li>
					);
				})}
			</ul>
		);
	};
	return (
		<PageWrapper num={2}>
			<div>
				<div className="ml-[48px] mb-4 ">
					<p className="mb-4 ml-[22px]">
						<span
							className={`${nottoBeHighlighted} text-justify border-b border-black`}>
							{formDetails?.projectAgenda}
						</span>
					</p>
					<p>
						A listing of the plans and specifications included in the Contract
						Documents is attached as Exhibit A.
					</p>
				</div>
				<div>
					<div className="flex gap-8 mb-4">
						<p>2.2</p>
						<div>
							<p className="text-justify mb-2">
								The Parties agree that the Project shall include the following
								alternates:
							</p>
							<p className="ml-[22px]">
								<span className={`${nottoBeHighlighted}`}>
									{formDetails?.projectAlternates}
								</span>
							</p>
						</div>
					</div>
					<div className="flex gap-8 mb-4">
						<p>2.3</p>
						<div>
							<p className="text-justify mb-4">
								The Parties agree to the following modifications to the
								Project's plans and specifications, including the noted value
								engineering items:
							</p>
							<p className="ml-[22px]">
								<span className={`${nottoBeHighlighted}`}>
									{/* {pra} */}

									{!modifications || modifications.length < 1 ? (
										"N/A"
									) : (
										<ListObject data={modifications} />
									)}
								</span>
							</p>
						</div>
					</div>
					<div className="flex gap-8 mb-4">
						<p>2.4</p>
						<div>
							<p className="text-justify mb-4">
								The Parties agree that the following allowances are included in
								the Contract Sum in Section 5.1 below:
							</p>
							<p className="ml-[22px]">
								{!allowances || allowances.length < 1 ? (
									"N/A"
								) : (
									<List data={allowances} />
								)}
							</p>
						</div>
					</div>
					<div className="flex gap-8 mb-4">
						<p>2.5</p>
						<p className="text-justify">
							The Contractor shall provide and pay for all materials, tools,
							equipment, labor and professional and non-professional services,
							and shall perform all other acts and supply all other things
							necessary, to fully and properly perform and complete the Work, as
							required by the Contract Documents.
						</p>
					</div>
					<div className="flex gap-8 mb-4">
						<p>2.6</p>
						<p className="text-justify">
							The Contractor shall further provide and pay for all related
							facilities described in any of the Contract Documents, including
							all work expressly specified therein and such additional work as
							may be reasonably inferred therefrom, saving and excepting only
							such items of work as are specifically stated in the Contract
							Documents not to be the obligation of the Contractor. The totality
							of the obligations imposed upon the contractor by this Article and
							by all other provisions of the Contract Documents, as well as the
							structures to be built and the labor to be performed, is herein
							referred to as the "Work".
						</p>
					</div>
				</div>

				{/* ARTICLE 3 */}
				<div className="mb-4">
					<div className="text-center mb-4">
						<p className="mb-4">Article 3</p>
						<p className="underline">DESIGN CONSULTANT</p>
					</div>

					<div>
						<div className="flex gap-8 mb-4">
							<p>3.1</p>
							<p className="text-justify">
								The Contractor (as defined in the General Conditions) shall be{" "}
								<span className={`${nottoBeHighlighted}`}>
									{!vendors[0] ? "" : vendors[0]?.company_name}
								</span>{" "}
								whose address is{" "}
								<span className={`${nottoBeHighlighted}`}>{`${
									!vendors[0] ? "" : vendors[0]?.street
								}, ${!vendors[0] ? "" : vendors[0]?.city}, ${
									!vendors[0] ? "" : vendors[0]?.state
								}, ${!vendors[0] ? "" : vendors[0]?.zip_code}`}</span>
								, however, that the Owner may, without liability to the
								Contractor, unilaterally amend this Article from time to time by
								designating a different person or organization to act as its
								Design Consultant and so advising the Contractor in writing, at
								which time the person or organization so designated shall be the
								Design Consultant for purposes of this Contract.
							</p>
						</div>
					</div>
				</div>

				{/* ARTICLE 4 */}
			</div>

			{/* <div className="flex justify-between items-end text-[8pt] mt-6 h-10  absolute bottom-0 w-full">
						<p className="text-[8pt]">Section C, Owner-Contractor Agreement</p>
						<p>C-2</p>
					</div> */}
		</PageWrapper>
		// 	</div>
		// </div>
	);
};

export default PageTwo;
