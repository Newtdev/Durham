import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page16 = () => {
  return (
    <div
      style={{
        margin: "1in 30pt 1in 60pt",
        paddingTop: "3rem",
        height: "10in",
      }}
      className="border border-black"
    >
      <ol class="c14" start="10">
        <li class="c201 c23 mt-2 flex">
          <span className="mr-4">11.</span>
          <span class="c21">
            <span class="c10">CONFIDENTIAL INFORMATION</span>
            <span class="c66 c45">:</span>
            <span class="c21">
              &nbsp;To the extent permitted by applicable statutes and rules,
              the State will maintain confidential trade secrets that the Vendor
              does not wish disclosed. As a condition to confidential treatment,
              each page containing trade secret information shall be identified
              in boldface at the top and bottom as &ldquo;CONFIDENTIAL&rdquo; by
              the Vendor, with specific trade secret information enclosed in
              boxes or similar indication. Cost information shall not be deemed
              confidential under any circumstances. Regardless of what a Vendor
              may label as a trade secret, the determination whether it is or is
              not entitled to protection will be determined in accordance with
              G.S. 132-1.2. Any material labeled as confidential constitutes a
              representation by the Vendor that it has made a reasonable effort
              in good faith to determine that such material is, in fact, a trade
              secret under G.S. 132-1.2. Vendors are urged and cautioned to
              limit the marking of information as a trade secret or as
              confidential so far as is possible.
            </span>
          </span>
        </li>

        <li class="c201 c23 mt-2 flex">
          <span className="mr-4">13.</span>
          <span class="c21">
            <span class="c10">MISCELLANEOUS</span>
            <span class="c66 c45">:</span>
            <span class="c21">
              &nbsp;Masculine pronouns shall be read to include feminine
              pronouns and the singular of any word or phrase shall be read to
              include the plural and vice versa.
            </span>
          </span>
        </li>

        <li class="c201 c23 mt-2 flex">
          <span className="mr-4">14.</span>
          <span class="c21">
            <span class="c10">COMMUNICATIONS BY VENDORS</span>
            <span class="c66 c45">:</span>
            <span class="c21">
              &nbsp;In submitting its proposal, the Vendor agrees not to discuss
              or otherwise reveal the contents of its proposal to any source,
              government or private, outside of the using or issuing agency
              until after the award of the Contract or cancellation of this RFP.
              All Vendors are forbidden from having any communications with the
              using or issuing agency, or any other representative of Durham
              Public Schools concerning the solicitation, during the evaluation
              of the proposals (i.e., after the public opening of the proposals
              and before the award of the Contract), unless Durham Public
              Schools directly contacts the Vendor(s) for purposes of seeking
              clarification or another reason permitted by the solicitation. A
              Vendor shall not: (a) transmit to the issuing and/or using agency
              any information commenting on the ability or qualifications of any
              other Vendor to provide the advertised good, equipment, commodity;
              (b) identify defects, errors and/or omissions in any other
              Vendor&rsquo;s proposal and/or prices at any time during the
              procurement process; and/or (c) engage in or attempt any other
              communication or conduct that could influence the evaluation
              and/or award of the Contract that is the subject of this RFP.
              Vendors not in compliance with this provision may be disqualified,
              at the option of Durham Public Schools, from the Contract award.
              Only those communications with the using agency or issuing agency
              authorized by this RFP are permitted.
            </span>
          </span>
        </li>

        <li class="c106 c223 c23 li-bullet-14">
          <span class="c10">TABULATIONS</span>
          <span class="c22">
            : Proposal tabulations can be electronically retrieved at the
            Interactive Purchasing System (IPS),{" "}
          </span>
          <span class="c22 c77">
            <a
              class="c78"
              href="https://www.google.com/url?q=https://www.ips.state.nc.us/ips/BidNumberSearch.aspx&amp;sa=D&amp;source=editors&amp;ust=1676889196131347&amp;usg=AOvVaw3E_tEu5GJAi2x_sEJ9Qg9b"
            >
              https://www.ips.state.nc.us/ips/BidNumberSearch.aspx
            </a>
          </span>
          <span class="c21">
            . Click on the IPS BIDS icon, click on Search for Bid, enter the
            proposal number, and then search. Tabulations will normally be
            available at this website not later than one working day after the
            proposal opening. Lengthy or complex tabulations may be summarized,
            with other details not made available on IPS, and requests for
            additional details or information concerning such tabulations cannot
            be honored.
          </span>
        </li>
        <li class="c106 c23 c223 li-bullet-13">
          <span class="c10">
            VENDOR REGISTRATION AND SOLICITATION NOTIFICATION SYSTEM
          </span>
          <span class="c22">
            : Vendor Link NC allows Vendors to electronically register free with
            the State to receive electronic notification of current procurement
            opportunities for goods and services of potential interests to them
            available on the Interactive Purchasing System, as well as
            notifications of status changes to those solicitations. Online
            registration and other purchasing information are available at the
            following website{" "}
          </span>
        </li>
      </ol>

      <Footer page={16} />
    </div>
  );
};

export default Page16;
