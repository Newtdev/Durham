import { FieldArray } from "formik";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetVendorsQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
// import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../Reducer";
import VendorsInfo from "./VendorsInfo";

const MultiVendors = (props) => {
	const dispatch = useDispatch();

	// console.log(vendorData);
	// const selectVendor = {
	// 	value: props.values.selectVendor,
	// 	onChange: props.handleChange,
	// 	id: "selectVendor",
	// 	name: "Select Vendor",
	// 	onfocus: () => {
	// 		console.log(e);
	// 	},
	// };

	// const removeItem = (vendor) => {
	//   const newForm = [...vendors];
	//   newForm.splice(vendor, 1);
	//   setVendors(newForm);
	// };

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">3 bids</h3>
						<p className="text-base text-gray-700">Vendors Information</p>
					</div>
					<button
						onClick={() => dispatch(closeModal())}
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						data-modal-toggle="small-modal">
						<Close />
					</button>
				</div>
				{/* Progress */}
				<div className="w-full bg-[#89A5AF] h-2.5 my-4">
					<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
				</div>
				<div className="mx-6 mb-3">
					<p className="text-base text-[#693B79]">
						3 vendors are required to generate this form
					</p>
					<div className=" mt-3">
						<FieldArray
							name="information"
							render={({ remove, push }) => (
								<>
									<div className="mt-5">
										{props?.values?.information.map((cur, index) => (
											<Fragment key={index}>
												<VendorsInfo
													data={props}
													remove={remove}
													index={index}
												/>
											</Fragment>
										))}
										<div className="m-4">
											<DashboardButton
												type="button"
												hidden
												color
												name="ADD VENDOR"
												onClick={() =>
													push({
														companyName: "",
														address: "",
														projectState: "",
														projectCity: "",
														projectZipCode: "",
														shippingPrice: "",
														totalPrice: "",
														unitPrice: "",
													})
												}
												width="w-fit"
											/>
										</div>
									</div>
								</>
							)}></FieldArray>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(prevChoiceStep(1))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default MultiVendors;
