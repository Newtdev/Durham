import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFetchDurhamQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import SelectDate, {
	FormInputPlain,
	FormSelect,
	FormTextArea,
} from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const Compensation = (props) => {
	const dispatch = useDispatch();

	const durham = useFetchDurhamQuery();
	const [durhamList, setList] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!durham?.data) {
			return;
		}
		const list = durham?.data.filter(
			(cur) =>
				cur.slug !==
				"construction_capital_planning_project_managers_phone_number"
		);
		setList(list);
	}, [durham]);

	const calculatePayment = {
		value: props.values.calculatePayment,
		onChange: props.handleChange,
		name: "calculatePayment",
		placeholder: "E.G., HOUR, DAY, MILE, SQUARE FOOT, ETC.",
		type: "text",
	};
	const allowablePayment = {
		value: props.values.allowablePayment,
		onChange: props.handleChange,
		name: "allowablePayment",
		placeholder: "NOT-TO-EXCEED Amount",
		type: "text",
	};
	// const reimburseObligation = {
	// 	value: props.values.reimburseObligation,
	// 	onChange: props.handleChange,
	// 	name: "reimburseObligation",
	// 	type: "text",
	// 	placeholder: "Obligations",
	// };
	const providerCompensation = {
		value: props.values.providerCompensation,
		onChange: props.handleChange,
		name: "providerCompensation",
		type: "text",
		placeholder: "",
	};
	const providerInvoice = {
		value: props.values.providerInvoice,
		onChange: (e) => {
			if (e.target.selectedOptions[0].innerText === "Add New") {
				setShow(true);
				props.setFieldValue("providerInvoice", "");
			} else {
				setShow(false);
				props.setFieldValue("providerInvoice", e.target.value);
			}
		},
		// name: "To whom should the provider send the invoices?",
		id: "providerInvoice",
		type: "text",
		placeholder: "Name",
	};
	// const invoiceName = {
	// 	value: props.values.invoiceName,
	// 	onChange: props.handleChange,
	// 	// name: "To whom should the provider send the invoices?",
	// 	id: "invoiceName",
	// 	type: "text",
	// 	placeholder: "Name",
	// };

	const recipientName = {
		value: props.values.providerInvoice,
		onChange: (e) => {
			props.setFieldValue("providerInvoice", e.target.value);
		},
		error: props.errors.providerInvoice,
		touched: props.touched.providerInvoice,
		name: "providerInvoice",
		type: "text",
		placeholder: "Enter Name",
	};
	const signedDocument = {
		...props,
		value: props.values.signedDocument,
		onChange: props.handleChange,
		name: "signedDocument",
		type: "text",
		placeholder: "Select Date",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-10">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4"
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							ESSER PM Contract Template
						</h3>
						<p className="text-base text-gray-700">Compensation</p>
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
					<div className="bg-[#2F5461] h-2.5 w-[66.3%]"></div>
				</div>
				<div className="px-4">
					<div className="flex flex-col mb-5">
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							Enter the relevant time period or other metrics to calculate
							payments for compensating the provider.
						</label>
						<input
							{...calculatePayment}
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
						/>
						{props.errors.calculatePayment &&
							props.touched.calculatePayment && (
								<Error message={props.errors.calculatePayment} />
							)}
					</div>
					<div className="flex flex-col mb-5">
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							Enter the maximum allowable total payments to the provider.
						</label>
						<input
							{...allowablePayment}
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
						/>
						{props.errors.allowablePayment &&
							props.touched.allowablePayment && (
								<Error message={props.errors.allowablePayment} />
							)}
					</div>
					<div className="flex flex-col mb-5">
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							Specify any additional obligations of the school system, including
							reimbursement of expenses.
						</label>
						{/* <input
							{...reimburseObligation}
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
						/> */}
						<FormTextArea
							onChange={props.handleChange}
							id="reimburseObligation"
							value={props?.values?.reimburseObligation}
							placeholder={"Obligation Must be under 40 words. "}
						/>
						{props.errors.reimburseObligation &&
							props.touched.reimburseObligation && (
								<Error message={props.errors.reimburseObligation} />
							)}
					</div>
					<div className="flex flex-col mb-5">
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							What is the provider's compensation amount?
						</label>
						<input
							{...providerCompensation}
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
						/>
						{props.errors.providerCompensation &&
							props.touched.providerCompensation && (
								<Error message={props.errors.providerCompensation} />
							)}
					</div>
					{/* <div className='flex flex-col mb-5'>
                    <input
                    {...providerInvoice}
                    className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                    />
                    {props.errors.providerInvoice && props.touched.providerInvoice && <Error message={props.errors.providerInvoice} />}
                    
                </div> */}
					<FormInputContainer>
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							To whom should the provider send the invoices?
						</label>
						<FormSelect {...providerInvoice}>
							{!props.values.providerInvoice ? (
								<option>Select Recipient</option>
							) : (
								<option value={props.values.providerInvoice}>
									{props.values.providerInvoice}
								</option>
							)}
							{durhamList?.map((cur, id) => {
								return (
									<option key={cur.slug} id={cur.name} value={cur.value}>
										{cur.value}
									</option>
								);
							})}
							<option>Add New</option>
						</FormSelect>
					</FormInputContainer>
					{show && (
						<>
							<FormInputContainer name="Enter Name">
								<FormInputPlain {...recipientName} />
							</FormInputContainer>
						</>
					)}

					<FormInputContainer name="When does the Chief Financial Officer sign the document?">
						<SelectDate {...signedDocument} />
						{props.errors.signedDocument && props.touched.signedDocument && (
							<Error message={props.errors.signedDocument} />
						)}
					</FormInputContainer>
				</div>

				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Back"
						onClick={() => dispatch(prevChoiceStep(0))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default Compensation;
