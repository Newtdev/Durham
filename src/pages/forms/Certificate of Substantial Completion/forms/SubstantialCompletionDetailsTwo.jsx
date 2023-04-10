import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchDurhamQuery } from "../../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import SelectDate, {
	FormInputPlain,
	FormSelect,
	FormTextArea,
} from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prev } from "../reducer";

const DurhamSelect = ({ props, owners, durhamList }) => {
	return (
		<FormInputContainer>
			<FormSelect {...owners}>
				{!props.values.owner ? (
					<option>Select</option>
				) : (
					<option value={props.values.owner}>{props.values.owner}</option>
				)}
				<option>Add New Owner</option>
				{durhamList?.map((cur, id) => {
					return (
						<option key={cur.slug} id={cur.name} value={cur.value}>
							{cur.value}
						</option>
					);
				})}
			</FormSelect>
		</FormInputContainer>
	);
};

const SubstantialCompletionDetailsTwo = (props) => {
	const dispatch = useDispatch();
	const durham = useFetchDurhamQuery();
	const [durhamList, setList] = useState([]);
	const [show, setShow] = useState(false);

	const ownerRepName = {
		value: props.values.owner,
		onChange: (e) => {
			if (e.target.selectedOptions[0].innerText === "Add New Owner") {
				setShow(true);
				props.setFieldValue("position", "");
				props.setFieldValue("owner", "");
			} else {
				setShow(false);
				props.setFieldValue("position", e.target.selectedOptions[0].id);
				props.setFieldValue("owner", e.target.value);
			}
		},
		error: props.errors.owner,
		touched: props.touched.owner,
		id: "owner",
		name: "Select Owner’s Representative Name",
		type: "text",
		placeholder: "Enter Name",
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
	const responsibility = {
		value: props.values.responsibility,
		onChange: props.handleChange,
		error: props.errors.responsibility,
		touched: props.touched.responsibility,
		name: "Enter the responsibilities of the Owner and Contractor for security, maintenance, heat, utilities, damage to the Work and insurance, if any?",
		id: "responsibility",
		placeholder: "Responsibilty must not be more than 40 words",
	};
	const positions = {
		value: props.values.position,
		onChange: props.handleChange,
		error: props.errors.position,
		touched: props.touched.position,
		name: "position",
		placeholder: "Enter Title",
	};
	const RepName = {
		value: props.values.owner,
		onChange: props.handleChange,
		error: props.errors.owner,
		touched: props.touched.owner,
		name: "owner",
		placeholder: "Enter Name",
	};

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
								Certificate of Substantial Completion
							</h3>
							<p className="text-base text-gray-700">
								Substantial Completion details
							</p>
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

					<div className="mx-6 mb-12">
						<div className=" mt-3 ml-2">
							<DurhamSelect
								durhamList={durhamList}
								props={props}
								owners={ownerRepName}
							/>
							{show && (
								<>
									<div className="flex flex-col mb-5">
										<label className="text-base text-gray-900 mb-1">
											Enter Owner’s Representative Name
										</label>
										<FormInputPlain {...RepName} />
										{props.errors.RepName && props.touched.RepName && (
											<Error message={props.errors.RepName} />
										)}
									</div>
									<div className="flex flex-col mb-5">
										<label className="text-sm text-gray-600 mb-1">
											Enter Owner’s Representative Title
										</label>
										<FormInputPlain {...positions} />
										{props.errors.positions && props.touched.positions && (
											<Error message={props.errors.positions} />
										)}
									</div>
								</>
							)}

							<FormInputContainer name="When does the Owner's representative sign this form?">
								<SelectDate {...signedDate} />
								{props.errors.signedDate && props.touched.signedDate && (
									<Error message={props.errors.signedDate} />
								)}
							</FormInputContainer>

							<FormTextArea {...responsibility} />

							{/* <div className='flex flex-col mb-5'>
                            <label
                                for='default-radio-1'
                                className='text-base text-gray-900 mb-1'
                            >
                                Enter the estimated cost of the remaining work.
                            </label>
                            <FormInput {...estimatedCost} />
                            {props.errors.estimatedCost && props.touched.estimatedCost && <Error message={props.errors.estimatedCost} />}

                        </div> */}
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Back"
							onClick={() => dispatch(prev(1))}
						/>
						<DashboardButton
							hidden
							loading={props.isLoading}
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

export default SubstantialCompletionDetailsTwo;
