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
                  {/* Page 13 */}
                  <div>
                    <div className='ml-[3.9rem]'>
                      <p className='c5 c3 text-justify'>
                        Plan and a summary of programmed versus actual square
                        footage in a format defined by the Owner by room or
                        area. &nbsp; &nbsp;The Design Consultant shall submit an
                        estimate and breakdown of the anticipated construction
                        cost no later than two (2) business days in advance of
                        the scheduled 60% Construction Contract documents review
                        meeting. &nbsp;The Design Consultant shall prepare such
                        estimates in the form prescribed by the Owner to assure
                        that the project cost is within the CCAP. &nbsp;The
                        documents for this 60% Construction Contract submittal
                        shall, at a minimum, satisfy all of the requirements of
                        the Design Development Phase, plus all of the following
                        unless otherwise agreed in writing:
                      </p>
                    </div>

                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4a start' start='1'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c3 c13'>General</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0 start' start='1'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Complete index of drawings</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='2'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Vicinity plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='3'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Building Code Summary</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='4'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>Life safety plans</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='5'>
                      <li class='c11 c18 li-bullet-12'>
                        <span class='c5 c3'>Energy data</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='6'>
                      <li class='c11 c18 li-bullet-28'>
                        <span class='c5 c3'>Accessibility summary</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='7'>
                      <li class='c11 c18 li-bullet-12'>
                        <span class='c5 c3'>U.L. details</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_2-0' start='8'>
                      <li class='c11 c18 li-bullet-13'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4b' start='2'>
                      <li class='c11 c21 li-bullet-17'>
                        <span class='c17 c3 c13'>Civil / Landscaping</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0 start' start='1'>
                      <li class='c11 c18 li-bullet-16'>
                        <span class='c5 c3'>Copy of the Site Survey</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='2'>
                      <li class='c11 c18 li-bullet-28'>
                        <span class='c5 c3'>
                          Site plan satisfactory for site plan approval
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='3'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>Site demolition plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='4'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Staking plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='5'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Erosion control plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='6'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>Grading plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='7'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Site utility plan</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='8'>
                      <li class='c11 c18 li-bullet-12'>
                        <span class='c5 c3'>
                          Storm drainage plan, details and schedule
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='9'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>Paving plans and details</span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='10'>
                      <li class='c11 c18 li-bullet-7'>
                        <span class='c5 c3'>
                          Landscaping plans and details, plant schedule
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_3-0' start='11'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4c' start='3'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c17 c3 c13'>Architectural</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0 start' start='1'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>Demolition plans</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0' start='2'>
                      <li class='c0 li-bullet-28'>
                        <span class='c5 c3'>
                          Key plans with final room numbers as approved by Owner
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
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
