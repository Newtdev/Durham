import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { setResult } from "../../../../shared-component";
import { DesignChangeFrom } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const DesignChangeOrderForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);
	const [a] = UseFetchFilledFormDetails(formID);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

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
			presons: "",
			name: "",
			file: "",
		},
		// validationSchema: ChangeOrderSchema[pages - 1],
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextStep(2));
			} else if (pages === 2) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, [dispatch]);

	const props = {
		...formik,
		isLoading: isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}

		formik.setFieldValue("file", a?.data?.form_fields.file);
		formik.setFieldValue("name", a?.data?.form_fields.name);
		formik.setFieldValue("persons", a?.data?.form_fields.persons);
		formik.setFieldValue("approval", a?.data?.form_fields.approval);
		formik.setFieldValue("changeDays", a?.data?.form_fields.changeDays);
		formik.setFieldValue(
			"priorChangeDays",
			a?.data?.form_fields.priorChangeDays
		);
		formik.setFieldValue("amount", a?.data?.form_fields.amount);
		formik.setFieldValue("amountEffect", a?.data?.form_fields.amountEffect);
		formik.setFieldValue("netSum", a?.data?.form_fields.netSum);
		formik.setFieldValue("originalSum", a?.data?.form_fields.originalSum);
		formik.setFieldValue("description", a?.data?.form_fields.description);
		formik.setFieldValue("number", a?.data?.form_fields.number);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === DesignChangeFrom && show}>
				{pages === 1 && <FormOne {...formik} />}
				{pages === 2 && <FormTwo {...props} />}
				{pages === 3 && <Preview />}
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === DesignChangeFrom && show}>
			<Preview />
		</ModalOverlay>
	);
};
export default DesignChangeOrderForm;
