import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { techServices } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { TechServiceSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import Forms from "./Forms";
import { page, techNextStep } from "./reducer";
import TechPreview from "./TechPreview";
import { handleSavedDate, setResult } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { useEffect } from "react";

const TechService = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

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
				dispatch(techNextStep());
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			creationDate: "",
			amount: "",
			startDate: "",
			endDate: "",
			signedDate: "",
			addressCopy: "",
		},
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
		Formik.setFieldValue("amount", a?.data?.form_fields?.amount);
		Formik.setFieldValue("addressCopy", a?.data?.form_fields.addressCopy);
		Formik.setFieldValue(
			"startDate",
			handleSavedDate(a?.data?.form_fields.startDate)
		);
		Formik.setFieldValue(
			"endDate",
			handleSavedDate(a?.data?.form_fields.endDate)
		);
		Formik.setFieldValue(
			"signedDate",
			handleSavedDate(a?.data?.form_fields.signedDate)
		);
	}, [a?.data]);

	const props = {
		...Formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === techServices && show}>
				{pages === 1 && <Forms {...props} />}
				{pages === 2 && <TechPreview {...Formik} />}
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === techServices && show}>
			<TechPreview {...Formik} />
		</ModalOverlay>
	);
};

export default TechService;
