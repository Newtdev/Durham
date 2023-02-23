import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page26 = () => {
  return (
    <div
      style={{
        size: "21cm 29.7cm",
        // margin: "0cm 0cm 3cm 0cm;",
        // border: "1px solid black",
        paddingTop: "2.54cm",
        marginBottom: "25cm",
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

      <Footer page={26} />
    </div>
  );
};

export default Page26;
