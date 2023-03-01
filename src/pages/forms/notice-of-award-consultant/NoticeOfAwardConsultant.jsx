import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	useFetchFilledFormQuery,
	useFillProjectDocumentMutation,
} from "../../../features/services/api";
import { setResult } from "../../../shared-component";
import { notice_of_award_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeofAwardSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import Form from "./Forms";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const NoticeOfAwardConsultant = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);

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
				dispatch(nextStep());
				// dispatch(techNextStep())
			}
		}
	};

	const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			approval: "",
			creationDate: "",
			services: "",
			amount: "",
			email: "",
			deliveryDate: "",
			recipientCopy: "",
			position: "",
			recipientName: "",
			recipientTitle: "",
		},
		validationSchema: NoticeofAwardSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	// useEffect(() => {
	//   if (!response?.data?.data) {
	//     return;
	//   }
	//   formik.setFieldValue('amount',response?.data?.data?.form_fields.amount)
	//   formik.setFieldValue('services',response?.data?.data?.form_fields.services)
	//   formik.setFieldValue('email',response?.data?.data?.form_fields.email)
	//   formik.setFieldValue('approval',response?.data?.data?.form_fields.approval)
	// },[response?.data?.data])

	return (
		<ModalOverlay show={id === notice_of_award_consultant && show}>
			{pages === 1 && <Form {...formik} />}
			{pages === 2 && <Preview />}
		</ModalOverlay>
	);
};

export default NoticeOfAwardConsultant;
