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
                  {/* Page 31 */}
                  <div>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Combined Single Limit for Bodily Injury
                        and Personal Damage
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>e.</span>Professional
                        Liability:
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $2,000,000 Each Claim
                      </span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $2,000,000 Policy Aggregate
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>f.</span>Umbrella
                        Liability Insurance to &ldquo;pay on Behalf of the
                        Insured&rdquo;:
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c54'>
                      <span class='c5 c3 ml-[2.2rem]'>$1,000,000.00 Limit</span>
                    </p>
                    <p class='c2 c54'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.2</span>Evidence of such
                        insurance shall be furnished to the Owner, and the Owner
                        shall receive thirty (30) days prior written notice of
                        any cancellation, non-renewal or reduction of coverage
                        of any of the policies. &nbsp;Upon notice of such
                        cancellation, non-renewal or reduction, the Design
                        Consultant shall procure substitute insurance so as to
                        assure the Owner that the minimum limits of coverage are
                        maintained continuously throughout the period of this
                        Agreement. &nbsp;All insurance companies providing the
                        above insurance shall be licensed by the Insurance
                        Department of the State of North Carolina and maintain a
                        rating by AM Best or similar rating company of at least
                        an &ldquo;A&rdquo;.
                      </span>
                    </p>
                    <p class='c2 c33'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.2rem]'>9.2.1</span>The Design
                        Consultant shall deliver to the Owner a certificate of
                        insurance for its professional liability coverage
                        annually, so long as it is required to maintain such
                        coverage under paragraph 9.4.
                      </span>
                    </p>
                    <p class='c2 c33'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.3</span>The Owner shall
                        be added as an additional named insured on all policies,
                        except the professional liability, commercial,
                        automobile and worker&rsquo;s compensation policies.
                        &nbsp;All insurance policies, except the professional
                        liability policy, shall contain a waiver of subrogation
                        against the Owner.
                      </span>
                    </p>
                    <p class='c2 c33'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.4</span>The Design
                        Consultant shall maintain in force during the
                        performance of this contract and for six (6) years after
                        final completion of the Project, the professional
                        liability insurance coverage referenced above.
                      </span>
                    </p>
                    <p class='c2 c33'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.5</span>The Design
                        Consultant shall require its subconsultants to maintain
                        all types of insurance as mentioned in this Article 9
                        and shall provide to the Owner certificates of insurance
                        as described in Article 9.2 for all subconsultants.
                      </span>
                    </p>
                    <p class='c44 c33 c76'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.6</span>The Owner shall
                        be under no obligation to review any certificates of
                        insurance provided by the Design Consultant or to check
                        or verify the Design Consultant&#39;s compliance with
                        any or all requirements regarding insurance imposed by
                        this Agreement. &nbsp;The Design Consultant is fully
                        liable for the amounts and types of insurance required
                        herein and is not excused should any policy or
                        certificate of insurance provided by the Design
                        Consultant not comply with any or all requirements
                        regarding insurance imposed by this Agreement.
                      </span>
                    </p>
                    <p class='c76 c44 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.9rem]'>9.7</span>Should the
                        Design Consultant or a subconsultant fail to provide and
                        maintain in force any insurance or insurance coverage
                        required by this Agreement or by law, or should a
                        dispute arise between Owner and any insurance company of
                        the Design Consultant or a subconsultant over policy
                        coverage or Limits of Liability as required herein, the
                        Owner shall be entitled to recover from the Design
                        Consultant all amounts payable, as a matter of law, to
                        Owner or any of its agents, had the required insurance
                        or insurance coverage been in force. &nbsp;Said recovery
                        shall include, but is not limited to interest for the
                        loss of use of such amounts of money, plus all
                        attorney&#39;s fees, costs and expenses incurred in
                        securing such determination and any other consequential
                        damages arising out of the failure of the Design
                        Consultant or a subconsultant or insurance company to
                        comply with the provisions of this Agreement, or any
                        policy required hereby, or any other requirements
                        regarding insurance imposed by law. &nbsp;Nothing herein
                        shall limit any damages for which Design Consultant is
                        responsible as matter of law.
                      </span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
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
