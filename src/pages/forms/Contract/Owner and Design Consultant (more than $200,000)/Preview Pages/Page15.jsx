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
                  {/* Page 15 */}
                  <div>
                    <ol class='c7 lst-kix_list_6-0a' start='5'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>
                          Riser diagrams for waste and vent, water, storm
                          drainage, and gas
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0b' start='6'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>Plumbing site plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0c' start='7'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Plumbing details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_6-0d' start='8'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4f' start='6'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c17 c3 c13'>Mechanical</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0 start' start='1'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Demolition plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='2'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Ductwork and piping completely located and sized
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='3'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Complete equipment schedules</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='4'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Mechanical room enlarged plans and sections
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='5'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Schematic control diagrams</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='6'>
                      <li class='c0 li-bullet-16'>
                        <span class='c5 c3'>Mechanical details</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_7-0' start='7'>
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
                    <ol class='c7 lst-kix_list_32-4g' start='7'>
                      <li class='c11 c21 li-bullet-9'>
                        <span class='c17 c3 c13'>Electrical</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0 start' start='1'>
                      <li class='c0 li-bullet-7'>
                        <span class='c5 c3'>Demolition plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='2'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Fixture schedule</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='3'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Electrical site plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='4'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Power plan with panels located and identified
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='5'>
                      <li class='c0 li-bullet-13'>
                        <span class='c5 c3'>Lighting plan</span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='6'>
                      <li class='c11 c56 c59 li-bullet-30'>
                        <span class='c5 c3'>
                          Complete plans for auxiliary systems including but not
                          limited to, fire alarm, voice/data, intercom, MATV,
                          and security
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='7'>
                      <li class='c0 li-bullet-13'>
                        <span class='c5 c3'>
                          Riser diagrams for all systems
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='8'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Panel schedule</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_8-0' start='9'>
                      <li class='c0 li-bullet-31'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-4h' start='8'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c17 c3 c13'>Fire Protection</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_33-0 start' start='1'>
                      <li class='c0 li-bullet-6'>
                        <span class='c5 c3'>Demolition plan</span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_33-0' start='2'>
                      <li class='c0 li-bullet-12'>
                        <span class='c5 c3'>
                          Fire protection plan with location of all hose and
                          valve cabinets identified
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_33-0' start='3'>
                      <li class='c0 li-bullet-16'>
                        <span class='c5 c3'>
                          Preliminary fire protection design calculations
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c27'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_33-0' start='4'>
                      <li class='c0 li-bullet-16'>
                        <span class='c5 c3'>Outline specifications</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
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
