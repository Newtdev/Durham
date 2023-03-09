import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page26 = () => {
  return (
    <div
      style={{
        margin: "1in 30pt 1in 60pt",
        paddingTop: "3rem",
        height: "10in",
      }}
      className="border border-black"
    >
      {/* <p class="c23 c203">
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
      </p> */}
      <p className="c47 c45 ">
        <span>Date:___________________________</span>
        <span>
          Name of Authorized
          Officer:__________________________________________________
        </span>
      </p>
      <p className="c47 c45 ">
        <span className="ml-24">
          Signature:__________________________________________________
        </span>
      </p>

      <div className="mt-[52rem]">
        <Footer page={26} />
      </div>
    </div>
  );
};

export default Page26;
