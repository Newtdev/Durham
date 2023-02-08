import Delete from "../../../assets/delete.svg";
// import FormsDownload from "./FormsDownload";
import { DashboardButton } from "../Components";
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

// export default FormsDownload;

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
                <DashboardButton name="DOWNLOAD ALL" width="w-[290px]" />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
