import { DashboardButton } from "../../Dashboard/Components";
import Success from "../../../assets/success.png";
import { useDispatch, useSelector } from "react-redux";
import {
  documentDefault,
  slugIdDefault,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { useReactToPrint } from "react-to-print";
import { closeDownload, savedResponse } from "../reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { UseFetchFilledFormDetails } from "../../../hooks/useFetchFilled";

const DownLoadFillabeForm = ({
  component,
  show,
  name,
  stepDefault,
  close,
  remove,
}) => {
  const dispatch = useDispatch();

  const formID = useSelector(project_document_id);
  const [a] = UseFetchFilledFormDetails(formID);

  const projectName = a?.data?.project?.name;

  const PDF_FILE_URL = "https://durham-sigma.vercel.app/DPSFillable.pdf";

  const downloadFileAtURL = (url, filename) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("DPSFillable.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "DPSFillable.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <div
      className={`${show} relative w-full max-w-md h-screen md:h-auto mx-auto mt-14`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal content */}
      <div className="relative w-[472px] bg-white rounded-lg shadow py-4 text-center">
        <div className="flex justify-center items-center">
          <img src={Success} alt="Happy people" />
        </div>
        <div className="mx-6 mt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Document Successfully
          </h3>
          <p className="mt-6 text-base text-gray-700">
            Congratulations! You have successfully created the{" "}
            <span>DPS Formal General Conditions - 1-17-20</span> for{" "}
            {/* <span>{!project ? "" : project?.name}</span>. */}
            <span>{projectName}</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center gap-4 mt-10 pb-8">
          <DashboardButton
            hidden
            name="DOWNLOAD NOW"
            type="button"
            width="w-[360px]"
            onClick={() => {
              // dispatch(closeDownload());
              // dispatch(slugIdDefault());
              // dispatch(documentDefault());
              // dispatch(stepDefault());
              // dispatch(close());
              // onButtonClick();
              downloadFileAtURL(
                PDF_FILE_URL,
                "DPS Formal General Conditions.pdf"
              );
            }}
          />

          <button
            onClick={() => {
              dispatch(closeDownload());

              dispatch(slugIdDefault());
              dispatch(documentDefault());
              dispatch(stepDefault());
              dispatch(close());
            }}
            className="flex items-center justify-center uppercase w-[360px] bg-white text-[#3b6979] font-semibold px-4 h-[38px] border border-[#3b6979] rounded hover:bg-[#3b6979] hover:text-white cursor-pointer"
          >
            go to project dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownLoadFillabeForm;
