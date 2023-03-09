import React from "react";
import moment from "moment";
import "./PagesStyle.css";

export const Footer = ({ page }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-8 flex justify-center items-center">
        <p>{page}</p>
      </div>
    </div>
  );
};

const Page1 = (props) => {
  return (
    <div
      className="flex flex-col justify-between items-center"
      style={{
        margin: "3.5rem 30pt 1in 60pt",
        height: "10in",
      }}
      // className="border border-black"
    >
      <>
        <p class="c3 c311">
          <span class={`c81 c80 c148 c98 c96`}>
            Bidder:{" "}
            <span className={`${props?.nottoBeHighlighted}`}>
              {props?.form_fields?.bidderName}
            </span>
          </span>
        </p>

        <p class="c129">
          <span class="c37">Durham Public Schools</span>
        </p>
        <p class="c129 c12">
          <span class="c2"></span>
        </p>
        <p class="c129 c12">
          <span class="c2"></span>
        </p>
        <a id="t.e5e5f996c7c49b06274c59a254e0c4a7830ccc58"></a>
        <a id="t.0"></a>
        <table class="c252">
          <tr class="c306">
            <td class="c13" colspan="1" rowspan="1">
              <p class="c3">
                <span class="c88">&nbsp;</span>
                <span class="c92 c81 c80">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Durham
                  Public Schools
                </span>
              </p>
              <p class="c3 c12">
                <span class="c92 c81 c80"></span>
              </p>
              <p class="c182">
                {/* <span class="c68 c89">RFP# 179-2122-621-LF-SOLAR</span> */}
                <span class={`c89 ${props?.nottoBeHighlighted}`}>
                  {props?.form_fields?.rfpNumber}
                </span>
              </p>
              <p class="c163">
                {/* <span class="c81 c80 c92">Attn: Tanita Nicholson</span> */}
                <span class={`c81 c80 c92 ${props?.nottoBeHighlighted}`}>
                  Attn:{props?.form_fields?.personName}
                </span>
              </p>
              <p class="c163">
                <span class="c92 c81 c80">511 Cleveland Street</span>
              </p>
              <p class="c163">
                <span class="c92 c81 c80">Durham, NC &nbsp;27701</span>
              </p>
            </td>
            <td class="c118" colspan="1" rowspan="1">
              <p class="c3">
                <span class="c46">REQUEST FOR PROPOSALS NO:</span>
              </p>
              <p class="c15 c12">
                <span class="c46"></span>
              </p>
              <p class="c182">
                {/* <span class="c89 c68">RFP# 179-2122-621-LF-SOLAR</span> */}
                <span class={`c89 ${props?.nottoBeHighlighted}`}>
                  {props?.form_fields?.rfpNumber}
                </span>
              </p>
              <p class="c15">
                <span class="c46">
                  &nbsp;_______________________________________
                </span>
              </p>
              <p class="c163">
                <span class="c89">Proposals Due: &nbsp;</span>
                <span class={`c66  ${props?.nottoBeHighlighted}`}>
                  {/* <span className={`inline-block`}>
                  {moment(props?.form_fields?.proposalDate).format("MMMM")}
                </span>{" "}
                <span className={` inline-block`}>
                  {moment(props?.form_fields?.proposalDate).format("Do")},
                </span>{" "}
                <span className={` inline-block`}>
                  {moment(props?.form_fields?.proposalDate).format("YYYY")}
                </span> */}
                  {moment(props?.form_fields?.proposalDate).format(
                    "MMMM D, YYYY"
                  )}

                  <span className={`inline-block ml-2`}>
                    {moment(props?.form_fields?.proposalTime).format("h:mm a")}{" "}
                  </span>
                </span>
              </p>
              <p class="c163 c12">
                <span class="c46"></span>
              </p>
            </td>
          </tr>
          <tr class="c185">
            <td class="c13" colspan="1" rowspan="1">
              <p class="c3">
                <span class="c24">
                  Direct all inquiries concerning this RFP to:
                </span>
              </p>
              <p class="c15">
                <span class="c24">Durham Public Schools</span>
              </p>
              <p class="c15">
                <span className="mr-2 font-bold">Attn:</span>
                <span class={`c26 ${props?.nottoBeHighlighted}`}>
                  {" "}
                  {props?.form_fields?.personName}
                </span>
              </p>
              <p class="c129">
                <span class="c98 c45 c168">
                  All questions must be submitted{" "}
                </span>
                <span class="c130 c98 c168 c45">via email</span>
                <span class="c98 c168 c45">&nbsp;no later</span>
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  than{" "}
                </span>
                <span class={`c66  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.submissionDate).format(
                    "MMMM Do YYYY "
                  )}

                  <span className={`inline-block`}>
                    at {moment(props?.form_fields?.submissionTime).format("ha")}{" "}
                  </span>
                </span>
                {/* <span class="c89 c68">&nbsp;2022 at 2pm</span> */}
              </p>
            </td>
            <td class="c118" colspan="1" rowspan="1">
              <p class="c3">
                <span class="c45 c98">Contract Type: &nbsp;</span>
                <span class={`c98 c45 c130 ${props?.nottoBeHighlighted}`}>
                  {props?.form_fields?.contractType}
                </span>
                <span class="c24">
                  &nbsp;using various funds; when using Federal Funds Durham
                  Public Schools will follow all Federal guidelines.
                </span>
              </p>
              <p class="c15 c12">
                <span class="c24"></span>
              </p>
            </td>
          </tr>
          <tr class="c343">
            <td class="c13" colspan="1" rowspan="1">
              <p class="c3">
                <span class="c26">Email: Dist.Purchasing@dpsnc.net</span>
              </p>
              <p class="c15 c12">
                <span class="c26"></span>
              </p>
              <p class="c15 c12">
                <span class="c26"></span>
              </p>
            </td>
            <td class="c118" colspan="1" rowspan="1">
              <p class="c163">
                <span class="c26">Using Agency Name: &nbsp;</span>
              </p>
              <p class="c129">
                <span class="c26">Durham Public Schools</span>
              </p>
            </td>
          </tr>
        </table>
        <p className={`c129 `}>
          <span
            class={`c192 c98 c68 ${props?.nottoBeHighlighted}`}
            style={{ fontSize: "12pt" }}
          >
            Bids will be publicly opened on: &nbsp;{" "}
          </span>
          <span
            class={`c89  ${props?.nottoBeHighlighted}`}
            style={{ fontSize: "11pt" }}
          >
            {moment(props?.form_fields?.bidOpeningDate).format("MMMM D, YYYY ")}

            <span className={`inline-block`}>
              {moment(props?.form_fields?.bidOpeningTime).format("h:mm a")}{" "}
            </span>
          </span>{" "}
        </p>
        <p class="c8" style={{ lineHeight: 1.2, fontSize: "10pt" }}>
          <span class="c130 c98 c45">NOTE:</span>
          <span class="c98 c45">
            &nbsp; Questions concerning the specifications in this Request for
            Proposals will be received until date and time listed above.
            &nbsp;ALL QUESTIONS MUST BE SUMITTED IN WRITING, EITHER BY EMAIL or
            TO THE ADDRESS LISTED ABOVE. &nbsp;NO QUESTIONS will be received by
            telephone. &nbsp;Questions received after the date and time listed
            above will not be considered. &nbsp;A summary of all questions and
            answers will be posted on the Interactive Purchasing System as an
            addendum, located under the RFP # being modified. &nbsp;
          </span>
          <span class="c130 c98 c45">
            It is the OFFEROR&rsquo;S responsibility to assure that all addenda
            have been reviewed and, if need be, signed and returned
          </span>
          <span class="c24">.</span>
        </p>
        <p class="c3 c12">
          <span class="c70 c81 c96"></span>
        </p>
        <p class="c3">
          <span class="c70 c81 c96">NOTICE TO BIDDERS</span>
        </p>
        <p class="c3" style={{ fontSize: "10pt", lineHeight: "1.2" }}>
          <span class="c98 c45">
            Sealed and online (IPS) proposals subject to the conditions made a
            part hereof, will be received until{" "}
          </span>
          <span class={`c66  ${props?.nottoBeHighlighted}`}>
            <span className={`inline-block mr-2`}>
              {moment(props?.form_fields?.submissionTime).format("h:mma")} on
            </span>
            {moment(props?.form_fields?.submissionDate).format("MMMM Do YYYY ")}
          </span>
          {/* <span class="c89 c68">1:00pm on March 18</span>
        <span class="c85 c68">th</span>
        <span class="c89 c68">&nbsp;2022</span> */}
          <span class="c89">&nbsp;</span>
          <span class="c24">
            for furnishing and delivering the commodity/services described
            herein and then publically opened. &nbsp;
          </span>
        </p>
        <p class="c8" style={{ fontSize: "10pt", lightHeight: "1.5" }}>
          <span class="c98 c45">
            Bids submitted via telegraph, facsimile (FAX) machine, telephone and
            electronic means, including but not limited to e-mail, in response
            to this Request for Proposals{" "}
          </span>
          <span class="c130 c98 c45">will not</span>
          <span class="c24">
            &nbsp;be acceptable. &nbsp;Bids are subject to rejection unless
            submitted on this form.
          </span>
        </p>
        <p class="c3 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p
          class={`c3 ${props?.nottoBeHighlighted}`}
          style={{ fontSize: "10pt", lineHeight: "1.5" }}
        >
          <span class="c98 c45 c68">Digital submissions through the </span>
          <span class="c130 c45 c68 c307">
            <a
              class="c78"
              href="https://www.google.com/url?q=http://www.ips.state.nc.us/&amp;sa=D&amp;source=editors&amp;ust=1676889196068145&amp;usg=AOvVaw3iEUJEsvtdgejWQLQv3zYU"
            >
              Interactive Purchasing System (IPS)
            </a>
          </span>
          <span class="c98 c45 c68">
            &nbsp;is preferred. &nbsp;Submission type, online or hard copy, will
            not affect proposal scoring. If submitting a hard copy, please
            submit 1 copy.
          </span>
          {/* <span className={` ${props?.nottoBeHighlighted}`}>
          {props?.form_fields?.prototypeNotUtilized}Digital submissions through
          the &nbsp;is preferred. &nbsp;Submission type, online or hard copy,
          will not affect proposal scoring. If submitting a hard copy, please
          submit 1 copy.
        </span> */}
          <span class="c24">&nbsp; </span>
        </p>
        <p class="c3 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c3">
          <span class="c70 c81 c45">EXECUTION</span>
        </p>
        <p class="c270 c23" id="h.gjdgxs">
          <span class="c83 c121 c80 c140 c107">
            In compliance with this Request for Proposals, and subject to all
            the conditions herein, the undersigned Vendor offers and agrees to
            furnish and deliver any or all items upon which prices are bid, at
            the prices set opposite each item within the time specified herein.
            By executing this proposal, the undersigned Vendor certifies that
            this proposal is submitted competitively and without collusion (G.S.
            143-54), that none of its officers, directors, or owners of an
            unincorporated business entity has been convicted of
          </span>
        </p>
      </>

      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
