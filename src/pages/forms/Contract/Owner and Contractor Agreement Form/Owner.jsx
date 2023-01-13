import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const Owner = () => {
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
                  Owner and Contractor Agreement Form (more $500,000)
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
                    <div className='mb-8'>
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

export default Owner;
