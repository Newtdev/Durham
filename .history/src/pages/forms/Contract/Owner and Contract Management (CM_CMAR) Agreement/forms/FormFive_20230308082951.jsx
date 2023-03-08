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
  return <div></div>;
};

export default FormFive;
