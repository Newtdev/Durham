import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const Change = () => {
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
                  Change Order Directive
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
                  <div>
                    <h1 className='font-bold text-xl pb-2 w-full border-b-2 border-b-black'>
                      <em>Construction Change Directive</em>
                    </h1>

                    <div className='grid grid-cols-2 pb-16 mb-4 border-b-2 border-b-black'>
                      <div>
                        <div className='mb-3'>
                          <p className='font-bold'>PROJECT:</p>
                          <p>
                            <span className='bg-yellow-500'>F1</span>
                          </p>
                        </div>
                        <div>
                          <p className='font-bold'>OWNER:</p>
                          <p>Durham Public Schools</p>
                        </div>
                      </div>

                      <div>
                        <div className='mb-3'>
                          <p className='font-bold'>Contractor:</p>
                          <p>
                            <span className='bg-yellow-500'>F2</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className='font-bold mb-10'>
                      The Contractor is hereby directed to make the following
                      change(s) in this Contract:
                    </p>

                    <div className='mb-4'>
                      <p className='font-bold'>PROPOSED ADJUSTMENTS</p>

                      <div className='mb-4 flex gap-12'>
                        <p>1.</p>
                        <div>
                          <p className='mb-4'>
                            The proposed basis of adjustment to the Contract Sum
                            or Guaranteed Maximum Price is:
                          </p>

                          <div className='flex items-center gap-1 mb-2'>
                            <span className='bg-yellow-500'>F3</span>
                            <input type='checkbox' name='lump' id='lump' />
                            <label htmlFor='lump'>
                              Lump Sum increase of $
                              <span className='bg-yellow-500'>F4</span>
                            </label>
                          </div>
                          <div className='flex items-center gap-1 mb-2'>
                            <span className='bg-yellow-500'>F8</span>
                            <input type='checkbox' name='lump' id='lump' />
                            <label htmlFor='lump'>
                              Unit Price of $
                              <span className='bg-yellow-500'>F6</span> per{" "}
                              <span className='bg-yellow-500'>F7</span>
                            </label>
                          </div>
                          <div className='flex items-center gap-1 mb-2'>
                            <span className='bg-yellow-500'>F8</span>
                            <input type='checkbox' name='lump' id='lump' />
                            <label htmlFor='lump'>
                              Not to Exceed $
                              <span className='bg-yellow-500'>F9</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='mb-4 flex gap-12'>
                        <p>2.</p>
                        <p className='mb-4'>
                          The Contract Time is proposed to remain unchanged. The
                          proposed adjustment, if any, is{" "}
                          <span className='bg-yellow-500'>F10</span>.
                        </p>
                      </div>

                      <p className='mb-12'>
                        <em>
                          NOTE: The Owner, Architect and Contractor should
                          execute a Change Order to supersede this Construction
                          Change Directive to the extent they agree upon
                          adjustments to the Contract Sum, Contract Time, or
                          Guaranteed Maximum price for the change(s) described
                          herein.
                        </em>
                      </p>

                      <div className='border-t border-t-black pt-4'>
                        <div className='flex justify-between mb-12'>
                          <p className='text-lg'>OWNER </p>
                          <p className='text-lg'>CONTRACTOR</p>
                        </div>

                        <div className='grid grid-cols-2 font-bold mb-12'>
                          <div>
                            <div className='mb-12'>
                              <p>_____________________________</p>
                              <p>SIGNATURE</p>
                            </div>

                            <div className='mb-12'>
                              <p>
                                <span className='bg-yellow-500'>F11</span>{" "}
                                <span className='bg-yellow-500 ml-4'>F12</span>
                              </p>
                              <p>PRINTED NAME AND TITLE</p>
                            </div>

                            <div>
                              <p>
                                <span className='bg-yellow-500 ml-4'>F14</span>
                              </p>
                              <p>DATE</p>
                            </div>
                          </div>

                          <div>
                            <div className='mb-12'>
                              <p>_____________________________</p>
                              <p>SIGNATURE</p>
                            </div>

                            <div className='mb-12'>
                              <div className='mb-12'>
                                <p>
                                  <span className='bg-yellow-500'>F15</span>{" "}
                                  <span className='bg-yellow-500 ml-4'>
                                    F16
                                  </span>
                                </p>
                                <p>PRINTED NAME AND TITLE</p>
                              </div>
                            </div>

                            <div className='mb-12'>
                              <p>_____________________________</p>
                              <p>DATE</p>
                            </div>
                          </div>
                        </div>
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

export default Change;
