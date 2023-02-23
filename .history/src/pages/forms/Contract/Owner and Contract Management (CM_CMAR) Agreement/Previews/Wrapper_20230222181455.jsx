import React from "react";

const Wrapper = (props) => {
  return (
    <div
      className="border border-black"
      style={{
        height: "28cm",
        padding: "72pt",
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
