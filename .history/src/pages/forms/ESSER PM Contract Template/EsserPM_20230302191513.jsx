import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { EESSERContractSchema } from "../../../yup";
import Preview from "./Preview";
import Compensation from "./forms/Compensation";
import ContractDetails from "./forms/ContractDetails";
import { modal, saveFormField } from "../reducer";
import SexualOffender from "./forms/SexualOffender";
import { ESSERContractPM } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { choiceStep, nextChoiceStep } from "./reducer";
import { setResult } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const EsserPM = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(choiceStep);
  const show = useSelector(modal);

  const formID = useSelector(project_document_id);

  const [a] = UseFetchFilledFormDetails(formID);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: setResult(values),
    });
    if (response) {
      if (response?.error) {
        toast.error(response?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        dispatch(nextChoiceStep(3));
      }
    }
  };

  const Formik = useFormik({
    initialValues: {
      contractStartDate: "",
      fromDuration: "",
      startDuration: "",
      calculatePayment: "",
      allowablePayment: "",
      reimburseObligation: "",
      providerCompensation: "",
      providerInvoice: "",
      signedDocument: "",
      addressCopy: "",
      type: "",
    },
    validationSchema: EESSERContractSchema[pages],
    validateOnChange: false,

    onSubmit: (values) => {
      if (pages === 2) {
        dispatch(saveFormField(values));

        HandleSubmit(values);
      } else if (pages === 1) {
        dispatch(nextChoiceStep(2));
      } else if (pages === 0) {
        dispatch(nextChoiceStep(1));
      }
    },
  });

  useEffect(() => {
    if (!a?.data?.form_fields) {
      return;
    }
    // setFieldValue('')
    Formik.setValues({
    //   calculatePayment: a?.data?.form_fields?.calculatePayment,
    //   allowablePayment: a?.data?.form_fields?.allowablePayment,
    //   reimburseObligation: a?.data?.form_fields?.reimburseObligation,
    //   providerCompensation: a?.data?.form_fields?.providerCompensation,
    //   providerInvoice: a?.data?.form_fields?.providerInvoice,
    //   signedDocument: a?.data?.form_fields?.signedDocument,
    //   addressCopy: a?.data?.form_fields?.addressCopy,
      type: a?.data?.form_fields?.type,
    });
  }, [a]);

  const props = {
    ...Formik,
    isLoading,
  };

  return (
    <ModalOverlay show={id === ESSERContractPM && show}>
      {filled ? <Preview {...props} /> : null}
      {pages === 0 && !filled ? <ContractDetails {...Formik} /> : null}
      {pages === 1 && !filled ? <Compensation {...Formik} /> : null}
      {pages === 2 && !filled ? <SexualOffender {...props} /> : null}
      {pages === 3 && !filled ? <Preview {...Formik} /> : null}
    </ModalOverlay>
  );
};
export default EsserPM;
