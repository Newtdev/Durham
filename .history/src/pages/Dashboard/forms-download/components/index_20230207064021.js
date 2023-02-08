import { Spinner } from "../../../../assets";
import download from "../../../../assets/download.svg";
import Pagination from "@mui/material/Pagination";

export const formsDownloadContents = [
  {
    id: 1,
    title: "Form Name (Original)",
    group: "group",
  },
  {
    id: 2,
    title: "Form Type (Original)",
    group: "group",
  },
  {
    id: 3,
    title: "Form Description (Original)",
    group: "group",
  },
  {
    id: 4,
    title: "Form Status (Original)",
    group: "group",
  },
  {
    id: 5,
    title: "Form Date (Original)",
    group: "group",
  },
  // {
  //   id: 6,
  //   title: "Action (Original)",
  //   group: "group",
  // },
  // {
  //   id: 7,
  //   title: "Action (Original)",
  //   group: "group",
  // },
  // {
  //   id: 8,
  //   title: "Action (Original)",
  //   group: "group",
  // },
  // {
  //   id: 9,
  //   title: "Action (Original)",
  //   group: "group",
  // },
];

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

export function TableBody({ onDownload }) {
  return (
    <table
      className="w-full border-separate [border-spacing: 0 15px]"
      style={{ borderCollapse: "separate", borderSpacing: "0 15px" }}
    >
      <tbody className="text-base font-medium ">
        {formsDownloadContents.map((manager, index) => {
          const { id, title, group } = manager;
          return (
            <tr
              key={id}
              className="border border-[#D8E1E4] bg-white rounded-lg h-16"
            >
              <td
                // scope="row"
                className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap"
              >
                {title}
              </td>
              <td
                // scope="row"
                className="py-4 px-4 pr-8 font-normal capitalize text-gray-900 whitespace-nowrap"
              >
                {group}
              </td>
              <td className="py-4 px-4 flex items-center justify-start gap-3">
                <span
                  className="w-4 cursor-pointer"
                  // onClick={() => onDownload(id)}
                >
                  <FormsDownloadButton name="Download" />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function Paginations(props) {
  const { data, page, getPage } = props;

  const handleChange = (e, value) => {
    getPage(value);
  };
  if (data?.last_page === 1 || !data?.data?.last_page) {
    return null;
  }

  return (
    <nav
      className="mb-4 flex justify-center items-center pt-4"
      aria-label="Table navigation"
    >
      <Pagination
        count={data?.data?.last_page}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </nav>
  );
}
