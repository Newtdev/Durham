import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { prevChoiceStep, stepChoiceDefault } from "./Reducer";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, fields, showDownload } from "../reducer";
import currency from "currency.js";
import moment from "moment";
import DownLoadForm from "../Lundsford/Download";
import {
	project_document_id,
	selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { parseDynamicInput } from "../../../shared-component";

const RenderBidList = ({ vendor_four, nottoBeHighlighted }) => {
	if (!vendor_four) {
		return (
			<div className="text-[14.5px]">
				<p className=" mb-5 ml-14">PRICE QUOTED</p>
				<p className="mb-4 flex">
					UNIT PRICE:{" "}
					<span className={`block w-36 ml-2  border-b border-black`}></span>
				</p>
				<p className="mb-4 flex">
					TOTAL PRICE:{" "}
					<span className={`block w-36 ml-2   border-b border-black`}></span>
				</p>
				<p className="flex">
					SHIPPING:{" "}
					<span className={`block w-36 ml-2   border-b border-black`}> </span>
				</p>
			</div>
		);
	}

	return (
		<div className="text-[14.5px]">
			<p className=" mb-5 ml-14">PRICE QUOTED</p>
			<p className="mb-4 flex">
				UNIT PRICE:{" "}
				<span
					className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
					{currency(vendor_four?.unitPrice).format()}
				</span>
			</p>
			<p className="mb-4 flex">
				TOTAL PRICE:{" "}
				<span
					className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15.5px]`}>
					{currency(vendor_four?.totalPrice).format()}
				</span>
			</p>
			<p className="flex">
				SHIPPING:{" "}
				<span
					className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
					{" "}
					{currency(vendor_four?.shippingPrice).format()}
				</span>
			</p>
		</div>
	);
};
const RenderInfoList = ({ vendor_four, nottoBeHighlighted }) => {
	if (!vendor_four) {
		return (
			<div className="overflow-hidden text-[14.5px]">
				<p className="text-center mb-9">VENDOR NAME/ADDRESS</p>
				<p className="mb-7 bg-red-900 border-black border-b">
					<span className={``}></span>
				</p>
				<p className="mb-8 border-black border-b">
					<span className={` `}></span>
				</p>
				<p className="mb-6 border-black border-b">
					<span className={` `}></span>
				</p>
			</div>
		);
	}

	return (
		<div className="overflow-hidden text-[14.5px]">
			<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
			<p className="mb-4 border-black border-b">
				<span className={`${nottoBeHighlighted} text-[15px]`}>
					{!vendor_four ? "" : vendor_four.company_name}
				</span>
			</p>
			<p className="mb-4 border-black border-b">
				<span className={`${nottoBeHighlighted} text-[15px]`}>
					{!vendor_four ? "" : vendor_four.address},{" "}
				</span>
			</p>
			<p className="mb-4 border-black border-b text-[14.5px]">
				<span className={`${nottoBeHighlighted}  text-[15px]`}>
					{!vendor_four ? "" : vendor_four.city}{" "}
					{!vendor_four ? "" : vendor_four.state}{" "}
					{!vendor_four ? "" : vendor_four.zip_code}
				</span>
			</p>
		</div>
	);
};

const Preview = () => {
	const dispatch = useDispatch();
	const downloadComponent = useRef();
	const [show, setShowModal] = useState(false);
	const [highlighted, setHighlighted] = useState(false);
	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);
	const details = a?.data?.form_fields;
	const vendors = parseDynamicInput(details?.information);
	const description = !details ? "" : details?.services || "";
	const quantity = !details ? "" : details?.input || "";
	const vendor_one = !vendors ? "" : vendors[0];
	const vendor_two = !vendors ? "" : vendors[1];
	const vendor_three = !vendors ? "" : vendors[2];
	const vendor_four = !vendors ? "" : vendors[3];
	const date = details?.selectDate || "";

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
							className="px-12 pt-2 pb-2 text-black text-[14.5px] adverstise"
							ref={downloadComponent}>
							<div>
								<div className="mb-2 font-bold ml-7">
									<p className="text-[12.5px] -mb-1">BD-04</p>
									<p className="text-[12.5px] mt-0">07/92</p>
								</div>

								<div className="mb-12 text-center">
									<h1 className="font-bold text-[20.5px]">
										DURHAM PUBLIC SCHOOLS
									</h1>
									<h1 className="font-bold -mt-2 text-[18.5px]">
										DOCUMENTATION OF PRICES
									</h1>
								</div>

								<div className="mb-4 text-[14.5px] leading-[1.2]">
									<div className="pl-8 pr-10">
										<p className="mb-6 text-[15.5px]">
											This document may be used to document prices as required
											under the purchasing procedures. A minimum of{" "}
											<span className="font-bold">three (3)</span> bids is
											required.
										</p>
										<div className="">
											<p className="mb-4 flex leading-[1.2]">
												DESCRIPTION OF ITEM(S):
												<span
													className={` ${nottoBeHighlighted} ml-1 border-black border-b w-[20rem] text-[15px]`}>
													{description}
												</span>
											</p>
											<p className="mb-6 text-[14.5px] flex">
												QUANTITY:
												<span
													className={`${nottoBeHighlighted}  block w-64 ml-1.5 border-black border-b text-[15px]`}>
													{quantity}
												</span>
											</p>
										</div>
									</div>

									<div className=" mt-12 px-8 text-[14.5px]">
										<div className="grid grid-cols-2 gap-8 mb-6">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b text-[15px]">
													<span
														className={`${nottoBeHighlighted} text-[15px] `}>
														{!vendor_one ? "" : vendor_one.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b text-[14.5px]">
													<span className={`${nottoBeHighlighted} text-[15px]`}>
														{!vendor_one ? "" : vendor_one.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b text-[14.5px]">
													<span className={`${nottoBeHighlighted} text-[15px]`}>
														{!vendor_one ? "" : vendor_one.city},{" "}
														{!vendor_one ? "" : vendor_one.state},{" "}
														{!vendor_one ? "" : vendor_one.zip_code}
													</span>
												</p>
											</div>

											<div>
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex text-[14.5px]">
													UNIT PRICE:{" "}
													<span
														className={`block w-36 ${nottoBeHighlighted} ml-2 border-b border-black text-[15px]`}>
														{currency(vendor_one?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex text-[14.5px]">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{currency(vendor_one?.totalPrice).format()}
													</span>
												</p>
												<p className="flex text-[14.5px]">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{" "}
														{currency(vendor_one?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-8 mb-6 text-[14.5px]">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b">
													<span
														className={`${nottoBeHighlighted} text-[15px] `}>
														{!vendor_two ? "" : vendor_two.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b">
													<span
														className={` ${nottoBeHighlighted} text-[15px] `}>
														{!vendor_two ? "" : vendor_two.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b text-[14.5px]">
													<span
														className={` ${nottoBeHighlighted} text-[15px] `}>
														{!vendor_two ? "" : vendor_two?.city},{" "}
														{!vendor_two ? "" : vendor_two?.state},{" "}
														{!vendor_two ? "" : vendor_two?.zip_code}
													</span>
												</p>
											</div>

											<div className="text-[14.5px]">
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={` block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{currency(vendor_two?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 text-[14.5px] flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{currency(vendor_two?.totalPrice).format()}
													</span>
												</p>
												<p className="flex text-[14.5px]">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{" "}
														{currency(vendor_two?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-8 mb-6 text-[14.5px]">
											<div className="overflow-hidden">
												<p className="text-center mb-5">VENDOR NAME/ADDRESS</p>
												<p className="mb-4 border-black border-b">
													<span className={`${nottoBeHighlighted} text-[15px]`}>
														{!vendor_three ? "" : vendor_three.company_name}
													</span>
												</p>
												<p className="mb-4 border-black border-b">
													<span className={`${nottoBeHighlighted} text-[15px]`}>
														{!vendor_three ? "" : vendor_three.address},{" "}
													</span>
												</p>
												<p className="mb-4 border-black border-b">
													<span
														className={`${nottoBeHighlighted} text-[15px] `}>
														{!vendor_three ? "" : vendor_three.city},{" "}
														{!vendor_three ? "" : vendor_three.state},{" "}
														{!vendor_three ? "" : vendor_three.zip_code}
													</span>
												</p>
											</div>

											<div className="text-[14.5px]">
												<p className=" mb-5 ml-14">PRICE QUOTED</p>
												<p className="mb-4 flex">
													UNIT PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{currency(vendor_three?.unitPrice).format()}
													</span>
												</p>
												<p className="mb-4 flex">
													TOTAL PRICE:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{currency(vendor_three?.totalPrice).format()}
													</span>
												</p>
												<p className="flex">
													SHIPPING:{" "}
													<span
														className={`block w-36 ml-2 ${nottoBeHighlighted}  border-b border-black text-[15px]`}>
														{" "}
														{currency(vendor_three?.shippingPrice).format()}
													</span>
												</p>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-8 mb-2">
											<RenderInfoList
												vendor_four={vendor_four}
												nottoBeHighlighted={nottoBeHighlighted}
											/>
											<RenderBidList
												vendor_four={vendor_four}
												nottoBeHighlighted={nottoBeHighlighted}
											/>
										</div>
									</div>

									<div className="flex gap-8 ml-8 text-[14.5px]">
										<div className="mt-4">
											<p className="font-[900] bg-red-90 w-80 border-b border-black "></p>
											<p className="text-sm">Signature</p>
										</div>
										<div className="">
											<p className="w-36 border-b border-black">
												{!date ? (
													""
												) : (
													<span className={`${nottoBeHighlighted} `}>
														{moment(date).format("MMMM D, YYYY ")}
													</span>
												)}
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
							onClick={() => {
								dispatch(prevChoiceStep(1));
								dispatch(selectFilled(false));
							}}
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
