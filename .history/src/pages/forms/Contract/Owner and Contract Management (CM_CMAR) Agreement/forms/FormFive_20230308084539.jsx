import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormFive = (props) => {
  const dispatch = useDispatch();

  const workCost = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("workCost", e.target.value);
      }
    },
    name: "workCost",
    error: props.errors.workCost,
    value: props.values.workCost,
    touched: props.touched.workCost,
    placeholder: "Amount",
  };

  const contingencyCMAmout = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("contingencyCMAmout", e.target.value);
      }
    },
    name: "contingencyCMAmout",
    error: props.errors.contingencyCMAmout,
    value: props.values.contingencyCMAmout,
    touched: props.touched.contingencyCMAmout,
    placeholder: "Amount",
  };

  const amountForGeneralConditions = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("amountForGeneralConditions", e.target.value);
      }
    },
    name: "amountForGeneralConditions",
    error: props.errors.amountForGeneralConditions,
    value: props.values.amountForGeneralConditions,
    touched: props.touched.amountForGeneralConditions,
    placeholder: "Amount",
  };

  const feesAmount = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("feesAmount", e.target.value);
      }
    },
    name: "feesAmount",
    error: props.errors.feesAmount,
    value: props.values.feesAmount,
    touched: props.touched.feesAmount,
    placeholder: "Amount",
  };

  const amountOfPreConstruction = {
    onChange: (e) => {
      if (isNaN(e.target.value)) {
        return "";
      } else {
        // return e.target.value
        props.setFieldValue("amountOfPreConstruction", e.target.value);
      }
    },
    name: "amountOfPreConstruction",
    error: props.errors.amountOfPreConstruction,
    value: props.values.amountOfPreConstruction,
    touched: props.touched.amountOfPreConstruction,
    placeholder: "Amount",
  };

  return (
    <div>
      <div
        className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[600px] bg-white rounded-lg shadow py-4">
          <div className="flex justify-between items-baseline mx-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Contract Management (CM & CMAR) Agreement
              </h3>
              <p className="text-base text-gray-700">
                For the items below, enter the agreed-upon dollar amounts.
              </p>
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
              <div className="mb-6">
                <p className="text-gray-900 font-medium text-sm mb-[2px]">
                  Cost of Work
                </p>
                <div className="relative w-full">
                  <input
                    {...workCost}
                    className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                  />
                  <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                    $
                  </small>
                </div>
                <div className="mb-6">
                  <p className="text-gray-900 font-medium text-sm mb-[2px]">
                    CM construction contingency
                  </p>
                  <div className="relative w-full">
                    <input
                      {...contingencyCMAmout}
                      className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                    />
                    <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                      $
                    </small>
                  </div>
                  {props.errors.contingencyCMAmout &&
                    props.touched.contingencyCMAmout && (
                      <Error message={props.errors.contingencyCMAmout} />
                    )}
                </div>
                <div className="mb-6">
                  <p className="text-gray-900 font-medium text-sm mb-[2px]">
                    General Conditions
                  </p>
                  <div className="relative w-full">
                    <input
                      {...amountForGeneralConditions}
                      className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                    />
                    <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                      $
                    </small>
                  </div>
                  {props.errors.amountForGeneralConditions &&
                    props.touched.amountForGeneralConditions && (
                      <Error
                        message={props.errors.amountForGeneralConditions}
                      />
                    )}
                </div>
                <div className="mb-6">
                  <p className="text-gray-900 font-medium text-sm mb-[2px]">
                    Construction phase and Post-construction phase
                  </p>
                  <div className="relative w-full">
                    <input
                      {...feesAmount}
                      className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                    />
                    <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                      $
                    </small>
                  </div>
                  {props.errors.feesAmount && props.touched.feesAmount && (
                    <Error message={props.errors.feesAmount} />
                  )}
                </div>
                <div className="mb-6">
                  <p className="text-gray-900 font-medium text-sm mb-[2px]">
                    Construction phase and Post-construction phase
                  </p>
                  <div className="relative w-full">
                    <input
                      {...amountOfPreConstruction}
                      className="bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10"
                    />
                    <small className="absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]">
                      $
                    </small>
                  </div>
                  {props.errors.amountOfPreConstruction &&
                    props.touched.amountOfPreConstruction && (
                      <Error message={props.errors.amountOfPreConstruction} />
                    )}
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFive;
