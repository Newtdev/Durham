import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useEffect, useRef, useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import PageOne from "./Preview Pages/Page1";
import PageSix from "./Preview Pages/Page6";
import PageTwo from "./Preview Pages/Page2";
import PageThree from "./Preview Pages/Page3";
import PageFour from "./Preview Pages/Page4";
import PageFive from "./Preview Pages/Page5";
import PageSeven from "./Preview Pages/Page7";
import PageEight from "./Preview Pages/Page8";
import PageNine from "./Preview Pages/Page9";
import PageTen from "./Preview Pages/Page10";
import PageEleven from "./Preview Pages/Page11";
import PageTwelve from "./Preview Pages/Page12";
import PageThirteen from "./Preview Pages/Page13";
import { closeModal, fields, openDownload, showDownload } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../../Lundsford/Download";
import { project_document_id } from "../../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";

const OwnerDesignLessPreview = () => {
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
        <div
          className={`${
            !show ? "block" : "hidden"
          } relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14 `}
        >
          {" "}
          {/* Header */}
          <div className="flex justify-between items-baseline border-b border-b-gray-200 py-3 ">
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
        </div>
      </div>
    </div>
  );
};

export default OwnerDesignLessPreview;
