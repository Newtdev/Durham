import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div className="mb-20">
      <div>
        <p className="mb-3 text-justify">
          <span className="mr-8">6.12</span>The Owner shall furnish evidence
          satisfactory to the CM that sufficient funds are available and
          committed for the entire cost of the Project. The Owner may authorize
          the CM to proceed with the work on the Project in discrete phases if
          all of the funds required for the entire Project are not identified at
          the time this Agreement is executed by the parties.
        </p>

        <p className="mb-3 text-justify">
          <span className="mr-8">6.13</span>The Owner, its representatives and
          consultants, including Design Consultants, shall endeavor to
          communicate with the Contractors only through the CM.
        </p>

        <p className="mb-3 text-justify">
          <span className="mr-8">6.14</span>The Owner shall send to the CM and
          shall require the Design Consultant to send the CM copies of all
          notices and communications sent to or received by the Owner or Design
          Consultant relating to the Project.
        </p>

        <p className="mb-3 text-justify">
          <span className="mr-8">6.15</span>The Owner shall designate, in
          writing, an officer, employee or other authorized representatives to
          act in the Owner’s behalf with respect to the Project. This
          representative shall be available during working hours and as often as
          may be required to render decisions and furnish information so as not
          to delay the Project. The CM acknowledges that some changes in the
          scope of the Project may require approval by the Board of Education.
          The CM shall notify the Owner in writing of any deadlines for
          responses and how the Owner’s failure to respond by the stated
          deadline will impact the Project schedule.
        </p>

        <p className="mb-3 text-justify">
          <span className="mr-8">6.16</span>The Owner shall make payments to the
          CM on the basis of the Contractors’ payment applications that are
          certified by the CM and on the basis of the CM’s invoices for its
          services performed. Prior to payment by the Owner, the Design
          Consultant shall review and approve the contractors’ pay applications
          in accordance with Paragraphs 3.5.3.5 and 3.5.3.6.
        </p>
      </div>

      {/* Article 7 */}
      <div>
        <div className="text-center">
          <p className="font-bold">ARTICLE 7</p>
          <p>COMPENSATION FOR CM SERVICES AND PAYMENT</p>
          <p className="w-64 h-[2px] my-4 m-auto bg-black"></p>
        </div>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-8">7.1</span>Guaranteed Maximum Price
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.1.1</span>The Owner and CM agree
            that the Guaranteed Maximum Price shall be{" "}
            <span className={`${props?.nottoBeHighlighted}`}>F11</span> dollars
            ($
            <span className={`${props?.nottoBeHighlighted}`}>F12</span>) for
            this Project. The parties further agree that in the event the bids
            received by the CM for the work, including all of the alternates
            accepted by the Owner, pursuant to Article 3.4 of this Agreement
            exceed the line item in the GMP for the cost of the work, the CM
            shall be solely responsible for the additional cost of the work,
            unless this Agreement is terminated by the CM pursuant to Paragraph
            7.1.1.1. In the event that the bids received by the CM for the work,
            including all alternatives accepted by the Owner, are less than the
            line item in the GMP for the cost of the work, the remaining funds
            shall be added to the Owner’s contingency. The scope of work
            included in the bid documents, including any alternates accepted by
            the Owner, shall form the basis of the work to be performed by the
            CM. The CM and Owner agree that the line items in the GMP shall
            consist of the cost of the work, CM’s contingency, and general
            conditions, CM’s fee. The CM and Owner further agree that the dollar
            values for the line items in the GMP stated above consist of the:
          </p>

          <div className="border border-black w-[500px] m-auto">
            <div className="flex border-b border-b-black">
              <p className="p-1 w-[70%] border-r border-r-black">
                Cost of Work
              </p>
              <p className="p-1">
                $<span className={`${props?.nottoBeHighlighted}`}>F13</span>
              </p>
            </div>
            <div className="flex border-b border-b-black">
              <p className="p-1 w-[70%] border-r border-r-black">
                CM construction contingency
              </p>
              <p className="p-1">
                $<span className={`${props?.nottoBeHighlighted}`}>F14</span>
              </p>
            </div>
            <div className="flex border-b border-b-black">
              <p className="p-1 w-[70%] border-r border-r-black">
                General Conditions
              </p>
              <p className="p-1">
                $<span className={`${props?.nottoBeHighlighted}`}>F15</span>
              </p>
            </div>
            <div className="flex border-b border-b-black">
              <p className="p-1 w-[70%] border-r border-r-black">
                CM’s fee for preconstruction services
              </p>
              <p className="p-1">
                $<span className={`${props?.nottoBeHighlighted}`}>F16</span>
              </p>
            </div>
            <div className="flex border-b border-b-black">
              <p className="p-1 w-[70%] border-r border-r-black">
                Construction and post-construction services
              </p>
              <p className="p-1">
                $<span className={`${props?.nottoBeHighlighted}`}>F17</span>
              </p>
            </div>
          </div>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.1.1</span>The parties agree that
            in the event the bids received by the CM for the work, including all
            of the alternates accepted by the Owner, pursuant to Article 3.4 of
            this Agreement exceed the line item in the GMP for the cost of the
            work, then the CM shall have the right to terminate this Agreement.
            The CM shall provide the Owner with notice of intent to terminate
            pursuant to this provision within fifteen (15) days of the CM’s
            receipt of bids for the Project. Prior to a termination pursuant to
            this provision becoming effective, the Owner and CM will review the
            list of alternates, other modifications or value engineering
            requests in order to determine whether an Agreement can be reached
            between the Owner and CM regarding a modified scope of
          </p>
        </div>
      </div>
    </div>
  );
}
