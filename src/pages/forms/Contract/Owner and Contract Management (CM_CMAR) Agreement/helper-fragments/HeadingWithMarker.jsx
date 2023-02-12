export default function ({
  marker,
  title,
  body,
  bold = false,
  extendClassNamesWith = "",
}) {
  return (
    <>
      {title && (
        <div className="flex flex-row  items-center justify-start mb-8 mt-8">
          <span className="w-[5%] "> {marker} </span>
          <span className="flex-1">{title}</span>
        </div>
      )}

      {body && (
        <div className="flex flex-row  items-center justify-end mb-8 mt-8">
          <span className="w-[95%]">{body}</span>
        </div>
      )}
    </>
  );
}
