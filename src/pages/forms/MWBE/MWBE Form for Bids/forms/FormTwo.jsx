import { FieldArray } from "formik";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useFetchVendorsQuery } from "../../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import {
	FormSelect,
	FormInputPlain,
	FormInput,
	FormTextArea,
} from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const vendors = useFetchVendorsQuery({ queryValue: "" });
	const [focus, setFocus] = useState(false);
	const [index, setIndex] = useState(null);

	const vendorData = !vendors?.data ? [] : vendors?.currentData?.data?.data;

	const mwbeCategories = [
		{ name: "Black, African American", value: "(B)", id: 2 },
		{ name: "Hispanic", value: " (H)", id: 3 },
		{ name: "Asian American", value: " (A)", id: 4 },
		{ name: "American Indian", value: "(I)", id: 5 },
		{ name: "Female", value: "(F)", id: 6 },
		{ name: "Socially and Economically Disadvantaged", value: "(D)", id: 6 },
	];

	useEffect(() => {
		if (!focus) {
			return;
		} else {
			vendorData?.forEach((cur, i) => {
				if (cur.company_name === props?.values?.mwbeInfo[index].mwbeName) {
					props.values.mwbeInfo[index].companyName = cur.company_name;
				}
			});
		}
	}, [props.values, vendorData, focus, index]);

	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}

				<form
					className="relative w-[600px] bg-white rounded-lg shadow py-4"
					onSubmit={props.handleSubmit}>
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								MWBE Form for Bids
							</h3>
							<p className="text-base text-gray-700">Section II</p>
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
						<div className="bg-[#2F5461] h-2.5 w-full"></div>
					</div>

					{/* form */}
					<div className="flex flex-col mx-6 mb-12">
						<div className="">
							<FormInputContainer name="What is the total value of contracts with minority-owned businesses?">
								<FormInput
									Symbol={"$"}
									type={"text"}
									onChange={props.handleChange}
									name="totalValue"
									placeholder={"0.0"}
									value={props?.values?.totalValue}
								/>
								{props.errors.totalValue && props.touched.totalValue && (
									<Error message={props.errors.totalValue} />
								)}
							</FormInputContainer>
						</div>
						<div className="pt-4">
							<FormInputContainer name="What is the minimum percentage of the total contract sum that will be allocated to MWBE?">
								<FormInput
									Symbol={"%"}
									type={"text"}
									onChange={props.handleChange}
									name="minPercentage"
									placeholder={"100%"}
									value={props?.values?.minPercentage}
								/>
								{props.errors.minPercentage && props.touched.minPercentage && (
									<Error message={props.errors.minPercentage} />
								)}
							</FormInputContainer>
						</div>
						<div className="flex flex-col gap-3">
							<FieldArray
								name="mwbeInfo"
								render={({ remove, push }) => (
									<>
										<div className="flex flex-col gap-3 mt-5">
											{props?.values?.mwbeInfo?.map((mwbeInfo, index) => (
												<Fragment key={index}>
													<div className="flex flex-col w-full">
														<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-3 rounded-t-lg">
															<h2>MWBE Information {index + 1}</h2>
															<button
																onClick={() => remove(index)}
																type="button"
																className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
																data-modal-toggle="small-modal">
																<Close />
															</button>
														</div>
														<div className="flex flex-col px-3 gap-3 py-3 border border-[#9CA3AF]">
															<FormSelect
																value={`mwbeInfo${index}.mwbeName`}
																name="Select the MWBE"
																id={`mwbeInfo[${index}].mwbeName`}
																error={props?.errors?.mwbeName}
																touched={props.touched.mwbeName}
																onChange={(e) => {
																	if (!e.target) {
																		setFocus(false);
																		props?.setFieldValue(
																			`mwbeInfo[${index}].mwbeName`,
																			""
																		);
																	}
																	setIndex(index);

																	props?.setFieldValue(
																		`mwbeInfo[${index}].mwbeName`,
																		e.target.value
																	);
																	setFocus(true);
																}}>
																<option value="">Select the MWBE</option>
																{vendorData?.map((mwbeName, index) => {
																	return (
																		<option
																			key={index}
																			value={mwbeName?.company_name}>
																			{mwbeName?.company_name}
																		</option>
																	);
																})}
															</FormSelect>

															<FormInputContainer name="Company Name">
																<FormInputPlain
																	type={"text"}
																	onChange={props.handleChange}
																	name={`mwbeInfo[${index}].companyName`}
																	placeholder={"Company Name"}
																	value={
																		props?.values?.mwbeInfo[index].companyName
																	}
																/>
																{props.errors.companyName &&
																	props.touched.companyName && (
																		<Error message={props.errors.companyName} />
																	)}
															</FormInputContainer>

															<div className="flex flex-col gap-3 p-2">
																<h2 className="font-bold">
																	Enter the above MWBE company details?
																</h2>
																<div className="w-full h-[1px] bg-[#D1D5DB]"></div>

																<FormInputContainer name="Company Number">
																	<FormInputPlain
																		type={"phone"}
																		onChange={props.handleChange}
																		name={`mwbeInfo[${index}].companyNumber`}
																		placeholder={"(919) 809 789"}
																		value={
																			props?.values?.mwbeInfo[index]
																				.companyNumber
																		}
																	/>
																	{props.errors.companyNumber &&
																		props.touched.companyNumber && (
																			<Error
																				message={props.errors.companyNumber}
																			/>
																		)}
																</FormInputContainer>

																<FormSelect
																	name="Select the MWBE"
																	id={`mwbeInfo[${index}].mwbeCategory`}
																	value={
																		props?.values?.mwbeInfo[index].mwbeCategory
																	}
																	error={props.errors.mwbeCategory}
																	touched={props.touched.mwbeCategory}
																	onChange={props.handleChange}>
																	{!props?.values?.mwbeInfo[index]
																		.mwbeCategory ? (
																		<option value="">Select the MWBE</option>
																	) : (
																		<option value="">
																			{
																				props?.values?.mwbeInfo[index]
																					.mwbeCategory
																			}
																		</option>
																	)}
																	{mwbeCategories?.map(
																		(mwbeCategory, index) => {
																			return (
																				<option
																					key={index}
																					value={mwbeCategory.value}>
																					{mwbeCategory.name}
																				</option>
																			);
																		}
																	)}
																</FormSelect>

																<div>
																	<FormTextArea
																		onChange={props.handleChange}
																		name="Work Description"
																		id={`mwbeInfo[${index}].workDescription`}
																		value={
																			props?.values?.mwbeInfo[index]
																				.workDescription
																		}
																		placeholder={"Edit Work Description	"}
																	/>
																	{props.errors.workDescription &&
																		props.touched.workDescription && (
																			<Error
																				message={props.errors.workDescription}
																			/>
																		)}
																</div>

																<FormInputContainer name="Contract Amount">
																	<FormInput
																		type={"number"}
																		onChange={props.handleChange}
																		name={`mwbeInfo[${index}].contractAmount`}
																		placeholder={"0.0"}
																		value={
																			props?.values?.mwbeInfo[index]
																				.contractAmount
																		}
																	/>
																	{props.errors.contractAmount &&
																		props.touched.contractAmount && (
																			<Error
																				message={props.errors.contractAmount}
																			/>
																		)}
																</FormInputContainer>
															</div>
														</div>
													</div>
												</Fragment>
											))}
											<div className="mt-4">
												<button
													type="button"
													className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
													disabled={
														props?.values?.mwbeInfo?.length === 9 ? true : false
													}
													onClick={() =>
														push({
															mwbeName: "",
															companyName: "",
															companyNumber: "",
															mwbeCategory: "",
															workDescription: "",
															contractAmount: "",
														})
													}>
													ADD A MWBE
												</button>
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
							name="Back"
							onClick={() => dispatch(prevStep(1))}
						/>
						<DashboardButton
							hidden
							name="NEXT"
							type="submit"
							width="w-[77px]"
							loading={props?.isLoading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormTwo;
