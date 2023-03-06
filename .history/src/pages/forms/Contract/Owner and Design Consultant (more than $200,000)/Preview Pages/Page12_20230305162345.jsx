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
                  {/* Page 12 */}
                  <div>
                    <ol class='c7 lst-kix_list_30-0a' start='9'>
                      <li class='c11 c42 li-bullet-22'>
                        <span class='c5 c3'>
                          Interior electrical loads estimate for systems
                          furniture, receptacles, lighting, food service
                          equipment, and any other special use areas, etc.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-4f' start='6'>
                      <li class='c11 c21 li-bullet-4'>
                        <span class='c17 c3 c13'>Fire Protection</span>
                      </li>
                    </ol>
                    <p class='c2 c29'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_31-0 start' start='1'>
                      <li class='c11 c35 li-bullet-7'>
                        <span class='c5 c3'>Provide flow test information</span>
                      </li>
                    </ol>
                    <p class='c2 c29'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_31-0' start='2'>
                      <li class='c11 c35 li-bullet-12'>
                        <span class='c5 c3'>
                          Provide narrative of proposed fire protection system.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_43-3f' start='6'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Documents not complying with Subparagraph 3.1.4.5
                          shall be returned to the Design Consultant for
                          correction at no additional charge to the Owner and
                          with no change to the overall Project design schedule.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-2 start' start='5'>
                      <li class='c4 li-bullet-23'>
                        <span class='c3 c13'>Construction Contract Phase</span>
                        <span class='c5 c3'>.</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3a start' start='1'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          Upon written authorization from the Owner to proceed,
                          the Design Consultant shall prepare from the approved
                          Design Development documents, working drawings and
                          specifications setting forth in detail the
                          requirements for the construction of the entire
                          Project. &nbsp;The Owner will provide a form contract
                          between the Owner and Contractor, general conditions,
                          some supplemental conditions and form payment and
                          performance bonds which the Design Consultant shall
                          incorporate into the Construction Contract Documents.
                          &nbsp;The Design Consultant shall prepare the
                          advertisement for bids, instructions to bidders, time
                          control specification provisions, and bid forms which
                          the Design Consultant shall also incorporate into the
                          Construction Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3b' start='2'>
                      <li class='c4 li-bullet-25'>
                        <span class='c5 c3'>
                          Construction Contract documents shall be completed
                          within the time prescribed in the Management Plan.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3c' start='3'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          Detailed drawings shall cover all work included in the
                          Project or designated portion thereof. &nbsp;It is the
                          responsibility of the Design Consultant to assure that
                          the Construction Contract requires that no
                          asbestos-containing materials are to be incorporated
                          in the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3d' start='4'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          Single or multiple contracts shall be as stated in the
                          Management Plan, and the detailed drawings for each
                          contract shall be prepared by the Design Consultant
                          with appropriate designation noted thereon.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3e' start='5'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Specifications shall be prepared using the
                          Construction Specifications Institute 33 division
                          format. &nbsp;Specifications for products, materials
                          and equipment shall be written in full compliance with
                          N. C. Gen. Stat. &sect; 133-3 and all other relevant
                          laws and building codes. &nbsp;Brand names may be used
                          to specify a particular product to be bid as an
                          alternate only in accordance with North Carolina law.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3f' start='6'>
                      <li class='c4 li-bullet-25'>
                        <span class='c5 c3'>
                          The Design Consultant shall update room data sheets to
                          show furniture and equipment layouts as needed and
                          requested by the Owner for each room. &nbsp;Owner will
                          provide lists of furniture and equipment and format to
                          the Design Consultant. &nbsp;When completed, final
                          hard copies and digital information (if possible) will
                          be provided by the Design Consultant to the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3g' start='7'>
                      <li class='c4 li-bullet-25'>
                        <span class='c5 c3'>
                          The Design Consultant shall provide a color board with
                          exterior and interior color selection for review,
                          approval and use by the Owner. &nbsp;The approved
                          color board shall be submitted for use by the Owner
                          with, or before, the 60% Construction Contract
                          documents submittal.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_32-3h' start='8'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3'>
                          The Design Consultant shall provide the Owner&#39;s
                          Representative periodically with copies of in-progress
                          Construction Contract documents during this phase.
                          Additionally, and in accordance with the Management
                          Plan, the Design Consultant shall submit for approval
                          by the Owner up to four (4) full size complete sets of
                          preliminary Construction Contract documents at the
                          stage of 60% completeness along with the design phase
                          report
                        </span>
                        <span class='c49'>&nbsp;</span>
                        <span class='c5 c3'>
                          for approval by the Owner. The report shall
                          incorporate the status of the Services in accordance
                          with the Management
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
