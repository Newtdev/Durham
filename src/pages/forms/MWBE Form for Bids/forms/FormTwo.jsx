import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect, FormInputPlain, FormInput, FormTextArea } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { prevStep } from "../reducer";
import { useState } from "react"

const FormTwo = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(getList);

	const [index, setIndex] = useState(0);
	const [items, setItems] = useState(props.values.mwbeInfo);


	const mwbeNames = [
		{ name: 'mwbeName 1' },
		{ name: 'mwbeName 2' },
		{ name: 'mwbeName 3' },
		{ name: 'mwbeName 4' },
		{ name: 'mwbeName 5' },
		{ name: 'mwbeName 6' }
	];

	const mwbeCategories = [
		{ name: 'mwbeCategory 1' },
		{ name: 'mwbeCategory 2' },
		{ name: 'mwbeCategory 3' },
		{ name: 'mwbeCategory 4' },
		{ name: 'mwbeCategory 5' },
		{ name: 'mwbeCategory 6' }
	];

	const addMoreItems = () => {
		setIndex(index + 1);
		console.log('add more mwbeInfo: ', index);
		props.values.mwbeInfo.push({
			mwbeName: "",
			companyName: "",
			companyNumber: "",
			mwbeCategory: "",
			workDescription: "",
			contractAmount: ""
		})
		setItems([...items, {
			mwbeName: "",
			companyName: "",
			companyNumber: "",
			mwbeCategory: "",
			workDescription: "",
			contractAmount: ""
		}])

		console.log('mwbeInfo: ', props.values.mwbeInfo);
	}

	const removeItem = (index) => {
		console.log('remove item: ', index);
		props.values.mwbeInfo.splice(index, 1);
		var arr = [...items];
		arr.splice(index, 1);
		setItems(arr);
		console.log('items: ', props.values.mwbeInfo);
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
							MWBE Form for Bids
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
				<div className='flex flex-col mx-6 mb-12'>
					<div className="">
						<FormInputContainer name='What is the total value of contracts with minority-owned businesses?'>
							<FormInput type={"text"} onChange={props.handleChange} name="totalValue" placeholder={"0.0"} />
							{props.errors.totalValue && props.touched.totalValue && <Error message={props.errors.totalValue} />}
						</FormInputContainer>
					</div>
					<div className="pt-4">
						<FormInputContainer name='What is the minimum percentage of the total contract sum that will be allocated to MWBEs?'>
							<FormInput type={"text"} onChange={props.handleChange} name="minPercentage" placeholder={"0.0"} />
							{props.errors.minPercentage && props.touched.minPercentage && <Error message={props.errors.minPercentage} />}
						</FormInputContainer>
					</div>
					<div className="flex flex-col gap-4">
						{
							items.map((item, index) => (
								<div className="flex flex-col w-full">
									<div className="flex justify-between items-center bg-[#89A5AF] py-2 px-1 rounded-t-lg">
										<h2>MWBE Information {index + 1}</h2>
										<button
											onClick={() => removeItem(index)}
											type='button'
											className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
											data-modal-toggle='small-modal'
										>
											<Close />
										</button>
									</div>
									<div className="flex flex-col px-3 gap-3 py-3 border border-[#9CA3AF]">
										<FormSelect
											value={props.values.mwbeName}
											name='Select the MWBE'
											id={`mwbeInfo[${index}].mwbeName`}
											error={props.errors.mwbeName}
											touched={props.touched.mwbeName}
											onChange={props.handleChange}>
											<option value=''>Select the MWBE</option>
											{
												mwbeNames?.map((mwbeName, index) => {
													return <option key={index} value={mwbeName.name}>{mwbeName.name}</option>
												})
											}
										</FormSelect>

										<FormInputContainer name='Company Name'>
											<FormInputPlain type={"text"} onChange={props.handleChange} name={`mwbeInfo[${index}].companyName`} placeholder={"Company Name"} />
											{props.errors.companyName && props.touched.companyName && <Error message={props.errors.companyName} />}
										</FormInputContainer>

										<div className="flex flex-col gap-3 p-2">
											<h2 className="font-bold">For the following items, enter the corresponding codes or numbers.</h2>
											<div className="w-full h-[1px] bg-[#D1D5DB]"></div>

											<FormInputContainer name='Company Number'>
												<FormInputPlain type={"phone"} onChange={props.handleChange} name={`mwbeInfo[${index}].companyNumber`} placeholder={"(919) 809 789"} />
												{props.errors.companyNumber && props.touched.companyNumber && <Error message={props.errors.companyNumber} />}
											</FormInputContainer>

											<FormSelect
												value={props.values.mwbeCategory}
												name='Select the MWBE'
												id={`mwbeInfo[${index}].mwbeCategory`}
												error={props.errors.mwbeCategory}
												touched={props.touched.mwbeCategory}
												onChange={props.handleChange}>
												<option value=''>Select the MWBE</option>
												{
													mwbeCategories?.map((mwbeCategory, index) => {
														return <option key={index} value={mwbeCategory.name}>{mwbeCategory.name}</option>
													})
												}
											</FormSelect>

											<div>
												<FormTextArea onChange={props.handleChange} name="Work Description" id={`mwbeInfo[${index}].workDescription`} placeholder={"Edit Work Description	"} />
												{props.errors.workDescription && props.touched.workDescription && <Error message={props.errors.workDescription} />}
											</div>

											<FormInputContainer name='Contract Amount'>
												<FormInput type={"number"} onChange={props.handleChange} name={`mwbeInfo[${index}].contractAmount`} placeholder={"0.0"} />
												{props.errors.contractAmount && props.touched.contractAmount && <Error message={props.errors.contractAmount} />}
											</FormInputContainer>

										</div>
									</div>
								</div>
							))
						}
					</div>

					<button
						className="bg-[#693B79] w-fit text-white font-bold px-3 mt-2 py-1"
						onClick={() => addMoreItems()}>
						ADD A MWBE
					</button>
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