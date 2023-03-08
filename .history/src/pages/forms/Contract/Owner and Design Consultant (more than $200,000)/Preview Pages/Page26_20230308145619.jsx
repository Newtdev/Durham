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
                  {/* Page 26 */}
                  <div>
                    <ol class="uj7 lst-kix_list_9-2a start" start="5">
                      <li class="uj4 li-bullet-24">
                        <span class="uj5 uj3">
                          Reimbursable expenses shall include such reasonable,
                          actual expenditures made by the Design Consultant, its
                          employees or subconsultants, in the interest of the
                          Project, limited to the following: the reasonable
                          expense of transportation and living when traveling
                          from the Design Consultant&rsquo;s or
                          subconsultant&rsquo;s office to a location outside of
                          Durham County, North Carolina in connection with the
                          Project; and expense of reproductions, postage and
                          handling of Drawings and Specifications, beyond those
                          for the Design Consultant&rsquo;s and
                          subconsultants&rsquo; use and those required as the
                          phase submittals (&ldquo;Reimbursable
                          Expenses&rdquo;). &nbsp;Before incurring any
                          Reimbursable Expenses, the Design Consultant must
                          request and receive written authorization from the
                          Owner. &nbsp;Reimbursable Expenses incurred while
                          performing Basic or Additional Services shall be
                          computed at a multiple of 1.10 times actual cost.
                          &nbsp;
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_9-2b" start="6">
                      <li class="uj4 li-bullet-41">
                        <span class="uj3 uj51">
                          Notwithstanding Section 7.1, the Parties agree that
                          the Design Consultant is authorized to proceed with
                          the printing and delivery of the following documents,
                          but that said reimbursable cost shall not exceed{" "}
                        </span>
                        <span class="uj3 uj51 uj8">$________</span>
                        <span class="uj3 uj51">
                          &nbsp;without the express written permission of the
                          Owner:
                        </span>
                      </li>
                    </ol>
                    <p class="uj28 uj32">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_45-0 start" start="1">
                      <li class="uj11 uj52 li-bullet-43">
                        <span class="uj5 uj3">Agency Submittals;</span>
                      </li>
                      <li class="uj11 uj52 li-bullet-44">
                        <span class="uj5 uj3">
                          Bid Documents, including plan rooms; and{" "}
                        </span>
                      </li>
                      <li class="uj11 uj52 li-bullet-45">
                        <span class="uj5 uj3">
                          Various design phase submissions to the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj56">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_9-2c" start="7">
                      <li class="uj4 li-bullet-14">
                        <span class="uj5 uj3">
                          If the Project is suspended for more than six months
                          or abandoned in whole or in part by the Owner, the
                          Design Consultant shall be paid compensation for
                          services performed prior to receipt of written notice
                          from the Owner of such suspension or abandonment.
                          &nbsp;If the Project is resumed after being suspended
                          for more than twelve months, the Design
                          Consultant&#39;s Basic Services Compensation shall be
                          equitably adjusted.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_9-1a start" start="2">
                      <li class="uj4 li-bullet-27">
                        <span class="uj3 uj13">
                          Additional Services Compensation
                        </span>
                        <span class="uj5 uj3">. </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-2a start" start="1">
                      <li class="uj4 li-bullet-24">
                        <span class="uj5 uj3">
                          With respect to any Additional Services, as described
                          in Article 7 herein, performed by the Design
                          Consultant hereunder, the Design Consultant and Owner
                          shall negotiate an equitable adjustment to the Basic
                          Services Compensation (&ldquo;Additional Services
                          Compensation&rdquo;). &nbsp;However, if negotiations
                          are not successful prior to the time the Additional
                          Services are needed, the Owner may direct the Design
                          Consultant to proceed with the Additional Services on
                          a time spent basis with compensation to be computed as
                          follows:
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-3a start" start="1">
                      <li class="uj4 li-bullet-27">
                        <span class="uj5 uj3">
                          Design Consultant time shall be at the fixed hourly
                          rate included in the fee schedule attached hereto as
                          Exhibit E and made part of this agreement.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-3b" start="2">
                      <li class="uj4 li-bullet-27">
                        <span class="uj5 uj3">
                          Subconsultant time shall be at an hourly fixed rate
                          agreed to between the Design Consultant and the Owner
                          prior to the subconsultant performing any Additional
                          Services.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-3c" start="3">
                      <li class="uj4 li-bullet-39">
                        <span class="uj5 uj3">
                          Reinspection and resubmittal review time that is
                          billable to the Contractor shall be reimbursed to the
                          Design Consultant as noted in 4.3.1.1 and 4.3.1.2,
                          except the total compensation shall not exceed the
                          amount attributable to the Contractor.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-2b" start="2">
                      <li class="uj4 li-bullet-23">
                        <span class="uj5 uj3">
                          Payments for Additional Services of the Design
                          Consultant shall be made monthly upon presentation of
                          the Design Consultant&#39;s statement of services,
                          fully supported by invoices, time cards, and other
                          documentation as requested by the Owner.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_38-1a start" start="3">
                      <li class="uj4 li-bullet-24">
                        <span class="uj3 uj13">Accounting Records</span>
                        <span class="uj5 uj3">. </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
                      <span class="uj5 uj3"></span>
                    </p>
                    <ol class="uj7 lst-kix_list_1-2a start" start="1">
                      <li class="uj4 li-bullet-27">
                        <span class="uj5 uj3">
                          Records of the Design Consultant with respect to
                          Additional Services and payroll, and subconsultant and
                          other expenses (including Reimbursable Expenses)
                          pertaining to the Project, shall be kept according to
                          generally accepted accounting principles and shall be
                          available to the Owner or its authorized
                          representative for inspection and copying at mutually
                          convenient times.
                        </span>
                      </li>
                    </ol>
                    <p class="uj2 uj14">
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
