import React from "react";

const Wrapper = (props) => {
  return (
    <div
      style={{
        margin: "1in 2cm 1in 2cm",
        paddingTop: "6rem",
        height: "10in",
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
