import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import SelectDate, {FormInputPlain } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";

const ProjectInformation = (props) => {

    const dispatch = useDispatch();

    const purposeOfContract = {
        value: props.values.purposeOfContract,
        onChange: props.handleChange,
        error: props.errors.purposeOfContract,
        touched: props.touched.purposeOfContract,
        name: 'purposeOfContract',
        type: 'text',
        placeholder: 'Enter purpose of the contract'
    }

    const contractEffectDate = {
        ...props,
        value: props.values.contractEffectDate,
        onChange: props.handleChange,
        error: props.errors.contractEffectDate,
        touched: props.touched.contractEffectDate,
        name: 'contractEffectDate',
        placeholder: 'Select date'


    };

    const involvedInProject = {
        value: props.values.involvedInProject,
        onChange: props.handleChange,
        error: props.errors.involvedInProject,
        touched: props.touched.involvedInProject,
        name: 'involvedInProject',
        type: 'text',
        placeholder: 'Enter who else is involved in the project'
    }
    return <div>
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}
            
            <form onSubmit={props.handleSubmit} className='relative w-[600px] bg-white rounded-lg shadow py-4'>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                        Certificate of Substantial Completion
                        </h3>
                        <p className='text-base text-gray-700'>
                        Project information
                        </p>
                    </div>
                    <button
                        type='button'
                        className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                        data-modal-toggle='small-modal'
                    >
                        <Close />
                    </button>
                </div>

                {/* Progress */}
                <div className='w-full bg-[#89A5AF] h-2.5 my-4'>
                    <div className='bg-[#2F5461] h-2.5 w-[50%]'></div>
                </div>

                <div className='mx-6 mb-12'>
                    <div className='flex flex-col mb-5'>
                        <label
                                
                            className='text-base text-gray-900 mb-1'
                        >
                            What is the purpose of the contract?
                        </label>
                        <FormInputPlain  {...purposeOfContract} />
                        {props.errors.purposeOfContract && props.touched.purposeOfContract && <Error message={props.errors.purposeOfContract} />}
            
                    </div>
                   

                    <FormInputContainer name='When did the contract go into effect?'>

                        <SelectDate {...contractEffectDate} />
                        {props.errors.contractEffectDate && props.touched.contractEffectDate && <Error message={props.errors.contractEffectDate} />}
                    </FormInputContainer>

                    
                    <div className='flex flex-col mb-5'>
                        <label
                                
                            className='text-base text-gray-900 mb-1'
                        >
                            Other than the owner, the architect, and the contractor, who else is involved in this project?
                        </label>
                        <FormInputPlain  {...involvedInProject} />
                        {props.errors.involvedInProject && props.touched.involvedInProject && <Error message={props.errors.involvedInProject} />}
            
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={()=> dispatch(closeModal())} />
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


export default ProjectInformation;