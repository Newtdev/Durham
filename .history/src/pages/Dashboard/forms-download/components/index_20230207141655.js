import { Link } from "react-router-dom";
import { Spinner } from "../../../../assets";
import download from "../../../../assets/download.svg";

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
