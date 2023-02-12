import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormInput, FormSelect } from "../../components";
import { useState } from "react";
import SelectDate from "../../components";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);
	const [value, setValue] = useState('');

	const handleRadioChange = (e) => {
		console.log("triggwered: ", e.target.value)
		setValue(e.target.value);
		props.handleChange(e);
		console.log('value: ', value);
		console.log('props: ', props.values.maxPrice);
		console.log("triggwered finish")

	}

	const ownerDatabases = [
		{ name: "Select from Durham profile" },
		{ name: "Select from Project Managers" },
		{ name: "Add New Owner’s Representative" },
	];

	const signDate = {
		...props,
		value: props.values.signDate,
		onChange: props.handleChange,
		name: 'signDate',
		error: props.errors.signDate,
		touched: props.touched.signDate,
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
							Change Order Directive
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

				<div className='mx-6 mb-12'>

					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<div className="flex flex-col gap-3">
							<h2 className="text-sm text-gray-600 font-semibold">
								Check the relevant option for the proposed basis of adjustment to the Contract Sum or Guaranteed Maximum Price
							</h2>
							<div className='flex gap-3 items-center'>
								<input
									id='default-radio-1'
									type='radio'
									value='Lump Sum increase'
									name='maxPrice'
									onChange={handleRadioChange}
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
								/>
								<label
									for='default-radio-1'
									className='text-base text-gray-900'
								>
									Lump Sum increase
								</label>
							</div>
							<div className='flex gap-3 items-center'>
								<input
									id='default-radio-2'
									type='radio'
									value='Unit Price'
									name='maxPrice'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									onChange={handleRadioChange}
								/>
								<label
									for='default-radio-2'
									className='text-base text-gray-900'
								>
									Unit Price
								</label>
							</div>
							<div className='flex gap-3 items-center'>
								<input
									id='default-radio-2'
									type='radio'
									value='Not to exceed'
									name='maxPrice'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									onChange={handleRadioChange}
								/>
								<label
									for='default-radio-3'
									className='text-base text-gray-900'
								>
									Not to exceed
								</label>
							</div>
							{props.errors.maxPrice && props.touched.maxPrice && <Error message={props.errors.maxPrice} />}
						</div>
						
							<FormInputContainer name={`Amount ${value}`}>
								<div className="flex gap-2">
									<div className="w-full">
										<FormInputPlain type={"number"} onChange={props.handleChange} name='amount' placeholder={"0.00"} />
										{props.errors.amount && props.touched.amount && <Error message={props.errors.amount} />}
									</div>
									{
										value == "Unit Price" &&
										<div className="w-full">
											<FormInputPlain type={"number"} onChange={props.handleChange} name='contractTimePerHour' placeholder={"per hour, day...."} />
											{props.errors.contractTimePerHour && props.touched.contractTimePerHour && <Error message={props.errors.contractTimePerHour} />}
										</div>
									}
								</div>
							</FormInputContainer>

							<FormInputContainer name="Enter the proposed contract time adjustments, if any">
								<FormInputPlain type={"number"} onChange={props.handleChange} name='contractTime' placeholder={"Number of Days"} />
								{props.errors.contractTime && props.touched.contractTime && <Error message={props.errors.contractTime} />}
							</FormInputContainer>

							<FormSelect
								value={props.values.ownerDatabase}
								name='Select ownerDatabase'
								id='ownerDatabase'
								error={props.errors.ownerDatabase}
								touched={props.touched.ownerDatabase}
								onChange={props.handleChange}>
								<option value=''>Add New ownerDatabase</option>
								{
									ownerDatabases?.map((ownerDatabase, index) => {
										return <option key={index} value={ownerDatabase.name}>{ownerDatabase.name}</option>
									})
								}
							</FormSelect>

							<FormInputContainer name="Enter Owner’s Representative ">
								<FormInputPlain type={"text"} onChange={props.handleChange} name='ownerName' placeholder={"Owner’s Representative Name"} />
								{props.errors.ownerName && props.touched.ownerName && <Error message={props.errors.ownerName} />}
							</FormInputContainer>

							<FormInputContainer name="When does the Owner's representative sign this form?">
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