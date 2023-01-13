import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const ShortSmall = () => {
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
                  Short Form Design Consultant Agreement
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
              <div className='px-20 pt-8 pb-4 text-black'>
                <div>
                  {/* Page 1 */}
                  <div className='text-center mb-8'>
                    <h1 className='text-lg font-bold mb-10'>
                      DESIGN CONSULTANT SERVICES AGREEMENT
                    </h1>
                    <p className='mb-8'>BETWEEN</p>
                    <p className='mb-8 font-bold'>
                      Durham Public Schools Board of Education
                    </p>
                    <p className='mb-12'>
                      Hereinafter referred to as the Owner
                    </p>
                    <p className='mb-8'>AND</p>
                    <p className='mb-8'>
                      <span className='bg-yellow-500'>F1</span>
                    </p>
                    <p className='mb-12'>
                      Hereinafter referred to as the Design Consultant or
                      Architect
                    </p>
                    <p className='mb-8'>
                      Project Name: <span className='bg-yellow-500'>F2</span>
                    </p>
                    <p className='mb-8'>
                      Project Number: <span className='bg-yellow-500'>F3</span>
                    </p>
                    <div className='h-72'></div>
                    <p className='mb-8'>
                      AGREEMENT FOR DESIGN CONSULTANT SERVICES
                    </p>
                  </div>

                  {/* Pages 2 to 4 */}
                  <div className='mb-10'>
                    <div className='mb-6'>
                      <p className='font-bold mb-4'>AGREEMENT</p>
                      <p className='mb-4'>
                        made this <span className='bg-yellow-500'>F4</span> day
                        of <span className='bg-yellow-500'>F5</span> in the year
                        of Two Thousand{" "}
                        <span className='bg-yellow-500'>F6</span>
                      </p>
                      <p className='mb-4'>
                        Between the Owner:{" "}
                        <strong>
                          Durham Public Schools Board of Education
                        </strong>
                      </p>
                      <p className='mb-4'>
                        and the Design Consultant:{" "}
                        <span className='bg-yellow-500'>F7</span>
                      </p>
                      <p className='mb-2'>
                        Federal Tax ID # or Social Security #
                        __________________________
                      </p>
                      <p>
                        Address <span className='bg-yellow-500'>F8</span>
                      </p>
                    </div>

                    {/* Article 1 */}
                    <div className='mb-4'>
                      <div className='text-center font-bold mb-4'>
                        <p>ARTICLE 1</p>
                        <p>TERMS AND CONDITION</p>
                      </div>

                      <div>
                        <div className='flex gap-12 mb-2'>
                          <p>1.1</p>
                          <p className='text-justify'>
                            <span className='mr-3'>WORK:</span> The Design
                            Consultant shall perform the services outlined on
                            the attached Exhibit A. Exhibit A shall contain the
                            scope of work and the authorized services.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.2</p>
                          <p className='text-justify'>
                            <span className='mr-3'>TIME:</span> The work
                            outlined in Exhibit A shall be completed in
                            accordance with the schedule included in Exhibit A.
                            In the event that circumstances beyond the Design
                            Consultant’s control force a delay that prohibits or
                            may prohibit the Design Consultant’s compliance with
                            the schedule, the Design Consultant shall inform the
                            Owner immediately.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.3</p>
                          <p className='text-justify'>
                            <span className='mr-3'>COMPENSATION:</span> The
                            Design Consultant shall be compensated in accordance
                            with the fee schedule included in Exhibit A to this
                            Agreement and this Paragraph. Exhibit A shall
                            specify the hourly rate schedule for any services
                            that may be utilized under this Agreement. The
                            Design Consultant shall not be compensated for any
                            work or services performed without specific
                            authorization.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.4</p>
                          <p>BILLING AND PAYMENT:</p>
                        </div>

                        <div className='flex gap-[35px] mb-3'>
                          <p>1.4.1</p>
                          <div>
                            <p className='mb-1 text-justify'>
                              Billing for the work shall be directed to the
                              Owner at the following address:
                            </p>
                            <div className='ml-10'>
                              <p>Durham Public Schools</p>
                              <p>511 Cleveland Street</p>
                              <p> Durham, NC 27702</p>
                            </div>
                          </div>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>1.4.2</p>
                          <div>
                            <p className='mb-1 text-justify'>
                              Payment shall be made within forty-five (45) days
                              of receipt of an acceptable invoice from the
                              Design Consultant.
                            </p>
                          </div>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.5</p>
                          <div>
                            <p className='mb-1'>INSURANCE:</p>
                            <p className='mb-1 text-justify'>
                              The Design Consultant shall purchase and maintain
                              insurance for protection from claims under the
                              workers compensation acts; claims resulting from
                              negligent acts, errors or omissions for damages
                              because of bodily injury, including personal
                              injury, sickness, disease or death of any of the
                              Design Consultant's employees or any other person;
                              claims for damages because of injury to or
                              destruction of personal property including loss of
                              use resulting therefrom; and claims arising out of
                              the performance of this Agreement and caused by
                              negligent acts, errors or omissions for which the
                              Design Consultant is legally liable. Minimum
                              limits of coverage shall be:
                            </p>

                            <div className='ml-3 mb-2 grid grid-cols-2'>
                              <div>
                                <p className='mb-1'>Insurance Description</p>
                                <p className='mb-1'>
                                  <span className='mr-4'>a.</span> Worker's
                                  Compensation
                                </p>
                                <p className='mb-14'>
                                  <span className='mr-4'>b.</span> Employer's
                                  Liability
                                </p>
                                <div className='flex gap-[20px] mb-[1.7rem]'>
                                  <p>c.</p>
                                  <div>
                                    <p>Commercial General Liability</p>
                                    <p>Bodily Injury and Property Damage</p>
                                    <p>Personal & Advertising Injury</p>
                                  </div>
                                </div>
                                <div className='flex gap-[20px] mb-3'>
                                  <p>d.</p>
                                  <div>
                                    <p>Automobile Liability (Symbol 1)</p>
                                    <p>Bodily Injury and Property Damage</p>
                                  </div>
                                </div>
                                <div className='flex gap-[20px]'>
                                  <p>e.</p>
                                  <div>
                                    <p>Professional Liability</p>
                                    <p>Original Project Value</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className='mb-1'>
                                  Minimum Required Coverage
                                </p>
                                <p className='mb-1'>Statutory</p>

                                <div className='mb-1'>
                                  <p>$100,000 Each Accident</p>
                                  <p>$100,000 Disease – Each Employee</p>
                                  <p>$300,000 Disease – Policy Limit</p>
                                </div>

                                <div className='mb-1'>
                                  <p>Combined Single Limit</p>
                                  <p>$1,000,000 Each Occurrence</p>
                                  <p>$1,000,000 Each Occurrence</p>
                                  <p>$1,000,000 General Aggregate</p>
                                </div>

                                <div className='mb-4'>
                                  <p>Combined Single Limit</p>
                                  <p>$1,000,000 Each Accident</p>
                                </div>

                                <div>
                                  <p>$1,000,000 Each Chain</p>
                                  <p>$1,000,000 Policy Aggregate</p>
                                </div>
                              </div>
                            </div>

                            <p className='ml-12 text-justify'>
                              Design Consultant’s Professional Liability policy
                              shall explicitly include coverage for Bodily
                              Injury and/or have any Bodily Injury exclusion
                              deleted by endorsement as necessary to provide
                              this coverage.
                            </p>
                          </div>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>1.5.1</p>
                          <p className='text-justify'>
                            A certificate of insurance documenting evidence of
                            such insurance shall be furnished to the Owner. The
                            Design Consultant shall also provide a policy
                            endorsement requiring the Owner to receive thirty
                            (30) days prior written notice of cancellation for
                            any statutorily permitted reason other than
                            non-payment of premium. In addition, the Design
                            Consultant shall provide at least five (5) business
                            days written prior notice to the Owner’s
                            Representative at the address noted above and via
                            email ("<span className='bg-yellow-500'>F9</span>
                            @dpsnc.net”) of the cancellation, non-renewal
                            (without replacement), or the material reduction of
                            coverage or limits of any of the policies. Upon
                            notice of such cancellation, nonrenewal or
                            reduction, the Design Consultant shall procure
                            substitute insurance so as to assure the Owner that
                            the minimum limits of coverage are maintained
                            continuously throughout the period of this
                            Agreement.
                          </p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>1.5.2</p>
                          <p className='text-justify'>
                            The Design Consultant shall deliver to the Owner a
                            Certificate of Insurance for all of its insurance
                            coverage for as long as it is required to maintain
                            such coverage under paragraph this Agreement.
                          </p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>1.5.3</p>
                          <p className='text-justify'>
                            The Owner, Durham Public Schools Board of Education,
                            shall be named by endorsement as additional insureds
                            on Design Consultant’s General Liability policy.
                          </p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>1.5.4</p>
                          <p className='text-justify'>
                            The Design Consultant shall maintain in force during
                            the performance of this Agreement and for one year
                            after final completion of the Project, the
                            Professional Liability insurance coverage referenced
                            above.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.6</p>
                          <p className='text-justfy'>
                            <span className='mr-3'>QUALIFICATIONS:</span> All
                            work shall be performed by qualified personnel under
                            the supervision of a North Carolina Licensed
                            Architect, and the documents submitted shall bear
                            the Architect’s seal and certification.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>1.7</p>
                          <p className='text-justfy'>
                            <span className='mr-3'>USE OF DRAWINGS:</span> It is
                            understood that the Owner, or his representatives
                            and/or agents, may reproduce the drawings without
                            modifications and distribute the prints without
                            incurring obligation for additional compensation to
                            the Design Consultant. One printed copy and one
                            digital copy in both .PDF and .DWG formats of all
                            drawings shall be provided to the Owner for this
                            purpose.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Article 2 */}
                    <div>
                      <div className='text-center font-bold mb-4'>
                        <p>ARTICLE 2</p>
                        <p>BASIC SERVICES</p>
                      </div>

                      <div>
                        <div className='flex gap-12 mb-2'>
                          <p>2.1</p>
                          <p className='underline'>Scope of Services.</p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>2.1.1</p>

                          <p className='text-justify'>
                            The Basic Services to be provided by the Design
                            Consultant shall be as described in Exhibit A and
                            shall include all services customarily furnished by
                            an architect/engineer and its consultants in
                            accordance with generally accepted architectural and
                            engineering practices consistent with the terms of
                            this Agreement.
                          </p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>2.1.2</p>

                          <p className='text-justify'>
                            It is the responsibility of the Design Consultant to
                            ensure that the Individual Project Construction
                            Documents require that no asbestos-containing
                            materials are to be incorporated in the Project.
                          </p>
                        </div>

                        <div className='flex gap-12 mb-2'>
                          <p>2.2</p>
                          <p className='underline'>
                            Design Consultant's Professional Responsibility and
                            Standard of Care.
                          </p>
                        </div>

                        <div className='flex gap-[35px] mb-2'>
                          <p>2.2.1</p>

                          <p className='text-justify'>
                            By execution of this Agreement, the Design
                            Consultant warrants that (a) it is an experienced
                            and duly licensed firm or individual having the
                            ability and skill necessary to perform all the
                            Services required of it under this Agreement in
                            connection with the design and construction of a
                            project having the scope and complexity of the
                            Project contemplated herein; (b) it has the
                            capabilities and resources necessary to perform its
                            obligations hereunder; and (c) it is familiar with
                            all current laws, rules and regulations which are
                            applicable to the design and construction of the
                            Project (such laws, rules and regulations including,
                            but not limited to, all local ordinances,
                            requirements of building codes of city, county,
                            state and federal authorities which are applicable
                            to the Project, local sanitary laws and rules and
                            regulations, and all orders and interpretations by
                            governing public authorities of such ordinances,
                            requirements, codes, laws, rules and regulations in
                            effect at the time of commencement of services on
                            the Project), and that all drawings, specifications
                            and other documents prepared by the Design
                            Consultant shall be prepared in accordance with and
                            shall accurately meet, reflect and incorporate all
                            such laws, rules and regulations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 10 */}
                  <div>
                    <p className='text-justify mb-8'>
                      In witness whereof, each individual executing this
                      agreement acknowledges that he/she/it is authorized to
                      execute this agreement and further acknowledges the
                      execution of this agreement the day and year first written
                      above.
                    </p>

                    <p className='font-bold mb-8'>
                      Durham Public Schools Board of Education
                    </p>

                    <p className=' mb-8'>
                      <span className='font-bold mr-8'>By:</span>
                      ____________________________________(Seal)
                    </p>
                    <p className=' mb-8'>
                      <span className='font-bold mr-2'>Attest:</span>
                      ____________________________________(Seal)
                    </p>
                    <p className='mb-8'>
                      <span className='bg-yellow-500'>F10</span>
                    </p>

                    <div className='flex mb-8 gap-8'>
                      <p className='font-bold'>By:</p>
                      <div>
                        <p>____________________________________(Seal)</p>
                        <p>
                          <span className='bg-yellow-500'>F11</span>
                        </p>
                      </div>
                    </div>

                    <div className='flex mb-8 gap-2'>
                      <p className='font-bold'>Attest:</p>
                      <div>
                        <p>____________________________________(Seal)</p>
                        <p>
                          <span className='bg-yellow-500'>F12</span>
                        </p>
                      </div>
                    </div>

                    <div className='mb-8 font-bold text-justify'>
                      <p>
                        This instrument has been pre-audited in the manner
                        required by the School Budget and Fiscal Control Act.
                      </p>
                      <p>G.S. 115C-441(a).</p>
                    </div>

                    <div className='flex gap-24'>
                      <div>
                        <p>
                          <span className='bg-yellow-500'>F13</span>
                        </p>
                        <p className='font-bold'>Finance Officer</p>
                      </div>
                      <div>
                        <p>
                          <span className='bg-yellow-500'>F14</span>
                        </p>
                        <p className='font-bold'>Date</p>
                      </div>
                    </div>
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

export default ShortSmall;
