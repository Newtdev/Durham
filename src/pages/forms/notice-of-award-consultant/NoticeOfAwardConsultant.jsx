import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	useFetchFilledFormQuery,
	useFillProjectDocumentMutation,
} from "../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { setResult } from "../../../shared-component";
import { notice_of_award_consultant } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { NoticeofAwardSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import Form from "./Forms";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const NoticeOfAwardConsultant = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
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
				dispatch(nextStep(2));
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

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue("amount", a?.data?.form_fields.amount);
		formik.setFieldValue("services", a?.data?.form_fields.services);
		formik.setFieldValue("email", a?.data?.form_fields.email);
		formik.setFieldValue("approval", a?.data?.form_fields.approval);
	}, [a?.data]);

	const formProps = {
		...formik,
		isLoading,
	};

	if (!filled) {
		return (
			<ModalOverlay show={id === notice_of_award_consultant && show}>
				{pages === 1 && <Form {...formProps} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === notice_of_award_consultant && show}>
			{<Preview />}
		</ModalOverlay>
	);
};

export default NoticeOfAwardConsultant;
