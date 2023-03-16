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
import { handleSavedDate, setResult } from "../../../shared-component";
import { useEffect } from "react";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const ProjectCloseoutCheckList = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(step);
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
				dispatch(next(1));
			}
		}
	};

	const formik = useFormik({
		initialValues: {
			completionDate: "",
			signDate: "",
		},

		onSubmit: (values) => {
			if (pages === 0) {
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		if (!a?.data) {
			return;
		}

		formik.setFieldValue(
			"completionDate",
			handleSavedDate(a?.data?.form_fields.completionDate)
		);
		formik.setFieldValue(
			"signDate",
			handleSavedDate(a?.data?.form_fields.signDate)
		);
	}, [a?.data]);
	const props = {
		...formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === project_closeout_checklist && show}>
				{pages === 0 && <GeneralInformation {...props} />}

				{pages === 1 && <ProjectCloseOutPreview {...props} />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === project_closeout_checklist && show}>
			<ProjectCloseOutPreview {...props} />
		</ModalOverlay>
	);
};

export default ProjectCloseoutCheckList;
