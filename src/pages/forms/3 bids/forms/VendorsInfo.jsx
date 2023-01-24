import React from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormSelect } from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { prevChoiceStep } from "../reducer";

const VendorsInfo = (props) => {
  const dispatch = useDispatch();

  const selectOption = {
    ...props,
    value: props.values.selectOption,
    onChange: props.handleChange,
    name: "selectOption",
  };

  return (
    <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
      <form
        className="relative w-[600px] bg-white rounded-lg shadow py-4 "
        onSubmit={props.handleSubmit}
      >
        <div className="flex justify-between items-baseline mx-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">3 bids</h3>
            <p className="text-base text-gray-700">Vendors Information</p>
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
          <p className="text-base text-[#693B79]">
            3 vendors are required to generate this form
          </p>
          <div className=" mt-3 ml-2">
            <FormInputContainer name="">
              <FormSelect {...selectOption}>
                <option value="">Select option</option>
                {/* {CheckZipCode()} */}
              </FormSelect>

              {props.errors.selectOption && props.touched.selectOption && (
                <Error message={props.errors.selectOption} />
              )}
            </FormInputContainer>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="Cancel"
            onClick={() => dispatch(prevChoiceStep(1))}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default VendorsInfo;
