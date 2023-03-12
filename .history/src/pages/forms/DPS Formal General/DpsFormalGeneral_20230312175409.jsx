import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { DpsFormalGeneralSlug } from "../../../shared-component/slug";
// import { OwnerDesignConsultantLessSchema } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";
import { setResult, handleSavedDate } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const DpsFormalGeneral = ({ id }) => {
  const show = useSelector(modal);
  const formID = useSelector(project_document_id);

  return (
    <ModalOverlay show={id === DpsFormalGeneralSlug && show}>
      <div className="bg-white">
        <h1>Hey You</h1>
      </div>
    </ModalOverlay>
  );
};

export default DpsFormalGeneral;
