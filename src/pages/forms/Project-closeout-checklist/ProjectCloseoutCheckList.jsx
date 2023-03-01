import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { modal, saveFormField } from "../reducer";
import GeneralInformation from "./forms/GeneralInfo";
import { ProjectCloseOutSchema } from "../../../yup";
import CheckList from "./forms/CheckList";
import CheckListTwo from "./forms/CheckListTwo";
import CheckListThree from "./forms/CheckListThree";
import { project_closeout_checklist } from "../../../shared-component/slug";
import ProjectCloseOutPreview from "./Preview";
import { next, step } from "./reducer";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { setResult } from "../../../shared-component";

const ProjectCloseoutCheckList = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(step);
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
				dispatch(next(4));
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			completionDate: "",
			signDate: "",
			one: false,
			two: false,
			three: false,
			four: false,
			five: false,
			six: false,
			seven: false,
			eight: false,
			nine: false,
			ten: false,
			eleven: false,
			twelve: false,
			thirteen: false,
			fourteen: false,
			fifteen: false,
			sixteen: false,
			seventeen: false,
			eighteen: false,
			ninteen: false,
			twenty: false,
			twentyOne: false,
			twentyTwo: false,
		},

		validationSchema: ProjectCloseOutSchema,
		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(next(1));
			} else if (pages === 1) {
				dispatch(next(2));
			} else if (pages === 2) {
				dispatch(next(3));
			} else if (pages === 3) {
				dispatch(saveFormField(values));

				HandleSubmit(values);
				formik.handleReset();
			}
		},
	});

	const props = {
		...formik,
		isLoading,
	};
	return (
		<ModalOverlay show={id === project_closeout_checklist && show}>
			{pages === 0 && <GeneralInformation {...formik} />}
			{pages === 1 && <CheckList {...formik} />}
			{pages === 2 && <CheckListTwo {...formik} />}
			{pages === 3 && <CheckListThree {...props} />}
			{pages === 4 && <ProjectCloseOutPreview />}
		</ModalOverlay>
	);
};

export default ProjectCloseoutCheckList;
