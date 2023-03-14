import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { saveDoc } from "../Notice-of-intent-consultant/reducerSlice";
import { modal, saveFormField } from "../reducer";
import { CertificateOfSubstantialSchema } from "../../../yup";
import ProjectInformation from "./forms/ProjectInformation";
import SubstantialCompletionDetails from "./forms/SubstantialCompletionDetails";
import SubstantialCompletionDetailsTwo from "./forms/SubstantialCompletionDetailsTwo";
import CertificatePreview from "./CertificatePreview";
import { next, step } from "./reducer";
import { certificateOfSubstantialCompletion } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { handleSavedDate, setResult } from "../../../shared-component";
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const CertificateOfSubstantial = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(step);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);
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
				dispatch(next(3));
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			purposeOfContract: "",
			contractEffectDate: "",
			involvedInProject: "",
			areasCompleted: "",
			completionDate: "",
			workCompletionDate: "",
			costOfWork: "",
			owner: "",
			position: "",
			signedDate: "",
			responsibility: "",
			estimatedCost: "",
		},

		validationSchema: CertificateOfSubstantialSchema[pages],

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(next(1));
			} else if (pages === 1) {
				dispatch(next(2));
			} else if (pages === 2) {
				HandleSubmit(values);
			}
		},
	});

	const props = {
		...formik,
		isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue(
			"purposeOfContract",
			a?.data?.form_fields?.purposeOfContract
		);
		formik.setFieldValue(
			"involvedInProject",
			a?.data?.form_fields?.involvedInProject
		);
		formik.setFieldValue(
			"areasCompleted",
			a?.data?.form_fields?.areasCompleted
		);
		formik.setFieldValue("costOfWork", a?.data?.form_fields?.costOfWork);
		formik.setFieldValue("position", a?.data?.form_fields?.position);
		formik.setFieldValue("owner", a?.data?.form_fields?.owner);
		formik.setFieldValue(
			"responsibility",
			a?.data?.form_fields?.responsibility
		);
		formik.setFieldValue("estimatedCost", a?.data?.form_fields?.estimatedCost);
		formik.setFieldValue(
			"contractEffectDate",
			handleSavedDate(a?.data?.form_fields?.contractEffectDate)
		);
		formik.setFieldValue(
			"workCompletionDate",
			a?.data?.form_fields?.workCompletionDate
		);
		formik.setFieldValue(
			"signedDate",
			handleSavedDate(a?.data?.form_fields?.signedDate)
		);
		formik.setFieldValue(
			"completionDate",
			handleSavedDate(a?.data?.form_fields?.completionDate)
		);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === certificateOfSubstantialCompletion && show}>
				{pages === 0 && <ProjectInformation {...formik} />}
				{pages === 1 && <SubstantialCompletionDetails {...formik} />}
				{pages === 2 && <SubstantialCompletionDetailsTwo {...props} />}
				{pages === 3 && <CertificatePreview />}
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === certificateOfSubstantialCompletion && show}>
			<CertificatePreview />
		</ModalOverlay>
	);
};

export default CertificateOfSubstantial;
