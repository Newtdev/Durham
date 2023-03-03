import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { setResult } from "../../../shared-component";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { nextStep, page } from "../Lundsford/lundsFormslice";
import { modal, saveFormField } from "../reducer";
import { RFPTemplateWithMWBESlug } from "../../../shared-component/slug";
import FormOne from "./Forms/FormsOne";
import FormTwo from "./Forms/FormsTwo";
import FormThree from "./Forms/FormsThree";
import Preview from "./Preview";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const RFPTemplate = ({ id }) => {
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
			dispatch(nextStep(4));
		  }
		}
	  };
	// const pages = 4;

	const formik = useFormik({
		initialValues: {
			bidderName: "",
			rfpNumber: "",
			personName: "",
			contractType: "",
			issueDate: "",
			proposalDate: "",
			submissionDate: "",
			answerDate: "",
			bidOpeningDate: "",
			proposalSubmissionDate: "",
			proposalTime: "",
			submissionTime: "",
			answerTime: "",
			bidOpeningTime: "",
			proposalSubmissionTime: "",
			street: "",
			state: "",
			city: "",
			zipCode: "",
			date: "",
			time: "",
			prototypeNotUtilized: "",
			validityPeriod: "",
			items: "",
			attachment: "false",
		},
		// validationSchema: RFPTemplatewithMWBESchema,
		onSubmit: (values) => {
			if (pages === 1) {
				dispatch(saveFormField(values));
				dispatch(nextStep(2));
			} else if (pages === 2) {
				dispatch(saveFormField(values));
				dispatch(nextStep(3));
			} else if (pages === 3) {
				console.log(values);
				dispatch(saveFormField(values));
				// dispatch(nextStep(4));
				console.log(values);
				HandleSubmit(values);
			}
		},
	});

	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, [dispatch]);

	return (
		<ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
			<FormikProvider value={formik}>
				{pages === 1 && <FormOne {...formik} />}
				{pages === 2 && <FormTwo {...formik} />}
				{pages === 3 && <FormThree {...formik} />}
				{pages === 4 && <Preview />}
			</FormikProvider>
		</ModalOverlay>
	);
};

export default RFPTemplate;
