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
                  {/* Page 14 */}
                  <div>
                    <ol class='c7 lst-kix_list_4-0a' start='3'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>
                          Critical sections and details identified and drawn
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0b' start='4'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Roof plan with all penetrations
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0c' start='5'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>
                          Kitchen layout and equipment schedule
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0d' start='6'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>
                          Exterior elevations with control joints located
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0e' start='7'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>
                          Enlarged toilet room layout with all fixtures and
                          dimensions
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0f' start='8'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Toilet room elevations</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0g' start='9'>
                      <li class='c0 li-bullet-28'>
                        <span class='c5 c3'>
                          Reflected ceiling plan with all fixtures located and
                          ceiling height identified
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0h' start='10'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Bulkhead and lintel details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0i' start='11'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Finish plan and schedule</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0j' start='12'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Door and hardware schedule, elevations, and head and
                          jamb details
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0k' start='13'>
                      <li class='c0 li-bullet-28'>
                        <span class='c5 c3'>Masonry details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0l' start='14'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Roof details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0m' start='15'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>Stair details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0n' start='16'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>
                          Elevator sections and details if applicable
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0o' start='17'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Furniture layout</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0p' start='18'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Casework elevations</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0q' start='19'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>
                          Air Barrier System details for all penetrations and
                          terminations
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_4-0r' start='20'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4d' start='4'>
                      <li class='c11 c21 li-bullet-29'>
                        <span class='c17 c3 c13'>Structural</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_5-0 start' start='1'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Demolition plans</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_5-0' start='2'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>Footing plans and details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_5-0' start='3'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Reinforcing steel plans</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_5-0' start='4'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>Structural steel plans</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_5-0' start='5'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4e' start='5'>
                      <li class='c11 c21 li-bullet-29'>
                        <span class='c17 c3 c13'>Plumbing</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0 start' start='1'>
                      <li class='c0 li-bullet-28'>
                        <span class='c5 c3'>Demolition plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0' start='2'>
                      <li class='c0 li-bullet-13'>
                        <span class='c5 c3'>Fixture schedule</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0' start='3'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>Plumbing plans</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0' start='4'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Enlarged toilet room plans</span>
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
