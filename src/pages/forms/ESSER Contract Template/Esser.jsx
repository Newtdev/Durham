import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { EESSERContractSchema } from "../../../yup";
import Preview from "./Preview";
import { saveDoc } from "../Lundsford/lundsFormslice";
import Compensation from "./forms/Compensation";
import ContractDetails from "./forms/ContractDetails";
import { choiceStep, getStates, nextChoiceStep } from "../Advertisement-for-bid-template/reducer";
import { modal } from "../reducer";
import SexualOffender from "./forms/SexualOffender";
import { ESSERContract } from "../../../shared-component/slug";

const EsserContract = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
  const show = useSelector(modal);
  

  const Formik = useFormik({
    initialValues: {
      contractStartDate: '',
      fromDuration: '',
      startDuration: '',
      calculatePayment: '',
      allowablePayment: '',
      reimburseObligation: '',
      providerCompensation: '',
      providerInvoice: '',
      signedDocument: '',
      type: ''
      

    },
    validationSchema: EESSERContractSchema[pages],
    
    onSubmit: (values) => {
      if (pages !== 3) {
        
        dispatch(nextChoiceStep())
      }
      dispatch(saveDoc(values))
    }
  });
  console.log(pages)
  
  return <ModalOverlay show={id === ESSERContract && show}>
    {pages === 0 && <ContractDetails {...Formik} />}
    {pages === 1 && <Compensation {...Formik} />}
    {pages === 2 && <SexualOffender {...Formik} />}
    {pages === 3 && <Preview {...Formik} />}
  </ModalOverlay>
};

export default EsserContract;