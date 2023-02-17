import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain } from "../../components";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);

	const schematicCompletionDate = {
		...props,
		value: props.values.schematicCompletionDate,
		onChange: props.handleChange,
		name: 'schematicCompletionDate',
		error: props.errors.schematicCompletionDate,
		touched: props.touched.schematicCompletionDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const constructionCompletionDate = {
		...props,
		value: props.values.constructionCompletionDate,
		onChange: props.handleChange,
		name: 'constructionCompletionDate',
		error: props.errors.constructionCompletionDate,
		touched: props.touched.constructionCompletionDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const noticeDate = {
		...props,
		value: props.values.noticeDate,
		onChange: props.handleChange,
		name: 'noticeDate',
		error: props.errors.noticeDate,
		touched: props.touched.noticeDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const substantialCompletionDate = {
		...props,
		value: props.values.substantialCompletionDate,
		onChange: props.handleChange,
		name: 'substantialCompletionDate',
		error: props.errors.substantialCompletionDate,
		touched: props.touched.substantialCompletionDate,
		placeholder: 'Select date'
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
							Owner and Contractor Agreement Form (more $500,000)
						</h3>
						<p className='text-base text-gray-700'>
							Enter the ensuing construction benchmarks.
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
					<div className='bg-[#2F5461] h-2.5 w-2/6'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormInputContainer name='Completion of schematic design'>
							<SelectDate {...schematicCompletionDate} />
							{props.errors.schematicCompletionDate && props.touched.schematicCompletionDate && <Error message={props.errors.schematicCompletionDate} />}
						</FormInputContainer>

						<FormInputContainer name='Completion of construction documents'>
							<SelectDate {...constructionCompletionDate} />
							{props.errors.constructionCompletionDate && props.touched.constructionCompletionDate && <Error message={props.errors.constructionCompletionDate} />}
						</FormInputContainer>

						<FormInputContainer name='Notice to Proceed date'>
							<SelectDate {...noticeDate} />
							{props.errors.noticeDate && props.touched.noticeDate && <Error message={props.errors.noticeDate} />}
						</FormInputContainer>

						<FormInputContainer name='Substantial completion date'>
							<SelectDate {...substantialCompletionDate} />
							{props.errors.substantialCompletionDate && props.touched.substantialCompletionDate && <Error message={props.errors.substantialCompletionDate} />}
						</FormInputContainer>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-8 pr-4'>
					<ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(prevStep(1))} />
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