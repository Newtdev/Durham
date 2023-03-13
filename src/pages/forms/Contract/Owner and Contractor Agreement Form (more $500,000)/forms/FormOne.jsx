import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";

const FormOne = (props) => {
	const dispatch = useDispatch();

	const agreementDate = {
		...props,
		value: props.values.agreementDate,
		onChange: props.handleChange,
		name: "agreementDate",
		error: props.errors.agreementDate,
		touched: props.touched.agreementDate,
		placeholder: "Select date",
		//    prevPage
	};

	const substantialCompletionDate = {
		...props,
		value: props.values.substantialCompletionDate,
		onChange: props.handleChange,
		name: "substantialCompletionDate",
		error: props.errors.substantialCompletionDate,
		touched: props.touched.substantialCompletionDate,
		placeholder: "Substantial Completion Date",
		//    prevPage
	};

	const finalCompletionDate = {
		...props,
		value: props.values.finalCompletionDate,
		onChange: props.handleChange,
		name: "finalCompletionDate",
		error: props.errors.finalCompletionDate,
		touched: props.touched.finalCompletionDate,
		placeholder: "Final Completion Date",
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
							<p className="text-base text-gray-700">
								Agreement and Project details
							</p>
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
						<div className="bg-[#2F5461] h-2.5 w-1/2"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="On what date will the Agreement be made official?">
								<SelectDate {...agreementDate} />
								{props.errors.agreementDate && props.touched.agreementDate && (
									<Error message={props.errors.agreementDate} />
								)}
							</FormInputContainer>

							<FormInputContainer name="What precisely is the new construction in this project?">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="construction"
									value={props?.values?.construction}
									placeholder="Hereinafter referred to as the 'Project' or 'Work'"
								/>
								{props.errors.construction && props.touched.construction && (
									<Error message={props.errors.construction} />
								)}
							</FormInputContainer>

							<FormInputContainer name="Enter the date of completion for the following.">
								<div className="flex gap-3">
									<div className="w-full">
										<SelectDate {...substantialCompletionDate} />
										{props.errors.substantialCompletionDate &&
											props.touched.substantialCompletionDate && (
												<Error
													message={props.errors.substantialCompletionDate}
												/>
											)}
									</div>
									<div className="w-full">
										<SelectDate {...finalCompletionDate} />
										{props.errors.finalCompletionDate &&
											props.touched.finalCompletionDate && (
												<Error message={props.errors.finalCompletionDate} />
											)}
									</div>
								</div>
							</FormInputContainer>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Cancel"
							onClick={() => dispatch(closeModal())}
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

export default FormOne;
