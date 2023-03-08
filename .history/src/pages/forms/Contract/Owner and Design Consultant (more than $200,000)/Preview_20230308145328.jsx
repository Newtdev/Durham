import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { UseFetchFilledFormDetails } from "../../../../hooks/useFetchFilled";
import { useDispatch, useSelector } from "react-redux";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { closeModal, openDownload, showDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";
import DownLoadForm from "../../Lundsford/Download";
import PageOne from "./Preview Pages/Page1";
import PageTwo from "./Preview Pages/Page2";
import PageThree from "./Preview Pages/Page3";
import PageFour from "./Preview Pages/Page4";
import PageFive from "./Preview Pages/Page5";
import PageSix from "./Preview Pages/Page6";
import PageSeven from "./Preview Pages/Page7";
import PageEight from "./Preview Pages/Page8";
import PageNine from "./Preview Pages/Page9";
import PageTen from "./Preview Pages/Page10";
import PageEleven from "./Preview Pages/Page11";
import PageTwelve from "./Preview Pages/Page12";
import PageThirteen from "./Preview Pages/Page13";
import PageFourteen from "./Preview Pages/Page14";
import PageFifteen from "./Preview Pages/Page15";
import PageSixteen from "./Preview Pages/Page16";
import PageSeventeen from "./Preview Pages/Page17";
import PageEighteen from "./Preview Pages/Page18";
import PageNineteen from "./Preview Pages/Page19";
import PageTwenty from "./Preview Pages/Page20";
import PageTwentyOne from "./Preview Pages/Page21";
import PageTwentyTwo from "./Preview Pages/Page22";
import PageTwentyThree from "./Preview Pages/Page23";
import PageTwentyFour from "./Preview Pages/Page24";
import PageTwentyFive from "./Preview Pages/Page25";
// import PageTwentySix from "./Preview Pages/Page26";
// import PageTwentySeven from "./Preview Pages/Page27";
// import PageTwentyEight from "./Preview Pages/Page28";
// import PageTwentyNine from "./Preview Pages/Page29";
// import PageThirty from "./Preview Pages/Page30";
// import PageThirtyOne from "./Preview Pages/Page31";
// import PageThirtyTwo from "./Preview Pages/Page32";
// import PageThirtyThree from "./Preview Pages/Page33";
// import PageThirtyFour from "./Preview Pages/Page34";
// import PageThirtyFive from "./Preview Pages/Page35";
// import PageThirtySix from "./Preview Pages/Page36";
// import PageThirtySeven from "./Preview Pages/Page37";
// import PageThirtyEight from "./Preview Pages/Page38";
// import PageThirtyNine from "./Preview Pages/Page39";

const Preview = () => {
  const formID = useSelector(project_document_id);
  const dispatch = useDispatch();
  const [awardee, setAwardee] = useState([]);
  const [highlighted, setHighlighed] = useState(false);
  const show = useSelector(openDownload);
  const downloadComponent = useRef();

  const [a] = UseFetchFilledFormDetails(formID);

  const projectDetails = a?.data?.project;
  const form_fields = a?.data?.form_fields;
  const durham_profile = a?.data?.durham_profile;
  const vendors = a?.data?.vendors;

  useEffect(() => {
    if (!vendors) {
      return;
    }
    const data = vendors?.filter((cur) => {
      return cur.role === "Contractor";
    });
    setAwardee(data);
  }, [vendors]);

  const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";

  const props = {
    component: downloadComponent,
    name: "Owner and Design Consultant (more than $200,000)",
    show: !show ? "hidden" : "block",
    stepDefault,
  };

  const pageProps = {
    nottoBeHighlighted,
    awardee,
    form_fields,
    projectDetails,
    durham_profile,
  };

  return (
    <div>
      <DownLoadForm {...props} />

      <div>
        {/* Modal content */}
        <div
          className={`${
            !show ? "block" : "hidden"
          } relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}
        >
          {/* Header */}
          <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
            <div className="ml-6">
              <h3 className="text-lg font-bold text-gray-900">
                Owner and Design Consultant (more than $200,000){" "}
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
              className=" pb-4 text-black calibri-font"
              ref={downloadComponent}
            >
              <PageOne {...pageProps} />
              <PageTwo {...pageProps} />
              <PageThree {...pageProps} />
              <PageFour {...pageProps} />
              <PageFive {...pageProps} />
              <PageSix {...pageProps} />
              <PageSeven {...pageProps} />
              <PageEight {...pageProps} />
              <PageNine {...pageProps} />
              <PageTen {...pageProps} />
              <PageEleven {...pageProps} />
              <PageTwelve {...pageProps} />
              <PageThirteen {...pageProps} />
              <PageFourteen {...pageProps} />
              <PageFifteen {...pageProps} />
              <PageSixteen {...pageProps} />
              <PageSeventeen {...pageProps} />
              <PageEighteen {...pageProps} />
              <PageNineteen {...pageProps} />
              <PageTwenty {...pageProps} />
              <PageTwentyOne {...pageProps} />
              <PageTwentyTwo {...pageProps} />
              <PageTwentyThree {...pageProps} />
              <PageTwentyFour {...pageProps} />
              <PageTwentyFive {...pageProps} />
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
                // setShow(true);
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
