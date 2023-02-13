import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const OwnerDesignLessF = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <ModalOverlay show={showModal} close={() => setShowModal(true)}>
        <div>
          {/* Modal content */}
          <div className="relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14">
            {/* Header */}
            <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
              <div className="ml-6">
                <h3 className="text-lg font-bold text-gray-900">
                  Owner and Design Consultant (Less than $200,000)
                </h3>
                <p className="text-base text-gray-700">Preview Document</p>
              </div>
              <button
                type="button"
                className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
                data-modal-toggle="small-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
              <div className="px-20 pt-8 pb-4 text-black">
                <div>
                  {/* Page 1*/}
                  <div className="text-center mb-8">
                    <h1 className="text-lg font-bold mb-10">
                      CONSULTANT SERVICES AGREEMENT
                    </h1>
                    <p className="mb-8">BETWEEN</p>
                    <p className="mb-8 font-bold">
                      Durham Public Schools Board of Education
                    </p>
                    <p className="mb-12">
                      hereinafter referred to as the Owner
                    </p>
                    <p className="mb-8">AND</p>
                    <p className="mb-8">
                      <span className="bg-yellow-500">F1</span>
                    </p>
                    <p className="mb-12">
                      hereinafter referred to as the Engineer
                    </p>

                    <div className="h-[1000px]"></div>
                  </div>

                  {/* Page 2 */}
                  <div className="mb-8">
                    <p className="mb-6 text-center">
                      ENGINEERING CONSULTANT AGREEMENT
                    </p>

                    <p className="text-justify mb-8">
                      This AGREEMENT made this{" "}
                      <span className="bg-yellow-500">F3</span> day of{" "}
                      <span className="bg-yellow-500">F4</span>,{" "}
                      <span className="bg-yellow-500">F5</span> between Durham
                      Public Schools Board of Education, located at 2011 Hamlin
                      Rd Durham NC 27704 (hereinafter, “Owner”), and{" "}
                      <span className="bg-yellow-500">F7</span>, located at{" "}
                      <span className="bg-yellow-500">F8</span> (hereinafter,
                      the “Engineer”). The Agreement is for Professional
                      Services to be provided as authorized by the Owner and as
                      outlined in the Proposal and Scope of Services attached to
                      this Agreement as Exhibit A.
                    </p>

                    {/* Article 1 */}
                    <div>
                      <div className="mb-6 text-center">
                        <p className="mb-2">ARTICLE 1</p>
                        <p>TERMS AND CONDITIONS</p>
                      </div>

                      <div>
                        <div className="flex gap-8 mb-4">
                          <p>1.1</p>
                          <p>
                            <span className="mr-3">WORK:</span> The Engineer
                            shall perform the services outlined on the attached
                            Exhibit A as authorized by the Owner and in
                            accordance with the terms and conditions of this
                            Agreement. The Engineer agrees that all plans,
                            drawing, specifications, designs and surveys in
                            draft or final form are the property of the Owner,
                            who may demand possession of them at anytime from
                            Engineer and receive the same within three business
                            days of demand.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-4">
                          <p>1.2</p>
                          <div>
                            <p className="mb-3">
                              <span className="mr-3">TIME:</span> The parties
                              acknowledge that this Project is time sensitive
                              and must be completed in its entirety no later
                              than the time shown in Exhibit A. The parties
                              further agree that the Engineer’s Scope of Work
                              will proceed and be executed in accordance with
                              the proposed Timeline attached to this agreement
                              as Exhibit A.
                            </p>
                            <p>
                              In the event that circumstances beyond the
                              Engineer’s control force a delay that prohibits or
                              may prohibit the Engineer’s compliance with the
                              schedule, the Engineer shall inform the Owner
                              immediately.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-8 mb-4">
                          <p>1.3</p>
                          <p>
                            <span className="mr-3">COMPENSATION:</span> The
                            Engineer shall be compensated in accordance with the
                            fee schedule included in Exhibit A to this Agreement
                            and this Paragraph. The fee described in Exhibit A
                            shall cover the cost of the engineering services
                            (including the furnishing of all materials,
                            apparatus, labor and any required insurance).
                            Attached as Exhibit B is an hourly rate schedule for
                            any services to be provided by the hour and any
                            additional services that may be authorized under
                            this Agreement. The Engineer shall not be
                            compensated for any work or services performed
                            without specific authorization from Owner.
                          </p>
                        </div>

                        <div className="flex gap-12 mb-4">
                          <p>1.4</p>
                          <p>BILLING AND PAYMENT:</p>
                        </div>

                        <div className="flex gap-[35px] mb-4">
                          <p>1.4.1</p>
                          <div>
                            <p className="mb-1 text-justify">
                              Billing for the work shall be directed to the
                              Owner at the following address:
                            </p>
                            <div className="ml-10">
                              <p>
                                <span className="bg-yellow-500">F25</span>
                              </p>
                              <p>Durham Public Schools</p>
                              <p>2011 Hamlin Road</p>
                              <p> Durham, NC 27704</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-[35px] mb-4">
                          <p>1.4.2</p>
                          <p className="text-justify">
                            Payment shall be made within thirty (30) days of
                            receipt of an acceptable invoice from the Engineer.
                          </p>
                        </div>

                        <div className="flex gap-12 mb-4">
                          <p>1.5</p>
                          <div>
                            <p className="mb-1">INSURANCE:</p>
                            <p className="mb-1 text-justify">
                              The Engineer shall purchase and maintain insurance
                              for protection from claims under workers' or
                              workmen's compensation acts; claims resulting from
                              negligent acts or omissions for damages because of
                              bodily injury, including personal injury,
                              sickness, disease or death of any of the
                              Engineer's employees or any other person; claims
                              for damages because of injury to or destruction of
                              personal property including loss of use resulting
                              therefrom; and claims arising out
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pages 9 & 10*/}
                  <div className="">
                    <div className="mb-20">
                      <div className="flex gap-[35px] mb-4">
                        <p>6.14</p>
                        <p className="text-justify">
                          The headings or captions within this Agreement shall
                          be deemed set forth in the manner presented for the
                          purposes of reference only and shall not control or
                          otherwise affect the information set forth therein or
                          interpretation thereof.
                        </p>
                      </div>

                      <div className="flex gap-[35px] mb-4">
                        <p>6.15</p>
                        <p className="text-justify">
                          For the purpose of this Agreement unless the context
                          clearly indicates otherwise, the singular includes the
                          plural, and the plural includes the singular.
                        </p>
                      </div>

                      <div className="flex gap-[35px] mb-4">
                        <p>6.16</p>
                        <p className="text-justify">
                          This Agreement may be executed in any number of
                          counterparts, each of which shall be deemed an
                          original, and the counterparts shall constitute one
                          and the same instrument, which shall be sufficient
                          evidence by any one thereof.
                        </p>
                      </div>

                      <div className="flex gap-[35px] mb-4">
                        <p>6.17</p>
                        <p className="text-justify">
                          This Agreement shall inure to the benefit of and be
                          binding on the heirs, successors, assigns, trustees
                          and personal representatives of the Owner, as well as
                          the permitted assigns and trustees of the Engineer.
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="mb-8 text-justify">
                        In witness whereof, each individual executing this
                        agreement acknowledges that he/she/it is authorized to
                        execute this agreement on behalf of his/her/its
                        principle and further acknowledges the execution of this
                        agreement the day and year first written above.
                      </p>

                      <div className="flex gap-4 mb-8">
                        <div>
                          <p>
                            ______________________________________________________________
                          </p>
                          <p>
                            <span className="bg-yellow-500">F8</span>, Director
                            of Construction and Sustainability
                          </p>
                        </div>
                        <div>
                          <p>
                            <span className="bg-yellow-500">F9</span>
                          </p>
                          <p>Date</p>
                        </div>
                      </div>

                      <p className="mb-8">
                        This instrument has been pre-audited in the manner
                        required by the School Budget and Fiscal Control Act.
                      </p>

                      <div className="flex gap-4 mb-6">
                        <div>
                          <p>
                            ______________________________________________________________
                          </p>
                          <p>
                            <span className="bg-yellow-500">F10</span>, Chief
                            Finance Officer, Durham Public Schools
                          </p>
                        </div>
                        <div>
                          <p>
                            <span className="bg-yellow-500">F11</span>
                          </p>
                          <p>Date</p>
                        </div>
                      </div>

                      <div className="border-4 border-gray-300 p-2 mb-6">
                        <div className="flex gap-12">
                          <p>Endorsement:</p>
                          <div>
                            <p>
                              <span className="bg-yellow-500">F12</span>
                            </p>
                            <p>Project Manager</p>
                            <p>Durham Public Schools</p>
                            <p>Construction & Capital Planning</p>
                          </div>
                        </div>
                      </div>

                      <p className="mb-8">
                        <span className="bg-yellow-500">F13</span>
                      </p>
                      <p className="mb-8">
                        By:{" "}
                        <span className="ml-16">
                          ________________________________________________________
                        </span>
                      </p>
                      <p className="mb-8">
                        Name/Title:{" "}
                        <span className="ml-2">
                          _______________________________________________________
                        </span>
                      </p>
                      <p>STATE OF NORTH CAROLINA</p>
                      <p>COUNTY OF DURHAM</p>

                      <p className="my-4 text-justify">
                        <span className="ml-12">I,</span> a Notary Public in and
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
                      <p className="mb-8 text-justify">
                        Witness my hand and notarial seal this{" "}
                        <span className="bg-yellow-500">F14</span> day of{" "}
                        <span className="bg-yellow-500">F15</span>, 20
                        <span className="bg-yellow-500">F16</span>.
                      </p>
                      <div className="mb-8 flex gap-8">
                        <div className="flex gap-12">
                          <div>
                            <p>__________________________________________</p>
                            <p>Notary Public</p>
                          </div>
                          <p>(SEAL/STAMP)</p>
                        </div>
                      </div>
                      <p>My commission expires:___________</p>
                    </div>
                  </div>

                  {/* Page 13 */}
                  <div className="mt-16">
                    <div>
                      <p className="font-bold mb-5">Exhibit C</p>
                      <p className="text-center font-bold mb-4">
                        Sexual Offender Registry Check Certification Form
                      </p>
                    </div>

                    <div>
                      <div className="mb-6">
                        <p>
                          Check the appropriate box to indicate the type of
                          check:
                        </p>
                        <div>
                          <div className="flex gap-4 items-center">
                            <input
                              type="checkbox"
                              name="initial"
                              id="initial"
                            />
                            <label htmlFor="initial">Initial</label>
                            <span className="bg-yellow-500">F17</span>
                          </div>
                          <div className="flex gap-4 items-center">
                            <input
                              type="checkbox"
                              name="initial"
                              id="initial"
                            />
                            <label htmlFor="initial">Supplemental</label>
                            <span className="bg-yellow-500">F18</span>
                          </div>
                          <div className="flex gap-4 items-center">
                            <input
                              type="checkbox"
                              name="initial"
                              id="initial"
                            />
                            <label htmlFor="initial">Annual</label>
                            <span className="bg-yellow-500">F19</span>
                          </div>
                        </div>
                      </div>

                      <p className="mb-4">
                        I, <span className="bg-yellow-500">F20</span> (insert
                        name), <span className="bg-yellow-500">F21</span>{" "}
                        (insert title) of{" "}
                        <span className="bg-yellow-500">F22</span> (insert
                        company name) hereby certify that I have performed all
                        of the required sexual offender registry checks required
                        under this Agreement for all contractual personnel
                        (employees, agents, ownership personnel, or contractors
                        ) who may be used to deliver goods or provide services
                        under this Agreement, including the North Carolina Sex
                        Offender and Public Protection Registration Program, the
                        North Carolina Sexually Violent Predator Registration
                        Program, and the National Sex Offender Registry. I
                        further certify that none of the individuals listed
                        below appears on any of the above-named registries and
                        that I will not assign any individual to deliver goods
                        or perform services under this Agreement if said
                        individual appears on any of the sex offender
                        registries. I agree to maintain all records and
                        documents associated with these registry checks, and
                        that I will provide such records and documents to the
                        school system upon request. I specifically acknowledge
                        that the school system retains the right to audit these
                        records to ensure compliance with this section at any
                        time in the school system’s sole discretion. I
                        acknowledge that I am required to perform these checks
                        and provide this certification form before any work is
                        performed under the Agreement (initial check), any time
                        additional contractual personnel may perform work under
                        the Agreement (supplemental check), and at each
                        anniversary date of the Agreement (annual check).
                      </p>

                      <div>
                        <div className="grid grid-cols-2 mb-4">
                          <div>
                            <p className="font-bold mb-2">
                              Contractual Personnel Names
                            </p>
                            <p className="mb-2">
                              <span className="mr-4">1.</span>{" "}
                              ________________________
                            </p>
                            <p className="mb-2">
                              <span className="mr-4">2.</span>{" "}
                              ________________________
                            </p>
                            <p className="mb-2">
                              <span className="mr-4">3.</span>{" "}
                              ________________________
                            </p>
                            <p className="mb-2">
                              <span className="mr-4">4.</span>{" "}
                              ________________________
                            </p>
                            <p className="mb-0">
                              <span className="mr-4">5.</span>{" "}
                              ________________________
                            </p>
                            <p>(attach additional page(s) if needed)</p>
                          </div>

                          <div>
                            <p className="font-bold mb-2">Job Title</p>
                            <p className="mb-2">________________________</p>
                            <p className="mb-2">________________________</p>
                            <p className="mb-2">________________________</p>
                            <p className="mb-2">________________________</p>
                            <p className="mb-0">________________________</p>
                          </div>
                        </div>

                        <p className="mb-4">
                          I attest that the forgoing information is true and
                          accurate to the best of my knowledge.
                        </p>

                        <div className="grid grid-cols-2">
                          <div>
                            <p className="mb-4">
                              <span className="bg-yellow-500">F23</span> (print
                              name)
                            </p>
                            <p className="mb-4">
                              <span className="bg-yellow-500">F24</span> (title)
                            </p>
                          </div>

                          <div>
                            <p className="mb-4">
                              _____________________ (signature)
                            </p>
                            <p className="mb-4">_____________________ (date)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pr-6 pb-4">
              <ButtonWhiteBG width="w-[171px]" name="Edit document" />
              <DashboardButton
                hidden
                name="CREATE DOCUMENT"
                type="submit"
                width="w-[198px]"
              />
            </div>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default OwnerDesignLessF;
