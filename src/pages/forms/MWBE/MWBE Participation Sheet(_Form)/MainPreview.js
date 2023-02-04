import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const MainPreview = () => {
	return (
		<div>
			<div className="mb-8">
				<h1 className="font-bold text-sm mb-8 text-center">
					MWBE Participation Sheet (% Form)
				</h1>
				<p>
					Project Name:{" "}
					<span className="inline-block  border-b border-black w-56 "></span>
				</p>
				<p className="mb-4">
					Bidder Name:{" "}
					<span className=" inline-block  border-b border-black w-56"></span>
				</p>

				<p className="mb-4">Description of Project:</p>

				<div className="border border-black p-2 h-16 mb-4">
					<p>
						<span className=""></span>
					</p>
				</div>

				<p>
					Total Contract Amount:{" "}
					<span className=" inline-block  border-b border-black w-56"></span>
				</p>
			</div>

			<div>
				<p className="font-bold mb-4">Participation Percentage Sheet</p>

				<table className="w-full border border-black border-l-0 border-b-0 border-collapse text-center">
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
						<tr className="">
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4 "></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="bg-white border border-black border-collapse py-4"></td>
						</tr>

						<tr className="">
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse font-bold py-4"></td>
							<td className="bg-white border border-black font-bold border-collapse my-4"></td>
						</tr>

						<tr className="">
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse py-4"></td>
							<td className="border border-black border-collapse font-bold py-4"></td>
							<td className="bg-white border border-black font-bold border-collapse py-4"></td>
						</tr>

						<tr>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
						</tr>

						<tr>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
						</tr>

						<tr>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
						</tr>

						<tr>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-collapse h-[19.5px] py-4"></td>
						</tr>

						<tr>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
							<td className="border border-black border-b-2 border-collapse h-[19.5px] py-4"></td>
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

						<tr className="font-bold">
							<td></td>
							<td></td>
							<td></td>
							<th className="border border-black border-collapse">MBE</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
						</tr>

						<tr className="font-bold">
							<td></td>
							<td></td>
							<td></td>
							<th className="border border-black border-collapse">WBE</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
						</tr>

						<tr className="font-bold">
							<td></td>
							<td></td>
							<td></td>
							<th className="border border-black border-collapse">
								TOTAL <br /> M/WBE
							</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
							<th className="border border-black border-collapse">
								<span className=""></span>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MainPreview;
