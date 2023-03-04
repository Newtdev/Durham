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
                  {/* Page 4 */}
                  <div>
                    <div className='c3 c11 ml-[3.9rem]'>
                      Supplemental Conditions thereto, all of which shall be
                      compatible and consistent with this Agreement.
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_21-1e' start='6'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>
                          Construction Contract Award Price
                        </span>
                        <span class='c5 c3'>
                          . The amount established in the Design, Construction
                          and Equipment Budget, attached as Exhibit A, for the
                          total cost of the work to be performed by the
                          Contractor pursuant to the Construction Contract shall
                          be referred to as the Construction Contract Award
                          Price or CCAP.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_21-1f' start='7'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Contractor</span>
                        <span class='c5 c3'>
                          . &nbsp;The Contractor is the person or entity which
                          enters into an agreement with the Owner to perform the
                          construction of or any construction on the Project,
                          including, without limitation, the providing of labor,
                          materials, and equipment incorporated or to be
                          incorporated into the Project. &nbsp;The term
                          &quot;Contractor&quot; means the Contractor or its
                          authorized representative.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_21-1g' start='8'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Program of Requirements</span>
                        <span class='c5 c3'>
                          . &nbsp;The Program of Requirements or
                          &quot;Program&quot; is the detailed written summary of
                          the requirements of the facility which sets forth the
                          Owner&#39;s design objectives, constraints and
                          criteria, including space requirements and
                          relationships, quality levels, flexibility and
                          expandability, special equipment and systems and site
                          requirements, as described in Exhibit B.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_21-1h' start='9'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Management Plan</span>
                        <span class='c5 c3'>
                          . &nbsp;The Management Plan is the description and
                          definition of the phasing, sequencing and timing of
                          the major project activities for design, construction
                          procurement, construction and occupancy as described
                          in Exhibit C.&nbsp;The Management Plan shall include
                          allowances for periods of time required for the
                          Owner&rsquo;s review, for the performance of the
                          Owner&rsquo;s consultants, and for the approval of
                          submissions by authorities having jurisdiction over
                          the Project. The Management Plan shall generally
                          adhere to the following anticipated dates and
                          construction milestone dates: &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>

                    <div>
                      <div className='grid grid-cols-4 ml-[9rem]'>
                        <p className='col-span-2 c5 c3'>
                          Completion of schematic design
                        </p>
                        <p className='c5 c3'>-</p>
                        <p className='c5 c3'>F42</p>
                      </div>
                      <div className='grid grid-cols-4 ml-[9rem]'>
                        <p className='col-span-2 c5 c3'>
                          Completion of construction documents
                        </p>
                        <p className='c5 c3'>-</p>
                        <p className='c5 c3'>F43</p>
                      </div>
                      <div className='grid grid-cols-4 ml-[9rem]'>
                        <p className='col-span-2 c5 c3'>
                          Notice to proceed date
                        </p>
                        <p className='c5 c3'>-</p>
                        <p className='c5 c3'>F44</p>
                      </div>
                      <div className='grid grid-cols-4 ml-[9rem]'>
                        <p className='col-span-2 c5 c3'>
                          Substantial completion date
                        </p>
                        <p className='c5 c3'>-</p>
                        <p className='c5 c3'>F45</p>
                      </div>
                    </div>

                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_21-1' start='10'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Design Phase Change Order</span>
                        <span class='c3'>
                          . &nbsp;A Design Phase Change Order is the form of
                          documentation from the Owner approving and authorizing
                          a modification to Exhibits A, B and/or C attached
                          hereto, or previously approved
                        </span>
                        <span class='c3 c37'>&nbsp;</span>
                        <span class='c5 c3'>Design Phase documents. </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 2</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>RELATIONSHIP OF THE PARTIES</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <ol class='c7 lst-kix_list_22-1 start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3 c13'>Design Consultant Services</span>
                        <span class='c5 c3'>
                          . &nbsp;The Design Consultant shall provide
                          professional architectural/engineering services for
                          the Project in accordance with the terms and
                          conditions of this Agreement. &nbsp;The Design
                          Consultant&#39;s performance of the Services shall be
                          as professional consultant to the Owner to carry out
                          the activities of Project design and construction
                          administration and to provide the technical documents
                          and supervision to achieve the Owner&#39;s Project
                          objectives. The Design Consultant may employ
                          subconsultants to provide discreet portions of the
                          Services pursuant to this Agreement. The Design
                          Consultant shall ensure that all services provided by
                          a subconsultant are provided in accordance with the
                          terms and conditions of this Agreement. The Design
                          Consultant shall coordinate the services of any Owner
                          provided professional consultants and any vendors for
                          furniture and equipment to design spaces.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_22-2a start' start='1'>
                      <li class='c4 li-bullet-0'>
                        <span class='c3'>
                          The consultants retained at the Design
                          Consultant&rsquo;s expense include the following: [
                        </span>
                        <span class='c3 c8'>
                          Choose all applicable and insert name of consultant
                        </span>
                        <span class='c5 c3'>]</span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c10'>
                      <span class='c5 c3 c8'>
                        Structural:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                      </span>
                    </p>
                    <p class='c10'>
                      <span class='c5 c3 c8'>
                        Plumbing:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                      </span>
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
