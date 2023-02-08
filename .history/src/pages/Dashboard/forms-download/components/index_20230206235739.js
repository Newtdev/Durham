import { Spinner } from "../../../../assets";
import download from "../../../../assets/download.svg";

const formsDownloadContents = [
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
  {
    id: 6,
    title: "Action (Original)",
    group: "group",
  },
  {
    id: 7,
    title: "Action (Original)",
    group: "group",
  },
  {
    id: 8,
    title: "Action (Original)",
    group: "group",
  },
  {
    id: 9,
    title: "Action (Original)",
    group: "group",
  },
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
    <tbody className="text-x font-medium border-separate border-spacing-2">
      {formsDownloadContents.map((manager, index) => {
        const { id, title, group } = manager;
        return (
          <tr
            key={id}
            className="border border-[#D8E1E4] bg-white rounded-lg h-16"
            style={{
              backgroundColor: index % 2 === 0 ? "#F9FAFB" : "#fff",
              marginBottom: "2rem",
            }}
          >
            <td
              // scope="row"
              className="py-4 px-4 font-normal border-r capitalize text-gray-900 whitespace-nowrap"
            >
              {title}
            </td>
            <td
              // scope="row"
              className="py-4 px-4 pr-8 font-normal border-r capitalize text-gray-900 whitespace-nowrap"
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
  );
}
