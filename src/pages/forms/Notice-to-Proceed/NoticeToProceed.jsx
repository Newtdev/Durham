import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { NoticeProceed } from "../../../yup";
import NoticeForm from "./Forms";
import Preview from "./Preview";
import { nextStep, page } from "./reducerSlice";
import { modal } from "../reducer";
import { notice_to_proceed } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { setResult } from "../../../shared-component";

const NoticeToProceed = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const showModal = useSelector(modal);

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
			effectiveDate: "",
			creationDate: "",
			startDate: "",
			startTime: "",
		},
		validationSchema: NoticeProceed,
		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
				// dispatch(saveFormField(values));
				// formik.handleReset();
			}
		},
	});

	const props = {
		...formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === notice_to_proceed && showModal}>
				{pages === 1 && <NoticeForm {...props} />}
				{pages === 2 && <Preview {...formik} />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === notice_to_proceed && showModal}>
			<Preview {...formik} />
		</ModalOverlay>
	);
};

export default NoticeToProceed;
