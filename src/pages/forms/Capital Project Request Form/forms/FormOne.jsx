import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormSelect, FormInputPlain } from "../../components";
import { useState } from "react";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);
	const [value, setValue] = useState('')

	const startDate = {
		...props,
		value: props.values.startDate,
		onChange: props.handleChange,
		name: 'startDate',
		error: props.errors.startDate,
		touched: props.touched.startDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const completionDate = {
		...props,
		value: props.values.completionDate,
		onChange: props.handleChange,
		name: 'completionDate',
		error: props.errors.completionDate,
		touched: props.touched.completionDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const handleRadioChange = (e) => {
		console.log('o value: ', e.target.value)
		setValue(e.target.value);
		console.log('value: ', value)
		// props.handleChange(e);

	}

	const handleChange = (e) => {
		console.log('o value: ', e.target.value)
		setValue(e.target.value);
		console.log('value: ', value)
		props.handleChange(e);

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
							Capital Project Request Form
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
					<div className='bg-[#2F5461] h-2.5 w-1/2'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormSelect
							value={props.values.pointOfContact}
							name="Who is the project's point of contact(s)?"
							id='pointOfContact'
							error={props.errors.pointOfContact}
							touched={props.touched.pointOfContact}
							onChange={props.handleChange}>
							<option value='contact 1'>contact 1</option>
							<option value='contact 2'>contact 2</option>
						</FormSelect>

						<FormInputContainer name='Enter the estimated dates for the following project stages.'>
							<div className="flex gap-2">
								<div className="flex w-full">
									<SelectDate {...startDate} />
									{props.errors.startDate && props.touched.startDate && <Error message={props.errors.startDate} />}
								</div>

								<div className="flex w-full">
									<SelectDate {...completionDate} />
									{props.errors.completionDate && props.touched.completionDate && <Error message={props.errors.completionDate} />}
								</div>
							</div>
						</FormInputContainer>


						<div className="p-2 flex flex-col gap-2">
							<h2 className="font-bold">Check the relevant box for the funding source</h2>
							<div className="flex flex-col gap-3">
								<div className='flex items-center'>
									<input
										id='default-radio-2'
										type='radio'
										value='Capital Outlay'
										name='fundingSource'
										className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
										onChange={handleChange}

									/>
									<label
										for='default-radio-2'
										className='ml-2 text-base text-gray-900'
									>
										Capital Outlay
									</label>
								</div>
								<div className='flex items-center'>
									<input
										id='default-radio-2'
										type='radio'
										value='Other'
										name='fundingSource'
										className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
										onChange={handleRadioChange}

									/>
									<label
										for='default-radio-2'
										className='ml-2 text-base text-gray-900'
									>
										Other
									</label>
								</div>
								{
									value == "Other" && 
									<div className="">
										<FormInputPlain type={"text"} onChange={props.handleChange} name='fundingSource' placeholder={"Enter Funding Source"} />
										{props.errors.fundingSource && props.touched.fundingSource && <Error message={props.errors.fundingSource} />}
									</div>
								}

							</div>
							{props.errors.fundingSource && props.touched.fundingSource && <Error message={props.errors.fundingSource} />}
						</div>
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