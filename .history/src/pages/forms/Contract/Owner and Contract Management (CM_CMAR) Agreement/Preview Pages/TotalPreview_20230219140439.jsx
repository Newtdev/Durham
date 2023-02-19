import React from "react";
import PreviewPart1 from "./PreviewPart1";
import PreviewPart2 from "./PreviewPart2";
import "./PreviewPages.css";

const TotalPages = () => {
  return (
    <body>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <PreviewPart1 />
        {/* <PreviewPart2 /> */}
      </div>
    </body>
  );
};

export default TotalPages;
