import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFetchDurhamQuery } from "../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import SelectDate, { FormInputPlain, FormSelect } from "../components";
import { FormInputContainer } from "../Notice-of-intent-consultant/Forms";
import { closeModal } from "../reducer";

const DeterminationForm = (props) => {
	const dispatch = useDispatch();
	const durham = useFetchDurhamQuery();
	const [list, setList] = useState([]);
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

	const recipientCopy = {
		value: props.values.recipientCopy,
		onChange: (e) => {
			if (e.target.selectedOptions[0].innerText !== "Add New Recipient") {
				props.setFieldValue("position", e.target.selectedOptions[0].id);
				props.setFieldValue("recipientCopy", e.target.value);
				setShow(false);
			} else {
				setShow(true);
				props.setFieldValue("position", "");
				props.setFieldValue("recipientCopy", "");
			}
		},

		error: props.errors.recipientCopy,
		touched: props.touched.recipientCopy,
		id: "recipientCopy",
		name: "Choose the recipients of the carbon copy.",
		type: "text",
		placeholder: "Select recipients",
	};
	// const userValue = {
	// 	value: props.values.userValue,
	// 	onChange: props.handleChange,
	// 	error: props.errors.userValue,
	// 	touched: props.touched.userValue,
	// 	id: "userValue",
	// 	name: "userValue",
	// 	type: "text",
	// 	placeholder: "Enter recipient",
	// };

	const recipientName = {
		value: props.values.recipientCopy,
		onChange: (e) => {
			props.setFieldValue("recipientCopy", e.target.value);
		},
		error: props.errors.recipientCopy,
		touched: props.touched.recipientCopy,
		name: "recipientCopy",
		type: "text",
		placeholder: "Enter Name",
	};
	const recipientTitle = {
		value: props.values.position,
		onChange: (e) => {
			props.setFieldValue("position", e.target.value);
		},
		error: props.errors.position,
		touched: props.touched.position,
		name: "position",
		type: "text",
		placeholder: "Enter Title",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4"
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							Determination of Apparent Low Bidder
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
					<div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
				</div>
				{/* <div className=" px-4 w-full my-4 border-b py-1 text-gray-500"></div> */}
				<div className="px-4">
					<FormInputContainer name="On what date are you creating this letter?">
						<SelectDate {...creationDate} />
						{props.errors.creationDate && props.touched.creationDate && (
							<Error message={props.errors.creationDate} />
						)}
					</FormInputContainer>
					<FormInputContainer>
						<FormSelect {...recipientCopy}>
							{!props.values.recipientCopy ? (
								<option>Select Recipient</option>
							) : (
								<option value={props.values.recipientCopy}>
									{props.values.recipientCopy}
								</option>
							)}

							{list?.map((cur, id) => {
								return (
									<option key={cur.slug} id={cur.name} value={cur.value}>
										{cur.value}
									</option>
								);
							})}

							<option value="">Add New Recipient</option>
						</FormSelect>
					</FormInputContainer>
					{show && (
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
						loading={props?.isLoading}
					/>
				</div>
			</form>
		</div>
	);
};

export default DeterminationForm;
