import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { OwnerDesignConsultantLessSlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { page } from "../Lundsford/lundsFormslice";
import { modal, saveFormField } from "../reducer";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Preview from "./Preview";
import { setResult } from "../../../shared-component";
import { nextStep } from "./reducer";

const OwnerDesignConsultantLessForm = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

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
				dispatch(nextStep(3));
			}
		}
	};

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			agreementDate: "",
			sustainaibilityDate: "",
			financialOfficerSignDate: "",
			notarizedDate: "",
			sexualOffenderOption: false,
		},
		// validationSchema: OwnerDesignConsultantLessSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				// dispatch(saveFormField(values))
				console.log(values);
				dispatch(nextStep(2));
				// HandleSubmit(values);
			} else if (pages === 2) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	//return <ModalOverlay show={show} />
	const formProps = {
		...formik,
		isLoading,
	};

	return (
		<ModalOverlay show={id === OwnerDesignConsultantLessSlug && show}>
			{pages === 1 && <FormOne {...formik} />}
			{pages === 2 && <FormTwo {...formProps} />}
			{pages === 3 && <Preview />}
		</ModalOverlay>
	);
};

export default OwnerDesignConsultantLessForm;
