import { Form, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import Bids from "./forms/Bids";
import { modal, saveFormField } from "../reducer";
import { choiceStep, getStates, nextChoiceStep } from "./reducer";
import { AdvertisementBidSchema } from "../../../yup";
import ConferenceBid from "../Advertisement-for-bid-template/forms/ConferenceBid";
import CompanyInformation from "./forms/CompanyInfo";
import Preview from "./Preview";
import { useEffect } from "react";
import { advertisement_bid } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { handleSavedDate, setResult } from "../../../shared-component";
import Experience from "./forms/Experience";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const AdvertisementBid = ({ id, filled }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
	const show = useSelector(modal);

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
	const [a] = UseFetchFilledFormDetails(formID);

	const HandleSubmit = async (values) => {
		const response = await fillProjectDocument({
			project_document_id: formID,
			form_fields: setResult(values),
		});
		if (response) {
			console.log(response);
			if (response?.error) {
				toast.error(response?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				dispatch(nextChoiceStep(4));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			bidDate: "",
			deadlineTime: "",
			openingTime: "",
			withdrawingBid: "",
			conferenceDate: "",
			conferenceTime: "",
			conferenceAddress: "",
			conferenceCity: "",
			conferenceState: "",
			conferenceZipCode: "",
			presenceOfBiders: false,
			company_name: "",
			manager_name: "",
			manager_phone_number: "",
			manager_email_address: "",
			projects: "",
			years: "",
			projectScope: "",
		},
		validationSchema: AdvertisementBidSchema[pages],
		validateOnMount: false,
		validateOnChange: true,

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(nextChoiceStep(1));
			} else if (pages === 1) {
				dispatch(nextChoiceStep(2));
			} else if (pages === 2) {
				dispatch(nextChoiceStep(3));
			} else if (pages === 3) {
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

	const props = {
		...Formik,
		isLoading,
	};

	useEffect(() => {
		if (!a?.data) {
			return;
		}
		Formik.setFieldValue(
			"bidDate",
			handleSavedDate(a?.data?.form_fields?.bidDate)
		);
		Formik.setFieldValue(
			"deadlineTime",
			handleSavedDate(a?.data?.form_fields?.deadlineTime)
		);
		Formik.setFieldValue(
			"openingTime",
			handleSavedDate(a?.data?.form_fields?.openingTime)
		);
		Formik.setFieldValue(
			"conferenceDate",
			handleSavedDate(a?.data?.form_fields?.conferenceDate)
		);
		Formik.setFieldValue(
			"conferenceTime",
			handleSavedDate(a?.data?.form_fields?.conferenceTime)
		);
		Formik.setFieldValue(
			"withdrawingBid",
			a?.data?.form_fields?.withdrawingBid
		);
		Formik.setFieldValue(
			"conferenceAddress",
			a?.data?.form_fields?.conferenceAddress
		);
		Formik.setFieldValue(
			"conferenceCity",
			a?.data?.form_fields?.conferenceCity
		);
		Formik.setFieldValue(
			"conferenceState",
			a?.data?.form_fields?.conferenceState
		);
		Formik.setFieldValue(
			"conferenceZipCode",
			a?.data?.form_fields?.conferenceZipCode
		);
		Formik.setFieldValue(
			"presenceOfBiders",
			a?.data?.form_fields?.presenceOfBiders
		);
		Formik.setFieldValue("company_name", a?.data?.form_fields?.company_name);
		Formik.setFieldValue("manager_name", a?.data?.form_fields?.manager_name);
		Formik.setFieldValue(
			"manager_phone_number",
			a?.data?.form_fields?.manager_phone_number
		);
		Formik.setFieldValue(
			"manager_email_address",
			a?.data?.form_fields?.manager_email_address
		);
		Formik.setFieldValue("projects", a?.data?.form_fields?.projects);
		Formik.setFieldValue("years", a?.data?.form_fields?.years);
		Formik.setFieldValue("projectScope", a?.data?.form_fields?.projectScope);
	}, [a?.data]);
	if (!filled) {
		return (
			<ModalOverlay show={id === advertisement_bid && show}>
				{pages === 0 && <Bids {...Formik} />}
				{pages === 1 && <ConferenceBid {...Formik} />}
				{pages === 2 && <CompanyInformation {...Formik} />}
				{pages === 3 && <Experience {...props} />}
				{pages === 4 && <Preview />}
			</ModalOverlay>
		);
	}
	return (
		<ModalOverlay show={id === advertisement_bid && show}>
			<Preview />
			{/* </form> */}
		</ModalOverlay>
	);
};

export default AdvertisementBid;
