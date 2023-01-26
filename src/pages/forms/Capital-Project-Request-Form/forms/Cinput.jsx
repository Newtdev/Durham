import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { OverviewTextarea } from "../../../Dashboard/Overview-dashboard/OverviewComponents";
import SelectDate, { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";

const Cinput = (props) => {
  const dispatch = useDispatch();

  const selectOption = {
    ...props,
    value: props.values.selectOption,
    onChange: props.handleChange,
    name: "Who is the project's point of contact(s)?",
  };

  const completionDate = {
    ...props,
    value: props.values.completionDate,
    onChange: props.handleChange,
    name: "completionDate",
    error: props.errors.completionDate,
    touched: props.touched.completionDate,
    placeholder: "Completion Date",
  };
  const startDate = {
    ...props,
    value: props.values.startDate,
    onChange: props.handleChange,
    name: "startDate",
    error: props.errors.startDate,
    touched: props.touched.startDate,
    placeholder: "Start Date",
  };

  const input = {
    value: props.values.input,
    onChange: props.handleChange,
    name: "input",
    placeholder: "Enter Funding Sources",
    type: "text",
  };

  console.log(props.values.Source);

  return (
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Capital Project Request Form
            </h3>
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
          <div className="bg-[#2F5461] h-2.5 w-[50%]"></div>
        </div>

        <div className="mx-6 mb-12">
          <div className=" mt-3 ml-2">
            <div className="flex flex-col">
              <FormSelect {...selectOption}>
                <option value="">Select option</option>
                {/* {CheckZipCode()} */}
              </FormSelect>
              {props.errors.selectOption && props.touched.selectOption && (
                <Error message={props.errors.selectOption} />
              )}
            </div>

            <div className="flex mt-7 mb-1 flex-col">
              <label className="text-base text-gray-900 mb-1">
                Enter the estimated dates for the following project stages.
              </label>
              <div className="flex my-1/2 items-center gap-4">
                <div className="flex-1">
                  <FormInputContainer name="">
                    <SelectDate {...startDate} />
                    {props.errors.startDate && props.touched.startDate && (
                      <Error message={props.errors.startDate} />
                    )}
                  </FormInputContainer>
                </div>
                <div className="flex-1">
                  <FormInputContainer name="">
                    <SelectDate {...completionDate} />
                    {props.errors.completionDate &&
                      props.touched.completionDate && (
                        <Error message={props.errors.completionDate} />
                      )}
                  </FormInputContainer>
                </div>
              </div>
            </div>
            <div>
              <label className="text-base text-gray-900">
                Check the relevant box for the funding source
              </label>
              <div className="mt-3 ">
                <div className="flex items-center mb-5">
                  <input
                    id="Source"
                    type="radio"
                    onChange={props.handleChange}
                    value="Capital_Outlay"
                    name="Source"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-base text-gray-900"
                  >
                    Capital Outlay
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    id="Source"
                    type="radio"
                    onChange={props.handleChange}
                    value="Other"
                    name="Source"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-base text-gray-900"
                  >
                    Other
                  </label>
                </div>
                {props.values.Source === "Other" && (
                  <div className="flex  items-center gap-8">
                    <div></div>
                    <input
                      {...input}
                      className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] flex-1 p-2 flex items-center  "
                    />
                    {props.errors.input && props.touched.input && (
                      <Error message={props.errors.input} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="Cancel"
            onClick={() => dispatch(closeModal())}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default Cinput;
