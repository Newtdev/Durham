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
                  {/* Page 32 */}
                  <div>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 10</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>TERMINATION OF AGREEMENT</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1a start' start='1'>
                      <li class='c6 c44 li-bullet-47'>
                        <span class='c5 c3'>
                          If: (a) the Owner abandons the Project or the Project
                          is stopped for more than six (6) months due to actions
                          taken by the Owner, or under an order of any court or
                          other public authority having jurisdiction, or as a
                          result of an act of government, such as a declaration
                          of a national emergency making materials unavailable
                          through no act or fault of the Design Consultant or
                          its agents or employees, or (b) the Owner has failed
                          to substantially perform in accordance with the
                          provisions of this Agreement due to no fault of the
                          Design Consultant and such non-performance continues
                          without cure for a period of thirty (30) days after
                          the Owner receives from the Design Consultant a
                          written notice of such non-performance (including a
                          detailed explanation of the actions of the Owner
                          required for cure), the Design Consultant may, upon
                          fifteen (15) days additional written notice to the
                          Owner, terminate this Agreement, without prejudice to
                          any right or remedy otherwise available to the Owner,
                          and recover from the Owner payment for all Services
                          performed to the date of the notice terminating this
                          Agreement. &nbsp;The recovery of this payment shall be
                          the sole and exclusive remedy of the Design Consultant
                          as a result of termination under this paragraph.
                          &nbsp;The Owner shall not be liable to the Design
                          Consultant for any special or consequential damages as
                          a result of the termination of this agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1b' start='2'>
                      <li class='c6 c44 li-bullet-48'>
                        <span class='c5 c3'>
                          Upon the appointment of a receiver for the Design
                          Consultant, or if the Design Consultant makes a
                          general assignment for the benefit of creditors, the
                          Owner may terminate this Agreement, without prejudice
                          to any right or remedy otherwise available to the
                          Owner, upon giving three (3) days written notice to
                          the Design Consultant. &nbsp;If an order for relief is
                          entered under the bankruptcy code with respect to the
                          Design Consultant, the Owner may terminate this
                          Agreement by giving three (3) days written notice to
                          the Design Consultant unless the Design Consultant or
                          the trustee: &nbsp;(a) promptly cures all breaches;
                          (b) provides adequate assurances of future
                          performance; (c) compensates the Owner for actual
                          pecuniary loss resulting from such breaches; and (d)
                          assumes the obligations of the Design Consultant
                          within the statutory time limits.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1c' start='3'>
                      <li class='c6 c44 li-bullet-49'>
                        <span class='c5 c3'>
                          If the Design Consultant persistently or repeatedly
                          refuses or fails, except in cases for which an
                          extension of time is provided, to supply sufficient
                          properly skilled staff or proper materials, or
                          persistently disregards laws, ordinances, rules,
                          regulations or orders of any public authority
                          jurisdiction, or otherwise substantially violates or
                          breaches any term or provision of this Agreement, then
                          the Owner may, without prejudice to any right or
                          remedy otherwise available to the Owner, and after
                          giving the Design Consultant seven (7) days written
                          notice, terminate this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1d' start='4'>
                      <li class='c6 c44 li-bullet-50'>
                        <span class='c5 c3'>
                          Upon termination of this Agreement by the Owner under
                          Article 10.2 or 10.3, the Owner shall be entitled to
                          furnish or have furnished the Services to be performed
                          hereunder by the Design Consultant by whatever method
                          the Owner may deem expedient. &nbsp;Also, in such
                          cases, the Design Consultant shall not be entitled to
                          receive any further payment until completion of the
                          Project; and the total compensation to the Design
                          Consultant under this Agreement shall be the amount
                          which is equitable under the circumstances. &nbsp;If
                          the Owner and the Design Consultant are unable to
                          agree on the amount to be paid under the foregoing
                          sentence, the Owner shall fix an amount, if any, which
                          it deems appropriate in consideration of all of the
                          circumstances surrounding such termination, and shall
                          make payment accordingly.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c12'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_46-1e' start='5'>
                      <li class='c6 c44 li-bullet-51'>
                        <span class='c5 c3'>
                          The Owner may, upon thirty (30) days written notice to
                          the Design Consultant, terminate this Agreement, in
                          whole or in part, at any time for the convenience of
                          the Owner, without prejudice to any right or remedy
                          otherwise available to the Owner. &nbsp;Upon receipt
                          of such notice, the
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
