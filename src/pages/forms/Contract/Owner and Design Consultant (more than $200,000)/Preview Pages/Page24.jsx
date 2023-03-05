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
                  {/* Page 24 */}
                  <div>
                    <ol class='c7 lst-kix_list_34-3h' start='8'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          Prebid conference for each bid package.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3i' start='9'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Preconstruction conference for each bid package.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3j' start='10'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          Construction progress meetings on a weekly basis for
                          each bid package.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3k' start='11'>
                      <li class='c4 li-bullet-36'>
                        <span class='c5 c3'>
                          Substantial completion, final completion and
                          completion of warranty period inspections for the
                          Construction Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2j' start='10'>
                      <li class='c4 li-bullet-41'>
                        <span class='c5 c3'>
                          The Design Consultant shall be responsible for
                          scheduling and attending any meetings necessary to
                          properly coordinate the design effort including,
                          without limitation, meetings with governing agencies,
                          code officials and applicable utilities.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2k' start='11'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          The Design Consultant shall be responsible for
                          preparing accurate and complete minutes of all Project
                          conferences and distributing same to all participants.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-1c' start='4'>
                      <li class='c4 li-bullet-33'>
                        <span class='c3 c13'>Serving As Witness</span>
                        <span class='c5 c3'>.</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2l' start='12'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Design Consultant, and any required subconsultant,
                          shall prepare for and provide testimony or otherwise
                          participate in public hearings, and legal proceedings,
                          including as necessary to secure governmental approval
                          of zoning or land use clearances, for the Project as
                          part of Basic Services, unless said testimony or
                          participation is requested by the Owner and consists
                          of expert testimony not related to this Project or the
                          Contractor&rsquo;s work.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-1d' start='5'>
                      <li class='c4 li-bullet-27'>
                        <span class='c3 c13'>Construction Warranty</span>
                        <span class='c5 c3'>.</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2m' start='13'>
                      <li class='c4 li-bullet-37'>
                        <span class='c5 c3'>
                          The Design Consultant and its subconsultants shall
                          assist the Owner in resolution of warranty issues as
                          may be required to determine responsibility for
                          deficiencies.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2n' start='14'>
                      <li class='c4 li-bullet-42'>
                        <span class='c5 c3'>
                          The Design Consultant and its subconsultants shall
                          conduct an inspection of the project one (1) month
                          prior to warranty expiration and provide to the Owner
                          a written report specifying any warranty deficiencies
                          which may exist.
                        </span>
                      </li>
                    </ol>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 4</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>COMPENSATION</span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_35-1a start' start='1'>
                      <li class='c4 li-bullet-39'>
                        <span class='c3 c13'>Basic Services Compensation</span>
                        <span class='c5 c3'>. </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c16'>
                      <span class='c5 c3'>
                        The Owner shall compensate the Design Consultant in
                        accordance with the terms and conditions of this
                        Agreement, including the following:
                      </span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_36-2a start' start='1'>
                      <li class='c4 li-bullet-40' id='h.30j0zll'>
                        <span class='c3'>
                          For the Basic Services of the Design Consultant,
                          compensation shall be in the amount of $
                        </span>
                        <span class='c3 c8'>__________</span>
                        <span class='c5 c3'>
                          , plus approved reimbursable expenses (&ldquo;Basic
                          Services Compensation&rdquo;).
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_36-3a start' start='1'>
                      <li class='c4 li-bullet-25'>
                        <span class='c5 c3'>
                          For the purposes of Subparagraph 4.1.1, no amount is
                          to be included within the scope of the CCAP for the
                          cost of land, rights-of-way or other non-construction
                          costs which are the responsibility of the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_36-3b' start='2'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          For the purposes of Subparagraph 4.1.1, no labor and
                          materials furnished by the Owner for the Project shall
                          be included with the scope of the CCAP.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_36-3c' start='3'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          For the purposes of Subparagraph 4.1.1, should the
                          Owner request additions to the Project which would
                          cause a change or changes in the scope of the Program
                          of Requirements or previously approved designs or
                          design criteria, the CCAP shall be increased by the
                          estimated aggregate amount of such change(s).
                        </span>
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
