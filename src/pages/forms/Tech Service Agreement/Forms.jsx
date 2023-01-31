import { Error } from "../../../ui";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { FormInputContainer } from "../Notice-to-Proceed/Forms";
import SelectDate, { FormSelect } from "../components";
import { useDispatch } from "react-redux";
import { closeModal } from "../reducer";

const Forms = (props) => {
	const dispatch = useDispatch();

	const creationDate = {
		...props,
		value: props.values.creationDate,
		onChange: props.handleChange,
		name: "creationDate",
		error: props.errors.creationDate,
		touched: props.touched.creationDate,
		placeholder: "Select date",
		//    prevPage
	};
	const startDate = {
		...props,
		value: props.values.startDate,
		onChange: props.handleChange,
		name: "startDate",
		error: props.errors.startDate,
		touched: props.touched.startDate,
		placeholder: "Select date",
		//    prevPage
	};
	const amount = {
		onChange: (e) => {
			if (isNaN(e.target.value)) {
				return;
			} else {
				// return e.target.value
				props.setFieldValue("amount", e.target.value);
			}
		},
		name: "amount",
		error: props.errors.amount,
		value: props.values.amount,
		touched: props.touched.amount,
		placeholder: "Amount",
		//    prevPage
	};
	const endDate = {
		...props,
		value: props.values.endDate,
		onChange: props.handleChange,
		name: "endDate",
		error: props.errors.endDate,
		touched: props.touched.endDate,
		placeholder: "Select date",

		//    prevPage
	};

	const signedDate = {
		...props,
		value: props.values.signedDate,
		onChange: props.handleChange,
		error: props.errors.signedDate,
		touched: props.touched.signedDate,
		name: "signedDate",
		placeholder: "Select date",
	};

	const addressCopy = {
		onChange: props.handleChange,
		id: "addressCopy",
		error: props.errors.addressCopy,
		value: props.values.addressCopy,
		touched: props.touched.addressCopy,
		placeholder: "select",
		//    prevPage
	};
	return (
		<div>
			<div>
				<div
					className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
					onClick={(e) => e.stopPropagation()}>
					{/* Modal content */}
					<form
						onSubmit={props.handleSubmit}
						className="relative w-[600px] bg-white rounded-lg shadow py-4">
						{/* Header */}
						<div className="flex justify-between items-baseline pb-4 px-6 border-b border-b-gray-200">
							<div>
								<h3 className="text-lg font-bold text-gray-900">
									Technology Service Agreement
								</h3>
							</div>

							<button
								type="button"
								className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
								data-modal-toggle="small-modal"
								onClick={() => dispatch(closeModal())}>
								<Close />
							</button>
						</div>

						<div className="mx-6 mt-4 mb-12">
							<FormInputContainer name="When does the agreement go into effect?">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && (
									<Error message={props.errors.creationDate} />
								)}
							</FormInputContainer>
							<div className="mb-4">
								<p className="text-gray-900 font-medium text-sm mb-[2px]">
									Enter the maximum invoice amount paid to the contractor{" "}
								</p>
								<div className="relative w-full">
									<input
										{...amount}
										className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
									/>
									<small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
										$
									</small>
								</div>
							</div>
							<div className="mb-4">
								<FormInputContainer name="What's the duration of the agreement?">
									<div className="grid grid-cols-2 gap-x-4">
										<SelectDate {...startDate} />
										<SelectDate {...endDate} />
									</div>
									<div className="flex justify-between">
										{props.errors.startDate && props.touched.startDate && (
											<Error message={props.errors.startDate} />
										)}{" "}
										{props.errors.endDate && props.touched.endDate && (
											<Error message={props.errors.endDate} />
										)}
									</div>
								</FormInputContainer>
								<FormInputContainer name="When will the financial officer sign this document?">
									<SelectDate {...signedDate} />
									{props.errors.signedDate && props.touched.signedDate && (
										<Error message={props.errors.signedDate} />
									)}
								</FormInputContainer>
							</div>

							<FormInputContainer name="Who is the provider?">
								<FormSelect {...addressCopy}>
									{!props.values.addressCopy ? (
										<option>Select</option>
									) : (
										<option value={props.values.addressCopy}>
											{props.values.addressCopy}
										</option>
									)}
									<option value="Design Consultant">Design Consultant</option>
									<option value="Contractor">Contractor</option>
									<option value="Engineering">Engineering</option>
									<option value="Construction Manager">
										Construction Manager
									</option>
								</FormSelect>
							</FormInputContainer>
						</div>

						{/* Buttons */}
						<div className="flex justify-end gap-8 pr-4">
							<ButtonWhiteBG
								width="w-[100px]"
								name="cancel"
								onClick={() => dispatch(closeModal())}
							/>
							<DashboardButton
								hidden
								name="NEXT"
								type="submit"
								width="w-[77px]"
								loading={props.isLoading}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Forms;
