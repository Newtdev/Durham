import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const MWBEBids = () => {
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
                <h3 className='font-bold text-gray-900'>MWBE Form for Bids</h3>
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
              <div className='px-32 pt-8 pb-4 text-black font11'>
                <div>
                  <div className='mb-4'>
                    <p className='font-bold text-xs mb-8'>
                      The total value of minority business contracting will be
                      ($ ) <span className='bg-yellow-500'>F1</span>.
                    </p>

                    <p className='text-center font-bold text-sm mb-4'>
                      AFFIDAVIT A
                    </p>

                    <p className='text-red-600 text-justify'>
                      This Affidavit and <strong>ALL THREE (3) SECTIONS</strong>{" "}
                      Herein Must Be Completed By <strong>ALL BIDDERS</strong>{" "}
                      and Submitted with Bid.
                    </p>
                  </div>

                  {/* Section I */}
                  <div className='mb-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[13px] mb-4'>
                        Section I - Listing of the Good Faith Effort
                      </p>

                      <p className='text-xs text-red-600 text-justify mb-4'>
                        Bidder must earn at least 50 points from the Good Faith
                        Efforts list for their Bid to be considered responsive
                        and must submit documentation supporting all items
                        checked within the timeframes set forth in Section Ill
                        below.
                      </p>

                      <p className='text-center font-bold'>
                        I have made Good Faith Effort to comply under the
                        following areas checked:
                      </p>
                    </div>

                    <div className='mb-4'>
                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F2</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>1 - </strong>Contacted minority businesses
                          that reasonably could have been expected to submit a
                          quote and that were known to the contractor, or
                          available on State or local government maintained
                          lists, at least 10 days before the bid date and
                          notified them of the nature and scope of the work to
                          be performed. "Contact" means contact by letter, fax,
                          e-mail or other means to a viable and active address.{" "}
                          <strong>
                            CONTRACTOR MUST ATTACH EVIDENCE OF CONTACT TO THIS
                            AFFIDAVIT AND SUBMIT WITH BID
                          </strong>
                          . Value= 10 points.{" "}
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F3</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>2 - </strong>Made the construction plans,
                          specifications and requirements available for review
                          by prospective MWBE businesses, or providing these
                          documents to them at least 10 days before the bids are
                          due. Value= 10 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F4</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>3 - </strong>Broken down or combined elements
                          of work into economically feasible units to facilitate
                          minority participation. Value= 15 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F5</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>4 - </strong>Worked with MWBE trade,
                          community, or contractor organizations identified by
                          the Office of Historically Underutilized Businesses
                          and included in the bid documents that provide
                          assistance in recruitment of MWBE'S. Value= 10 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F6</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>5 - </strong>Attended prebid meetings
                          scheduled by the public owner. Value = 10 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F7</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>6 - </strong>Provided assistance in getting
                          required bonding or insurance or provided alternatives
                          to bonding or insurance for subcontractors. Value = 20
                          points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F8</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>7 - </strong>Negotiated in good faith with
                          interested MWBE'S and did not reject them as
                          unqualified without discussing with MWBE'S sound
                          reasons based on their capabilities.{" "}
                          <strong>
                            CONTRACTOR MUST ATTACH TO THIS AFFIDAVIT AND SUBMIT
                            WITH BID COPIES OF QUOTES OR RESPONSES FROM ALL
                            FIRMS SUBMITTING QUOTES OR RESOPNSES, AND, IF
                            APPLICABLE, WRITTEN JUSTIFICATION FOR ANY REJECTION
                            OF A MWBE BASED ON LACK OF QUALIFICATION.
                          </strong>{" "}
                          Value= 15 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F9</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>8 - </strong>Provided assistance to an
                          otherwise qualified MWBE in need of equipment, loan
                          capital, lines of credit, or joint pay agreements to
                          secure loans, supplies, or letters of credit,
                          including waiving credit that is ordinarily required.
                          Assisted minority businesses in obtaining the same
                          unit pricing with the bidder's suppliers in order to
                          help MWBE businesses in establishing credit. Value =
                          25 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F10</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>9 - </strong>Negotiated joint venture and
                          partnership arrangements with MWBE businesses in order
                          to increase opportunities for MWBE business
                          participation on the construction or repair project
                          when possible. Value = 20 points.
                        </p>
                      </div>

                      <div className='flex items-start gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <span className='bg-yellow-500'>F11</span>
                          <input type='checkbox' name='' id='' />
                        </div>

                        <p className='text-justify'>
                          <strong>10 - </strong>Provided quick pay agreements
                          and policies to enable MWBE contractors and suppliers
                          to meet cash-flow demands. Value = 20 points.
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className='text-justify mb-4'>
                        The undersigned hereby certifies that he or she has read
                        the terms of the MWBE business commitment, that the
                        bidder has made the Good Faith Efforts in the areas
                        checked above, and that he or she is authorized to bind
                        the bidder to the commitment herein set forth.
                      </p>

                      <div className='flex justify-between mb-4'>
                        <p>
                          Date: <span className='bg-yellow-500'>F12</span>
                        </p>
                        <p>
                          Name of Authorized Officer:{" "}
                          <span className='bg-yellow-500'>F13</span>
                        </p>
                      </div>

                      <p className='text-right'>
                        Signature:
                        _____________________________________________________
                      </p>
                    </div>
                  </div>

                  {/* Section II */}
                  <div className='mb-4'>
                    <p className='font-bold text-[13px] mb-4'>
                      Section II - Portion of the Work to be Performed by
                      Minority Firms
                    </p>

                    <p className='text-justify mb-4'>
                      I will expend a minimum of{" "}
                      <span className='bg-yellow-500'>F14</span> % of the total
                      dollar amount of the contract with MWBE. MWBE will be
                      employed as construction subcontractors, vendors,
                      suppliers or providers of professional services. Such work
                      will be subcontracted to the following firms listed below.
                    </p>

                    <p className='mb-4 text-center text-[10px]'>
                      (Attach additional sheets if necessary)
                    </p>

                    <table className='w-full border border-black border-collapse text-center'>
                      <thead>
                        <tr>
                          <th
                            colSpan={2}
                            className='border-b border-b-black text-left pl-1'
                          >
                            Name and Phone Number
                          </th>
                          <th className='border-b border-b-black'>
                            *MWBE <br />
                            Category
                          </th>
                          <th className='border border-black border-collapse'>
                            Work Description
                          </th>
                          <th className='border border-black border-collapse'>
                            Dollar Value
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className='text-left pl-1'>F15</td>
                          <td className='text-left pl-1'>F16</td>
                          <td>F17</td>
                          <td className='border border-black border-collapse'>
                            F18
                          </td>
                          <td className='border border-black border-collapse'>
                            F19
                          </td>
                        </tr>

                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                        <tr className='h-[19.5px]'>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='text-left pl-1 border-t border-t-black'></td>
                          <td className='border-t border-t-black'></td>
                          <td className='border border-black border-collapse'></td>
                          <td className='border border-black border-collapse'></td>
                        </tr>
                      </tbody>
                    </table>

                    <p className='text-center mb-4'>
                      *MWBE categories: Black, African American{" "}
                      <strong>(B)</strong>, Hispanic <strong>(H)</strong>, Asian
                      American <strong>(A)</strong> American Indian{" "}
                      <strong>(I)</strong>, Female <strong>(F)</strong> Socially
                      and Economically Disadvantaged <strong>(D)</strong>
                    </p>

                    <p className='text-justify mb-4'>
                      Pursuant to GS143-128.2(d), the undersigned will enter
                      into a formal agreement with MWBE for work listed in this
                      schedule conditional upon execution of a contract with the
                      Owner. Failure to fulfill this commitment may constitute a
                      breach of the contract.
                    </p>

                    <p className='text-justify mb-6'>
                      The undersigned hereby certifies that he or she has read
                      the terms of this commitment and is authorized to bind the
                      bidder to the commitment herein set forth.
                    </p>

                    <div className='flex justify-between mb-4'>
                      <p>
                        Date: <span className='bg-yellow-500'>F20</span>
                      </p>
                      <p>
                        Name of Authorized Officer:{" "}
                        <span className='bg-yellow-500'>F21</span>
                      </p>
                    </div>

                    <p className='text-right'>
                      Signature:
                      _____________________________________________________
                    </p>
                  </div>

                  {/* Section III */}
                  <div>
                    <p className='font-bold text-[13px] mb-4'>
                      Section III - Documentation of Good Faith Efforts
                    </p>

                    <div className='mb-4'>
                      <p className='mb-4 text-justify'>
                        <strong>ALL BIDDERS</strong>, regardless of percentage
                        of MWBE participation, <strong>MUST</strong> provide
                        documentation of all Good Faith Efforts checked in
                        Section I within the timeframes set forth in Parts A and
                        B below.
                      </p>

                      <p className='text-justify mb-4'>
                        Failure to submit these documents/ information shall be
                        grounds for deduction of Good Faith Points. In the event
                        such a deduction results in a failure to achieve the
                        required number of Good Faith Points, the Bid shall be
                        rejected unless the bidder has otherwise demonstrated
                        Good Faith Efforts.
                      </p>

                      <p className='font-bold text-xs mb-4'>
                        PART A (Documentation Required to be Submitted With Bid)
                      </p>

                      <p className='mb-4 text-red-600 text-justify'>
                        Documentation <strong>MUST</strong> be provided{" "}
                        <strong>WITH THE BID</strong> in order for the bidder to
                        receive credit for certain items checked. If the bidder
                        checked Items 1 or 7 in Section I, the bidder{" "}
                        <strong>MUST</strong> provide documentation supporting
                        those Good Faith Efforts <strong>WITH THE BID</strong>.
                      </p>

                      <p>
                        Examples of such documentation include, but are not
                        limited to, the following:
                      </p>
                    </div>

                    {/* First List Group */}
                    <div className='mb-4'>
                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 1</p>

                        <ul className='list-disc pl-12'>
                          <li>
                            Copies of solicitations for quotes to at least three
                            (3) MWBE's from the source list provided by the
                            State for each subcontract to be let under this
                            contract (if 3 or more firms are shown on the source
                            list). Each solicitation shall contain a specific
                            description of the work to be subcontracted,
                            location where bid documents can be reviewed,
                            representative of the Prime Bidder to contact, and
                            location, date and time when quotes must be
                            received.
                          </li>
                          <li>
                            Copies of quotes and responses received from each
                            firm responding to the solicitation.
                          </li>
                          <li>
                            A telephone log of follow-up calls to each firm sent
                            a solicitation.
                          </li>
                        </ul>
                      </div>

                      <div className='pb-8 border-b border-b-black'>
                        <p className='font-bold text-center mb-4'>ITEM 7</p>

                        <ul className='list-disc pl-12'>
                          <li>
                            Copies of quotes or responses received from all
                            firms submitting quotes or responses for each
                            subcontract, and, if applicable a letter detailing
                            the reason(s) for any rejection of minority
                            business(es) due to lack of qualification.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='mb-4'>
                      <p className='mb-4'>
                        I do certify the attached documentation as true and
                        accurate representation of my good faith efforts.
                      </p>

                      <div className='mb-4'>
                        <div className='flex justify-between mb-4'>
                          <p>
                            Date: <span className='bg-yellow-500'>F22</span>
                          </p>
                          <p>
                            Name of Authorized Officer:{" "}
                            <span className='bg-yellow-500'>F23</span>
                          </p>
                        </div>

                        <p className='text-right mb-4'>
                          Signature:
                          _____________________________________________________
                        </p>
                        <p className='text-right mb-4'>
                          Title:
                          <span className='bg-yellow-500'>F24</span>
                        </p>

                        <div className='flex gap-4 justify-center items-center'>
                          <div className='h-24 w-24 rounded-full flex items-center justify-center border border-black'>
                            <p className='text-sm'>SEAL</p>
                          </div>

                          <div>
                            <p className='mb-3'>
                              State of North Carolina, County of
                              _______________________________________________
                            </p>
                            <p className='mb-3'>
                              Subscribed and sworn to before me this _________
                              day of __________________ 20____
                            </p>
                            <p className='mb-3'>
                              Notary Public ________________________
                            </p>
                            <p>My commission expires __________________</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='mb-4'>
                      <p className='font-bold text-xs mb-4'>
                        PART B (Documentation Required to be Submitted Within 72
                        Hours of Notification)
                      </p>

                      <p className='text-red-600 mb-4 text-justify'>
                        Certain documentation <strong>MUST</strong> be provided
                        within 72 hours of notification of being the apparent
                        lowest responsible, responsive bidder in order to
                        receive credit for certain additional Items checked. If
                        the bidder checked Items 2, 3, 4, 5, 6, 8, 9 or 10, the
                        bidder <strong>MUST</strong> provide documentation
                        supporting those Good Faith Efforts within 72 hours of
                        notification of being the apparent lowest responsible,
                        responsive bidder.
                      </p>

                      <p>
                        Examples of such documentation include, but are not
                        limited to the following:
                      </p>
                    </div>

                    {/* Second List Group */}
                    <div className='mb-4 pb-1 border-b border-b-black'>
                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 2</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Invitation to view construction plans,
                            specifications and requirements.
                          </li>
                          <li>
                            Cover letter enclosing construction plans,
                            specifications and requirements.
                          </li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 3</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Copies of all bid solicitations or request for
                            proposals broken down by scope of work.
                          </li>
                          <li>
                            Letter detailing contractor's efforts to break down
                            or combine elements of work into economically
                            feasible units to facilitate minority participation.
                          </li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 4</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Documentation of any contacts or correspondence to
                            MWBE, community, or contractor organizations in an
                            attempt to meet the goal.
                          </li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 5</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>Copy of pre-bid roster.</li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 6</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Letter documenting efforts to provide assistance in
                            obtaining required bonding or insurance for MWBE.
                          </li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 8</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Letter documenting proposed assistance offered to
                            minority business in need of equipment, loan
                            capital, lines of credit, or joint pay agreements to
                            secure loans, supplies, or letter of credit,
                            including waiving credit that is ordinarily
                            required.
                          </li>
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='font-bold text-center mb-4'>ITEM 9</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>
                            Letter documenting negotiations with MWBE businesses
                            to create joint venture or partnership arrangement
                            for the construction or repair project.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className='font-bold text-center mb-4'>ITEM 10</p>
                        <ul className='list-disc space-y-2 pl-12'>
                          <li>Copy of quick pay agreements.</li>
                          <li>Copy of quick pay policies.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className='mb-4'>
                        I do certify the attached documentation as true and
                        accurate representation of my good faith efforts.
                      </p>

                      <div className='mb-4'>
                        <div className='flex justify-between mb-4'>
                          <p>
                            Date: <span className='bg-yellow-500'>F25</span>
                          </p>
                          <p>
                            Name of Authorized Officer:{" "}
                            <span className='bg-yellow-500'>F26</span>
                          </p>
                        </div>

                        <p className='text-right mb-4'>
                          Signature:
                          _____________________________________________________
                        </p>
                        <p className='text-right mb-4'>
                          Title:
                          <span className='bg-yellow-500'>F27</span>
                        </p>

                        <div className='flex gap-4 justify-center items-center'>
                          <div className='h-24 w-24 rounded-full flex items-center justify-center border border-black'>
                            <p className='text-sm'>SEAL</p>
                          </div>

                          <div>
                            <p className='mb-3'>
                              State of North Carolina, County of
                              _______________________________________________
                            </p>
                            <p className='mb-3'>
                              Subscribed and sworn to before me this _________
                              day of __________________ 20____
                            </p>
                            <p className='mb-3'>
                              Notary Public ________________________
                            </p>
                            <p>My commission expires __________________</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 5 */}
                  <div className='mt-10'>
                    <p className='font-bold text-center text-sm mb-0'>
                      State of North Carolina --AFFIDAVIT B-- Intent to Perform
                      Contract with Own Workforce.
                    </p>

                    <div className='mb-10'>
                      <p className='font-bold mb-4'>
                        County of <span className='bg-yellow-500'>F28</span>
                      </p>
                      <p className='mb-0'>
                        Affidavit of <span className='bg-yellow-500'>F29</span>
                      </p>
                      <p className='mb-4 text-[10px] text-center'>
                        (Name of Bidder)
                      </p>

                      <p className='mb-4'>
                        I hereby certify that it is our intent to perform 100%
                        of the work required for the{" "}
                        <span>
                          <span className='bg-yellow-500'>F30</span> <br />{" "}
                          (Name of Project)
                        </span>{" "}
                        contract.
                      </p>

                      <p className='mb-4 text-jusify'>
                        In making this certification, the Bidder states that the
                        Bidder does not customarily subcontract elements of this
                        type project, and normally performs and has the
                        capability to perform and will perform{" "}
                        <span className='underline'>
                          all elements of the work
                        </span>{" "}
                        on this project with his/her own current work forces;
                        and
                      </p>
                      <p className='mb-4 text-jusify'>
                        The Bidder agrees to provide any additional information
                        or documentation requested by the owner in support of
                        the above statement. The Bidder agrees to make a Good
                        Faith Effort to utilize minority suppliers where
                        possible.
                      </p>
                      <p className='text-jusify'>
                        The undersigned hereby certifies that he or she has read
                        this certification and is authorized to bind the Bidder
                        to the commitments herein contained.
                      </p>
                    </div>

                    <div className='mb-36'>
                      <div className='flex justify-between mb-4'>
                        <p>
                          Date: <span className='bg-yellow-500'>F31</span>
                        </p>
                        <p>
                          Name of Authorized Officer:{" "}
                          <span className='bg-yellow-500'>F32</span>
                        </p>
                      </div>

                      <p className='text-right mb-4'>
                        Signature:
                        _____________________________________________________
                      </p>
                      <p className='text-right mb-4'>
                        Title:
                        <span className='bg-yellow-500'>F33</span>
                      </p>

                      <div>
                        <div className='h-24 w-24 rounded-full flex items-center justify-center border border-black mb-4 ml-14'>
                          <p className='text-sm'>SEAL</p>
                        </div>

                        <div>
                          <p className='mb-3'>
                            State of ____________________________________,
                            County of
                            _______________________________________________
                          </p>
                          <p className='mb-3'>
                            Subscribed and sworn to before me this _________ day
                            of __________________ 20____
                          </p>
                          <p className='mb-3'>
                            Notary Public ________________________
                          </p>
                          <p>My commission expires __________________</p>
                        </div>
                      </div>
                    </div>

                    <p>MBForms 2002-Revised May 2010</p>
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

export default MWBEBids;
