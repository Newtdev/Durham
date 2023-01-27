import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { OverviewTextarea } from "../../../Dashboard/Overview-dashboard/OverviewComponents";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormSelect } from "../../components";

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
							MWBE Form for Bids
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
							value={props.values.ownerRepDB}
							name="Select the Owner's representative Database"
							id='ownerRepDB'
							error={props.errors.ownerRepDB}
							touched={props.touched.ownerRepDB}
							onChange={props.handleChange}>
							<option value=''>Select the Owner's representative Database</option>
							{
								ownerRepDBs?.map((ownerRepDB, index) => {
									return <option key={index} value={ownerRepDB.name}>{ownerRepDB.name}</option>
								})
							}
						</FormSelect>

						<FormSelect
							value={props.values.ownerRepName}
							name="Select the Owner's representative"
							id='ownerRepName'
							error={props.errors.ownerRepName}
							touched={props.touched.ownerRepName}
							onChange={props.handleChange}>
							<option value=''>Select the Owner's representative</option>
							{
								ownerRepNames?.map((ownerRepName, index) => {
									return <option key={index} value={ownerRepName.name}>{ownerRepName.name}</option>
								})
							}
						</FormSelect>
						
						<FormInputContainer name='Owner’s Representative Title'>
							<FormInputPlain type={"text"} onChange={props.handleChange} name="ownerRepTitle" placeholder={"Enter Owner’s Representative Title"} />
							{props.errors.ownerRepTitle && props.touched.ownerRepTitle && <Error message={props.errors.ownerRepTitle} />}
						</FormInputContainer>

						<FormInputContainer name="When will the Owner's representative sign this Form?">
							<SelectDate {...ownerRepDate} />
							{props.errors.ownerRepDate && props.touched.ownerRepDate && <Error message={props.errors.ownerRepDate} />}
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