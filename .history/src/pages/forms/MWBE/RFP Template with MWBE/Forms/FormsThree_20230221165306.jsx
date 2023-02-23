import { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";
import { FormSelect, FormInputPlain, FormTextArea } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { OverviewTextarea } from "../../../../Dashboard/Overview-dashboard/OverviewComponents";

// import React, { useState } from 'react';
// import TimePicker from "react-time-picker";
import { SelectTime } from "../../../Notice-to-Proceed/Forms";

const FormThree = (props) => {
  const dispatch = useDispatch();

  const prototypeNotUtilized = {
    value:
      "Digital submissions through the Interactive Purchasing System (IPS) is preferred. Submission type, online or hard copy, will not affect proposal scoring. If submitting a hard copy, please submit 1 copy.",
    onChange: props.handleChange,
    id: "prototypeNotUtilized ",
    error: props.errors.prototypeNotUtilized,
    touched: props.touched.prototypeNotUtilized,
    placeholder:
      "Digital submissions through the Interactive Purchasing System (IPS) is preferred. Submission type, online or hard copy, will not affect proposal scoring. If submitting a hard copy, please submit 1 copy.",
  };

  const proposalScope = {
    value: props.values.proposalScope,
    onChange: props.handleChange,
    id: "proposalScope",
    error: props.errors.proposalScope,
    touched: props.touched.proposalScope,
    placeholder: "Proposal Scope",
  };

  return (
    <div>
      <div
        className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}

        <form
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
          onSubmit={props.handleSubmit}
        >
          <div className="flex justify-between items-baseline mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                RFP Template with MWBE
              </h3>
              <p className="text-base text-gray-700">Section III</p>
            </div>
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
            >
              <Close />
            </button>
          </div>

          {/* Progress */}
          <div className="w-full bg-[#89A5AF] h-2.5 my-4">
            <div className="bg-[#2F5461] h-2.5 w-[100%]"></div>
          </div>

          <div className="mx-6 mb-12 flex flex-col gap-2">
            {/* <div className="flex flex-col gap-1">
              <FormTextArea
                onChange={props.handleChange}
                name="Modify the information below if the prototype is not utilized."
                id="prototype"
                value={
                  "Digital submissions through the Interactive Purchasing System (IPS) is preferred. Submission type, online or hard copy, will not affect proposal scoring. If submitting a hard copy, please submit 1 copy."
                }
              />
              {props.errors.prototype && props.touched.prototype && (
                <Error message={props.errors.prototype} />
              )}
            </div> */}

            <div className="flex flex-col">
              <label className="text-base text-gray-900 mb-1">
                Modify the information below if the prototype is not utilized
              </label>
              <OverviewTextarea {...prototypeNotUtilized} />
            </div>

            <FormInputContainer name="Enter the offer's validity period if it is other than 120 days from the date of proposal opening.">
              <FormInputPlain
                type={"text"}
                onChange={props.handleChange}
                name="validityPeriod"
                placeholder={"validityPeriod"}
              />
              {props.errors.validityPeriod && props.touched.validityPeriod && (
                <Error message={props.errors.validityPeriod} />
              )}
            </FormInputContainer>

            <FormInputContainer name="What items should the Vendor include in their RFP responses? Enter the items in the order that the vendor has to set up.">
              <FormInputPlain
                type={"text"}
                onChange={props.handleChange}
                name="items"
                placeholder={"items"}
              />
              {props.errors.items && props.touched.items && (
                <Error message={props.errors.items} />
              )}
            </FormInputContainer>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm text-gray-600 font-semibold">
                Does Attachment C(Pricing Form) needs to be included in
                Proposal?
              </h2>
              <div className="flex gap-3 items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Yes"
                  name="attachment"
                  onChange={props.handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="default-radio-1"
                  className="text-base text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex gap-3 items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="Yes"
                  name="attachment"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  onChange={props.handleChange}
                />
                <label
                  for="default-radio-2"
                  className="text-base text-gray-900"
                >
                  No
                </label>
              </div>
            </div>

            {/* <div className="flex flex-col gap-1">
              <FormTextArea
                onChange={props.handleChange}
                id="proposalScope"
                placeholder={"Proposal Scope"}
                name="Enter the Proposal Scope"
              />
              {props.errors.proposalScope && props.touched.proposalScope && (
                <Error message={props.errors.proposalScope} />
              )}
            </div> */}
            <div className="flex flex-col">
              <label className="text-base text-gray-900 mb-1">
                Enter the Proposal Scope
              </label>
              <OverviewTextarea {...proposalScope} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8 pr-4">
            <ButtonWhiteBG
              width="w-[100px]"
              name="Previous"
              onClick={() => dispatch(prevStep(2))}
            />
            <DashboardButton
              hidden
              name="NEXT"
              type="submit"
              width="w-[77px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormThree;
