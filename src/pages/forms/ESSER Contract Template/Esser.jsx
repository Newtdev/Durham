import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { EESSERContractSchema } from "../../../yup";
import Preview from "./Preview";
import Compensation from "./forms/Compensation";
import ContractDetails from "./forms/ContractDetails";
import { modal, saveFormField } from "../reducer";
import SexualOffender from "./forms/SexualOffender";
import { ESSERContract } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { choiceStep, nextChoiceStep } from "./reducer";
import { handleSavedDate, setResult } from "../../../shared-component";
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const EsserContract = ({ id, filled }) => {
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
				dispatch(nextChoiceStep(3));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			contractStartDate: "",
			fromDuration: "",
			startDuration: "",
			calculatePayment: "",
			allowablePayment: "",
			reimburseObligation: "",
			providerCompensation: "",
			providerInvoice: "",
			signedDocument: "",
			type: "",
			addressCopy: "",
		},
		validationSchema: EESSERContractSchema[pages],
		validateOnChange: false,

		onSubmit: (values) => {
			if (pages === 2) {
				dispatch(saveFormField(values));

				HandleSubmit(values);
			} else if (pages === 1) {
				dispatch(nextChoiceStep(2));
			} else if (pages === 0) dispatch(nextChoiceStep(1));
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
			"contractStartDate",
			handleSavedDate(a?.data?.form_fields.contractStartDate)
		);
		Formik.setFieldValue(
			"fromDuration",
			handleSavedDate(a?.data?.form_fields.fromDuration)
		);
		Formik.setFieldValue(
			"signedDocument",
			handleSavedDate(a?.data?.form_fields.signedDocument)
		);
		Formik.setFieldValue(
			"startDuration",
			handleSavedDate(a?.data?.form_fields.startDuration)
		);
		Formik.setFieldValue(
			"calculatePayment",
			a?.data?.form_fields.calculatePayment
		);
		Formik.setFieldValue(
			"allowablePayment",
			a?.data?.form_fields.allowablePayment
		);
		Formik.setFieldValue(
			"reimburseObligation",
			a?.data?.form_fields.reimburseObligation
		);
		Formik.setFieldValue(
			"providerInvoice",
			a?.data?.form_fields.providerInvoice
		);
		Formik.setFieldValue(
			"signedDocument",
			handleSavedDate(a?.data?.form_fields.signedDocument)
		);
		Formik.setFieldValue(
			"providerCompensation",
			a?.data?.form_fields?.providerCompensation
		);
		Formik.setFieldValue("type", a?.data?.form_fields.type);
		Formik.setFieldValue("addressCopy", a?.data?.form_fields.addressCopy);
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === ESSERContract && show}>
				{pages === 0 && <ContractDetails {...Formik} />}
				{pages === 1 && <Compensation {...Formik} />}
				{pages === 2 && <SexualOffender {...props} />}
				{pages === 3 && <Preview />}
			</ModalOverlay>
		);
	}

	return (
		<ModalOverlay show={id === ESSERContract && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default EsserContract;
