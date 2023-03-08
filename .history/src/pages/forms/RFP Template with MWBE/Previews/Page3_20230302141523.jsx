import React from "react";
import "./PagesStyle.css";
import moment from "moment";
import { Footer } from "./Page1";

const Page3 = (props) => {
  return (
    <div
      style={{
        height: "27cm",
        padding: "0.5cm 0 1cm 0",
        // border: "1px solid black",
      }}
    >
      <p class="c27" id="h.30j0zll">
        <span class="c46">1.0 REQUEST FOR PROPOSAL DOCUMENT</span>
      </p>
      <p class="c27">
        <span class="c30">
          The RFP is comprised of the base RFP document, any attachments, and
          any addenda released before Contract award. All attachments and
          addenda released for this RFP in advance of any Contract award are
          incorporated herein by reference.
        </span>
      </p>
      <p class="c27">
        <span class="c46">1.1 Proposal Questions</span>
      </p>
      <p class="c27">
        <span class="c80 c45">
          Written questions concerning this RFP will be received until{" "}
        </span>
        <span class={`c89  ${props?.nottoBeHighlighted}`}>
          {moment(props?.form_fields?.submissionDate).format("MMMM, D YYYY ")}

          <span className={`inline-block`}>
            at {moment(props?.form_fields?.submissionTime).format("hh:mma")}{" "}
          </span>
        </span>{" "}
        <span class="c89">&nbsp;</span>
        <span class="c80 c45">
          Eastern Standard Time. &nbsp;They must be sent via e-mail to:{" "}
        </span>
        <span class="c45 c70">Dist.Purchasing@dpsnc.net</span>
        <span class="c80 c45">
          &nbsp;please insert &ldquo;Questions for bid{" "}
        </span>
        <span class={`c89 ${props?.nottoBeHighlighted}`}>
          {props?.form_fields?.rfpNumber}
        </span>
        <span class="c89">&nbsp;</span>
        <span class="c80 c45">as the subject for the email. &nbsp;</span>
      </p>
      <p class="c27">
        <span class="c80 c45">
          Durham Public Schools will prepare responses to all written questions
          submitted, and post an addendum to the Interactive Purchasing System
          (IPS){" "}
        </span>
        <span class="c91 c45">
          <a
            class="c78"
            href="https://www.google.com/url?q=https://www.ips.state.nc.us/ips/&amp;sa=D&amp;source=editors&amp;ust=1676889196079801&amp;usg=AOvVaw3s1ZkL_NJT7H_YtqrY7VF8"
          >
            https://www.ips.state.nc.us/ips/
          </a>
        </span>
        <span class="c30">
          &nbsp;oral answers are not binding on Durham Public Schools.
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          Questions received prior to the submission deadline date, Durham
          Public Schools response, and any additional terms deemed necessary by
          Durham Public Schools be posted in the form of an addendum to the
          Interactive Purchasing System (IPS), http://www.ips.state.nc.us, and
          shall become an Addendum to this RFP. No information, instruction or
          advice provided orally or informally by any Durham Public Schools
          personnel, whether made in response to a question or otherwise in
          connection with this RFP, shall be considered authoritative or
          binding. Vendors shall rely only on written material contained in an
          Addendum to this RFP.
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          Vendor contact regarding this RFP with anyone other than DPS employee
          listed above may be grounds for rejection of said Vendor&rsquo;s
          offer.
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          Critical updated information may be included in these Addenda. It is
          important that all Vendors bidding on this RFP periodically check the
          State website for any and all Addenda that may be issued prior to the
          offer opening date.
        </span>
      </p>
      <p class="c27" id="h.1fob9te">
        <span class="c46">
          1.2 NOTICE TO VENDORS REGARDING RFP TERMS AND CONDITIONS
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          It shall be the Vendor&rsquo;s responsibility to read the
          Instructions, the State&rsquo;s terms and conditions, all relevant
          exhibits and attachments, and any other components made a part of this
          RFP, and comply with all requirements and specifications herein.
          &nbsp;Vendors also are responsible for obtaining and complying with
          all Addenda and other changes that may be issued in connection with
          this RFP.
        </span>
      </p>
      <p class="c27">
        <span class="c45 c80">
          If Vendors have questions, issues, or exceptions regarding any term,
          condition, or other component within this RFP, those must be submitted
          as questions in accordance with in the instructions in Section 1.1
          PROPOSAL QUESTIONS. &nbsp;If Durham Public Schools determines that any
          changes will be made as a result of the questions asked, then such
          decisions will be communicated in the form of an RFP addendum.
          &nbsp;Durham Public Schools may also elect to leave open the
          possibility for later negotiation and amendment of specific provisions
          of the Contract that have been addressed during the question and
          answer period. &nbsp;Other than through this process, Durham Public
          Schools rejects and will not be required to evaluate or consider any
          additional or modified terms and conditions submitted with
          Vendor&rsquo;s proposal. &nbsp;This applies to any language appearing
          in or attached to the document as part of the Vendor&rsquo;s proposal
          that purports to vary any terms and conditions or Vendors&rsquo;
          instructions herein or to render the proposal non-binding or subject
          to further negotiation. &nbsp;Vendor&rsquo;s proposal shall constitute
          a firm offer. &nbsp;
        </span>
        <span class="c24">
          By execution and delivery of this RFP Response, the Vendor agrees that
          any additional or modified terms and conditions, whether submitted
          purposely or inadvertently, shall have no force or effect, and will be
          disregarded. &nbsp;Noncompliance with, or any attempt to alter or
          delete, this paragraph shall constitute sufficient grounds to reject
          Vendor&rsquo;s proposal as nonresponsive.
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          If a Vendor desires modification of the terms and conditions of this
          solicitation, it is urged and cautioned to inquire during the question
          period, in accordance with the instructions in this RFP, about whether
          specific language proposed as a modification is acceptable to or will
          be considered by Durham Public Schools. Identification of objections
          or exceptions to Durham Public
        </span>
      </p>
      <Footer page={3} />
    </div>
  );
};

export default Page3;
