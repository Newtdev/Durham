import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page4 = (props) => {
  return (
    <div
      style={{
        height: "27cm",
        padding: "1cm 0",
        // border: "1px solid black",
      }}
    >
      <p class="c27">
        <span class="c30">
          Schools terms and conditions in the proposal itself shall not be
          allowed and shall be disregarded or the proposal rejected. &nbsp;
        </span>
      </p>
      <p class="c27">
        <span class="c30">
          Contact with anyone working for or with Durham Public Schools
          regarding this RFP other than the State Contract Specialist named on
          the face page of this RFP in the manner specified by this RFP shall
          constitute grounds for rejection of said Vendor&rsquo;s offer, at the
          State&rsquo;s election.
        </span>
      </p>
      <p class="c23 c12 c197">
        <span class="c21"></span>
      </p>
      <p class="c181 c23" id="h.3znysh7">
        <span class="c51">2.0 PROPOSAL SUBMITTAL</span>
      </p>
      <p class="c208">
        <span class="c21">
          Sealed proposals, subject to the conditions made a part hereof and the
          receipt requirements described below, shall be received at the address
          indicated in the table below, for furnishing and delivering those
          items or services as described herein.
        </span>
      </p>
      <p class="c201 c23 c12">
        <span class="c22 c117 c148 c195"></span>
      </p>
      <a id="t.8a6b2d49e2089f8d5bcdd3a5f14de267729dbb8f"></a>
      <a id="t.2"></a>
      <table class="c108">
        <tr class="c262">
          <td class="c278" colspan="1" rowspan="1">
            <p class="c3 c23">
              <span class="c34">
                Mailing address for delivery of proposal &amp;
              </span>
            </p>
            <p class="c3 c23">
              <span class="c34">Office address for hand-delivery</span>
            </p>
          </td>
        </tr>
        <tr class="c274">
          <td class="c342" colspan="1" rowspan="1">
            <p class="c74 c23">
              <span class="c47 c66 c96">Durham Public Schools</span>
            </p>
            <p class="c23 c12 c74">
              <span class="c47 c66 c96"></span>
            </p>
            <p class="c27">
              <span class={`c89 ${props?.nottoBeHighlighted}`}>
                {props?.form_fields?.rfpNumber}
              </span>
            </p>
            <p class="c74 c23">
              <span class="c53">Purchasing Department</span>
            </p>
            <p class="c74 c23">
              <span class={`c53 ${props?.nottoBeHighlighted}`}>
                {props?.form_fields?.personName}
              </span>
            </p>
            <p class="c74 c23">
              <span class="c53">511 Cleveland Street</span>
            </p>
            <p class="c74 c23">
              <span class="c66">Durham, NC &nbsp;27701</span>
            </p>
          </td>
        </tr>
      </table>
      <p class="c23 c277">
        <span class="c66 c45">IMPORTANT NOTE:</span>
        <span class="c22">
          &nbsp;All proposals shall be delivered to the office address listed
          above or through the Interactive Purchasing System on or before the
          proposal deadline in order to be considered timely, regardless of the
          method of delivery.{" "}
        </span>
        <span class="c10">This is an absolute requirement.</span>
        <span class="c22">
          &nbsp; All risk of late arrival due to unanticipated
          delay&mdash;whether delivered by hand, U.S. Postal Service, courier or
          other delivery service is entirely on the Vendor.{" "}
        </span>
        <span class="c22 c130">
          It is the sole responsibility of the Vendor to have the proposal
          physically in this Office by the specified time and date of opening
        </span>
        <span class="c21">
          . The time of delivery will be marked on each proposal when received,
          and any proposal received after the proposal submission deadline will
          be rejected. Sealed proposals, subject to the conditions made a part
          hereof, will be received at the address indicated in the table in this
          Section, for furnishing and delivering the commodity as described
          herein.
        </span>
      </p>
      <p class="c23 c109">
        <span class="c22">
          Vendors are cautioned that proposals sent via U.S. Mail, including
          Express Mail, may{" "}
        </span>
        <span class="c10">not</span>
        <span class="c22">
          &nbsp;be delivered to the agency&rsquo;s purchasing office on the due
          date in time to meet the proposal deadline. All Vendors are urged to
          take the possibility of delay into account when submitting a proposal.
        </span>
        <span class="c66 c45">&nbsp;</span>
      </p>
      <ol class="c14 lst-kix_list_35-0 start" start="1">
        <li class="c23 c189 c282 li-bullet-0">
          <span class="c22">
            Submit your proposal in a sealed package. &nbsp;Clearly mark each
            package with: (1){" "}
          </span>
          <span class="c22 c130">Vendor name</span>
          <span class="c22">; (2) </span>
          <span class="c22 c130">the RFP</span>
          <span class="c22">&nbsp;</span>
          <span class="c22 c130">number</span>
          <span class="c22">; and (3) </span>
          <span class="c22 c130">the due date</span>
          <span class="c21">
            . Address the package(s) for delivery as shown in the table above.
            If Vendor is submitting more than one (1) proposal, each proposal
            shall be submitted in separate sealed envelopes and marked
            accordingly. &nbsp;For delivery purposes, separate sealed envelopes
            from a single Vendor may be included in the same outer package.
            &nbsp;Proposals are subject to rejection unless submitted with the
            information above included on the outside of the sealed proposal
            package. &nbsp;
          </span>
        </li>
      </ol>
      <p class="c58 c23 c305" id="h.2et92p0">
        <span class="c51">2.1 PROPOSAL CONTENTS</span>
      </p>
      <p class="c23 c179">
        <span class="c22 c80">
          Vendors shall populate all attachments of this RFP that require the
          Vendor to provide information and include an authorized signature
          where requested. Vendor RFP responses shall include the following
          items and those attachments should be arranged in the following order:
        </span>
      </p>
      {/* <ol class="c14 lst-kix_list_24-0 start" start="1">
        <li class="c119 c32 c23 c68 li-bullet-0">
          <span class="c21">Cover Letter</span>
        </li>
        <li class="c119 c32 c23 c68 li-bullet-0">
          <span class="c21">
            Title Page: Include the company name, address, phone number and
            authorized representative along with the Proposal Number.
          </span>
        </li>
        <li class="c119 c32 c23 c68 li-bullet-0">
          <span class="c21">
            Completed and signed version of EXECUTION PAGES, along with the body
            of the RFP, and signed receipt pages of any addenda released in
            conjunction with this RFP (if required to be returned).
          </span>
        </li>
      </ol> */}
      <ol class="c14 lst-kix_list_24-0 start" start="1">
      <li class="c119 c32 c23 c68 li-bullet-0">
          <span class="c21">        {props?.form_fields?.items}
</span>
        </li>
      </ol>
      <Footer page={4} />
    </div>
  );
};

export default Page4;
