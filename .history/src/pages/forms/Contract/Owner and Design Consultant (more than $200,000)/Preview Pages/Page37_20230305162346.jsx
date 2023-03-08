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
                  {/* Page 37 */}
                  <div>
                    <ol class='c7 lst-kix_list_49-1j' start='10'>
                      <li class='c6 c44 li-bullet-62'>
                        <span class='c5 c3'>
                          Except where specifically stated otherwise, all
                          periods of time stated in terms of days shall be
                          considered periods calculated in calendar days.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1k' start='11'>
                      <li class='c6 c44 li-bullet-47'>
                        <span class='c5 c3'>
                          The headings or captions within this Agreement shall
                          be deemed set forth in the manner presented for the
                          purposes of reference only and shall not control or
                          otherwise affect the information set forth therein or
                          interpretation thereof.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1l' start='12'>
                      <li class='c6 c44 li-bullet-71'>
                        <span class='c5 c3'>
                          For the purpose of this Agreement unless the context
                          clearly indicates otherwise, the singular includes the
                          plural, and the plural includes the singular.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1m' start='13'>
                      <li class='c6 c44 li-bullet-72'>
                        <span class='c5 c3'>
                          This Agreement may be executed in any number of
                          counterparts, each of which shall be deemed an
                          original, and the counterparts shall constitute one
                          and the same instrument, which shall be sufficient
                          evidence by any one thereof.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1n' start='14'>
                      <li class='c6 c44 li-bullet-73'>
                        <span class='c5 c3'>
                          The language used in this Agreement will be deemed to
                          be the language chosen by each of the parties to
                          express their mutual intent. In the event of an
                          ambiguity or question of intent or interpretation
                          arises, this Agreement will be construed as if drafted
                          jointly by the parties and no presumption or burden of
                          proof will arise favoring or disfavoring any party by
                          virtue of the authorship of any of the provisions of
                          this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1o' start='15'>
                      <li class='c6 c44 li-bullet-74' id='h.3znysh7'>
                        <span class='c5 c3'>
                          The Design Consultant may apply for and obtain a 179d
                          Tax Deduction for the design of the Project. &nbsp;The
                          Design Consultant shall only apply for the tax
                          deduction if the Design Consultant provides the Owner
                          with a separate written list of all building systems,
                          equipment, and design features included in the Project
                          that support the application for the tax deduction.
                          &nbsp;An updated list will be provided to the Owner
                          with each design phase submission. &nbsp;Each list
                          submitted shall include all building systems,
                          equipment and design features, including a then
                          current estimate of the additional cost each item is
                          anticipated to add to the cost of the Project at the
                          time the Project is bid when compared to items
                          traditionally used on K-12 public school projects in
                          North Carolina. &nbsp;The Design Consultant shall
                          provide the Owner with any anticipated cost savings
                          over the lift of the Project for any item supporting
                          the 179d Tax Deduction. &nbsp;The Owner&rsquo;s
                          consent to the Design Consultant&rsquo;s efforts to
                          apply for and obtain a 179d Tax Deduction is
                          conditioned upon the Design Consultant&rsquo;s strict
                          compliance with this section.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 14</span>
                    </p>
                    <p class='c28'>
                      <span class='c1'></span>
                    </p>
                    <h1 class='c36 c66'>
                      <span class='c1'>EXHIBITS</span>
                    </h1>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
                        following exhibits are incorporated into this Agreement:
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        A:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design,
                        Construction and Equipment Budget
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        B:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Program
                        of Requirements
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        C:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Management
                        Plan
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        D:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consultant
                        Agreement
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        E:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design
                        Consultant&rsquo;s Fee Schedule
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11'>
                      <span class='c5 c3'>
                        14.1.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exhibit
                        F:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owner&rsquo;s
                        Sexual Offender Registry Check Certification Form
                      </span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    {/* <hr style='page-break-before: always; display: none' /> */}
                    <p class='c28'>
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
