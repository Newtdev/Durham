import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import { getList } from "../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const OwnerPostal = (props) => {
  const dispatch = useDispatch();
  const states = useSelector(getList);

  const conferenceAddress = {
    value: props.values.conferenceAddress,
    onChange: props.handleChange,
    name: "conferenceAddress",
    placeholder: "Street",
    id: "conferenceAddress",
  };

  const conferenceState = {
    value: props.values.conferenceState,
    name: "",
    id: "conferenceState",
    onChange: props.handleChange,
  };
  const conferenceCity = {
    value: props.values.conferenceCity,
    onChange: props.handleChange,
    name: "",
    id: "conferenceCity",
  };

  const conferenceZipCode = {
    value: props.values.conferenceZipCode,
    name: "",
    id: "conferenceZipCode",
    onChange: props.handleChange,
  };

  function CheckState() {
    if (!props.values.conferenceState) {
      return;
    }
    let stat = Object.values(states)?.find(
      (state) => state.name === props.values.conferenceState
    );

    return Object.keys(stat.cities)?.map((cur, id) => {
      return (
        <option key={id} value={cur}>
          {cur}
        </option>
      );
    });
  }

  function CheckZipCode() {
    if (!props.values.conferenceCity) {
      return;
    }
    const city = Object.values(states)?.filter(
      (state) => state.name === props.values.conferenceState
    );
    const zipcode = city?.find((cities) => cities);
    return zipcode.cities[props.values.conferenceCity]?.map(
      (zipcode, index) => {
        return (
          <option key={index} value={zipcode}>
            {zipcode}
          </option>
        );
      }
    );
  }

  return (
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      {/* Modal content */}
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        {/* Header */}
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              DPS Short Form Engineer - Engineering Contract
            </h3>
            <p className="text-base text-gray-700">
              Owner’s postal address where billing information should be sent
            </p>
          </div>
          <button
            type="button"
            className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="small-modal"
            onClick={() => dispatch(closeModal())}
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

        <div className="border-b border-b-gray-100 pb-8">
          {/* Progress */}
          <div className="w-full bg-[#89A5AF] h-2.5 my-4">
            <div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
          </div>
          <div className="mx-6 mt-4">
            <div className="flex flex-col mb-5">
              <label
                for="default-radio-1"
                className="text-base text-gray-900 mb-1"
              >
                Address
              </label>
              <input
                {...conferenceAddress}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
              />
              {props.errors.conferenceAddress &&
                props.touched.conferenceAddress && (
                  <Error message={props.errors.conferenceAddress} />
                )}
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              <FormInputContainer name="">
                <FormSelect {...conferenceState}>
                  <option value="">Select State</option>
                  {!states
                    ? null
                    : Object.entries(states).map((cur, index) => {
                        return (
                          <option key={index} value={cur[1].name}>
                            {cur[1].name}
                          </option>
                        );
                      })}
                </FormSelect>
                {props.errors.conferenceState &&
                  props.touched.conferenceState && (
                    <Error message={props.errors.conferenceState} />
                  )}
              </FormInputContainer>

              <FormInputContainer name="">
                <FormSelect {...conferenceCity}>
                  <option value="">Select City</option>
                  {CheckState()}
                </FormSelect>

                {props.errors.conferenceCity &&
                  props.touched.conferenceCity && (
                    <Error message={props.errors.conferenceCity} />
                  )}
              </FormInputContainer>

              <FormInputContainer name="">
                <FormSelect {...conferenceZipCode}>
                  <option value="">Select zipcode</option>
                  {CheckZipCode()}
                </FormSelect>

                {props.errors.conferenceZipCode &&
                  props.touched.conferenceZipCode && (
                    <Error message={props.errors.conferenceZipCode} />
                  )}
              </FormInputContainer>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4 mt-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="cancel"
            onClick={() => dispatch(prevChoiceStep(1))}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default OwnerPostal;
