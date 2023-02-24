import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";
import image3 from "../images/image3.jpg";

const Page30 = () => {
  return (
    <div
      style={{
        height: "27cm",
        padding: "1.54cm 0",
        // border: "1px solid black",
      }}
    >
      <a id="id.2u6wntf"></a>
      <p class="c133">
        <span class="c37">State of North Carolina --AFFIDAVIT B&mdash;</span>
      </p>
      <p class="c133">
        <span class="c98 c202">Intent </span>
        <span class="c98 c192">to Perform Contract with </span>
        <span class="c130 c192 c98">Own</span>
        <span class="c92 c81 c80">&nbsp;Workforce.</span>
      </p>
      <h2 class="c289 c128">
        <span class="c73">County of </span>
        <span class="c29">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </h2>
      <p class="c23 c187">
        <span class="c47 c22">Affidavit of</span>
        <span class="c22 c130 c117 c80">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p class="c260">
        <span class="c81 c83 c80 c107">(Name of Bidder)</span>
      </p>
      <p class="c23 c237">
        <span class="c47 c22">
          I hereby certify that it is our intent to perform 100% of the work
          required for the{" "}
        </span>
        <span class="c22 c130 c117 c80">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p class="c90 c23 c12">
        <span class="c47 c65"></span>
      </p>
      <p class="c23 c193">
        <span class="c22 c130 c117 c80">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="c47 c22">contract.</span>
      </p>
      <p class="c276">
        <span class="c81 c83 c80 c107">(Name of Project)</span>
      </p>
      <p class="c23 c12 c245">
        <span class="c47 c257 c152 c140"></span>
      </p>
      <p class="c127 c23 c330">
        <span class="c47 c22">
          In making this certification, the Bidder states that the Bidder does
          not customarily subcontract elements of this type project, and
          normally performs and has the capability to perform and will perform{" "}
        </span>
        <span class="c22 c130 c117 c80">all</span>
        <span class="c47 c22">&nbsp;</span>
        <span class="c22 c130 c117 c80">elements of the work</span>
        <span class="c47 c22">
          &nbsp;on this project with his/her own current work forces; and
        </span>
      </p>
      <p class="c291 c23 c12">
        <span class="c47 c152 c140 c257"></span>
      </p>
      <p class="c23 c154">
        <span class="c47 c22">
          The Bidder agrees to provide any additional information or
          documentation requested by the owner in support of the above
          statement. The Bidder agrees to make a Good Faith Effort to utilize
          minority suppliers where possible.
        </span>
      </p>
      <p class="c127 c23 c12">
        <span class="c47 c152 c140 c204"></span>
      </p>
      <p class="c90 c23 c12">
        <span class="c47 c152 c140 c107"></span>
      </p>
      <p class="c23 c329">
        <span class="c47 c22">
          The undersigned hereby certifies that he or she has read this
          certification and is authorized to bind the Bidder to the commitments
          herein contained.
        </span>
      </p>
      <p class="c23 c12 c36">
        <span class="c47 c152 c140 c204"></span>
      </p>
      <p class="c127 c23 c12">
        <span class="c47 c152 c140 c204"></span>
      </p>
      <p class="c100 c266 c23">
        <span class="c47 c22">
          I do certify the attached documentation as true and accurate
          representation of my good faith efforts
        </span>
      </p>
      <p class="c100 c23">
        <span class="c22 c121 c148 c156">
          Date_________________________ &nbsp; Name of Authorized
          Officer____________________________________
        </span>
      </p>
      <p class="c120 c23 c12">
        <span class="c69 c22"></span>
      </p>
      <p class="c120 c23">
        <span class="c22 c69">Title:________________________ Signature</span>
        <span class="c69 c73 c45">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="c29 c121 c183 c45">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p class="c102 c23 c12">
        <span class="c47 c22"></span>
      </p>
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <img
            alt=""
            src={image3}
            style={{
              width: "96.53px",
              height: "84.4px",
              marginLeft: "0px",
              marginTop: "0px",
              transform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
          <div className="ml-4">
            <p>
              <span>
                State &nbsp; &nbsp; &nbsp; &nbsp; of &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;North &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Carolina, &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;County &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;of ______________ <br></br>Subscribed and sworn to before
                me this
              </span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>day of _____________20</span>
              <span class="c29 c45 c230">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </p>{" "}
            <p className="mt-4">
              <span>Notary Public</span>
              <span>________________________</span>
              <span>&nbsp;</span>
              <br></br>
              <span>My commission expires </span>
              <span>________________</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[13rem]">
        <Footer page={30} />
      </div>
    </div>
  );
};

export default Page30;
