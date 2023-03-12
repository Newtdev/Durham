// import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { SelectDate } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { FormSelect } from "../Components";
import { getList, prevChoiceStep } from "../reducer";

const ConferenceBid = (props) => {
	const states = useSelector(getList);

	const dispatch = useDispatch();

	const conferenceDate = {
		...props,
		value: props.values.conferenceDate,
		onChange: props.handleChange,
		name: "conferenceDate",
		placeholder: "Conference Date",
	};
	const conferenceTime = {
		...props,
		value: props.values.conferenceTime,
		onChange: props.handleChange,
		name: "conferenceTime",
		placeholder: "Conference Time",
	};
	const conferenceAddress = {
		value: props.values.conferenceAddress,
		onChange: props.handleChange,
		name: "conferenceAddress",
		placeholder: "Street",
	};
	const conferenceState = {
		value: props.values.conferenceState,
		name: "conferenceState",
		onChange: props.handleChange,
	};
	const conferenceCity = {
		value: props.values.conferenceCity,
		onChange: props.handleChange,
		name: "conferenceCity",
	};

	const conferenceZipCode = {
		value: props.values.conferenceZipCode,
		name: "conferenceZipCode",
		onChange: props.handleChange,
	};

	function CheckState() {
		if (!props.values.conferenceState) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state.name === props.values.conferenceState
		);

		return Object.keys(stat.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckZipCode() {
		if (!props.values.conferenceCity) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state.name === props.values.conferenceState
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode.cities[props.values.conferenceCity]?.map(
			(zipcode, index) => {
				return (
					<option key={index} value={zipcode}>
						{zipcode}
					</option>
				);
			}
		);
	}

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
						<p className="text-base text-gray-700">
							Pre-bid conference details
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
					<div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
				</div>
				<div className="px-4">
					<div className="grid grid-cols-2 gap-x-4">
						<FormInputContainer name="Conference Date">
							<SelectDate {...conferenceDate} />
							{props.errors.conferenceDate && props.touched.conferenceDate && (
								<Error message={props.errors.conferenceDate} />
							)}
						</FormInputContainer>
						<FormInputContainer name="Conference Time">
							<SelectTime {...conferenceTime} />
							{props.errors.conferenceTime && props.touched.conferenceTime && (
								<Error message={props.errors.conferenceTime} />
							)}
						</FormInputContainer>
					</div>

					<div className="flex flex-col mb-5">
						<label
							for="default-radio-1"
							className="text-base text-gray-900 mb-1">
							Address
						</label>
						<input
							{...conferenceAddress}
							className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
						/>
						{props.errors.conferenceAddress &&
							props.touched.conferenceAddress && (
								<Error message={props.errors.conferenceAddress} />
							)}
					</div>
					<div className="grid grid-cols-3 gap-x-4">
						<FormInputContainer name="">
							<FormSelect {...conferenceState}>
								<option value="">Select State</option>
								{Object.entries(states).map((cur, index) => {
									return (
										<option key={index} value={cur[1].name}>
											{cur[1].name}
										</option>
									);
								})}
							</FormSelect>
							{props.errors.conferenceState &&
								props.touched.conferenceState && (
									<Error message={props.errors.conferenceState} />
								)}
						</FormInputContainer>

						<FormInputContainer name="">
							<FormSelect {...conferenceCity}>
								<option value="">Select City</option>
								{CheckState()}
							</FormSelect>

							{props.errors.conferenceCity && props.touched.conferenceCity && (
								<Error message={props.errors.conferenceCity} />
							)}
						</FormInputContainer>

						<FormInputContainer name="">
							<FormSelect {...conferenceZipCode}>
								<option value="">Select zipcode</option>
								{CheckZipCode()}
							</FormSelect>

							{props.errors.conferenceZipCode &&
								props.touched.conferenceZipCode && (
									<Error message={props.errors.conferenceZipCode} />
								)}
						</FormInputContainer>
					</div>

					<FormInputContainer name="The presence of the prime bidders is:">
						<div className=" mt-3 ml-2">
							<div className="flex items-center mb-5">
								<input
									id="default-radio-1"
									type="radio"
									value="Mandatory"
									checked={
										props?.values?.presenceOfBiders === "Mandatory"
											? true
											: false
									}
									name="presenceOfBiders"
									onChange={props.handleChange}
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Mandatory{" "}
								</label>
							</div>
							<div className="flex items-center mb-5">
								<input
									id="default-radio-1"
									type="radio"
									value="Optional"
									checked={
										props?.values?.presenceOfBiders === "Optional"
											? true
											: false
									}
									name="presenceOfBiders"
									onChange={props.handleChange}
									className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
								/>
								<label
									for="default-radio-1"
									className="ml-2 text-base text-gray-900">
									Optional
								</label>
							</div>
						</div>
						{props.errors.presenceOfBiders &&
							props.touched.presenceOfBiders && (
								<Error message={props.errors.presenceOfBiders} />
							)}
					</FormInputContainer>
				</div>

				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="cancel"
						onClick={() => dispatch(prevChoiceStep(0))}
					/>
					<DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
				</div>
			</form>
		</div>
	);
};

export default ConferenceBid;
