import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ModalOverlay } from "../../../../ui";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { ChangeOrderDirective } from "../../../../shared-component/slug";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../../reducer";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";
import FormOne from "./form/formOne";
import { handleSavedDate, setResult } from "../../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { useEffect } from "react";

const ChangeOrderDirectiveForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

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

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			triggered: "",
			maxPrice: "",
			unitPrice: "",
			exceed: "",
			exceedAmount: "",
			price: "",
			amount: "",
			contractTime: "",
			contractTimePerHour: "",
			ownerDatabase: "",
			ownerName: "",
			signDate: "",
			position: "",
		},
		// validationSchema: ChangeOrderDirectiveSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});

	const formProps = {
		...formik,
		isLoading,
	};
	// return <ModalOverlay show={true}>

	useEffect(() => {
		if (!a?.data) {
			return;
		}

		formik.setFieldValue("triggered", a?.data?.form_fields.triggered);
		formik.setFieldValue("maxPrice", a?.data?.form_fields.maxPrice);
		formik.setFieldValue("unitPrice", a?.data?.form_fields.unitPrice);
		formik.setFieldValue("exceed", a?.data?.form_fields.exceed);
		formik.setFieldValue("exceedAmount", a?.data?.form_fields.exceedAmount);
		formik.setFieldValue("price", a?.data?.form_fields.price);
		formik.setFieldValue("amount", a?.data?.form_fields.amount);
		formik.setFieldValue("netSum", a?.data?.form_fields.netSum);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields.signDate)
		);
		formik.setFieldValue(
			"contractTimePerHour",
			a?.data?.form_fields.contractTimePerHour
		);
		formik.setFieldValue("ownerDatabase", a?.data?.form_fields.ownerDatabase);
		formik.setFieldValue("ownerName", a?.data?.form_fields.ownerName);
		formik.setFieldValue("position", a?.data?.form_fields.position);
		formik.setFieldValue("contractTime", a?.data?.form_fields.contractTime);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === ChangeOrderDirective && show}>
				{pages === 1 && <FormOne {...formProps} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === ChangeOrderDirective && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default ChangeOrderDirectiveForm;
