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

  return <div></div>;
};

export default FormFive;
