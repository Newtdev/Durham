import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../Lundsford/Download";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";
import Page1 from "./Previews/Page1";
import Page2 from "./Previews/Page2";
import Page3 from "./Previews/Page3";
import Page4 from "./Previews/Page4";
import Page5 from "./Previews/Page5";
import Page7 from "./Previews/Page7";
import Page8 from "./Previews/Page8";
import Page6 from "./Previews/Page6";
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

const Preview = () => {
  const dispatch = useDispatch();
  const downloadComponent = useRef();
  const show = useSelector(openDownload);
  const formID = useSelector(project_document_id);
  const content = useFetchFilledFormQuery(formID);
  const [highlighted, setHighlighed] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [awardee, setAwardee] = useState([]);
  const form_fields = useSelector(fields);
  let formData = !content?.data ? [] : content?.data?.data;
  const vendors = formData?.vendors;
  const project = formData?.project;
  const durham_profile = formData?.durham_profile;

  const props = {
    component: downloadComponent,
    name: "RFP Template with MWBE",
    show: !show ? "hidden" : "block",
    stepDefault,
  };

  const nottoBeHighlighted = !highlighted
    ? "bg-yellow-300 font-bold"
    : "bg-white";

  useEffect(() => {
    if (!vendors) {
      return null;
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
        <div
          className={`${
            !show ? "block" : "hidden"
          } relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14 `}
        >
          {" "}
          {/* Header */}
          <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3 z-50 bg-white ">
            <div className="ml-6">
              <h3 className="text-lg font-bold text-gray-900">
                RFT Template with MWBE
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
                class="c225 doc-content"
                style={{
                  width: "100%",
                  padding: "0pt 60pt 0pt 60pt",
                }}
              >
                <Page1 {...pageProps} />
                <Page2 {...pageProps} />
                <Page3 {...pageProps} />
                <Page4 {...pageProps} />
                <Page5 {...pageProps} />
                {showPage && <Page6 />}
                <Page7 {...pageProps} />
                {showPage && <Page8 />}
                {showPage && <Page9 />}
                {showPage && <Page10 />}
                {showPage && <Page11 />}
                <Page12 {...pageProps} />
                {showPage && <Page13 />}
                {showPage && <Page14 />}
                {showPage && <Page15 />}
                {showPage && <Page16 />}
                {showPage && <Page17 />}
                {showPage && <Page18 />}
                {showPage && <Page19 />}
                {showPage && <Page20 />}
                {showPage && <Page21 />}
                {pageProps?.form_fields?.attachment ? showPage && <Page22 /> : null}
                {showPage && <Page23 />}
                {showPage && <Page24 />}
                {showPage && <Page25 />}
                {showPage && <Page26 />}
                {showPage && <Page27 />}
                {showPage && <Page28 />}
                {showPage && <Page29 />}
                {showPage && <Page30 />}
              </body>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-4 pr-6 pb-4 bg-white">
            <ButtonWhiteBG
              width="w-[171px]"
              name="Edit document"
              onClick={() => dispatch(prevStep(1))}
            />
            <DashboardButton
              onClick={() => {
                dispatch(showDownload());
                setHighlighed(true);
                setShowPage(true);
              }}
              hidden
              name="CREATE DOCUMENT"
              type="button"
              width="w-[198px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
