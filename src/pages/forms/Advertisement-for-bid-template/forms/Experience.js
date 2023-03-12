import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormTextArea, SelectDate } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const Experience = (props) => {
	const dispatch = useDispatch();
	const bidDate = {
		...props,
		value: props.values.bidDate,
		onChange: props.handleChange,
		name: "bidDate",
		placeholder: "Select date",
	};
	const deadlineTime = {
		...props,
		value: props.values.deadlineTime,
		onChange: props.handleChange,
		name: "deadlineTime",
		placeholder: "Select date",
	};
	const openingTime = {
		...props,
		value: props.values.openingTime,
		onChange: props.handleChange,
		name: "openingTime",
		placeholder: "Select time",
	};

	const projects = {
		value: props.values.projects,
		onChange: props.handleChange,
		name: "projects",
		type: "text",
		placeholder: "Projects",
	};
	const years = {
		value: props.values.years,
		onChange: props.handleChange,
		name: "years",
		type: "text",
		placeholder: "Years",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				onSubmit={props.handleSubmit}
				className="relative w-[600px] bg-white rounded-lg shadow py-4">
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							00 11 13 - Advertisement for Bid Template
						</h3>
						<p className="text-base text-gray-700">Agreement information</p>
					</div>
					<button
						// onClick={()=> dispatch(closeModal())}
						onClick={() => dispatch(closeModal())}
						type="button"
						className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
						// data-modal-toggle='small-modal'
					>
						<Close />
					</button>
				</div>
				{/* Progress */}
				<div className="w-full bg-[#89A5AF] h-2.5 my-4">
					<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
				</div>
				<div className="px-4">
					<FormInputContainer name="How many projects and number of prior years of demonstrable experience are necessary for the statement of qualification?">
						{/* <SelectDate {...bidDate} />
						{props.errors.bidDate && props.touched.bidDate && (
							<Error message={props.errors.bidDate} />
						)} */}
						<div className="grid grid-cols-2 gap-x-4">
							<FormInputContainer name="">
								<input
									{...projects}
									className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
								/>
							</FormInputContainer>
							<FormInputContainer name="">
								<input
									{...years}
									className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
								/>
							</FormInputContainer>
						</div>
					</FormInputContainer>
					<FormInputContainer name="Enter the project scope.">
						<FormTextArea
							onChange={props.handleChange}
							id="projectScope"
							// limit="100"
							value={props?.values?.projectScope}
							placeholder={"Project scope must be under 100 words. "}
						/>
					</FormInputContainer>
				</div>

				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="cancel"
						onClick={() => dispatch(prevChoiceStep(2))}
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

export default Experience;
