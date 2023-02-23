import React from "react";
import "./PagesStyle.css";

const Page12 = (props) => {
  return (
    <div
      style={{
        size: "21cm 29.7cm",
        // margin: "0cm 0cm 3cm 0cm;",
        border: "1px solid black",
        paddingTop: "2.54cm",
        marginBottom: "21.54cm",
      }}
    >
      <hr style={{ pageBreakBefore: "always", display: "none" }} />
      <ul class="c14 lst-kix_list_40-0">
        <li class="c3 c32 c23 c12 li-bullet-3">
          <span class="c2"></span>
        </li>
      </ul>
      <p class="c27">
        <span class="c51">6.1 PROPOSAL SCHEDULE</span>
      </p>
      {/* <a id="t.6bc8ac434c6367f0ab7772908dc5ddc723a4e9dd"></a>
      <a id="t.4"></a> */}
      <table class="c136">
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c53">EVENT</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c53">RESPONSIBILITY</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c53">DATE &amp; TIME</span>
            </p>
            <p class="c3 c17 c12">
              <span class="c53"></span>
            </p>
          </td>
        </tr>
        <tr class="c124">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Issue RFP</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">DPS</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c66 c68">March 3, 2022</span>
            </p>
          </td>
        </tr>
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Submit Written Questions</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Vendor</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c53 c68">March 10 2:00 pm</span>
            </p>
          </td>
        </tr>
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Provide Response to Questions</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">DPS</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c53 c68">March 14 5:00 pm</span>
            </p>
          </td>
        </tr>
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Mandatory Pre-Bid Meeting</span>
            </p>
            <p class="c3 c17">
              <span class="c48">Lyons Farm Elementary</span>
            </p>
            <p class="c3 c17">
              <span class="c48">906 Scott King Rd.</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">DPS/Vendor</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class={`c66 ${props?.nottoBeHighlighted}`}>
                {props?.form_fields?.issueDate}
              </span>
            </p>
          </td>
        </tr>
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Submit Proposals </span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Vendor</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c66 c68">March 22 1:00 pm</span>
            </p>
          </td>
        </tr>
        <tr class="c11">
          <td class="c75" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">Bid Opening</span>
            </p>
          </td>
          <td class="c87" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c48">DPS</span>
            </p>
          </td>
          <td class="c31" colspan="1" rowspan="1">
            <p class="c3 c17">
              <span class="c66 c68">March 22 2:00 pm</span>
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Page12;
