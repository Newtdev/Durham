import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const FormOne = (props) => {
	const dispatch = useDispatch();
	// const [index,setIndex]=useState(0)

	const userType = {
		value: props.values.userType,
		onChange: props.handleChange,
		id: "userType",
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
						<p className="text-base text-gray-700">Select use type</p>
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
					<div className="bg-[#2F5461] h-2.5 w-[33.3%]"></div>
				</div>
				<div className="mx-6 mb-12">
					<div className=" mt-3 ml-2">
						<FormInputContainer name="Select Use Type">
							<FormSelect {...userType}>
								<option value="">Select option</option>
								<option value="Single Use">
									Single Use(To issue the affidavit for a single capital
									improvement)
								</option>
								<option value="Blanket Use">
									Blanket Use(To execute a blanket affidavit for capital
									improvements)
								</option>
								<option value="Both">Both</option>
							</FormSelect>

							{props.errors.userType && props.touched.userType && (
								<Error message={props.errors.userType} />
							)}
						</FormInputContainer>
						{/* {props.values.userType === "Single Use"&&} */}
					</div>
				</div>
				{/* Buttons */}
				<div className="flex justify-end gap-8 pr-4 ">
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
						disabled={
							(props?.disabled && true, props?.disabled && "cursor-not-allowed")
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormOne;
