import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain, FormInput } from "../../components";
import { prevStep } from "../reducer";
import { useState } from "react";
import percentage from "../../../../assets/percentage.svg";

const FormFive = (props) => {
	const dispatch = useDispatch()
	const [edit, setEdit] = useState(false)
	// const 

	const ownerDeadline = {
		...props,
		value: props.values.ownerDeadline,
		onChange: props.handleChange,
		name: 'ownerDeadline',
		error: props.errors.ownerDeadline,
		touched: props.touched.ownerDeadline,
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
							Owner and Contractor Agreement Form (more $500,000)
						</h3>
						<p className='text-base text-gray-700'>
							Agreement and Project details.
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
					<div className='bg-[#2F5461] h-2.5 w-5/6'></div>
				</div>

				<div className='mx-6 mb-12'>
					<div className='mt-3 ml-2 flex flex-col gap-3 '>
						<FormInputContainer name="Enter the Basic Services Compensation to the Design Consultant">
							<FormInput type={"number"} onChange={props.handleChange} name='serviceCompensation' value={props.values.serviceCompensation} placeholder="Basic services compensation" />
							{props.errors.serviceCompensation && props.touched.serviceCompensation && <Error message={props.errors.serviceCompensation} />}
						</FormInputContainer>

						<div className="flex flex-col gap-2">
							<h2 className="font-bold pb-2 border-b border-[#9CA3AF]">The percentages of payments made to the Design Consultant for Basic services when each phase is completed</h2>
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Design Narrative Phase</h2>
											<span className="px-3">{props.values.narrativePhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Design Narrative Phase">
										<FormInput type={"number"} value={props?.values?.narrativePhase} onChange={props.handleChange} icon={percentage} name='narrativePhase' placeholder="Percentage" />
										{props.errors.narrativePhase && props.touched.narrativePhase && <Error message={props.errors.narrativePhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Schematic Design Phase</h2>
											<span className="px-3">{props.values.schematicPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Schematic Design Phase">
										<FormInput type={"number"} value={props?.values?.schematicPhase} onChange={props.handleChange} icon={percentage} name='schematicPhase' placeholder="Percentage" />
										{props.errors.schematicPhase && props.touched.schematicPhase && <Error message={props.errors.schematicPhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Design Development Phase</h2>
											<span className="px-3">{props.values.developmentPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Design Development Phase">
										<FormInput type={"number"} value={props?.values?.developmentPhase} onChange={props.handleChange} icon={percentage} name='developmentPhase' placeholder="Percentage" />
										{props.errors.developmentPhase && props.touched.developmentPhase && <Error message={props.errors.developmentPhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Construction Contract Phase</h2>
											<span className="px-3">{props.values.constructionContractPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Construction Contract Phase">
										<FormInput type={"number"} value={props?.values?.constructionContractPhase} onChange={props.handleChange} icon={percentage} name='constructionContractPhase' placeholder="Percentage" />
										{props.errors.constructionContractPhase && props.touched.constructionContractPhase && <Error message={props.errors.constructionContractPhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Permitting and Bidding/Negotiation Phase</h2>
											<span className="px-3">{props.values.negotiationPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Permitting and Bidding/Negotiation Phase">
										<FormInput type={"number"} value={props?.values?.negotiationPhase} onChange={props.handleChange} icon={percentage} name='negotiationPhase' placeholder="Percentage" />
										{props.errors.negotiationPhase && props.touched.negotiationPhase && <Error message={props.errors.negotiationPhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Construction Phase</h2>
											<span className="px-3">{props.values.constructionPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Construction Phase">
										<FormInput type={"number"} value={props?.values?.constructionPhase} onChange={props.handleChange} icon={percentage} name='constructionPhase' placeholder="Percentage" />
										{props.errors.constructionPhase && props.touched.constructionPhase && <Error message={props.errors.constructionPhase} />}
									</FormInputContainer>
							}
							{
								edit === false ?
									<div className="flex flex-col border p-2 gap-1 rounded-lg">
										<div className="flex">
											<h2 className="font-semibold w-full">Post Construction Services Phase</h2>
											<span className="px-3">{props.values.constructionServicesPhase || "0"}%</span>
										</div>
										<div className="flex font-bold">$0.0</div>
									</div> :
									<FormInputContainer name="Post Construction Services Phase">
										<FormInput type={"number"} value={props?.values?.constructionServicesPhase} onChange={props.handleChange} icon={percentage} name='constructionServicesPhase' placeholder="Percentage" />
										{props.errors.constructionServicesPhase && props.touched.constructionServicesPhase && <Error message={props.errors.constructionServicesPhase} />}
									</FormInputContainer>
							}
							<button
								className="bg-[#693B79] w-fit rounded-md text-white font-bold px-3 py-1"
								onClick={() => setEdit(!edit)}
							>
								{edit === false ? "EDIT PERCENTAGE" : "UPDATE PERCENTAGE"}
							</button>
							<div className="flex mt-4">
								<FormInputContainer name="Enter the maximum reimbursable cost for printing and delivering the documents.">
									<FormInputPlain type={"number"} value={props?.values?.maxCost} onChange={props.handleChange} name='maxCost' placeholder="cost" />
									{props.errors.maxCost && props.touched.maxCost && <Error message={props.errors.maxCost} />}
								</FormInputContainer>
							</div>
						</div>


					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-8 pr-4'>
					<ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(prevStep(4))} />
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


export default FormFive;