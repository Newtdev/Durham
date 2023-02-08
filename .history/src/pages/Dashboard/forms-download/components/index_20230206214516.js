import { Spinner } from "../../../../assets";
import Plus from "../../../../assets/Plus.svg";

const formsDownloadContents = [
  {
    id: 1,
    title: "Form Name",
    group: "group",
  },
  {
    id: 2,
    title: "Form Type",
    group: "group",
  },
  {
    id: 3,
    title: "Form Description",
    group: "group",
  },
  {
    id: 4,
    title: "Form Status",
    group: "group",
  },
  {
    id: 5,
    title: "Form Date",
    group: "group",
  },
  {
    id: 6,
    title: "Action",
    group: "group",
  },
  {
    id: 7,
    title: "Action",
    group: "group",
  },
  {
    id: 8,
    title: "Action",
    group: "group",
  },
  {
    id: 9,
    title: "Action",
    group: "group",
  },
];

export function DashboardButton({
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
      className={`text-white text-sm font-normal 'w-[140px]' hover:bg-blue-800 hover:text-white focus:ring-4 bg-[#3B6979] transition-all focus:outline-none focus:ring-blue-300 hover:border text-center border-[#3B6979] font-bold rounded-md text-sm px-5 py-2.5 flex items-center justify-center `}
      type={type}
    >
      {!hidden && <img src={Plus} alt="" className="mr-4" />}
      {loading && <Spinner />} {loading ? "Loading..." : name}
    </button>
  );
}

export function TableBody({ onDownload }) {
  return (
    <tbody className="text-xs bg-white font-medium">
      {formsDownloadContents.map((manager, index) => {
        const { id, title, group } = manager;
        const strip = index % 2 !== 0 ? "bg-white" : "bg-gray-50";
        return (
          <tr key={id} className={`${strip} border-b`}>
            <th
              scope="row"
              className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap"
            >
              {title}
            </th>
            <th
              scope="row"
              className="py-4 px-4 font-normal capitalize text-gray-900 whitespace-nowrap"
            >
              {group}
            </th>
            <td className="py-4 px-4 flex items-center justify-start gap-3">
              <span
                className="w-4 cursor-pointer"
                // onClick={() => onDownload(id)}
              >
                {/* <img className="w-full" src={Delete} alt="delete" /> */}
                <DashboardButton name="DOWNLOAD ALL" width="w-[140px]" />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
