import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FieldArray } from "formik";
import React, { Fragment } from "react";
import { FormInputPlain, FormInput } from "../../../components";
import { prevStep } from "../reducer";
import { CloseIcon } from "./FormTwo";

const FormThree = (props) => {
	const dispatch = useDispatch();

	return (
		<div>
			<div
				className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}
				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex items-baseline justify-between mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								Owner and Contractor Agreement Form (more $500,000) ESSER
							</h3>
							<p className="text-base text-gray-700">Statement of Work</p>
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
						<div className="bg-[#2F5461] h-2.5 w-[75%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="What is the Contract Amount?">
								<FormInput
									type={"number"}
									onChange={props.handleChange}
									name="contractAmount"
									placeholder="0.0"
									value={props?.values?.contractAmount}
								/>
								{props.errors.contractAmount &&
									props.touched.contractAmount && (
										<Error message={props.errors.contractAmount} />
									)}
							</FormInputContainer>

							{/* <FormInputContainer name="Enter the allowancesArray that are included in the contract sum, if applicable.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="allowancesArray"
									placeholder="AllowancesArray"
									value={props?.values?.allowancesArray}
								/>
								{props.errors.allowancesArray && props.touched.allowancesArray && (
									<Error message={props.errors.allowancesArray} />
								)}
							</FormInputContainer> */}
							<FieldArray
								name="allowancesArray"
								render={({ remove, push }) => (
									<>
										<div className="mt-5">
											{props?.values?.allowancesArray?.map((unit, index) => (
												<Fragment key={index}>
													<div className="relative">
														<FormInputContainer
															name={`Enter the allowances that are included in the contract sum, if applicable. List (${
																index + 1
															})`}>
															<div
																className="w-10 absolute -right-6 cursor-pointer"
																onClick={() => remove(index)}>
																<CloseIcon />
															</div>
															<FormInputPlain
																type={"text"}
																onChange={props.handleChange}
																name={`allowancesArray[${index}]`}
																value={props?.values?.allowancesArray[index]}
																placeholder="Enter the alternates to this project."
															/>
														</FormInputContainer>
													</div>
												</Fragment>
											))}
											<div className="mt-4">
												<button
													type="button"
													disabled={
														props?.values?.allowancesArray?.length === 5
															? true
															: false
													}
													className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
													onClick={() => push("")}>
													ADD MORE ALLOWANCE
												</button>
											</div>
										</div>
									</>
								)}></FieldArray>
							<div className="flex flex-col gap-3">
								<h2 className="font-bold border-b w-full border-b-gray-400 pb-1">
									Add the required units and enter their pricing
								</h2>

								<FieldArray
									name="units"
									render={({ remove, push }) => (
										<>
											<div className="mt-5">
												{props?.values?.units?.map((unit, index) => (
													<Fragment key={index}>
														<div
															className="w-10 absolute right-0 cursor-pointer"
															onClick={() => remove(index)}>
															<CloseIcon />
														</div>
														<div>
															<FormInputContainer name={`Unit ${index + 1}`}>
																<FormInput
																	type={"number"}
																	onChange={props.handleChange}
																	name={`units[${index}].unit`}
																	value={props?.values?.units[index].unit}
																	placeholder="0.0"
																/>
															</FormInputContainer>
														</div>
													</Fragment>
												))}
												<div className="mt-4">
													<button
														type="button"
														disabled={
															props?.values?.units?.length === 9 ? true : false
														}
														className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
														onClick={() => push({ unit: "" })}>
														ADD MORE UNITS
													</button>
												</div>
											</div>
										</>
									)}></FieldArray>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Back"
							onClick={() => dispatch(prevStep(2))}
						/>
						<DashboardButton
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormThree;
