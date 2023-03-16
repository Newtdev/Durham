import "./owner.css";
import { Footer } from "./Page1";
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
      {/* Page 3 */}
      <div>
        <p class="uj36">
          <span class="uj49">A</span>
          <span class="uj1">GREEMENT FOR</span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">DESIGN CONSULTANT SERVICES</span>
        </p>
        <p class="uj2">
          <span class="uj1"></span>
        </p>
        <p class="uj11">
          <span class="uj38">This Agreement is </span>
          <span class="uj3">made this </span>
          <span class="uj3 uj8">
            <span className={`${props.nottoBeHighlighted}`}>
              {moment(props?.form_fields?.agreementDate).format("Do")}
            </span>
          </span>
          <span class="uj3">
            &nbsp;day of{" "}
            <span className={`${props.nottoBeHighlighted}`}>
              {moment(props?.form_fields?.agreementDate).format("MMMM")}
            </span>{" "}
            <span className={`${props.nottoBeHighlighted}`}>
              {moment(props?.form_fields?.agreementDate).format("YYYY")}
            </span>{" "}
            by and between the Owner{" "}
          </span>
          <span class="uj49">
            Durham County, by and through it authorized agent the Durham Public
            Schools
          </span>
          <span class="uj38">&nbsp;Board of Education, </span>
          <span class="uj3">and the Design Consultant:</span>
          <span class="uj38" style={{ fontFamily: "Arial" }}>
            &nbsp;{" "}
            <span class={`${props.nottoBeHighlighted}`}>
              {props?.awardee[0]?.company_name}
            </span>
            , f
          </span>
          <span class="uj5 uj3">
            or Professional Services in connection with the Project known as:
          </span>
        </p>
        <p class="uj2">
          <span class="uj1"></span>
        </p>
        <p class="uj11">
          <span class="uj38">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span class="uj38 uj8" style={{ fontFamily: "Arial" }}>
            {" "}
            <span className={`${props.nottoBeHighlighted}`}>
              {props?.projectDetails?.name}
            </span>
          </span>
        </p>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11">
          <span class="uj5 uj3">
            The Owner and the Design Consultant agree as set forth below:
          </span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">ARTICLE 1</span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">DEFINITIONS</span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj11">
          <span class="uj3">
            The following words and phrases where appearing in initial
            capitalization, shall for the purposes of this Agreement have the
            following meanings:
          </span>
          <span class="uj5 uj74">&nbsp;</span>
        </p>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-1 start" start="1">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Project</span>
            <span class="uj3">
              . &nbsp;The objective is to design and construct a{" "}
            </span>
            <span class={`uj5 uj3 uj8 ${props.nottoBeHighlighted}`}>
              {props?.form_fields?.projectObjective}
            </span>
          </li>
        </ol>
        {/* <p class="uj10">
          <span class="uj3 uj8">
            ___________________________________________________________________________.
          </span>
        </p> */}
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-2 start" start="1">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3 uj8">
              <span class={`uj5 uj3 uj8 ${props.nottoBeHighlighted}`}>
                {props?.form_fields?.studentNumber}
              </span>
              nbsp; bnsp; school with enrollment of _____ students, the
              approximate square footage for the facility would be approximately
              _____________square feet maximum.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3 uj8"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-2" start="2">
          <li class="uj4 li-bullet-0">
            <span class="uj17 uj3 uj13">Project Parameters</span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-3 start" start="1">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              The physical parameters are: the school is to be designed to
              accommodate{" "}
            </span>
            <span class="uj5 uj3 uj8">
              ___ students. The school will be built at ____________________ in
              Durham County.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-3" start="2">
          <li class="uj4 li-bullet-0">
            <span class="uj17 uj3 uj13">
              Overview of Design Consultant&#39;s Scope
            </span>
            <span class="uj5 uj3">
              : The Design Consultant&#39;s fee includes the complete design of
              a new facility including all architectural, sitework, extensions
              of utilities. off-site roadway improvements, traffic impact study,
              civil, structural, mechanical, plumbing. electrical, landscape.
              fire suppression, food service. Technology infrastructure.
              structured cabling, phone system, paging system, data systems,
              intrusion detection system, video surveillance system, audio
              systems, video distribution system, and any other work required
              for a complete set of design documents. The Design Consultant
              shall assist in the development of the Building Program and
              Educational Specifications. The fee also includes coordination
              with Owner provided vendors for furniture and equipment to design
              the spaces.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-1a" start="2">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Design Consultant</span>
            <span class="uj5 uj3">
              . &nbsp;Design Consultant as used herein shall mean the architect
              or engineer identified above.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-1b" start="3">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Subconsultant</span>
            <span class="uj5 uj3">
              . &nbsp;Subconsultant as used herein shall mean any consultant or
              sub-consultant retained by or on the behalf of the Design
              Consultant for the performance of any Services pursuant to this
              Agreement. &nbsp;The Design Consultant&rsquo;s use of a
              subconsultant shall not relieve the Design Consultant of any
              responsibility for providing the Services outlined in this
              Agreement.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-1c" start="4">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Services</span>
            <span class="uj5 uj3">
              . &nbsp;The Services to be performed by the Design Consultant
              under this Agreement shall consist of the Basic Services described
              in Article 3, any Additional Services under Article 7, and any
              other obligations of the Design Consultant included in this
              Agreement.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_21-1d" start="5">
          <li class="uj4 li-bullet-0">
            <span class="uj3 uj13">Construction Contract</span>
            <span class="uj5 uj3">
              . &nbsp;The Construction Contract shall consist of the plans and
              specifications prepared by the Design Consultant, and any addenda
              and change orders thereto, and the Owner-Contractor Agreement, and
              all General Conditions, Amended Conditions, and
            </span>
          </li>
        </ol>
      </div>
      <Footer page={3} />
    </div>
  );
};

export default OwnerDesignMore;
