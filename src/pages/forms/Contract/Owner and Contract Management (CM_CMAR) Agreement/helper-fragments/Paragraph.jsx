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
        <div className="flex flex-row  items-center justify-start space-x-8 mb-6 mt-8">
          <span className="w-[5%] "> {marker} </span>
          <span className="flex-grow">{title}</span>
        </div>
      )}
      {Array.isArray(body) ? (
        body.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row  items-center justify-end mb-8 mt-6"
            >
              <p className="indent-[5%]">{item}</p>
            </div>
          );
        })
      ) : (
        <div className="flex flex-row  items-center justify-end mb-8 mt-6">
          <p className="indent-[5%]">{body}</p>
        </div>
      )}
    </>
  );
}
