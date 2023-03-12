import React from "react";

const Wrapper = (props) => {
  return (
    <div
      style={{
        margin: "1in 1.5cm 1in 1.5cm",
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
