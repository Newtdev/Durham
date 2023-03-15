import { useDispatch } from "react-redux";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain, FormSelect } from "../../../components";
import { Fragment, useState } from "react";
import SelectDate from "../../../components";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import {
	useFetchAllProjectManagerQuery,
	useFetchDurhamQuery,
} from "../../../../../features/services/api";

const FormOne = (props) => {
	const dispatch = useDispatch();
	const [value] = useState("");
	const [show, setShow] = useState(false);
	const durham = useFetchDurhamQuery();
	const projectManager = useFetchAllProjectManagerQuery({ queryValue: "" });

	const MergetDetails = () => {
		const durham_profile = durham?.currentData;
		const projectManagerDetails = projectManager?.currentData?.data?.data;
		if (!durham_profile || !projectManagerDetails) {
			return "";
		}

		let list = [
			...durham_profile?.filter(
				(cur) =>
					cur.slug !==
					"construction_capital_planning_project_managers_phone_number"
			),
			...projectManagerDetails,
		].map((cur, i) => {
			return (
				<Fragment key={i}>
					{cur.first_name ? (
						<option
							id="Project Manager"
							value={`${cur?.first_name} ${cur?.last_name}`}>{`${cur?.first_name} ${cur?.last_name}`}</option>
					) : (
						<option id={cur?.name} value={cur?.value}>
							{cur?.value}
						</option>
					)}
				</Fragment>
			);
		});
		return list;
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
								Change Order Directive
							</h3>
							<p className="text-base text-gray-700"></p>
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
							<div className="flex flex-col gap-3">
								<h2 className="text-sm text-gray-600 font-semibold">
									Check the relevant option for the proposed basis of adjustment
									to the Contract Sum or Guaranteed Maximum Price
								</h2>
								<div className="flex gap-3 items-center">
									<input
										id="default-checkbox-1"
										type="checkbox"
										value={props?.values?.maxPrice}
										name="maxPrice"
										checked={props?.values?.maxPrice}
										onChange={props.handleChange}
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
									/>
									<label
										for="default-checkbox-1"
										className="text-base text-gray-900">
										Lump Sum increase
									</label>
								</div>
								<div className="flex gap-3 items-center">
									<input
										id="default-checkbox-2"
										type="checkbox"
										value={props?.values?.unitPrice}
										name="unitPrice"
										checked={props?.values?.unitPrice}
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
										onChange={props?.handleChange}
									/>
									<label
										for="default-checkbox-2"
										className="text-base text-gray-900">
										Unit Price
									</label>
								</div>
								<div className="flex gap-3 items-center">
									<input
										id="default-checkbox-2"
										type="checkbox"
										value={props?.values?.exceed}
										checked={props?.values?.exceed}
										name="exceed"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
										onChange={props?.handleChange}
									/>
									<label
										for="default-checkbox-3"
										className="text-base text-gray-900">
										Not to exceed
									</label>
								</div>
								{props.errors.maxPrice && props.touched.maxPrice && (
									<Error message={props.errors.maxPrice} />
								)}
							</div>

							<FormInputContainer name={"Amount (Lump Sum Increase)"}>
								<div className="w-full">
									<FormInputPlain
										type={"number"}
										onChange={props.handleChange}
										name="amount"
										placeholder={"$0.00"}
										value={
											!props?.values?.maxPrice ? "" : props?.values?.amount
										}
									/>
									{props.errors.amount && props.touched.amount && (
										<Error message={props.errors.amount} />
									)}
								</div>
							</FormInputContainer>

							{props?.values?.unitPrice ? (
								<FormInputContainer name={`Unit price ${value}`}>
									<div className="flex gap-2">
										<div className="w-full">
											<FormInputPlain
												type={"number"}
												onChange={props.handleChange}
												name="price"
												placeholder={"$0.00"}
												value={
													!props?.values?.unitPrice ? "" : props?.values?.price
												}
											/>
										</div>

										<div className="w-full">
											<FormInputPlain
												type={"text"}
												onChange={props.handleChange}
												name="contractTimePerHour"
												placeholder={"per hour, day...."}
												value={
													!props?.values?.unitPrice
														? ""
														: props?.values?.contractTimePerHour
												}
											/>
											{props.errors.contractTimePerHour &&
												props.touched.contractTimePerHour && (
													<Error message={props.errors.contractTimePerHour} />
												)}
										</div>
									</div>
								</FormInputContainer>
							) : null}

							{props?.values?.exceed ? (
								<FormInputContainer name={`Amount (Not to exceed)`}>
									<div className="w-full">
										<FormInputPlain
											type={"number"}
											onChange={props.handleChange}
											name="exceedAmount"
											placeholder={"$0.00"}
											value={props?.values?.exceedAmount}
										/>
									</div>
								</FormInputContainer>
							) : null}

							<FormInputContainer name="Enter the proposed contract time adjustments, if any">
								<FormInputPlain
									type={"number"}
									onChange={props.handleChange}
									name="contractTime"
									placeholder={"Number of Days"}
									value={props?.values?.contractTime}
								/>
								{props.errors.contractTime && props.touched.contractTime && (
									<Error message={props.errors.contractTime} />
								)}
							</FormInputContainer>

							<FormSelect
								value={props?.values?.ownerDatabase}
								name="Select Recipient"
								id="ownerDatabase"
								error={props?.errors?.ownerDatabase}
								touched={props?.touched?.ownerDatabase}
								onChange={(e) => {
									if (
										e.target.selectedOptions[0].innerText ===
										"Add New Recipient"
									) {
										setShow(true);
										props?.setFieldValue("ownerDatabase", "");
										props.setFieldValue("position", "");
									} else {
										setShow(false);
										props.setFieldValue(
											"position",
											e.target.selectedOptions[0].id
										);
										props?.setFieldValue("ownerDatabase", e.target.value);
									}
								}}>
								{!props?.values?.ownerDatabase ? (
									<option>Select</option>
								) : (
									<option value={props?.values?.ownerDatabase}>
										{props?.values?.ownerDatabase}
									</option>
								)}
								{MergetDetails()}
								<option value="">Add New Recipient</option>
							</FormSelect>

							{show ? (
								<FormInputContainer name="Enter Enter ">
									<FormInputPlain
										type={"text"}
										onChange={(e) => {
											props.setFieldValue("ownerDatabase", e.target.value);
										}}
										name="ownerDatabase"
										placeholder={"Enter Name"}
									/>
									{props.errors.ownerDatabase &&
										props.touched.ownerDatabase && (
											<Error message={props.errors.ownerDatabase} />
										)}
								</FormInputContainer>
							) : null}
							{show ? (
								<FormInputContainer name="Enter Title ">
									<FormInputPlain
										type={"text"}
										onChange={(e) => {
											props.setFieldValue("position", e.target.value);
										}}
										name="position"
										placeholder={"Enter Title"}
										value={props?.values?.position}
									/>
									{props.errors.position && props.touched.position && (
										<Error message={props.errors.position} />
									)}
								</FormInputContainer>
							) : null}

							<FormInputContainer name="When does the Owner's representative sign this form?">
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
