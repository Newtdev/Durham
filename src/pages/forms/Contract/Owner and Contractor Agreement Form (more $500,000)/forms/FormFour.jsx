import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";
import { prevStep } from "../reducer";

const FormFour = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

	const chairmanSign = {
		...props,
		value: props.values.chairmanSign,
		onChange: props.handleChange,
		name: "chairmanSign",
		error: props.errors.chairmanSign,
		touched: props.touched.chairmanSign,
		placeholder: "Select date",
		//    prevPage
	};

	const chiefFinanceSign = {
		...props,
		value: props.values.chiefFinanceSign,
		onChange: props.handleChange,
		name: "chiefFinanceSign",
		error: props.errors.chiefFinanceSign,
		touched: props.touched.chiefFinanceSign,
		placeholder: "Select date",
		//    prevPage
	};
	const boardApprovalDate = {
		...props,
		value: props.values.boardApprovalDate,
		onChange: props.handleChange,
		name: "boardApprovalDate",
		error: props.errors.boardApprovalDate,
		touched: props.touched.boardApprovalDate,
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
						<div className="bg-[#2F5461] h-2.5 w-1/2"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<small className="text-sm text-gray-600 -mb-1">
								How many drawings and specifications sets are provided to the
								contractor at no additional charge?
							</small>
							<div className="grid grid-cols-2 gap-x-4 content-center">
								<FormInputContainer name="">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="drawings"
										value={props?.values?.drawings}
										placeholder="Drawings"
									/>
									{props.errors.project && props.touched.project && (
										<Error message={props.errors.project} />
									)}
								</FormInputContainer>
								<FormInputContainer name="">
									<FormInputPlain
										type={"text"}
										onChange={props.handleChange}
										name="specifications"
										value={props?.values?.specifications}
										placeholder="Specifications"
									/>
									{props.errors.project && props.touched.project && (
										<Error message={props.errors.project} />
									)}
								</FormInputContainer>
							</div>
							<FormInputContainer name="When does the DPS Chair sign the document?">
								<SelectDate {...chairmanSign} />
								{props.errors.chairmanSign && props.touched.chairmanSign && (
									<Error message={props.errors.chairmanSign} />
								)}
							</FormInputContainer>
							<FormInputContainer name="When does the Chief Financial Officer sign the document?">
								<SelectDate {...chiefFinanceSign} />
								{props.errors.chiefFinanceSign &&
									props.touched.chiefFinanceSign && (
										<Error message={props.errors.chiefFinanceSign} />
									)}
							</FormInputContainer>
							<FormInputContainer name="What day will the board approve the document?">
								<SelectDate {...boardApprovalDate} />
								{props.errors.boardApprovalDate &&
									props.touched.boardApprovalDate && (
										<Error message={props.errors.boardApprovalDate} />
									)}
							</FormInputContainer>
							<FormInputContainer name="When will the document be notarized? (Notary Seal Date)">
								<SelectDate {...notarySealDate} />
								{props.errors.notarySealDate &&
									props.touched.notarySealDate && (
										<Error message={props.errors.notarySealDate} />
									)}
							</FormInputContainer>

							{/* <FormInputContainer name="Enter the addenda to this project.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="projectAgenda"
									placeholder="Enter the addenda to this project."
								/>
								{props.errors.projectAgenda && props.touched.projectAgenda && (
									<Error message={props.errors.projectAgenda} />
								)}
							</FormInputContainer>

							<FormInputContainer name="Enter the alternates to this project.">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="projectAlternates"
									placeholder="Enter the alternates to this project."
								/>
								{props.errors.projectAlternates &&
									props.touched.projectAlternates && (
										<Error message={props.errors.projectAlternates} />
									)}
							</FormInputContainer>

							<h2 className="font-bold border-b w-full border-b-gray-400 pb-1">
								Enter the modifications to the Project’s plans and
								specifications including any noted value engineering items, if
								applicable.
							</h2>

							<FormInputContainer name="Modifications">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="modification"
									placeholder="Modifications"
								/>
								{props.errors.modification && props.touched.modification && (
									<Error message={props.errors.modification} />
								)}
							</FormInputContainer>

							<FormInputContainer name="Total Amount for Modifications">
								<FormInputPlain
									type={"text"}
									onChange={props.handleChange}
									name="modificationAmount"
									placeholder="Hereinafter referred to as the 'Project' or 'Work'"
								/>
								{props.errors.modificationAmount &&
									props.touched.modificationAmount && (
										<Error message={props.errors.modificationAmount} />
									)}
							</FormInputContainer> */}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Cancel"
							onClick={() => dispatch(prevStep(3))}
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
	);
};

export default FormFour;
