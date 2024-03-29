import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";
import { prevStep } from "../reducer";
import { FieldArray } from "formik";
import { Fragment } from "react";

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

const FormTwo = (props) => {
	const dispatch = useDispatch();

	const projectDate = {
		...props,
		value: props.values.projectDate,
		onChange: props.handleChange,
		name: "projectDate",
		error: props.errors.projectDate,
		touched: props.touched.projectDate,
		placeholder: "Select date",
		//    prevPage
	};

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
								Owner and Contractor Agreement Form (more $500,000)
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
						<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="Who prepares the work or project?">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="project"
									value={props?.values?.project}
									placeholder="Who prepares the work or project?"
								/>
								{props.errors.project && props.touched.project && (
									<Error message={props.errors.project} />
								)}
							</FormInputContainer>

							<FormInputContainer name="When is the work or project prepared?">
								<SelectDate {...projectDate} />
								{props.errors.projectDate && props.touched.projectDate && (
									<Error message={props.errors.projectDate} />
								)}
							</FormInputContainer>

							<FormInputContainer name="Enter the agenda to this project.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="projectAgenda"
									value={props?.values?.projectAgenda}
									placeholder="Enter the agenda to this project."
								/>
								{props.errors.projectAgenda && props.touched.projectAgenda && (
									<Error message={props.errors.projectAgenda} />
								)}
							</FormInputContainer>

							<FormInputContainer
								name={`Enter the alternates to this project.`}>
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name={`projectAlternates`}
									value={props?.values?.projectAlternates}
									placeholder="Enter the alternates to this project."
								/>
							</FormInputContainer>

							<h2 className="font-bold border-b w-full border-b-gray-400 pb-1">
								Enter the modifications to the Project’s plans and
								specifications including any noted value engineering items, if
								applicable.
							</h2>

							<FieldArray
								name="modificationArray"
								render={({ remove, push }) => (
									<>
										<div className="mt-5">
											{props?.values?.modificationArray?.map((unit, index) => (
												<div key={index}>
													<div className="relative">
														<FormInputContainer name="Modifications">
															<div
																className="w-10 absolute top-1 -right-5 cursor-pointer"
																onClick={() => remove(index)}>
																<CloseIcon />
															</div>
															<FormInputPlain
																type={"text"}
																onChange={props.handleChange}
																name={`modificationArray[${index}].modification`}
																placeholder="Modifications"
																value={
																	props?.values?.modificationArray[index]
																		.modification
																}
															/>
														</FormInputContainer>

														<FormInputContainer name="Total Amount for Modifications">
															<FormInputPlain
																type={"text"}
																onChange={props.handleChange}
																name={`modificationArray[${index}].modificationAmount`}
																value={
																	props?.values?.modificationArray[index]
																		.modificationAmount
																}
																placeholder="Total amount for modification"
															/>
															{props.errors.modificationAmount &&
																props.touched.modificationAmount && (
																	<Error
																		message={props.errors.modificationAmount}
																	/>
																)}
														</FormInputContainer>
													</div>
												</div>
											))}
											<div className="mt-4">
												<button
													type="button"
													className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
													disabled={
														props?.values?.modificationArray?.length === 5
															? true
															: false
													}
													onClick={() =>
														push({ modification: "", modificationAmount: "" })
													}>
													ADD MORE PROJECT ALTERNATIVES
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
							name="back"
							onClick={() => dispatch(prevStep(1))}
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

export default FormTwo;
