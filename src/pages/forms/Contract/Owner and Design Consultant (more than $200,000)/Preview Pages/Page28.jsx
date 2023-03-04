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
                  {/* Page 28 */}
                  <div>
                    <ol class='c7 lst-kix_list_40-1f' start='6'>
                      <li class='c4 li-bullet-0'>
                        <span class='c5 c3'>
                          The Owner shall furnish such legal, accounting, and
                          insurance counseling services as the Owner may deem
                          necessary for the Project, and such auditing services
                          as it may require to ascertain how, or for what
                          purposes, the Contractor has used the moneys paid to
                          it under the Construction Contract.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1g' start='7'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          All services, information, surveys and reports
                          required of the Owner shall be furnished at the
                          Owner&#39;s expense and the Design Consultant shall be
                          entitled to rely upon their accuracy and completeness.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1h' start='8'>
                      <li class='c4 li-bullet-46'>
                        <span class='c5 c3'>
                          The Owner shall furnish information and approvals
                          required of it expeditiously, for orderly progress of
                          the construction.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1i' start='9'>
                      <li class='c4 li-bullet-27'>
                        <span class='c5 c3'>
                          The Owner shall reimburse the Design Consultant for
                          any fees or assessments paid by the Design Consultant
                          pursuant to Article 3.1.6.3.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_40-1j' start='10'>
                      <li class='c4 li-bullet-26'>
                        <span class='c3 c51'>
                          The Design Consultant shall coordinate the services of
                          the Owner&rsquo;s consultants listed below in the
                          section with those services provided by the Design
                          Consultant. &nbsp;Upon the Design Consultant&rsquo;s
                          request, the Owner shall furnish copies of the scope
                          of services in the contracts between the Owner and the
                          Owner&rsquo;s consultants. &nbsp;The Owner shall
                          require that its consultants maintain professional
                          liability insurance as appropriate to the services
                          provided. &nbsp;If in the opinion of the Architect a
                          particular consultant or engineering service is needed
                          to produce a reasonably complete and accurate set of
                          Construction Documents or to satisfy the Owner&rsquo;s
                          Program requirements based upon the information
                          available to the Design Consultant as of the date of
                          this Agreement and said consultant or engineering
                          service is not listed as being provided by the Owner
                          below, it is the responsibility of the Architect to
                          provide that service at not additional cost to the
                          Owner.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c14'>
                      <span class='c5 c3 c8'></span>
                    </p>
                    <p class='c10'>
                      <span class='c5 c3 c8'>
                        The Owner shall furnish or provide the following
                        services only if specifically designated:
                      </span>
                    </p>
                    <p class='c10'>
                      <span class='c5 c3 c8'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geotechnical
                      </span>
                    </p>
                    <p class='c10'>
                      <span class='c5 c3 c8'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Surveying
                      </span>
                    </p>
                    <p class='c10'>
                      <span class='c3 c8 c51'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____________
                      </span>
                    </p>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 7</span>
                    </p>
                    <h1 class='c36 c63'>
                      <span class='c1'></span>
                    </h1>
                    <h1 class='c36 c66'>
                      <span class='c1'>ADDITIONAL SERVICES</span>
                    </h1>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-1a start' start='1'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          If any of the following Additional Services, as
                          defined in this Article, are authorized in advance by
                          the Owner in writing, the Design Consultant shall
                          furnish or obtain from others the authorized services.
                          &nbsp;If authorized in advance, in writing, by the
                          Owner, the Design Consultant shall be paid for these
                          Additional Services by the Owner pursuant to Article
                          4.3 to the extent they exceed the obligations of the
                          Design Consultant under this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-2a start' start='1'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing fully detailed presentation models or
                          presentation renderings, not included in Basic
                          Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-2b' start='2'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing financial feasibility or other special
                          studies, not included in Basic Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-2c start' start='3'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing planning surveys or alternative site
                          evaluations.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-2d' start='4'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing design services relative to future
                          facilities, systems and equipment which are not
                          intended to be constructed as part of the Project
                          other than general and master planning for future work
                          as indicated by the Program of Requirements.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_20-2e' start='5'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing acoustical services by an individual or firm
                          with specific expertise in acoustics for an elementary
                          school project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
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
