import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const FormTwo = (props) => {
	const dispatch = useDispatch();

	const boxA = {
		value: props.values.boxA,
		onChange: props.handleChange,
		id: "boxA",
	};

	return (
		<div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
			<form
				className="relative w-[600px] bg-white rounded-lg shadow py-4 "
				onSubmit={props.handleSubmit}>
				<div className="flex justify-between items-baseline mx-6">
					<div>
						<h3 className="text-lg font-bold text-gray-900">
							E-589CI Affidavit of Capital Improvement
						</h3>
						<p className="text-base text-gray-700">Box A</p>
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
				<hr />
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<FormInputContainer name="Pick a participant for Box A">
							<FormSelect {...boxA}>
								<option value="">Select option</option>
								<option value="Owner">Owner</option>
								<option value="Lessee/Tenant">
									Lessee/Tenant/Real Property Contractor
								</option>
							</FormSelect>

							{props.errors.boxA && props.touched.boxA && (
								<Error message={props.errors.boxA} />
							)}
						</FormInputContainer>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4">
					<ButtonWhiteBG
						width="w-[100px]"
						name="Cancel"
						onClick={() => dispatch(prevChoiceStep(1))}
					/>
					<DashboardButton
						hidden
						name="NEXT"
						type="submit"
						width="w-[77px]"
						disabled={
							(props?.values?.boxA ? false : true,
							props?.values?.boxA ? null : "cursor-not-allowed")
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormTwo;
