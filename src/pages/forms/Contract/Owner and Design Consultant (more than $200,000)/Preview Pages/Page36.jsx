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
                  {/* Page 36 */}
                  <div>
                    <div className='ml-[4.2rem] text-justify'>
                      <p className='c5 c3'>
                        relationship covered by this provision or should such a
                        family relationship arise at any time during the term of
                        this Agreement, Design Consultant shall immediately
                        disclose the family relationship in writing to the
                        Superintendent.&nbsp; Unless formally waived by the
                        Owner, the existence of a family relationship covered by
                        this Agreement is grounds for immediate termination by
                        Owner without further financial liability to Design
                        Consultant.
                      </p>
                    </div>

                    <p class='c39 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1c' start='3'>
                      <li class='c6 li-bullet-51'>
                        <span class='c5 c3'>
                          &nbsp;The Design Consultant and its subconsultants
                          shall comply with these and all applicable laws and
                          regulations in providing the Services.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1d' start='4'>
                      <li class='c6 c44 li-bullet-48'>
                        <span class='c5 c3'>
                          The Owner and Design Consultant agree to endeavor to
                          provide written notification and to negotiate in good
                          faith prior to litigation concerning claims, disputes,
                          and other matters in question arising out of or
                          relating to this Agreement or the breach thereof.
                          &nbsp;The Owner and Design Consultant also agree that
                          Board of Education Policy 9030, adopted in compliance
                          with G.S. 143-128(f1), shall apply to disputes arising
                          between the parties on the Project.
                        </span>
                      </li>
                    </ol>
                    <p class='c28 c32'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2f' start='6'>
                      <li class='c11 c21 li-bullet-65'>
                        <span class='c5 c3'>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Any
                          claim, dispute or other matter in question arising out
                          of or related to this Agreement shall be subject to
                          mediation as a condition precedent to binding dispute
                          resolution. &nbsp;If a claim is subject to being
                          barred by any applicable statute of limitations or
                          repose, a party may proceed in accordance with
                          applicable law to comply with filing deadlines prior
                          to attempted resolution of the matter by mediation.
                          &nbsp;In this situation, the request for mediation
                          shall be made concurrently with the filing of the
                          complaint.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2g' start='7'>
                      <li class='c11 c21 li-bullet-29'>
                        <span class='c5 c3'>
                          A request for mediation shall be made in writing,
                          delivered to the other party to this Agreement. &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2h' start='8'>
                      <li class='c11 c21 li-bullet-29'>
                        <span class='c5 c3'>
                          The parties shall share the mediator&rsquo;s fee
                          equally. &nbsp;The mediation shall be held in Durham
                          County, unless another location is mutually agreed
                          upon. &nbsp;Agreement reached in mediation shall be
                          enforceable as a settlement agreement in any court
                          having jurisdiction thereof.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2i' start='9'>
                      <li class='c11 c21 li-bullet-66'>
                        <span class='c5 c3'>
                          If the parties do not resolve a dispute through
                          mediation, the method of binding dispute resolution
                          shall be litigation in a court of competent
                          jurisdiction.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c20'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-2j' start='10'>
                      <li class='c11 c21 li-bullet-67'>
                        <span class='c5 c3'>
                          Except as specifically stated above, nothing herein
                          contained shall be construed to require the parties to
                          provide written notifications or engage in
                          negotiations prior to the institution of litigation
                          nor to submit for alternative dispute resolution by a
                          third party or parties any such claim, dispute or
                          other matter in question between the parties.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1e' start='5'>
                      <li class='c6 c44 li-bullet-61'>
                        <span class='c5 c3'>
                          Nothing contained in this Agreement shall create a
                          contractual relationship with, or a cause of action in
                          favor of, a third party against either the Owner or
                          Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c47'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1f' start='6'>
                      <li class='c6 c44 li-bullet-68'>
                        <span class='c5 c3'>
                          Whenever renderings, photographs of renderings,
                          photographs of models, photographs, drawings,
                          announcements, or other illustration or information of
                          the Project are released for public information,
                          advertisement or publicity, appropriate and proper
                          credit for architectural and other services shall be
                          given to the Design Consultant and Owner respectively.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1g' start='7'>
                      <li class='c6 c44 li-bullet-69'>
                        <span class='c5 c3'>
                          The payment of any sums by the Owner shall not
                          constitute a waiver of any claims for damages by the
                          Owner for any breach of the Agreement by the Design
                          Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1h' start='8'>
                      <li class='c6 c44 li-bullet-70'>
                        <span class='c5 c3'>
                          This Agreement and its Exhibits and Attachments
                          represent the entire and integrated agreement between
                          the Owner and the Design Consultant and supersedes all
                          prior negotiations, representations or agreements,
                          either written or oral. &nbsp;This Agreement may be
                          amended only by written instrument signed by both
                          Owner and Design Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_49-1i' start='9'>
                      <li class='c6 c44 li-bullet-62'>
                        <span class='c5 c3'>
                          If y one or more of the provisions contained in this
                          Agreement, for any reason, are held to be invalid,
                          illegal, or unenforceable in any respect, such
                          invalidity, illegality or unenforceability shall not
                          affect any other provisions thereof and this Agreement
                          shall be construed as if such invalid, illegal or
                          unenforceable provision had never been contained
                          herein.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
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
