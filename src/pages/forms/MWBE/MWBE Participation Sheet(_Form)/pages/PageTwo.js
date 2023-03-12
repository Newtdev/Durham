import { parseDynamicInput } from "../../../../../shared-component";
import { RenderContractor, RenderTotal, slicedFunct } from "../Preview";

const PageTwo = ({ formDetails, nottoBeHighlighted }) => {
	const contractors = parseDynamicInput(formDetails?.contractors);
	if (contractors?.length <= 10) {
		return;
	}
	return (
		<div className="h-[11in] " style={{ padding: "1in 0.5in" }}>
			<div>
				<p className="font-bold mb-4">Participation Percentage Sheet</p>
				<table className="w-full mt-6 border border-black border-l-0 border-b-0 border-collapse text-center">
					<thead>
						<tr className="bg-gray-300">
							<th className="border border-black border-collapse">
								Contractor
							</th>
							<th className="border border-black border-collapse">
								Description of Work
							</th>
							<th className="border border-black border-collapse">MBE</th>
							<th className="border border-black border-collapse">WBE</th>
							<th className="border border-black border-collapse">Amount</th>
							<th className="border border-black border-collapse">
								Percent of <br />
								Contract <br />
								Participation
							</th>
						</tr>
					</thead>
					<tbody>
						<RenderContractor
							formDetails={formDetails}
							data={slicedFunct(contractors, 10, 30)}
							color={nottoBeHighlighted}
						/>

						<tr>
							<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px]"></td>
						</tr>

						<tr>
							<td></td>
							<td></td>
							<td></td>
							<th className="border border-black border-collapse"></th>
							<th className="border border-black border-collapse font-bold">
								Total Amount
							</th>
							<th className="border border-black border-collapse font-bold">
								Total <br /> Percentage
							</th>
						</tr>
						<RenderTotal
							formDetails={formDetails}
							data={slicedFunct(contractors, 10, 30)}
							color={nottoBeHighlighted}
						/>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PageTwo;
