import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate, { FormSelect, FormInputPlain, FormInput, FormTextArea } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";

import { useState } from "react"

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

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

	const approval = [
		{ value: 'Approved', label: 'Approved' },
		{ value: 'Not Approved', label: 'Not Approved' },
	]

	const database = [
		{ name: 'Approved', label: 'Approved' },
		{ value: 'Not Approved', label: 'Not Approved' },
	]

	return <div>
		<div
			className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
			onClick={(e) => e.stopPropagation()}
		>
			{/* Modal content */}

			<form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
				<div className='flex justify-between items-baseline mx-6'>
					<div>
						<h3 className='text-lg font-bold text-gray-900'>
							Change Order Form
						</h3>
						<p className='text-base text-gray-700'>
							Section II
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

				{/* form */}
				<div className='flex flex-col gap-2 mx-6 mb-12'>
					<div className="flex flex-col p-2 border rounded-lg border-[#D1D5DB]">
						<h2 className="font-semibold border-b pb-1 border-[#D1D5DB]">Enter the following changes to the contract time.</h2>
						<div className="flex flex-col pt-3 gap-2">
							<FormInputContainer name="Original Contract Substantial Completion Date">
								<SelectDate {...completionDate} />
								{props.errors.completionDate && props.touched.completionDate && <Error message={props.errors.completionDate} />}
							</FormInputContainer>

							<FormInputContainer name='Days Added by Prior Change Order(s)'>
								<FormInputPlain type={"text"} onChange={props.handleChange} name="priorChangeDays" placeholder={"Enter Number of Days"} />
								{props.errors.priorChangeDays && props.touched.priorChangeDays && <Error message={props.errors.priorChangeDays} />}
							</FormInputContainer>

							<FormInputContainer name='Number of Days Added by this Change Order '>
								<FormInputPlain type={"text"} onChange={props.handleChange} name="changeDays" placeholder={"Enter Number of Days"} />
								{props.errors.changeDays && props.touched.changeDays && <Error message={props.errors.changeDays} />}
							</FormInputContainer>
						</div>
					</div>

					<div className="flex flex-col w-full mb-2 bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
						<h2 className="text-sm font-medium">new contract completion date</h2>
						<span className="text-sm font-bold">14/08/22</span>
					</div>

					<FormInputContainer name="When does the project manager sign this form?">
						<SelectDate {...signDate} />
						{props.errors.signDate && props.touched.signDate && <Error message={props.errors.signDate} />}
					</FormInputContainer>

					<FormSelect
						value={props.values.approval}
						name="Does this form require the approval of the design consultant?"
						id='approval'
						error={props.errors.approval}
						touched={props.touched.approval}
						onChange={props.handleChange}>
						<option value=''>select</option>
						{
							approval?.map((approval, index) => {
								return <option key={index} value={approval.value}>{approval.value}</option>
							})
						}
					</FormSelect>

					<FieldArray
						name="persons"
						render={({ remove, push }) => (
							<>
								<div className="flex flex-col gap-2 mt-5">
									{props?.values?.persons.map((person, index) => (
										<Fragment key={index}>
											<div className="flex flex-col w-full">
												<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
													<h2>Item {index + 1}</h2>
													<button
														onClick={() => remove(index)}
														type='button'
														className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
														data-modal-toggle='small-modal'
													>
														<Close />
													</button>
												</div>
												<div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
													<FormSelect
														value={props.values.database}
														name="How does this change order's amount affect the original contract sum?"
														id={`persons[${index}].database`}
														error={props.errors.database}
														touched={props.touched.database}
														onChange={props.handleChange}>
														<option value=''>Select the Owner's representative</option>
														{
															database?.map((database, index) => {
																return <option key={index} value={database.name}>{database.name}</option>
															})
														}
													</FormSelect>
													<FormInputContainer name='name'>
														<FormInputPlain type={"text"} onChange={props.handleChange} name={`persons[${index}].name`} placeholder={"Enter name"} />
														{props.errors.name && props.touched.name && <Error message={props.errors.name} />}
													</FormInputContainer>
												</div>
											</div>
										</Fragment>
									))}
									<div className="mt-4">
										<button
											className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
											onClick={() => push({
												database: "",
												name: ""
											})}>
											ADD MORE ITEMS
										</button>
									</div>
								</div>
							</>
						)}>
					</FieldArray>
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
		</div >
	</div >
}


export default FormTwo;