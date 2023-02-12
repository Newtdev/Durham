export default function ({
  text,
  bold = false,
  underline = false,
  extendClassNamesWith = "",
}) {
  return (
    <div className="w-full  flex flex-row items-center justify-center mb-6 ">
      <h1
        className={
          ` uppercase inline-block min-w-[40%] text-center  ${
            bold ? "font-bold" : "font-normal "
          } ${underline && "  border-b-2 pb-3 border-black  "}
          text-base ` + extendClassNamesWith
        }
      >
        {text}
      </h1>
    </div>
  );
}
