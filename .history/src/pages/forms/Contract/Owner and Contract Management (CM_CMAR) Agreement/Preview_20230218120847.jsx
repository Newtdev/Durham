import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import PreviewPages from "./Preview Pages/PreviewPages";
import DownLoadForm from "../../Lundsford/Download";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload, showDownload, fields } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
  const show = useSelector(openDownload);
  const dispatch = useDispatch();
  const downloadComponent = useRef();
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
    name: "Owner and Contract Management (CM & CMAR) Agreement",
    show: show ? "block" : "hidden",
    stepDefault: stepDefault,
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
              {<PreviewPages {...pageProps} />}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
