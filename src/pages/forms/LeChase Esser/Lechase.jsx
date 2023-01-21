import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { EESSERContractSchema } from "../../../yup";
import Preview from "./Preview";
import Compensation from "./forms/Compensation";
import ContractDetails from "./forms/ContractDetails";
import { modal, saveFormField } from "../reducer";
import SexualOffender from "./forms/SexualOffender";
import { leChase } from "../../../shared-component/slug";
import { choiceStep, nextChoiceStep } from "./reducer";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";

const LeChase = ({id}) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);
  
  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();



  const HandleSubmit = async (values) => {
    const param = Object.keys(values)
    const val = Object.values(values)
    
    const response = await fillProjectDocument({
      project_document_id: formID, form_fields: [{ field_name: param[0], field_value: val[0] },
      { field_name: param[1], field_value: val[1] },
      { field_name: param[2], field_value: val[2] },
      { field_name: param[3], field_value: val[3] },
      { field_name: param[4], field_value: val[4] },
      { field_name: param[5], field_value: val[5] },
      { field_name: param[6], field_value: val[6] },
      { field_name: param[7], field_value: val[7] },
      { field_name: param[8], field_value: val[8] },
      { field_name: param[9], field_value: val[9] },
    ]
    })
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
      });
      } else {
        dispatch(nextChoiceStep(3))
      }
    }
}
  

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
    
      if (pages ===2) {
        dispatch(saveFormField(values))

        HandleSubmit(values)
      } else if (pages === 1) {
        
        dispatch(nextChoiceStep(2))
      }else if(pages === 0)
      
      dispatch(nextChoiceStep(1))
      
    }
  });

  console.log(pages)
  const props = {
    ...Formik,
    isLoading
  }
  
  return <ModalOverlay show={id === leChase && show}>
    {pages === 0 && <ContractDetails {...Formik} />}
    {pages === 1 && <Compensation {...Formik} />}
    {pages === 2 && <SexualOffender {...props} />}
    {pages === 3 && <Preview {...Formik} />}
  </ModalOverlay>
};

export default LeChase;