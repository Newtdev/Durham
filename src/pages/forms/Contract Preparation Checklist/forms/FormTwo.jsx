import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormCheckBoxPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FieldArray } from "formik";
import React, { Fragment } from "react";
import { FormInputPlain, FormInput } from "../../components";

const FormThree = (props) => {
	const dispatch = useDispatch()

	return <div>
		<div
			className='relative w-full h-screen max-w-md mx-auto md:h-auto mt-14'
			onClick={(e) => e.stopPropagation()}
		>
			{/* Modal content */}
			<form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
				<div className='flex items-baseline justify-between mx-6'>
					<div>
						<h3 className='text-lg font-bold text-gray-900'>
							Contract Preparation Checklist
						</h3>
						<p className='text-base text-gray-700'>
							Checklist I
						</p>
					</div>
					<button
						onClick={() => dispatch(closeModal())}
						type='button'
						className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
						data-modal-toggle='small-modal'
					>
						<Close />
					</button>
				</div>

				{/* Progress */}
				<div className='w-full bg-[#89A5AF] h-2.5 my-4'>
					<div className='bg-[#2F5461] h-2.5 w-2/3'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.mostRecent}
							name="mostRecent"
							label="Most recent template used"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.bidDocument}
							name="bidDocument"
							label="Bid documents for ALL bidders (1 copy)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.projectNumber}
							name="projectNumber"
							label="Project number assigned by /confirmed with Business Manager"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.projectTitle}
							name="projectTitle"
							label="Project title=County title. If 'Renovations', specify type of consulting"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.exhibit1}
							name="exhibit1"
							label="Exhibit 1: Scope of Services (Consultant under $90k)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.exhibit2}
							name="exhibit2"
							label="Exhibit 2: Hourly Rate Schedule (Consultant under $90k, locally funded)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.exhibitA}
							name="exhibitA"
							label="Exhibit A: DPS Management Plan (Consultant over $90k)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.exhibitB}
							name="exhibitB"
							label="Exhibit B: Hourly Rate Schedule (Consultant over $90k, locally funded)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.exhibitC}
							name="exhibitC"
							label="Exhibit C: Closeout Documentation (Consultant over $90K)"
						/>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-8 pr-4'>
					<ButtonWhiteBG width='w-[100px]' name='Cancel' onClick={() => dispatch(closeModal())} />
					<DashboardButton
						hidden
						name='NEXT'
						type='submit'
						width='w-[77px]'
					/>
				</div>
			</form>
		</div>
	</div>
}


export default FormThree;