import React from "react";
import moment from "moment";
import "./OwnerLessPages.css";
import { textAlign } from "@mui/system";

const Page9 = (props) => {
  const { sustainaibilityDate, financialOfficerSignDate } = props?.form_fields;
  return (
    <div style={{ margin: "1in", paddingTop: "6rem", height: "10in" }}>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.12</span>
        <li class="pli ">
          <span class="p4 ">
            If any one or more of the provisions contained in this Agreement,
            for any reason, are held to be invalid, illegal, or unenforceable in
            any respect, such invalidity, illegality or unenforceability shall
            not affect any other provisions thereof and this Agreement shall be
            construed as if such invalid, illegal or unenforceable provision had
            never been contained herein.
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.13</span>
        <li class="pli ">
          <span class="p4 ">
            Except where specifically stated otherwise, all periods of time
            stated in terms of days shall be considered periods calculated in
            calendar days.
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.14</span>
        <li class="pli ">
          <span class="p4 ">
            The headings or captions within this Agreement shall be deemed set
            forth in the manner presented for the purposes of reference only and
            shall not control or otherwise affect the information set forth
            therein or interpretation thereof
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.15</span>
        <li class="pli ">
          <span class="p4 ">
            For the purpose of this Agreement unless the context clearly
            indicates otherwise, the singular includes the plural, and the
            plural includes the singular.
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.16</span>
        <li class="pli ">
          <span class="p4 ">
            This Agreement may be executed in any number of counterparts, each
            of which shall be deemed an original, and the counterparts shall
            constitute one and the same instrument, which shall be sufficient
            evidence by any one thereof.
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <ol class="ppg flex items-start" start="2">
        <span className="mr-8">6.17</span>
        <li class="pli ">
          <span class="p4 ">
            This Agreement shall inure to the benefit of and be binding on the
            heirs, successors, assigns, trustees and personal representatives of
            the Owner, as well as the permitted assigns and trustees of the
            Engineer.
          </span>
        </li>
      </ol>
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>{" "}
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>{" "}
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>{" "}
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>{" "}
      <p class="p20 p12 p22">
        <span class="p1"></span>
      </p>
      <p>
        <span class="p1">
          In witness whereof, each individual executing this agreement
          acknowledges that he/she/it is authorized to execute this agreement on
          behalf of his/her/its principle and further acknowledges the execution
          of this agreement the day and year first written above.
        </span>
      </p>
      <p class="p63">
        <span class="p4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <a id="t.4bp86798565020ed43cp5023aa2fb4395b6f4768"></a>
      <a id="t.0"></a>
      <table class="p54">
        <tr class="p42">
          <td class="p40" colspan="1" rowspan="1">
            <p class="p20 p69 ml-2">
              <span class="p4">
                <span
                  class={`${props?.nottoBeHighlighted}`}
                  style={{ fontSize: "10pt", fontFamily: "Arial" }}
                >{`${props?.durham_profile?.director_of_construction_and_sustainability?.name}`}</span>
                , Director of Construction and Sustainability
              </span>
            </p>
          </td>
          <td class="p67" colspan="1" rowspan="1">
            <p class="p20 p12">
              <span class="p10 p4"></span>
            </p>
          </td>
          <td class="p47" colspan="1" rowspan="2">
            {sustainaibilityDate && (
              <span
                class={`${props?.nottoBeHighlighted} inline-block`}
                style={{
                  fontSize: "10pt",
                  fontFamily: "Arial",
                  position: "relative",
                  bottom: "1.3rem",
                  right: "0.5rem",
                  width: "9rem",
                }}
              >
                <span>
                  {moment(props?.form_fields?.sustainaibilityDate).format(
                    "MMMM"
                  )}
                </span>{" "}
                <span style={{}}>
                  {moment(props?.form_fields?.sustainaibilityDate).format("DD")}
                </span>
                ,{" "}
                <span>
                  {moment(props?.form_fields?.sustainaibilityDate).format(
                    "YYYY"
                  )}
                </span>
              </span>
            )}
            {sustainaibilityDate == null && <span></span>}
            <p class="p9">
              <span class="p1">Date</span>
            </p>
          </td>
        </tr>
      </table>
      <p class="p21 p12">
        <span class="c38"></span>
      </p>
      <p class="p9 p12">
        <span class="c38"></span>
      </p>
      <p class="p9">
        <span class="p1">
          This instrument has been pre-audited in the manner required by the
          School Budget and Fiscal Control Act.
        </span>
      </p>
      <p class="p9 p12">
        <span class="c38"></span>
      </p>
      <p class="p9 p12">
        <span class="c38"></span>
      </p>
      <p class="p12 p59">
        <span class="c38"></span>
      </p>
      <a id="t.5339143a490a30504eaa05f479b5cf4625efa405"></a>
      <a id="t.1"></a>
      <table class="p54">
        <tr class="p42">
          <td class="p40" colspan="1" rowspan="1">
            <p class="p9 c39">
              <span class="p1">
                <span
                  class={`${props?.nottoBeHighlighted}`}
                  style={{ fontSize: "10pt", fontFamily: "Arial" }}
                >{`${props?.durham_profile?.chief_finance_officer?.name}`}</span>
                , Chief Finance Officer, Durham Public Schools
              </span>
            </p>
          </td>
          <td class="p50" colspan="1" rowspan="1">
            <p class="p9 p12">
              <span class="p1"></span>
            </p>
          </td>

          <td class="p47" colspan="1" rowspan="2">
            {financialOfficerSignDate ? (
              <span
                class={`${props?.nottoBeHighlighted} inline-block`}
                style={{
                  fontSize: "10pt",
                  fontFamily: "Arial",
                  position: "relative",
                  bottom: "1.3rem",
                  right: "0.5rem",
                  width: "9rem",
                }}
              >
                <span>
                  {moment(props?.form_fields?.financialOfficerSignDate).format(
                    "MMMM"
                  )}
                </span>{" "}
                <span style={{}}>
                  {moment(props?.form_fields?.financialOfficerSignDate).format(
                    "DD"
                  )}
                </span>
                ,{" "}
                <span>
                  {moment(props?.form_fields?.financialOfficerSignDate).format(
                    "YYYY"
                  )}
                </span>
              </span>
            ) : (
              <span> </span>
            )}
            <p class="p9">
              <span class="p1">Date</span>
            </p>
          </td>
        </tr>
      </table>
      {/* <p class="p21">
        <span class="c38">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p> */}
      <div
        class="p11"
        className="w-60 border-4 border-[#c0c0c0] rounded-sm ml-4"
      >
        <p>
          <span class="p15">
            Endorsement:{" "}
            <span
              class={`${props?.nottoBeHighlighted}`}
              style={{ fontSize: "10pt", fontFamily: "Arial" textAlign: "right" }}
            >
              {" "}
              {
                props?.durham_profile
                  ?.construction_capital_planning_project_manager?.name
              }
            </span>
          </span>
        </p>
        <p>
          <span class="p15 text-right">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Project Manager
          </span>
        </p>
        <p>
          <span class="p15">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durham
            Public Schools
          </span>
        </p>
        <p>
          <span class="p15">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Construction &amp; Capital Planning
          </span>
        </p>
      </div>
      <p class="p59 p12">
        <span class="p1"></span>
      </p>
      <p class="p20 p12">
        <span class="c38"></span>
      </p>
      <p class="p20">
        <span class="">
          {" "}
          <span
            class={`${props?.nottoBeHighlighted}`}
            style={{ fontSize: "10pt", fontFamily: "Arial" }}
          >
            {props?.awardee[0]?.company_name}
          </span>
        </span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p9">
        <span class="p4 p49">
          By:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span class="p1">
          ______________________________________________________
        </span>
      </p>
      <p class="p20 p12">
        <span class="p1"></span>
      </p>
      <p class="p9">
        <span class="p1">
          Name/Title:
          &nbsp;_______________________________________________________
        </span>
      </p>
      <p class="p9 p12">
        <span class="p1"></span>
      </p>
      <div
        className="h-[3rem] mb-6 flex items-end"
        style={{ fontFamily: "Arial", fontSize: "10pt" }}
      >
        <div>
          <p className="text-[10px]"></p>
          <p className="text-[10px]"></p>
        </div>
        <div className="mx-auto">
          <p>9</p>
        </div>
      </div>
    </div>
  );
};

export default Page9;
