import React from "react";

const Wrapper = (props) => {
  return (
    <div
      style={{
        margin: "1in 2.3cm 1in 2.3cm",
        paddingTop: "6rem",
        height: "10.2in",
      }}
      className="flex flex-col justify-between "
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
