import { Formik, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { handleSavedDate } from "../../../../shared-component";
import { ShortSmallFormDesign } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { ShortSmallFormDesignSchema } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./FormOne";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const ShortSmallFormDesignForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

		console.log("values: ", values);

		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: [
				{ field_name: param[0], field_value: val[0] },
				{ field_name: param[1], field_value: val[1] },
				{ field_name: param[2], field_value: val[2] },
			],
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

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			agreementDate: "",
			ownerEmail: "",
			signDate: "",
		},
		validationSchema: ShortSmallFormDesignSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue(
			"agreementDate",
			handleSavedDate(a?.data?.form_fields?.agreementDate)
		);
		formik.setFieldValue("ownerEmail", a?.data?.form_fields?.ownerEmail);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields?.signDate)
		);
	}, [a?.data]);
	const formProps = {
		...formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === ShortSmallFormDesign && show}>
				{pages === 1 && <FormOne {...formProps} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}

	// return <ModalOverlay show={true}>
	return (
		<ModalOverlay show={id === ShortSmallFormDesign && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default ShortSmallFormDesignForm;
