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
                  {/* Page 7 */}
                  <div>
                    <ol class='c7 lst-kix_list_23-3b start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          The Design Consultant agrees that time is of the
                          essence and that failure to perform duties on the
                          Project within the time limits established in the
                          Management Plan may result in damages to the Owner.
                        </span>
                      </li>
                    </ol>

                    <div>
                      <p class='c2 c14'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_24-2 start' start='2'>
                        <li class='c11 c70 li-bullet-0'>
                          <span class='c3 c13'>Design Narrative Phase</span>
                          <span class='c5 c3'>.</span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3a start' start='1'>
                        <li class='c11 c46 li-bullet-2'>
                          <span class='c5 c3'>
                            The Design Consultant shall examine and analyze
                            available information provided by the Owner and
                            shall advise and recommend as to additional
                            information necessary to begin specific design work
                            on the Project. &nbsp;
                          </span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3b' start='2'>
                        <li class='c11 c46 li-bullet-3'>
                          <span class='c5 c3'>
                            Upon analysis of all available information and prior
                            to initiating any design tasks, the Design
                            Consultant shall participate in a pre-design Project
                            analysis on the dates specified in the Management
                            Plan contained in Exhibit C or as may subsequently
                            be approved. &nbsp;The Design Consultant shall have
                            in attendance the individuals who will represent the
                            primary architectural and engineering disciplines on
                            the Project and others as may be requested by the
                            Owner&#39;s Representative. &nbsp;The Design
                            Consultant shall take and transcribe minutes of the
                            sessions.
                          </span>
                        </li>
                      </ol>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3c' start='3'>
                        <li class='c11 c70 li-bullet-0'>
                          <span class='c5 c3'>
                            Upon conclusion of the pre-design Project analysis
                            and in accordance with the Management Plan, the
                            Design Consultant shall prepare a report to the
                            Owner (hereinafter referred to as the Design
                            Narrative) which is the Design Consultant&#39;s
                            interpretation of the Project requirements, design
                            parameters and objectives, and results of the
                            pre-design Project analysis. &nbsp;To the maximum
                            extent possible, the Design Narrative will contain
                            diagrammatic studies and pertinent text relative to:
                            design concept; Program of Requirements; analysis of
                            alternatives; internal functions; human, vehicle and
                            material flow patterns; general space allocations;
                            detailed review of operating functions; studies of
                            adjacency, vertical and horizontal affinities; and
                            outline descriptions of major building components
                            and systems.
                          </span>
                        </li>
                      </ol>
                      <p class='c2'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3d' start='4'>
                        <li class='c11 c46 li-bullet-3'>
                          <span class='c5 c3'>
                            Upon written authorization from the Owner to
                            proceed, and based on the approved Design Narrative,
                            the anticipated construction cost, Program of
                            Requirements, and the Management Plan (Exhibits A, B
                            and C), the Design Consultant shall prepare
                            Schematic Design studies consisting of drawings and
                            other documents illustrating the design concept,
                            scale and relationship of the Project components for
                            approval by the Owner.
                          </span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-2a start' start='2'>
                        <li class='c11 c46 li-bullet-3'>
                          <span class='c3 c13'>Schematic Design Phase</span>
                          <span class='c5 c3'>.</span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3e' start='5'>
                        <li class='c11 c46 li-bullet-3'>
                          <span class='c5 c3'>
                            The Design Consultant shall periodically provide the
                            Owner&#39;s Representative with copies of Schematic
                            Design studies for the Owner&#39;s
                            Representative&#39;s review during the Schematic
                            Design Phase. &nbsp;At the end of the Schematic
                            Design Phase, the Design Consultant shall provide
                            the Owner&#39;s Representative with &nbsp; up to
                            four (4) full size complete sets of the drawings and
                            other documents for approval by the Owner.
                          </span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3f' start='6'>
                        <li class='c11 c46 li-bullet-2'>
                          <span class='c5 c3'>
                            The Design Consultant, and the relevant
                            subconsultants, shall participate as requested in
                            meetings with Owner&#39;s staff to review the
                            project, receive the Owner&#39;s input and provide
                            responses to input.
                          </span>
                        </li>
                      </ol>
                      <p class='c28 c32'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3g' start='7'>
                        <li class='c11 c46 li-bullet-3'>
                          <span class='c5 c3'>
                            The Design Consultant shall prepare the necessary
                            documents and make presentations as scheduled to the
                            Board of Education and/or its committees as
                            determined by the Facility Planning &amp;
                            Construction Department. &nbsp;Documents required
                            for presentation shall include mounted and colored
                            site plans, floor plans and elevations.
                          </span>
                        </li>
                      </ol>
                      <p class='c2 c26'>
                        <span class='c5 c3'></span>
                      </p>
                      <ol class='c7 lst-kix_list_25-3h' start='8'>
                        <li class='c11 c46 li-bullet-2'>
                          <span class='c5 c3'>
                            Documents prepared by the Design Consultant for
                            final Schematic Design Phase submittal shall include
                            drawings and a written report. &nbsp;The drawings
                            shall include, but not be limited to, a proposed
                            site utilization study of the property of the
                            Project, schematic plans of all floor plan
                            conditions, and simplified elevations indicating the
                            fundamentals of the architectural concept. &nbsp;The
                            report shall include the status of the work in
                            accordance with the Management Plan, a summary of
                            programmed versus actual square footage by room or
                            area and net to gross comparisons in a format
                            defined by the Owner; such discussion of design
                            factors, if any, as are
                          </span>
                        </li>
                      </ol>
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
