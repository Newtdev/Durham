import React from "react";
import Wrapper from "./Wrapper";
import { doConvert } from "../../../../../shared-component";
import "./CMPagesStyle.css";
import currency from "currency.js";

const Page36 = (props) => {
  return (
    <Wrapper>
      <div>
        <p class="fp f2">
          <span class="f0">
            7.1.3.3 &nbsp;&nbsp;Should concealed or unknown physical conditions
            be encountered that differ materially from those identified in the
            drawings or specifications, the Guaranteed Maximum Price may be
            adjusted by change order in accordance with Paragraph{" "}
          </span>
          <span class="f0">5.2.2</span>
          <span class="f0">.</span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            7.1.3.4 &nbsp;&nbsp;The Design Consultant shall have the authority
            to order minor changes in the Project consistent with the intent of
            the drawings and specifications and not involving an adjustment in
            the Guaranteed Maximum Price or change of the construction
            completion date. &nbsp;Such changes may be affected by written order
            only and shall be signed by the Owner and the CM prior to the work
            being performed.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            7.1.3.5 &nbsp;&nbsp;In the event that the bids for the construction
            of the Project are less than the line item(s) in the GMP for the
            construction of the Project, the GMP shall be reduced dollar for
            dollar to reflect the savings. &nbsp;The parties agree that any
            savings based upon the receipt of bids shall be retained solely by
            the Owner. &nbsp;
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-[1.35rem]">7.1.4</span>Unused Funds
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            7.1.4.1 &nbsp;&nbsp;In the event that there are any funds remaining
            in any contingency, those funds shall be retained solely by the
            Owner.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            7.1.4.2 &nbsp;&nbsp;In the event that all of the funds allocated for
            the CM&rsquo;s general conditions are not used, the Owner shall
            retain all of those funds.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            7.1.4.3 &nbsp;&nbsp;In the event that there are unused allowances or
            other cost of work funds, all of those funds, plus the associated CM
            fee, shall be retained by the Owner.
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            7.1.4.4 &nbsp;&nbsp;In the event that the bids for the construction
            of the Project are less than the line item(s) in the GMP for the
            construction of the Project, the Owner&rsquo;s contingency shall be
            increased dollar for dollar to reflect the savings.&nbsp; The
            parties agree that any savings based upon the receipt of bids shall
            be retained solely by the Owner
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-8">7.4</span>Lump Sum
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-[3.2rem]"></span>The Owner shall compensate the
            CM for Basic Services on the basis of a Lump Sum in accordance with
            the terms and conditions of this Agreement as follows:
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-[1.35rem]">7.4.1</span>Compensation for Basic
            Services
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f3">
            <span className="mr-[3.2rem]"></span>The CM shall be compensated for
            performing Basic Services described in the pre-design phase
            (Paragraph 3.2), design phase (Paragraph 3.3) and the procurement
            phase (Paragraph 3.4) for &nbsp;a total lump sum in the amount of{" "}
            <span className={`${props?.nottoBeHighlighted} `}>{`${doConvert(
              props?.form_fields?.procurementAmount
            )}`}</span>
            &nbsp;dollars (
            <span className={`${props?.nottoBeHighlighted} `}>
              {`${currency(props?.form_fields?.procurementAmount).format()}`}
            </span>
            ) that shall be divided by the number of months scheduled for the
            basic services in Paragraphs 3.2, 3.3 and 3.4 and paid in equal
            monthly installments as the services are performed. The CM shall be
            compensated for performing basic services described in the
            construction phase (Paragraph 3.5) and post-construction phase
            (Paragraph 3.6) for a total lump sum in the amount of{" "}
            <span className={`${props?.nottoBeHighlighted} `}>{`${doConvert(
              props?.form_fields?.constructionAmount
            )}`}</span>
            dollars (
            <span className={`${props?.nottoBeHighlighted} `}>{`${currency(
              props?.form_fields?.constructionAmount
            ).format()}`}</span>
            ). &nbsp;In the event there are changes in the work that require an
            adjustment in the CM&rsquo;s construction/post-construction fee, the
            fee adjustment shall be based upon{" "}
            <span className={`${props?.nottoBeHighlighted} `}>{`${
              !props.form_fields ? "" : props?.form_fields?.percentage
            }%`}</span>{" "}
            of the cost of the work added or deleted from the Project. &nbsp;The
            fee for these phases shall be paid in proportion to the percentage
            of the actual cost of the work paid by the Owner. &nbsp;The cost of
            the work as used in this section shall be the total dollar amount of
            the construction contracts awarded by the CM to contractors for the
            performance of the work, minus any unused allowances or other
            deductive change orders. &nbsp;The CM&rsquo;s contingency shall not
            be included in the calculation or payment of the CM&rsquo;s fee.
            &nbsp;Progress payments for the work performed by the contractors
            shall be paid as the work is performed and approved in accordance
            with this Agreement. The CM acknowledges that the Owner only has
            funds for the basic services in Paragraphs 3.2, 3.3, and 3.4 at the
            time this Agreement is being executed and that the CM is not
            authorized to perform any services in Paragraphs 3.5 and 3.6 or any
            other provisions of this Agreement without the express written
            permission of the Owner. &nbsp;
          </span>
        </p>
        <p class="fp f1">
          <span class="f30 f3"></span>
        </p>
      </div>
      <div className="flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>36</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page36;
