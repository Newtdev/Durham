import "./owner.css";
import { Footer } from "./Page1";
import currency from "currency.js";

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
      {/* Page 25 */}
      <div>
        <ol class="uj7 lst-kix_list_36-3d" start="4">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              In the event the Owner requests changes to the Project or elects
              not to complete the Project or any portion thereof, which would
              decrease the most recently approved CCAP, compensation due the
              Design Consultant, as to such deletion or decrease, shall be
              adjusted downwards for remaining Services to be performed but not
              for Services already performed to the date of receipt by the
              Design Consultant of the written requested change or notice of the
              intent not to complete part or all of the Project, in accordance
              with the basic payment schedule set forth in Paragraph 4.2 hereof.
              &nbsp;Unless otherwise agreed in writing by the parties, the
              reduction in the Design Consultant&rsquo;s fee shall be calculated
              by multiplying the dollar amount of the reduction in the CCAP by
              the fee percentage noted in 4.1.1 above and then multiplying that
              dollar amount by the percentage of design work not completed.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_36-2b" start="2">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              The Basic Services Compensation stated in Paragraph 4.1.1 includes
              all compensation and other payments due the Design Consultant
              (manpower, overhead, profit, direct costs, travel, copies,
              postage, telephone and facsimile service, etc.) in the performance
              of the Basic Services.
            </span>
          </li>
        </ol>
        <p class="uj2 uj48 uj87">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj87 uj48">
          <span class="uj3 mr-[2.8rem]">4.2</span>
          <span class="uj3 uj13">Payments to the Design Consultant</span>
          <span class="uj5 uj3">. &nbsp;</span>
        </p>
        <p class="uj2 uj87 uj48">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj87 uj48">
          <span class="uj5 uj3 ml-[3.9rem]">
            Payments on account of the Design Consultant shall be made as
            follows:
          </span>
        </p>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_37-2a start" start="1">
          <li class="uj4 li-bullet-34">
            <span class="uj3">
              Payments for Basic Services, including any design phase change
              orders, shall be made monthly in proportion to services performed
              so that the compensation at the completion of each Phase shall{" "}
            </span>
            <span class="uj3">
              equal the following percentages of the Basic Services Compensation
            </span>
            <sup>
              <a href="#cmnt1" id="cmnt_ref1">
                [a]
              </a>
            </sup>
            <span class="uj5 uj3">
              . &nbsp;Payment shall be made monthly upon presentation of the
              Design Consultant&rsquo;s statement of services, fully supported
              by invoices, time cards, and certifications that all
              subconsultants have been paid, and other documentation as
              requested by the Owner.
            </span>
          </li>
        </ol>
        <h2 class="uj11 uj63 uj48">
          <span class="uj5 uj3"></span>
        </h2>
        <div className="ml-[5rem] mr-[3rem]">
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Design Narrative Phase</p>
            <p className={`uj5 uj3 text-right `}>
              <span className={` ${props.nottoBeHighlighted}`}>
                ({currency(props?.form_fields?.narrativePhase).format()})
              </span>
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Schematic Design Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              <span className={` ${props.nottoBeHighlighted}`}>
                ({currency(props?.form_fields?.schematicPhase).format()})
              </span>
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Design Development Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              <span className={` ${props.nottoBeHighlighted}`}>
                ({currency(props?.form_fields?.developmentPhase).format()})
              </span>
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Construction Contract Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              (
              {currency(props?.form_fields?.constructionContractPhase).format()}
              )
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Permitting and Bidding/Negotiation Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              ({currency(props?.form_fields?.negotiationPhase).format()})
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Construction Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              ({currency(props?.form_fields?.constructionPhase).format()})
            </p>
          </div>
          <p class="uj2 uj48">
            <span class="uj5 uj3"></span>
          </p>
          <div className="grid grid-cols-2">
            <p className="uj5 uj3">Post Construction Services Phase</p>
            <p className="uj5 uj3 text-right">
              {" "}
              (
              {currency(props?.form_fields?.constructionServicesPhase).format()}
              )
            </p>
          </div>
        </div>

        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_37-2b" start="2">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              No deductions shall be made from the Basic Services Compensation
              on account of penalty, liquidated damages, retainage or other sums
              withheld from payments to Contractor.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_37-2c" start="3">
          <li class="uj4 li-bullet-37">
            <span class="uj5 uj3">
              Deductions may be made from the Basic Services Compensation on
              account of errors and omissions in the drawings, specifications
              and other documents prepared by the Design Consultant or in the
              Design Consultant&rsquo;s performance of its obligations under
              this Agreement.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_37-2d" start="4">
          <li class="uj4 li-bullet-26">
            <span class="uj5 uj3">
              Payments due the Design Consultant under the Agreement shall bear
              interest at the legal rate commencing forty-five (45) days after
              the date the billing is received by the Owner, unless the Owner
              has a good faith basis to believe it is entitled to withhold
              payment. &nbsp;If the Owner disputes the Design Consultant&rsquo;s
              claim for compensation, the Design Consultant, unless otherwise
              directed by the Owner, will continue to perform as required
              hereunder until final resolution of such dispute. The Design
              Consultant is required to continue with the work in the event of a
              dispute, without waiver of any claims.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
      </div>
      <Footer page={25} />
    </div>
  );
};

export default OwnerDesignMore;
