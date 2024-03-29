import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../../../ui";
import { modal, saveFormField } from "../reducer";
import { page, nextChoiceStep } from "./reducer";
import { AffidavitYup } from "../../../yup";
import { AffidavitSlug } from "../../../shared-component/slug";
import { toast } from "react-toastify";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import Preview from "./Preview";
import {
	FormOne,
	FormTwo,
	FormThree,
	FormFour,
	FormFive,
	FormSix,
} from "./forms";
import { setResult } from "../../../shared-component";
import { useEffect } from "react";
import { getStates } from "../Advertisement-for-bid-template/reducer";

const MainAffidavit = ({ id, filled }) => {
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
				dispatch(nextChoiceStep(7));
			}
		}
	};

	const Formik = useFormik({
		initialValues: {
			userType: "",
			boxA: "",
			lesseeA: "",
			realProperty: "",
			companyNameA: "",
			companyAddressA: "",
			contractor: "",
			conferenceStateA: "",
			conferenceCityA: "",
			conferenceZipCodeA: "",
			lesseeB: "",
			companyNameB: "",
			companyAddressB: "",
			conferenceStateB: "",
			conferenceCityB: "",
			conferenceZipCodeB: "",
			lesseeC: "",
			companyNameC: "",
			companyAddressC: "",
			conferenceStateC: "",
			conferenceCityC: "",
			conferenceZipCodeC: "",
			lesseeD: "",
			companyNameD: "",
			companyAddressD: "",
			conferenceStateD: "",
			conferenceCityD: "",
			conferenceZipCodeD: "",
			improvement: "",
		},

		onSubmit: (values) => {
			if (pages === 1) {
				if (Formik.values.userType === "Single Use") {
					return dispatch(nextChoiceStep(4));
				} else if (Formik.values.userType === "Blanket Use") {
					return dispatch(nextChoiceStep(5));
				}
				dispatch(nextChoiceStep(2));
			} else if (pages === 2) {
				if (Formik.values.boxA === "Owner") {
					return dispatch(nextChoiceStep(4));
				}
				dispatch(nextChoiceStep(3));
			} else if (pages === 3) {
				dispatch(nextChoiceStep(4));
			} else if (pages === 4) {
				if (
					Formik.values.userType === "Single Use" &&
					Formik.values.boxA === "Owner"
				) {
					return dispatch(nextChoiceStep(6));
				}
				dispatch(nextChoiceStep(5));
			} else if (pages === 5) {
				dispatch(nextChoiceStep(6));
			} else if (pages === 6) {
				dispatch(saveFormField(values));
				HandleSubmit(values);
			}
		},
	});

	const formProps = {
		...Formik,
		isLoading,
	};

	useEffect(() => {
		(async function () {
			const response = await (await fetch("/states.json")).json();
			dispatch(getStates(response));
		})();
	}, []);

	if (filled) {
		return (
			<ModalOverlay show={id === AffidavitSlug && filled ? show : null}>
				<Preview />
			</ModalOverlay>
		);
	}
	if (Formik.values.userType === "Single Use") {
		return (
			<ModalOverlay show={id === AffidavitSlug && show}>
				{pages === 1 && <FormOne {...Formik} />}
				{pages === 4 && <FormTwo {...Formik} single />}
				{Formik.values.boxA === "Lessee/Tenant" && pages === 5 && (
					<FormThree {...Formik} single />
				)}
				{pages === 6 && (
					<FormFour
						{...formProps}
						single={Formik.values.boxA === "Owner" ? "owner" : "lessee"}
					/>
				)}
				{pages === 7 && <Preview />}
			</ModalOverlay>
		);
	} else if (Formik.values.userType === "Blanket Use") {
		return (
			<ModalOverlay show={id === AffidavitSlug && show}>
				{pages === 1 && <FormOne {...Formik} />}
				{pages === 5 && <FormFive {...Formik} blanket />}
				{pages === 6 && <FormSix {...formProps} blanket />}
				{pages === 7 && <Preview />}
			</ModalOverlay>
		);
	} else if (Formik.values.userType === "Both") {
		return (
			<ModalOverlay show={id === AffidavitSlug && show}>
				{pages === 1 && <FormOne {...Formik} />}
				{pages === 2 && <FormTwo {...Formik} />}
				{Formik.values.boxA === "Lessee/Tenant" && pages === 3 && (
					<FormThree {...Formik} both />
				)}
				{pages === 4 && (
					<FormFour
						{...Formik}
						both={Formik.values.boxA === "Owner" ? "owner" : "lessee"}
					/>
				)}
				{pages === 5 && <FormFive {...Formik} both />}
				{pages === 6 && <FormSix {...formProps} both />}
				{pages === 7 && <Preview />}
			</ModalOverlay>
		);
	} else {
		return (
			<ModalOverlay show={id === AffidavitSlug && show}>
				{pages === 1 && <FormOne {...Formik} disabled />}
			</ModalOverlay>
		);
	}
};

export default MainAffidavit;
