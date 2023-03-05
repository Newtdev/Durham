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
                  {/* Page 18 */}
                  <div>
                    <div className='ml-[3.9rem]'>
                      <p className='c5 c3 text-justify'>
                        approved submittal samples. &nbsp;The review and return
                        of submittals shall be accomplished by the Design
                        Consultant within fourteen (14) calendar days from date
                        of receipt except when otherwise authorized by the
                        Owner&#39;s Representative.
                      </p>
                    </div>

                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3o' start='15'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall provide necessary Project
                          drawings, in electronic format, to the Contractor and
                          subcontractors for use on this Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3p' start='16'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Owner&#39;s Representative will establish with the
                          Design Consultant procedures to be followed for review
                          and processing of all shop drawings, catalog
                          submissions, project reports, test reports,
                          maintenance manuals, and other necessary
                          documentation, as well as requests for changes and
                          applications for extensions of time.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3q' start='17'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall, when requested by the
                          Owner&#39;s Representative, prepare documentation
                          related to change orders to the Owner-Contractor
                          Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3r' start='18'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall render to the Owner&#39;s
                          Representative, within two (2) working days unless
                          otherwise authorized by the Owner&#39;s
                          Representative, interpretations of requirements of the
                          Construction Contract. &nbsp;The Design Consultant
                          shall make all interpretations consistent with the
                          intent of and reasonably inferable from the
                          Construction Contract. &nbsp;The Design
                          Consultant&#39;s decision in matters relating to
                          artistic effect shall be final if consistent with the
                          intent of the Construction Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3s' start='19'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Should errors, omissions or conflicts in the drawings,
                          specifications or other Construction Contract
                          documents by the Design Consultant be discovered, the
                          Design Consultant will prepare and submit to the
                          Owner&#39;s Representative, within two (2) working
                          days unless otherwise authorized by the Owner&#39;s
                          Representative, such amendments or supplementary
                          documents and provide consultation as may be required,
                          for which the Design Consultant shall make no
                          additional charges to the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3t' start='20'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c3'>
                          The Owner&#39;s Representative shall be the point of
                          contact for the Owner, except when the Owner shall
                          direct otherwise by Board policy or in writing.
                          &nbsp;All instructions to the Contractor(s) shall be
                          issued by the Design Consultant except when{" "}
                        </span>
                        <span class='c3 c73'>is</span>
                        <span class='c5 c3'>
                          &nbsp;directed otherwise by the Owner&#39;s
                          Representative.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3u' start='21'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant, including subconsultants, will
                          have access to the Project site at all times.
                          &nbsp;All site visits, observations and other
                          activities by the Design Consultant shall be
                          coordinated with the Owner&#39;s Representative and
                          written report of such visits made promptly to the
                          Owner&#39;s Representative.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3v' start='22'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant, including subconsultants, shall
                          make such periodic visits to the Project site as may
                          be necessary to familiarize themselves generally with
                          the progress and quality of the construction and to
                          determine in general if the construction is proceeding
                          in accordance with the Construction Contract. &nbsp;On
                          the basis of such on-site observations, the Design
                          Consultant, including subconsultants, shall take
                          reasonable steps to guard the Owner against defects
                          and deficiencies in the construction of the
                          Contractor. &nbsp;If the Design Consultant or a
                          subconsultant observes any construction that does not
                          conform to the Construction Contract, the Design
                          Consultant shall immediately make an oral and written
                          report of all such observations to the Owner&#39;s
                          Representative. &nbsp;The Design Consultant and its
                          subconsultants shall not be required to make
                          exhaustive or full-time on-site observations to check
                          the quality or quantity of the Contractor&rsquo;s
                          work, but shall make as many observations as may be
                          reasonably required to fulfil their obligations to the
                          Owner. &nbsp;The Design Consultant shall not be
                          responsible for construction means, methods,
                          techniques, sequences or procedures, or safety
                          precautions and programs in connection with the
                          construction.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3w' start='23'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Periodic visits by the Design Consultant shall be not
                          less than once weekly. &nbsp;Each subconsultant shall
                          make periodic visits not less than once every two
                          weeks, during the course of the Project applicable to
                          its discipline. &nbsp;During critical construction
                          phases, each
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
