import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import {  SelectDate } from "../../components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from '../../Notice-to-Proceed/Forms';
import { closeModal } from "../../reducer";

const Bids = (props) => {
    const dispatch = useDispatch()
    const bidDate = {
        ...props,
        value: props.values.bidDate,
        onChange: props.handleChange,
        name: 'bidDate',
        placeholder:'Select date'
        
    }
    const deadlineTime = {
        ...props,
        value: props.values.deadlineTime,
        onChange: props.handleChange,
        name: 'deadlineTime',
        placeholder:'Select date'
       
    }
    const openingTime = {
        ...props,
        value: props.values.openingTime,
        onChange: props.handleChange,
        name: 'openingTime',
        placeholder:'Select time'
    }
    
    const withdrawingBid = {
        value: props.values.withdrawingBid,
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return '';
            } else {
                props.setFieldValue('withdrawingBid', e.target.value)
            }
        },
        name: 'withdrawingBid',
        type: 'text',
        placeholder: 'Number of days'
    }
   
    return <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>
            
        <form onSubmit={props.handleSubmit} className='relative w-[600px] bg-white rounded-lg shadow py-4'>
            <div className='flex justify-between items-baseline mx-6'>
                <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                        00 11 13 - Advertisement for Bid Template
                    </h3>
                    <p className='text-base text-gray-700'>
                        Agreement information
                    </p>
                </div>
                <button
                    // onClick={()=> dispatch(closeModal())}
                    onClick={() => dispatch(closeModal())}
                    type='button'
                    className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                    // data-modal-toggle='small-modal'
                >
                    <Close />
                </button>

            </div>
            {/* Progress */}
            <div className='w-full bg-[#89A5AF] h-2.5 my-4'>
                <div className='bg-[#2F5461] h-2.5 w-[50%]'>
                </div>
            </div>
            <div className="px-4">
                <FormInputContainer name="Which day does DPS receive the contractors' sealed bids?">
                    <SelectDate {...bidDate} />
                    {props.errors.bidDate && props.touched.bidDate && <Error message={props.errors.bidDate} />}
                </FormInputContainer>
                <div className='grid grid-cols-2 gap-x-4'>
                    <FormInputContainer name='Bid Deadline Time'>
                        <SelectTime {...deadlineTime} />
                        {props.errors.deadlineTime && props.touched.deadlineTime && <Error message={props.errors.deadlineTime} />}
                    </FormInputContainer>
                    <FormInputContainer name='Bid Opening Time'>
                        <SelectTime {...openingTime} />
                        {props.errors.openingTime && props.touched.openingTime && <Error message={props.errors.openingTime} />}
                    </FormInputContainer>
                </div>

                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        Enter the period for withdrawing bids
                    </label>
                    <input
                        {...withdrawingBid}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.withdrawingBid && props.touched.withdrawingBid && <Error message={props.errors.withdrawingBid} />}
            
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
}



export default Bids;

