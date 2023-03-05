import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const OwnerDesignMore = () => {
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
                  Owner and Design Consultant (More than $200,000)
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
                    <p className="font-bold mb-1">AGREEMENT FOR</p>
                    <p className="font-bold mb-10">
                      DESIGN CONSULTANT SERVICES
                    </p>
                    <p className="mb-8">BETWEEN</p>
                    <p className="mb-8 font-bold">
                      DURHAM COUNTY, BY AND THROUGH ITS AUTHORIZED AGENT <br />{" "}
                      THE DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION
                    </p>
                    <p className="mb-12">
                      hereinafter referred to as the Owner
                    </p>
                    <p className="mb-8">AND</p>
                    <p className="mb-8">
                      <span className="bg-yellow-500">F1</span>
                    </p>
                    <p className="mb-12">
                      hereinafter referred to as the Design Consultant
                    </p>
                    <p className="mb-2">
                      PROJECT: <span className="bg-yellow-500">F2</span>
                    </p>
                    <p className="mb-2">
                      OWNER'S PROJECT NO:{" "}
                      <span className="bg-yellow-500">F3</span>
                    </p>
                    <p>
                      DATE: <span className="bg-yellow-500">F4</span>
                    </p>

                    <div className="h-[1000px]"></div>
                  </div>

                  {/* Pages 3 to 5 */}
                  <div className="">
                    <div className="mb-4">
                      <div className="text-center font-bold mb-4">
                        <p className="mb-2">AGREEMENT FOR</p>
                        <p>DESIGN CONSULTANT SERVICES</p>
                      </div>

                      <p className="text-justify mb-4">
                        <b>This Agreement is</b> made this{" "}
                        <span className="bg-yellow-500">F5</span> day of{" "}
                        <span className="bg-yellow-500">F6</span>{" "}
                        <span className="bg-yellow-500">F7</span> by and between
                        the Owner{" "}
                        <b>
                          Durham County, by and through it authorized agent the
                          Durham Public Schools Board of Education,
                        </b>{" "}
                        and the Design Consultant:{" "}
                        <span className="bg-yellow-500">F8</span>, for
                        Professional Services in connection with the Project
                        known as:
                      </p>

                      <p className="mb-3 ml-32">
                        <span className="bg-yellow-500">F9</span>
                      </p>

                      <p>
                        The Owner and the Design Consultant agree as set forth
                        below:
                      </p>
                    </div>

                    <div>
                      <div className="text-center font-bold mb-4">
                        <p className="mb-2">ARTICLE 1</p>
                        <p>DEFINITIONS</p>
                      </div>

                      <p className="mb-4 text-justify">
                        The following words and phrases where appearing in
                        initial capitalization, shall for the purposes of this
                        Agreement have the following meanings:
                      </p>

                      <div>
                        <div className="flex gap-8 mb-3">
                          <p>1.1</p>
                          <p className="text-justify">
                            <span className="underline mr-3">Project.</span>The
                            objective is to design and construct a{" "}
                            <span className="bg-yellow-500">F10</span>
                          </p>
                        </div>

                        <div className="flex gap-[1.2rem] mb-3">
                          <p>1.1.1</p>
                          <p className="text-justify">
                            <span className="bg-yellow-500">F11</span> school
                            with enrollment of{" "}
                            <span className="bg-yellow-500">F12</span> students,
                            the approximate square footage for the facility
                            would be approximately{" "}
                            <span className="bg-yellow-500">F13</span>square
                            feet maximum.
                          </p>
                        </div>

                        <div className="flex gap-[1.2rem] mb-3">
                          <p>1.1.2</p>
                          <p className="underline">Project Parameters.</p>
                        </div>

                        <div className="flex gap-[0.4rem] mb-3">
                          <p>1.1.2.1</p>
                          <p className="text-justify">
                            The physical parameters are: the school is to be
                            designed to accommodate{" "}
                            <span className="bg-yellow-500">F14</span> students.
                            The school will be built at{" "}
                            <span className="bg-yellow-500">F15</span> in Durham
                            County.
                          </p>
                        </div>

                        <div className="flex gap-[0.4rem] mb-3">
                          <p>1.1.2.2</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Overview of Design Consultant's Scope:
                            </span>
                            The Design Consultant's fee includes the complete
                            design of a new facility including all
                            architectural, sitework, extensions of utilities.
                            off-site roadway improvements, traffic impact study,
                            civil, structural, mechanical, plumbing. electrical,
                            landscape. fire suppression, food service.
                            Technology infrastructure. structured cabling, phone
                            system, paging system, data systems, intrusion
                            detection system, video surveillance system, audio
                            systems, video distribution system, and any other
                            work required for a complete set of design
                            documents. The Design Consultant shall assist in the
                            development of the Building Program and Educational
                            Specifications. The fee also includes coordination
                            with Owner provided vendors for furniture and
                            equipment to design the spaces.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.2</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Design Consultant.
                            </span>
                            Design Consultant as used herein shall mean the
                            architect or engineer identified above.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.3</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Subconsultant.
                            </span>
                            Subconsultant as used herein shall mean any
                            consultant or sub-consultant retained by or on the
                            behalf of the Design Consultant for the performance
                            of any Services pursuant to this Agreement. The
                            Design Consultant’s use of a subconsultant shall not
                            relieve the Design Consultant of any responsibility
                            for providing the Services outlined in this
                            Agreement.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.4</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">Services.</span>
                            The Services to be performed by the Design
                            Consultant under this Agreement shall consist of the
                            Basic Services described in Article 3, any
                            Additional Services under Article 7, and any other
                            obligations of the Design Consultant included in
                            this Agreement.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.5</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Construction Contract.
                            </span>
                            The Construction Contract shall consist of the plans
                            and specifications prepared by the Design
                            Consultant, and any addenda and change orders
                            thereto, and the Owner-Contractor Agreement, and all
                            General Conditions, Amended Conditions, and
                            Supplemental Conditions thereto, all of which shall
                            be compatible and consistent with this Agreement.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.6</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Construction Contract Award Price.
                            </span>
                            The amount established in the Design, Construction
                            and Equipment Budget, attached as Exhibit A, for the
                            total cost of the work to be performed by the
                            Contractor pursuant to the Construction Contract
                            shall be referred to as the Construction Contract
                            Award Price or CCAP.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.7</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">Contractor.</span>
                            The Contractor is the person or entity which enters
                            into an agreement with the Owner to perform the
                            construction of or any construction on the Project,
                            including, without limitation, the providing of
                            labor, materials, and equipment incorporated or to
                            be incorporated into the Project. The term
                            "Contractor" means the Contractor or its authorized
                            representative.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.8</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Program of Requirements.
                            </span>
                            The Program of Requirements or "Program" is the
                            detailed written summary of the requirements of the
                            facility which sets forth the Owner's design
                            objectives, constraints and criteria, including
                            space requirements and relationships, quality
                            levels, flexibility and expandability, special
                            equipment and systems and site requirements, as
                            described in Exhibit B.
                          </p>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.9</p>
                          <div>
                            <p className="text-justify">
                              <span className="mr-3 underline">
                                Management Plan.
                              </span>
                              The Management Plan is the description and
                              definition of the phasing, sequencing and timing
                              of the major project activities for design,
                              construction procurement, construction and
                              occupancy as described in Exhibit C. The
                              Management Plan shall include allowances for
                              periods of time required for the Owner’s review,
                              for the performance of the Owner’s consultants,
                              and for the approval of submissions by authorities
                              having jurisdiction over the Project. The
                              Management Plan shall generally adhere to the
                              following anticipated dates and construction
                              milestone dates:
                            </p>

                            <div className="grid grid-cols-4 ml-12">
                              <div className="col-span-2">
                                <p>Completion of schematic design</p>
                                <p>Completion of construction documents</p>
                                <p>Notice to Proceed date</p>
                                <p>Substantial completion date</p>
                              </div>

                              <div>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                              </div>

                              <div>
                                <p>
                                  <span className="bg-yellow-500">F42</span>
                                </p>
                                <p>
                                  <span className="bg-yellow-500">F43</span>
                                </p>
                                <p>
                                  <span className="bg-yellow-500">F44</span>
                                </p>
                                <p>
                                  <span className="bg-yellow-500">F45</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-8 mb-3">
                          <p>1.10</p>
                          <p className="text-justify">
                            <span className="mr-3 underline">
                              Design Phase Change Order.
                            </span>
                            A Design Phase Change Order is the form of
                            documentation from the Owner approving and
                            authorizing a modification to Exhibits A, B and/or C
                            attached hereto, or previously approved Design Phase
                            documents.
                          </p>
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

export default OwnerDesignMore;
