import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState, useEffect } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import DownLoadForm from "../../Lundsford/Download";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload, showDownload, fields } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import "./Previews/CMPagesStyle.css";
import Page1 from "./Previews/Page1";
import Page2 from "./Previews/Page2";
import Page3 from "./Previews/Page3";
import Page4 from "./Previews/Page4";
import Page5 from "./Previews/Page5";
import Page6 from "./Previews/Page6";
import Page7 from "./Previews/Page7";
import Page8 from "./Previews/Page8";
import Page9 from "./Previews/Page9";
import Page10 from "./Previews/Page10";
import Page11 from "./Previews/Page11";
import Page12 from "./Previews/Page12";
import Page13 from "./Previews/Page13";
import Page14 from "./Previews/Page14";
import Page15 from "./Previews/Page15";
import Page16 from "./Previews/Page16";
import Page17 from "./Previews/Page17";
import Page18 from "./Previews/Page18";
import Page19 from "./Previews/Page19";
import Page20 from "./Previews/Page20";
import Page21 from "./Previews/Page21";
import Page22 from "./Previews/Page22";
import Page23 from "./Previews/Page23";
import Page24 from "./Previews/Page24";
import Page25 from "./Previews/Page25";
import Page26 from "./Previews/Page26";
import Page27 from "./Previews/Page27";
import Page28 from "./Previews/Page28";
import Page29 from "./Previews/Page29";
import Page30 from "./Previews/Page30";
import Page31 from "./Previews/Page31";
import Page32 from "./Previews/Page32";
import Page33 from "./Previews/Page33";
import Page34 from "./Previews/Page34";
import Page35 from "./Previews/Page35";
import Page36 from "./Previews/Page36";
import Page37 from "./Previews/Page37";
import Page38 from "./Previews/Page38";
import Page39 from "./Previews/Page39";
import Page40 from "./Previews/Page40";
import Page41 from "./Previews/Page41";
import Page42 from "./Previews/Page42";
import Page43 from "./Previews/Page43";
import Page44 from "./Previews/Page44";
import Page45 from "./Previews/Page45";
import Page46 from "./Previews/Page46";
import Page47 from "./Previews/Page47";
import Page48 from "./Previews/Page48";
import Page49 from "./Previews/Page49";
import Page50 from "./Previews/Page50";
import Page51 from "./Previews/Page51";

const Preview = () => {
  const show = useSelector(openDownload);
  const dispatch = useDispatch();
  const downloadComponent = useRef();
  const formID = useSelector(project_document_id);
  const content = useFetchFilledFormQuery(formID);
  const [highlighted, setHighlighed] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [awardee, setAwardee] = useState([]);

  const [a] = UseFetchFilledFormDetails(formID);

  const project = a?.data?.project;
  const form_fields = a?.data?.form_fields;
  const durham_profile = a?.data?.durham_profile;
  const vendors = a?.data?.vendors;

  // const form_fields = useSelector(fields);
  // let formData = !content?.data ? [] : content?.data?.data;
  // const vendors = formData?.vendors;
  // const project = formData?.project;
  // const durham_profile = formData?.durham_profile;

  const props = {
    component: downloadComponent,
    name: "Owner and Contract Management (CM & CMAR) Agreement",
    show: show ? "block" : "hidden",
    stepDefault: stepDefault,
  };

  const nottoBeHighlighted = !highlighted
    ? "bg-yellow-300 font-bold"
    : "bg-white";

  useEffect(() => {
    if (!vendors) {
      return;
    }
    const data = vendors?.filter((cur) => {
      return cur.role === "Design Consultant";
    });
    setAwardee(data);
  }, [vendors]);

  const pageProps = {
    nottoBeHighlighted,
    awardee,
    form_fields,
    project,
    durham_profile,
  };

  console.log(pageProps);

  return (
    <div>
      <DownLoadForm {...props} />

      <div>
        {/* Modal content */}
        <div
          className={`${
            show ? "hidden" : "block"
          } relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}
        >
          {/* Header */}
          <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
            <div className="ml-6">
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Contract Management (CM_CMAR) Agreement
              </h3>
              <p className="text-base text-gray-700">Preview Document</p>
            </div>

            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
              data-modal-toggle="small-modal"
            >
              <Close />
            </button>
          </div>
          <div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
            <div
              className="bg-white -mt-4  pb-4 text-black arial-font text-[14.5px] leading-[1.3]"
              ref={downloadComponent}
            >
              <body
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  padding: "0",
                  lineHeight: "1.3",
                }}
              >
                <Page1 {...pageProps} />
                <Page2 {...pageProps} />
                <Page3 {...pageProps} />
                <Page4 {...pageProps} />
                <Page5 {...pageProps} />
                <Page6 {...pageProps} />
                <Page7 {...pageProps} />
                <Page8 {...pageProps} />
                <Page9 {...pageProps} />
                <Page10 {...pageProps} />
                <Page11 {...pageProps} />
                <Page12 {...pageProps} />
                <Page13 {...pageProps} />
                <Page14 {...pageProps} />
                <Page15 {...pageProps} />
                <Page16 {...pageProps} />
                <Page17 {...pageProps} />
                <Page18 {...pageProps} />
                <Page19 {...pageProps} />
                <Page20 {...pageProps} />
                <Page21 {...pageProps} />
                <Page22 {...pageProps} />
                <Page23 {...pageProps} />
                <Page24 {...pageProps} />
                <Page25 {...pageProps} />
                <Page26 {...pageProps} />
                <Page27 {...pageProps} />
                <Page28 {...pageProps} />
                <Page29 {...pageProps} />
                <Page30 {...pageProps} />
                <Page31 {...pageProps} />
                <Page32 {...pageProps} />
                <Page33 {...pageProps} />
                <Page34 {...pageProps} />
                <Page35 {...pageProps} />
                <Page36 {...pageProps} />
                <Page37 {...pageProps} />
                <Page38 {...pageProps} />
                <Page39 {...pageProps} />
                <Page40 {...pageProps} />
                <Page41 {...pageProps} />
                <Page42 {...pageProps} />
                <Page43 {...pageProps} />
                <Page44 {...pageProps} />
                <Page45 {...pageProps} />
                <Page46 {...pageProps} />
                <Page47 {...pageProps} />
                <Page48 {...pageProps} />
                <Page49 {...pageProps} />
                <Page50 {...pageProps} />
                <Page51 {...pageProps} />
              </body>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pr-6 pb-4">
            <ButtonWhiteBG
              width="w-[171px]"
              name="Edit document"
              onClick={() => dispatch(prevStep(4))}
            />
            <DashboardButton
              onClick={() => {
                dispatch(showDownload());
                setHighlighed(true);
                setShowPage(true);
              }}
              hidden
              name="CREATE DOCUMENT"
              type="submit"
              width="w-[198px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

// import "react-datepicker/dist/react-datepicker.css";
// import { useRef, useState, useEffect } from "react";
// import { ButtonWhiteBG } from "../../../../ui";
// import { Close, DashboardButton } from "../../../Dashboard/Components";
// import DownLoadForm from "../../Lundsford/Download";
// import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
// import { useFetchFilledFormQuery } from "../../../../features/services/api";
// import { useDispatch, useSelector } from "react-redux";
// import { closeModal, openDownload, showDownload, fields } from "../../reducer";
// import { prevStep, stepDefault } from "./reducer";
// import "./Previews/CMPagesStyle.css";
// import Page1 from "./Previews/Page1";
// import Page2 from "./Previews/Page2";
// import Page3 from "./Previews/Page3";
// import Page4 from "./Previews/Page4";
// import Page5 from "./Previews/Page5";
// import Page6 from "./Previews/Page6";
// import Page7 from "./Previews/Page7";
// import Page8 from "./Previews/Page8";
// import Page9 from "./Previews/Page9";
// import Page10 from "./Previews/Page10";
// import Page11 from "./Previews/Page11";
// import Page12 from "./Previews/Page12";
// import Page13 from "./Previews/Page13";
// import Page14 from "./Previews/Page14";
// import Page15 from "./Previews/Page15";
// import Page16 from "./Previews/Page16";
// import Page17 from "./Previews/Page17";
// import Page18 from "./Previews/Page18";
// import Page19 from "./Previews/Page19";
// import Page20 from "./Previews/Page20";
// import Page21 from "./Previews/Page21";
// import Page22 from "./Previews/Page22";
// import Page23 from "./Previews/Page23";
// import Page24 from "./Previews/Page24";
// import Page25 from "./Previews/Page25";
// import Page26 from "./Previews/Page26";
// import Page27 from "./Previews/Page27";
// import Page28 from "./Previews/Page28";
// import Page29 from "./Previews/Page29";
// import Page30 from "./Previews/Page30";
// import Page31 from "./Previews/Page31";
// import Page32 from "./Previews/Page32";
// import Page33 from "./Previews/Page33";
// import Page34 from "./Previews/Page34";
// import Page35 from "./Previews/Page35";
// import Page36 from "./Previews/Page36";
// import Page37 from "./Previews/Page37";
// import Page38 from "./Previews/Page38";
// import Page39 from "./Previews/Page39";
// import Page40 from "./Previews/Page40";
// import Page41 from "./Previews/Page41";
// import Page42 from "./Previews/Page42";
// import Page43 from "./Previews/Page43";
// import Page44 from "./Previews/Page44";
// import Page45 from "./Previews/Page45";
// import Page46 from "./Previews/Page46";
// import Page47 from "./Previews/Page47";
// import Page48 from "./Previews/Page48";
// import Page49 from "./Previews/Page49";
// import Page50 from "./Previews/Page50";
// import Page51 from "./Previews/Page51";

// const Preview = () => {
//   const show = useSelector(openDownload);
//   const dispatch = useDispatch();
//   const downloadComponent = useRef();
//   const formID = useSelector(project_document_id);
//   const content = useFetchFilledFormQuery(formID);
//   const [highlighted, setHighlighed] = useState(false);
//   const [showPage, setShowPage] = useState(false);
//   const [awardee, setAwardee] = useState([]);
//   const form_fields = useSelector(fields);
//   let formData = !content?.data ? [] : content?.data?.data;
//   const vendors = formData?.vendors;
//   const project = formData?.project;
//   const durham_profile = formData?.durham_profile;

//   const props = {
//     component: downloadComponent,
//     name: "Owner and Contract Management (CM & CMAR) Agreement",
//     show: show ? "block" : "hidden",
//     stepDefault: stepDefault,
//   };

//   const nottoBeHighlighted = !highlighted
//     ? "bg-yellow-300 font-bold"
//     : "bg-white";

//   useEffect(() => {
//     if (!vendors) {
//       return;
//     }
//     const data = vendors?.filter((cur) => {
//       return cur.role === "Design Consultant";
//     });
//     setAwardee(data);
//   }, [vendors]);

//   const pageProps = {
//     nottoBeHighlighted,
//     awardee,
//     form_fields,
//     project,
//     durham_profile,
//   };

//   console.log(pageProps);

//   return (
//     <div>
//       <DownLoadForm {...props} />

//       <div>
//         {/* Modal content */}
//         <div
//           className={`${
//             show ? "hidden" : "block"
//           } relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}
//         >
//           {/* Header */}
//           <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
//             <div className="ml-6">
//               <h3 className="text-lg font-bold text-gray-900">
//                 Owner and Contract Management (CM_CMAR) Agreement
//               </h3>
//               <p className="text-base text-gray-700">Preview Document</p>
//             </div>

//             <button
//               onClick={() => dispatch(closeModal())}
//               type="button"
//               className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6"
//               data-modal-toggle="small-modal"
//             >
//               <Close />
//             </button>
//           </div>
//           <div className="overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]">
//             <div
//               className="bg-white -mt-4  pb-4 text-black arial-font text-[14.5px] leading-[1.3]"
//               ref={downloadComponent}
//             >
//               <body
//                 style={{
//                   width: "100%",
//                   backgroundColor: "#ffffff",
//                   padding: "0",
//                   lineHeight: "1.3",
//                 }}
//               >
//                 <Page1 {...pageProps} />
//                 <Page2 {...pageProps} />
//                 <Page3 {...pageProps} />
//                 <Page4 {...pageProps} />
//                 <Page5 {...pageProps} />
//                 <Page6 {...pageProps} />
//                 <Page7 {...pageProps} />
//                 <Page8 {...pageProps} />
//                 <Page9 {...pageProps} />
//                 <Page10 {...pageProps} />
//                 <Page11 {...pageProps} />
//                 <Page12 {...pageProps} />
//                 <Page13 {...pageProps} />
//                 <Page14 {...pageProps} />
//                 <Page15 {...pageProps} />
//                 <Page16 {...pageProps} />
//                 <Page17 {...pageProps} />
//                 <Page18 {...pageProps} />
//                 <Page19 {...pageProps} />
//                 <Page20 {...pageProps} />
//                 <Page21 {...pageProps} />
//                 <Page22 {...pageProps} />
//                 <Page23 {...pageProps} />
//                 <Page24 {...pageProps} />
//                 <Page25 {...pageProps} />
//                 <Page26 {...pageProps} />
//                 <Page27 {...pageProps} />
//                 <Page28 {...pageProps} />
//                 <Page29 {...pageProps} />
//                 <Page30 {...pageProps} />
//                 <Page31 {...pageProps} />
//                 <Page32 {...pageProps} />
//                 <Page33 {...pageProps} />
//                 <Page34 {...pageProps} />
//                 <Page35 {...pageProps} />
//                 <Page36 {...pageProps} />
//                 <Page37 {...pageProps} />
//                 <Page38 {...pageProps} />
//                 <Page39 {...pageProps} />
//                 <Page40 {...pageProps} />
//                 <Page41 {...pageProps} />
//                 <Page42 {...pageProps} />
//                 <Page43 {...pageProps} />
//                 <Page44 {...pageProps} />
//                 <Page45 {...pageProps} />
//                 <Page46 {...pageProps} />
//                 <Page47 {...pageProps} />
//                 <Page48 {...pageProps} />
//                 <Page49 {...pageProps} />
//                 <Page50 {...pageProps} />
//                 <Page51 {...pageProps} />
//               </body>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-4 pr-6 pb-4">
//             <ButtonWhiteBG
//               width="w-[171px]"
//               name="Edit document"
//               onClick={() => dispatch(prevStep(4))}
//             />
//             <DashboardButton
//               onClick={() => {
//                 dispatch(showDownload());
//                 setHighlighed(true);
//                 setShowPage(true);
//               }}
//               hidden
//               name="CREATE DOCUMENT"
//               type="submit"
//               width="w-[198px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preview;
