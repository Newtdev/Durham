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
			affectedDate: "",
			signedPerson: "",
			position: "",
			overhead: 10,
			sale: 6.75,
			insurance: 30,
			profit: 10,
			allowable: 15.7,

			signedDate: "",
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
				HandleSubmit(values);
			}
		},
	});

	return (
		<ModalOverlay show={id === ProposalSlug && show}>
			{pages === 1 && <FirstForm {...Formik} />}
			{pages === 2 && <SecondForm {...Formik} />}
			{pages === 3 && <ThirdForm {...Formik} />}
			{pages === 4 && <Preview />}
		</ModalOverlay>
	);
};

export default ProposalForm;
