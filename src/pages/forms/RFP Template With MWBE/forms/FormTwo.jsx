import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";
import SelectDate from "../../components";

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

	function CheckState(index) {
		if (!props.values.location[index].projectState) {
			return;
		}
		let stat = Object.values(states)?.find((state) => state.name === props.values.location[index].projectState);

		return Object.keys(stat.cities)?.map((cur, id) => {

			return <option key={id} value={cur}>{cur}</option>
		})
	};

	function CheckZipCode(index) {
		if (!props.values.location[index].projectCity) {
			return;
		}
		const city = Object.values(states)?.filter((state) => state.name === props.values.location[index].projectState)
		const zipcode = city?.find((cities) => cities);
		return zipcode.cities[props.values.location[index].projectCity]?.map((zipcode, index) => {
			return <option key={index} value={zipcode}>{zipcode}</option>
		})
	};

	const items = [
		{ name: 'item 1' },
		{ name: 'item 2' },
		{ name: 'item 3' },
		{ name: 'item 4' },
		{ name: 'item 5' },
		{ name: 'item 6' }
	];

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

	const state = [
		{ name: 'Alabama' },
		{ name: 'Alaska' },
		{ name: 'Arizona' },
		{ name: 'Arkansas' },
		{ name: 'California' },
		{ name: 'Colorado' }
	];

	const city = [
		{ name: 'New York' },
		{ name: 'Los Angeles' },
		{ name: 'Chicago' },
		{ name: 'Houston' },
		{ name: 'Philadelphia' },
		{ name: 'Phoenix' }
	];

	const location = [
		{ name: 'New York' },
		{ name: 'Los Angeles' },
		{ name: 'Chicago' },
		{ name: 'Houston' },
		{ name: 'Philadelphia' },
		{ name: 'Phoenix' }
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
							RFP Template with MWBE
						</h3>
						<p className='text-base text-gray-700'>
							Proposal Schedule details
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
					<div className='bg-[#2F5461] h-2.5 w-2/3'></div>
				</div>

				{/* form */}
				<div className='flex flex-col mx-6 mb-12'>
					<FormInputContainer name='What day is this requisition being made?'>
						<SelectDate {...creationDate} />
						{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
					</FormInputContainer>

					<FormInputContainer name='Enter the Proposal Due Date and Time'>
						<div className="flex gap-2 justify-center items-end">
							<div className="">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
							</div>
							<FormSelect
								value={props.values.vendor}
								name=''
								id='vendor'
								error={props.errors.vendor}
								touched={props.touched.vendor}
								onChange={props.handleChange}>
								<option value=''>Add New Vendor</option>
								{
									items?.map((vendor, index) => {
										return <option key={index} value={vendor.name}>{vendor.name}</option>
									})
								}
							</FormSelect>
						</div>
					</FormInputContainer>

					<FormInputContainer name='By what date and time must the questions be submitted?'>
						<div className="flex gap-2 justify-center items-end">
							<div className="">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
							</div>
							<FormSelect
								value={props.values.vendor}
								name=''
								id='vendor'
								error={props.errors.vendor}
								touched={props.touched.vendor}
								onChange={props.handleChange}>
								<option value=''>Add New Vendor</option>
								{
									items?.map((vendor, index) => {
										return <option key={index} value={vendor.name}>{vendor.name}</option>
									})
								}
							</FormSelect>
						</div>
					</FormInputContainer>

					<FormInputContainer name='When will the answers to the questions be provided?'>
						<div className="flex gap-2 justify-center items-end">
							<div className="">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
							</div>
							<FormSelect
								value={props.values.vendor}
								name=''
								id='vendor'
								error={props.errors.vendor}
								touched={props.touched.vendor}
								onChange={props.handleChange}>
								<option value=''>Add New Vendor</option>
								{
									items?.map((vendor, index) => {
										return <option key={index} value={vendor.name}>{vendor.name}</option>
									})
								}
							</FormSelect>
						</div>
					</FormInputContainer>

					<FormInputContainer name='By what date and time must the sealed and online(IPS) proposals be submitted?'>
						<div className="flex gap-2 justify-center items-end">
							<div className="">
								<SelectDate {...creationDate} />
								{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
							</div>
							<FormSelect
								value={props.values.vendor}
								name=''
								id='vendor'
								error={props.errors.vendor}
								touched={props.touched.vendor}
								onChange={props.handleChange}>
								<option value=''>Add New Vendor</option>
								{
									items?.map((vendor, index) => {
										return <option key={index} value={vendor.name}>{vendor.name}</option>
									})
								}
							</FormSelect>
						</div>
					</FormInputContainer>

					<div className="flex flex-col w-full">
						<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
							<h2>Enter the Pre-Bid Meeting details</h2>
						</div>
						<div className="flex flex-col px-3 py-3 border border-[#9CA3AF]">
							<FormInputContainer name='Location'>
								<FormInputPlain type={"text"} onChange={props.handleChange} name='stockNumber' placeholder={"Street"} />
								{props.errors.stockNumber && props.touched.stockNumber && <Error message={props.errors.stockNumber} />}
							</FormInputContainer>

							<div className="flex gap-2 justify-center items-end justify-center items-end">
								<FormSelect
									value={props.values.vendor}
									id='city'
									error={props.errors.city}
									touched={props.touched.city}
									onChange={props.handleChange}>
									<option value=''>Select City</option>
									{
										city?.map((city, index) => {
											return <option key={index} value={city.name}>{city.name}</option>
										})
									}
								</FormSelect>
								<FormSelect
									value={props.values.vendor}
									id='state'
									error={props.errors.state}
									touched={props.touched.state}
									onChange={props.handleChange}>
									<option value=''>Select State</option>
									{
										state?.map((state, index) => {
											return <option key={index} value={state.name}>{state.name}</option>
										})
									}
								</FormSelect>
								<div className="flex flex-col w-full">
									<FormInputPlain type={"text"} onChange={props.handleChange} name="zipCode" placeholder={"Zip Code"} />
									{props.errors.zipCode && props.touched.zipCode && <Error message={props.errors.zipCode} />}
								</div>
							</div>

							<div className="flex gap-2 justify-center items-end">
								<div className="">
									<SelectDate {...creationDate} />
									{props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
								</div>
								<FormSelect
									value={props.values.vendor}
									name=''
									id='vendor'
									error={props.errors.vendor}
									touched={props.touched.vendor}
									onChange={props.handleChange}>
									<option value=''>Add New Vendor</option>
									{
										items?.map((vendor, index) => {
											return <option key={index} value={vendor.name}>{vendor.name}</option>
										})
									}
								</FormSelect>
							</div>
						</div>
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