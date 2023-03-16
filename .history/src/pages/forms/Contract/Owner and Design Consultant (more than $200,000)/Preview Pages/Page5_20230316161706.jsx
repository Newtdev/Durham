import "./owner.css";
import { parseDynamicInput } from "../../../../../shared-component";
import { Footer } from "./Page1";

const OwnerDesignMore = (props) => {
  const consultants = parseDynamicInput(props?.form_fields?.consultants);
  console.log(consultants);

  const Mechanical = consultants?.find(
    (consultant) => consultant.consultantHired === "Mechanical"
  );

  const Electrical = consultants?.find(
    (consultant) => consultant.consultantHired === "Electrical"
  );
  const Civil = consultants?.find(
    (consultant) => consultant.consultantHired === "Civil"
  );
  const Landscape = consultants?.find(
    (consultant) => consultant.consultantHired === "Landscape"
  );

  const Other = consultants?.find(
    (consultant) => consultant.consultantHired === "Other"
  );

  return (
    <div
      class="flex flex-col justify-between"
      style={{
        height: "10in",
        paddingTop: "54pt",
        margin: "54pt 72pt 72pt 72pt",
      }}
    >
      {/* Page 5 */}
      <div>
        <div>
          <p class="uj10">
            <span class="uj5 uj3 uj8">
              Mechanical: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className={`${props.nottoBeHighlighted}`}>
                {Mechanical?.selectedField}
              </span>
            </span>
          </p>
          <p class="uj10">
            <span class="uj5 uj3 uj8">
              Electrical: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className={`${props.nottoBeHighlighted}`}>
                {Electrical?.selectedField}
              </span>
            </span>
          </p>
          <p class="uj10">
            <span class="uj5 uj3 uj8">
              Civil: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className={`${props.nottoBeHighlighted}`}>
                {Civil?.selectedField}
              </span>
            </span>
          </p>
          <p class="uj10">
            <span class="uj5 uj3 uj8">
              Landscape: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className={`${props.nottoBeHighlighted}`}>
                {Landscape?.selectedField}
              </span>
            </span>
          </p>
          <p class="uj10">
            <span class="uj3 uj8">
              Other:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className={`${props.nottoBeHighlighted}`}>
                {Other?.selectedField}
              </span>
            </span>
          </p>
        </div>

        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-2b" start="2">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              The Design Consultant shall require each of its consultants to
              execute an agreement similar to the agreement attached as Exhibit
              D certifying that the consultant has read and is thoroughly
              familiar with the terms of this Agreement and that the pertinent
              provisions of this Agreement shall govern the work performed by
              the consultant.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-1a" start="2">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Owner Representation</span>
            <span class="uj5 uj3">
              . &nbsp;The Owner shall employ and assign a Project Manager from
              the Durham Public Schools to serve as the Owner&#39;s
              Representative on the Project (&ldquo;Owner&rsquo;s
              Representative&rdquo;). &nbsp;The Owner&#39;s Representative has
              no design responsibilities of any nature. &nbsp;None of the
              activities of the Owner&#39;s Representative supplant or conflict
              with the design, budget or any other services and responsibilities
              customarily furnished by the Design Consultant or subconsultant in
              accordance with generally accepted architectural/engineering
              practices except as otherwise modified by this Agreement.
              &nbsp;Instructions by the Owner to the Design Consultant relating
              to the Services will be issued or made by or through and in
              accordance with procedural, organizational, and documentation
              standards established by the Owner&#39;s Representative.
              &nbsp;Communications and submittals of the Design Consultant to
              the Owner and Contractor shall be in writing and issued or made in
              accord with similar procedural and documentation standards
              established by the Owner&#39;s Representative. The Owner&#39;s
              Representative shall have the authority to establish procedures,
              consistent with this Agreement, to be followed by the Design
              Consultant and Contractor and to call periodic conferences to be
              attended by the Design Consultant, and its subconsultants,
              throughout the term of this Agreement.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-1b" start="3">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Other Consultants.</span>
            <span class="uj5 uj3">
              &nbsp; The Owner may provide drawings, consultation,
              recommendations, suggestions, data and/or other information
              relating to the Project from other consultants under separate
              contract with the Owner, including but not limited to: &nbsp;Land
              Surveying Consultant, Geotechnical Consultant, and/or Materials
              Testing Consultant.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-1c" start="4">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Design Consultant Representation</span>
            <span class="uj5 uj3">. </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-2c" start="3">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              The Design Consultant shall provide a list of all subconsultants
              which the Design Consultant intends to utilize relating to the
              Project prior to commencing work on the Project. &nbsp;The list
              shall include such information on the qualifications of the
              subconsultants as may be requested by the Owner. &nbsp;The Owner
              will review the subconsultants proposed. The Design Consultant
              shall not retain a subconsultant to which the Owner has a
              reasonable objection. &nbsp;The Design Consultant shall be and use
              only individuals or firms that are properly licensed in North
              Carolina and regularly engaged in the fields of expertise required
              for this Project. &nbsp;In addition, the Design Consultant shall
              use an individual or firm with specific expertise in roofing
              certified by licensure as a Registered Roofing Consultant for any
              projects containing any roofing work.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-2d" start="4">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              The Design Consultant shall provide to the Owner a list of the
              proposed key project personnel of the Design Consultant by
              position, including subconsultants, to be assigned to the Project.
              &nbsp;This list shall include such information on the professional
              background of each of the assigned personnel as may be requested
              by the Owner, through the Owner&#39;s Representative. &nbsp;Such
              key personnel and consultants shall be satisfactory to the Owner
              and shall not be changed except with the consent of the Owner
              unless said personnel cease to be employed.
            </span>
          </li>
        </ol>
        <p class="uj28 uj32">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_22-2e" start="5">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              The Design Consultant shall include normal structural, plumbing,
              mechanical, electrical and other engineering services necessary to
              produce a reasonably complete and accurate set of Construction
              Documents. &nbsp;All consultants who will perform services
              required by this Agreement shall execute an agreement with the
              Design Consultant with terms not inconsistent with this Agreement.
            </span>
          </li>
        </ol>
        <p class="uj28 uj32">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj28 uj32">
          <span class="uj5 uj3"></span>
        </p>
      </div>
      <Footer page={5} />
    </div>
  );
};

export default OwnerDesignMore;
