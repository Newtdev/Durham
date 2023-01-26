import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { prevChoiceStep, stepChoiceDefault } from "./Reducer";
import { useDispatch, useSelector } from "react-redux";
import { closeDownload, closeModal, fields, showDownload } from "../reducer";
import currency from "currency.js";
import moment from "moment";
import DownLoadForm from "../Lundsford/Download";

const Preview = () => {
	const details = useSelector(fields);
	const dispatch = useDispatch();
	const downloadComponent = useRef();
	const [show, setShowModal] = useState(false);
	const [highlighted, setHighlighted] = useState(false);

	const description = !details ? "" : details?.services || "";
	const quantity = !details ? "" : details?.input || "";
	const vendor_one = !details ? "" : details?.information[0];
	const vendor_two = !details ? "" : details?.information[1];
	const vendor_three = !details ? "" : details?.information[2];
	const vendor_four = !details ? "" : details?.information[3];
	const date = !details ? "" : details.selectDate;

	const props = {
		component: downloadComponent,
		name: "3 bids",
		show: show ? "block" : "hidden",
		stepDefault: stepChoiceDefault,
	};

	const nottoBeHighlighted = !highlighted
		? "bg-yellow-300 font-bold"
		: "bg-white";

	return (
		<div>
			<DownLoadForm {...props} />
			<div>
				{/* Modal content */}
				<div
					className={`${
						!show ? "block" : "hidden"
					} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
					<div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
						<div className="ml-6">
							<h3 className="text-lg font-bold text-gray-900">3 bids</h3>
							<p className="text-base text-gray-700">Preview Document</p>
						</div>
						<button
							onClick={() => dispatch(closeModal())}
							type="button"
							className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
							data-modal-toggle="small-modal">
							<Close />
						</button>
					</div>

					<div className="overflow-y-scroll mx-auto mt-4 mb-10 w-[95%]  h-[380px]">
						<div
							className="px-12 pt-8 pb-4 text-black text-[12px] adverstise"
							ref={downloadComponent}>
							<div>
								<div className="mb-6 px-16">
									<p className="text-sm mb-0">BD-04</p>
									<p className="text-sm mt-0">07/92</p>
								</div>

								<div className="mb-6 text-center">
									<h1 className="font-bold text-xl">DURHAM PUBLIC SCHOOLS</h1>
									<h1 className="font-bold text-lg">DOCUMENTATION OF PRICES</h1>
								</div>

								<div className="mb-4">
									<div className="pl-8 pr-16">
										<p className="mb-6">
											This document may be used to document prices as required
											under the purchasing procedures. A minimum of{" "}
											<span className="font-bold">three (3)</span> bids is
											required.
										</p>
										<div className="">
											<p className="mb-4 flex">
												DESCRIPTION OF ITEM(S):
												<span
													className={` ${nottoBeHighlighted} ml-1 border-black border-b-2 w-[20rem]`}>
													{description}
												</span>
											</p>
											<p className="mb-6 flex">
												QUANTITY:
												<span
													className={`${nottoBeHighlighted}  block w-64 ml-1.5 border-black border-b-2`}>
													{quantity}
												</span>
											</p>
										</div>
									</div>

									<div className=" px-8">
										<div className="grid grid-cols-2 gap-6 mb-6">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted}  `}>
														{!vendor_one ? "" : vendor_one.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_one ? "" : vendor_one.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_one ? "" : vendor_one.city},{" "}
														{!vendor_one ? "" : vendor_one.state},{" "}
														{!vendor_one ? "" : vendor_one.zip_code}
													</span>
												</p>
											</div>

											<div>
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={`block w-36 ${nottoBeHighlighted} ml-2 border-b-2 border-black`}>
														{currency(vendor_one?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_one?.totalPrice).format()}
													</span>
												</p>
												<p className="flex">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{" "}
														{currency(vendor_one?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-6 mb-6">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted}  `}>
														{!vendor_two ? "" : vendor_two.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={` ${nottoBeHighlighted}  `}>
														{!vendor_two ? "" : vendor_two.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={` ${nottoBeHighlighted}  `}>
														{!vendor_two ? "" : vendor_two?.city},{" "}
														{!vendor_two ? "" : vendor_two?.state},{" "}
														{!vendor_two ? "" : vendor_two?.zip_code}
													</span>
												</p>
											</div>

											<div>
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={` block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_two?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_two?.totalPrice).format()}
													</span>
												</p>
												<p className="flex">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{" "}
														{currency(vendor_two?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-6 mb-6">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted}`}>
														{!vendor_three ? "" : vendor_three.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_three ? "" : vendor_three.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_three ? "" : vendor_three.city},{" "}
														{!vendor_three ? "" : vendor_three.state},{" "}
														{!vendor_three ? "" : vendor_three.zip_code}
													</span>
												</p>
											</div>

											<div>
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_three?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_three?.totalPrice).format()}
													</span>
												</p>
												<p className="flex">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{" "}
														{currency(vendor_three?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-6 mb-2">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted}`}>
														{!vendor_four ? "" : vendor_four.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_four ? "" : vendor_four.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b-2">
													<span className={`${nottoBeHighlighted} `}>
														{!vendor_four ? "" : vendor_four.city},{" "}
														{!vendor_four ? "" : vendor_four.state},{" "}
														{!vendor_four ? "" : vendor_four.zip_code}
													</span>
												</p>
											</div>

											<div>
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_four?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{currency(vendor_four?.totalPrice).format()}
													</span>
												</p>
												<p className="flex">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b-2 border-black`}>
														{" "}
														{currency(vendor_four?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>
									</div>

									<div className="flex gap-8 ml-8">
										<div className="mt-4">
											<p className="font-[900] bg-red-90 w-80 border-b-2 border-black "></p>
											<p className="text-sm">Signature</p>
										</div>
										<div className="">
											<p className="w-36 border-b-2 border-black">
												<span className={`${nottoBeHighlighted} `}>
													{moment(date).format("MMMM D, YYYY ")}
												</span>
											</p>
											<p className="text-sm">Date</p>
										</div>
									</div>
								</div>

								<div className="flex gap-8 items-center justify-center">
									<p className=" font-bold uppercase">original - purchasing</p>
									<p className=" font-bold uppercase">
										copy - school/department
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 pr-6 pb-4">
						<ButtonWhiteBG
							width="w-[171px]"
							name="Edit document"
							onClick={() => dispatch(prevChoiceStep(1))}
						/>
						<DashboardButton
							hidden
							name="CREATE DOCUMENT"
							type="submit"
							width="w-[198px]"
							onClick={() => {
								setShowModal(true);
								setHighlighted(true);
								dispatch(showDownload());
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
