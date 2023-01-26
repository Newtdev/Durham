import { ButtonWhiteBG, Error } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import { closeModal } from "../../reducer";
import { useDispatch } from "react-redux";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";
import SelectDate from "../../components";

const DPSEngineer = (props) => {
  const dispatch = useDispatch();

  const selectDate = {
    ...props,
    value: props.values.selectDate,
    onChange: props.handleChange,
    name: "selectDate",
    error: props.errors.selectDate,
    touched: props.touched.selectDate,
    placeholder: "Select Date",
  };
  const selectDate1 = {
    ...props,
    value: props.values.selectDate1,
    onChange: props.handleChange,
    name: "selectDate1",
    error: props.errors.selectDate1,
    touched: props.touched.selectDate1,
    placeholder: "Select Date",
  };
  const selectDate2 = {
    ...props,
    value: props.values.selectDate2,
    onChange: props.handleChange,
    name: "selectDate2",
    error: props.errors.selectDate2,
    touched: props.touched.selectDate2,
    placeholder: "Select Date",
  };
  const selectDate3 = {
    ...props,
    value: props.values.selectDate3,
    onChange: props.handleChange,
    name: "selectDate3",
    error: props.errors.selectDate3,
    touched: props.touched.selectDate3,
    placeholder: "Select Date",
  };

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
            <p className="text-base text-gray-700">General Information</p>
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
            <div className="mb-4">
              <FormInputContainer name="What date will the Agreement be made official?">
                <SelectDate {...selectDate} />
                {props.errors.selectDate && props.touched.selectDate && (
                  <Error message={props.errors.selectDate} />
                )}
              </FormInputContainer>
            </div>
            <div className="mb-4">
              <FormInputContainer name="When does the Director of Construction and Sustainability sign the document?">
                <SelectDate {...selectDate1} />
                {props.errors.selectDate1 && props.touched.selectDate1 && (
                  <Error message={props.errors.selectDate1} />
                )}
              </FormInputContainer>
            </div>
            <div className="mb-4">
              <FormInputContainer name="When will the financial officer sign this document?">
                <SelectDate {...selectDate2} />
                {props.errors.selectDate2 && props.touched.selectDate2 && (
                  <Error message={props.errors.selectDate2} />
                )}
              </FormInputContainer>
            </div>
            <div className="mb-4">
              <FormInputContainer name="When will the document be notarized? (Notary Seal Date)">
                <SelectDate {...selectDate3} />
                {props.errors.selectDate3 && props.touched.selectDate3 && (
                  <Error message={props.errors.selectDate3} />
                )}
              </FormInputContainer>
            </div>

            <div className="">
              <small className="text-gray-900 font-medium">
                To specify the type of check, check the relevant box.
              </small>
              <div className=" mt-3 ml-2">
                <div className="flex items-center mb-5">
                  <input
                    type="radio"
                    onChange={props.handleChange}
                    value="Initial"
                    name="check"
                    id="check"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-base text-gray-900"
                  >
                    Initial
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    type="radio"
                    onChange={props.handleChange}
                    value="Supplemental"
                    name="check"
                    id="check"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-base text-gray-900"
                  >
                    Supplemental
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    onChange={props.handleChange}
                    value="Annual"
                    name="check"
                    id="check"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-1"
                    className="ml-2 text-base text-gray-900"
                  >
                    Annual
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 pr-4 mt-4">
          <ButtonWhiteBG
            width="w-[100px]"
            name="cancel"
            onClick={() => dispatch(closeModal())}
          />
          <DashboardButton hidden name="NEXT" type="submit" width="w-[77px]" />
        </div>
      </form>
    </div>
  );
};

export default DPSEngineer;
