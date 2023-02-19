import React from "react";
import PreviewPart1 from "./PreviewPart1";
import PreviewPart10 from "./PreviewPart10";
import PreviewPart2 from "./PreviewPart2";
import PreviewPart3 from "./PreviewPart3";
import PreviewPart4 from "./PreviewPart4";
import PreviewPart5 from "./PreviewPart5";
import PreviewPart6 from "./PreviewPart6";
import PreviewPart7 from "./PreviewPart7";
import PreviewPart8 from "./PreviewPart8";
import PreviewPart9 from "./PreviewPart9";
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
        <PreviewPart5 />
        <PreviewPart6 />
        <PreviewPart7 />
        <PreviewPart8 />
        <PreviewPart9 />
        {/* <PreviewPart10 /> */}
      </div>
    </body>
  );
};

export default TotalPreview;
