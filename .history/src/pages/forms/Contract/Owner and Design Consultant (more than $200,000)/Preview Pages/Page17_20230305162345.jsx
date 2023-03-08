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
                  {/* Page 17 */}
                  <div>
                    <div className='ml-[3.9rem]'>
                      <p className='c5 c3 text-justify'>
                        associated fees or assessments, required for the
                        construction, use or occupancy of permanent structures
                        or for permanent changes in existing facilities, unless
                        otherwise agreed in writing. &nbsp;Copies of all
                        correspondence and applications shall be provided to the
                        Owner. &nbsp;The Owner shall reimburse the Design
                        Consultant for the actual cost of any fees or
                        assessments paid by the Design Consultant pursuant to
                        this subparagraph.
                      </p>
                    </div>

                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3d' start='4'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          The Design Consultant shall prepare such
                          clarifications and addenda to the bidding documents as
                          may be required. &nbsp;The Design Consultant will
                          provide these to the Owner for review prior to
                          issuance to all holders of bid documents.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3e' start='5'>
                      <li class='c4 li-bullet-36'>
                        <span class='c3'>
                          The Design Consultant will schedule and conduct
                          Pre-Bid Conferences with prospective bidders to review
                          the Project requirements. &nbsp;The Design Consultant
                          shall provide knowledgeable representatives, including
                          subconsultants, to participate in these conferences to
                          explain and clarify the bidding documents.
                          &nbsp;Within two (2) days after the Prebid Conference
                          the Design Consultant shall deliver to the Owner, if
                          needed, an addendum,{" "}
                        </span>
                        <span class='c3 c51'>
                          incorporating any changes required from the Prebid
                          Conference. &nbsp;The Design Consultant shall issue
                          any required final addendum at least three (3) days
                          prior to the bid date.
                        </span>
                        <span class='c5 c3'>&nbsp;</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3f' start='6'>
                      <li class='c4 li-bullet-37'>
                        <span class='c5 c3'>
                          The Design Consultant shall assist the Owner in
                          obtaining bids.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3g' start='7'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          The Design Consultant shall prepare a certified bid
                          tabulation and recommendation to the Owner concerning
                          the award of the construction contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3h' start='8'>
                      <li class='c4 li-bullet-35'>
                        <span class='c5 c3'>
                          Should first bidding or negotiation produce prices in
                          excess of the approved CCAP, the Design Consultant
                          shall participate with the Owner&#39;s Representative
                          in such re-bidding, re-negotiation, and re-design, at
                          no additional expense to the Owner, as may be
                          necessary to obtain price(s) within the approved CCAP
                          or price(s) acceptable to the Owner. &nbsp;The Owner
                          will assist in re-design decisions. &nbsp;All
                          re-design must be approved by the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3i' start='9'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          Should the Design Consultant re-design or conduct
                          re-bidding under its responsibilities set out in the
                          preceding paragraph, its&rsquo; Construction Phase and
                          Post Construction Services shall be extended to take
                          re-design/re-bid delays into account at no additional
                          expense to the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3j' start='10'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c51'>
                          At the conclusion of bidding, the Design Consultant
                          shall provide a copy of{" "}
                        </span>
                        <span class='c5 c3'>
                          the conformed bid drawings and specifications (not
                          100% review set or bid set), in a source file format,
                          with file names consistent with the Owner&rsquo;s
                          requirements, for the Owner&rsquo;s use in updating
                          its property accounting drawings for the Project
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3k' start='11'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Design Consultant shall assist the Owner&#39;s
                          Representative in the preparation of the Agreement(s)
                          between Owner and Contractor(s) for the Owner&#39;s
                          execution. &nbsp;If requested by the Owner, the Design
                          Consultant will prepare notice of contract award(s)
                          and Notice(s) to Proceed for the Owner to forward to
                          the Contractor(s).
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-2b' start='7'>
                      <li class='c4 li-bullet-32'>
                        <span class='c17 c3 c13'>Construction Phase.</span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3l' start='12'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Construction Phase of the Project will commence
                          with the award of the Construction Contract to the
                          Contractor and will terminate when the Contractor
                          achieves final completion of the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3m' start='13'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall consult with the Owner and
                          participate in all decisions as to the acceptability
                          of subcontractors and other persons and organizations
                          proposed by the Contractor for various portions of the
                          work.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3n' start='14'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall review and approve shop
                          drawings, samples, and other submissions of
                          Contractor(s) for conformance with the design concept
                          of the Project and for compliance with the
                          Construction Contract. &nbsp;The Design Consultant
                          shall prepare one final color board for the use of the
                          Owner and one to be kept on the jobsite containing the
                          Owner
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
