import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFillProjectDocumentMutation } from "../../../../features/services/api";
// import { handleResultWithArray } from "../../../../shared-component";
import { OwnerContractManagement } from "../../../../shared-component/slug";
import { ModalOverlay } from "../../../../ui";
import { OwnerContractManageMent } from "../../../../yup";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { getStates } from "../../Advertisement-for-bid-template/reducer";
import { modal, saveFormField } from "../../reducer";
import FormFour from "./forms/FormFour";
import FormOne from "./forms/FormOne";
import FormThree from "./forms/FormThree";
import FormTwo from "./forms/FormTwo";
import FormFive from "./forms/FormFive";
import Preview from "./Preview";
import { nextStep, page } from "./reducer";

export const handleResultWithArray = () => {
  const res = {
    agreementDate: "r",
    projectIntent: "f",
    substantialCompletionDate: "g",
    amount: "h",
    percentage: "i",
    substantialAmount: "k",
    finalAmount: "l",
    Name: "m",
    conferenceAddress: "n",
    conferenceState: "o",
    conferenceCity: "p",
    conferenceZipCode: "q",
    flankZip: "ghj",
    ocmpreConstruction: "j",

    projectName: "r",
    location: [
      {
        projectState: "s",
        projectCity: "t",
        projectZipCode: "u",
      },
    ],
    // ocmprocurementAmount: "v",
    // ocmconstructionAmount: "r",
    // ocmcostOfWork: "s",
    // ocmCMContingency: "t",
    // ocmgeneralConditions: "v",
    // ocmfees: "q",
    // ocmpreConstruction: "j",
    // workCost: "g",
    // contingencyCMAmout: "gg",
    // amountForGeneralConditions: "hh",
    // feesAmount: "i",
    // amountOfPreConstruction: "jj",
  };
  let dynamic = [];
  let sum = [];

  if (!res) return null;

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
    sum = [...sum, { field_name: d[0], field_value: d[1] }];

    console.log(sum);

    sum.splice(a, 1);
  });
  console.log({ form_fields: sum, dynamic_inputs: dynamic });
  return { form_fields: sum, dynamic_inputs: dynamic };
};

const OwnerContractorManagementForm = ({ id, filled }) => {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const show = useSelector(modal);

  // const pages = 4;
  const formID = useSelector(project_document_id);

  const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
  // const response = useFetchFilledFormQuery(formID);

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
        dispatch(nextStep(5));
      }
    }
  };

  // const show = useSelector(modal);
  const formik = useFormik({
    initialValues: {
      agreementDate: "",
      projectIntent: "",
      substantialCompletionDate: "",
      amount: "",
      percentage: "",
      substantialAmount: "",
      finalAmount: "",
      Name: "",
      conferenceAddress: "",
      conferenceState: "",
      conferenceCity: "",
      conferenceZipCode: "",
      projectName: "",
      location: [
        {
          projectState: "",
          projectCity: "",
          projectZipCode: "",
        },
      ],
      ocmprocurementAmount: "",
      ocmconstructionAmount: "",
      ocmcostOfWork: "",
      ocmCMContingency: "",
      ocmgeneralConditions: "",
      ocmfees: "",
      ocmpreConstruction: "",
      workCost: "",
      contingencyCMAmout: "",
      amountForGeneralConditions: "",
      feesAmount: "",
      amountOfPreConstruction: "",
    },
    // validationSchema: OwnerContractManageMent,
    onSubmit: (values) => {
      if (pages === 1) {
        dispatch(nextStep(2));
      } else if (pages === 2) {
        dispatch(nextStep(3));
      } else if (pages === 3) {
        dispatch(nextStep(4));
      } else if (pages === 4) {
        console.log(values);
        HandleSubmit(values);
        // dispatch(nextStep(5));
      }
    },
  });

  useEffect(() => {
    (async function () {
      const response = await (await fetch("/states.json")).json();
      dispatch(getStates(response));
    })();
  }, [dispatch]);

  const props = { ...formik, isLoading };

  return (
    <ModalOverlay show={id === OwnerContractManagement && show}>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          {pages === 1 && <FormOne {...formik} />}
          {pages === 2 && <FormTwo {...formik} />}
          {pages === 3 && <FormThree {...formik} />}
          {/* {pages === 4 && <FormFour {...props} />} */}
          {pages === 4 && <FormFive {...props} />}
          {pages === 5 && <Preview />}
        </form>
      </FormikProvider>
    </ModalOverlay>
  );
};
export default OwnerContractorManagementForm;

// import { FormikProvider, useFormik } from "formik";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { useFillProjectDocumentMutation } from "../../../../features/services/api";
// import { OwnerContractManagement } from "../../../../shared-component/slug";
// import { ModalOverlay } from "../../../../ui";
// import { OwnerContractManageMent } from "../../../../yup";
// import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
// import { getStates } from "../../Advertisement-for-bid-template/reducer";
// import { modal, saveFormField } from "../../reducer";
// import FormFour from "./forms/FormFour";
// import FormOne from "./forms/FormOne";
// import FormThree from "./forms/FormThree";
// import FormTwo from "./forms/FormTwo";
// import Preview from "./Preview";
// import { nextStep, page } from "./reducer";

// const OwnerContractorManagementForm = ({ id }) => {
//   const dispatch = useDispatch();
//   const pages = useSelector(page);
//   const show = useSelector(modal);

//   // const pages = 4;
//   const formID = useSelector(project_document_id);

//   const [fillProjectDocument, { isLoading }] = useFillProjectDocumentMutation();
//   // const response = useFetchFilledFormQuery(formID);

//   const HandleSubmit = async (values) => {
//     const param = Object.keys(values);
//     const val = Object.values(values);

//     const response = await fillProjectDocument({
//       project_document_id: formID,
//       form_fields: [
//         { field_name: param[0], field_value: val[0] },
//         { field_name: param[1], field_value: val[1] },
//         { field_name: param[2], field_value: val[2] },
//         { field_name: param[3], field_value: val[3] },
//         { field_name: param[4], field_value: val[4] },
//         { field_name: param[5], field_value: val[5] },
//         { field_name: param[6], field_value: val[6] },
//         { field_name: param[7], field_value: val[7] },
//       ],
//     });
//     if (response) {
//       if (response?.error) {
//         toast.error(response?.message, {
//           position: toast.POSITION.TOP_CENTER,
//         });
//       } else {
//         dispatch(nextStep(5));
//       }
//     }
//   };

//   // const show = useSelector(modal);
//   const formik = useFormik({
//     initialValues: {
//       agreementDate: "",
//       projectIntent: "",
//       substantialCompletionDate: "",
//       amount: "",
//       percentage: "",
//       substantialAmount: "",
//       finalAmount: "",
//       Name: "",
//       conferenceAddress: "",
//       conferenceState: "",
//       conferenceCity: "",
//       conferenceZipCode: "",
//       projectName: "",
//       location: [
//         {
//           projectState: "",
//           projectCity: "",
//           projectZipCode: "",
//         },
//       ],
//       procurementAmount: "",
//       constructionAmount: "",
//       costOfWork: "",
//       CMContingency: "",
//       generalConditions: "",
//       fees: "",
//       preConstruction: "",
//     },
//     // validationSchema: OwnerContractManageMent,
//     onSubmit: (values) => {
//       if (pages === 1) {
//         dispatch(nextStep(2));
//       } else if (pages === 2) {
//         dispatch(nextStep(3));
//       } else if (pages === 3) {
//         dispatch(nextStep(4));
//       } else if (pages === 4) {
//         console.log(values);
//         dispatch(saveFormField(values));
//         HandleSubmit(values);
//       }
//     },
//   });

//   useEffect(() => {
//     (async function () {
//       const response = await (await fetch("/states.json")).json();
//       dispatch(getStates(response));
//     })();
//   }, [dispatch]);

//   const props = { ...formik, isLoading };

//   return (
//     <ModalOverlay show={id === OwnerContractManagement && show}>
//       <FormikProvider value={formik}>
//         <form onSubmit={formik.handleSubmit}>
//           {pages === 1 && <FormOne {...formik} />}
//           {pages === 2 && <FormTwo {...formik} />}
//           {pages === 3 && <FormThree {...formik} />}
//           {pages === 4 && <FormFour {...props} />}
//           {pages === 5 && <Preview />}
//         </form>
//       </FormikProvider>
//     </ModalOverlay>
//   );
// };
// export default OwnerContractorManagementForm;
