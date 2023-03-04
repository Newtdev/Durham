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
                  {/* Page 16 */}
                  <div>
                    <ol class='c7 lst-kix_list_32-3i' start='9'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          Documents not complying with Subparagraph 3.1.5.8
                          shall be returned to the Design Consultant for
                          correction at no additional charge to the Owner and
                          with no change to the overall Project design schedule.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3j' start='10'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          After review and approval of the 60% Construction
                          Contract documents by the Owner, the Design Consultant
                          shall continue with preparation of final Construction
                          Contract and bid documents, including final
                          specifications for all authorized work on the Project
                          and shall incorporate in those final documents the
                          comments and any modifications and changes desired by
                          the Owner and any modifications required for
                          compliance with all applicable codes, regulations,
                          standards, the approved program, and prior written
                          approvals and instructions of the Owner. &nbsp;The
                          resulting final Construction Contract submittal is to
                          be a complete, fully coordinated, integrated package,
                          suitable for bidding distribution, without any
                          significant addenda or further significant
                          clarification required. &nbsp;If the Project is a
                          prototype that has been previously constructed, the
                          Design Consultant shall verify that all applicable
                          change orders from previous projects have been
                          incorporated into the bidding documents.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3k' start='11'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          The Design Consultant, and any relevant
                          subconsultants, shall participate in such reviews and
                          meetings as are necessary to ensure that the Project
                          design conforms to all applicable codes and all
                          requirements of responsible agencies and will make any
                          changes to the Construction Contract which are
                          required for issuance of all permits and legal
                          authorizations needed to construct the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3l' start='12'>
                      <li class='c4 li-bullet-33'>
                        <span class='c5 c3'>
                          The Design Consultant shall submit all relevant
                          applications for all required building permits within
                          a reasonable time to receive final comments in time to
                          issue any required addenda to the bidding documents.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3m' start='13'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          At the completion of the Construction Contract Phase,
                          the Design Consultant shall submit to the Owner up to
                          four (4) full size complete sets of the drawings and
                          design phase report of 100% complete documents
                          prepared by the Design Consultant for final
                          Construction Contract Phase submittal which shall
                          include the final working drawings and specifications.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3n' start='14'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          A statement from the Design Consultant with the final
                          Construction Contract Phase submittal shall be
                          included that acknowledges that Design Consultant has
                          reviewed all of the applicable Design Guidelines and
                          Educational Specifications and represents that they
                          have been incorporated in the documents, and that the
                          actual versus programmed square footage has not
                          changed from the approved Schematic Design and 60%
                          Construction Contract submittals unless specifically
                          noted in writing.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3o' start='15'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Design Consultant shall submit with the final
                          Construction Contract package, meeting minutes, etc.
                          to show how review comments made in Design Development
                          have been addressed. &nbsp;It should be clear from the
                          notes if the specific item was incorporated into the
                          Construction Contract submittal or not (with an
                          explanation).
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-2a start' start='6'>
                      <li class='c4 li-bullet-34'>
                        <span class='c3 c13'>
                          Permitting and Bidding/Negotiation Phase
                        </span>
                        <span class='c5 c3'>.</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a start' start='1'>
                      <li class='c4 li-bullet-23'>
                        <span class='c5 c3'>
                          After receiving written authorization from the Owner,
                          the Design Consultant shall proceed with the
                          Permitting and Bidding/Negotiation Phase. &nbsp;There
                          may be more than one Permitting and
                          Bidding/Negotiation Phase, depending upon the
                          Management Plan.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3b' start='2'>
                      <li class='c4 li-bullet-35'>
                        <span class='c5 c3'>
                          The Design Consultant shall coordinate and document
                          the reproduction, distribution and retrieval of the
                          bidding documents. &nbsp;Further, the Design
                          Consultant shall coordinate and document the
                          collection and return of deposits or payments.
                          &nbsp;In addition to the bidders, documents shall be
                          issued to all required code authorities, contractors,
                          plan room, services, and others, as the Owner
                          designates.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3c' start='3'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          The Design Consultant shall facilitate the filing of
                          applications, endeavor to expedite and coordinate
                          obtaining all necessary permits, licenses and
                          approvals, including paying any
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
