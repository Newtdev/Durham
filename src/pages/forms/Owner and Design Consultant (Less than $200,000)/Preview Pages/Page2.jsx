import React from "react";
import moment from "moment";
import "./OwnerLessPages.css";

const Page2 = (props) => {
  const { agreementDate } = props?.form_fields;

  return (
    <div style={{ margin: "1in", paddingTop: "7rem", height: "10in" }}>
      <p class=" text-center">
        <span class="p1">ENGINEERING CONSULTANT AGREEMENT</span>
      </p>
      <p class="p2 p53 p41 p12">
        <span class="p1"></span>
      </p>
      <p class="p20">
        <span class="p4">
          This AGREEMENT made this{" "}
          {agreementDate ? (
            <span class={`${props?.nottoBeHighlighted}`}>
              {moment(props?.form_fields?.agreementDate).format("Do")}
            </span>
          ) : (
            <span>____</span>
          )}{" "}
          day of{" "}
          {agreementDate ? (
            <span class={`${props?.nottoBeHighlighted}`}>
              {" "}
              {moment(props?.form_fields?.agreementDate).format("MMMM")}
            </span>
          ) : (
            <span>________</span>
          )}
          ,{" "}
          {agreementDate ? (
            <span class={`${props?.nottoBeHighlighted}`}>
              {moment(props?.form_fields?.agreementDate).format("YYYY")}
            </span>
          ) : (
            <span>20___</span>
          )}{" "}
          between Durham Public Schools Board of Education, located at 2011
          Hamlin Rd Durham NC 27704 (hereinafter, &ldquo;Owner&rdquo;), and{" "}
        </span>
        <span
          class={`${props?.nottoBeHighlighted}`}
          style={{ fontSize: "10pt", fontFamily: "Arial" }}
        >
          {" "}
          {!props.awardee ? "" : props?.awardee[0]?.company_name}
        </span>
        <span class="p1">
          , located at{" "}
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {" "}
            <span>{!props.awardee ? "" : props?.awardee[0]?.street},</span>{" "}
            <span>
              {!props.awardee ? "" : props?.awardee[0]?.city},{" "}
              {!props.awardee ? "" : props?.awardee[0]?.state},{" "}
              {!props.awardee ? "" : props?.awardee[0]?.zip_code}
            </span>
          </span>{" "}
          (hereinafter, the &ldquo;Engineer&rdquo;). &nbsp;The Agreement is for
          Professional Services to be provided as authorized by the Owner and as
          outlined in the Proposal and Scope of Services attached to this
          Agreement as Exhibit A.
        </span>
      </p>
      <p class="p20 p35 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p35 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p35">
        <span class="p1">ARTICLE 1</span>
      </p>
      <p class="p2 p35 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p35 p12">
        <span class="p1"></span>
      </p>
      <p class="p2 p35">
        <span class="p1">TERMS AND CONDITIONS</span>
      </p>
      <p class="p2 p35 p12">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-11">1.1</span>
        <li class="pli ">
          <span class="p4">
            WORK: &nbsp;The Engineer shall perform the services outlined on the
            attached Exhibit A as authorized by the Owner and in accordance with
            the terms and conditions of this Agreement. &nbsp;The Engineer
            agrees that all plans, drawing, specifications, designs and surveys
            in draft or final form are the property of the Owner, who may demand
            possession of them at anytime from Engineer and receive the same
            within three business days of demand.
          </span>
        </li>
      </ol>

      <p class="p12 p18">
        <span class="p1"></span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-11">1.2</span>
        <li class="pli ">
          <span class="p4">
            TIME: &nbsp;The parties acknowledge that this Project is time
            sensitive and must be completed in its entirety no later than the
            time shown in Exhibit A
          </span>
        </li>
      </ol>

      <p class="p18 p12">
        <span class="p1"></span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-16"></span>
        <li class="pli ">
          <span class="p4">
            In the event that circumstances beyond the Engineer&rsquo;s control
            force a delay that prohibits or may prohibit the Engineer&rsquo;s
            compliance with the schedule, the Engineer shall inform the Owner
            immediately.
          </span>
        </li>
      </ol>

      <p class="p9 p12 p58">
        <span class="p5"></span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-11">1.3</span>
        <li class="pli ">
          <span class="p4">
            COMPENSATION: &nbsp;The Engineer shall be compensated in accordance
            with the fee schedule included in Exhibit A to this Agreement and
            this Paragraph. &nbsp;The fee described in Exhibit A shall cover the
            cost of the engineering services (including the furnishing of all
            materials, apparatus, labor and any required insurance).
            &nbsp;Attached as Exhibit B is an hourly rate schedule for any
            services to be provided by the hour and any additional services that
            may be authorized under this Agreement. The Engineer shall not be
            compensated for any work or services performed without specific
            authorization from Owner.
          </span>
        </li>
      </ol>

      <p class="p20 p12">
        <span class="p1"></span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-11">1.4</span>
        <li class="pli ">
          <span class="p4">BILLING AND PAYMENT:</span>
        </li>
      </ol>

      <p class="p20 p35 p12">
        <span class="p1"></span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">1.4.1</span>
        <li class="pli ">
          <span class="p4">
            Billing for the work shall be directed to the Owner at the following
            address:
          </span>
        </li>
      </ol>

      <p class="p20 p35 p12">
        <span class="p1"></span>
      </p>

      <p class="p9 p24">
        <span class="p1">
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {!props.durham_profile
              ? ""
              : props?.durham_profile?.director_of_design_and_construction
                  ?.name}
          </span>
        </span>
      </p>
      <p class="p9 p24">
        <span class="p1">Durham Public Schools</span>
      </p>
      <p class="p9 p24">
        <span class="p1">
          2011 Hamlin Road&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p class="p9 p24">
        <span class="p1">Durham, NC 27704</span>
      </p>
      <p class="p20 p64">
        <span class="p1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">1.4.2</span>
        <li class="pli ">
          <span class="p4">
            Payment shall be made within thirty (30) days of receipt of an
            acceptable invoice from the Engineer.
          </span>
        </li>
      </ol>

      <p class="p20 p64">
        <span class="p1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-11">1.5</span>
        <li class="pli ">
          <span class="p4">INSURANCE:</span>
        </li>
      </ol>

      <p class="p20 p64">
        <span class="p1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </p>

      <ol class="ppg flex items-start" start="2">
        <span className="mr-16"></span>
        <li class="pli ">
          <span class="p4">
            The Engineer shall purchase and maintain insurance for protection
            from claims under workers&#39; or workmen&#39;s compensation acts;
            claims resulting from negligent acts or omissions for damages
            because of bodily injury, including personal injury, sickness,
            disease or death of any of the Engineer&#39;s employees or any other
            person; claims for damages because of injury to or destruction of
            personal property including loss of use resulting therefrom; and
            claims arising out
          </span>
        </li>
      </ol>

      <div
        className="h-[6rem] mb-6 flex items-end"
        style={{ fontFamily: "Arial", fontSize: "10pt" }}
      >
        <div>
          <p className="text-[10px]"></p>
          <p className="text-[10px]"></p>
        </div>
        <div className="mx-auto">
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
