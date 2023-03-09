import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { handleResultWithArray, setResult } from "../../../../shared-component";
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

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: handleResultWithArray(values).form_fields,
			dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
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
