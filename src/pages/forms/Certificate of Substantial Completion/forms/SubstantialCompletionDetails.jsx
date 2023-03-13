import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import SelectDate, { FormInput, FormInputPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prev } from "../reducer";

const SubstantialCompletionDetails = (props) => {
	const dispatch = useDispatch();
	const areasCompleted = {
		value: props.values.areasCompleted,
		onChange: props.handleChange,
		error: props.errors.areasCompleted,
		touched: props.touched.areasCompleted,
		name: "areasCompleted",
		type: "text",
		placeholder: "Content must not be more than 30 words",
	};

	const completionDate = {
		...props,
		value: props.values.completionDate,
		onChange: props.handleChange,
		error: props.errors.completionDate,
		touched: props.touched.completionDate,
		name: "completionDate",
		placeholder: "Select date",
	};

	const workCompletionDate = {
		value: props.values.workCompletionDate,
		onChange: props.handleChange,
		error: props.errors.workCompletionDate,
		touched: props.touched.workCompletionDate,
		name: "workCompletionDate",
		type: "text",
		placeholder: "Number of days",
	};
	const costOfWork = {
		value: props.values.costOfWork,
		onChange: (e) => {
			if (isNaN(e.target.value)) {
				return;
			} else {
				// return e.target.value
				props.setFieldValue("costOfWork", e.target.value);
			}
		},
		error: props.errors.costOfWork,
		touched: props.touched.costOfWork,
		name: "costOfWork",
		type: "text",
		placeholder: "0.00",
	};

	return (
		<div>
			<div
				className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
				onClick={(e) => e.stopPropagation()}>
				{/* Modal content */}

				<form
					onSubmit={props.handleSubmit}
					className="relative w-[600px] bg-white rounded-lg shadow py-4">
					<div className="flex justify-between items-baseline mx-6">
						<div>
							<h3 className="text-lg font-bold text-gray-900">
								Certificate of Substantial Completion
							</h3>
							<p className="text-base text-gray-700">Project information</p>
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
						<div className="flex flex-col mb-5">
							<label className="text-base text-gray-900 mb-1">
								Enter the project or the area that has been deemed to be
								substantially complete.
							</label>
							<FormInputPlain {...areasCompleted} />
							{props.errors.areasCompleted && props.touched.areasCompleted && (
								<Error message={props.errors.areasCompleted} />
							)}
						</div>

						<FormInputContainer name="Enter the date of substantial completion.">
							<SelectDate {...completionDate} />
							{props.errors.completionDate && props.touched.completionDate && (
								<Error message={props.errors.completionDate} />
							)}
						</FormInputContainer>

						<div className="flex flex-col mb-5">
							<label className="text-base text-gray-900 mb-1">
								Within how many days from the date of substantial completion,
								the Contractor has to complete all the work on the attached
								punch list?
							</label>
							<FormInputPlain {...workCompletionDate} />
							{props.errors.workCompletionDate &&
								props.touched.workCompletionDate && (
									<Error message={props.errors.workCompletionDate} />
								)}
						</div>
						<div className="flex flex-col mb-5">
							<label
								for="default-radio-1"
								className="text-base text-gray-900 mb-1">
								Enter the estimated cost of the remaining work.
							</label>
							<FormInput {...costOfWork} />
							{props.errors.costOfWork && props.touched.costOfWork && (
								<Error message={props.errors.costOfWork} />
							)}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="cancel"
							onClick={() => dispatch(prev(0))}
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

export default SubstantialCompletionDetails;
