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
                  {/* Page 20 */}
                  <div>
                    <ol class='c7 lst-kix_list_44-3a6' start='29'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall obtain governing agency
                          occupancy approval if any exceptions arise related to
                          the design or specified materials.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a7' start='30'>
                      <li class='c11 c71 li-bullet-38'>
                        <span class='c5 c3'>
                          The Design Consultant shall review requests by the
                          Owner or the Contractor for changes in the Project
                          including adjustments to the Construction Contract sum
                          or time and shall promptly make a recommendation to
                          the Owner who may authorize such changes in writing.
                          <br />
                        </span>
                      </li>
                    </ol>
                    <ol class='c7 lst-kix_list_44-3a8' start='30'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Design Consultant shall render initial decisions
                          on claims, disputes or other matters in question
                          between the Owner and the Contractor as provided in
                          this Agreement and the Construction Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a9' start='32'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          The Design Consultant shall be a point of contact with
                          any and all Contractors, except when the Owner shall
                          direct the Design Consultant otherwise. &nbsp;All
                          instructions to the Contractor(s) shall be issued by
                          the Design Consultant, except when directed otherwise
                          by the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a10' start='33'>
                      <li class='c4 li-bullet-33'>
                        <span class='c5 c3'>
                          The Design Consultant and the relevant subconsultant
                          shall review test data to determine that equipment is
                          performing in accordance with the requirements of the
                          design. &nbsp;In addition, the Design Consultant and
                          the relevant subconsultant will witness the
                          Contractor&rsquo;s demonstration to the Owner of all
                          such systems. &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a11' start='34'>
                      <li class='c4 li-bullet-39'>
                        <span class='c5 c3'>
                          The Design Consultant and the relevant subconsultant
                          shall provide assistance in the original operation of
                          any equipment or system such as initial start-up,
                          testing, adjusting and balancing. &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a12' start='35'>
                      <li class='c4 li-bullet-40'>
                        <span class='c5 c3'>
                          The Design Consultant and the relevant subconsultant
                          shall observe, review test data, and certify the
                          original operation of any equipment or system such as
                          initial start-up testing, adjusting and balancing to
                          make sure that all equipment and systems are properly
                          installed and functioning in accordance with the
                          design and specifications.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a13' start='36'>
                      <li class='c4 li-bullet-27'>
                        <span class='c3 c51'>
                          The Design Consultant and its subconsultants shall
                          conduct up to two (2) comprehensive final completion
                          inspections pursuant to the Construction{" "}
                        </span>
                        <span class='c5 c3'>
                          Contract. &nbsp;If more than two (2) final completion
                          inspections are required, through no fault of the
                          Design Consultant, the additional inspections shall be
                          deemed Additional Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a14' start='37'>
                      <li class='c11 c46 li-bullet-3'>
                        <span class='c3'>
                          The Design Consultant shall make a recommendation in
                          writing to the Owner regarding liquidated damages{" "}
                        </span>
                        <span class='c3 c51'>
                          as may be applicable.&nbsp; If requested by the Owner
                          or the Contractor, the Design Consultant shall certify
                          in writing the date that the building is enclosed as
                          defined in the Contract
                        </span>
                        <span class='c5 c3'>&nbsp;Documents.</span>
                      </li>
                    </ol>
                    <p class='c2 c26'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a15' start='38'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Upon correction of the deficiency reports (punch
                          lists), and acceptance of all other close-out
                          submittals and certificates of the Contractor, the
                          Owner&#39;s Representative and the Design Consultant
                          shall review and approve the application for final
                          payment and forward it to the Owner for execution. In
                          addition, the Design Consultant shall confirm in
                          writing that the Project conforms to the Construction
                          Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a16' start='39'>
                      <li class='c4 li-bullet-37'>
                        <span class='c5 c3'>
                          The Design Consultant shall obtain from the Contractor
                          drawings, prints, and other data necessary for the
                          accurate preparation of the record drawings.
                        </span>
                      </li>
                    </ol>
                    <p class='c28'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-2c' start='8'>
                      <li class='c4 li-bullet-26'>
                        <span class='c17 c3 c13'>
                          Post Construction Project Phase.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c17 c3 c13'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3b1' start='40'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          The Design Consultant and the relevant subconsultant
                          shall review and confirm the adequacy of the
                          Contractor-furnished maintenance and operating
                          instructions, schedules, guarantees, bonds, and
                          certificates of inspection as required by the
                          Construction Contract and forward within two weeks of
                          receipt of approved materials, all approved copies to
                          the Owner&#39;s Representative for use by the Owner.
                          &nbsp;In addition, the Design Consultant and the
                          relevant subconsultant shall conduct such observations
                          as necessary to confirm all material and equipment
                          warranties are in compliance with applicable
                          specifications.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c17 c3 c13'></span>
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
