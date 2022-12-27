
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../../../lib/supabase";
import { ButtonWhiteBG, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import SelectDate, { FormInputPlain, FormSelect } from "../components";
import { FormInputContainer } from '../Notice-of-intent-consultant/Forms';
import { closeModal } from "../reducer";



const Form = (props) => {
    const dispatch = useDispatch();
    const creationDate = {
        ...props,
        value: props.values.creationDate,
        onChange: props.handleChange,
        name: 'creationDate',
        error: props.errors.creationDate,
        touched: props.touched.creationDate,
        placeholder:'Select date'
    };

    const approvalDate = {
        ...props,
        value: props.values.approvalDate,
        onChange: props.handleChange,
        error: props.errors.approvalDate,
        touched: props.touched.approvalDate,
        name: 'approvalDate',
        placeholder:'Select date'


    };

    const contractorContact = {
        value: props.values.contractorContact,
        
       onChange: props.handleChange,
        error: props.errors.contractorContact,
        touched: props.touched.contractorContact,
        name: 'contractorContact',
        type: 'text',
        placeholder:'Name'

        //    prevPage
    };
    const email = {
        value: props.values.email,
        
       onChange: props.handleChange,
        error: props.errors.email,
        touched: props.touched.email,
        name: 'email',
        type: 'text',
        placeholder:'Enter email address'

        //    prevPage
    };
    const sendersName = {
        value: props.values.sendersName,
        
       onChange: props.handleChange,
        error: props.errors.sendersName,
        touched: props.touched.sendersName,
        name: 'sendersName',
        type: 'text',
        placeholder:'Name'

        //    prevPage
    };
    const phone = {
        value: props.values.phone,
        
       onChange: props.handleChange,
        error: props.errors.phone,
        touched: props.touched.phone,
        name: 'phone',
        type: 'text',
        placeholder:'Phone Number'

        //    prevPage
    };
    const recipientCopy = {
        value: props.values.recipientCopy,
        
       onChange: props.handleChange,
        error: props.errors.recipientCopy,
        touched: props.touched.recipientCopy,
        name: 'Choose the recipients of the carbon copy.',
        type: 'text',
        placeholder:'Select recipients'
    };



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
                        Notice of Award - Contractor
                        </h3>
                        <p className='text-base text-gray-700'>
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
                  
                    <div className=' mt-3 ml-2'>
                        <FormInputContainer name='On what date are you creating this letter?'>

                            <SelectDate {...creationDate} />
                            {props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate}/>}
                        </FormInputContainer>
                        <FormInputContainer name='On what day is the project approved by DPS Board?'>

                            <SelectDate {...approvalDate} />
                            {props.errors.approvalDate && props.touched.approvalDate && <Error message={props.errors.approvalDate}/>}
                        </FormInputContainer>

    
                        <div className='flex flex-col mb-5'>
                            <label
                                
                                className='text-base text-gray-900 mb-1'
                            >
                                Who should the contractor forward the details of the executed contract to?
                            </label>
                            <FormInputPlain {...contractorContact} />
                            {props.errors.contractorContact && props.touched.contractorContact && <Error message={props.errors.contractorContact}/>}
            
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label
                               
                                className='text-base text-gray-900 mb-1'
                            >
                                Enter the email address where the consultant can send the documents.
                            </label>
                            <FormInputPlain {...email} />
                            {props.errors.email && props.touched.email && <Error message={props.errors.email}/>}
            
                        </div>
                        <div>

                            <label
                                className='text-base text-gray-900 mb-1'
                            >
                                Enter the sender's name and phone number here.
                            </label>
                            <div className='w-full flex items-center mb-5 mt-2 gap-x-3'>
                            <div className="w-full">
                            <FormInputPlain {...sendersName} />
                            {props.errors.sendersName && props.touched.sendersName && <Error message={props.errors.sendersName}/>}

                                </div>
            
                        <div className='flex flex-col w-full'>
                          
                            <FormInputPlain {...phone} />
                            {props.errors.phone && props.touched.phone && <Error message={props.errors.phone}/>}
            
                        </div>
                        </div>
                        </div>

                        
                      
                       
                        <FormInputContainer>
                            <FormSelect {...recipientCopy}>
                                <option>Select recipients</option>
                       </FormSelect>
                        </FormInputContainer>
                        
                    
           
                    </div>
                    {/* {error && touched && <Error message={error} />} */}
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4' >
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
};


export default Form;