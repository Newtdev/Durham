import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFetchDurhamQuery } from "../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { OverviewTextarea } from "../../Dashboard/Overview-dashboard/OverviewComponents";
import SelectDate, { FormInputPlain, FormSelect } from "../components";
import { FormInputContainer } from "../Notice-of-intent-consultant/Forms";
import { closeModal } from "../reducer";

const Form = (props) => {
	const dispatch = useDispatch();
	const durham = useFetchDurhamQuery();
	const [show, setShow] = useState(false);
	const [durhamList, setList] = useState([]);

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
	const services = {
		value: props.values.services,
		onChange: props.handleChange,
		id: "services",
		error: props.errors.services,
		touched: props.touched.services,
		placeholder: "Enter services",
		//    prevPage
	};
	const amount = {
		value: props.values.amount,

		onChange: (e) => {
			if (isNaN(e.target.value)) {
				return;
			} else {
				// return e.target.value
				props.setFieldValue("amount", e.target.value);
			}
		},
		error: props.errors.amount,
		touched: props.touched.amount,
		name: "amount",
		type: "text",
		placeholder: "Amount",
		//    prevPage
	};
	const email = {
		value: props.values.email,

		onChange: props.handleChange,
		error: props.errors.email,
		touched: props.touched.email,
		name: "email",
		type: "text",
		placeholder: "Enter email address",

		//    prevPage
	};
	const deliveryDate = {
		...props,
		value: props.values.deliveryDate,
		onChange: props.handleChange,
		error: props.errors.deliveryDate,
		touched: props.touched.deliveryDate,
		name: "deliveryDate",
		placeholder: "Select date",
	};
	console.log(props.values.recipientCopy);
	const recipientCopy = {
		value: props.values.recipientCopy,

		// onChange: props.handleChange,
		onChange: (e) => {
			setShow(true);
			props.setFieldValue("position", e.target.selectedOptions[0].id);
			props.setFieldValue("recipientCopy", e.target.value);
		},
		error: props.errors.recipientCopy,
		touched: props.touched.recipientCopy,
		id: "recipientCopy",

		name: "Choose the recipients of the carbon copy.",
		type: "text",
		placeholder: "Select recipients",
	};
	const recipientName = {
		value: props.values.recipientName,

		onChange: props.handleChange,
		error: props.errors.recipientName,
		touched: props.touched.recipientName,
		name: "recipientName",

		type: "text",
		placeholder: "Enter Recipient Name",
	};
	const recipientTitle = {
		value: props.values.recipientTitle,

		onChange: props.handleChange,
		error: props.errors.recipientTitle,
		touched: props.touched.recipientTitle,
		name: "recipientTitle",

		type: "text",
		placeholder: "Enter Recipient Title",
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
								Notice of Award - Consultant
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
						<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
					</div>

					<div className="mx-6 mb-12">
						<small className="text-gray-900 font-medium">
							Does this letter need the executive director's approval?
						</small>
						<div className=" mt-3 ml-2">
							<div className="flex items-center mb-5">
								<input
									type="radio"
									onChange={props.handleChange}
									checked={props.values.approval === "Yes" ? true : false}
									value="Yes"
									name="approval"
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Yes
								</label>
							</div>

							<div className=" mb-5">
								<input
									type="radio"
									onChange={props.handleChange}
									checked={props.values.approval === "No" ? true : false}
									value="No"
									name="approval"
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									No
								</label>
								{props.errors.approval && props.touched.approval && (
									<Error message={props.errors.approval} />
								)}
							</div>

							<FormInputContainer name="On what date are you creating this letter?">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && (
									<Error message={props.errors.creationDate} />
								)}
							</FormInputContainer>

							<div className="flex flex-col mb-5">
								<label className="text-base text-gray-900 mb-1">
									What services are the subject of this Notice of Award?
								</label>
								<OverviewTextarea {...services} />
							</div>
							<div className="flex flex-col mb-5">
								<label className="text-base text-gray-900 mb-1">
									The consultant is given the project for the sum of?
								</label>
								<FormInputPlain {...amount} />
								{props.errors.amount && props.touched.amount && (
									<Error message={props.errors.amount} />
								)}
							</div>
							<div className="flex flex-col mb-5">
								<label className="text-base text-gray-900 mb-1">
									Enter the email address where the consultant can send the
									notarized documents
								</label>
								<FormInputPlain {...email} />
								{props.errors.email && props.touched.email && (
									<Error message={props.errors.email} />
								)}
							</div>

							{/* </FormInputContainer> */}

							<FormInputContainer name="By what date must the consultant, deliver the required documents?">
								<SelectDate {...deliveryDate} />
								{props.errors.deliveryDate && props.touched.deliveryDate && (
									<Error message={props.errors.deliveryDate} />
								)}
							</FormInputContainer>

							{/* <FormInputContainer>
                            <FormSelect {...recipientCopy}>
                                <option>Select recipients</option>
                       </FormSelect> */}
							{/* </FormInputContainer> */}
							<FormInputContainer>
								<FormSelect {...recipientCopy}>
									{!props.values.recipientCopy ? (
										<option>Select Recipient</option>
									) : (
										<option value={props.values.recipientCopy}>
											{props.values.recipientCopy}
										</option>
									)}
									{durhamList?.map((cur, id) => {
										return (
											<option key={cur.slug} id={cur.name} value={cur.value}>
												{cur.value}
											</option>
										);
									})}
									<option value="">Add New Recipient</option>
								</FormSelect>
							</FormInputContainer>
							{!props.values.recipientCopy && show && (
								<>
									<FormInputContainer name="Enter Recipients Name">
										<FormInputPlain {...recipientName} />
									</FormInputContainer>
									<FormInputContainer name="Enter Recipients Title">
										<FormInputPlain {...recipientTitle} />
									</FormInputContainer>
								</>
							)}
						</div>
						{/* {error && touched && <Error message={error} />} */}
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
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
