import React from "react";

const Wrapper = (props) => {
  return (
    <div
      className="border border-black"
      style={{ margin: "1in", paddingTop: "4rem", height: "10in" }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
