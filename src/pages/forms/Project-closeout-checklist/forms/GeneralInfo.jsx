import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { prevChoiceStep } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";

const GeneralInformation = (props) => {
	const dispatch = useDispatch();

	const completionDate = {
		...props,
		value: props.values.completionDate,
		onChange: props.handleChange,
		error: props.errors.completionDate,
		touched: props.touched.completionDate,
		name: "completionDate",
		placeholder: "Select date",
	};

	const signDate = {
		...props,
		value: props.values.signDate,
		onChange: props.handleChange,
		error: props.errors.signDate,
		touched: props.touched.signDate,
		name: "signDate",
		placeholder: "Select date",
	};
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
								Project Closeout Checklist
							</h3>
							<p className="text-base text-gray-700">General Information</p>
						</div>
						<button
							type="button"
							onClick={() => dispatch(closeModal())}
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
						<div className=" mt-3 ml-2">
							<FormInputContainer name="Enter the substantial completion date of the project">
								<SelectDate {...completionDate} />
								{props.errors.completionDate &&
									props.touched.completionDate && (
										<Error message={props.errors.completionDate} />
									)}
							</FormInputContainer>

							<FormInputContainer name="When does the project manager sign this document?">
								<SelectDate {...signDate} />
								{props.errors.signDate && props.touched.signDate && (
									<Error message={props.errors.signDate} />
								)}
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
							loading={props?.isLoading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default GeneralInformation;
