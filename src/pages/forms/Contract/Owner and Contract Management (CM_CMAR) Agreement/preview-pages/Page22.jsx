import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div className="mb-20">
      {/* Article 4 */}
      <div>
        <div className="text-center">
          <p className="font-bold">ARTICLE 4</p>
          <p>DURATION OF THE CONSTRUCTION MANAGER’S SERVICES</p>
          <p className="w-64 h-[2px] my-4 m-auto bg-black"></p>
        </div>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-8">4.1</span>The duration of the CM’s Basic
            services under this Agreement shall be from the date of this
            Agreement through the issuance of final payment. The CM shall
            provide any warranty phase services at no additional cost to the
            Owner.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">4.1.1</span>The commencement date for
            the CM’s Basic Services shall be the date of execution of this
            Agreement by the Owner as stated herein or the date on which the
            Owner issues to the CM a written instruction to proceed with Basic
            Services, whichever is earlier.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">4.1.2</span>The CM’s Basic Services
            shall be performed for the periods of time indicated in this
            Agreement. If portions of design and construction occur
            simultaneously, some of the phase durations may overlap.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">4.1.2.1</span>The CM’s Basic Services
            during the Pre-Design Phase shall be performed as required during
            the pre-design phase.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">4.1.2.2</span>The CM’s Basic Services
            during the Design Phase shall be performed as required during the
            design phase.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">4.1.2.3</span>The CM’s Basic Services
            during the Procurement Phase shall be performed as required during
            the procurement phase.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">4.1.2.4</span>The CM shall achieve
            substantial completion of the Project on or before{" "}
            <span className={`${props?.nottoBeHighlighted}`}>
              {" "}
              <Highlighted> F10 </Highlighted>
            </span>
            , unless the Owner and CM agree to a different date in writing. The
            date for final completion shall be thirty (30) days after
            substantial completion.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">4.2</span> Delays and Extensions of Time
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">4.2.1</span>The time during which the
            CM or any of the contractors is delayed in the performance of the
            work by the issuance of any required permits, acts of god, excessive
            inclement weather, fires, floods, epidemics, quarantine
            restrictions, strikes, riots, civil commotions or freight embargoes,
            or other conditions beyond the CM’s or the contractors’ control and
            which the CM or the contractors could not reasonably have foreseen
            and provided against, except for delays caused solely by the Owner,
            Design Consultant or their consultants, shall be added to the time
            for completion of the work stated in the Agreement. Neither the
            Owner nor the Design Consultant shall be obligated or liable to the
            CM or the contractors for indirect or direct damages, costs or
            expenses of any nature which the CM, the contractors, or any other
            person may incur as a result of any of the delays, interferences, or
            changes in sequence in the work included in this section 4.2.1. The
            CM hereby expressly waives any claims against the Owner and the
            Design Consultant on account of any indirect or direct damages, lost
            profits, costs or expenses of any nature which the CM, the
            contractors or any other person may incur as a result of any delays,
            interferences, changes in sequence or the like, and it is understood
            and agreed that the CM’s sole and exclusive remedy in any such
            events shall be an extension of the contract time in accordance with
            the contract documents
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">4.2.2</span>In the event Project
            delays arise from or out of any act or omission of the Owner, Design
            Consultant or their consultants, the time during which the Project
            is delayed shall be added to the Agreement and the
          </p>
        </div>
      </div>
    </div>
  );
}
