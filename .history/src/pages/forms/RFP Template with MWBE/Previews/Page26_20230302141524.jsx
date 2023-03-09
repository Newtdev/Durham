import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page26 = () => {
  return (
    <div
      style={{
        height: "27cm",
        padding: "1.54cm 0 1.54cm 0",
        // border: "1px solid black",
      }}
    >
      <p class="c23 c203">
        <span class="c47 c126 c45">Dat</span>
        <span class="c130 c126 c117 c80 c45">
          e:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="c47 c126 c45">Name of Authorized Officer:</span>
        <span class="c29 c80 c45 c117">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p class="c23 c275">
        <span class="c47 c126 c45">Signature:</span>
        <span class="c29 c117 c80 c45">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>

      <div className="mt-[52rem]">
        <Footer page={26} />
      </div>
    </div>
  );
};

export default Page26;
