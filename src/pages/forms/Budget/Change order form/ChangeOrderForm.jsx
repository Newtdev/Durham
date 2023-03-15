import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleResultWithArray,
	handleSavedDate,
	parseDynamicInput,
	setResult,
} from "../../../../shared-component";
import { ChangeOrder } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { ChangeOrderSchema } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./form/FormOne";
import FormTwo from "./form/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const ChangeOrderForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray(values),
		});
		if (response) {
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextStep(3));
			}
		}
	};

	// const show = useSelector(modal);
	const formik = useFormik({
		initialValues: {
			orderNumber: "",
			orderCreatingDate: "",
			orderDescription: "",
			orderOriginalSum: "",
			orderNetSum: "",
			orderAmountEffect: "",
			orderAmount: "",
			orderCompletionDate: "",
			orderPriorChangeDays: "0",
			orderChangeDays: "0",
			orderSignDate: "",
			orderApproval: "",
			persons: [
				{
					database: "",
					name: "",
					position: "",
				},
			],
		},
		// validationSchema: ChangeOrderSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextStep(2));
			} else if (pages === 2) {
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		formik.setFieldValue("orderNumber", a?.data?.form_fields?.orderNumber);
		formik.setFieldValue(
			"orderCreatingDate",
			handleSavedDate(a?.data?.form_fields?.orderCreatingDate)
		);
		formik.setFieldValue(
			"orderCompletionDate",
			handleSavedDate(a?.data?.form_fields?.orderCompletionDate)
		);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields?.signDate)
		);
		formik.setFieldValue(
			"orderDescription",
			a?.data?.form_fields?.orderDescription
		);
		formik.setFieldValue(
			"orderOriginalSum",
			a?.data?.form_fields?.orderOriginalSum
		);
		formik.setFieldValue("orderNetSum", a?.data?.form_fields?.orderNetSum);
		formik.setFieldValue(
			"orderAmountEffect",
			a?.data?.form_fields?.orderAmountEffect
		);
		formik.setFieldValue("orderAmount", a?.data?.form_fields?.orderAmount);
		formik.setFieldValue(
			"priorChangeDays",
			a?.data?.form_fields?.priorChangeDays
		);
		formik.setFieldValue(
			"orderChangeDays",
			a?.data?.form_fields?.orderChangeDays
		);
		formik.setFieldValue("orderApproval", a?.data?.form_fields?.orderApproval);
		formik.setFieldValue(
			"persons",
			parseDynamicInput(a?.data?.form_fields?.persons)
		);
	}, [a?.data]);

	const props = {
		...formik,
		isLoading: isLoading,
	};

	if (!filled) {
		return (
			<ModalOverlay show={id === ChangeOrder && show}>
				<FormikProvider value={formik}>
					{pages === 1 && <FormOne {...formik} />}
					{pages === 2 && <FormTwo {...props} />}
					{pages === 3 && <Preview />}
				</FormikProvider>
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === ChangeOrder && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default ChangeOrderForm;
