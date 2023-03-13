import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import {
	handleResultWithArray,
	handleSavedDate,
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
			number: "",
			creatingDate: "",
			description: "",
			originalSum: "",
			netSum: "",
			amountEffect: "",
			amount: "",
			completionDate: "",
			priorChangeDays: "0",
			changeDays: "0",
			signDate: "",
			approval: "",
			persons: [
				{
					database: "",
					name: "",
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
		formik.setFieldValue("number", a?.data?.form_fields?.number);
		formik.setFieldValue(
			"creatingDate",
			handleSavedDate(a?.data?.form_fields?.creatingDate)
		);
		formik.setFieldValue(
			"completionDate",
			handleSavedDate(a?.data?.form_fields?.completionDate)
		);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields?.signDate)
		);
		formik.setFieldValue("description", a?.data?.form_fields?.description);
		formik.setFieldValue("originalSum", a?.data?.form_fields?.originalSum);
		formik.setFieldValue("netSum", a?.data?.form_fields?.netSum);
		formik.setFieldValue("amountEffect", a?.data?.form_fields?.amountEffect);
		formik.setFieldValue("amount", a?.data?.form_fields?.amount);
		formik.setFieldValue(
			"priorChangeDays",
			a?.data?.form_fields?.priorChangeDays
		);
		formik.setFieldValue("changeDays", a?.data?.form_fields?.changeDays);
		formik.setFieldValue("approval", a?.data?.form_fields?.approval);
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
