import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { OverviewTextarea } from "../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormSelect, FormTextArea } from "../../components";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);

	const ownerRepDate = {
		...props,
		value: props.values.ownerRepDate,
		onChange: props.handleChange,
		name: 'ownerRepDate',
		error: props.errors.ownerRepDate,
		touched: props.touched.ownerRepDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const orderDate = {
		...props,
		value: props.values.orderDate,
		onChange: props.handleChange,
		name: 'orderDate',
		error: props.errors.orderDate,
		touched: props.touched.orderDate,
		placeholder: 'Select date'
		//    prevPage
	}

	const one = {
		value: props.values.one,
		onChange: props.handleChange,
		error: props.errors.one,
		touched: props.touched.one,
		name: 'one',
	}
	const two = {
		value: props.values.one,
		onChange: props.handleChange,
		error: props.errors.one,
		touched: props.touched.one,
		name: 'one',
	}

	const ownerRepDBs = [
		{ name: 'Select from Durham profile' },
		{ name: 'Select from Project Managers' },
		{ name: 'Add New Owner’s Representative' }
	];

	const ownerRepNames = [
		{ name: 'name 1'},
		{ name: 'name 2'},
		{ name: 'name 3'},
		{ name: 'name 4'},
		{ name: 'name 5'}
	]

	const checkBox = [
		{
			id: 1,
			numb: '1',
			value: "Best Price(Attached)",
		},
		{
			id: 2,
			numb: '2',
			value: "Franchise/Sole Source(Attached)",
		}
	]

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
						Design Phase Change Order
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
					<FormInputContainer name='Enter the Change order Number'>
							<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Enter the Change order Number"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</FormInputContainer>
					<FormInputContainer name="On what day are you creating this form?">
							<SelectDate {...ownerRepDate} />
							{props.errors.ownerRepDate && props.touched.ownerRepDate && <Error message={props.errors.ownerRepDate} />}
						</FormInputContainer>

						<FormInputContainer name='Enter the File Number'>
							<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Enter the File Number"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</FormInputContainer>

						<div>
							<FormTextArea type={"text"} onChange={props.handleChange} name="Enter the description of the change" />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</div>

						<FormInputContainer name='Enter the following amounts.'>
							<div className="flex gap-2">
							<div className="flex-1">
						<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Original Contract Sum"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</div>
						<div className="flex-1">

							<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Net Sum of Prior Change Order(s)"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</div>
							</div>
						</FormInputContainer>
						
						<FormSelect
							value={props.values.ownerRepName}
							name="How does this change order's amount affect the original contract sum?"
							id='ownerRepName'
							error={props.errors.ownerRepName}
							touched={props.touched.ownerRepName}
							onChange={props.handleChange}>
							<option value=''>Select option</option>
							{
								ownerRepNames?.map((ownerRepName, index) => {
									return <option key={index} value={ownerRepName.name}>{ownerRepName.name}</option>
								})
							}
						</FormSelect>
						
						<FormInputContainer name='Amount'>
							<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Enter Amount"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</FormInputContainer>

							<div className="rounded p-3 bg-gray-200">
							<h3>New Contract Sum</h3>
							<p>$0.0</p>
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