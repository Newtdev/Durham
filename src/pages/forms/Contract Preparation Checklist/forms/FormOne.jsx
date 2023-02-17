import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain } from "../../components";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);

	const signDate = {
		...props,
		value: props.values.signDate,
		onChange: props.handleChange,
		name: 'signDate',
		error: props.errors.signDate,
		touched: props.touched.signDate,
		placeholder: 'Select Date'
		//    prevPage
	}

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
							General Information
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
					<div className='bg-[#2F5461] h-2.5 w-1/3'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormInputContainer name="Enter the contract type">
							<FormInputPlain type={"text"} onChange={props.handleChange} name='contractType' placeholder="Enter the contract type'Project' or 'Work'" />
							{props.errors.contractType && props.touched.contractType && <Error message={props.errors.contractType} />}
						</FormInputContainer>
						
						<FormInputContainer name='When does the project manager sign this document?'>
							<SelectDate {...signDate} />
							{props.errors.signDate && props.touched.signDate && <Error message={props.errors.signDate} />}
						</FormInputContainer>
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


export default FormOne;