import { Spinner } from "../../../../assets";
import download from "../../../../assets/download.svg";
import { DashboardButton } from "../../Components";

export function FormsDownloadButton({
  name,
  width,
  hidden,
  type,
  onClick,
  loading,
}) {
  return (
    <button
      disabled={!loading ? false : true}
      onClick={onClick}
      className={`text-white w-[140px] text-xs font-normal hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
      type={type}
    >
      {loading && <Spinner />} {loading ? "Loading..." : name}
      {!hidden && <img src={download} alt="" className="ml-4" />}
    </button>
  );
}

export function TableBody({ onDownload, skip, perPage, dataArray }) {
  return (
    <table
      className=" border-separate [border-spacing: 0 15px] w-full"
      style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}
    >
      <tbody className="w-full text-base font-medium">
        {dataArray.slice(skip, skip + perPage).map((manager, index) => {
          const { id, title, category, downloadLink } = manager;
          return (
            <tr
              key={id}
              className="border border-[#D8E1E4] bg-white rounded-lg h-16 "
            >
              <td
                // scope="row"
                className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap w-[50%]"
              >
                {title}
              </td>
              <td
                // scope="row"
                className="py-4 px-4 font-normal capitalize text-[#693B79] whitespace-nowrap w-[35%]"
              >
                {category}
              </td>
              <td className="py-4 px-4 flex items-center justify-start gap-3">
                <a
                  className="w-4 cursor-pointer"
                  href={`${downloadLink}`}
                  download
                >
                  <span
                  // onClick={() => onDownload(id)}
                  >
                    <FormsDownloadButton name="Download" />
                  </span>
                </a>
              </td>
              {/* <td>
                <button type="submit" >Download</button>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function SuccessModal({ close }) {
  return (
    <article>
      {/* Main modal */}
      <div className="relative w-full max-w-md h-screen md:h-auto mx-auto mt-14">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow pb-4">
          <div className="flex justify-between items-baseline px-6 py-3 rounded-t border-b">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Downloaded Successfully
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
            >
              {/* <Close /> */}
            </button>
          </div>
          <div className="py-3 px-5">
            <p className="text-base text-gray-600">
              Congratulations! You have successfully downloaded.
            </p>
            <p className="text-base text-gray-600">
              CCP Requisition - MODIFIED 4-22-22FM(Original)
            </p>
          </div>

          {/* Buttons */}
          {/* <div className="mt-12 mr-5 flex gap-4 justify-end">
            <DashboardButton
              name="PROCEED"
              hidden
              width="78px"
              onClick={close}
            />
          </div> */}
          {/* <div className="mt-12 mr-5 flex gap-4 justify-end">
            <DashboardButton
              name="GO TO DASHBOARD"
              hidden
              width="78px"
              onClick={close}
            />
          </div> */}
          <div className="mt-8 mr-5 gap-4 flex justify-center items-center border border-[#3B6979]">
            <button className="bg-[#3B6979] text-white text-base py-2 w-full text-center">
              BACK
            </button>
          </div>
          <div className="mt-8 mr-5 gap-4 flex justify-center items-center ">
            <button className="border border-[#3B6979]">GO TO DASHBOARD</button>
          </div>
        </div>
      </div>
    </article>
  );
}
