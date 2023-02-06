import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { FormInputPlain } from "../../../components";

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
		placeholder: 'Select date'
		//    prevPage
	}

	const creationDate = {
		...props,
		value: props.values.creationDate,
		onChange: props.handleChange,
		name: 'creationDate',
		error: props.errors.creationDate,
		touched: props.touched.creationDate,
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
							CCP Requisition - MODIFIED 4-22-22FM
						</h3>
						<p className='text-base text-gray-700'>
							Requisition Details
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

					<div className='mt-3 ml-2 '>

						<FormInputContainer name='What day is this requisition being made?'>
							<SelectDate {...creationDate} />
							{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
						</FormInputContainer>

						<div className="p-2 border rounded-lg border-[#D1D5DB] flex flex-col gap-2">
							<h2 className="font-bold">For the following items, enter the corresponding codes or numbers.</h2>
							<div className="w-full h-[1px] bg-[#D1D5DB]"></div>
							<div className="grid grid-cols-2 gap-2">
								<div className="flex flex-col">
									<FormInputPlain type={"text"} onChange={props.handleChange} name="budgetCode" placeholder={"Budget Code"} />
									{props.errors.budgetCode && props.touched.budgetCode && <Error message={props.errors.budgetCode} />}				
								</div>
								<div className="flex flex-col">
									<FormInputPlain type={"text"} onChange={props.handleChange} name="commodityCode" placeholder={"Commodity Code"} />
									{props.errors.commodityCode && props.touched.commodityCode && <Error message={props.errors.commodityCode} />}
								</div>
								<div className="flex flex-col">
									<FormInputPlain type={"text"} onChange={props.handleChange} name="requisitionOrder" placeholder={"Requisition/Work Order #"} />
									{props.errors.requisitionOrder && props.touched.requisitionOrder && <Error message={props.errors.requisitionOrder} />}
								</div>
								<div className="flex flex-col">
									<FormInputPlain type={"text"} onChange={props.handleChange} name="po" placeholder={"P.O. #"} />
									{props.errors.po && props.touched.po && <Error message={props.errors.po} />}
								</div>
							</div>
						</div>

						<div className="p-2 flex flex-col gap-2">
							<h2 className="font-bold">Select the appropriate boxes below.</h2>
							<div className="flex flex-col">
								<div className='flex items-center mb-5'>
									<input
										id='default-radio-1'
										type='radio'
										value='Best Price(Attached)'
										name='attached'
										onChange={props.handleChange}

										className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
									/>
									<label
										for='default-radio-1'
										className='ml-2 text-base text-gray-900'
									>
										Best Price(Attached)
									</label>
								</div>
								<div className='flex items-center'>
									<input
										id='default-radio-2'
										type='radio'
										value='Franchise/Sole Source(Attached)'
										name='attached'
										className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
										onChange={props.handleChange}

									/>
									<label
										for='default-radio-2'
										className='ml-2 text-base text-gray-900'
									>
										Franchise/Sole Source(Attached)
									</label>
								</div>
							</div>
							{props.errors.attached && props.touched.attached && <Error message={props.errors.attached} />}
						</div>

						<FormInputContainer name='When does the project sign sign the requisition?'>
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