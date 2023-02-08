import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInput } from "../../components";

const FormTwo = (props) => {
	const dispatch = useDispatch()
	const states = useSelector(getList);

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
							Owner and Design Consultant (less than $200,000)
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

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormInputContainer name='Land Purchase'>
							<FormInput type={"number"} onChange={props.handleChange} name="landCost" placeholder={"0.0"} />
							{props.errors.landCost && props.touched.landCost && <Error message={props.errors.landCost} />}
						</FormInputContainer>

						<FormInputContainer name='Planning/Design'>
							<FormInput type={"number"} onChange={props.handleChange} name="designCost" placeholder={"0.0"} />
							{props.errors.designCost && props.touched.designCost && <Error message={props.errors.designCost} />}
						</FormInputContainer>

						<FormInputContainer name='New Construction/Addition(s)'>
							<FormInput type={"number"} onChange={props.handleChange} name="constructionCost" placeholder={"0.0"} />
							{props.errors.constructionCost && props.touched.constructionCost && <Error message={props.errors.constructionCost} />}
						</FormInputContainer>

						<FormInputContainer name='Renovation/Upfit'>
							<FormInput type={"number"} onChange={props.handleChange} name="renovationCost" placeholder={"0.0"} />
							{props.errors.renovationCost && props.touched.renovationCost && <Error message={props.errors.renovationCost} />}
						</FormInputContainer>

						<FormInputContainer name='Repair'>
							<FormInput type={"number"} onChange={props.handleChange} name="repairCost" placeholder={"0.0"} />
							{props.errors.repairCost && props.touched.repairCost && <Error message={props.errors.repairCost} />}
						</FormInputContainer>

						<FormInputContainer name='Furniture/Equipment'>
							<FormInput type={"number"} onChange={props.handleChange} name="furnitureCost" placeholder={"0.0"} />
							{props.errors.furnitureCost && props.touched.furnitureCost && <Error message={props.errors.furnitureCost} />}
						</FormInputContainer>

						<div className="flex flex-col w-full bg-[#F3F4F6] mt-3 py-2 px-2 rounded-lg">
							<h2 className="text-sm font-medium">Total Amount</h2>
							<span className="text-sm font-bold">$0.0</span>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-8 pr-4'>
					<ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(closeModal())} />
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