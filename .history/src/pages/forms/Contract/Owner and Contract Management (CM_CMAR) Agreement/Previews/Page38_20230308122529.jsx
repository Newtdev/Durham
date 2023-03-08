import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";

const Page38 = (props) => {
  return (
    <Wrapper>
      <p class="fp f2">
        <span class="f0">
          <span className="mr-[1.35rem]">7.6.3</span>The amount of liquidated
          damages set forth in Paragraphs 7.6.1 and 7.6.2 hereinabove shall be
          assessed cumulatively. The items of cost included in the assessment of
          liquidated damages are defined above. &nbsp;This provision of
          liquidated damages does not bar Owner&rsquo;s right to enforce other
          rights and remedies against CM, including but not limited to, specific
          performance or injunctive relief. In no way shall costs for liquidated
          damages be construed as a penalty to the CM.
        </span>
      </p>
      <p class="fp f18 f48">
        <span class="f0"></span>
      </p>
      <p class="fp f40">
        <span class="f0">
          <span className="mr-[1.35rem]">7.6.4</span>Notwithstanding any other
          provisions of the Agreement, if there is concurrent delay in the
          completion of the work, the CM shall be liable for liquidated damages
          as specified in this Agreement during such period of concurrent delay.
          &nbsp;For the purpose of this section 7.6, concurrent delay means (a)
          a delay event caused in part by the Owner or its agent and in part by
          the CM or its contractors, subcontractors, sub-subcontractos, or (b)
          one or more delay event caused solely by the Owner, its agents, or the
          Design Consultant, and one or more delay event caused in part by the
          CM, subcontractors, sub-subcontractors or agents, each of which would
          have resulted in a delay without the other and which delays run
          concurrently, or at the same time. &nbsp;In the event that the
          foregoing provision making the CM liable for liquidated damages during
          a period of concurrent delay is found to be unenforcable, then the
          parties agree that in the event of a concurrent delay, the extent of
          the delay will be apportioned between the Owner and the CM, and the CM
          will be responsible for liquidated damages as set forth in the section
          7.6 for those portions of the delay &nbsp;which are apportioned to the
          CM, its subconctractors, sub-subcontractors, agents or material
          suppliers.
        </span>
      </p>
      <p class="fp f28">
        <span class="f0">
          <span className="mr-[1.35rem]">7.6.5</span>The amount of liquidated
          damages set forth in Paragraphs 7.6.1 and 7.6.2 hereinabove shall not
          include additional legal or design professional costs that may result
          from the CM&rsquo;s default. &nbsp;If such legal or design
          professional costs are incurred by the Owner, the CM shall be liable
          to the Owner for those costs in addition to the liquidated damages
          amount set forth hereinabove and in 7.7 Summary of Monetary Amounts.
        </span>
      </p>
      <p class="fp f51">
        <span class="f0">
          <span className="mr-8">7.7</span>The following summary is intended to
          provide a single location for all relevant monetary amounts included
          in this Agreement as of the date of execution of the Agreement.&nbsp;
          The following list shall take precedence over any inconsistencies in
          the amounts otherwise incorporated into this Agreement.&nbsp; The
          amounts in this Agreement shall only be revised by written agreement
          between the parties.&nbsp; The monetary amounts follow:
        </span>
      </p>
      <div className="ml-12">
        <p>
          <span className="fgh mr-[16rem]">GMP</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.amount}`}</span>
        </p>
        <p>
          <span className="fgh mr-[13rem]">Cost of Work</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.ocmcostOfWork}`}</span>
        </p>
        <p>
          <span className="fgh mr-[8.8rem]">CM Preconstruction Fee</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.ocmfees}`}</span>
        </p>
        <p>
          <span className="fgh mr-[10rem]">CM Construction Fee</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.ocmpreConstruction}`}</span>
        </p>
        <p>
          <span className="fgh mr-[6.7rem]">CM Construction Contingency</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.ocmCMContingency}`}</span>
        </p>
        <p>
          <span className="fgh mr-[10.5rem]">Owner Contingency</span>{" "}
          $F30________
        </p>
        <p>
          <span className="fgh mr-[10.7rem]">General Conditions</span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.ocmgeneralConditions}`}</span>
        </p>
        <p>
          <span className="fgh mr-[5.8rem]">
            {" "}
            Liquidated Damages-Substantial
          </span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.substantialAmount}`}</span>
          _/Day
        </p>
        <p>
          <span className="fgh mr-[7.5rem]">
            {" "}
            Liquidated Damages &ndash; Final
          </span>{" "}
          <span
            className={`${props?.nottoBeHighlighted} `}
          >{`$${props?.form_fields?.finalAmount}`}</span>
          /Day
        </p>
      </div>
      {/* <p class="fp f25">
        <span className="fgh">
          <span className="w-32">GMP</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F25________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          Cost of
          Work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
          F26________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          CM Preconstruction Fee
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F27________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          CM Construction
          Fee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F28________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          CM Construction Contingency
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F29________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          Owner Contingency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F30________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          General Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F31________
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          Liquidated
          Damages-Substantial&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F32______/Day
        </span>
      </p>
      <p class="fp f25">
        <span class="f0">
          Liquidated Damages &ndash;
          Final&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$F33______/day
        </span>
      </p> */}
      <p class="fp f14">
        <span class="f21"></span>
      </p>
      <p class="fp f23">
        <span class="f21">ARTICLE 8</span>
      </p>
      <p class="fp f23">
        <span class="f0">INSURANCE AND MUTUAL INDEMNITY</span>
      </p>
      <p class="fp f23">
        <span class="f21">____________________________</span>
      </p>
      <p class="fp f14">
        <span class="f0"></span>
      </p>
      <p class="fp f18 f41">
        <span class="f0"></span>
      </p>
      <p class="fp f15 f4">
        <span class="f0 ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="mr-8">8.1</span>CM&rsquo;s Liability Insurance
        </span>
      </p>
      <p class="fp f12 f4">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="mr-[1.35rem]">8.1.1</span>The CM shall purchase at
          their own expense and maintain in companies properly licensed by the
          department of insurance of the State of North Carolina and rated
          &ldquo;a&rdquo; or better by a.m. best company as will protect it, the
          Owner, the Design Consultant and their agents, representatives, and
          employees from claims as set forth below which may arise out of or
          result from the CM&rsquo;s operations under the Agreement, whether
          such
        </span>
      </p>
      <p class="fp f12 f4">
        <span class="f0"></span>
      </p>

      <div className=" h-[3.5rem] flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>38</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page38;
