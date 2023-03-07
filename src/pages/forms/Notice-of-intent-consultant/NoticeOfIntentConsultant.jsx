import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { setResult } from "../../../shared-component";
import { notice_of_intent_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeConsultant } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal } from "../reducer";
import NoticeForm from "./Forms";
import PreviewElement from "./PreviewElement";
import { nextStep, page } from "./reducerSlice";

const NoticeOfIntentConsultant = ({ id, filled }) => {
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
				dispatch(nextStep(2));
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			approval: "",
			creationDate: "",
			projectAmount: "",
			approvalDate: "",
			deliveryDate: "",
		},
		// validationSchema: NoticeConsultant,
		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});
	const props = {
		...formik,
		isLoading,
	};

	if (!filled) {
		return (
			<ModalOverlay show={id === notice_of_intent_consultant && show}>
				{pages === 1 && <NoticeForm {...props} />}
				{pages === 2 && <PreviewElement />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === notice_of_intent_consultant && show}>
			<PreviewElement />
		</ModalOverlay>
	);
};

export default NoticeOfIntentConsultant;
