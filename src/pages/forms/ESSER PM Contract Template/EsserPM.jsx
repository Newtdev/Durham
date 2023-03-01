import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { EESSERContractSchema } from "../../../yup";
import Preview from "./Preview";
import Compensation from "./forms/Compensation";
import ContractDetails from "./forms/ContractDetails";
import { modal, saveFormField } from "../reducer";
import SexualOffender from "./forms/SexualOffender";
import { ESSERContractPM } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { choiceStep, nextChoiceStep } from "./reducer";
import { setResult } from "../../../shared-component";

const EsserPM = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

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
			addressCopy: "",
			type: "",
		},
		validationSchema: EESSERContractSchema[pages],
		validateOnChange: false,

		onSubmit: (values) => {
			if (pages === 2) {
				dispatch(saveFormField(values));

				HandleSubmit(values);
			} else if (pages === 1) {
				dispatch(nextChoiceStep(2));
			} else if (pages === 0) {
				dispatch(nextChoiceStep(1));
			}
		},
	});

	const props = {
		...Formik,
		isLoading,
	};

	return (
		<ModalOverlay show={id === ESSERContractPM && show}>
			{pages === 0 && <ContractDetails {...Formik} />}
			{pages === 1 && <Compensation {...Formik} />}
			{pages === 2 && <SexualOffender {...props} />}
			{pages === 3 && <Preview {...Formik} />}
		</ModalOverlay>
	);
};
export default EsserPM;
