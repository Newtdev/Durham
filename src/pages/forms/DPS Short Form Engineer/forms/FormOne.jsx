import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";

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

	const directorSignDate = {
		...props,
		value: props.values.directorSignDate,
		onChange: props.handleChange,
		name: "directorSignDate",
		error: props.errors.directorSignDate,
		touched: props.touched.directorSignDate,
		placeholder: "Select date",
		//    prevPage
	};

	const officerSignDate = {
		...props,
		value: props.values.officerSignDate,
		onChange: props.handleChange,
		name: "officerSignDate",
		error: props.errors.officerSignDate,
		touched: props.touched.officerSignDate,
		placeholder: "Select date",
		//    prevPage
	};

	const notarySealDate = {
		...props,
		value: props.values.notarySealDate,
		onChange: props.handleChange,
		name: "notarySealDate",
		error: props.errors.notarySealDate,
		touched: props.touched.notarySealDate,
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
								DPS Short Form Engineer - Engineering Contract
							</h3>
							<p className="text-base text-gray-700">General Information</p>
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

							<FormInputContainer name="When does the Director of Construction and Sustainability sign the document?">
								<SelectDate {...directorSignDate} />
								{props.errors.directorSignDate &&
									props.touched.directorSignDate && (
										<Error message={props.errors.directorSignDate} />
									)}
							</FormInputContainer>

							<FormInputContainer name="When does the Chief Financial Officer sign the document?">
								<SelectDate {...officerSignDate} />
								{props.errors.officerSignDate &&
									props.touched.officerSignDate && (
										<Error message={props.errors.officerSignDate} />
									)}
							</FormInputContainer>

							<FormInputContainer name="When will the document be notarized? (Notary Seal Date)">
								<SelectDate {...notarySealDate} />
								{props.errors.notarySealDate &&
									props.touched.notarySealDate && (
										<Error message={props.errors.notarySealDate} />
									)}
							</FormInputContainer>

							<div className="p-2 flex flex-col gap-2">
								<h2 className="font-bold">
									To specify the type of check, check the relevant box.
								</h2>
								<div className="flex flex-col gap-3">
									<div className="flex items-center">
										<input
											id="default-radio-1"
											type="radio"
											value="Initial"
											name="checkType"
											checked={
												props?.values?.checkType === "Initial" ? true : false
											}
											onChange={props.handleChange}
											className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
										/>
										<label
											for="default-radio-1"
											className="ml-2 text-base text-gray-900">
											Initial
										</label>
									</div>
									<div className="flex items-center">
										<input
											id="default-radio-2"
											type="radio"
											value="Supplemental"
											checked={
												props?.values?.checkType === "Supplemental"
													? true
													: false
											}
											name="checkType"
											className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
											onChange={props.handleChange}
										/>
										<label
											for="default-radio-2"
											className="ml-2 text-base text-gray-900">
											Supplemental
										</label>
									</div>
									<div className="flex items-center">
										<input
											id="default-radio-2"
											type="radio"
											value="Annual"
											name="checkType"
											className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
											checked={
												props?.values?.checkType === "Annual" ? true : false
											}
											onChange={props.handleChange}
										/>
										<label
											for="default-radio-2"
											className="ml-2 text-base text-gray-900">
											Annual
										</label>
									</div>
								</div>
								{props.errors.checkType && props.touched.checkType && (
									<Error message={props.errors.checkType} />
								)}
							</div>
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
