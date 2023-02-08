import { useDispatch, } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";
import { FormSelect, FormInputPlain } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { FieldArray } from "formik";
import { Fragment } from "react";
import { useState } from "react";

const FormThree = (props) => {
	const dispatch = useDispatch();

	const constructionAmount = {
		onChange: (e) => {
			if (isNaN(e.target.value)) {
				return '';
			} else {
				// return e.target.value
				props.setFieldValue('constructionAmount', e.target.value)
			}
		},
		name: 'constructionAmount',
		error: props.errors.constructionAmount,
		value: props.values.constructionAmount,
		touched: props.touched.constructionAmount,
		placeholder: 'Amount'
		//    prevPage
	}
	const procurementAmount = {
		onChange: (e) => {
			if (isNaN(e.target.value)) {
				return '';
			} else {
				// return e.target.value
				props.setFieldValue('procurementAmount', e.target.value)
			}
		},
		name: 'procurementAmount',
		error: props.errors.procurementAmount,
		value: props.values.procurementAmount,
		touched: props.touched.procurementAmount,
		placeholder: 'Amount'
		//    prevPage
	}


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
							CCP Requisition - MODIFIED 4-22-22FM
						</h3>
						<p className='text-base text-gray-700'>
							Order information
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
					<div className='bg-[#2F5461] h-2.5 w-[100%]'></div>
				</div>

				<div className='mx-6 mb-12 flex flex-col gap-2'>
					<FieldArray
						name="items"
						render={({ remove, push }) => (
							<>
								<div className="mt-5">
									{props?.values?.items.map((unit, index) => (
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
													<FormInputContainer name='Stock number'>
														<FormInputPlain type={"text"} onChange={props.handleChange} name={`items[${index}].stockNumber`} placeholder={"Stock Number"} />
														{props.errors.stockNumber && props.touched.stockNumber && <Error message={props.errors.stockNumber} />}
													</FormInputContainer>
													<FormInputContainer name='Description'>
														<FormInputPlain type={"text"} onChange={props.handleChange} name={`items[${index}].description`} placeholder={"Enter Description"} />
														{props.errors.description && props.touched.description && <Error message={props.errors.description} />}
													</FormInputContainer>
													<FormInputContainer name='Quantity of Units Being Ordered'>
														<div>
															<FormInputPlain type={"text"} onChange={props.handleChange} name={`items[${index}].quantity`} placeholder={"Quantity of Units Being Ordered"} />
															{props.errors.quantity && props.touched.quantity && <Error message={props.errors.quantity} />}
														</div>
													</FormInputContainer>
													<div className="flex justify-center items-center gap-2 w-full">
														<div className="flex w-full">
															<FormInputPlain type={"text"} onChange={props.handleChange} name={`items[${index}].unit`} placeholder={"Unit of Measure"} />
															{props.errors.unit && props.touched.unit && <Error message={props.errors.unit} />}
														</div>
														<div className="flex w-full">
															<FormInputPlain type={"text"} onChange={props.handleChange} name={`items[${index}].unitPrice`} placeholder={"Each Unit Price"} />
															{props.errors.unitPrice && props.touched.unitPrice && <Error message={props.errors.unitPrice} />}
														</div>
													</div>
													<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
														<h2 className="text-sm font-medium">Total Cost</h2>
														<span className="text-sm font-bold">$0.0</span>
													</div>
												</div>
											</div>
										</Fragment>
									))}
									<div className="mt-4">
										<button
											className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
											onClick={() => push({
												stockNumber: "",
												description: "",
												quantity: "",
												unit: "",
												unitPrice: "",
											})}>
											ADD MORE ITEMS
										</button>
									</div>
								</div>
							</>
						)}>
					</FieldArray>

					<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
						<h2 className="text-sm font-medium">Sub Total</h2>
						<span className="text-sm font-bold">$0.0</span>
					</div>
					<FormInputContainer name='Enter the Shipping cost, if applicable.'>
						<FormInputPlain type={"text"} onChange={props.handleChange} name="shippingCost" placeholder={"@ 0.00"} />
						{props.errors.shippingCost && props.touched.shippingCost && <Error message={props.errors.shippingCost} />}
					</FormInputContainer>
					<FormInputContainer name='Is this order subject to sales tax?'>
						<FormSelect
							value={props.values.salesTax}
							name='Select salesTax'
							id='salesTax'
							error={props.errors.salesTax}
							touched={props.touched.salesTax}
							onChange={props.handleChange}>
							<option value='Yes'>Yes</option>
							<option value='No'>No</option>
						</FormSelect>
					</FormInputContainer>
					<FormInputContainer name='Enter the Shipping cost, if applicable.'>
						<FormInputPlain type={"text"} onChange={props.handleChange} name="salesTax" placeholder={"@ 0.00"} />
						{props.errors.salesTax && props.touched.salesTax && <Error message={props.errors.salesTax} />}
					</FormInputContainer>
					<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
						<h2 className="text-sm font-medium">Grand Total</h2>
						<span className="text-sm font-bold">$0.0</span>
					</div>

				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-8 pr-4'>
					<ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(prevStep(2))} />
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