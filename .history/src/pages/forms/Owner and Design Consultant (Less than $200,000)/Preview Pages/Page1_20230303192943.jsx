import React from "react";
import "./OwnerLessPages.css";

const Page1 = (props) => {
  return (
    <div
      style={{
        height: "792px",
        margin: "165.26px 0 165.26px 0",
      }}
    >
      <p class="p2">
        <span class="c38 font-bold" style={{fontSize: "10pt"}}>CONSULTANT SERVICES AGREEMENT</span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class="p1">BETWEEN</span>
        <p class="p20 p12">
          <span class="p1"></span>
        </p>
        <p class="p20 p12">
          <span class="p1"></span>
        </p>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class="c38 font-bold" style={{fontSize: "10pt"}}>
          Durham Public Schools Board of Education
        </span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class="p1">hereinafter referred to as the Owner</span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class="p1">AND</span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class={`c38 ${props?.nottoBeHighlighted}`}>
          {" "}
          {props?.awardee[0]?.company_name}
        </span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class="p1">hereinafter referred to as the Engineer</span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p12">
        <span class="p1"></span>
      </p>
      <p class="p2">
        <span class={`c38 ${props?.nottoBeHighlighted}`}>
          {" "}
          {props?.project?.name}{" "}
        </span>{" "}
      </p>
      <p class="p2 p12">
        <span class="c38"></span>
      </p>
      <p class="p2 p12">
        <span class="c38"></span>
      </p>
      <p class="p2 p12">
        <span class="c38"></span>
      </p>
      <p class="p2 p12">
        <span class="c38"></span>
      </p>
      <p class="p20 p53 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p53 p12">
        <span class="p1"></span>
      </p>
      <hr style={{ pageBreakBefore: "always", display: "none" }} />

      <div
        className="h-[20rem] mb-6 flex items-end"
        style={{ fontFamily: "Arial" }}
      >
        <div>
          <p className="text-[10px]"></p>
          <p className="text-[10px]"></p>
        </div>
        <div className="mx-auto ">
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
