import React from "react";
import "./PagesStyle.css";

const Page7 = (props) => {
  return (
    <div
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      className=" flex flex-col justify-between h-full"
      // className="border border-black"
    >
      <>
        <p class="c23 c208">
          <span class="c21">
            Proposal, no one requirement shall automatically disqualify a Vendor
            from consideration. &nbsp;However, failure to comply with any single
            requirement may result in the Department exercising its discretion
            to reject a proposal in its entirety.
          </span>
        </p>
        <p class="c208 c23 c12">
          <span class="c51"></span>
        </p>
        <p class="c208 c23">
          <span class="c51">
            <span>4.0 </span>REQUIREMENTS
          </span>
        </p>
        <p class="c208 c23">
          <span class="c21">
            This Section lists the requirements related to this RFP. By
            submitting a proposal, the Vendor agrees to meet all stated
            requirements in this Section as well as any other specifications,
            requirements and terms and conditions stated in this RFP. If a
            Vendor is unclear about a requirement or specification or believes a
            change to a requirement would allow for Durham Public Schools to
            receive a better proposal, the Vendor is urged and cautioned to
            submit these items in the form of a question during the question and
            answer period in accordance with Section 1.1.
          </span>
        </p>
        <ol class="c14 start" start="1">
          <li class="c3 c23">
            <span className="c89  mr-2">4.1</span>{" "}
            <span class="c89 c80 c140">N/A</span>
          </li>
        </ol>
        <p class="c208 c23">
          <span class="c22 c64">.</span>
        </p>
        <ol class="c14 " start="2">
          <li class="c3 c23">
            <span className="c89 mr-2">4.2</span>{" "}
            <span class="c89 c80 c140">PRICING</span>
          </li>
        </ol>
        <p class="c3 c23 c128 c12">
          <span class="c51"></span>
        </p>
        <p class="c201 c23" id="h.44sinio">
          <span class="c22 c80">
            Proposal price shall constitute the total cost to Buyer for complete
            performance in accordance with the requirements and specifications
            herein, including all applicable charges handling, administrative
            and other similar fees. Vendor shall not invoice for any amounts not
            specifically allowed for in this RFP.{" "}
          </span>
          {props?.form_fields?.attachment === "Yes" && (
            <span class="c22 c80 c68">
              Complete ATTACHMENT C: PRICING FORM and include in Proposal.
              <span className={`${props?.nottoBeHighlighted}`}>
                {" "}
                {props?.form_fields?.attachment}
              </span>
            </span>
          )}
          <span class="c21">.</span>
        </p>
        <ol class="c14 start" start="3">
          <li class="c3 c23">
            <span className="c89 mr-2">4.3</span>{" "}
            <span class="c89 c80 c140">INVOICES</span>
          </li>
        </ol>
        <ol class="c14 t" start="1">
          <li class="c201 c23 ml-6 mt-2">
            <span className="mr-4">a)</span>
            <span class="c21">
              Invoices must be submitted to the Accounts Payable Office on the
              Vendor(s) official letterhead/stationery. &nbsp;
            </span>
          </li>
          <li class="c201 c23 ml-6 flex mt-2">
            <span className="mr-4">b)</span>

            <span class="c21">
              Invoices must bear the correct contract number/purchase order
              number to ensure prompt payment. The Vendor&rsquo;s failure to
              include the correct purchase order number may cause delay in
              payment.
            </span>
          </li>
          <li class="c201 c23 ml-6 flex mt-2">
            <span className="mr-4">c)</span>
            <span class="c21">
              Invoices must include an accurate description of the work/items
              for which the invoice is being submitted, the invoice date, the
              period of time covered when applicable, the amount of fees due to
              the Vendor and the original signature of the Vendor&rsquo;s
              project manager.
            </span>
          </li>
        </ol>
        <ol class="c14 " start="3">
          <li class="c3 c23">
            <span className="c89 mr-2">4.4</span>{" "}
            <span class="c89 c80 c140">PAYMENT TERMS</span>
          </li>
        </ol>
        <ol class="c14 " start="1">
          <li class="c201 c23 ml-6 mt-2">
            <span className="mr-4">a)</span>
            <span class="c21">
              The Vendor will be compensated at the rates quoted in the
              Vendor&rsquo;s Cost Proposal.;
            </span>
          </li>
        </ol>
        <p class="c4 c189">
          <span class="c22 c117 c148 c195"></span>
        </p>
        <ol class="c14 " start="1">
          <li class="c201 c23 ml-6 flex">
            <span className="mr-4">b)</span>
            <span class="c21">
              <span class="c22 c80">The Vendor </span>
              <span class="c21">
                will be paid net thirty (30) calendar days after the
                Vendor&rsquo;s invoice is approved by Durham Public Schools.
              </span>
            </span>
          </li>
        </ol>

        <p class="c201 c23 c12">
          <span class="c21"></span>
        </p>
        <ol class="c14 " start="3">
          <li class="c3 c23">
            <span className="c89 mr-2">4.5</span>{" "}
            <span class="c89 c80 c140">FINANCIAL STABILITY</span>
          </li>
        </ol>

        <p class="c170 c23">
          <span class="c21">
            Each Vendor shall certify it is financially stable by completing the
            ATTACHMENT D: CERTIFICATION OF FINANCIAL CONDITION. The State is
            requiring this certification to minimize potential issues from
            Contracting with a Vendor that is financially unstable. From the
            date of the Certification to the expiration of the Contract, the
            Vendor shall notify Durham Public Schools within thirty (30) days of
            any occurrence or condition that materially alters the truth of any
            statement made in this Certification.
          </span>
        </p>

        <ol class="c14 " start="3">
          <li class="c3 c23">
            <span className="c89 mr-2">4.6</span>{" "}
            <span class="c89 c80 c140">VENDOR EXPERIENCE</span>
          </li>
        </ol>

        <p class="c170 c23">
          <span class="c21">
            When applicable in its Proposal, Vendor shall demonstrate experience
            with public and/or private sector clients with similar or greater
            size and complexity to the State of North Carolina. Vendor shall
            provide information as to the qualifications and experience of all
            executive, managerial, legal, and professional personnel to be
            assigned to this project, including resumes citing experience with
            similar projects and the responsibilities to be assigned to each
            person.
          </span>
        </p>

        <ol class="c14 " start="3">
          <li class="c3 c23">
            <span className="c89 mr-2">4.7</span>{" "}
            <span class="c89 c80 c140">REFERENCES</span>
          </li>
        </ol>

        <p class="c143 c23">
          <span class="c22 c80">
            Vendors shall provide at least three (3) references for which your
            company has provided{" "}
          </span>
          <span class="c22">
            services of similar size and scope to that proposed
          </span>
          <span class="c22 c80">
            &nbsp;herein. &nbsp;Durham Public Schools may contact these users to
            determine{" "}
          </span>
        </p>
      </>

      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>7</p>
        </div>
      </div>
    </div>
  );
};

export default Page7;
