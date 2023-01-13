import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui"
import { Close, DashboardButton } from "../../../Dashboard/Components"
import SelectDate, { FormInput, FormInputPlain, FormTextArea } from "../../components"
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms"
import { closeModal } from "../../reducer";
import { prev } from "../reducer";

const SubstantialCompletionDetailsTwo = (props) => {
   const dispatch = useDispatch()
    const ownerRepName = {
        value: props.values.ownerRepName,
        onChange: props.handleChange,
        error: props.errors.ownerRepName,
        touched: props.touched.ownerRepName,
        name: 'ownerRepName',
        type: 'text',
        placeholder: 'Enter Name'
    }

    const signedDate = {
        ...props,
        value: props.values.signedDate,
        onChange: props.handleChange,
        error: props.errors.signedDate,
        touched: props.touched.signedDate,
        name: 'signedDate',
        placeholder: 'Select date'
    };
    const responsibility = {
        value: props.values.responsibility,
        onChange: props.handleChange,
        error: props.errors.responsibility,
        touched: props.touched.responsibility,
        name: 'Enter the responsibilities of the Owner and Contractor for security, maintenance, heat, utilities, damage to the Work and insurance, if any?',
        id: 'responsibility',
        placeholder: 'Enter responsibility'
    };
    // const estimatedCost = {
    //     value: props.values.estimatedCost,
    //     onChange: (e) => {
    //         if (isNaN(e.target.value)) {
    //             return;
    //         } else {
    //             // return e.target.value
    //             props.setFieldValue('estimatedCost',e.target.value)
    //      }
    //     },
    //     error: props.errors.estimatedCost,
    //     touched: props.touched.estimatedCost,

    //     name: 'responsibility',
    //     placeholder: '0.00'

    // };

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
                        Substantial Completion details
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
                    <div className='bg-[#2F5461] h-2.5 w-[50%]'></div>
                </div>

                <div className='mx-6 mb-12'>
                    <small className='text-gray-900 font-medium'>
                        Select the Owner's representative
                    </small>
                    <div className=' mt-3 ml-2'>
                        <div className='flex items-center mb-5'>
                            <input
                                type='radio'
                                onChange={props.handleChange}
                                value='Durham Profile'
                                name='ownersRep'
                                className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                            />
                            <label
                                for='default-radio-1'
                                className='ml-2 text-base text-gray-900'
                            >
                                Durham Profile
                            </label>
                        
                        </div>
                    
                        <div className=' mb-5'>
                        
                            <input
                                type='radio'
                                onChange={props.handleChange}
                                value='Project Manager Database'
                                name='ownersRep'
                                className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                            />
                            <label
                                for='default-radio-1'
                                className='ml-2 text-base text-gray-900'
                            >
                                Project Manager Database
                            </label>
                    
                        </div>
                        <div className=' mb-5'>
                        
                            <input
                                type='radio'
                                onChange={props.handleChange}
                                value='ownersRep'
                                name='Add New Owner’s representative'
                                className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                            />
                            <label
                                for='default-radio-1'
                                className='ml-2 text-base text-gray-900'
                            >
                                Add New Owner’s representative
                            </label>
                            {props.errors.ownersRep && props.touched.ownersRep && <Error message={props.errors.ownersRep} />}
                        </div>
                    
                        <div className='flex flex-col mb-5'>
                            <label
                            
                                className='text-base text-gray-900 mb-1'
                            >
                                Enter Owner’s Representative Name
                            </label>
                            <FormInputPlain  {...ownerRepName} />
                            {props.errors.ownerRepName && props.touched.ownerRepName && <Error message={props.errors.ownerRepName} />}
        
                        </div>


                    

                        {/* </FormInputContainer> */}
                    
                  
                        <FormInputContainer name="When does the Owner's representative sign this form?">
                            <SelectDate {...signedDate} />
                            {props.errors.signedDate && props.touched.signedDate && <Error message={props.errors.signedDate} />}
                        </FormInputContainer>
                        
                        <FormTextArea {...responsibility} />
                    

                        {/* <div className='flex flex-col mb-5'>
                            <label
                                for='default-radio-1'
                                className='text-base text-gray-900 mb-1'
                            >
                                Enter the estimated cost of the remaining work.
                            </label>
                            <FormInput {...estimatedCost} />
                            {props.errors.estimatedCost && props.touched.estimatedCost && <Error message={props.errors.estimatedCost} />}

                        </div> */}
                
       
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={()=> dispatch(prev(1))} />
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
};

export default SubstantialCompletionDetailsTwo