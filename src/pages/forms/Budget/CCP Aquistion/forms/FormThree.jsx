import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal, fields } from "../../../reducer";
import { nextStep, prevStep } from "../reducer";
import { FormSelect, FormInputPlain } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { FieldArray } from "formik";
import { Fragment, useMemo } from "react";
import currency from "currency.js";
import { values } from "pdf-lib";
import { project_document_id } from "../../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../../features/services/api";
import { handleResultWithArray } from "../../../../../shared-component";
import { toast } from "react-toastify";

export const CalculateTotal = (a, b) => {
	if (!a && !b) {
		return "";
	}

	return (Number(a) * Number(b)).toFixed(2);
};
export const subTotal = (a) => {
	if (!a) {
		return;
	}
	let quantitySum = 0;
	for (const object of a) {
		quantitySum += Number(object.quantity * object.unitPrice);
	}
	return quantitySum;
};

export const GrandTotals = (a, b, c, d) => {
	return useMemo(() => {
		let subTotals = subTotal(a);

		if (d === "NO") {
			return currency(subTotals + Number(b)).format();
		}
		return currency(c + subTotals + Number(b)).format();
	}, [a, b, c, d]);
};

const TaxPercentage = (a, b) => {
	return useMemo(() => {
		if (!a) {
			return;
		}
		let subTotals = subTotal(a);
		let percentage = 4.75 / 100;
		if (!b) {
			return subTotals * percentage;
		} else {
			let newPercentage = Number(b) / 100;
			return subTotals * newPercentage;
		}
	}, [a, b]);
};

const FormThree = (props) => {
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const dispatch = useDispatch();

	const grandTotal = GrandTotals(
		props?.values?.items,
		props?.values?.ccpshippingCost,
		TaxPercentage(props?.values?.items),
		props?.values?.ccpsalesTax
	);

	const subtotal = subTotal(props?.values?.items);

	// const CalculatePercentage = (a, b) => {
	// 	return useMemo(() => {
	// 		return ((Number(a) / Number(b)) * 100).toFixed(2);
	// 	}, [a, b]);
	// };

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray({
				ccpsubtotal: subtotal,
				ccpgrandTotal: grandTotal,
				...values,
			}).form_fields,
			dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
		});

		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(4));
			}
		}
	};

	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}

				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={(e) => {
						e.preventDefault();
						// console.log({
						// 	...props.values,
						// 	subtotal: subtotal,
						// 	grandTotal: grandTotal,
						// });
						HandleSubmit(props.values);
					}}>
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								CCP Requisition - MODIFIED 4-22-22FM
							</h3>
							<p className="text-base text-gray-700">Order information</p>
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
						<div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
					</div>

					<div className="mx-6 mb-12 flex flex-col gap-2">
						<FieldArray
							name="items"
							render={({ remove, push }) => (
								<>
									<div className="mt-5">
										{props?.values?.items.map((unit, index) => (
											<Fragment key={index}>
												<div className="flex flex-col w-full">
													<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
														<h2>Item {index + 1}</h2>
														<button
															onClick={() => remove(index)}
															type="button"
															className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
															data-modal-toggle="small-modal">
															<Close />
														</button>
													</div>
													<div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
														<FormInputContainer name="Stock number">
															<FormInputPlain
																type={"text"}
																onChange={props.handleChange}
																name={`items[${index}].stockNumber`}
																value={props?.values?.items[index].stockNumber}
																placeholder={"Stock Number"}
															/>
															{props.errors.stockNumber &&
																props.touched.stockNumber && (
																	<Error message={props.errors.stockNumber} />
																)}
														</FormInputContainer>
														<FormInputContainer name="Description">
															<FormInputPlain
																type={"text"}
																onChange={props.handleChange}
																name={`items[${index}].description`}
																value={props?.values?.items[index].description}
																placeholder={"Enter Description"}
															/>
															{props.errors.description &&
																props.touched.description && (
																	<Error message={props.errors.description} />
																)}
														</FormInputContainer>
														<FormInputContainer name="Quantity of Units Being Ordered">
															<div>
																<FormInputPlain
																	type={"text"}
																	onChange={(e) => {
																		if (isNaN(e.target.value)) {
																			return "";
																		} else {
																			// return e.target.value
																			props.setFieldValue(
																				`items[${index}].quantity`,
																				e.target.value
																			);
																		}
																	}}
																	name={`items[${index}].quantity`}
																	value={props?.values?.items[index].quantity}
																	placeholder={
																		"Quantity of Units Being Ordered"
																	}
																/>
																{props.errors.quantity &&
																	props.touched.quantity && (
																		<Error message={props.errors.quantity} />
																	)}
															</div>
														</FormInputContainer>
														<div className="flex justify-center items-center gap-2 w-full">
															<div className="flex w-full">
																<FormInputPlain
																	type={"text"}
																	onChange={props.handleChange}
																	name={`items[${index}].unit`}
																	value={props?.values?.items[index].unit}
																	placeholder={"Unit of Measure"}
																/>
																{props.errors.unit && props.touched.unit && (
																	<Error message={props.errors.unit} />
																)}
															</div>
															<div className="flex w-full">
																<FormInputPlain
																	type={"text"}
																	onChange={(e) => {
																		if (isNaN(e.target.value)) {
																			return "";
																		} else {
																			// return e.target.value
																			props.setFieldValue(
																				`items[${index}].unitPrice`,
																				e.target.value
																			);
																		}
																	}}
																	name={`items[${index}].unitPrice`}
																	placeholder={"Each Unit Price"}
																	value={props?.values?.items[index].unitPrice}
																/>
																{props.errors.unitPrice &&
																	props.touched.unitPrice && (
																		<Error message={props.errors.unitPrice} />
																	)}
															</div>
														</div>
														<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
															<h2 className="text-sm font-medium">
																Total Cost
															</h2>

															<span className="text-sm font-bold">
																{currency(
																	CalculateTotal(
																		props.values.items[index].quantity,
																		props.values.items[index].unitPrice
																	)
																).format()}
															</span>
														</div>
													</div>
												</div>
											</Fragment>
										))}
										<div className="mt-4">
											<button
												type="button"
												disabled={
													props?.values?.items.length === 10 ? true : false
												}
												className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
												onClick={() =>
													push({
														stockNumber: "",
														description: "",
														quantity: "",
														unit: "",
														unitPrice: "",
													})
												}>
												ADD MORE ITEMS
											</button>
										</div>
									</div>
								</>
							)}></FieldArray>

						<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
							<h2 className="text-sm font-medium">Sub Total</h2>
							<span className="text-sm font-bold">
								{currency(subTotal(props?.values?.items)).format()}
							</span>
						</div>
						<FormInputContainer name="Enter the Shipping cost, if applicable.">
							<FormInputPlain
								type={"text"}
								onChange={(e) => {
									if (isNaN(e.target.value)) {
										return "";
									} else {
										// return e.target.value
										props.setFieldValue("ccpshippingCost", e.target.value);
									}
								}}
								name="ccpshippingCost"
								placeholder={"$ 0.00"}
								value={props?.values?.ccpshippingCost}
							/>
							{props.errors.ccpshippingCost &&
								props.touched.ccpshippingCost && (
									<Error message={props.errors.ccpshippingCost} />
								)}
						</FormInputContainer>
						{/* {console.log(taxPercentage)} */}
						<FormInputContainer name="Is this order subject to sales tax?">
							<FormSelect
								value={props.values.ccsalesTax}
								// name="Select salesTax"
								id="salesTax"
								error={props.errors.ccpsalesTax}
								touched={props.touched.ccpsalesTax}
								onChange={props.handleChange}>
								<option value="YES">Yes</option>
								<option value="NO">No</option>
							</FormSelect>
						</FormInputContainer>
						{props?.values?.ccpsalesTax === "YES" ? (
							<FormInputContainer name="">
								<div className="flex justify-center items-center">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="ccptax"
										placeholder={"@ 4.75%"}
										value={props?.ccptax}
									/>
									{props.errors.ccpsalesTax && props.touched.ccpsalesTax && (
										<Error message={props.errors.ccpsalesTax} />
									)}
									<div className="w-12 text-2xl text-gray-500 text-center">
										%
									</div>
								</div>
							</FormInputContainer>
						) : null}
						<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
							<h2 className="text-sm font-medium">Grand Total</h2>
							<span className="text-sm font-bold">
								{/* {currency(props?.values?.items).format()} */}
								{GrandTotals(
									props?.values?.items,
									props?.values?.ccpshippingCost,
									TaxPercentage(props?.values?.items, props?.values?.ccptax),
									props?.values?.ccpsalesTax
								)}
							</span>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Previous"
							onClick={() => dispatch(prevStep(2))}
						/>
						<DashboardButton
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
							loading={isLoading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormThree;
