import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { techServices } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { TechServiceSchema } from "../../../yup";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { modal, saveFormField } from "../reducer";
import Forms from "./Forms";
import { page, techNextStep } from "./reducer";
import TechPreview from "./TechPreview";
import { setResult } from "../../../shared-component";

const TechService = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(page);
	const show = useSelector(modal);
	const formID = useSelector(project_document_id);
	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleFormSubmit = async (values) => {
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
				dispatch(techNextStep());
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			creationDate: "",
			amount: "",
			startDate: "",
			endDate: "",
			signedDate: "",
			addressCopy: "",
		},
		validationSchema: TechServiceSchema,
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(saveFormField(values));
				HandleFormSubmit(values);
			}
		},
	});

	// useEffect(() => {
	//   if (!response?.data?.data) {
	//     return;
	//   }
	//   Formik.setFieldValue('amount', response?.data?.data?.form_fields.amount)
	// }, [response?.data?.data]);

	const props = {
		...Formik,
		isLoading,
	};

	return (
		<ModalOverlay show={id === techServices && show}>
			{pages === 1 && <Forms {...props} />}
			{pages === 2 && <TechPreview {...Formik} />}
		</ModalOverlay>
	);
};

export default TechService;
