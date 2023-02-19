import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import PreviewPages from "./Preview Pages/PreviewPages";
import DownLoadForm from "../../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
  const show = useSelector(openDownload);
  const dispatch = useDispatch();
  const downloadComponent = useRef();
  const props = {
    component: downloadComponent,
    name: "Owner and Contract Management (CM & CMAR) Agreement",
    show: show ? "block" : "hidden",
    stepDefault: stepDefault,
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
