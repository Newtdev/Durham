import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const OwnerESSER = () => {
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
                  Owner and Contractor Agreement Form (more $500,000) - ESSER
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
                  <div className='text-center mb-4'>
                    <h1 className='text-lg font-bold underline mb-4'>
                      OWNER-CONTRACTOR AGREEMENT
                    </h1>
                    <p className='mb-4'>
                      PROJECT NUMBER: <span className='bg-yellow-500'>F1</span>
                    </p>
                    <p>
                      SCHOOL NAME: <span className='bg-yellow-500'>F2</span>
                    </p>
                  </div>

                  <div>
                    <p className='mb-4 text-justify'>
                      <span className='ml-12'>THIS AGREEMENT,</span> in four (4)
                      copies, made this{" "}
                      <span className='bg-yellow-500'>F3</span> day of{" "}
                      <span className='bg-yellow-500'>F4</span>, Two Thousand
                      and <span className='bg-yellow-500'>F5</span> by and
                      between <span className='bg-yellow-500'>F6</span> (herein
                      referred to as the "Owner"), whose mailing address is{" "}
                      <span className='bg-yellow-500'>F7</span> and{" "}
                      <span className='bg-yellow-500'>F8</span>. (herein
                      referred to as the "Contractor"), whose mailing address is
                      <span className='bg-yellow-500'>F9</span>. Correspondence,
                      submittals, and notices relating to or required under this
                      Contract shall be sent in writing to the above addresses;
                      unless either party is notified in writing by the other,
                      of a change in address.
                    </p>

                    <p className='mb-4 text-center'>WITNESSETH:</p>

                    <p className='mb-4 text-justify'>
                      <span className='ml-12'>WHEREAS,</span> it is the intent
                      of the Owner to obtain the services of the Contractor in
                      connection with the new construction of{" "}
                      <span className='bg-yellow-500'>F10</span> (hereinafter
                      referred to as the "Project" or the "Work"); and
                    </p>
                    <p className='mb-4 text-justify'>
                      <span className='ml-12'>WHEREAS,</span> the Contractor
                      desires to perform such construction in accordance with
                      the terms and conditions of this Agreement,
                    </p>
                    <p className='mb-4 text-justify'>
                      <span className='ml-12'>NOW, THEREFORE,</span> in
                      consideration of the promises made herein and other good
                      and valuable consideration, the following terms and
                      conditions are hereby mutually agreed to, by and between
                      the Owner and Contractor:
                    </p>

                    {/* ARTICLE 1 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 1</p>
                        <p className='underline'>DEFINTIONS</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>1.1</p>
                          <p className='text-justify'>
                            All terms in this Agreement which are defined in the
                            Information for Bidders and the General Conditions
                            shall have the meanings designated therein.
                          </p>
                        </div>
                        <div className='flex gap-8'>
                          <p>1.2</p>
                          <p className='text-justify'>
                            The Contract Documents are as defined in the General
                            Conditions. Such documents form the Contract, and
                            all are as fully a part thereof as if attached to
                            this Agreement or repeated herein. The Contract
                            Documents consist of the Owner-Contractor Agreement,
                            the General and Supplemental Conditions of the
                            Contract, the Drawings, the Specifications, all
                            Addenda issued prior to bidding, and all
                            Modifications and Change Orders issued after
                            execution of the Contract.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 2 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 2</p>
                        <p className='underline'>STATEMENT OF THE WORK</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.1</p>
                          <div>
                            <p className='text-justify mb-4'>
                              The Project is the Work identified in the plans
                              and specifications prepared by{" "}
                              <span className='bg-yellow-500'>F11</span>
                              dated <span className='bg-yellow-500'>
                                F12
                              </span>,{" "}
                              <span className='bg-yellow-500'>F13</span> for{" "}
                              <span className='bg-yellow-500'>F14</span> Board
                              of Education,{" "}
                              <span className='bg-yellow-500'>F15</span>,
                              including the following addenda:
                            </p>
                            <p className='mb-4'>
                              <span className='bg-yellow-500'>F16</span>
                            </p>
                            <p>
                              A listing of the plans and specifications included
                              in the Contract Documents is attached as Exhibit
                              A.
                            </p>
                          </div>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.2</p>
                          <div>
                            <p className='text-justify mb-4'>
                              The Parties agree that the Project shall include
                              the following alternates:
                            </p>
                            <p>
                              <span className='bg-yellow-500'>F17</span>
                            </p>
                          </div>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.3</p>
                          <div>
                            <p className='text-justify mb-4'>
                              The Parties agree to the following modifications
                              to the Project's plans and specifications,
                              including the noted value engineering items:
                            </p>
                            <p>
                              <span className='bg-yellow-500'>F18</span>
                            </p>
                          </div>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.4</p>
                          <div>
                            <p className='text-justify mb-4'>
                              The Parties agree that the following allowances
                              are included in the Contract Sum in Section 5.1
                              below:
                            </p>
                            <p>
                              <span className='bg-yellow-500'>F19</span>
                            </p>
                          </div>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.5</p>
                          <p className='text-justify'>
                            The Contractor shall provide and pay for all
                            materials, tools, equipment, labor and professional
                            and non-professional services, and shall perform all
                            other acts and supply all other things necessary, to
                            fully and properly perform and complete the Work, as
                            required by the Contract Documents.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>2.6</p>
                          <p className='text-justify'>
                            The Contractor shall further provide and pay for all
                            related facilities described in any of the Contract
                            Documents, including all work expressly specified
                            therein and such additional work as may be
                            reasonably inferred therefrom, saving and excepting
                            only such items of work as are specifically stated
                            in the Contract Documents not to be the obligation
                            of the Contractor. The totality of the obligations
                            imposed upon the contractor by this Article and by
                            all other provisions of the Contract Documents, as
                            well as the structures to be built and the labor to
                            be performed, is herein referred to as the "Work".
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 3 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 3</p>
                        <p className='underline'>DESIGN CONSULTANT</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>3.1</p>
                          <p className='text-justify'>
                            The Contractor (as defined in the General
                            Conditions) shall be{" "}
                            <span className='bg-yellow-500'>F20</span> whose
                            address is{" "}
                            <span className='bg-yellow-500'>F21</span>, however,
                            that the Owner may, without liability to the
                            Contractor, unilaterally amend this Article from
                            time to time by designating a different person or
                            organization to act as its Design Consultant and so
                            advising the Contractor in writing, at which time
                            the person or organization so designated shall be
                            the Design Consultant for purposes of this Contract.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 4 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 4</p>
                        <p className='underline'>
                          TIME OF COMMENCEMENT AND COMPLETION
                        </p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>4.1</p>
                          <p className='text-justify'>
                            The Contractor shall commence the Work promptly upon
                            the date established in the Notice to Proceed. If
                            there is no Notice to Proceed, the date of
                            commencement of the Work shall be the date of this
                            Agreement or such other date as may be established
                            herein.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>4.2</p>
                          <p className='text-justify'>
                            Time is of the essence. The Contractor shall achieve
                            Substantial Completion as defined in the General
                            Conditions, on or before{" "}
                            <span className='bg-yellow-500'>F22</span>. The
                            Contractor shall achieve Final Completion, as
                            defined in the General Conditions on or before{" "}
                            <span className='bg-yellow-500'>F23</span>.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>4.3</p>
                          <p className='text-justify'>
                            The Supplemental Conditions contains certain
                            specific dates that shall be adhered to and are the
                            last acceptable dates unless modified in writing by
                            mutual agreement between the Contractor and the
                            Owner. All dates indicate midnight unless otherwise
                            stipulated. The only exceptions to this schedule are
                            defined in the General Conditions under 8.3 DELAYS
                            AND EXTENSIONS OF TIME.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>4.4</p>
                          <p className='text-justify'>
                            Should the Contractor fail to complete the Work on
                            or before the dates stipulated for Substantial
                            Completion and/or Final Completion, or such later
                            date as may result from an extension of time granted
                            by the Owner, he shall pay the Owner, as liquidated
                            damages the sums set forth in the General and
                            Supplemental Conditions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 5 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 5</p>
                        <p className='underline'>CONTRACT SUM</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>5.1</p>
                          <p className='text-justify'>
                            Provided that the Contractor shall strictly and
                            completely perform all of its obligations under the
                            Contract Documents, and subject only to additions
                            and deductions by Modification or as otherwise
                            provided in the Contract Documents, the Owner shall
                            pay to the Contractor, in current funds and at the
                            time and in the installments hereinafter specified,
                            the sum of
                            <span className='bg-yellow-500'>
                              F24
                            </span> Dollars{" "}
                            <span className='bg-yellow-500'>F25</span> herein
                            referred to as the "Contract Sum". This amount
                            includes the base bid and the Alternates in Section
                            2.2
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>5.2</p>
                          <p className='text-justify'>
                            The Contract Sum includes the value engineering
                            items and other contract modifications noted in
                            Section 2.3 above that total $
                            <span className='bg-yellow-500'>F26</span>.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>5.3</p>
                          <div>
                            <p className='mb-4'>
                              Unit Prices are established as follows for the
                              Project:
                            </p>

                            <table className='border border-black w-[700px] mb-4'>
                              <tbody>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 1
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'>
                                    <span className='bg-yellow-500'>F27</span>
                                  </td>
                                  <td className='text-center px-3'>
                                    <span className='bg-yellow-500'>F28</span>
                                  </td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 2
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 3
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 4
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 5
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 6
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 7
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                                <tr className='border border-black border-collapse'>
                                  <td className='px-3 w-[30%]'>
                                    Unit Price No. 8
                                  </td>
                                  <td className='px-3 border-x border-x-black w-[45%]'></td>
                                  <td className='text-center px-3'>$</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 6 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 6</p>
                        <p className='underline'>PROGRESS PAYMENTS</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>6.1</p>
                          <p className='text-justify'>
                            The Contractor hereby agrees that on or about the
                            First day of the month for every month during the
                            performance of the Work he will deliver to the
                            Owner's Project Manager an Application for Payment
                            in accordance with the provisions of Article 9 of
                            the General Conditions. This date may be changed
                            upon mutual agreement, stated in writing, between
                            the Owner and Contractor. Payment under this
                            Contract shall be made as provided in the General
                            Conditions. Payments due and unpaid under the
                            Contract Documents shall not bear interest.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARTICLE 7 */}
                    <div className='mb-4'>
                      <div className='text-center mb-4'>
                        <p className='mb-4'>Article 7</p>
                        <p className='underline'>OTHER REQUIREMENTS</p>
                      </div>

                      <div>
                        <div className='flex gap-8 mb-4'>
                          <p>7.1</p>
                          <p className='text-justify'>
                            The Contractor shall submit the Performance Bond,
                            Labor and Material Payment Bond and Certification of
                            Insurance as required by the Contract Documents.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>7.2</p>
                          <p className='text-justify'>
                            The Owner shall furnish to the Contractor{" "}
                            <span className='bg-yellow-500'>F29</span>{" "}
                            <span className='bg-yellow-500'>F30</span> set of
                            drawings and{" "}
                            <span className='bg-yellow-500'>F31</span>{" "}
                            <span className='bg-yellow-500'>F32</span> set of
                            specifications, at no extra cost, for use in the
                            Construction of the Work. Additional sets of
                            drawings or specifications may be obtained by the
                            Contractor by paying the Owner for the costs of
                            reproduction, handling and mailing.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>7.3</p>
                          <p className='text-justify'>
                            The Contractor shall make a good faith effort to
                            utilize Historically Underutilized Businesses
                            (HUB’s) per N.C. Gen. Stat. 143-128.2, and as
                            described in the construction documents.
                          </p>
                        </div>
                        <div className='flex gap-8 mb-4'>
                          <p>7.4</p>
                          <p className='text-justify'>
                            The General Conditions, Supplemental Conditions and
                            the plans and specifications, including any addenda,
                            are incorporated herein by reference.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className='mb-4'>
                      Articles 8-12: These Articles Are Intentionally Left Blank
                    </p>

                    {/* Article 13 */}
                    <div className='mb-8'>
                      <div className='mb-4'>
                        <p className='underline text-center'>
                          Federal Requirements
                        </p>
                        <p>Article 13</p>
                        <p className='mb-4'>FEDERALLY FUNDED PROJECTS</p>
                        <p className='text-justify'>
                          The Contractor is notified that this project will be
                          financed with federal funds. The Contractor shall
                          ensure that all subcontracts and other contracts for
                          goods and services for this project have the below
                          provisions of this section their contracts. Contractor
                          agrees to comply with the following provisions.
                          Failure to comply with any and all provisions herein
                          may be cause for the Owner to issue a cancellation
                          notice to the Contractor. In the event of a conflict
                          between this section and any other provision in this
                          Agreement, the parties agree that this section shall
                          prevail.
                        </p>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.1</p>
                        <div>
                          <p>REMEDIES FOR BREACH.</p>
                          <p className='text-justify'>
                            The Owner reserves all rights and privileges under
                            the applicable laws and regulations with respect to
                            this Agreement in the event of breach of contract by
                            either party.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.2</p>
                        <div>
                          <p>
                            TERMINATION FOR CAUSE AND FOR CONVENIENCE BY OWNER.
                          </p>
                          <p className='text-justify'>
                            The Owner reserves the right to immediately
                            terminate this Agreement in the event of a breach or
                            default of the agreement by Contractor, in the event
                            Contractor fails to: (1) meet schedules, deadlines,
                            and/or delivery dates within the time specified by
                            this Agreement and/or an IPPA; (2) make any payments
                            owed; or (3) otherwise perform in accordance with
                            the Agreement and/or the IPPA. The Owner also
                            reserves the right to terminate the Agreement
                            immediately, with written notice to Contractor, for
                            convenience, if the Owner believes, in its sole
                            discretion that it is in the best interest of the
                            Owner to do so. The Contractor will be compensated
                            for work performed and accepted and goods accepted
                            by the Owner as of the termination date if the
                            Agreement is terminated for convenience of the
                            Owner. The award of this Agreement is not exclusive
                            and the Owner reserves the right to purchase goods
                            and services from other vendors when it is in the
                            best interest of the Owner.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.3</p>
                        <div>
                          <p>EQUAL EMPLOYMENT OPPORTUNITY.</p>
                          <p className='text-justify'>
                            Except as otherwise provided under 41 CFR Part 60,
                            when funds will be expended by the Owner pursuant to
                            this Agreement that meet the definition of
                            “federally assisted construction contract” in 41 CFR
                            Part 60-1.3, Contractor certifies it will comply
                            with the equal opportunity clause provided under 41
                            CFR 60-1.4(b), in accordance with Executive Order
                            11246, “Equal Employment Opportunity” (30 FR 12319,
                            12935, 3 CFR Part, 1964-1965 Comp., p. 339), as
                            amended by Executive Order 11375, “Amending
                            Executive Order 11246 Relating to Equal Employment
                            Opportunity,” and implementing regulations at 41 CFR
                            part 60, “Office of Federal Contract Compliance
                            Programs, Equal Employment Opportunity, Department
                            of Labor.”
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.4</p>
                        <div>
                          <p>
                            DAVIS-BACON ACT, AS AMENDED (40 U.S.C. 3141-3148).
                          </p>
                          <p className='text-justify'>
                            During the term of this Agreement, including any
                            IPPAs issued pursuant to this Agreement, the
                            Contractor certifies it will be in compliance with
                            all applicable Davis-Bacon Act provisions. In
                            accordance with the statute, Contractor shall pay
                            wages to laborers and mechanics at a rate not less
                            than the prevailing wages specified in a wage
                            determination made by the Secretary of Labor. In
                            addition, the Contractor shall pay wages not less
                            than once a week, unless employees voluntarily agree
                            to a different schedule. The Owner will report all
                            suspected or reported violations to the Federal
                            awarding agency. Contractor certifies it will comply
                            with the Copeland “Anti-Kickback” Act (40 U.S.C.
                            3145), as supplemented by Department of Labor
                            regulations (29 CFR Part 3, “Contractors and
                            Subcontractors on Public Building or Public Work
                            Financed in Whole or in Part by Loans or Grants from
                            the United States”). The Act provides that each
                            vendor or subrecipient must be prohibited from
                            inducing, by any means, any person employed in the
                            construction, completion, or repair of public work,
                            to give up any part of the compensation to which he
                            or she is otherwise entitled. The Owner will report
                            all suspected or reported violations to the Federal
                            awarding agency.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.5</p>
                        <div>
                          <p>
                            CONTRACT WORK HOURS AND SAFETY STANDARDS ACT (40
                            U.S.C. 3701-3708).
                          </p>
                          <p className='text-justify'>
                            The Contractor certifies that during the term of an
                            award for all contracts in excess of $100,000 that
                            involve the employment of mechanics or laborers, the
                            Contractor will be in compliance with all applicable
                            provisions of the Contract Work Hours and Safety
                            Standards Act. Under 40 U.S.C. 3702 of the Act, each
                            vendor must be required to compute the wages of
                            every mechanic and laborer on the basis of a
                            standard work week of 40 hours. Work in excess of
                            the standard work week is permissible provided that
                            the worker is compensated at a rate of not less than
                            one and a half times the basic rate of pay for all
                            hours worked in excess of 40 hours in the work week.
                            The requirements of 40 U.S.C. 3704 are applicable to
                            construction work and provide that no laborer or
                            mechanic must be required to work in surroundings or
                            under working conditions which are unsanitary,
                            hazardous or dangerous. These requirements do not
                            apply to the purchases of supplies or materials or
                            articles ordinarily available on the open market, or
                            contracts for transportation or transmission of
                            intelligence.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.6</p>
                        <div>
                          <p>
                            RIGHTS TO INVENTIONS MADE UNDER A CONTRACT OR
                            AGREEMENT.
                          </p>
                          <p className='text-justify'>
                            If the Federal award meets the definition of
                            “funding agreement” under 37 CFR §401.2 (a) and
                            Contractor wishes to enter into a contract with a
                            small business firm or nonprofit organization
                            regarding the substitution of parties, assignment or
                            performance of experimental, developmental, or
                            research work under that “funding agreement,”
                            Contractor agrees to comply with the requirements of
                            37 CFR Part 401, “Rights to Inventions Made by
                            Nonprofit Organizations and Small Business Firms
                            Under Government Grants, Contracts and Cooperative
                            Agreements,” and any implementing regulations issued
                            by the awarding agency.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.7</p>
                        <div>
                          <p>
                            CLEAN AIR ACT (42 U.S.C. 7401-7671Q.) AND THE
                            FEDERAL WATER POLLUTION CONTROL ACT (33 U.S.C.
                            1251-1387) COMPLIANCE.
                          </p>
                          <p className='text-justify'>
                            The Contractor certifies that during the term of an
                            award for all contracts by the Owner associated with
                            this Agreement in excess of $150,000, the Contractor
                            agrees to comply with all applicable standards,
                            orders or regulations issued pursuant to the Clean
                            Air Act (42 U.S.C. 7401-7671q) and the Federal Water
                            Pollution Control Act as amended (33 U.S.C. 1251-
                            1387). Violations must be reported to the Federal
                            awarding agency and the Regional Office of the
                            Environmental Protection Agency (EPA).
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.8</p>
                        <div>
                          <p>DEBARMENT AND SUSPENSION.</p>
                          <p className='text-justify'>
                            Contractor certifies that during the term of an
                            award for all contracts by the Owner associated with
                            this Agreement, the Contractor certifies that
                            neither it nor its principals is presently debarred,
                            suspended, proposed for debarment, declared
                            ineligible, or voluntarily excluded from
                            participation by any federal department or agency.
                          </p>
                        </div>
                      </div>

                      {/* 13.9 */}
                      <div className='mb-4'>
                        <div className='flex gap-8'>
                          <p>13.9</p>
                          <div>
                            <p>
                              COMPLIANCE WITH BYRD ANTI-LOBBYING AMENDMENT (31
                              U.S.C. 1352).
                            </p>
                            <p className='text-justify'>
                              When federal funds are expended by the Owner for a
                              contract exceeding $100,000, the Contractor
                              certifies that during the term and after the
                              awarded term of all contracts by the Owner
                              associated with this Agreement, the Contractor
                              certifies that it is in compliance with all
                              applicable provisions of the Byrd Anti-Lobbying
                              Amendment (31 U.S.C. 1352). The Contractor further
                              certifies that:
                            </p>
                          </div>
                        </div>

                        <div className='flex gap-[2.8rem] mb-4'>
                          <p>(1)</p>

                          <p>
                            No Federal appropriated funds have been paid or will
                            be paid for on behalf of the Contractor, to any
                            person for influencing or attempting to influence an
                            officer or employee of any agency, a Member of
                            Congress, an officer or employee of congress, or an
                            employee of a Member of Congress in connection with
                            the awarding of a Federal contract, the making of a
                            Federal grant, the making of a Federal loan, the
                            entering into a cooperative agreement, and the
                            extension, continuation, renewal, amendment, or
                            modification of a Federal contract, grant, loan, or
                            cooperative agreement.
                          </p>
                        </div>

                        <div className='flex gap-[2.8rem] mb-4'>
                          <p>(2)</p>

                          <p>
                            If any funds other than Federal appropriated funds
                            have been paid or will be paid to any person for
                            influencing or attempting to influence an officer or
                            employee of any agency, a Member of Congress, an
                            officer or employee of congress, or an employee of a
                            Member of Congress in connection with this Federal
                            grant or cooperative agreement, the undersigned
                            shall complete and submit Standard Form-LLL,
                            “Disclosure Form to Report Lobbying”, in accordance
                            with its instructions.
                          </p>
                        </div>

                        <div className='flex gap-[2.8rem]'>
                          <p>(3)</p>

                          <p>
                            The Contractor shall require that the language of
                            this certification be included in the award
                            documents for all covered sub-awards exceeding
                            $100,000 in Federal funds at all appropriate tiers
                            and that all subrecipients shall certify and
                            disclose accordingly.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.10</p>
                        <div>
                          <p> COMPLIANCE WITH SOLID WASTE DISPOSAL ACT.</p>
                          <p className='text-justify'>
                            In the event the Agreement involves the purchase of
                            more than $10,000 in items designed by guidelines of
                            the Environmental Protection Agency at 40 C.F.R.
                            Part 247, Contractor agrees to comply with the
                            requirements of section 6002 of the Solid Waste
                            Disposal Act. In particular, the Contractor
                            certifies that the percentage of recovered materials
                            to be used in the performance of the Agreement will
                            be at least the amount required by applicable
                            specifications or other contractual requirements.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.11</p>
                        <div>
                          <p>
                            PROHIBITION ON CERTAIN TELECOMMUNICATIONS AND VIDEO
                            SURVEILLANCE SERVICES OR EQUIPMENT.
                          </p>
                          <p className='text-justify'>
                            As detailed in 2 CFR § 200.216, Contractor certifies
                            that any equipment, services, or systems provided
                            through this Agreement shall not use covered
                            telecommunications equipment or services as a
                            substantial or essential component of a system or as
                            part of any system.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.12</p>
                        <div>
                          <p>DOMESTIC PREFERENCE</p>
                          <p className='text-justify'>
                            As detailed in 2 CFR § 200.322, as appropriate and
                            to the extent consistent with law, Contractor
                            certifies that, to the greatest extent practicable,
                            the goods, products, or materials furnished through
                            this award will be produced in the United States
                            (including but not limited to iron, aluminum, steel,
                            cement, and other manufactured products).
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.13</p>
                        <div>
                          <p>RECORDS RETENTION REQUIREMENTS.</p>
                          <p className='text-justify'>
                            The Contractor certifies that it will comply with
                            the record retention requirements detailed in 2 CFR
                            § 200.334. The Contractor further certifies that
                            Contractor will retain all records as required by 2
                            CFR § 200.334 for a period of three years after
                            grantees or subgrantees submit final expenditure
                            reports or quarterly or annual financial reports, as
                            applicable, and all other pending matters are
                            closed.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8 mb-4'>
                        <p>13.14</p>
                        <div>
                          <p>CERTIFICATION OF NON-COLLUSION STATEMENT.</p>
                          <p className='text-justify'>
                            Contractor certifies under penalty of perjury that
                            its response to this procurement solicitation is in
                            all respects bona fide, fair, and made without
                            collusion or fraud with any person, joint venture,
                            partnership, corporation or other business or legal
                            entity.
                          </p>
                        </div>
                      </div>

                      <div className='flex gap-8'>
                        <p>13.15</p>
                        <div>
                          <p>PROHIBITION ON GIFTS.</p>
                          <p className='text-justify'>
                            Contractor certifies that it will comply with the
                            prohibition against giving gifts, gratuities, favors
                            or anything of monetary value to an officer,
                            employee or agent of the School System. Contractor
                            understands and agrees that violation of these
                            standards will result in termination of the
                            Agreement and may result in ineligibility for future
                            contract awards. In witness whereof, each individual
                            executing this agreement acknowledges that he/she/it
                            is authorized to execute this agreement on behalf of
                            his/her/its principle and further acknowledges the
                            execution of this agreement the day and year first
                            written above.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className='mb-8 text-justify'>
                        <span className='ml-12'>IN WITNESS WHEREOF,</span>{" "}
                        <span className='bg-yellow-500'>F33</span> Board of
                        Education (hereinbefore called the "Owner") has caused
                        these presents to be signed and its corporate seal to be
                        hereunto affixed, attested by its Chairperson and
                        Secretary, and{" "}
                        <span className='bg-yellow-500'>F34</span> (hereinbefore
                        called "Contractor") has caused these presents to be
                        signed by its President and its Corporate seal to be
                        hereunto affixed, as hereinafter attested, all as of the
                        day and year first above written.
                      </p>

                      <div className='flex gap-4 mb-4'>
                        <div>
                          <p>
                            ______________________________________________________________
                          </p>
                          <p>
                            <span className='bg-yellow-500'>F35</span>, Chair,
                            Durham Public Schools Board of Education
                          </p>
                        </div>
                        <div>
                          <p>_____________________</p>
                          <p>
                            <span className='bg-yellow-500'>F36</span>
                          </p>
                        </div>
                      </div>

                      <p className='mb-8'>
                        This instrument has been pre-audited in the manner
                        required by the School Budget and Fiscal Control Act.
                      </p>

                      <div className='flex gap-4 mb-6'>
                        <div>
                          <p>
                            ______________________________________________________________
                          </p>
                          <p>
                            <span className='bg-yellow-500'>F37</span>, Chief
                            Finance Officer, Durham Public Schools
                          </p>
                        </div>
                        <div>
                          <p>_____________________</p>
                          <p>
                            <span className='bg-yellow-500'>F38</span>
                          </p>
                        </div>
                      </div>

                      <div className='border-4 border-gray-300 p-2 mb-6'>
                        <div className='flex gap-12'>
                          <p>Endorsement:</p>
                          <div>
                            <p>
                              <span className='bg-yellow-500'>F39</span>
                            </p>
                            <p>Executive Director</p>
                            <p>
                              Durham Public Schools{" "}
                              <span className='ml-12'>Building services</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className='mb-4'>
                        This contract was approved by the Board on the{" "}
                        <span className='bg-yellow-500'>F40</span>
                      </p>
                      <p className='mb-8'>
                        <span className='bg-yellow-500'>F41</span>
                      </p>
                      <p className='mb-8'>
                        By:{" "}
                        <span className='ml-16'>
                          ________________________________________________________
                        </span>
                      </p>
                      <p className='mb-4'>
                        Name/Title:{" "}
                        <span className='ml-2'>
                          _______________________________________________________
                        </span>
                      </p>
                      <p>STATE OF NORTH CAROLINA</p>
                      <p>COUNTY OF DURHAM</p>

                      <p className='my-4 text-justify'>
                        <span className='ml-12'>I,</span> a Notary Public in and
                        for the aforesaid County and State, do hereby certify
                        that ____________________ personally appeared before me
                        this day and acknowledged that he/she is _____________
                        of _________________________., a _________________
                        (state of incorporation) corporation, duly authorized to
                        do business in the state of North Carolina, and that by
                        authority duly given and as the act of the corporation,
                        the foregoing instrument was signed in its name by its
                        ________, sealed with its corporate seal and attested by
                        ___________________ as its Corporate Secretary.
                      </p>
                      <p className='mb-8 text-justify'>
                        Witness my hand and notarial seal this{" "}
                        <span className='bg-yellow-500'>F42</span> day of{" "}
                        <span className='bg-yellow-500'>F43</span>, 20
                        <span className='bg-yellow-500'>F44</span>.
                      </p>
                      <div className='mb-8 flex gap-8'>
                        <div>
                          <p>__________________________________________</p>
                          <p>Notary Public</p>
                        </div>
                        <p>(SEAL/STAMP)</p>
                      </div>
                      <p>My commission expires:___________</p>
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

export default OwnerESSER;
