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
                  {/* Page 27 */}
                  <div>
                    <ol class='c7 lst-kix_list_1-2b' start='2'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          At the request of the Owner or its authorized
                          representative, the Design Consultant will supply in a
                          timely manner and certify as accurate, unaltered
                          copies of all time sheets, invoices, and other
                          documents to substantiate and document any and all
                          Additional Services and Reimbursable Expenses.
                        </span>
                      </li>
                    </ol>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 5</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>PERIOD OF SERVICE</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <ol class='c7 lst-kix_list_39-1a start' start='1'>
                      <li class='c4 li-bullet-27'>
                        <span class='c3 c5'>
                          Specific dates relating to the period of services are
                          set forth in Exhibit C - Management Plan.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_39-1b' start='2'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Unless earlier terminated as provided in Article 10
                          hereof, this Agreement shall remain in force for a
                          period which may reasonably be required for the Basic
                          Services and Additional Services hereunder.
                          &nbsp;However, the provisions of the Agreement
                          relating to Professional Responsibility (Paragraph
                          3.2); Professional Liability coverage (Article 9); and
                          Ownership of Documents/Confidential Information
                          (Article 12) shall remain in effect after termination
                          of the other provisions of the Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_39-1c' start='3'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          If the Project is delayed through no fault of the
                          Design Consultant, all specific dates noted in the
                          Management Plan that are affected by the delay will be
                          adjusted by the number of calendar days of the delay.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_39-1d' start='4'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          If the Owner materially revises the Project, a
                          reasonable time extension or reduction shall be
                          negotiated between the Design Consultant and the
                          Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_39-1e' start='5'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Time is of the essence in this Agreement. &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 6</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>OWNER&#39;S RESPONSIBILITIES</span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1a start' start='1'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          The Owner shall provide full information regarding the
                          requirements for the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1b' start='2'>
                      <li class='c4 li-bullet-36'>
                        <span class='c5 c3'>
                          The Owner shall examine documents submitted by the
                          Design Consultant and shall render decisions
                          pertaining thereto promptly, to avoid unreasonable
                          delay in the progress of the Design Consultant&#39;s
                          Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1c' start='3'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          If required for this Project, the Owner shall furnish
                          a certified land survey of the site, giving as
                          applicable, grades and lines of streets, alleys,
                          pavements and adjoining property; rights-of-way,
                          restrictions, easements, encroachments, zoning, deed
                          restrictions, boundaries and contours of the site;
                          locations, dimensions and data pertaining to existing
                          buildings, other improvements and trees; and full
                          information concerning available service and utility
                          lines, both public and private, above and below grade,
                          including inverts and depths.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1d' start='4'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          The Owner shall pay for the services of a soils
                          engineer or other consultant, when such services are
                          deemed necessary by the Design Consultant or
                          Owner&#39;s Representative, to provide reports, test
                          borings, test pits, soil bearing values, percolation
                          tests, air and water pollution tests, ground corrosion
                          and resistivity tests and other necessary operations
                          for determining subsoil, air and water conditions,
                          with appropriate professional interpretations thereof.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1e' start='5'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          The Owner shall pay for environmental, hazardous
                          material, chemical and other laboratory tests,
                          inspections and reports as required by law that are
                          not otherwise called for in this Agreement.
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
