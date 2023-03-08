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
                  {/* Page 22 */}
                  <div>
                    <p class='c11 c22 c67'>
                      <span class='c5 c3'>
                        <span className='mr-[1.2rem]'>3.2.1.2</span>The Design
                        Consultant shall ensure that any subconsultants: (a) are
                        an experienced and duly licensed firm or individual
                        having the ability and skill necessary to perform the
                        requested services; (b) have the capabilities and
                        resources necessary to perform its obligations; and (c)
                        are familiar with all current laws, rules and
                        regulations which are applicable to the work of the
                        subconsultant (such laws, rules and regulations
                        including, but not limited to, all local ordinances,
                        requirements of building codes of city, county, state
                        and federal authorities which are applicable to the
                        subconsultant&rsquo;s work, local sanitary laws and
                        rules and regulations, and all orders and
                        interpretations by governing public authorities of such
                        ordinances, requirements, codes, laws, rules and
                        regulations in effect at the time of commencement of
                        services on the Project and relevant to the
                        subconsultant&rsquo;s work), and that all drawings,
                        specifications and other documents prepared for the
                        Project shall be prepared in accordance with and shall
                        accurately meet, reflect and incorporate all such
                        applicable laws, rules and regulations.
                      </span>
                    </p>
                    <p class='c2 c26'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2b' start='2'>
                      <li class='c11 c70 li-bullet-32'>
                        <span class='c5 c3'>
                          The Design Consultant hereby represents and agrees
                          that the drawings, specifications and other documents
                          prepared pursuant to this Agreement shall be complete
                          and functional, except as to any deficiencies which
                          are due to causes beyond the control of the Design
                          Consultant and its subconsultants, and that the
                          Project, if constructed in accordance with the
                          drawings, specifications and other documents, shall be
                          structurally sound and a complete and properly
                          functioning facility in accordance with the terms of
                          this Agreement. &nbsp;Any suggestions, recommendations
                          or review comments by the Owner shall not reduce or
                          diminish the Design Consultant&rsquo;s
                          responsibilities pursuant to this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c26'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2c' start='3'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          The Design Consultant shall be responsible for damages
                          to the Owner that are a result of errors,
                          inconsistencies, and/or omissions in the drawings,
                          specifications, other documents or other Basic
                          Services. &nbsp;The Design Consultant will correct at
                          no additional cost to the Owner any and all errors and
                          omissions in the drawings, specifications and other
                          documents prepared by the Design Consultant and its
                          subconsultants. &nbsp;The Design Consultant further
                          agrees to render assistance, at no additional cost to
                          the Owner, in resolving problems relating to the
                          design or specified materials. &nbsp;If errors,
                          inconsistencies, and/or omissions in the Construction
                          Contract documents are discovered, which are the
                          result of negligence by the Design Consultant or any
                          of his employees, agents, or subconsultants, the
                          Design Consultant shall be responsible for damages to
                          the Owner, including but not limited to, any
                          additional costs to correct deficiencies in the
                          construction caused by said errors, inconsistencies,
                          and/or omissions.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2d' start='4'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          It is the responsibility of the Design Consultant to
                          make certain that, at the time the Project is bid, all
                          drawings, specifications and other documents are in
                          accordance with applicable laws, statutes, building
                          codes and regulations and that appropriate reviews and
                          approvals are requested and obtained from federal,
                          state and local governments.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2e' start='5'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          It shall be the responsibility of the Design
                          Consultant and its subconsultants throughout the
                          period of performance under this Agreement to exercise
                          the abilities, skills and care customarily used by
                          Design Consultants and subconsultants of the training
                          and background needed to perform the Services who
                          practice in Durham County, Research Triangle Park,
                          North Carolina or similar communities.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-1a start' start='2'>
                      <li class='c4 li-bullet-32'>
                        <span class='c3 c13'>Project Requirements</span>
                        <span class='c5 c3'>. </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2f' start='6'>
                      <li class='c4 li-bullet-39'>
                        <span class='c3'>
                          A component of Exhibit A &ndash; Design, Construction
                          and Equipment Budget is the CCAP. &nbsp;The CCAP for
                          this Project is: &nbsp;
                        </span>
                        <span class='c3 c8'>
                          _____________________________ Dollars, ($__________
                        </span>
                        <span class='c5 c3'>
                          ). &nbsp;The CCAP for this Project, or designated
                          portion thereof, may be modified in writing only in
                          the form of a Design Phase Change Order, executed by
                          the Owner and Design Consultant. &nbsp;The Design
                          Consultant shall prepare drawings, specifications and
                          other documents necessary so that the construction
                          contract bid from a responsive, responsible bidding
                          contractor, acceptable to the Owner, will be within
                          the CCAP.
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
