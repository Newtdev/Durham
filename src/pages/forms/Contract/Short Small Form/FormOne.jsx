import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain } from "../../components";
import { SelectDate } from "../../components";

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

	const signDate = {
		...props,
		value: props.values.signDate,
		onChange: props.handleChange,
		name: "signDate",
		error: props.errors.signDate,
		touched: props.touched.signDate,
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
								Short Small Form Design Consultant Agreement
							</h3>
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

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="When will the agreement be made official?">
								<SelectDate {...agreementDate} />
								{props.errors.agreementDate && props.touched.agreementDate && (
									<Error message={props.errors.agreementDate} />
								)}
							</FormInputContainer>

							<FormInputContainer name="Email address of the owner's representative.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="ownerEmail"
									placeholder={"Enter Email"}
									value={props.values.ownerEmail}
								/>
								{props.errors.ownerEmail && props.touched.ownerEmail && (
									<Error message={props.errors.ownerEmail} />
								)}
							</FormInputContainer>

							<FormInputContainer name="When will the financial officer sign this document?">
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

export default FormOne;
