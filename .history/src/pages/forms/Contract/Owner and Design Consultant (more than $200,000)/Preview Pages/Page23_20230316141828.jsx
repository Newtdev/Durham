import "./owner.css";
import { Footer } from "./Page1";
import currency from "currency.js";
import { doConvert } from "../../../../../shared-component";
import moment from "moment";

const OwnerDesignMore = (props) => {
  return (
    <div
      class=" border border-black flex flex-col justify-between"
      style={{
        height: "10in",
        paddingTop: "54pt",
        margin: "54pt 72pt 72pt 72pt",
      }}
    >
      {/* Page 23 */}
      <div>
        <ol class="uj7 lst-kix_list_34-3b" start="2">
          <li class="uj4 li-bullet-25">
            <span class="uj5 uj3">
              During all phases of the Project the Design Consultant shall
              prepare such estimates as it deems necessary, at no additional
              cost to the Owner, to assure itself that the estimated Project
              cost is within the CCAP and shall supply such data, information or
              estimates as the Owner may require to substantiate the Design
              Consultant&#39;s contention that the Project cost is within the
              CCAP.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-3c" start="3">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              With each Design Phase submittal and each interim, revisionary or
              subsequent design submittal of the Design Consultant to the Owner,
              the Design Consultant shall make the following statement in
              writing:
            </span>
          </li>
        </ol>
        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj16">
          <span class="uj3">
            &quot;The drawings, specifications, and other documents submitted
            herewith, in my/our professional opinion, fulfill the Program of
            Requirements and the Project indicated by them may be purchased by
            the Owner in a construction contract or contracts, the total price
            of which &nbsp;will not exceed the CCAP, which is{" "}
          </span>
          <span class="uj3 uj8">
            {" "}
            <span className={`${props?.nottoBeHighlighted}`}>
              {doConvert(props?.form_fields?.ccap)}
            </span>
          </span>
          <span class="uj38 uj8">&nbsp;</span>
          <span class="uj3 uj8">Dollars ($</span>
          <span class="uj38 uj8">
            &nbsp;{" "}
            <span className={`${props?.nottoBeHighlighted} uj3 uj8`}>
              {currency(props?.form_fields?.ccap).format()}
            </span>
          </span>
          <span class="uj38">&nbsp;</span>
          <span class="uj3">) (based on bid date of no later than </span>
          <span class="uj38">&nbsp;</span>
          <span class="uj38 uj8">
            <span className={`${props?.nottoBeHighlighted} uj3 uj8`}>
              {moment(props?.form_fields?.ownerDeadline).format("MMMM D, YYYY")}
            </span>
          </span>
          <span class="uj38">&nbsp; </span>
          <span class="uj3">
            ) for this Project, and may be constructed completely within said
            CCAP and the in-progress contingency fund of{" "}
          </span>
          <span class="uj3 uj8">
            <span className={`${props?.nottoBeHighlighted} uj3 uj8`}>
              {props?.form_fields?.percentage}
            </span>
          </span>
          <span class="uj5 uj3">
            &nbsp; % of said price. Further, in my/our professional opinion, the
            above mentioned documents submitted herewith have been prepared in
            accordance with the Agreement for Design Consultant Services.&quot;
          </span>
        </p>
        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj16">
          <span class="uj5 uj3">
            With each Design Phase submittal and each interim, revisionary or
            subsequent design submittal of the Design Consultant to the Owner
            and with his certification of the final payment to the contractor,
            the Design Consultant shall make the following statement in writing:
          </span>
        </p>
        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj16">
          <span class="uj5 uj3">
            &quot;No asbestos-containing building materials have been specified
            and to the best of my/our knowledge and belief none have been
            incorporated into this Project.&quot;
          </span>
        </p>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-2g" start="7">
          <li class="uj4 li-bullet-26">
            <span class="uj5 uj3">
              Incorporated herein and made a part of this Agreement as Exhibit B
              is the Program of Requirements which defines the physical and
              environmental parameters for the Project and establishes the
              design objectives and criteria. &nbsp;No deviations from the
              Program of Requirements shall be allowed without written approval
              for change, in the form of a Design Phase Change Order executed by
              the Owner and Design Consultant.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-2h" start="8">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              Incorporated herein and made a part of this Agreement as Exhibit C
              is the Management Plan for the Project which defines the sequence
              and timing of the design and construction activities. &nbsp;The
              Management Plan is the schedule to be adhered to by the Design
              Consultant. &nbsp;No deviation from the Management Plan shall be
              allowed without written approval for a change in the Management
              Plan, in the form of a Design Phase Change Order executed by the
              Owner and Design Consultant. &nbsp;Should the Owner determine that
              the Design Consultant is behind schedule due to the fault of the
              Design Consultant, the Design Consultant shall expedite and
              accelerate its efforts, including additional manpower and/or
              overtime, to maintain the approved design schedule at no
              additional cost to the Owner.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-1b" start="3">
          <li class="uj4 li-bullet-25">
            <span class="uj3 uj13">Project Conferences</span>
            <span class="uj5 uj3">. </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-2i" start="9">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              Throughout all phases of the Project, the Design Consultant and
              its subconsultants shall meet periodically with the Owner when
              reasonably requested. &nbsp;Participants shall be as determined by
              the Owner. &nbsp;As a minimum, regularly scheduled meetings which
              the Design Consultant will attend include:
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-3d" start="4">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">Design Consultant orientation. </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-3e" start="5">
          <li class="uj4 li-bullet-35">
            <span class="uj5 uj3">
              Predesign conferences on a biweekly basis.{" "}
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-3f" start="6">
          <li class="uj4 li-bullet-27">
            <span class="uj5 uj3">Predesign project analysis sessions. </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_34-3g" start="7">
          <li class="uj4 li-bullet-39">
            <span class="uj5 uj3">Design conferences on a monthly basis. </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
      </div>
      <Footer page={23} />
    </div>
  );
};

export default OwnerDesignMore;
