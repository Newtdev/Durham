import "react-datepicker/dist/react-datepicker.css";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { RFPTemplateWithMWBESlug } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./Forms/FormsOne";
import FormTwo from "./Forms/FormsTwo";
import { nextStep, page } from "./reducer";

const RFPTemplate = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

  const HandleSubmit = async (values) => {
    const param = Object.keys(values);
    const val = Object.values(values);

    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: [
        { field_name: param[0], field_value: val[0] },
        { field_name: param[1], field_value: val[1] },
        { field_name: param[2], field_value: val[2] },
        { field_name: param[3], field_value: val[3] },
        { field_name: param[4], field_value: val[4] },
        { field_name: param[5], field_value: val[5] },
        { field_name: param[6], field_value: val[6] },
      ],
    });

  return <div></div>;
};

export default RFPTemplate;
