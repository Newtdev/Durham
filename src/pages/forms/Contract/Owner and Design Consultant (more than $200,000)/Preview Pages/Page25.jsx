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
                  {/* Page 25 */}
                  <div>
                    <ol class='c7 lst-kix_list_36-3d' start='4'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          In the event the Owner requests changes to the Project
                          or elects not to complete the Project or any portion
                          thereof, which would decrease the most recently
                          approved CCAP, compensation due the Design Consultant,
                          as to such deletion or decrease, shall be adjusted
                          downwards for remaining Services to be performed but
                          not for Services already performed to the date of
                          receipt by the Design Consultant of the written
                          requested change or notice of the intent not to
                          complete part or all of the Project, in accordance
                          with the basic payment schedule set forth in Paragraph
                          4.2 hereof. &nbsp;Unless otherwise agreed in writing
                          by the parties, the reduction in the Design
                          Consultant&rsquo;s fee shall be calculated by
                          multiplying the dollar amount of the reduction in the
                          CCAP by the fee percentage noted in 4.1.1 above and
                          then multiplying that dollar amount by the percentage
                          of design work not completed.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_36-2b' start='2'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Basic Services Compensation stated in Paragraph
                          4.1.1 includes all compensation and other payments due
                          the Design Consultant (manpower, overhead, profit,
                          direct costs, travel, copies, postage, telephone and
                          facsimile service, etc.) in the performance of the
                          Basic Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c48 c87'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c87 c48'>
                      <span class='c3 mr-[2.8rem]'>4.2</span>
                      <span class='c3 c13'>
                        Payments to the Design Consultant
                      </span>
                      <span class='c5 c3'>. &nbsp;</span>
                    </p>
                    <p class='c2 c87 c48'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c87 c48'>
                      <span class='c5 c3 ml-[3.9rem]'>
                        Payments on account of the Design Consultant shall be
                        made as follows:
                      </span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_37-2a start' start='1'>
                      <li class='c4 li-bullet-34'>
                        <span class='c3'>
                          Payments for Basic Services, including any design
                          phase change orders, shall be made monthly in
                          proportion to services performed so that the
                          compensation at the completion of each Phase shall{" "}
                        </span>
                        <span class='c3'>
                          equal the following percentages of the Basic Services
                          Compensation
                        </span>
                        <sup>
                          <a href='#cmnt1' id='cmnt_ref1'>
                            [a]
                          </a>
                        </sup>
                        <span class='c5 c3'>
                          . &nbsp;Payment shall be made monthly upon
                          presentation of the Design Consultant&rsquo;s
                          statement of services, fully supported by invoices,
                          time cards, and certifications that all subconsultants
                          have been paid, and other documentation as requested
                          by the Owner.
                        </span>
                      </li>
                    </ol>
                    <h2 class='c11 c63 c48'>
                      <span class='c5 c3'></span>
                    </h2>
                    <div className='ml-[5rem] mr-[3rem]'>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>Design Narrative Phase</p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>Schematic Design Phase</p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>Design Development Phase</p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>Construction Contract Phase</p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>
                          Permitting and Bidding/Negotiation Phase
                        </p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>Construction Phase</p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                      <p class='c2 c48'>
                        <span class='c5 c3'></span>
                      </p>
                      <div className='grid grid-cols-2'>
                        <p className='c5 c3'>
                          Post Construction Services Phase
                        </p>
                        <p className='c5 c3 text-right'>($________)</p>
                      </div>
                    </div>

                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_37-2b' start='2'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          No deductions shall be made from the Basic Services
                          Compensation on account of penalty, liquidated
                          damages, retainage or other sums withheld from
                          payments to Contractor.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_37-2c' start='3'>
                      <li class='c4 li-bullet-37'>
                        <span class='c5 c3'>
                          Deductions may be made from the Basic Services
                          Compensation on account of errors and omissions in the
                          drawings, specifications and other documents prepared
                          by the Design Consultant or in the Design
                          Consultant&rsquo;s performance of its obligations
                          under this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_37-2d' start='4'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          Payments due the Design Consultant under the Agreement
                          shall bear interest at the legal rate commencing
                          forty-five (45) days after the date the billing is
                          received by the Owner, unless the Owner has a good
                          faith basis to believe it is entitled to withhold
                          payment. &nbsp;If the Owner disputes the Design
                          Consultant&rsquo;s claim for compensation, the Design
                          Consultant, unless otherwise directed by the Owner,
                          will continue to perform as required hereunder until
                          final resolution of such dispute. The Design
                          Consultant is required to continue with the work in
                          the event of a dispute, without waiver of any claims.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
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
