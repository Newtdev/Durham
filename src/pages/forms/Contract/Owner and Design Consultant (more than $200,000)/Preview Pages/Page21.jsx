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
                  {/* Page 21 */}
                  <div>
                    <ol class='c7 lst-kix_list_44-3b2' start='41'>
                      <li class='c4 li-bullet-41'>
                        <span class='c17 c3 c13'>
                          Educational Commissioning
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-4a start' start='1'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall produce two or more
                          presentation boards (approximately 24&rdquo; x
                          36&rdquo;, full-color, with hanging apparatus) for
                          each project for use by the Owner. &nbsp;Boards will
                          include photos, floor plans, elevations, and written
                          documentation related to sustainable design features,
                          community use, site development, flexibility of
                          educational spaces, etc. &nbsp;These boards will be
                          left at the school to be shared with students,
                          parents, faculty/staff, school visitors, etc., for the
                          first year of operation, at a minimum.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-4b' start='2'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall provide input/review for
                          development of PowerPoint presentation. &nbsp;The
                          PowerPoint presentation will be used to educate
                          faculty &amp; staff about the special features
                          available in their new school facility, specifically
                          including the items in section 3.1.8.2.1. &nbsp;Both
                          the original PowerPoint presentation (Source File) and
                          a pdf version will be delivered electronically and on
                          CD. &nbsp;The CD will be left with the school
                          principal for future use with PTA, new faculty/staff,
                          etc.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-4c' start='3'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c3'>The Design Consultant shall p</span>
                        <span class='c5 c3'>
                          rovide input on signage to be posted in and around the
                          school facility to point out various design features
                          that support sustainability, facility efficiency,
                          energy conservation, learning and teaching.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c26'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3b3' start='42'>
                      <li class='c11 c46 li-bullet-2'>
                        <span class='c5 c3'>
                          The Design Consultant shall prepare and deliver three
                          (3) printed sets, one (1) pdf set, and one (1) AutoCAD
                          set of record drawings and all related files,
                          including the design specifications (project manual)
                          and all addenda. &nbsp;The electronic files shall be
                          delivered in PDF, AutoCAD.DWG, and Source File formats
                          via electronic file delivery and CD. &nbsp;These files
                          will reflect and certify significant changes in the
                          Project made during the construction process, based on
                          marked-up contract drawings, prints, and other data
                          furnished by the Contractor and the applicable
                          addenda, clarifications, and change orders which
                          occurred during the Project for delivery to the Owner
                          within thirty (30) days after final completion of the
                          Project. &nbsp;All electronic file names shall be
                          consistent with the name of the sheet(s) they
                          represent in accordance with the Owner&rsquo;s
                          criteria.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3b4' start='43'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant will report the use of
                          subconsultants, their function, contract amount and
                          MBE classification to the Owner at the conclusion of
                          the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-1a start' start='1'>
                      <li class='c4 li-bullet-32'>
                        <span class='c3 c13'>
                          Design Consultant&#39;s Professional Responsibility
                          and Standard of Care
                        </span>
                        <span class='c5 c3'>. </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2a start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          The Design Consultant shall perform its services,
                          including but not limited to the Basic Services and
                          any Additional Services authorized in writing by the
                          Owner, consistent with the professional skill and care
                          ordinarily provided by design consultants practicing
                          in or around the Research Triangle Park, North
                          Carolina area under the same or similar circumstances.
                          &nbsp;The Design Consultant shall perform its services
                          as expeditiously as is consistent with such
                          professional skill and care and the orderly progress
                          of the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3a start' start='1'>
                      <li class='c4 li-bullet-39'>
                        <span class='c5 c3'>
                          By execution of this Agreement, the Design Consultant
                          warrants that (a) it is an experienced and duly
                          licensed firm or individual having the ability and
                          skill necessary to perform all the Services required
                          of it under this Agreement in connection with the
                          design and construction of a project having the scope
                          and complexity of the Project contemplated herein; (b)
                          it has the capabilities and resources necessary to
                          perform its obligations hereunder; and (c) it is
                          familiar with all current laws, rules and regulations
                          which are applicable to the design and construction of
                          the Project (such laws, rules and regulations
                          including, but not limited to, all local ordinances,
                          requirements of building codes of city, county, state
                          and federal authorities which are applicable to the
                          Project, local sanitary laws and rules and
                          regulations, and all orders and interpretations by
                          governing public authorities of such ordinances,
                          requirements, codes, laws, rules and regulations in
                          effect at the time of commencement of Services on the
                          Project), and that all drawings, specifications and
                          other documents prepared by the Design Consultant
                          shall be prepared in accordance with and shall
                          accurately meet, reflect and incorporate all such
                          applicable laws, rules and regulations.
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
