import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import "./owner.css";

const OwnerDesignMore = () => {
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
                  Owner and Design Consultant (More than $200,000)
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
              <div className='px-20 pt-8 pb-4 text-black font11'>
                <div class='c86 doc-content'>
                  {/* Page 1 */}
                  <div>
                    <div>
                      <p class='c28'>
                        <span class='c5 c74'></span>
                      </p>
                    </div>
                    <div>
                      <p class='c36' id='h.gjdgxs'>
                        <span class='c1'>AGREEMENT FOR</span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c1'></span>
                      </p>
                      <p class='c36'>
                        <span class='c1'>DESIGN CONSULTANT SERVICES</span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36'>
                        <span class='c5 c3'>BETWEEN</span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36'>
                        <span class='c1'>
                          DURHAM COUNTY, BY AND THROUGH ITS AUTHORIZED AGENT
                        </span>
                      </p>
                      <p class='c36'>
                        <span class='c1'>
                          THE DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION
                        </span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36'>
                        <span class='c5 c3'>
                          hereinafter referred to as the Owner
                        </span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36'>
                        <span class='c5 c3'>AND</span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c1'></span>
                      </p>
                      <p class='c36'>
                        <span class='c1'>_____________________</span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36'>
                        <span class='c5 c3'>
                          hereinafter referred to as the Design Consultant
                        </span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c36 c41'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c11'>
                        <span class='c3'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECT:
                        </span>
                        <span class='c1'>
                          &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </p>
                      <p class='c11'>
                        <span class='c5 c3'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp;
                        </span>
                      </p>
                      <p class='c11'>
                        <span class='c3'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OWNER&#39;S
                          PROJECT NO:
                        </span>
                        <span class='c1'>&nbsp; </span>
                      </p>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c11'>
                        <span class='c3'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE:
                        </span>
                        <span class='c38'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </p>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      {/* <hr style='page-break-before: always; display: none' /> */}
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

export default OwnerDesignMore;
