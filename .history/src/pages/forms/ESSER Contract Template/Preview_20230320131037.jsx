import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../ui";

import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDownload,
  closeModal,
  openDownload,
  showDownload,
} from "../reducer";
import DownLoadForm from "../Lundsford/Download";
import {
  project_document_id,
  selectFilled,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { prevChoiceStep, stepChoiceDefault } from "./reducer";
import PageOne from "./PreviewPages/PageOne";
import PageTwo from "./PreviewPages/PageTwo";
import PageThree from "./PreviewPages/PageThree";
import PageFour from "./PreviewPages/PageFour";
import PageFive from "./PreviewPages/PageFive";
import PageSix from "./PreviewPages/PageSix";
import PageSeven from "./PreviewPages/PageSeven";
import PageEight from "./PreviewPages/PageEight";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const Preview = () => {
  const [highlighted, setHighlighed] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector(openDownload);
  const downloadComponent = useRef();

  const formID = useSelector(project_document_id);

  const [awardee, setAwardee] = useState([]);
  const [showPage, setShow] = useState(false);

  const [a] = UseFetchFilledFormDetails(formID);

  const vendors = a?.data?.vendors;
  const form_fields = a?.data?.form_fields;
  const pageContent = a?.data;
  const nottoBeHighlighted = !highlighted ? "bg-yellow-300" : "bg-white";
  const project = a?.data?.project;

  const props = {
    component: downloadComponent,
    name: "ESSER Contract Template",
    show: !show ? "hidden" : "block",
    stepDefault: stepChoiceDefault,
    close: closeDownload,
    project,
  };

  useEffect(() => {
    if (!vendors) {
      return;
    }
    const data = vendors?.filter(
      (cur) => cur.company_name === form_fields?.addressCopy
    );
    if (data.length < 1) {
      setAwardee(vendors);
    } else {
      setAwardee(data);
    }
  }, [vendors, form_fields]);

  const pageProps = {
    content: pageContent,
    awardee,
    form_fields,
    nottoBeHighlighted,
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
          {" "}
          {/* Header */}
          <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3">
            <div className="ml-6">
              <h3 className="text-lg font-bold text-gray-900">
                ESSER Contract Template
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
              className="bg-white text-black Times-font text-[15.5px]"
              ref={downloadComponent}
              style={{ margin: "1in 0.5in" }}
            >
              <PageOne {...pageProps} />
              <PageTwo {...pageProps} />

              {showPage && <PageThree {...pageProps} />}
              {showPage && <PageFour {...pageProps} />}
              <PageFive {...pageProps} />
              <PageSix {...pageProps} />
              <PageSeven {...pageProps} />
              <PageEight {...pageProps} />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-4 pr-6 pb-4">
            <ButtonWhiteBG
              width="w-[171px]"
              name="Edit document"
              onClick={() => {
                dispatch(prevChoiceStep(2));
                dispatch(selectFilled(false));
              }}
            />
            <DashboardButton
              hidden
              name="CREATE DOCUMENT"
              type="button"
              width="w-[198px]"
              onClick={() => {
                dispatch(showDownload());
                setHighlighed(true);
                setShow(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
