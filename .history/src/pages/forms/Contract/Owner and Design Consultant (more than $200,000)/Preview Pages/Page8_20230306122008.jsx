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
                <div
                  class="uj86 doc-content border border-black"
                  style={{ height: "10in", marginBottom: "0.845in" }}
                >
                  {/* Page 8 */}
                  <div>
                    <div className="ml-[3.9rem]">
                      <p className="c5 c3">
                        pertinent in the opinion of the Design Consultant; and
                        descriptions of proposed engineered systems, proposed
                        construction methods, proposed materials and proposed
                        work to be included in the construction contracts.
                        &nbsp;Further, the report should include any minutes
                        from meetings or telephone conferences with, or letters
                        from review agencies with responses, and responses to
                        all review comments from Owner from previous reviews.
                        &nbsp;The Design Consultant shall submit an estimate and
                        breakdown of the anticipated construction cost no later
                        than two (2) business days in advance of the scheduled
                        Schematic Design review meeting. &nbsp;The Design
                        Consultant shall prepare such estimates in the form
                        prescribed by the Owner to assure that the Project cost
                        is within the CCAP.
                      </p>
                    </div>

                    <p class="c2 c22">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_26-3a start" start="5">
                      <li class="c11 c24 li-bullet-1">
                        <span class="c5 c3">
                          A statement from the Design Consultant with the final
                          Schematic Design Phase submittal shall be included
                          that acknowledges that Design Consultant has reviewed
                          all of the applicable Design Guidelines and
                          Educational Specifications and confirms that they have
                          been incorporated in the documents unless specifically
                          noted in writing.
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c22">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_26-3b" start="6">
                      <li class="c11 c24 li-bullet-1">
                        <span class="c5 c3">
                          The Design Consultant shall submit a written statement
                          indicating that local governing authorities are aware
                          of the Project, and the necessary requirements of such
                          agency will be met.
                        </span>
                      </li>
                    </ol>
                    <ol class="c7 lst-kix_list_26-3c" start="6">
                      <li class="c11 c24 li-bullet-1">
                        <span class="c5 c3">
                          To be considered acceptable for final Schematic Design
                          Phase submittal, the documents shall contain all of
                          the following unless otherwise agreed in writing:
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c20">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_27-4a start" start="1">
                      <li class="c11 c21 li-bullet-4">
                        <span class="c3 c13">Architectural</span>
                      </li>
                    </ol>
                    <p class="c2 c20">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_18-0 start" start="1">
                      <li class="c11 c25 li-bullet-5">
                        <span class="c5 c3">
                          Plans (at 1/8&quot; scale) showing complete building
                          layout, and identifying areas, room by room, showing
                          square footage with comparisons to program standards,
                          and core areas and their relationships.
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c30">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_18-0" start="2">
                      <li class="c11 c18 li-bullet-6">
                        <span class="c5 c3">
                          Preliminary building section and elevations indicating
                          location and size of fenestration.
                        </span>
                      </li>
                    </ol>
                    <p class="c2">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_28-0 start" start="3">
                      <li class="c11 c18 li-bullet-7">
                        <span class="c5 c3">
                          Preliminary furniture layouts of critical spaces (i.e.
                          dining area, media center).
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c30 c57">
                      <span class="c5 c3"></span>
                    </p>
                    <p class="c11 c30 c57">
                      <span class="c5 c3">
                        (iv) &nbsp; Site plan(s) with building located and an
                        overall grading plan with a minimum of 1&rsquo;-0&rdquo;
                        contour lines. &nbsp;All major site development such as
                        orientation, access road paving, walls and outside
                        support buildings, structured parking facilities,
                        programmed play areas, and paved parking lots, along
                        with preliminary stormwater management and erosion
                        control features should be shown.
                      </span>
                    </p>
                    <p class="c2 c30 c57">
                      <span class="c5 c3"></span>
                    </p>
                    <p class="c11 c30 c57">
                      <span class="c5 c3">
                        (v) &nbsp; Gross and net area calculations separated to
                        show conformance with the Program of Requirements.
                      </span>
                    </p>
                    <p class="c2 c30 c57">
                      <span class="c5 c3"></span>
                    </p>
                    <p class="c11 c30 c57">
                      <span class="c5 c3">
                        (vi) &nbsp; &nbsp;Preliminary Building Code Summary.
                      </span>
                    </p>
                    <p class="c2 c20">
                      <span class="c17 c3 c13"></span>
                    </p>
                    <ol class="c7 lst-kix_list_27-4b" start="2">
                      <li class="c11 c21 li-bullet-4">
                        <span class="c17 c3 c13">Structural </span>
                      </li>
                    </ol>
                    <p class="c2 c20">
                      <span class="c17 c3 c13"></span>
                    </p>
                    <ol class="c7 lst-kix_list_17-0 start" start="1">
                      <li class="c11 c25 li-bullet-5">
                        <span class="c5 c3">
                          Narrative of structural system (precast, structural
                          steel with composite deck, structural steel with bar
                          joists, etc.).
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c30">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_17-0" start="2">
                      <li class="c11 c25 li-bullet-8">
                        <span class="c5 c3">
                          Identification of foundation requirements (fill
                          requirements, piles, caissons, spread, footings,
                          etc.).
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c20">
                      <span class="c17 c3 c13"></span>
                    </p>
                    <ol class="c7 lst-kix_list_27-4c" start="3">
                      <li class="c11 c21 li-bullet-9">
                        <span class="c17 c3 c13">Mechanical </span>
                      </li>
                    </ol>
                    <p class="c2 c20">
                      <span class="c17 c3 c13"></span>
                    </p>
                    <ol class="c7 lst-kix_list_15-0 start" start="1">
                      <li class="c11 c25 li-bullet-5">
                        <span class="c5 c3">
                          Block heating, ventilating and cooling loads
                          calculations including skin versus internal loading.
                        </span>
                      </li>
                    </ol>
                    <p class="c2 c30">
                      <span class="c5 c3"></span>
                    </p>
                    <ol class="c7 lst-kix_list_15-0" start="2">
                      <li class="c11 c25 li-bullet-8">
                        <span class="c5 c3">
                          Single-line drawings of all mechanical equipment
                          spaces, duct chases and pipe chases.
                        </span>
                      </li>
                    </ol>
                    <p class="c2">
                      <span class="c5 c3"></span>
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
