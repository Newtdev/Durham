import FormsDownload from "./FormsDownload";

export default FormsDownload;

export function TableBody({ dataArray, onDownload }) {
  return (
    <tbody className="text-xs bg-white font-medium">
      {dataArray?.data?.map((manager, index) => {
        const { id, title, groups } = manager;
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
              {groups}
            </th>
            <td className="py-4 px-4 flex items-center justify-start gap-3">
              <span
                className="w-4 cursor-pointer"
                onClick={() => onDownload(id)}
              >
                <img className="w-full" src={Delete} alt="delete" />
              </span>
              <span
                className="w-4 cursor-pointer"
                onClick={() => onEdit(manager)}
              >
                <img className="w-full" src={Edit} alt="edit" />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
