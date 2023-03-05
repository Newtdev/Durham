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
                  {/* Page 30 */}
                  <div>
                    <ol class='c7 lst-kix_list_19-2o' start='20'>
                      <li class='c11 c24 li-bullet-1'>
                        <span class='c5 c3'>
                          Providing services in response to the Owner&rsquo;s
                          request for additions to the original Project scope.
                        </span>
                      </li>
                    </ol>
                    <p class='c2 c22'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c28'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>ARTICLE 8</span>
                    </p>
                    <h1 class='c36 c63'>
                      <span class='c1'></span>
                    </h1>
                    <h1 class='c36 c66'>
                      <span class='c1'>NOTICES</span>
                    </h1>
                    <p class='c2 c14'>
                      <span class='c5 c3'></span>
                    </p>
                    <ol class='c7 lst-kix_list_41-1a start' start='1'>
                      <li class='c4 li-bullet-24'>
                        <span class='c5 c3'>
                          Any notice required by this Agreement or other
                          communications to either party by the other shall be
                          in writing and deemed given when delivered personally
                          or when deposited in the United States Post Office,
                          first class, postage prepaid, addressed as follows, or
                          to such other address as shall be duly given by notice
                          meeting the requirement of this Article.
                        </span>
                      </li>
                    </ol>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div>
                      <div className='grid grid-cols-5'>
                        <p className='c34 c44 c61 c82 col-span-2'>
                          <span className='c3'>To Owner:</span>
                        </p>
                        <div className='col-span-3'>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>
                              Durham Public Schools Board of Education
                            </span>
                          </p>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>511 Cleveland Street</span>
                          </p>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>Durham, NC 27702</span>
                          </p>
                        </div>
                      </div>

                      <p class='c2 c16'>
                        <span class='c5 c3'></span>
                      </p>

                      <div className='grid grid-cols-5'>
                        <p className='c34 c44 c61 c82 col-span-2'>
                          <span className='c3'>To Design Consultant:</span>
                        </p>
                        <div className='col-span-3'>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>_______________ </span>
                          </p>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>_______________</span>
                          </p>
                          <p className='c34 c44 c61 c82 col-span-2'>
                            <span className='c3'>_______________</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c2 c16'>
                      <span class='c5 c3'></span>
                    </p>

                    <p class='c36'>
                      <span class='c1'>ARTICLE 9</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c36'>
                      <span class='c1'>INSURANCE</span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c1'></span>
                    </p>
                    <p class='c11 c33'>
                      <span class='c5 c3'>
                        <span className='mr-[2.8rem]'>9.1</span>The Design
                        Consultant shall purchase and maintain insurance for
                        protection from claims under workers&#39; or
                        workmen&#39;s compensation acts; claims resulting from
                        negligent acts or omissions for damages because of
                        bodily injury, including personal injury, sickness,
                        disease or death of any of the Design Consultant&#39;s
                        employees or any other person; claims &nbsp;for damages
                        because of injury to or destruction of personal property
                        including loss of use resulting therefrom; and claims
                        arising out of the performance of this Agreement and
                        caused by negligent acts or omissions for which the
                        Design Consultant is legally liable. &nbsp;Minimum
                        limits of coverage shall be:
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>a.</span>
                        Workers&#39; Compensation:
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>Statutory</span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>&nbsp;</span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>b.</span>
                        Employer&rsquo;s Liability:
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Each Accident
                      </span>
                    </p>
                    <p class='c11 c45 '>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Policy Limit
                      </span>
                    </p>
                    <p class='c11 c45 '>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Each Employee
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>c.</span>
                        Commercial General Liability
                      </span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        (Standard ISO Occurrence Form)
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c5 c3 ml-[6.2rem]'>
                      Combined Single Limit for Bodily Injury, Property Damage
                      or Personal General Aggregate Injury of:
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $2,000,000.00 (Except Products Completed Operations
                        Limit)
                      </span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $2,000,000.00 Products Completed Operations Aggregate
                        Limit
                      </span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Personal &amp; Advertising Injury Limit
                      </span>
                    </p>
                    <p class='c11 c45'>
                      <span class='c5 c3 ml-[2.2rem]'>
                        $1,000,000.00 Each Occurrence Limit
                      </span>
                    </p>
                    <p class='c2 c45'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c11 c30 c40'>
                      <span class='c5 c3'>
                        <span className='mr-[1.4rem]'>d.</span>Commercial
                        Automobile Insurance including coverage for owned,
                        non-owned and hired vehicles:
                      </span>
                    </p>
                    <p class='c2 c45'>
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
