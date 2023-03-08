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
                  {/* Page 23 */}
                  <div>
                    <ol class='c7 lst-kix_list_34-3b' start='2'>
                      <li class='c4 li-bullet-25'>
                        <span class='c5 c3'>
                          During all phases of the Project the Design Consultant
                          shall prepare such estimates as it deems necessary, at
                          no additional cost to the Owner, to assure itself that
                          the estimated Project cost is within the CCAP and
                          shall supply such data, information or estimates as
                          the Owner may require to substantiate the Design
                          Consultant&#39;s contention that the Project cost is
                          within the CCAP.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3c' start='3'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          With each Design Phase submittal and each interim,
                          revisionary or subsequent design submittal of the
                          Design Consultant to the Owner, the Design Consultant
                          shall make the following statement in writing:
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c16'>
                      <span class='c3'>
                        &quot;The drawings, specifications, and other documents
                        submitted herewith, in my/our professional opinion,
                        fulfill the Program of Requirements and the Project
                        indicated by them may be purchased by the Owner in a
                        construction contract or contracts, the total price of
                        which &nbsp;will not exceed the CCAP, which is{" "}
                      </span>
                      <span class='c3 c8'>_______________</span>
                      <span class='c38 c8'>&nbsp;</span>
                      <span class='c3 c8'>Dollars ($</span>
                      <span class='c38 c8'>&nbsp;________</span>
                      <span class='c38'>&nbsp;</span>
                      <span class='c3'>
                        ) (based on bid date of no later than{" "}
                      </span>
                      <span class='c38'>&nbsp;</span>
                      <span class='c38 c8'>___</span>
                      <span class='c38'>&nbsp; </span>
                      <span class='c3'>
                        ) for this Project, and may be constructed completely
                        within said CCAP and the in-progress contingency fund of{" "}
                      </span>
                      <span class='c3 c8'>_____</span>
                      <span class='c38'>&nbsp; &nbsp; &nbsp; </span>
                      <span class='c5 c3'>
                        % of said price. &nbsp;Further, in my/our professional
                        opinion, the above mentioned documents submitted
                        herewith have been prepared in accordance with the
                        Agreement for Design Consultant Services.&quot;
                      </span>
                    </p>
                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c16'>
                      <span class='c5 c3'>
                        With each Design Phase submittal and each interim,
                        revisionary or subsequent design submittal of the Design
                        Consultant to the Owner and with his certification of
                        the final payment to the contractor, the Design
                        Consultant shall make the following statement in
                        writing:
                      </span>
                    </p>
                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c16'>
                      <span class='c5 c3'>
                        &quot;No asbestos-containing building materials have
                        been specified and to the best of my/our knowledge and
                        belief none have been incorporated into this
                        Project.&quot;
                      </span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2g' start='7'>
                      <li class='c4 li-bullet-26'>
                        <span class='c5 c3'>
                          Incorporated herein and made a part of this Agreement
                          as Exhibit B is the Program of Requirements which
                          defines the physical and environmental parameters for
                          the Project and establishes the design objectives and
                          criteria. &nbsp;No deviations from the Program of
                          Requirements shall be allowed without written approval
                          for change, in the form of a Design Phase Change Order
                          executed by the Owner and Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2h' start='8'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          Incorporated herein and made a part of this Agreement
                          as Exhibit C is the Management Plan for the Project
                          which defines the sequence and timing of the design
                          and construction activities. &nbsp;The Management Plan
                          is the schedule to be adhered to by the Design
                          Consultant. &nbsp;No deviation from the Management
                          Plan shall be allowed without written approval for a
                          change in the Management Plan, in the form of a Design
                          Phase Change Order executed by the Owner and Design
                          Consultant. &nbsp;Should the Owner determine that the
                          Design Consultant is behind schedule due to the fault
                          of the Design Consultant, the Design Consultant shall
                          expedite and accelerate its efforts, including
                          additional manpower and/or overtime, to maintain the
                          approved design schedule at no additional cost to the
                          Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-1b' start='3'>
                      <li class='c4 li-bullet-25'>
                        <span class='c3 c13'>Project Conferences</span>
                        <span class='c5 c3'>. </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-2i' start='9'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          Throughout all phases of the Project, the Design
                          Consultant and its subconsultants shall meet
                          periodically with the Owner when reasonably requested.
                          &nbsp;Participants shall be as determined by the
                          Owner. &nbsp;As a minimum, regularly scheduled
                          meetings which the Design Consultant will attend
                          include:
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3d' start='4'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          Design Consultant orientation.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3e' start='5'>
                      <li class='c4 li-bullet-35'>
                        <span class='c5 c3'>
                          Predesign conferences on a biweekly basis.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3f' start='6'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          Predesign project analysis sessions.{" "}
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_34-3g' start='7'>
                      <li class='c4 li-bullet-39'>
                        <span class='c5 c3'>
                          Design conferences on a monthly basis.{" "}
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
