import React from "react";
import PreviewPart1 from "./PreviewPart1";
import PreviewPart2 from "./PreviewPart2";
import "./PreviewPages.css";
import PreviewPart3 from "./PreviewPart3";

const TotalPages = () => {
  return (
    <body>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <PreviewPart1 />
        <PreviewPart2 />
        <PreviewPart3 />
      </div>
    </body>
  );
};

export default TotalPages;
