import React from "react";
import "./OwnerLessPages.css";

const Page13 = (props) => {
  return (
    <div style={{ margin: "1in", paddingTop: "6rem", height: "10in" }}>
      <p class="p9">
        <span class="p52">Exhibit C</span>
      </p>
      <p class="p9 p12">
        <span class="p55 p52 p49"></span>
      </p>
      <p class="p2">
        <span class="p52 p49 p55">
          Sexual Offender Registry Check Certification Form
        </span>
      </p>
      <p class="p2 p12">
        <span class="p55 p52 p49"></span>
      </p>
      <p class="p9">
        <span class="p7">
          Check the appropriate box to indicate the type of check:
        </span>
      </p>
      <div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="checkbox"
            value="Initial"
            name="type"
            checked={
              props?.form_fields.sexualOffenderOption === "Initial"
                ? true
                : false
            }
            readOnly
            className="w-3 h-3 text-gray-600 bg-gray-100 border-gray-300"
          />
          <label for="default-radio-1" className="ml-2 text-gray-900 p7">
            Initial
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="checkbox"
            value="Supplimental"
            name="type"
            checked={
              props?.form_fields.sexualOffenderOption === "Supplemental"
                ? true
                : false
            }
            readOnly
            className="w-3 h-3 text-gray-600 bg-gray-100 border-gray-300"
          />
          <label for="default-radio-1" className="ml-2 text-gray-900 p7">
            Supplimental
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="checkbox"
            value="Annual"
            name="type"
            checked={
              props?.form_fields.sexualOffenderOption === "Annual"
                ? true
                : false
            }
            className="w-3 h-3 text-gray-600 bg-gray-100 border-gray-300"
          />
          <label for="default-radio-1" className="ml-2  text-gray-900 p7">
            Annual
          </label>
        </div>

        <p></p>
      </div>
      <p class="p9 p12">
        <span class="p7"></span>
      </p>
      <p class="p20">
        <span class="p7">
          I,{" "}
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "12pt", fontFamily: "Arial" }}
          >{`${props?.awardee[0]?.first_name} ${props?.awardee[0]?.last_name}`}</span>{" "}
          (insert name),{" "}
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "12pt", fontFamily: "Arial" }}
          >
            {props?.awardee[0]?.title}
          </span>{" "}
          (insert title) of{" "}
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "12pt", fontFamily: "Arial" }}
          >
            {props?.awardee[0]?.company_name}
          </span>{" "}
          (insert company name) hereby certify that I have performed all of the
          required sexual offender registry checks required under this Agreement
          for all contractual personnel (employees, agents, ownership personnel,
          or contractors ) who may be used to deliver goods or provide services
          under this Agreement, including the North Carolina Sex Offender and
          Public Protection Registration Program, the North Carolina Sexually
          Violent Predator Registration Program, and the National Sex Offender
          Registry. &nbsp;I further certify that none of the individuals listed
          below appears on any of the above-named registries and that I will not
          assign any individual to deliver goods or perform services under this
          Agreement if said individual appears on any of the sex offender
          registries. &nbsp;I agree to maintain all records and documents
          associated with these registry checks, and that I will provide such
          records and documents to the school system upon request. &nbsp;I
          specifically acknowledge that the school system retains the right to
          audit these records to ensure compliance with this section at any time
          in the school system&rsquo;s sole discretion. &nbsp;I acknowledge that
          I am required to perform these checks and provide this certification
          form before any work is performed under the Agreement (initial check),
          any time additional contractual personnel may perform work under the
          Agreement (supplemental check), and at each anniversary date of the
          Agreement (annual check). &nbsp; &nbsp;
        </span>
      </p>
      <p class="p9">
        <span class="p7">&nbsp; &nbsp; &nbsp;</span>
      </p>
      <p class="p9">
        <span class="p55 p52 p49">
          Contractual Personnel
          Names&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job
          Title
        </span>
      </p>
      <p class="p9">
        <span>
          1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________
        </span>
      </p>
      <p class="p9">
        <span>
          2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________
        </span>
      </p>
      <p class="p9">
        <span>
          3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________
        </span>
      </p>
      <p class="p9">
        <span>
          4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________
        </span>
      </p>
      <p class="p9">
        <span>
          5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________
        </span>
      </p>
      <p class="p9">
        <span>(attach additional page(s) if needed)</span>
      </p>
      <p class="p9 p12">
        <span></span>
      </p>
      <p class="p9">
        <span class="p7">
          I attest that the forgoing information is true and accurate to the
          best of my knowledge.
        </span>
      </p>
      <p class="p9 p12">
        <span class="p7"></span>
      </p>
      {/* <p class="p9">
        <span class="p7">
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {`${props?.awardee[0]?.first_name} ${props?.awardee[0]?.last_name}`}
          </span>{" "}
          (print name) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____________________
          (signature)
        </span>
      </p> */}
      <p class="p9">
        <span class="p45 flex justify-between">
          <span className="inline-block">
            <span
              class={`border-b border-b-black inline-block text-center leading-5 ${props?.nottoBeHighlighted}`}
              style={{ fontSize: "10pt", fontFamily: "Arial", width: "15rem" }}
            >
              {`${props?.awardee[0]?.first_name} ${props?.awardee[0]?.last_name}`}
            </span>
            <span>(print name)</span>
          </span>

          <span> ______________________ (signature)</span>
        </span>
      </p>
      <p class="p9 p12">
        <span class="p7"></span>
      </p>
      <p class="p9 p12">
        <span class="p7"></span>
      </p>{" "}
    
      <p class="p9">
        <span class="p45 flex justify-between">
          <span className="inline-block">
            <span
              class={`border-b border-b-black inline-block text-center leading-5 ${props?.nottoBeHighlighted}`}
              style={{ fontSize: "10pt", fontFamily: "Arial", width: "15rem" }}
            >
              <span>{props?.awardee[0]?.title}</span>
            </span>
            <span>(title)</span>
          </span>

          <span> __________________________ (date)</span>
        </span>
      </p>
      <p class="p9 p12">
        <span class="p7"></span>
      </p>
      <p class="p16 p12 p20">
        <span class="p7"></span>
      </p>
      <div>
        <p class="p9 p12">
          <span class="p49 p71"></span>
        </p>
      </div>
      <div
        className="h-[14rem] mb-6 flex items-end"
        style={{ fontFamily: "Arial" }}
      >
        <div>
          <p className="text-[10px]"></p>
          <p className="text-[10px]"></p>
        </div>
        <div className="mx-auto">
          <p>13</p>
        </div>
      </div>
    </div>
  );
};

export default Page13;
