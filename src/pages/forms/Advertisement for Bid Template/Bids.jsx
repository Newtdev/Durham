import { useState } from 'react';
import  DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { ButtonWhiteBG, Calender } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { SelectDate } from "../components";
import { FormInputContainer } from "../Notice-of-intent-consultant/Forms";

 const Bids = () => {
    const [startDate, setStartDate] = useState(false)
    return <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>
            
        <form className='relative w-[600px] bg-white rounded-lg shadow py-4'>
            <div className='flex justify-between items-baseline mx-6'>
                <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                        Notice of Intent to Award - Consultant
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
                <div className='bg-[#2F5461] h-2.5 w-[50%]'>
                
                </div>
            </div>
            <div className="px-4">
                   
    {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    /> */}
                <FormInputContainer name='When will the Board of DPS be asked to approve this contract?'>
                    <label>
                     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> 
                        {/* <DatePicker
                            selected={startDate} onChange={(date) => setStartDate(date)}
                            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979] block w-full p-2.5"
                            // placeholderText="Select Date"
                        /> */}
                        <Calender />
                    </label>
                    {/* {props.errors.approvalDate && props.touched.approvalDate && <Error message={props.errors.approvalDate}/>} */}
                </FormInputContainer>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-8 pr-4'>
                <ButtonWhiteBG width='w-[100px]' name='cancel' />
                <DashboardButton
                    hidden
                    name='NEXT'
                    type='submit'
                    width='w-[77px]'
                />
            </div>
        </form>
    </div>
 };



export default Bids;

