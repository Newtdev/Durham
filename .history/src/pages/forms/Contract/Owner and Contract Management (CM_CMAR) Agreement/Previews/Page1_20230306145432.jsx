import React from "react";
import moment from "moment";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";

export const Footer = ({ page, name }) => {
  return (
    <div className="h-[26.6rem] mb-6 flex flex-col justify-end">
      <p className=" mb-4 text-center"></p>
      <div className="ml-14">
        <p className="text-[10px]"></p>
      </div>
      <div className="w-8  ml-auto">
        <p>{page}</p>
      </div>
    </div>
  );
};

const Page1 = (props) => {
  const year = moment(props?.form_fields?.agreementDate).format("YYYY");
  console.log(year);

  var digit_map = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  var tens_map = [
    "Zero",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  var yearInWords = "";
  var digits = year.toString().split("");
  digits.forEach(function (digit, index) {
    if (index < 2) {
      yearInWords += tens_map[digit] + " ";
    } else if (index === 2) {
      yearInWords += digit_map[digit] + " Hundred ";
    } else {
      yearInWords += digit_map[digit] + " ";
    }
  });
  const correctDate =
    yearInWords.split(" ")[0] + " " + yearInWords.split(" ")[4];
  console.log(correctDate);

  const ConstructionManager = props.awardee.find(
    (awardee) => awardee.role === "Construction Manager"
  );

  const DesignConsultant = props.awardee.find(
    (awardee) => awardee.role === "Design Consultant"
  );

  console.log(ConstructionManager);

  return (
    <Wrapper>
      <div className="mb-8">
        <div>
          <p class="fp f5 f18">
            <span class="f55"></span>
          </p>
        </div>
        <p class="fp f23">
          <span class="f21">Agreement Between</span>
        </p>
        <h2 class="fp f23">
          <span class="f21">Owner and Construction Manager at Risk</span>
        </h2>
        <p class="fp f14">
          <span class="f0"></span>
        </p>
        <p class="fp f14">
          <span class="f0"></span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">AGREEMENT</span>
        </p>
        <p class="fp f15">
          <span class="f0">
            Made this{" "}
            {!props.agreementDate ? (
              <span className={`${props?.nottoBeHighlighted}`}>
                {moment(props?.form_fields?.agreementDate).format("Do")}
              </span>
            ) : (
              <span>_______</span>
            )}{" "}
            day of &nbsp;{" "}
            {!props.agreementDate ? (
              <span className={`${props?.nottoBeHighlighted}`}>
                {moment(props?.form_fields?.agreementDate).format("MMMM")}
              </span>
            ) : (
              <span>_______</span>
            )}{" "}
            in the year of Two Thousand and
            {correctDate ? (
              <span className={`${props?.nottoBeHighlighted}`}>
                {correctDate}
              </span>
            ) : (
              <span>_______</span>
            )}{" "}
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            BETWEEN The Owner: Durham Public Schools Board of Education
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            And the Construction Manager (hereinafter referred to as the
            &ldquo;CM&rdquo;):{" "}
            {ConstructionManager ? (
              <span
                className={`${props.nottoBeHighlighted}`}
              >{`${ConstructionManager?.first_name} ${ConstructionManager?.last_name}`}</span>
            ) : (
              <span></span>
            )}
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            For services in connection with the Project known as:
          </span>
        </p>
        <p class={`fp f15 `}>
          <span class={`f0 `}>
            <span className={`${props?.nottoBeHighlighted} underline`}>
              {props?.project?.name}
            </span>
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f000 text-red-800">
            As further described in Article 2:
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className={`fgh underline ${props?.nottoBeHighlighted}`}>
              {props?.form_fields?.projectName}
            </span>
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">Design Consultant:</span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          {DesignConsultant ? (
            <span className={`fgh ${props?.nottoBeHighlighted}`}>
              {`${DesignConsultant?.first_name} ${DesignConsultant?.last_name}`}
            </span>
          ) : (
            <span> </span>
          )}
        </p>
        {/* <p class="fp f15">
          <span class="f000">
            ________________________________________________
          </span>
        </p>
        <p class="fp f15">
          <span class="f000">
            ________________________________________________
          </span>
        </p> */}
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            The Owner and CM, in consideration of their mutual covenants herein,
            agree as set forth below:
          </span>
        </p>
      </div>
      <Footer page="1" name="AGREEMENT FOR DESIGN CONSULTANT SERVICES" />
    </Wrapper>
  );
};

export default Page1;
