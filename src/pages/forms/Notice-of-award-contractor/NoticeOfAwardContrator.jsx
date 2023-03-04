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
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const NoticeOfAwardContrator = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);
	const [a] = UseFetchFilledFormDetails(formID);
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
				dispatch(nextStep(2));
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
				HandleFormSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}

		formik.setFieldValue(
			"contractorContact",
			a?.data?.form_fields.contractorContact
		);
		formik.setFieldValue("email", a?.data?.form_fields.email);
		formik.setFieldValue("phone", a?.data?.form_fields.phone);
		formik.setFieldValue("recipientCopy", a?.data?.form_fields.recipientCopy);
		formik.setFieldValue("position", a?.data?.form_fields.position);
		formik.setFieldValue("recipientName", a?.data?.form_fields.recipientName);
		formik.setFieldValue("recipientTitle", a?.data?.form_fields.recipientTitle);
	}, [a?.data]);

	const formProps = {
		...formik,
		isLoading,
	};

	if (!filled) {
		return (
			<ModalOverlay show={id === notice_of_award_contractor && show}>
				{pages === 1 && <Form {...formProps} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === notice_of_award_contractor && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default NoticeOfAwardContrator;
