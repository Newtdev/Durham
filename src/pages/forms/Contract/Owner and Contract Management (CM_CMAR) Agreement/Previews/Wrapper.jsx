import React from "react";

const Wrapper = (props) => {
  return (
    <div style={{ margin: "1in", paddingTop: "6rem", height: "10in" }}>
      {props.children}
    </div>
  );
};

export default Wrapper;
