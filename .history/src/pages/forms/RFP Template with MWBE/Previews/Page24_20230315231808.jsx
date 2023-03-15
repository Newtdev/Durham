import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page24 = () => {
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
        <hr style={{ pageBreakBefore: "always", display: "none" }} />
        <h4 class="c129 c23 c128">
          <span class="c51">NON-APPROPRIATION/CANCELLATION</span>
        </h4>
        <p class="c15 c12">
          <span class="c2"></span>
        </p>
        <p
          class="c15 "
          style={{
            fontFamily: "calibri",
            fontSize: "11pt",
            lineHeight: "1.15",
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lessee&rsquo;s
            operations are funded under appropriations or budgetary approvals
            made by{" "}
          </span>
          <span class="c130">Durham Public Schools</span>
          <span class="c2">
            , on a fiscal year basis. &nbsp;For the fiscal year, Lessee has
            received all necessary approvals for the lease of the equipment
            subject to this Lease and for the payment of the rentals required
            under this Lease. &nbsp;While similar approvals are expected for
            each of the future fiscal years during the term of this Lease, such
            approvals cannot be assured. &nbsp;If, for any such fiscal year,
            necessary approvals are not received for the continuation of this
            Lease, then the Lessee shall have the right, exercisable by written
            notice delivered twenty (20) days prior to the expiration of the
            then current fiscal year, to terminate this Lease as of the last day
            of such current fiscal year, subject to the requirements that (a)
            all obligations of the Lessee under the Lease for the then current
            fiscal year shall be satisfied in full, (b) the Lessee shall package
            and return the equipment as directed by Lessor, with all costs of
            packaging, freight and insurance borne by Lessee and (c) if, within
            two (2) years after the effective date of termination, necessary
            approvals are received for the purchase or lease of equipment
            performing functions similar to those performed by the equipment
            subject to this lease, then the lessor, at its election, may (I)
            reinstate this Lease for a term equal to the unexpired term of this
            Lease as of the date of cancellation by providing like equipment or
            (II) have a right of refusal to be the seller or lessor in the
            Lessee&rsquo;s acquisition of like kind equipment. &nbsp;If Lessee
            purports to cancel this Lease under this Section, then Lessor, as a
            condition to acceptance of such cancellation, may require the
            written opinion of Lessee&rsquo;s counsel detailing specifically the
            circumstances giving rise to the right of cancellation and such
            counsel&rsquo;s affirmative opinion as to the existence of that
            right.
          </span>
        </p>
        <p class="c15 c12">
          <span class="c2"></span>
        </p>
        <p class="c15 c12">
          <span class="c2"></span>
        </p>
        <p class="c15 c12">
          <span class="c2"></span>
        </p>
        <p class="c15 c12">
          <span class="c2"></span>
        </p>
        <h5 class="c15 c23 c128 ml-[20rem]">
          <span class="c34">Durham Public Schools</span>
        </h5>
      </div>
      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>{attachment === "Yes" ? "26" : "25"}</p>
        </div>
      </div>
    </div>
  );
};

export default Page24;
