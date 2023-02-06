import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormInput, FormSelect } from "../../components";
import { useState } from "react";
import { FormTextArea } from "../../components";

const FormOne = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);
	const [index, setIndex] = useState(0);
	const [items, setItems] = useState(props.values.contractors);

	const addMoreItems = () => {
		setIndex(index + 1);
		console.log('add more items: ', index);
		props.values.contractors.push({
			contractor: "",
			companyName: "",
			description: "",
			companyType: "",
			companyContractAmount: ""
		})
		setItems([...items, {
			scontractor: "",
			companyName: "",
			description: "",
			companyType: "",
			companyContractAmount: ""
		}])

		console.log('items: ', props.values.contractors);
	}

	const removeItem = (index) => {
		console.log('remove item: ', index);
		props.values.contractors.splice(index, 1);
		var arr = [...items];
		arr.splice(index, 1);
		// arr = arr.filter((item, arrIndex) => arrIndex !== index);
		setItems(arr);
		console.log('items: ', props.values.contractors);
	}

	const contractors = [
		{ name: "Contractor 1" },
		{ name: "Contractor 2" },
		{ name: "Contractor 3" },
		{ name: "Contractor 4" },
		{ name: "Contractor 5" }
	];

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
							MWBE % Form
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
								Select the purpose of this form.
							</h2>
							<div className='flex gap-3 items-center'>
								<input
									id='default-radio-1'
									type='radio'
									value='For DPS use'
									name='purpose'
									onChange={props.handleChange}
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
								/>
								<label
									for='default-radio-1'
									className='text-base text-gray-900'
								>
									For DPS use
								</label>
							</div>
							<div className='flex gap-3 items-center'>
								<input
									id='default-radio-2'
									type='radio'
									value='To provide it to the vendor'
									name='purpose'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
									onChange={props.handleChange}
								/>
								<label
									for='default-radio-2'
									className='text-base text-gray-900'
								>
									To provide it to the vendor
								</label>
							</div>
							{props.errors.purpose && props.touched.purpose && <Error message={props.errors.purpose} />}
						</div>

						<FormInputContainer name="What is the total contract amount?">
							<FormInput type={"text"} onChange={props.handleChange} name='totalContractAmount' placeholder={"0.00"} />
							{props.errors.totalContractAmount && props.touched.totalContractAmount && <Error message={props.errors.totalContractAmount} />}
						</FormInputContainer>

						<div className="flex flex-col gap-3">
							{
								items.map((item, index) => (
									<div className="flex flex-col w-full">
										<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
											<h2>MWBE Information</h2>
											<button
												onClick={() => removeItem(index)}
												type='button'
												className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
												data-modal-toggle='small-modal'
											>
												<Close />
											</button>
										</div>
										<div className="flex flex-col gap-2 px-3 py-3 border border-[#9CA3AF]">
											<FormSelect
												value={props.values.contractor}
												name='Select contractor'
												id={`contractors[${index}].contractor`}
												error={props.errors.contractor}
												touched={props.touched.contractor}
												onChange={props.handleChange}>
												<option value=''>Add New contractor</option>
												{
													contractors?.map((contractor, index) => {
														return <option key={index} value={contractor.name}>{contractor.name}</option>
													})
												}
											</FormSelect>
											<FormInputContainer name='Contractor company name'>
												<FormInputPlain type={"text"} onChange={props.handleChange} name={`contractors[${index}].companyName`} placeholder={"Enter Contractor company name"} />
												{props.errors.companyName && props.touched.companyName && <Error message={props.errors.companyName} />}
											</FormInputContainer>

											<div className="flex flex-col gap-1">
												<FormTextArea
													onChange={props.handleChange}
													name="Enter the description of the work"
													id={`contractors[${index}].description`}
													placeholder='Enter the description of the work'
												/>
												{props.errors.description && props.touched.description && <Error message={props.errors.description} />}
											</div>

											<div className="flex flex-col gap-3">
												<h2 className="text-sm text-gray-600 font-semibold">
													Select type of company.
												</h2>
												<div className='flex gap-3 items-center'>
													<input
														id='default-radio-1'
														type='radio'
														value='MBE'
														name={`contractors[${index}].companyType`}
														onChange={props.handleChange}
														className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
													/>
													<label
														for='default-radio-1'
														className='text-base text-gray-900'
													>
														MBE
													</label>
												</div>
												<div className='flex gap-3 items-center'>
													<input
														id='default-radio-2'
														type='radio'
														value='WBE'
														name={`contractors[${index}].companyType`}
														className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
														onChange={props.handleChange}
													/>
													<label
														for='default-radio-2'
														className='text-base text-gray-900'
													>
														WBE
													</label>
												</div>
												{props.errors.companyType && props.touched.companyType && <Error message={props.errors.companyType} />}
											</div>

											<FormInputContainer name="Enter the company's contract amount">
												<FormInput type={"number"} onChange={props.handleChange} name={`contractors[${index}].companyContractAmount`} placeholder={"0.00"} />
												{props.errors.companyContractAmount && props.touched.companyContractAmount && <Error message={props.errors.companyContractAmount} />}
											</FormInputContainer>
										</div>
									</div>
								))
							}
						</div>
						<button
							className="bg-[#693B79] w-fit text-white font-bold px-3 py-1"
							onClick={() => addMoreItems()}
						>
							ADD MORE CONTRACTORS
						</button>
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