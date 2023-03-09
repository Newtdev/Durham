import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page26 = () => {
  return (
    <div
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      className=" flex flex-col justify-between h-full "
    >
      <div>
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
            Name Of Authorized Officer:______________________________________
          </span>
        </p>
        <p className="c47 c45 mt-4">
          <span className="ml-[22rem]">
            Signature:_________________________________________
          </span>
        </p>
      </div>

      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>27</p>
        </div>
      </div>
    </div>
  );
};

export default Page26;
