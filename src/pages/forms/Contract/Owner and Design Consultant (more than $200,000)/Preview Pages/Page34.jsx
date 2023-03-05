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
                  {/* Page 34 */}
                  <div>
                    <div className='ml-[4.2rem] text-justify'>
                      <p className='c5 c3'>
                        Design Consultant hereby agrees to treat any and all
                        information gained by it as a result of the Services
                        performed hereunder as strictly confidential. &nbsp;The
                        Design Consultant further agrees that it will not
                        disclose during the period of this Agreement or
                        thereafter to anyone outside of the authorized Project
                        team (1) Owner&#39;s trade secrets or (2) Owner&#39;s
                        confidential and proprietary information.
                      </p>
                    </div>

                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_48-1c' start='3'>
                      <li class='c6 c44 li-bullet-58'>
                        <span class='c5 c3'>
                          The Design Consultant shall have the right to include
                          photographic or artistic representations of the design
                          of the Project among the Design Consultant&rsquo;s
                          promotional and professional materials with the prior
                          written consent of the Owner. &nbsp;The Design
                          Consultant shall be given reasonable access to the
                          completed Project to make such representations.
                          &nbsp;However, the Design Consultant&rsquo;s
                          promotional materials shall not include the
                          Owner&rsquo;s staff, students, or confidential or
                          proprietary information. &nbsp;This section shall
                          survive the termination of this Agreement, unless the
                          Owner terminates this Agreement for cause pursuant to
                          Article 10.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 13</span>
                    </p>
                    <p class='c28'>
                      <span class='c1'></span>
                    </p>
                    <h1 class='c36 c66'>
                      <span class='c1'>ADDITIONAL PROVISIONS</span>
                    </h1>
                    <p class='c39'>
                      <span class='c5 c74'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1a start' start='1'>
                      <li class='c6 li-bullet-59'>
                        <span class='c5 c3'>
                          The Design Consultant acknowledges receipt of all
                          Board policies through the Board&rsquo;s website
                          (http://www.dpsnc.net) and agrees to comply with their
                          provisions. The Design Consultant shall ensure that
                          its subconsultants comply with all Board policies.
                          &nbsp;The Design Consultant and its subconsultants
                          shall also comply with the Owner&rsquo;s site and
                          school building access procedures when working on the
                          Owner&rsquo;s property.
                        </span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2a start' start='1'>
                      <li class='c6 li-bullet-60'>
                        <span class='c5 c3'>
                          Use of Drones. The Design Consultant acknowledges that
                          it must obtain a signed written consent form from the
                          Superintendent or designee to operate any and all
                          aerial drones on the Owner&rsquo;s property.
                          &nbsp;Drones shall be operated in accordance with the
                          Owner&rsquo;s policy and all applicable Federal
                          Aviation Administration (FAA) regulations and North
                          Carolina Department of Transportation (NCDOT) Division
                          of Aviation requirements. &nbsp;Any request to operate
                          a drone must be submitted to the Superintendent or
                          designee in advance of the desired flight time and
                          provide the following: the name(s) of the drone pilot
                          and any individuals participating, proof of insurance
                          coverage for the drone, proof of any required FAA
                          permit, proof of any required NCDOT permit, and a
                          detailed flight plan to include specific time and
                          specific location.
                        </span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1b' start='2'>
                      <li class='c6 li-bullet-48'>
                        <span class='c5 c3'>Applicable Laws</span>
                        <span class='c5 c3'>.</span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2b' start='2'>
                      <li class='c6 li-bullet-61'>
                        <span class='c5 c3'>
                          &nbsp;This Agreement and the relationship of the
                          parties shall be governed by the laws of the State of
                          North Carolina.
                        </span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2c' start='3'>
                      <li class='c6 li-bullet-62'>
                        <span class='c5 c3'>
                          Design Consultant and its subconsultants shall comply
                          with all applicable laws and regulations in providing
                          the Services. In particular, the Design Consultant
                          shall not employ any individuals who are not
                          authorized under federal law to work in the United
                          States. Design Consultant represents and warrants that
                          it is aware of and in compliance with the Immigration
                          Reform and Control Act and North Carolina law (Article
                          2 of Chapter 64 of the North Carolina General
                          Statutes) requiring use of the E-Verify system for
                          employers that employ twenty-five (25) or more
                          employees. Design Consultant specifically represents
                          and warrants that it is and will remain in compliance
                          with these laws at all times while providing the
                          Services. Design Consultant shall also ensure that its
                          subconsultants will remain in compliance with these
                          laws at all times while providing subcontracted
                          services in connection with this Agreement. Design
                          Consultant is responsible for providing affordable
                          health care coverage to all of its full-time employees
                          providing services to the school system. The
                          definitions of &ldquo;affordable coverage&rdquo; and
                          &ldquo;full-time employee&rdquo; are governed by the
                          Affordable Care Act and accompanying IRS and Treasury
                          Department regulations.
                        </span>
                      </li>
                    </ol>
                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2d' start='4'>
                      <li class='c6 li-bullet-63'>
                        <span class='c5 c3'>
                          &nbsp; Lunsford Act/Criminal Background Checks. The
                          Design Consultant also acknowledges that G.S. &sect;
                          14-208.18 prohibits anyone required to register as a
                          sex offender under Article 27A of Chapter 14 of the
                          General Statutes from knowingly being on the premises
                          of any school. &nbsp;The
                        </span>
                      </li>
                    </ol>
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
