import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { closeModal, fields, openDownload, showDownload } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../Lundsford/Download";
import {
  project_document_id,
  selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";
import Page1 from "./Preview Pages/Page1";

import Page2 from "./Preview Pages/Page2";
import Page3 from "./Preview Pages/Page3";
import Page4 from "./Preview Pages/Page4";
import Page5 from "./Preview Pages/Page5";
import Page6 from "./Preview Pages/Page6";
import Page7 from "./Preview Pages/Page7";
import Page8 from "./Preview Pages/Page8";
import Page9 from "./Preview Pages/Page9";
import Page10 from "./Preview Pages/Page10";
import Page11 from "./Preview Pages/Page11";
import Page12 from "./Preview Pages/Page12";
import Page13 from "./Preview Pages/Page13";

import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const Preview = () => {
  const dispatch = useDispatch();
  const downloadComponent = useRef();
  const show = useSelector(openDownload);
  const formID = useSelector(project_document_id);
  const [highlighted, setHighlighed] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [awardee, setAwardee] = useState([]);

  const [a] = UseFetchFilledFormDetails(formID);

  // console.log(a);
  const vendors = a?.data?.vendors || [];
  const project = a?.data?.project || {};
  const form_fields = a?.data?.form_fields || {};
  // const pageContent = a?.data || {};
  const durham_profile = a?.data?.durham_profile || {};

  const props = {
    component: downloadComponent,
    name: "Owner and Design Consultant (less than $200,000)",
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
      return (
        cur.role === "Design Consultant" ||
        cur.role === "Engineering Consultant"
      );
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
                Owner and Design Consultant (less than $200,000)
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
                class="doc-content"
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  padding: "0",
                }}
              >
                <Page1 {...pageProps} />
                <Page2 {...pageProps} />
                {showPage && <Page3 />}
                {showPage && <Page4 />}
                {showPage && <Page5 />}
                {showPage && <Page6 />}
                {showPage && <Page7 />}
                {showPage && <Page8 />}
                <Page9 {...pageProps} />
                <Page10 {...pageProps} />
                {showPage && <Page11 />}
                {showPage && <Page12 />}
                <Page13 {...pageProps} />
              </body>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-4 pr-6 pb-4 bg-white">
            <ButtonWhiteBG
              width="w-[171px]"
              name="Edit document"
              onClick={() => {
                dispatch(selectFilled(false));
                dispatch(prevStep(1));
              }}
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
