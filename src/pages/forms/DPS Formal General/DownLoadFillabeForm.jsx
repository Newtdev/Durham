import { DashboardButton } from "../../Dashboard/Components";
import Success from "../../../assets/success.png";
import { useDispatch, useSelector } from "react-redux";
import {
  documentDefault,
  slugIdDefault,
} from "../../Dashboard/project-dashboard/ReducerSlice";
import { closeDownload } from "../reducer";
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

  const PDF_FILE_URL =
    // "https://durham-sigma.vercel.app/DPSFormalGeneralConditions-1-17-20.pdf";
    // "https://s3.eu-north-1.amazonaws.com/dss.conciestic/Owner%20and%20Design%20Consultant%20%28more%20than%20%24200%2C000%29.pdf?response-content-disposition=attachment&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCWV1LXdlc3QtMyJIMEYCIQCRM8j8ty5jQoAEeRPaG%2B9%2FVbC%2BZm6ARe3y7mG0x9IRwAIhAM6nBBhQDEqoFv7RvSOusGNReRb28xp5LQtxYnsm4x3QKuQCCDMQARoMNTYxMDI3NDg0NDE0IgwP%2BR8%2BFG5idknNfuYqwQKnG95c4e7E0%2B%2B6iMESC1DR78igv8FDoKLbrRpz3%2F3LupQajUE9pW8Zp1Vg4jgc%2BaIk40SvdMm77Kx7LJ3j8ayuhIXnep9VrxBVD1m0SmEErY8WWvXjKIrqaOI30C04sNp%2FQ0ouHDIcRo0dqmhdHwOE13mrHA%2FfN7lXv93RsB%2FdU5kj3hTlBHoFDvABAlqueES96FrlIV09PgqcAdt9hXgZ3sxT1psPwRBWdEZ3tDnOCJCx4c%2FXsN41k9UIizIJwkHtN4U737iorqjerEPdYWDN%2F5KegF5RU7BI%2Bwi0Ts%2FiesypIj0MIYhDhfTT1AU8KD7WXwQ063i20vDm57w2JKmWcsr8WKuE20Rdxz%2FUmFefe8VaB…";
    // "https://asset.cloudinary.com/emmatobiloba/be5c8b9cb6bcd883ca293f91a8a74eb1";
"https://res.cloudinary.com/emmatobiloba/image/upload//fl_attachment:DPS_fillable_w3adoq//v1679949337/DPS_fillable_w3adoq.pdf"    
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

  s3: return (
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
              downloadFileAtURL(
                PDF_FILE_URL,
                "DPSFormalGeneralConditions-1-17-20.pdf"
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
