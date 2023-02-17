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

const FormTwo = (props) => {
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
							Checklist II
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
					<div className='bg-[#2F5461] h-2.5 w-full'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.attachmentA}
							name="attachmentA"
							label="Attachment A: Lunsford Act"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.performanceBond}
							name="performanceBond"
							label="Performance Bond (contract > $300k)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.materialBond}
							name="materialBond"
							label="Labor and Materials Bond (contract > $300k)"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.liabilityInsurance}
							name="liabilityInsurance"
							label="Certificate of Liability Insurance with project name in 'Description'"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.dps}
							name="dps"
							label="If vendor is new to DPS, W-9 form"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.originals}
							name="originals"
							label="Three originals of all documents"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.singleSided}
							name="singleSided"
							label="Single-sided"
						/>

						<FormCheckBoxPlain
							onChange={props.handleChange}
							value={props.values.pagesInOrder}
							name="pagesInOrder"
							label="Pages in order, no staples"
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


export default FormTwo;