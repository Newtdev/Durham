import Delete from "../../../../assets/images/delete.svg";
import FormsDownload from "./FormsDownload";
import { formsDownloadContent } from "./formsDownloadComponents";

export default FormsDownload;

export function TableBody({ onDownload }) {
  return (
    <tbody className="text-xs bg-white font-medium">
      {formsDownloadContent.map((manager, index) => {
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
                <img className="w-full" src={Delete} alt="delete" />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
