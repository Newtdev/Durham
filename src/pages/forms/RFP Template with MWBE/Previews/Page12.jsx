import React from "react";
import "./PagesStyle.css";
import moment from "moment";

const Page12 = (props) => {
  return (
    <div
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      className=" flex flex-col justify-between h-full "
    >
      <div>
        <hr style={{ pageBreakBefore: "always", display: "none" }} />
        {/* <ul class="c14 lst-kix_list_40-0">
          <li class="c3 c32 c23 c12 li-bullet-3">
            <span class="c2"></span>
          </li>
        </ul> */}
        <p class="c27">
          <span class="c51">6.1 PROPOSAL SCHEDULE</span>
        </p>
        {/* <a id="t.6bc8ac434c6367f0ab7772908dc5ddc723a4e9dd"></a>
      <a id="t.4"></a> */}
        <table class="c136">
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c53">EVENT</span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c53">RESPONSIBILITY</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c53">DATE &amp; TIME</span>
              </p>
              <p class="c3 c17 c12">
                <span class="c53"></span>
              </p>
            </td>
          </tr>
          <tr class="c124">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Issue RFP</span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">DPS</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class={`c66 ${props?.nottoBeHighlighted}`}>
                  {/* <span className={`inline-block`}>
                  {moment(props?.form_fields?.issueDate).format("MMMM")}
                </span>{" "}
                <span className={` inline-block`}>
                  {moment(props?.form_fields?.issueDate).format("Do")},
                </span>{" "}
                <span className={` inline-block`}>
                  {moment(props?.form_fields?.issueDate).format("YYYY")}
                </span> */}
                  {moment(props?.form_fields?.issueDate).format("MMMM D, YYYY")}
                </span>
              </p>
            </td>
          </tr>
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Submit Written Questions</span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Vendor</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class={`c53  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.submissionDate).format(
                    "MMMM D, "
                  )}

                  <span className={`inline-block`}>
                    {" "}
                    {moment(props?.form_fields?.submissionTime).format(
                      "hh:mm a"
                    )}{" "}
                  </span>
                </span>{" "}
              </p>
            </td>
          </tr>
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Provide Response to Questions</span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">DPS</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class={`c53  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.answerDate).format("MMMM D, ")}

                  <span className={`inline-block`}>
                    {moment(props?.form_fields?.answerTime).format("hh:mm a")}{" "}
                  </span>
                </span>{" "}
              </p>
            </td>
          </tr>
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mb-2 mt-1">
                <span class="c48">Mandatory Pre-Bid Meeting</span>
              </p>
              {/* <p class="c3 c17">
              <span class="c48">Lyons Farm Elementary</span>
            </p>
            <p class="c3 c17">
              <span class="c48">906 Scott King Rd.</span>
            </p> */}
              <p className={`c3 c17 ${props?.nottoBeHighlighted} mb-2`}>
                {!props.form_fields ? "" : props?.form_fields?.street}
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">DPS/Vendor</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class="c66 c68">
                  <span class={`c53  ${props?.nottoBeHighlighted}`}>
                    {moment(props?.form_fields?.date).format("MMMM D, ")}

                    <span className={`inline-block`}>
                      {moment(props?.form_fields?.time).format("hh:mm a")}{" "}
                    </span>
                  </span>{" "}
                </span>
              </p>
            </td>
          </tr>
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Submit Proposals </span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Vendor</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class={`c66  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.proposalDate).format("MMMM D, ")}

                  <span className={`inline-block`}>
                    {moment(props?.form_fields?.proposalTime).format("hh:mm a")}{" "}
                  </span>
                </span>{" "}
              </p>
              {/* <p class="c3 c17">
                <span class={`c66  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.proposalDate).format("MMMM, D ")}

                  <span className={`inline-block`}>
                    {moment(props?.form_fields?.proposalTime).format("hh:mm a")}{" "}
                  </span>
                </span>
              </p> */}
            </td>
          </tr>
          <tr class="c11">
            <td class="c75" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">Bid Opening</span>
              </p>
            </td>
            <td class="c87" colspan="1" rowspan="1">
              <p class="c3 c17 mt-1">
                <span class="c48">DPS</span>
              </p>
            </td>
            <td class="c31" colspan="1" rowspan="1">
              <p class="c3 c17 my-1">
                <span class={`c66  ${props?.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.bidOpeningDate).format(
                    "MMMM D, "
                  )}

                  <span className={`inline-block`}>
                    {moment(props?.form_fields?.bidOpeningTime).format(
                      "hh:mm a"
                    )}{" "}
                  </span>
                </span>{" "}
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div className=" flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>13</p>
        </div>
      </div>
    </div>
  );
};

export default Page12;
