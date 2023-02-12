import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms";
import { SelectTime } from "../../Notice-to-Proceed/Forms";
import { closeModal } from "../../reducer";
import { FormSelect } from "../Components";
import { getList, prevChoiceStep } from "../reducer";

const FormTwo = (props) => {
  const states = useSelector(getList);

  const dispatch = useDispatch();

  return <div></div>;
};

export default FormTwo;
