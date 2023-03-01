import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

	function CheckState() {
		if (!props?.values?.state) {
			return;
		}
		let stat = Object.values(states)?.find(
			(state) => state?.name === props?.values?.state
		);
		if (!stat) {
			return;
		}

		return Object.keys(stat?.cities)?.map((cur, id) => {
			return (
				<option key={id} value={cur}>
					{cur}
				</option>
			);
		});
	}

	function CheckZipCode() {
		if (!props?.values?.city) {
			return;
		}
		const city = Object.values(states)?.filter(
			(state) => state?.name === props?.values?.state
		);
		const zipcode = city?.find((cities) => cities);
		return zipcode?.cities[props?.values?.city]?.map((zipcode, index) => {
			return (
				<option key={index} value={zipcode}>
					{zipcode}
				</option>
			);
		});
	}

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
								DPS Short Form Engineer - Engineering Contract
							</h3>
							<p className="text-base text-gray-700">
								Owner’s postal address where billing information should be sent
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
						<div className="bg-[#2F5461] h-2.5 w-full"></div>
					</div>

					<div className="mx-6 mb-12">
						<div className="mt-3 ml-2 flex flex-col gap-3 ">
							<FormInputContainer name="Address">
								<div className="flex flex-col">
									<FormInputPlain
										type={"text"}
										value={props?.address}
										onChange={props.handleChange}
										name="address"
										placeholder={"Address"}
									/>
									{props.errors.address && props.touched.address && (
										<Error message={props.errors.address} />
									)}
								</div>
								<div className="flex gap-2 justify-center items-end">
									<FormSelect
										value={props.values?.vendor}
										id="state"
										error={props.errors?.state}
										touched={props.touched?.state}
										onChange={props.handleChange}>
										<option value="">Select State</option>
										{!states
											? null
											: Object.entries(states).map((cur, index) => {
													return (
														<option key={index} value={cur[1].name}>
															{cur[1].name}
														</option>
													);
											  })}
									</FormSelect>

									<FormSelect
										value={props.values?.vendor}
										id="city"
										error={props.errors?.city}
										touched={props.touched?.city}
										onChange={props.handleChange}>
										<option value="">Select City</option>
										{CheckState()}
									</FormSelect>

									<FormSelect
										id="zipCode"
										value={props.values?.zipCode}
										error={props.errors?.zipCode}
										touched={props.touched.zipCode}
										onChange={props.handleChange}>
										<option value="">Select zipcode</option>
										{CheckZipCode()}
									</FormSelect>
								</div>
							</FormInputContainer>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-8 pr-4">
						<ButtonWhiteBG
							width="w-[100px]"
							name="Previous"
							onClick={() => dispatch(prevStep(1))}
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

export default FormTwo;
