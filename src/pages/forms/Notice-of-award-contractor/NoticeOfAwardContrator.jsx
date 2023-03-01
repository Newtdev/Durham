import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { NoticeIntentAward } from "../../../yup";
import Preview from "./Preview";
import Form from "./Forms";
import { modal, saveFormField } from "../reducer";
import { notice_of_award_contractor } from "../../../shared-component/slug";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { toast } from "react-toastify";
import { nextStep, page } from "./reducer";
import { setResult } from "../../../shared-component";

const NoticeOfAwardContrator = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);
	// console.log(response)

	const HandleFormSubmit = async (values) => {
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
				dispatch(nextStep());
				// dispatch(techNextStep())
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			creationDate: "",
			approvalDate: "",
			contractorContact: "",
			email: "",
			sendersName: "",
			phone: "",
			recipientCopy: "",
			position: "",
			recipientName: "",
			recipientTitle: "",
		},
		validationSchema: NoticeIntentAward,
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(saveFormField(values));

				HandleFormSubmit(values);
			}
		},
	});

	return (
		<ModalOverlay show={id === notice_of_award_contractor && show}>
			{pages === 1 && <Form {...formik} />}
			{pages === 2 && <Preview />}
		</ModalOverlay>
	);
};

export default NoticeOfAwardContrator;
