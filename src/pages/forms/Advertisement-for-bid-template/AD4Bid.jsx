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
import { setResult } from "../../../shared-component";

const AdvertisementBid = ({ id }) => {
	const dispatch = useDispatch();
	const pages = useSelector(choiceStep);
	const show = useSelector(modal);
	// const show = true;

	const formID = useSelector(project_document_id);

	const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();

	const HandleSubmit = async (values) => {
		const param = Object.keys(values);
		const val = Object.values(values);

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
				dispatch(nextChoiceStep(3));
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
		},
		validationSchema: AdvertisementBidSchema[pages],
		validateOnMount: false,
		validateOnChange: false,

		onSubmit: (values) => {
			if (pages === 0) {
				dispatch(nextChoiceStep(1));
			} else if (pages === 1) {
				dispatch(nextChoiceStep(2));
			} else if (pages === 2) {
				dispatch(saveFormField(values));

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
	// return <ModalOverlay show={show}>
	return (
		<ModalOverlay show={id === advertisement_bid && show}>
			{/* <form onSubmit={Formik.handleSubmit}> */}
			{pages === 0 && <Bids {...Formik} />}
			{pages === 1 && <ConferenceBid {...Formik} />}
			{pages === 2 && <CompanyInformation {...props} />}
			{pages === 3 && <Preview />}
			{/* </form> */}
		</ModalOverlay>
	);
};

export default AdvertisementBid;
