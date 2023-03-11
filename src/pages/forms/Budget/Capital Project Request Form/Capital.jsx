import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { choiceStep, nextChoiceStep } from "./reducer";
import Preview from "./Preview";
import { CapitalProjectRequestForm } from "../../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import Cinput from "./forms/FormOne";
import Estimate from "./forms/FormTwo";
import { ModalOverlay } from "../../../../ui";
import { modal } from "../../reducer";
import { handleSavedDate, setResult } from "../../../../shared-component";
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";

const CapitalProjectForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
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
				dispatch(nextChoiceStep(2));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			selectOption: "",
			startDate: "",
			completionDate: "",
			Source: "",
			purchase: "",
			design: "",
			construction: "",
			renovation: "",
			repair: "",
			furniture: "",
			funding_source: "",
		},
		// validationSchema: CapitalPForm[pages],

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(nextChoiceStep(1));
			} else if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});

	const props = {
		...Formik,
		isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}

		Formik.setFieldValue(
			"startDate",
			handleSavedDate(a?.data?.form_fields.startDate)
		);
		Formik.setFieldValue(
			"completionDate",
			handleSavedDate(a?.data?.form_fields.completionDate)
		);
		Formik.setFieldValue("selectOption", a?.data?.form_fields.selectOption);
		Formik.setFieldValue("Source", a?.data?.form_fields.Source);
		Formik.setFieldValue("design", a?.data?.form_fields.design);
		Formik.setFieldValue("purchase", a?.data?.form_fields.purchase);
		Formik.setFieldValue("construction", a?.data?.form_fields.construction);
		Formik.setFieldValue("renovation", a?.data?.form_fields.renovation);
		Formik.setFieldValue("repair", a?.data?.form_fields.repair);
		Formik.setFieldValue("furniture", a?.data?.form_fields.furniture);
		Formik.setFieldValue("funding_source", a?.data?.form_fields.funding_source);
	}, [a]);

	if (!filled) {
		return (
			<ModalOverlay show={id === CapitalProjectRequestForm && show}>
				{pages === 0 && <Cinput {...Formik} />}
				{pages === 1 && <Estimate {...props} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === CapitalProjectRequestForm && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default CapitalProjectForm;
