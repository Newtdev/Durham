import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { setResult } from "../../../shared-component";
import { Determination_bidder } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { DeterminationFormContractor } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal } from "../reducer";
import DeterminationForm from "./Form";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

const DeterminationOFLowestBidder = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
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
				dispatch(nextStep(2));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			creationDate: "",
			recipientCopy: "",
			position: "",
		},
		validationSchema: DeterminationFormContractor,

		onSubmit: (values) => {
			if (pages === 1) {
				HandleSubmit(values);
			}
		},
	});

	const props = {
		...Formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === Determination_bidder && show}>
				{pages === 1 && <DeterminationForm {...props} />}
				{pages === 2 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === Determination_bidder && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default DeterminationOFLowestBidder;
