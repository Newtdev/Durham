import "react-datepicker/dist/react-datepicker.css";
import { useRef, useEffect } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import DownLoadForm from "../../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, stepDefault } from "./reducer";
import { useState } from "react";
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import PreviewPages from "./preview-pages/index";
import { getPdf } from "./preview-pages/index";

const Preview = () => {
  const dispatch = useDispatch();
  const downloadComponent = useRef();
  const show = useSelector(openDownload);
  const formID = useSelector(project_document_id);
  const content = useFetchFilledFormQuery(formID);
  const [highlighted, setHighlighed] = useState(false);
  const [showPage, setShowPage] = useState(true);
  const [awardee, setAwardee] = useState([]);
  const form_fields = useSelector(fields);
  let formData = !content?.data ? [] : content?.data?.data;
  const vendors = formData?.vendors;
  const project = formData?.project;
  const durham_profile = formData?.durham_profile;

  const props = {
    component: downloadComponent,
    name: "Owner and Contract Management (CM & CMAR) Agreement",
    show: show ? "block" : "hidden",
    stepDefault: stepDefault,
    getPdf,
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

  //   console.log("FORM: ", pageProps.project);

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
            <div ref={downloadComponent} className="px-20 pt-8 pb-4 text-black">
              <div>
                {<PreviewPages.Page1 {...pageProps} />}
                {showPage && <PreviewPages.Page2 {...pageProps} />}
                {showPage && <PreviewPages.Page3 {...pageProps} />}
                {<PreviewPages.Page4 {...pageProps} />}
                {showPage && <PreviewPages.Page5To21 {...pageProps} />}

                {/* Page 22 */}

                <PreviewPages.Page22 {...pageProps} />

                {/* Page 32 */}

                <PreviewPages.Page32 {...pageProps} />

                {/* Pages 36 to 38 */}

                <PreviewPages.Page36To38 {...pageProps} />

                {/* Page 49 */}
                <PreviewPages.Page49 {...pageProps} />

                {/* Page 51 */}

                <PreviewPages.Page51 {...pageProps} />
              </div>
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
              hidden
              name="CREATE DOCUMENT"
              type="submit"
              width="w-[198px]"
              onClick={() => {
                setShowPage(true);
                setHighlighed(false);

                dispatch(showDownload());
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
