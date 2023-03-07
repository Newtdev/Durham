import React from "react";
import "./OwnerLessPages.css";
import moment from "moment";

const Page10 = (props) => {
  const { notarizedDate } = props?.form_fields;

  return (
    <div style={{ margin: "1in", paddingTop: "6rem", height: "10in" }}>
      <p class="p9">
        <span class="p1">STATE OF NORTH CAROLINA</span>
      </p>
      <p class="p9">
        <span class="p1">COUNTY OF DURHAM</span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p27 p61">
        <span class="p4">
          I, a Notary Public in and for the aforesaid County and State, do
          hereby certify that ____________________ personally appeared before me
          this day and acknowledged that he/she is _____________ of
          _________________________., a _________________ (state of
          incorporation) corporation, duly authorized to do business in the
          state of North Carolina, and that by authority duly given and as the
          act of the corporation, the foregoing instrument was signed in its
          name by its ________ , sealed with its corporate seal and attested by
          ___________________ as its Corporate Secretary.
        </span>
        {/* <span class="p4 c33">________ ,</span> */}
        {/* <span class="p1">
          &nbsp;sealed with its corporate seal and attested by
          ___________________ as its Corporate Secretary.
        </span> */}
      </p>
      <p class="p9 p12 p27">
        <span class="p1"></span>
      </p>
      <p class="p9">
        <span class="p4">Witness my hand and notarial seal this </span>
        {notarizedDate ? (
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {moment(props?.form_fields?.notarizedDate).format("Do")}
          </span>
        ) : (
          <span>___</span>
        )}{" "}
        <span class="p4">&nbsp;day of </span>
        {notarizedDate ? (
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {moment(props?.form_fields?.notarizedDate).format("MMMM")}
          </span>
        ) : (
          <span>________</span>
        )}
        <span class="p1">
          ,
          {notarizedDate ? (
            <span
              class={`${props?.nottoBeHighlighted}`}
              style={{ fontSize: "10pt", fontFamily: "Arial" }}
            >
              &nbsp;
              {moment(props?.form_fields?.notarizedDate).format("YYYY")}.
            </span>
          ) : (
            <span>20____.</span>
          )}
        </span>
      </p>
      <p class="p9 p12">
        <span class="p1"></span>
      </p>
      <p class="p9">
        <span class="p1">
          ____________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(SEAL/STAMP)
        </span>
      </p>
      <p class="p9 p46">
        <span class="p1">Notary Public</span>
      </p>
      <p class="p9 p46 p12">
        <span class="p1"></span>
      </p>
      <p class="p9">
        <span class="p1">My commission expires:_______</span>
      </p>
      <p class=" p12">
        <span class="p1"></span>
      </p>

      <div
        className="h-[40rem] mb-6 flex items-end"
        style={{ fontFamily: "Arial", fontSize: "10pt" }}
      >
        <div>
          <p className="text-[10px]"></p>
          <p className="text-[10px]"></p>
        </div>
        <div className="mx-auto">
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default Page10;
