import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormTextArea, FormInput } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormSelect } from "../../../components";
import { useMemo } from "react";
import currency from "currency.js";

export const CalculateAmount = (a, b, c, d) => {
	return useMemo(() => {
		if (d === "Increased") {
			return currency(Number(a) + Number(b) + Number(c)).format();
		} else if (d === "Decreased") {
			return currency(Number(a) + Number(b) - Number(c)).format();
		} else if (d === "No change") {
			return currency(Number(a) + Number(b)).format();
		}
	}, [a, b, c, d]);
};
const FormOne = (props) => {
	const dispatch = useDispatch();

	const creatingDate = {
		...props,
		value: props.values.creatingDate,
		onChange: props.handleChange,
		name: "creatingDate",
		error: props.errors.creatingDate,
		touched: props.touched.creatingDate,
		placeholder: "Select date",
		//    prevPage
	};

	const amountEffect = [
		{ name: "Increased" },
		{ name: "Decreased" },
		{ name: "No change" },
	];

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
								Change Order Form
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
						<div className="bg-[#2F5461] h-2.5 w-1/2"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="Enter the Change order Number">
								<FormInputPlain
									type={"text"}
									value={props?.values?.number}
									onChange={props.handleChange}
									name="number"
									placeholder={"Enter the Change order Number."}
								/>
								{props.errors.number && props.touched.number && (
									<Error message={props.errors.number} />
								)}
							</FormInputContainer>

							<FormInputContainer name="On what day are you creating this form?">
								<SelectDate {...creatingDate} />
								{props.errors.creatingDate && props.touched.creatingDate && (
									<Error message={props.errors.creatingDate} />
								)}
							</FormInputContainer>

							<div className="flex flex-col">
								<FormTextArea
									type={"text"}
									onChange={props.handleChange}
									value={props?.values?.description}
									name="Enter the description of the change"
									id="description"
									placeholder={"Enter the description of the change."}
								/>
								{props.errors.description && props.touched.description && (
									<Error message={props.errors.description} />
								)}
							</div>

							<FormInputContainer name="Enter the following amounts.">
								<div className="flex gap-3">
									<div className="flex flex-col w-full">
										<FormInputPlain
											type={"text"}
											onChange={props.handleChange}
											name="originalSum"
											value={props?.values?.originalSum}
											placeholder={"Original Contract Sum."}
										/>
										{props.errors.originalSum && props.touched.originalSum && (
											<Error message={props.errors.originalSum} />
										)}
									</div>
									<div className="flex flex-col w-full">
										<FormInputPlain
											type={"text"}
											onChange={props.handleChange}
											value={props?.values?.netSum}
											name="netSum"
											placeholder={"Net Sum of Prior Change Order(s)"}
										/>
										{props.errors.netSum && props.touched.netSum && (
											<Error message={props.errors.netSum} />
										)}
									</div>
								</div>
							</FormInputContainer>

							<FormSelect
								value={props.values.amountEffect}
								name="How does this change order's amount affect the original contract sum?"
								id="amountEffect"
								values={props?.values?.amountEffect}
								error={props.errors.amountEffect}
								touched={props.touched.amountEffect}
								onChange={props.handleChange}>
								<option value="">Select</option>
								{amountEffect?.map((amountEffect, index) => {
									return (
										<option key={index} value={amountEffect.name}>
											{amountEffect.name}
										</option>
									);
								})}
							</FormSelect>

							<FormInputContainer name="Amount">
								<FormInput
									onChange={props.handleChange}
									name="amount"
									placeholder={"0.0"}
									value={props?.values?.amount}
								/>
								{props.errors.amount && props.touched.amount && (
									<Error message={props.errors.amount} />
								)}
							</FormInputContainer>

							<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
								<h2 className="text-sm font-medium">New Contract Sum</h2>

								<span className="text-sm font-bold">
									{CalculateAmount(
										props?.values?.originalSum,
										props?.values?.netSum,
										props?.values?.amount,
										props?.values?.amountEffect
									)}
								</span>
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
