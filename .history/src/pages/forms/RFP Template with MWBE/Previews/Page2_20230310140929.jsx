import React from "react";
import "./PagesStyle.css";
// import { Footer } from "./Page1";
// import image6 from "../images/image6.png";
import he from "he";

const Page2 = (props) => {
  const proposalScope = he.decode(
    "&lt;p&gt;&lt;strong&gt;list of items&lt;/strong&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;Go&lt;/li&gt;&lt;li&gt;There&lt;/li&gt;&lt;li&gt;Come&lt;/li&gt;&lt;/ol&gt;"
  );
  console.log(proposalScope);
  console.log(props?.form_fields?.proposalScope);
  console.log("Page2");

  return (
    <div
      className="flex flex-col justify-between h-full"
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      // className="border border-black"
    >
      <>
        <p class="c270 c23" id="h.gjdgxs">
          <span class="c83 c121 c80 c140 c107">
            any violations of Chapter 78A of the General Statutes, the
            Securities Act of 1933, or the Securities Exchange Act of 1934 (G.S.
            143-59.2), and that it is not an ineligible Vendor as set forth in
            G.S. 143-59.1. False certification is a Class I felony. Furthermore,
            by executing this proposal, the undersigned certifies to the best of
            Vendor&rsquo;s knowledge and belief, that it and its principals are
            not presently debarred, suspended, proposed for debarment, declared
            ineligible or voluntarily excluded from covered transactions by any
            Federal or State department or agency. As required by G.S. 143-48.5,
            the undersigned Vendor certifies that it, and each of its
            sub-Contractors for any Contract awarded as a result of this RFP,
            complies with the requirements of Article 2 of Chapter 64 of the NC
            General Statutes, including the requirement for each employer with
            more than 25 employees in North Carolina to verify the work
            authorization of its employees through the federal E-Verify system.
            &nbsp;G.S. 133-32 and Executive Order 24 (2009) prohibit the offer
            to, or acceptance by, any State Employee associated with the
            preparing plans, specifications, estimates for public Contract; or
            awarding or administering public Contracts; or inspecting or
            supervising delivery of the public Contract of any gift from anyone
            with a Contract with the State, or from any person seeking to do
            business with the State. By execution of this response to the RFP,
            the undersigned certifies, for your entire organization and its
            employees or agents, that you are not aware that any such gift has
            been offered, accepted, or promised by any employees of your
            organization.
          </span>
        </p>
        <p class="c3 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c4">
          <span class="c34"></span>
        </p>
        <p class="c270 c23">
          <span class="c34">
            Failure to execute/sign proposal prior to submittal shall render
            proposal invalid and it WILL BE REJECTED. Late proposals cannot be
            accepted.
          </span>
        </p>
        <p class="c4">
          <span class="c34"></span>
        </p>
        <a id="t.28fbbd9af4c867584601efb78e469f6832e241d7"></a>
        <a id="t.1"></a>
        <table class="c308">
          <tr class="c259">
            <td class="c222" colspan="4" rowspan="1">
              <p class="c94 c23">
                <span class="c9">VENDOR:</span>
              </p>
            </td>
          </tr>
          <tr class="c211">
            <td class="c135" colspan="2" rowspan="1">
              <p class="c94 c23">
                <span class="c9">STREET ADDRESS:</span>
              </p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c9">P.O. BOX:</span>
              </p>
            </td>
            <td class="c114" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c9">ZIP:</span>
              </p>
            </td>
          </tr>
          <tr class="c123">
            <td class="c135" colspan="2" rowspan="1">
              <p class="c94 c23">
                <span class="c9">CITY &amp; STATE &amp; ZIP:</span>
              </p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c9">TELEPHONE NUMBER:</span>
              </p>
            </td>
            <td class="c114" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c9">
                  TOLL FREE TEL. NO:
                  <br />
                </span>
              </p>
            </td>
          </tr>
          <tr class="c211">
            <td class="c222" colspan="4" rowspan="1">
              <p class="c94 c23">
                <span class="c9">
                  PRINCIPAL PLACE OF BUSINESS ADDRESS IF DIFFERENT FROM ABOVE
                  (SEE INSTRUCTIONS TO VENDORS ITEM #10):
                </span>
              </p>
            </td>
          </tr>
          <tr class="c123">
            <td class="c135" colspan="2" rowspan="1">
              <p class="c94 c23">
                <span class="c9">
                  PRINT NAME &amp; TITLE OF PERSON SIGNING ON BEHALF OF VENDOR:
                </span>
              </p>
            </td>
            <td class="c199" colspan="2" rowspan="1">
              <p class="c23 c94">
                <span class="c9">FEDERAL ID NUMBER:</span>
              </p>
            </td>
          </tr>
          <tr class="c248">
            <td class="c177" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c66 c299">
                  VENDOR&rsquo;S AUTHORIZED SIGNATURE
                </span>
                <span class="c9">:</span>
              </p>
            </td>
            <td class="c97" colspan="1" rowspan="1">
              <p class="c94 c23">
                <span class="c66 c121 c80 c148 c299">DATE:</span>
              </p>
            </td>
            <td class="c199" colspan="2" rowspan="1">
              <p class="c94 c23">
                <span class="c9">EMAIL: </span>
              </p>
            </td>
          </tr>
        </table>
        <p class="c181 c23 c12">
          <span class="c83 c121 c80 c107 c140"></span>
        </p>
        <p class="c23 c181">
          <span class="c83 c121 c80 c140 c107">
            Offer valid for at least 120 days from date of proposal opening,
            unless otherwise stated here: &nbsp;
            <span className={` ${props?.nottoBeHighlighted}`}>
              {props?.form_fields?.validityPeriod}
            </span>{" "}
            days. &nbsp; After this time, any withdrawal of offer shall be made
            in writing, effective upon receipt by the agency issuing this RFP.
          </span>
        </p>
        <p class="c39 c23">
          <span class="c130 c66 c107">
            ACCEPTANCE OF PROPOSAL
            <br />
          </span>
          <span class="c83 c121 c80 c140 c107">
            If any or all parts of this proposal are accepted by Durham Public
            Schools, an authorized representative of Durham Public Schools shall
            affix his/her signature hereto and this document and all provisions
            of this Request For Proposal along with the Vendor proposal response
            and the written results of any negotiations shall then constitute
            the written agreement between the parties. A copy of this acceptance
            will be forwarded to the successful Vendor(s).
          </span>
        </p>
        <p class="c39 c23">
          {/* <span
          style={{
            overflow: "hidden",
            display: "inline-block",
            margin: "0px 0px",
            border: "0px solid #000000",
            transform: "rotate(0rad) translateZ(0px)",
            width: "374.73px",
            height: "66.64px",
          }}
        >
          <img
            alt=""
            src={image6}
            style={{
              width: "374.73px",
              height: "66.64px",
              marginLeft: "0px",
              marginTop: "0px",
              transform: "rotate(0rad) translateZ(0px)",
            }}
            title=""
          />
        </span> */}
        </p>
        <div className="w-[25rem] border-2 border-black bg-[#d8d8d8] px-2 pt-1 pb-3">
          <span className="underline font-bold" style={{ fontSize: "10pt" }}>
            FOR DURHAM PUBLIC SCHOOLS USE ONLY:
          </span>{" "}
          <span style={{ fontSize: "10pt" }}> Offer accepted a</span>{" "}
          <span style={{ fontSize: "10pt" }}>
            Contract awarded this ____ day of __________, 20_____, as
          </span>{" "}
          <span style={{ fontSize: "10pt" }}>
            indicated on the attached certification, by
          </span>
        </div>
        <p class="c39 c23 c12">
          <span class="c83 c121 c80 c140 c107"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c12 c15">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c45 c81"></span>
        </p>
        <p class="c15 c12">
          <span class="c70 c81 c45"></span>
        </p>
        <p class="c27 c12">
          <span class="c2"></span>
        </p>
        <section
          dangerouslySetInnerHTML={{
            __html: proposalScope,
          }}
        />
      </>
      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
