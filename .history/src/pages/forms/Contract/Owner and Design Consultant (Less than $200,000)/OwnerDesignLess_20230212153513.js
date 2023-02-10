import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { ShortSmallFormDesign } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { ShortSmallFormDesignSchema } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./FormOne";