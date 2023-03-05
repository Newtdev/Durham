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
                  {/* Page 29 */}
                  <div>
                    <ol class='c7 lst-kix_list_19-2a' start='6'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Making major revisions in drawings, specifications or
                          other documents when such revisions are inconsistent
                          with written approvals or instructions previously
                          given by the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2b' start='7'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Preparing supporting data and other services in
                          connection with an Owner-initiated change order if the
                          Basic Compensation is not commensurate with the
                          services required of the Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2c' start='8'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing operating and maintenance manuals, training
                          personnel for operation and maintenance, and
                          consultation during operations other than initial
                          start-up, and coordinating with the Contractor(s) to
                          provide in electronic format, as designated by the
                          Owner&rsquo;s Representative, detailed product and
                          warranty information for input to the Owner&rsquo;s
                          facility management computer system.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2d' start='9'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing soils sampling, classification and analysis;
                          however, analysis of existing soils information and
                          soils analysis during the Design Phase and
                          recommendations needed during the Construction Phase
                          of the Project are not considered Additional Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2e' start='10'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing services of interior furnishings not
                          included in Basic Services or otherwise authorized by
                          this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2f' start='11'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing professional services made necessary by
                          major defects in the Contractor&rsquo;s work which
                          were not preventable by the Design Consultant or a
                          subconsultant in the performance of its Services
                          pursuant to this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2g' start='12'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing surveying services such as platting;
                          mapping; subdivision agreements or recording
                          subdivision plats.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2h' start='13'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing Services prior to actual substantial
                          completion of the Project made necessary by delays or
                          defects in the Contractor&rsquo;s work by more than
                          ninety (90) days from the date agreed to for
                          substantial completion, which delay the Design
                          Consultant could not reasonably have prevented through
                          the performance of its services pursuant to this
                          Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2i' start='14'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing Services made necessary by delays or defects
                          in the Contractor&rsquo;s work for more than sixty
                          (60) additional days for the time period between the
                          scheduled substantial completion and final completion
                          dates, which delay the Design Consultant could not
                          reasonably have prevented through the performance of
                          its services pursuant to this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2j' start='15'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing extensive assistance in the initial start-up
                          and test operations of equipment or systems which is
                          beyond the scope of that normally required to insure
                          proper operation in accordance with the design and
                          specifications.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2k' start='16'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing services necessitated by out-of-town travel
                          required by the Design Consultant and approved by the
                          Owner other than visits to the Project and other than
                          for travel required to accomplish the Basic Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2l' start='17'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing consultation concerning replacement of any
                          of the Contractor&rsquo;s work on the Project damaged
                          by fire or other cause during construction, and
                          furnishing professional services of the type set forth
                          in Basic Services as may be required in connection
                          with the replacement of such work.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2m' start='18'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing services after the Owner makes final payment
                          to the Design Consultant other than services required
                          by this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_19-2n' start='19'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing any other services not otherwise included in
                          this Agreement or not customarily furnished in
                          accordance with generally accepted architectural and
                          engineering practices consistent with the terms of
                          this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
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
