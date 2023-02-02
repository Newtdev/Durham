import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { FormSelect, SelectDate } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";

const ContractDetails = (props) => {
	const formID = useSelector(project_document_id);
	const response = useFetchFilledFormQuery(formID);
	const [length, setLength] = useState(0);

	const dispatch = useDispatch();
	const contractStartDate = {
		...props,
		value: props.values.contractStartDate,
		onChange: props.handleChange,
		name: "contractStartDate",
		placeholder: "Select date",
	};
	const fromDuration = {
		...props,
		value: props.values.fromDuration,
		onChange: props.handleChange,
		name: "fromDuration",
		type: "text",
		placeholder: "From",
	};

	const startDuration = {
		...props,
		value: props.values.startDuration,
		onChange: props.handleChange,
		name: "startDuration",
		placeholder: "Through",
	};

	const addressCopy = {
		value: props.values.addressCopy,
		touched: props.values.touched,
		errors: props.values.errors,
		onChange: props.handleChange,
		id: "addressCopy",
		placeholder: "Select",
	};

	/***
     *  contractStartDate: '',
      fromDuration: '',
      startDuration: '',
      calculatePayment: '',
      allowablePayment: '',
      reimburseObligation: '',
      providerCompensation: '',
      providerInvoice: '',
      signedDocument: '',
      type: ''
     */

	useEffect(() => {
		if (!response?.data?.data) {
			return;
		}
		setLength(response?.data?.data?.vendors.length);
		// console.log(response?.data?.data?.form_fields.providerInvoice)
		// props.setFieldValue('calculatePayment',response?.data?.data?.form_fields.calculatePayment)
		// props.setFieldValue('allowablePayment',response?.data?.data?.form_fields.allowablePayment)
		// props.setFieldValue('reimburseObligation',response?.data?.data?.form_fields.reimburseObligation)
		// props.setFieldValue('providerCompensation',response?.data?.data?.form_fields.providerCompensation)
		// props.setFieldValue('signedDocument',response?.data?.data?.form_fields.signedDocument)
		// props.setFieldValue('providerInvoice',response?.data?.data?.form_fields.providerInvoice)
		// props.setFieldValue('type',response?.data?.data?.form_fields.type)
	}, [response?.data?.data]);

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4"
				onSubmit={props.handleSubmit}>
				{console.log(length)}
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							ESSER Contract Template
						</h3>
						<p className="text-base text-gray-700">Contract details</p>
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
				<div className="px-4">
					{length > 1 ? (
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
					) : null}
					<FormInputContainer name="What day is the contract formally made and entered into?">
						<SelectDate {...contractStartDate} />
						{props.errors.contractStartDate &&
							props.touched.contractStartDate && (
								<Error message={props.errors.contractStartDate} />
							)}
					</FormInputContainer>
					<FormInputContainer name="Enter the duration of the contract.">
						<div className="grid grid-cols-2 gap-x-4 content-center">
							<SelectDate {...fromDuration} />
							<SelectDate {...startDuration} />
						</div>
						<div className="flex justify-between">
							{props.errors.startDuration && props.touched.startDuration && (
								<Error message={props.errors.startDuration} />
							)}
							{props.errors.fromDuration && props.touched.fromDuration && (
								<Error message={props.errors.fromDuration} />
							)}
						</div>
					</FormInputContainer>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="cancel"
						onClick={() => dispatch(closeModal())}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default ContractDetails;
