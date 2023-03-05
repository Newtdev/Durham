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
                  {/* Page 6 */}
                  <div>
                    <ol class='c7 lst-kix_list_22-2f' start='6'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant represents and warrants that at
                          the time of execution of this Agreement he has and
                          will retain all licenses and certifications required
                          of him to perform the services and other work
                          identified in this Agreement and associated contract
                          documents. &nbsp;The Design Consultant further
                          represents and warrants that it is lawfully licensed
                          to practice architecture in the jurisdiction where the
                          project is located. &nbsp;The Design Consultant shall
                          keep this licensure in good standing without lapse
                          throughout the term of this Agreement. &nbsp;The
                          Design Consultant shall provide proof of this
                          licensure to the Owner and/or Contractor upon request.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_10-1 start' start='5'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c3 c13'>
                          Division of Responsibilities/Services
                        </span>
                        <span class='c5 c3'>
                          . &nbsp;The Design Consultant understands and agrees
                          that should the Owner&#39;s Representative or
                          consultant retained by the Owner provide the Design
                          Consultant with any estimating assistance, cost or
                          time control recommendations or other consultation,
                          recommendations or suggestions, any or all such
                          activities on the part of the Owner, or any other
                          representative of the Owner shall in no way relieve
                          the Design Consultant of the responsibility of
                          fulfilling its obligations and responsibilities under
                          this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 3</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>BASIC SERVICES</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <ol class='c7 lst-kix_list_23-1 start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Scope of Services</span>
                        <span class='c5 c3'>
                          . &nbsp;The Basic Services, as defined in this
                          Article, to be provided by the Design Consultant shall
                          be performed in the phases described hereinafter and
                          shall include architectural, landscape architectural,
                          civil engineering, structural engineering, mechanical
                          engineering, electrical engineering, roofing
                          engineering, and all other services customarily
                          furnished by an architect/engineer on similar projects
                          in accordance with generally accepted architectural
                          and engineering practices consistent with the terms of
                          this Agreement. &nbsp;The Design Consultant shall
                          utilize an individual or firm with specific expertise
                          in acoustics for any middle or high school auditorium
                          or music room. &nbsp;The Basic Services to be
                          performed by the Design Consultant consist of
                          professional tasks which have as their objective
                          design, production of technical documents and
                          construction administration to provide the Owner with
                          a complete and properly functioning facility.
                          &nbsp;The Basic Services shall be performed in
                          accordance with the standard of care set forth in this
                          Agreement. &nbsp;The facility shall be suitable for
                          the Owner&rsquo;s purposes, be structurally sound,
                          satisfy the Owner&rsquo;s requirements, comply with
                          all applicable codes and laws, and be completed on a
                          timely basis and within the approved construction
                          budget. &nbsp;To provide the optimal constructed
                          value, the Design Consultant shall analyze alternative
                          materials and building systems at the appropriate
                          phases throughout the Basic Services phases.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_23-2a start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          This Agreement describes the Design Consultant&#39;s
                          Basic Services in seven phases. &nbsp;Each of these
                          phases (Design Narrative, Schematic Design, Design
                          Development, Construction Contract, Permitting and
                          Bid/ Negotiation, Construction, and Post Construction)
                          may be divided to facilitate bidding of separate trade
                          contracts or phased construction activities. &nbsp;The
                          Owner shall have the right to determine early, late
                          and other separate contract awards and may modify the
                          Management Plan to change the number and times of
                          issue of various contract document packages at no
                          additional compensation to the Design Consultant so
                          long as there are no more than two bid packages for
                          the various portions of the Project (which package is
                          exclusive of individual material purchase orders, bid
                          package alternates and rework by the Design Consultant
                          of documents already completed).
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_23-3a start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          The Services described below are under the Project
                          phases in which they customarily occur. &nbsp;This
                          order is for convenience only and does not necessarily
                          reflect the sequence in which a service will actually
                          be performed, or necessarily limit the Project, or a
                          designated portion of the Project, to one of each
                          phase. &nbsp;The Owner reserves the right to designate
                          the phasing of segregated portions of the Services and
                          to modify the Management Plan, within the terms and
                          conditions of this Agreement.
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
