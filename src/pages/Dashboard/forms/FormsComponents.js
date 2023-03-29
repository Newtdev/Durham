import { Spinner } from "../../../assets";
import download from "../../../assets/download.svg";
import success from "../../../assets/success.svg";

export function FormsDownloadButton({ name, hidden, type, onClick, loading }) {
  return (
    <button
      disabled={!loading ? false : true}
      onClick={onClick}
      className={`text-white w-[140px] hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
      type={type}
    >
      {loading && <Spinner />} {loading ? "Loading..." : name}
      {!hidden && <img src={download} alt="" className="ml-4" />}
    </button>
  );
}

export const downloadFileAtURL = (url, filename) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", filename);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

export function SuccessModal({ close, dashboard, fileName }) {
  return (
    <article>
      {/* Main modal */}
      <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow pb-4 pt-14">
          <div className="flex justify-center items-center ">
            <img src={success} alt="success" />
          </div>
          <div className="flex justify-center items-center px-6 py-3 rounded-t ">
            <h3 className="text-lg font-bold text-gray-900 text-center">
              Download Successful
            </h3>
          </div>
          <div className="py-3 px-5">
            <p className="text-base text-gray-600 text-center">
              Congratulations! You have successfully downloaded. {`${fileName}`}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 mr-5 flex justify-center items-center w-full">
            <button
              className="bg-[#3B6979] text-white text-base py-2 px-[170px] rounded"
              onClick={close}
            >
              BACK
            </button>
          </div>
          <div className="my-4 mr-5 flex justify-center items-center w-full">
            <button
              className="border border-[#3B6979] font-semibold text-[#3B6979] text-base py-2 px-28 rounded"
              onClick={dashboard}
            >
              GO TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Filter({ onChange }) {
  return (
    <div className="flex items-center justify-center">
      <p className="mr-4 font-bold text-gray-700 mt-6">View</p>
      <div className="flex flex-col items-center justify-center h-16 mt-6">
        <select
          onChange={onChange}
          className="inline-flex items-center text-gray-400 bg-white border border-gray-300 rounded px-3 py-1.5 focus:border-[#3B6979] w-full"
        >
          <option value="all">All</option>
          <option value="budgets">Budgets</option>
          <option value="contracts">Contracts</option>
          <option value="mwbe">MWBE</option>
          <option value="procurements">Procurements</option>
          <option value="notice letters">Notice Letters</option>
          <option value="project closeout">Project Closeout</option>
        </select>
      </div>
    </div>
  );
}
