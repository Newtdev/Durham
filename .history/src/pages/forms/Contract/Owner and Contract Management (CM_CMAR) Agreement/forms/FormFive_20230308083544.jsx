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
        </div>
      </div>
    </div>
  );
};

export default FormFive;
