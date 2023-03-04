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
                  {/* Page 11 */}
                  <div>
                    <ol class='c7 lst-kix_list_11-1 start' start='1'>
                      <li class='c11 c35 li-bullet-6'>
                        <span class='c5 c3'>
                          Plan drawings with all structural members located and
                          sized.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c29'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_11-1' start='2'>
                      <li class='c11 c35 li-bullet-16'>
                        <span class='c5 c3'>Final building elevations. </span>
                      </li>
                    </ol>
                    <p class='c2 c29'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_11-1' start='3'>
                      <li class='c11 c35 li-bullet-13'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c84'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_11-1' start='4'>
                      <li class='c11 c35 li-bullet-6'>
                        <span class='c5 c3'>Foundation drawings. </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4c' start='3'>
                      <li class='c11 c21 li-bullet-15'>
                        <span class='c17 c3 c13'>Plumbing</span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_14-0 start' start='1'>
                      <li class='c11 c18 li-bullet-12'>
                        <span class='c5 c3'>
                          Piping, fixtures and equipment substantially located
                          and sized.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_14-0' start='2'>
                      <li class='c11 c18 li-bullet-12'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4d' start='4'>
                      <li class='c11 c21 li-bullet-9'>
                        <span class='c17 c3 c13'>Mechanical </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0 start' start='1'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Heating and cooling load calculations for each space
                          and major duct or pipe runs sized to interface
                          structural.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='2'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Major mechanical equipment scheduled indicating size
                          and capacity.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='3'>
                      <li class='c11 c25 li-bullet-11'>
                        <span class='c5 c3'>
                          Ductwork and piping substantially located and sized.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='4'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Above ceiling and/or mechanical room layouts to verify
                          all, structural, mechanical, plumbing, electrical and
                          fire protection systems fit in available spaces.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='5'>
                      <li class='c11 c25 li-bullet-5'>
                        <span class='c5 c3'>
                          Location of devices in ceiling.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='6'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Legend showing all symbols used on drawings.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='7'>
                      <li class='c11 c18 li-bullet-6'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c9'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_13-0' start='8'>
                      <li class='c11 c25 li-bullet-10'>
                        <span class='c5 c3'>
                          Completed life cycle cost analysis in a format
                          acceptable to the Owner and Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4e' start='5'>
                      <li class='c11 c21 li-bullet-17'>
                        <span class='c17 c3 c13'>Electrical </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0 start' start='1'>
                      <li class='c11 c35 li-bullet-7'>
                        <span class='c5 c3'>
                          All power consuming equipment and load
                          characteristics.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c29'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='2'>
                      <li class='c11 c35 li-bullet-6'>
                        <span class='c5 c3'>Total electric load. </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='3'>
                      <li class='c11 c42 li-bullet-18'>
                        <span class='c5 c3'>
                          Major electrical equipment (switchgear, distribution
                          panels, emergency generator, transfer switches, UPS
                          system, etc.) dimensioned and drawn to scale into the
                          space allocated.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='4'>
                      <li class='c11 c42 li-bullet-19'>
                        <span class='c5 c3'>
                          Preliminary site lighting design coordinated with the
                          power company.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='5'>
                      <li class='c11 c42 li-bullet-20'>
                        <span class='c5 c3'>
                          Outline specifications of materials to be specified in
                          the Construction Contract Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='6'>
                      <li class='c11 c42 li-bullet-20'>
                        <span class='c5 c3'>
                          Lighting, power, telecommunications and office
                          automation devices and receptacles shown in plan.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='7'>
                      <li class='c11 c42 li-bullet-21'>
                        <span class='c5 c3'>
                          Preliminary light fixture schedule.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_30-0' start='8'>
                      <li class='c11 c42 li-bullet-18'>
                        <span class='c5 c3'>
                          One line diagram of specialized electrical systems
                          (fire alarm, intercom, voice/data, MATV) showing
                          location of control equipment/panels and devices.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c30'>
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
