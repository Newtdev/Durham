import "react-datepicker/dist/react-datepicker.css";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../features/services/api";
import { RFPTemplateWithMWBESlug } from "../../../shared-component/slug";
import { ModalOverlay } from "../../../ui";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../reducer";
import FormOne from "./Forms/FormsOne";
import FormTwo from "./Forms/FormsTwo";
import FormThree from "./Forms/FormsThree";
import { nextStep, page } from "./reducer";
import Preview from "./Preview";
// import { RFPTemplatewithMWBESchema } from "../../../yup";
// import { handleResultWithArray } from "../../../shared-component";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

export const handleResultWithArray = (res) => {
  let dynamic = [];
  let sum = [];

  if (!res) return null;

  // Reconstructure

  // const araryItem = Object.entries(res)?.reduce(
  // 	(acc, curr) => {
  // 		if (Array.isArray(curr[1])) {
  // 			return acc.arr.push({
  // 				// 						section: d[0],
  // 				// 						field_name: `${cur}${[ind]}`,
  // 				// 						field_value: Object.values(curs)[index],
  // 			});
  // 		} else {
  // 			// return acc.normal.push(curr);
  // 		}
  // 	},
  // 	{ arr: [], normal: [] }
  // );
  // console.log(araryItem);

  const a = Object.entries(res).findIndex((a) => Array.isArray(a[1]));

  Object.entries(res).forEach((d, i) => {
    if (Array.isArray(d[1])) {
      d[1].forEach((curs, ind) => {
        Object.keys(curs).forEach((cur, index) => {
          dynamic = [
            ...dynamic,
            {
              section: d[0],
              field_name: `${cur}${[ind]}`,
              field_value: Object.values(curs)[index],
            },
          ];
        });
      });
    }
    console.log(dynamic);
    console.log("submitted");
    sum = [...sum, { field_name: d[0], field_value: d[1] }];

    sum.splice(a, 1);
  });
  return { form_fields: sum, dynamic_inputs: dynamic };
};

const RFPTemplate = ({ id }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  const [a] = UseFetchFilledFormDetails(formID);

  const HandleSubmit = async (values) => {
    const response = await fillProjectDocument({
      project_document_id: formID,
      form_fields: handleResultWithArray(values).form_fields,
      dynamic_inputs: handleResultWithArray(values).dynamic_inputs,
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
      proposalScope: "",
      validityPeriod: "",
      attachment: "",
      // items: "",
      items: [
        {
          item: "",
        },
      ],
    },
    // validationSchema: RFPTemplatewithMWBESchema,
    onSubmit: (values) => {
      if (pages === 1) {
        // dispatch(saveFormField(values));
        dispatch(nextStep(2));
      } else if (pages === 2) {
        // dispatch(saveFormField(values));
        dispatch(nextStep(3));
      } else if (pages === 3) {
        // dispatch(saveFormField(values));
        HandleSubmit(values);
      }
    },
  });

  useEffect(() => {
    (async function () {
      const response = await (await fetch("/states.json")).json();
      dispatch(getStates(response));
    })();

    if (!a?.data?.form_fields) {
      return;
    }
    formik.setValues({
      bidderName: a?.data?.form_fields?.bidderName,
      rfpNumber: a?.data?.form_fields?.rfpNumber,
      personName: a?.data?.form_fields?.personName,
      contractType: a?.data?.form_fields?.contractType,

      // issueDate: a?.data?.form_fields?.issueDate,
      // proposalDate: a?.data?.form_fields?.proposalDate,
      // submissionDate: a?.data?.form_fields?.submissionDate,
      // answerDate: a?.data?.form_fields?.answerDate,
      // bidOpeningDate: a?.data?.form_fields?.bidOpeningDate,
      // proposalSubmissionDate: a?.data?.form_fields?.proposalSubmissionDate,

      // proposalTime: a?.data?.form_fields?.proposalTime,
      // submissionTime: a?.data?.form_fields?.submissionTime,
      // answerTime: a?.data?.form_fields?.answerTime,
      // bidOpeningTime: a?.data?.form_fields?.bidOpeningTime,
      // proposalSubmissionTime: a?.data?.form_fields?.proposalSubmissionTime,

      street: a?.data?.form_fields?.street,
      state: a?.data?.form_fields?.state,
      city: a?.data?.form_fields?.city,
      zipCode: a?.data?.form_fields?.zipCode,

      // date: a?.data?.form_fields?.date,
      // time: a?.data?.form_fields?.time,

      prototypeNotUtilized: a?.data?.form_fields?.prototypeNotUtilized,
      proposalScope: a?.data?.form_fields?.proposalScope,
      validityPeriod: a?.data?.form_fields?.validityPeriod,
      // items: {
      //   item: a?.data?.form_fields?.items?.item,
      // },
      attachment: a?.data?.form_fields?.attachment,
    });
  }, [dispatch, a]);

  const props = { ...formik, isLoading };

  return (
    <ModalOverlay show={id === RFPTemplateWithMWBESlug && show}>
      <FormikProvider value={formik}>
        {pages === 1 && <FormOne {...formik} />}
        {pages === 2 && <FormTwo {...formik} />}
        {pages === 3 && <FormThree {...props} />}
        {pages === 4 && <Preview />}
      </FormikProvider>
    </ModalOverlay>
  );
};

export default RFPTemplate;
