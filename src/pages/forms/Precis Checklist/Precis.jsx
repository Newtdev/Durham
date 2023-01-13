import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";

const Precis = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <ModalOverlay show={showModal} close={() => setShowModal(true)}>
        <div>
          {/* Modal content */}
          <div className='relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14'>
            {/* Header */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                  Precis Checklist
                </h3>
                <p className='text-base text-gray-700'>Preview Document</p>
              </div>
              <button
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
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

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
              <div className='px-12 pt-8 pb-4 text-black'>
                <div className='flex justify-center items-center'>
                  <div className='border-2 border-gray-200'>
                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full'></div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p className='font-bold text-lg'>
                          Precis Folders for Projects
                        </p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>Precis</p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>Bid Tab (certified if 3rd party led)</p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>Contract(with proposal)</p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>MWBE Participation Sheet (% Form)</p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>Affidavits(A,C or D)</p>
                      </div>
                    </div>

                    <div className='flex border-b border-b-gray-200 h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>HUB Plan(If they did not achieve the 10%)</p>
                      </div>
                    </div>

                    <div className='flex h-8'>
                      <div className='w-8 h-full flex justify-center items-center'>
                        <input
                          checked
                          type='checkbox'
                          value=''
                          class='h-6 w-6 border-[3px] border-gray-400 bg-gray-100'
                        />
                      </div>
                      <div className='border-l border-l-gray-300 pl-1 mr-[3rem] flex justify-center items-center'>
                        <p>Presentation Slides (if required)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='submit'
                width='w-[198px]'
              />
            </div>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default Precis;
