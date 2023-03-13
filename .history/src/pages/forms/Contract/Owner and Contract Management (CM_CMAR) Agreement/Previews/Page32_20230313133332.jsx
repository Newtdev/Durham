import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";
import currency from "currency.js";
import { doConvert } from "../../../../../shared-component";

const Page32 = (props) => {
  return (
    <Wrapper>
      <div>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-7">6.12</span>The Owner shall furnish evidence
            satisfactory to the CM that sufficient funds are available and
            committed for the entire cost of the Project. &nbsp;The Owner may
            authorize the CM to proceed with the work on the Project in discrete
            phases if all of the funds required for the entire Project are not
            identified at the time this Agreement is executed by the parties.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-7">6.13</span>The Owner, its representatives and
            consultants, including Design Consultants, shall endeavor to
            communicate with the Contractors only through the CM.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-7">6.14</span>The Owner shall send to the CM and
            shall require the Design Consultant to send the CM copies of all
            notices and communications sent to or received by the Owner or
            Design Consultant relating to the Project.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-7">6.15</span>The Owner shall designate, in
            writing, an officer, employee or other authorized representatives to
            act in the Owner&rsquo;s behalf with respect to the Project.
            &nbsp;This representative shall be available during working hours
            and as often as may be required to render decisions and furnish
            information so as not to delay the Project. The CM acknowledges that
            some changes in the scope of the Project may require approval by the
            Board of Education. The CM shall notify the Owner in writing of any
            deadlines for responses and how the Owner&rsquo;s failure to respond
            by the stated deadline will impact the Project schedule.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-7">6.16</span>The Owner shall make payments to
            the CM on the basis of the Contractors&rsquo; payment applications
            that are certified by the CM and on the basis of the CM&rsquo;s
            invoices for its services performed. &nbsp;Prior to payment by the
            Owner, the Design Consultant shall review and approve the
            contractors&rsquo; pay applications in accordance with Paragraphs
            3.5.3.5 and 3.5.3.6.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f23">
          <span class="f21">ARTICLE 7</span>
        </p>
        <p class="fp f23">
          <span class="f0">COMPENSATION FOR CM SERVICES AND PAYMENT</span>
        </p>
        <p class="fp f23">
          <span class="f21">____________________________</span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-8">7.1</span>Guaranteed Maximum Price
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f5">
          <span className="mr-[1.35rem] f0">7.1.1</span>
          <span className="f0">
            The Owner and CM agree that the Guaranteed Maximum Price shall be
            &nbsp;
            <span className={`${props?.nottoBeHighlighted} `}>{`${doConvert(
              props?.form_fields?.amount
            )}`}</span>
            dollars (
            <span className={`${props?.nottoBeHighlighted} `}>{`$${currency(
              props?.form_fields?.amount
            ).format()}`}</span>
            ) for this Project.&nbsp; The parties further agree that in the
            event the bids received by the CM for the work, including all of the
            alternates accepted by the Owner, pursuant to Article 3.4 of this
            Agreement exceed the line item in the GMP for the cost of the work,
            the CM shall be solely responsible for the additional cost of the
            work, unless this Agreement is terminated by the CM pursuant to
            Paragraph 7.1.1.1.&nbsp; In the event that the bids received by the
            CM for the work, including all alternatives accepted by the Owner,
            are less than the line item in the GMP for the cost of the work, the
            remaining funds shall be added to the Owner&rsquo;s
            contingency.&nbsp; The scope of work included in the bid documents,
            including any alternates accepted by the Owner, shall form the basis
            of the work to be performed by the CM.&nbsp; The CM and Owner agree
            that the line items in the GMP shall consist of the cost of the
            work, CM&rsquo;s contingency, and general conditions, CM&rsquo;s
            fee.&nbsp; The CM and Owner further agree that the dollar values for
            the line items in the GMP stated above consist of the:
          </span>
        </p>
        <p class="fp f5 f18">
          <span class="f0"></span>
        </p>
        <a id="t.bd69460181942db843632f51f307381f795accb1"></a>
        <a id="t.0"></a>
        <table class="f54">
          <tr class="f43">
            <td class="f26" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">Cost of Work</span>
              </p>
            </td>
            <td class="f22" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  <span
                    className={` ${props?.nottoBeHighlighted} `}
                  >{`$${props?.form_fields?.ocmcostOfWork}`}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr class="f45">
            <td class="f26" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">CM construction contingency</span>
              </p>
            </td>
            <td class="f22" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  <span
                    className={` ${props?.nottoBeHighlighted} `}
                  >{`$${props?.form_fields?.ocmCMContingency}`}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr class="f43">
            <td class="f26" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">General Conditions</span>
              </p>
            </td>
            <td class="f22" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  {" "}
                  <span
                    className={` ${props?.nottoBeHighlighted} `}
                  >{`$${props?.form_fields?.ocmgeneralConditions}`}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr class="f43">
            <td class="f26" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  CM&rsquo;s fee for preconstruction services
                </span>
              </p>
            </td>
            <td class="f22" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  <span
                    className={` ${props?.nottoBeHighlighted} `}
                  >{`$${props?.form_fields?.ocmpreConstruction}`}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr class="f45">
            <td class="f26" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  Construction and post-construction services
                </span>
              </p>
            </td>
            <td class="f22" colspan="1" rowspan="1">
              <p class="fp f5">
                <span class="f0">
                  <span
                    className={`${props?.nottoBeHighlighted} `}
                  >{`$${props?.form_fields?.constructionAmount}`}</span>
                </span>
              </p>
            </td>
          </tr>
        </table>
        <p class="fp f5" id="h.tyjcwt">
          <span class="f0">
            7.1.1.1 &nbsp;&nbsp;The parties agree that in the event the bids
            received by the CM for the work, including all of the alternates
            accepted by the Owner, pursuant to Article 3.4 of this Agreement
            exceed the line item in the GMP for the cost of the work, then the
            CM shall have the right to terminate this Agreement.&nbsp; The CM
            shall provide the Owner with notice of intent to terminate pursuant
            to this provision within fifteen (15) days of the CM&rsquo;s receipt
            of bids for the Project.&nbsp; Prior to a termination pursuant to
            this provision becoming effective, the Owner and CM will review the
            list of alternates, other modifications or value engineering
            requests in order to determine whether an Agreement can be reached
            between the Owner and CM regarding a modified scope of work or an
            adjustment to the GMP.&nbsp; In the event an Agreement regarding the
            modified scope of the work and/or a revision to the GMP cannot be
            reached within fifteen (15) days of
          </span>
        </p>
        <p class="fp f38 f18">
          <span class="f0"></span>
        </p>
      </div>

      <div className="flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>32</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page32;
