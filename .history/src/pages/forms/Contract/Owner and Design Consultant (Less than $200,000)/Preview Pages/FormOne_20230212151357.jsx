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

  const notarizedDate = {
    ...props,
    value: props.values.notarizedDate,
    onChange: props.handleChange,
    name: "notarizedDate",
    error: props.errors.notarizedDate,
    touched: props.touched.notarizedDate,
  };

  return (
    <div>
      <div
        className="relative w-full h-screen max-w-md mx-auto md:h-auto mt-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <form
          className="relative w-[600px] bg-white rounded-lg shadow py-4"
          onSubmit={props.handleSubmit}
        >
          <div className="flex items-baseline justify-between mx-6">
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;