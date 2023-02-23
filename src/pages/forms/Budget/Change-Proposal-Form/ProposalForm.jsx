import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../../ui";
import { modal, saveFormField } from "../../reducer";
import { page, nextChoiceStep } from "./reducer";
import { Proposal } from "../../../../yup";
import { ProposalSlug } from "../../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
import Preview from "./Preview";
import FirstForm from "./Forms/FirstForm";
import SecondForm from "./Forms/SecondForm";

const ProposalForm = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: [
				{ field_name: param[0], field_value: val[0] },
				{ field_name: param[1], field_value: val[1] },
				{ field_name: param[2], field_value: val[2] },
				{ field_name: param[3], field_value: val[3] },
				{ field_name: param[4], field_value: val[4] },
				{ field_name: param[5], field_value: val[5] },
				{ field_name: param[6], field_value: val[6] },
			],
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
			userType: "",
			select: "",
			slectDate: "",
			date: "",
			contract: "",
			contractor: "",
			proposal: "",
			numberDays: "",
			userTypeChange: "",
			selectChange: "",
			slectDatChangee: "",
			dateChange: "",
			contractChange: "",
			contractorChange: "",
			proposalChange: "",
			numberDaysChange: "",
		},
		// validationSchema: Proposal[pages],

		onSubmit: (values) => {
			console.log(pages);
			if (pages === 1) {
				dispatch(nextChoiceStep(2));
				console.log("ense");
			} else if (pages === 2) {
				dispatch(nextChoiceStep(2));
				dispatch(saveFormField(values));
				// HandleSubmit(values);
			}
		},
	});

	return (
		<ModalOverlay show={id === ProposalSlug && show}>
			{pages === 1 && <FirstForm {...Formik} />}
			{pages === 2 && <SecondForm {...Formik} />}
			{pages === 3 && <Preview />}
		</ModalOverlay>
	);
};

export default ProposalForm;
