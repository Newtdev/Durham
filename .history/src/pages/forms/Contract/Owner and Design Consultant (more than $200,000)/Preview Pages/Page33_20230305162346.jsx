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
                  {/* Page 33 */}
                  <div>
                    <div className='ml-[4.2rem] text-justify'>
                      <p className='c3 c5'>
                        Design Consultant shall immediately discontinue all
                        Services affected unless such notice directs otherwise.
                        &nbsp;In the event of a termination for convenience of
                        the Owner, the Design Consultant&#39;s sole and
                        exclusive right and remedy is to be paid for all work
                        performed and to receive equitable adjustment for all
                        work performed through the date of termination.
                        &nbsp;The Design Consultant shall not be entitled to be
                        paid any amount as profit for unperformed Services or
                        consideration for the termination of convenience by the
                        Owner.
                      </p>
                    </div>

                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1f' start='6'>
                      <li class='c6 c44 li-bullet-52'>
                        <span class='c5 c3'>
                          Should the Owner terminate this agreement as provided
                          for under this Article, the Owner will acquire such
                          drawings, including the ownership and use of all
                          drawings, specifications, documents and materials
                          relating to the Project prepared by or in the
                          possession of the Design Consultant. &nbsp;The Design
                          Consultant will turn over to the Owner in a timely
                          manner and in good unaltered condition all original
                          drawings, specifications, documents, materials, and
                          computer files.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1g' start='7'>
                      <li class='c6 c44 li-bullet-53'>
                        <span class='c5 c3'>
                          The payment of any sums by the Owner under this
                          Article 10 shall not constitute a waiver of any claims
                          for damages by the Owner for any breach of the
                          Agreement by the Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <h1 class='c34 c63 c44'>
                      <span class='c1'></span>
                    </h1>
                    <h1 class='c36 c66'>
                      <span class='c1'>ARTICLE 11</span>
                    </h1>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>SUCCESSORS/ASSIGNMENT</span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_47-1a start' start='1'>
                      <li class='c6 c44 li-bullet-54'>
                        <span class='c5 c3'>
                          This Agreement shall inure to the benefit of and be
                          binding on the heirs, successors, assigns, trustees
                          and personal representatives of the Owner, as well as
                          the permitted assigns and trustees of the Design
                          Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_47-1b' start='2'>
                      <li class='c6 c44 li-bullet-55'>
                        <span class='c5 c3'>
                          &nbsp;The Design Consultant shall not assign, sublet
                          or transfer its interest in this Agreement without the
                          written consent of the Owner, except that the Design
                          Consultant may assign accounts receivable to a
                          commercial bank or financial institution for securing
                          loans, without prior approval of the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c74'></span>
                    </p>
                    <ol class='c7 lst-kix_list_47-1c' start='3'>
                      <li class='c6 c44 li-bullet-56'>
                        <span class='c5 c3'>
                          &nbsp; If the Owner requests the Design Consultant to
                          execute consents reasonably required to facilitate
                          assignment to Durham County or Durham County&rsquo;s
                          lender, the Design Consultant shall execute all such
                          consents that are consistent with this Agreement,
                          provided the proposed consent is submitted to the
                          Design Consultant for review at least 7 days prior to
                          execution. &nbsp;The Design Consultant shall not be
                          required to execute consents that would require
                          knowledge, services, or responsibilities beyond the
                          scope of this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c28'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 12</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>
                        OWNERSHIP OF DOCUMENTS/CONFIDENTIAL
                        INFORMATION/MARKETING
                      </span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_48-1a start' start='1'>
                      <li class='c6 c44 li-bullet-57'>
                        <span class='c5 c3'>
                          The Project drawings and specifications are
                          instruments of service that shall remain the joint
                          property of the Design Consultant and the Owner
                          whether the Project for which they are made is built
                          or not. &nbsp;The Owner shall retain reproducible
                          copies of the Project drawings and specifications for
                          information and reference and use in connection with
                          the Owner&#39;s use and occupancy of the Project and
                          for the Owner&#39;s future requirements of the Project
                          facilities, including without limitation any
                          alteration or expansion in any manner the Owner deems
                          appropriate without additional compensation to the
                          Design Consultant. &nbsp;The Owner shall indemnify and
                          hold harmless the Design Consultant in connection with
                          the Owner&rsquo;s use of the Project &nbsp; drawings
                          and specifications on a new project without the Design
                          Consultant&#39;s consent.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_48-1b' start='2'>
                      <li class='c6 c44 li-bullet-47'>
                        <span class='c5 c3'>
                          In order for the Design Consultant to fulfill this
                          Agreement effectively, it may be necessary or
                          desirable for the Owner to disclose to the Design
                          Consultant confidential and proprietary information
                          and trade secrets pertaining to the Owner&#39;s past,
                          present and future activities. The
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
