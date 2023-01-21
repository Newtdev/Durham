import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";

const Preview = () => {
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
                <h3 className="text-lg font-bold text-gray-900">Bid</h3>
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
              <div className="px-12 pt-8 pb-4 text-black">
                <div>
                  <div className="mb-6">
                    <p className="text-sm mb-0">BD-04</p>
                    <p className="text-sm mt-0">07/92</p>
                  </div>

                  <div className="mb-10 text-center">
                    <h1 className="font-bold text-xl">DURHAM PUBLIC SCHOOLS</h1>
                    <h1 className="font-bold text-lg">
                      DOCUMENTATION OF PRICES
                    </h1>
                  </div>

                  <div className="mb-10">
                    <p className="mb-6">
                      This document may be used to document prices as required
                      under the purchasing procedures. A minimum of{" "}
                      <span className="font-bold">three (3)</span> bids is
                      required.
                    </p>

                    <p className="mb-4">
                      DESCRIPTION OF ITEM(S):
                      <span className="bg-yellow-500">F1</span>
                    </p>
                    <p className="mb-6">
                      QUANTITY:
                      <span className="bg-yellow-500">F2</span>
                    </p>

                    <div className="mb-8">
                      <div className="flex justify-between mb-6">
                        <p>VENDOR NAME/ADDRESS</p>
                        <p className="">PRICE QUOTED</p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]">
                          <span className="bg-yellow-500">F3</span>
                        </p>
                        <p>
                          <span>UNIT PRICE:</span>
                          <span className="bg-yellow-500">F5</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]">
                          <span className="bg-yellow-500">F4</span>
                        </p>
                        <p className="">
                          <span>TOTAL PRICE:</span>
                          <span className="bg-yellow-500">F6</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>SHIPPING:</span>
                          <span className="bg-yellow-500">F7</span>
                        </p>
                        <p></p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between mb-6">
                        <p>VENDOR NAME/ADDRESS</p>
                        <p className="">PRICE QUOTED</p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p>
                          <span>UNIT PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>TOTAL PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>SHIPPING:</span>
                        </p>
                        <p></p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between mb-6">
                        <p>VENDOR NAME/ADDRESS</p>
                        <p className="">PRICE QUOTED</p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p>
                          <span>UNIT PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>TOTAL PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>SHIPPING:</span>
                        </p>
                        <p></p>
                      </div>
                    </div>

                    <div className="mb-10">
                      <div className="flex justify-between mb-6">
                        <p>VENDOR NAME/ADDRESS</p>
                        <p className="">PRICE QUOTED</p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p>
                          <span>UNIT PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between mb-6">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>TOTAL PRICE:</span>
                        </p>
                        <p></p>
                      </div>
                      <div className="flex justify-between">
                        <p className="w-[9rem]"></p>
                        <p className="">
                          <span>SHIPPING:</span>
                        </p>
                        <p></p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div>
                        <p>
                          _______________________________________________________________________________
                        </p>
                        <p className="text-sm">Signature</p>
                      </div>
                      <div>
                        <p>
                          <span className="bg-yellow-500">F8</span>
                        </p>
                        <p className="text-sm">Date</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 items-center justify-center">
                    <p className="text-sm font-bold uppercase">
                      original - purchasing
                    </p>
                    <p className="text-sm font-bold uppercase">
                      copy - school/department
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

export default Preview;
