import React from "react";
import PreviewPart1 from "./PreviewPart1";
import PreviewPart2 from "./PreviewPart2";
import PreviewPart3 from "./PreviewPart3";
import PreviewPart4 from "./PreviewPart4";
import PreviewPart5 from "./PreviewPart5";
import "./TotalPreview.css";

const TotalPreview = () => {
  return (
    <body>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <PreviewPart1 />
        <PreviewPart2 />
        <PreviewPart3 />
        <PreviewPart4 />
        {/* <PreviewPart5 /> */}
      </div>
    </body>
  );
};

export default TotalPreview;
