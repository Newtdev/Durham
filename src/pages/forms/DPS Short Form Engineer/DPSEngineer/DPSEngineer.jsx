import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../../../assets/calendar.svg";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const DPSEngineer = () => {
  const [showModal, setShowModal] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <ModalOverlay show={showModal} close={() => setShowModal(true)}>
        <div>
          <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className='relative w-[600px] bg-white rounded-lg shadow py-4 mb-8'>
              {/* Header */}
              <div className='flex justify-between items-baseline mx-6'>
                <div>
                  <h3 className='text-lg font-bold text-gray-900'>
                    DPS Short Form Engineer - Engineering Contract
                  </h3>
                  <p className='text-base text-gray-700'>General Information</p>
                </div>
                <button
                  type='button'
                  className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  data-modal-toggle='small-modal'
                  // onClick={close}
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>

              <div className='border-b border-b-gray-100 pb-8'>
                {/* Progress */}
                <div className='w-full bg-[#89A5AF] h-2.5 my-4'>
                  <div className='bg-[#2F5461] h-2.5 w-[50%]'></div>
                </div>

                <div className='mx-6 mt-4'>
                  <div className='mb-4'>
                    <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                      What date will the agreement be made official?
                    </p>
                    <div className='relative w-full'>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Select date'
                        className='bg-white text-gray-400 w-full text-base rounded border border-gray-400 py-2 pl-2 pr-4 focus:outline-gray-400 h-10'
                      />
                      <div className='absolute top-2/4 -translate-y-2/4 right-[13px]'>
                        <img src={Calendar} alt='calendar' />
                      </div>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                      When does the Director of Construction and Sustainability
                      sign the document?
                    </p>
                    <div className='relative w-full'>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Select date'
                        className='bg-white text-gray-400 w-full text-base rounded border border-gray-400 py-2 pl-2 pr-4 focus:outline-gray-400 h-10'
                      />
                      <div className='absolute top-2/4 -translate-y-2/4 right-[13px]'>
                        <img src={Calendar} alt='calendar' />
                      </div>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                      When will the financial officer sign this document?
                    </p>
                    <div className='relative w-full'>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Select date'
                        className='bg-white text-gray-400 w-full text-base rounded border border-gray-400 py-2 pl-2 pr-4 focus:outline-gray-400 h-10'
                      />
                      <div className='absolute top-2/4 -translate-y-2/4 right-[13px]'>
                        <img src={Calendar} alt='calendar' />
                      </div>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                      When will the document be notarized? (Notary Seal Date)
                    </p>
                    <div className='relative w-full'>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText='Select date'
                        className='bg-white text-gray-400 w-full text-base rounded border border-gray-400 py-2 pl-2 pr-4 focus:outline-gray-400 h-10'
                      />
                      <div className='absolute top-2/4 -translate-y-2/4 right-[13px]'>
                        <img src={Calendar} alt='calendar' />
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <small className='text-gray-900 font-medium'>
                      To specify the type of check, check the relevant box.
                    </small>
                    <div className=' mt-3 ml-2'>
                      <div className='flex items-center mb-5'>
                        <input
                          id='default-radio-1'
                          type='radio'
                          value=''
                          name='default-radio'
                          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                        />
                        <label
                          for='default-radio-1'
                          className='ml-2 text-base text-gray-900'
                        >
                          Initial
                        </label>
                      </div>
                      <div className='flex items-center mb-5'>
                        <input
                          id='default-radio-1'
                          type='radio'
                          value=''
                          name='default-radio'
                          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                        />
                        <label
                          for='default-radio-1'
                          className='ml-2 text-base text-gray-900'
                        >
                          Supplemental
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='default-radio-1'
                          type='radio'
                          value=''
                          name='default-radio'
                          className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                        />
                        <label
                          for='default-radio-1'
                          className='ml-2 text-base text-gray-900'
                        >
                          Annual
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className='flex justify-end gap-8 pr-4 mt-4'>
                <ButtonWhiteBG width='w-[100px]' name='cancel' />
                <DashboardButton
                  hidden
                  name='NEXT'
                  type='submit'
                  width='w-[77px]'
                />
              </div>
            </div>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default DPSEngineer;
