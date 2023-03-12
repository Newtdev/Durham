import { DashboardButton } from "../../Dashboard/Components";
import Success from "../../../assets/success.png";
import { useDispatch, useSelector } from "react-redux";
import {
  documentDefault,
  slugIdDefault,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { useReactToPrint } from "react-to-print";
import { closeDownload, savedResponse } from "../reducer";

const DownLoadFillabeForm = ({
  component,
  show,
  name,
  stepDefault,
  close,
  remove,
}) => {
  const dispatch = useDispatch();

  // const formID = useSelector(project_document_id);
  // useFetchFilledFormQuery(formID);
  const content = useSelector(savedResponse);
  const { project } = content || "";

  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: name,
    // bodyClass: "printableArea",
  });

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
            <span>{name}</span> for <span>{!project ? "" : project?.name}</span>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center gap-4 mt-10 pb-8">
          <a href="./DPS_fillable.pdf" download>
            <DashboardButton
              hidden
              name="DOWNLOAD NOW"
              type="button"
              width="w-[360px]"
              onClick={() => {
                // remove()
                // dispatch(closeDownload());
                // handlePrint();
                // dispatch(slugIdDefault());
                // dispatch(stepDefault());
              }}
            />
          </a>

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
