import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../reducer";
import { FormInputPlain } from "../../components";
import { SelectDate } from "../../components";

const FormOne = (props) => {
  const dispatch = useDispatch();

  const agreementDate = {
    ...props,
    value: props.values.agreementDate,
    onChange: props.handleChange,
    name: "agreementDate",
    error: props.errors.agreementDate,
    touched: props.touched.agreementDate,
    placeholder: "Select date",
    //    prevPage
  };

  const sustainaibilityDate = {
    ...props,
    value: props.values.sustainaibilityDate,
    onChange: props.handleChange,
    name: "sustainaibilityDate",
    error: props.errors.sustainaibilityDate,
    touched: props.touched.sustainaibilityDate,
    placeholder: "Select date",
  };

  const financialOfficerSignDate = {
    ...props,
    value: props.values.financialOfficerSignDate,
    onChange: props.handleChange,
    name: "financialOfficerSignDate",
    error: props.errors.financialOfficerSignDate,
    touched: props.touched.financialOfficerSignDate,
    placeholder: "Select date",
  };

  const signDate = {
    ...props,
    value: props.values.signDate,
    onChange: props.handleChange,
    name: "signDate",
    error: props.errors.signDate,
    touched: props.touched.signDate,
    placeholder: "Select date",
    //    prevPage
  };

  const notarizedDate = {
    ...props,
    value: props.values.notarizedDate,
    onChange: props.handleChange,
    name: "notarizedDate",
    error: props.errors.notarizedDate,
    touched: props.touched.notarizedDate,
  };

  return <div></div>;
};

export default FormOne;
