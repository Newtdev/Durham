export default function ({
  items = [],
  noDot = false,
  extendClassNamesWith = "",
}) {
  return (
    <ol className="space-y-1 capitalize text-base">
      {items.map((item, i) => {
        return (
          <li key={i} className="flex flex-row items-center justify-start">
            <span className="w-[5%] ">
              {item.marker ? <span>{item.marker}</span> : i + 1}
              {noDot ? "" : ". "}
            </span>
            <span className="flex-1">{item.title}</span>
          </li>
        );
      })}
    </ol>
  );
}
