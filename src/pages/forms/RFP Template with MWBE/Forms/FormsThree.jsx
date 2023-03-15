import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import RichTextComp from "../../../../Private/PrivateRoute";
import {
	setResult,
	htmlencode,
	handleResultWithArray,
} from "../../../../shared-component";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { OverviewTextarea } from "../../../Dashboard/Overview-dashboard/OverviewComponents";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { FormInputPlain, FormInput } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { nextStep, prevStep } from "../reducer";
import { FieldArray } from "formik";
import { Fragment } from "react";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import he from "he";

export const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="w-5 h-5">
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const FormThree = (props) => {
	const [text, setText] = React.useState();
	const dispatch = useDispatch();
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

	const prototypeNotUtilized = {
		value:
			"Digital submissions through the Interactive Purchasing System (IPS) is preferred. Submission type, online or hard copy, will not affect proposal scoring. If submitting a hard copy, please submit 1 copy.",
		onChange: props.handleChange,
		id: "prototypeNotUtilized ",
		error: props.errors.prototypeNotUtilized,
		touched: props.touched.prototypeNotUtilized,
	};

	const proposalScope = {
		value: props.values.proposalScope,
		onChange: props.handleChange,
		id: "proposalScope",
		error: props.errors.proposalScope,
		touched: props.touched.proposalScope,
		placeholder: "Proposal Scope",
	};

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray(values),
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

	useEffect(() => {
		if (!a?.data) {
			return;
		} else if (!a?.data?.form_fields || a?.data?.form_fields.length < 1) {
			return;
		} else if (!a?.data?.form_fields?.proposalScope) {
			// 	he?.decode("a");
		}
		let scope;
		if (a?.data?.form_fields?.proposalScope) {
			scope = he?.decode(a?.data?.form_fields?.proposalScope);
		}
		setText(scope);
		// }
	}, [a?.data]);

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
						HandleSubmit({
							...props?.values,
							proposalScope: htmlencode(text) || "",
						});
					}}>
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								RFP Template with MWBE
							</h3>
							<p className="text-base text-gray-700">Section III</p>
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
						<div className="flex flex-col">
							<label className="text-base text-gray-900 mb-1">
								Modify the information below if the prototype is not utilized
							</label>
							<OverviewTextarea {...prototypeNotUtilized} />
						</div>

						<FormInputContainer name="Enter the offer's validity period if it is other than 120 days from the date of proposal opening.">
							<FormInputPlain
								type={"text"}
								onChange={props.handleChange}
								name="validityPeriod"
								placeholder={"validityPeriod"}
								value={props.values.validityPeriod}
							/>
							{props.errors.validityPeriod && props.touched.validityPeriod && (
								<Error message={props.errors.validityPeriod} />
							)}
						</FormInputContainer>

						{/* <FormInputContainer name="What items should the Vendor include in their RFP responses? Enter the items in the order that the vendor has to set up.">
              <FormInputPlain
                type={"text"}
                onChange={props.handleChange}
                name="items"
                placeholder={"items"}
              />
              {props.errors.items && props.touched.items && (
                <Error message={props.errors.items} />
              )}
            </FormInputContainer> */}

						<FieldArray
							name="items"
							render={({ remove, push }) => (
								<>
									<div>
										{props?.values?.items?.map((item, index) => (
											<Fragment key={index}>
												<FormInputContainer>
													<div
														className="w-10 ml-auto mt-1 cursor-pointer"
														onClick={() => remove(index)}>
														<CloseIcon />
													</div>
													<FormInputPlain
														type={"text"}
														onChange={props.handleChange}
														name={`items[${index}].item`}
														id={`items[${index}].item`}
														value={props?.values?.items[index].item}
														placeholder={`Item ${index + 1}`}
													/>
												</FormInputContainer>
											</Fragment>
										))}
										<div className="mt-4">
											<h2 className="font-bold border-b w-full border-b-gray-400 pb-1 mb-2">
												What items should the Vendor include in their RFP
												responses? Enter the items in the order that the vendor
												has to set up.
											</h2>
											<button
												type="button"
												className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
												onClick={() => push({ item: "" })}
												disabled={
													props?.values?.items?.length > 4 ? true : false
												}>
												ADD ITEMS
											</button>
										</div>
									</div>
								</>
							)}></FieldArray>

						<div className="flex flex-col gap-3">
							<h2 className="text-sm text-gray-600 font-semibold">
								Does Attachment C(Pricing Form) needs to be included in
								Proposal?
							</h2>
							<div className="flex gap-3 items-center">
								<input
									id="default-radio-1"
									type="radio"
									value="Yes"
									name="attachment"
									onChange={props.handleChange}
									checked={props.values.attachment === "Yes" ? true : false}
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="text-base text-gray-900">
									Yes
								</label>
							</div>
							<div className="flex gap-3 items-center">
								<input
									id="default-radio-2"
									type="radio"
									value="No"
									name="attachment"
									checked={props.values.attachment === "No" ? true : false}
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
									onChange={props.handleChange}
								/>
								<label
									for="default-radio-2"
									className="text-base text-gray-900">
									No
								</label>
							</div>
						</div>

						<div className="flex flex-col">
							<label className="text-base text-gray-900 mb-1">
								Enter the Proposal Scope
							</label>
							<div className="h-36">
								<RichTextComp text={text} setText={(val) => setText(val)} />
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
							loading={isLoading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormThree;
