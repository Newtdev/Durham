import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormInput } from "../../../components";
import { prevStep } from "../reducer";
import { useState } from "react";
import Component, { HandleMultiplication, HandleTotal } from "../Component";

const FormFive = (props) => {
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);

	// A is the percentage ____ while B is basic service compensation

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
								Owner and Design Consultant (more $200,000)
							</h3>
							<p className="text-base text-gray-700">Compensation</p>
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
						<div className="bg-[#2F5461] h-2.5 w-5/6"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<div className="flex flex-col my-4">
								<label className="text-base text-gray-900 mb-1">
									Enter the Basic Services Compensation to the Design Consultant
								</label>
								<div className="relative w-full">
									<input
										value={props.values.serviceCompensation}
										id="serviceCompensation"
										onChange={(e) => {
											if (isNaN(e.target.value)) {
												return;
											} else {
												props.setFieldValue(
													"serviceCompensation",
													e.target.value
												);
											}
										}}
										placeholder="Basic services compensation"
										className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 pl-8 flex items-center "
									/>
									<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
										$
									</small>
								</div>
								{props.errors.serviceCompensation &&
									props.touched.serviceCompensation && (
										<Error message={props.errors.serviceCompensation} />
									)}
							</div>

							<div className="flex flex-col gap-2">
								<h2 className="font-bold pb-2 border-b border-[#9CA3AF]">
									The percentages of payments made to the Design Consultant for
									Basic services when each phase is completed
								</h2>
								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Design Narrative Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.narrativePhase}
													id="narrativePhase"
													onChange={(e) =>
														props?.setFieldValue(
															"narrativePhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.narrativePhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.narrativePhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Schematic Design Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.schematicPhase}
													id="schematicPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"schematicPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.schematicPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.schematicPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Design Development Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.developmentPhase}
													id="developmentPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"developmentPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.developmentPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.developmentPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Construction Contract Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.constructionContractPhase}
													id="constructionContractPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"constructionContractPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.constructionContractPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.constructionContractPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">
											Permitting and Bidding/Negotiation Phase
										</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.negotiationPhase}
													id="negotiationPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"negotiationPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.negotiationPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.negotiationPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Construction Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.constructionPhase}
													id="constructionPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"constructionPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.constructionPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.constructionPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>

								<div className="flex flex-col border p-4 gap-2 px-6 py-2 rounded-lg">
									<div className="flex items-center justify-between">
										<p className=" w-[70%]">Post Construction Services Phase</p>
										<p className=" w-[10%]">
											{edit === true ? (
												<Component
													props={props}
													value={props?.values?.constructionServicesPhase}
													id="constructionServicesPhase"
													onChange={(e) =>
														props?.setFieldValue(
															"constructionServicesPhase",
															e.target.value
														)
													}
												/>
											) : (
												`${props?.values?.constructionServicesPhase}%`
											)}
										</p>
									</div>
									<p className="text-[#693B79] font-bold">
										{`$${HandleTotal(
											props?.values?.constructionServicesPhase,
											props?.values?.serviceCompensation
										)}` || "0.00"}
									</p>
								</div>
								<button
									type="button"
									className="bg-[#693B79] w-fit rounded-md text-white font-bold px-3 py-1"
									onClick={() => setEdit(true)}>
									EDIT PERCENTAGE
								</button>
								<div className="flex mt-4">
									<FormInputContainer name="Enter the maximum reimbursable cost for printing and delivering the documents.">
										<FormInputPlain
											type={"number"}
											value={props?.values?.maxCost}
											onChange={props.handleChange}
											name="maxCost"
											placeholder="cost"
										/>
										{props.errors.maxCost && props.touched.maxCost && (
											<Error message={props.errors.maxCost} />
										)}
									</FormInputContainer>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Back"
							onClick={() => dispatch(prevStep(4))}
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

export default FormFive;
