import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const Capital = () => {
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
                  Capital Project Request Form
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
              <div className='px-20 pt-8 pb-4 text-black'>
                <div>
                  <div className='mb-4'>
                    <h1>logo HERE</h1>
                  </div>

                  <div>
                    <h1 className='font-bold text-center mb-6'>
                      Capital Project Request Form
                    </h1>

                    <div className='mb-4 grid grid-cols-2'>
                      <p>
                        Department: <span className='bg-yellow-500'>F1</span>
                      </p>
                      <p>
                        Contact Person:{" "}
                        <span className='bg-yellow-500'>F2</span>
                      </p>
                    </div>

                    <div className='mb-4'>
                      <p>
                        Project Title: <span className='bg-yellow-500'>F3</span>
                      </p>
                    </div>

                    <div className='mb-4'>
                      <p>
                        Location: <span className='bg-yellow-500'>F4</span>
                      </p>
                    </div>

                    <div className='mb-4'>
                      <p>Project Description:</p>
                      <div className='p-2 border border-black w-full h-24'>
                        <span className='bg-yellow-500'>F5</span>
                      </div>
                    </div>

                    <p className='mb-4'>
                      Estimated Cost(s){" "}
                      <em>(Budget estimates include contingencies):</em>
                    </p>

                    <div className='m-auto w-[500px] mb-6'>
                      <div className='border border-black'>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            Land Purchase
                          </p>
                          <p className='p-2'>F6</p>
                        </div>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            Planning/Design
                          </p>
                          <p className='p-2'>F7</p>
                        </div>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            New Construction/Addition(s)
                          </p>
                          <p className='p-2'>F8</p>
                        </div>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            Renovation/Uplift
                          </p>
                          <p className='p-2'>F9</p>
                        </div>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            Repair
                          </p>
                          <p className='p-2'>F10</p>
                        </div>
                        <div className='flex items-center border-b border-b-black'>
                          <p className='p-2 w-[300px] border-r border-r-black'>
                            Furniture/Equipment
                          </p>
                          <p className='p-2'>F11</p>
                        </div>
                        <div className='flex items-center'>
                          <p className='p-2 w-[300px] border-r border-r-black font-bold text-right'>
                            Total $
                          </p>
                          <p className='p-2'>F12</p>
                        </div>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 mb-8'>
                      <p>
                        Estimated Project Beginning Date:{" "}
                        <span className='bg-yellow-500'>F13</span>
                      </p>
                      <p>
                        Estimated Project Completion Date:{" "}
                        <span className='bg-yellow-500'>F14</span>
                      </p>
                    </div>

                    <div className='mb-4'>
                      <p className='overflow-x-hidden'>
                        ____________________________________________________________________________________________________________________________________________________
                      </p>
                      <p>
                        <span className='ml-12'>(Signature - Requestor)</span>{" "}
                        <span className='ml-[22rem]'>(Date)</span>
                      </p>
                    </div>

                    <p className='font-bold text-center mb-4'>
                      --- FOR OFFICIAL USE ONLY ---
                    </p>

                    <div className='grid grid-cols-2'>
                      <div className='text-sm'>
                        <p className='font-bold mb-4'>Funding Source</p>
                        <div className='mb-3 flex items-center gap-2'>
                          <label htmlFor='capital'>Capital Outlay</label>
                          <input type='checkbox' name='capital' id='capital' />
                          <span className='bg-yellow-500'>F15</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <label htmlFor='other'>Other</label>
                          <input type='checkbox' name='other' id='other' />
                          <span className='bg-yellow-500'>F16</span>
                        </div>
                      </div>

                      <div className='text-sm'>
                        <p className='font-bold mb-6'>Approved by</p>
                        <p className='mb-4 overflow-x-hidden'>
                          _____________________________________________________________
                        </p>
                        <p>
                          (Signature - Deputy Superintendent, Operations){" "}
                          <span className='ml-12'>(Date)</span>
                        </p>

                        <p className='mt-6 ml-3 text-xs'>
                          Form Date: 7-15-21????????????????????????????
                        </p>
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

export default Capital;
