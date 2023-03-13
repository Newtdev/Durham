import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { modal } from "../reducer";
import { ContractPreparationForm } from "../../../shared-component/slug";
import { next, step } from "./reducer";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { handleSavedDate, setResult } from "../../../shared-component";
import Preview from "./Preview";
import GeneralInformation from "./forms/GeneralInformation";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";
import { useEffect } from "react";

const ContractPreparationCheckList = ({ id, filled }) => {
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
			contractType: "",
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
		formik.setFieldValue("contractType", a?.data?.form_fields?.contractType);
		formik.setFieldValue(
			"signedDate",
			handleSavedDate(a?.data?.form_fields?.signedDate)
		);
	}, [a?.data]);

	const props = {
		...formik,
		isLoading,
	};
	if (!filled) {
		return (
			<ModalOverlay show={id === ContractPreparationForm && show}>
				{pages === 0 ? <GeneralInformation {...props} /> : null}

				{pages === 1 ? <Preview /> : null}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === ContractPreparationForm && show}>
			<Preview />
		</ModalOverlay>
	);
};

export default ContractPreparationCheckList;
