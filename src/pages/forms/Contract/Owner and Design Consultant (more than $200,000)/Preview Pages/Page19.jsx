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
                  {/* Page 19 */}
                  <div>
                    <div className='ml-[3.9rem]'>
                      <p className='c5 c3 text-justify'>
                        subconsultant may be required to make periodic visits
                        weekly. &nbsp;The subconsultants shall prepare and
                        submit a report on each visit, submitted via the Design
                        Consultant to the Owner&#39;s Representative within
                        three (3) working days of the visit.
                      </p>
                    </div>

                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a1' start='24'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall render written field
                          reports relating to the periodic visits and
                          observations of the Project required by Subparagraph
                          3.1.7.11 within three (3) working days to the
                          Owner&#39;s Representative in the form required by the
                          Owner&#39;s Representative.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a2' start='25'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant shall hold weekly construction
                          progress meetings attended by the Owner&#39;s
                          Representative and representatives from the Contractor
                          and any relevant subcontractors and subconsultants.
                          &nbsp;The Design Consultant shall render written
                          minutes of this meeting within three (3) working days
                          to all participants in a format acceptable to the
                          Owner&#39;s Representative.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a3' start='26'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Based upon observations at the site and upon the
                          Contractor&#39;s applications for payment, the Design
                          Consultant shall determine the amount owing to the
                          Contractor(s), pursuant to the terms of the
                          Construction Contract, and shall issue certificates
                          for payment to the Owner in such amounts. &nbsp;The
                          Design Consultant&#39;s signing of a certificate of
                          payment shall constitute a representation by the
                          Design Consultant to the Owner, based upon the Design
                          Consultant&#39;s observations at the site and the data
                          comprising the application for payment, that the
                          construction has progressed to the point indicated,
                          that to the best of the Design Consultant&#39;s
                          knowledge, information and belief, the quality of the
                          construction appears to be in accordance with the
                          Construction Contract (subject to: an evaluation of
                          the Project for conformance with the Construction
                          Contract upon substantial completion, as defined in
                          the Construction Contract; the results of any
                          subsequent tests required by the Construction
                          Contract; minor deviations from the Construction
                          Contract correctable prior to completion; and to any
                          specific qualifications stated in the certificate for
                          payment), and that the Contractor is entitled to
                          payment in the amount certified. &nbsp;By signing a
                          certificate for payment to the Owner, the Design
                          Consultant shall not be deemed to represent that it
                          has made any examination to ascertain how and for what
                          purpose the Contractor has used the monies paid since
                          the previous pay application, except the Design
                          Consultant shall inquire into and notify the Owner of
                          the status of any payment issues of which it is aware.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a4' start='27'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          The Design Consultant and the Owner shall have
                          authority to reject the Contractor&rsquo;s work when
                          in the Owner&#39;s or the Design Consultant&#39;s
                          opinion the work does not conform to the Construction
                          Contract. &nbsp;Whenever in the Owner&#39;s or the
                          Design Consultant&#39;s reasonable opinion it is
                          considered necessary or advisable to enforce the
                          proper implementation of the intent of the
                          Construction Contract, the Owner shall have the
                          authority to require special inspection or testing of
                          any of the Contractor&rsquo;s work in accordance with
                          the provisions of the Construction Contract whether or
                          not such work is fabricated, installed or completed.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_44-3a5' start='28'>
                      <li class='c4 li-bullet-32'>
                        <span class='c5 c3'>
                          When the Contractor notifies the Design Consultant
                          that it considers the construction or a designated
                          portion of the construction substantially complete,
                          the Design Consultant and its subconsultants, after
                          notice to the Owner, shall review and evaluate the
                          construction and prepare and submit to the Owner and
                          the Contractor a punch list of the construction which
                          is not in conformance with the Construction Contract.
                          &nbsp;When the Design Consultant on the basis of an
                          inspection determines that the construction or
                          designated portion thereof is substantially complete,
                          the Design Consultant will then prepare a certificate
                          of substantial completion which shall state the
                          responsibilities of the Owner and the Contractor for
                          security, maintenance, heat, utilities, damage to the
                          construction and insurance. &nbsp;Should the Design
                          Consultant determine that the construction or a
                          designated portion thereof is not substantially
                          complete after the Contractor notifies the Design
                          Consultant that it considers such construction to be
                          substantially complete, the Design Consultant shall
                          provide the Contractor with written notice stating why
                          the construction or designated portion is not
                          substantially complete. &nbsp;The Owner may request
                          that the Design Consultant review and evaluate the
                          construction and prepare a punch list on any portion
                          of the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
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
