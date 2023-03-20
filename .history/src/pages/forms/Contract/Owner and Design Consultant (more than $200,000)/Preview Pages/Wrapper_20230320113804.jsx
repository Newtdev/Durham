import React from "react";

const Wrapper = (props) => {
  return (
    <div
      className=" flex flex-col justify-between border border-black"
      style={{
        height: "10in",
        margin: "0.5in 72pt 0.5in 72pt",
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
