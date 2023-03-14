import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../../ui";
import { modal, saveFormField } from "../../reducer";
import { page, nextChoiceStep } from "./reducer";
// import { ProposalYup } from "../../../../yup";
import { ProposalSlug } from "../../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import Preview from "./Preview";
import FirstForm from "./Forms/FirstForm";
import SecondForm from "./Forms/SecondForm";
import ThirdForm from "./Forms/ThirdForm";
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { handleSavedDate } from "../../../../shared-component";

const ProposalForm = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);

	const [a] = UseFetchFilledFormDetails(formID);

	const Formik = useFormik({
		initialValues: {
			userType: "",
			affectedDate: "",
			position: "",
			overhead: 10,
			sale: 6.75,
			insurance: 30,
			profit: 10,
			allowable: 15.7,
			overhead_exprimental: 6.0,
			profit_subcontractor: 6.0,
			bonds: 1.5,

			signedDate: "",
			signedContractPerson: "",
			contract: "",
			contractor: "",
			proposal: "",
			numberDays: "",
			material: "",
			shipping: "",
			hours: "",
			amount: "",
			Thours: "",
			Tamount: "",
			rental: "",
			subcontractors: "",
		},
		// validationSchema: ProposalYup[pages],

		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(nextChoiceStep(2));
			} else if (pages === 2) {
				dispatch(nextChoiceStep(3));
			} else if (pages === 3) {
				dispatch(saveFormField(values));
			}
		},
	});

	useEffect(() => {
		if (!a?.data?.length < 1) {
			return;
		} else {
			Formik.setFieldValue("userType", a?.data?.form_fields?.userType);
			Formik.setFieldValue(
				"signedContractPerson",
				a?.data?.form_fields?.signedContractPerson
			);
			Formik.setFieldValue("position", a?.data?.form_fields?.position);
			Formik.setFieldValue("contract", a?.data?.form_fields?.contract);
			Formik.setFieldValue("contractor", a?.data?.form_fields?.contractor);
			Formik.setFieldValue("proposal", a?.data?.form_fields?.proposal);
			Formik.setFieldValue("numberDays", a?.data?.form_fields?.numberDays);
			Formik.setFieldValue("material", a?.data?.form_fields?.material);
			Formik.setFieldValue("shipping", a?.data?.form_fields?.shipping);
			Formik.setFieldValue("hours", a?.data?.form_fields?.hours);
			Formik.setFieldValue(
				"affectedDate",
				handleSavedDate(a?.data?.form_fields?.affectedDate)
			);
			Formik.setFieldValue(
				"signedDate",
				handleSavedDate(a?.data?.form_fields?.signedDate)
			);
			Formik.setFieldValue("amount", a?.data?.form_fields?.amount);
			Formik.setFieldValue("Tamount", a?.data?.form_fields?.Tamount);
			Formik.setFieldValue("Thours", a?.data?.form_fields?.Thours);
			Formik.setFieldValue("rental", a?.data?.form_fields?.rental);
			Formik.setFieldValue(
				"subcontractors",
				a?.data?.form_fields?.subcontractors
			);
		}
	}, [a?.data]);

	if (!filled) {
		return (
			<ModalOverlay show={id === ProposalSlug && show}>
				{pages === 1 && <FirstForm {...Formik} />}
				{pages === 2 && <SecondForm {...Formik} />}
				{pages === 3 && <ThirdForm {...Formik} />}
				{pages === 4 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === ProposalSlug && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default ProposalForm;
