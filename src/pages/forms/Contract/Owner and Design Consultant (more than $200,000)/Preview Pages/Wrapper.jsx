import React from "react";

const Wrapper = (props) => {
  return (
    <div
      class="flex flex-col justify-between"
      style={{
        height: "10.5in",
        paddingTop: "0.75in",
        margin: "0.5in 72pt 0.5in 72pt",
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
