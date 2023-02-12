import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormInput, FormSelect } from "../../components";
import { useState } from "react";
import { FormTextArea } from "../../components";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);

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
							Determination of Apparent Low Bidder - Contractor
						</h3>
						<p className='text-base text-gray-700'>
							Section I
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

				<div className='mx-6 mb-12 flex flex-col gap-2'>
					<h2 className="border-b border-[#E5E7EB] pb-1 font-semibold">Type in the Liquidated Damages amounts.</h2>

					<div className="flex gap-2">
						<FormInputContainer name='Substantial completion'>
							<FormInput type={"number"} onChange={props.handleChange} name="substantialCompletion" placeholder={"Enter Amount"} />
							{props.errors.substantialCompletion && props.touched.substantialCompletion && <Error message={props.errors.substantialCompletion} />}
						</FormInputContainer>

						<FormInputContainer name='Final completion '>
							<FormInput type={"number"} onChange={props.handleChange} name="finalCompletion" placeholder={"Enter Amount"} />
							{props.errors.finalCompletion && props.touched.finalCompletion && <Error message={props.errors.finalCompletion} />}
						</FormInputContainer>
					</div>

					<FormInputContainer name='Enter the amount that the contractor will pay the design consultant (for additional services or dispute resolutions).'>
						<FormInput type={"number"} onChange={props.handleChange} name="amount" placeholder={"Rate per hour"} />
						{props.errors.amount && props.touched.amount && <Error message={props.errors.amount} />}
					</FormInputContainer>
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


export default FormOne;