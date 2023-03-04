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
              <div className="px-20 pt-8 pb-4 text-black font11">
                <div class="uj86 doc-content">
                  {/* Page 5 */}
                  <div>
                    <div>
                      <p class="uj10">
                        <span class="uj5 uj3 uj8">
                          Mechanical:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                        </span>
                      </p>
                      <p class="uj10">
                        <span class="uj5 uj3 uj8">
                          Electrical:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                        </span>
                      </p>
                      <p class="uj10">
                        <span class="uj5 uj3 uj8">
                          Civil:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                        </span>
                      </p>
                      <p class="uj10">
                        <span class="uj5 uj3 uj8">
                          Landscape:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                        </span>
                      </p>
                      <p class="uj10">
                        <span class="uj3 uj8">
                          Other:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________
                        </span>
                      </p>
                    </div>

                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-2b" start="2">
                      <li class="uj4 li-bullet-0">
                        <span class="uj5 uj3">
                          The Design Consultant shall require each of its
                          consultants to execute an agreement similar to the
                          agreement attached as Exhibit D certifying that the
                          consultant has read and is thoroughly familiar with
                          the terms of this Agreement and that the pertinent
                          provisions of this Agreement shall govern the work
                          performed by the consultant.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-1a" start="2">
                      <li class="uj4 li-bullet-0">
                        <span class="uj3 uj13">Owner Representation</span>
                        <span class="uj5 uj3">
                          . &nbsp;The Owner shall employ and assign a Project
                          Manager from the Durham Public Schools to serve as the
                          Owner&#39;s Representative on the Project
                          (&ldquo;Owner&rsquo;s Representative&rdquo;).
                          &nbsp;The Owner&#39;s Representative has no design
                          responsibilities of any nature. &nbsp;None of the
                          activities of the Owner&#39;s Representative supplant
                          or conflict with the design, budget or any other
                          services and responsibilities customarily furnished by
                          the Design Consultant or subconsultant in accordance
                          with generally accepted architectural/engineering
                          practices except as otherwise modified by this
                          Agreement. &nbsp;Instructions by the Owner to the
                          Design Consultant relating to the Services will be
                          issued or made by or through and in accordance with
                          procedural, organizational, and documentation
                          standards established by the Owner&#39;s
                          Representative. &nbsp;Communications and submittals of
                          the Design Consultant to the Owner and Contractor
                          shall be in writing and issued or made in accord with
                          similar procedural and documentation standards
                          established by the Owner&#39;s Representative. The
                          Owner&#39;s Representative shall have the authority to
                          establish procedures, consistent with this Agreement,
                          to be followed by the Design Consultant and Contractor
                          and to call periodic conferences to be attended by the
                          Design Consultant, and its subconsultants, throughout
                          the term of this Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-1b" start="3">
                      <li class="uj4 li-bullet-0">
                        <span class="uj3 uj13">Other Consultants.</span>
                        <span class="uj5 uj3">
                          &nbsp; The Owner may provide drawings, consultation,
                          recommendations, suggestions, data and/or other
                          information relating to the Project from other
                          consultants under separate contract with the Owner,
                          including but not limited to: &nbsp;Land Surveying
                          Consultant, Geotechnical Consultant, and/or Materials
                          Testing Consultant.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-1c" start="4">
                      <li class="uj4 li-bullet-0">
                        <span class="uj3 uj13">
                          Design Consultant Representation
                        </span>
                        <span class="uj5 uj3">. </span>
                      </li>
                    </ol>
                    <p class="uj2">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-2c" start="3">
                      <li class="uj4 li-bullet-0">
                        <span class="uj5 uj3">
                          The Design Consultant shall provide a list of all
                          subconsultants which the Design Consultant intends to
                          utilize relating to the Project prior to commencing
                          work on the Project. &nbsp;The list shall include such
                          information on the qualifications of the
                          subconsultants as may be requested by the Owner.
                          &nbsp;The Owner will review the subconsultants
                          proposed. The Design Consultant shall not retain a
                          subconsultant to which the Owner has a reasonable
                          objection. &nbsp;The Design Consultant shall be and
                          use only individuals or firms that are properly
                          licensed in North Carolina and regularly engaged in
                          the fields of expertise required for this Project.
                          &nbsp;In addition, the Design Consultant shall use an
                          individual or firm with specific expertise in roofing
                          certified by licensure as a Registered Roofing
                          Consultant for any projects containing any roofing
                          work.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-2d" start="4">
                      <li class="uj4 li-bullet-0">
                        <span class="uj5 uj3">
                          The Design Consultant shall provide to the Owner a
                          list of the proposed key project personnel of the
                          Design Consultant by position, including
                          subconsultants, to be assigned to the Project.
                          &nbsp;This list shall include such information on the
                          professional background of each of the assigned
                          personnel as may be requested by the Owner, through
                          the Owner&#39;s Representative. &nbsp;Such key
                          personnel and consultants shall be satisfactory to the
                          Owner and shall not be changed except with the consent
                          of the Owner unless said personnel cease to be
                          employed.
                        </span>
                      </li>
                    </ol>
                    <p class="uj28 uj32">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_22-2e" start="5">
                      <li class="uj11 uj24 li-bullet-1">
                        <span class="uj5 uj3">
                          The Design Consultant shall include normal structural,
                          plumbing, mechanical, electrical and other engineering
                          services necessary to produce a reasonably complete
                          and accurate set of Construction Documents. &nbsp;All
                          consultants who will perform services required by this
                          Agreement shall execute an agreement with the Design
                          Consultant with terms not inconsistent with this
                          Agreement.
                        </span>
                      </li>
                    </ol>
                    <p class="uj28 uj32">
                      <span class="uj5 uj3"></span>
                    </p>
                    <p class="uj28 uj32">
                      <span class="uj5 uj3"></span>
                    </p>
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
