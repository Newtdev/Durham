export default function ({ highlighted = false, extendClassNamesWith = "" }) {
  return ({ children }) => {
    return (
      <span
        className={`${highlighted && "bg-yellow-500"} ${extendClassNamesWith}`}
      >
        {" "}
        {children}{" "}
      </span>
    );
  };
}
