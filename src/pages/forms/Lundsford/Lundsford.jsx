import { useRef } from "react";
import { useFormik } from "formik";
import { LundsForm } from "../../../yup";
import { ModalOverlay } from "../../../ui";
import Forms from "./Forms";
import PreviewForm from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, page } from "./lundsFormslice";
import { lundsford } from "../../../shared-component/slug";
import { modal, saveFormField } from "../reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { toast } from "react-toastify";

const Lunsford = ({ id }) => {
	const Dispatch = useDispatch();
	const pages = useSelector(page);
	const showModal = useSelector(modal);
	const component = useRef();

	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	// const response = useFetchFilledFormQuery(formID);

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: [{ field_name: param[0], field_value: val[0] }],
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				Dispatch(nextStep());
			}
		}
	};

	const { values, touched, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			type: "",
			addressCopy: "",
		},
		validationSchema: LundsForm,

		onSubmit: (values) => {
			if (pages === 1) {
				Dispatch(saveFormField(values));

				HandleSubmit(values);
			}
		},
	});
	const typeProps = {
		addressValue: values.addressCopy,
		value: values.type,
		handleChange,
		handleSubmit,
		error: errors.type,
		touched: touched.type,
		isLoading,
	};

	const previewProps = {
		value: values.type,
		component,
	};

	return (
		<div>
			<ModalOverlay show={id === lundsford && showModal}>
				{pages === 1 && <Forms {...typeProps} />}
				{pages === 2 && <PreviewForm {...previewProps} />}
			</ModalOverlay>
		</div>
	);
};

export default Lunsford;
