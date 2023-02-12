import helperFragments from "../helper-fragments";

export default function (props) {
  const Highlighted = helperFragments.HighlightedText({
    highlighted: props.nottoBeHighlighted,
  });

  return (
    <div className="mb-20">
      <div>
        <div>
          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.3.3</span>Should concealed or
            unknown physical conditions be encountered that differ materially
            from those identified in the drawings or specifications, the
            Guaranteed Maximum Price may be adjusted by change order in
            accordance with Paragraph 5.2.2.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.3.4</span>The Design Consultant
            shall have the authority to order minor changes in the Project
            consistent with the intent of the drawings and specifications and
            not involving an adjustment in the Guaranteed Maximum Price or
            change of the construction completion date. Such changes may be
            affected by written order only and shall be signed by the Owner and
            the CM prior to the work being performed.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.3.5</span>In the event that the
            bids for the construction of the Project are less than the line
            item(s) in the GMP for the construction of the Project, the GMP
            shall be reduced dollar for dollar to reflect the savings. The
            parties agree that any savings based upon the receipt of bids shall
            be retained solely by the Owner.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.1.4</span>Unused Funds
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.4.1</span>In the event that there
            are any funds remaining in any contingency, those funds shall be
            retained solely by the Owner.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.4.2</span>In the event that all of
            the funds allocated for the CM’s general conditions are not used,
            the Owner shall retain all of those funds.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.4.3</span>In the event that there
            are unused allowances or other cost of work funds, all of those
            funds, plus the associated CM fee, shall be retained by the Owner.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.1.4.4</span>In the event that the
            bids for the construction of the Project are less than the line
            item(s) in the GMP for the construction of the Project, the Owner’s
            contingency shall be increased dollar for dollar to reflect the
            savings. The parties agree that any savings based upon the receipt
            of bids shall be retained solely by the Owner
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">7.4</span>Lump Sum
          </p>

          <p className="mb-3 text-justify">
            <span className="ml-[3.5rem]">The</span>Owner shall compensate the
            CM for Basic Services on the basis of a Lump Sum in accordance with
            the terms and conditions of this Agreement as follows:
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.4.1</span>Compensation for Basic
            Services
          </p>
        </div>

        {/* F18 */}
        <p className="mb-3 text-justify">
          <span className="ml-[3.5rem]">The</span> CM shall be compensated for
          performing Basic Services described in the pre-design phase (Paragraph
          3.2), design phase (Paragraph 3.3) and the procurement phase
          (Paragraph 3.4) for a total lump sum in the amount of
          <span className={`${props?.nottoBeHighlighted}`}>F18</span> dollars ($
          <span className={`${props?.nottoBeHighlighted}`}>F19</span>) that
          shall be divided by the number of months scheduled for the basic
          services in Paragraphs 3.2, 3.3 and 3.4 and paid in equal monthly
          installments as the services are performed. The CM shall be
          compensated for performing basic services described in the
          construction phase (Paragraph 3.5) and post-construction phase
          (Paragraph 3.6) for a total lump sum in the amount of{" "}
          <span className={`${props?.nottoBeHighlighted}`}>F20</span> dollars ($
          <span className={`${props?.nottoBeHighlighted}`}>F21</span>
          ). In the event there are changes in the work that require an
          adjustment in the CM’s construction/post-construction fee, the fee
          adjustment shall be based upon{" "}
          <span className={`${props?.nottoBeHighlighted}`}>F22</span>% of the
          cost of the work added or deleted from the Project. The fee for these
          phases shall be paid in proportion to the percentage of the actual
          cost of the work paid by the Owner. The cost of the work as used in
          this section shall be the total dollar amount of the construction
          contracts awarded by the CM to contractors for the performance of the
          work, minus any unused allowances or other deductive change orders.
          The CM’s contingency shall not be included in the calculation or
          payment of the CM’s fee. Progress payments for the work performed by
          the contractors shall be paid as the work is performed and approved in
          accordance with this Agreement. The CM acknowledges that the Owner
          only has funds for the basic services in Paragraphs 3.2, 3.3, and 3.4
          at the time this Agreement is being executed and that the CM is not
          authorized to perform any services in Paragraphs 3.5 and 3.6 or any
          other provisions of this Agreement without the express written
          permission of the Owner.
        </p>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.4.2</span>Payments
          </p>

          <p className="mb-3 text-justify">
            <span className="ml-[3.5rem]">Payments</span>to the CM shall be made
            monthly, not later than forty-five (45) days after receipt of the
            CM’s Invoice by the Owner.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[0.4rem]">7.4.2.2</span> Payments due to the CM
            that are unpaid for more than forty-five (45) days from the due date
            of the CM’s invoice shall not bear interest from the due date.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.4.3</span>Compensation for
            Additional Services
          </p>

          <p className="mb-3 text-justify">
            <span className="ml-[3.5rem]">The</span>CM shall be compensated, and
            payments shall be made for performing Additional Services in an
            amount and on terms mutually agreeable between the Owner and CM.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.4.4</span>Auditing Rights
          </p>

          <p className="mb-3 text-justify">
            <span className="ml-[3.5rem]">The</span>CM shall keep all records
            and supporting documentation which concern or relate to the work,
            general conditions, or other monies paid hereunder for a minimum of
            three (3) years from the date of termination of this Agreement or
            the date the Project achieves final completion. The CM shall require
            all of its subcontractors to likewise retain all of their Project
            records and supporting documentation. The Owner, and any duly
            authorized agents or representatives of the Owner, shall be provided
            access to all such records and supporting documentation during
            normal business hours upon reasonable request by the Owner. Further,
            the Owner, and any duly authorized agents or representatives of the
            Owner, shall have the right to audit, inspect and copy all of the
            CM’s and any contractor’s Project records and documentation. The
            access, inspection, copying and auditing rights shall survive the
            termination of this Agreement.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">7.5</span>Adjustments to the CM’s
            Compensation
          </p>

          <p className="mb-3 text-justify">
            <span className="ml-[3.5rem]">The</span>CM shall notify the Owner as
            specified in this Agreement when material changes to the scope of
            the Project or a part thereof or when delays caused in whole or in
            part by the Owner or Design Consultant are expected to increase or
            extend the Project’s critical path or the scope or duration of the
            CM’s services. If the change results in a delay to the Project’s
            critical path or a material increase in the Project’s scope, the CM
            shall be entitled to receive an increase in the duration of this
            Agreement and/or additional compensation for the change in
            accordance with this Agreement.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">7.6</span>Liquidated Damages
          </p>
        </div>

        {/* F23 */}
        <p className="mb-3 text-justify">
          <span className="mr-[1.2rem]">7.6.1</span>Should the CM fail to
          substantially complete the Project or phase on or before the date
          stipulated for substantial completion of the Project (or such later
          date as may result from extension of time granted by Owner), the CM
          shall pay or the Owner may retain from the funds otherwise to be paid
          to the CM the sum of $
          <span className={`${props?.nottoBeHighlighted}`}>F23</span> as
          substantial completion liquidated damages for each consecutive
          calendar day beyond the date established in this Agreement that
          Project fails to achieve substantial completion as defined in this
          Agreement, which sum is agreed upon as a reasonable and proper measure
          of damages which the Owner will sustain per day by failure of the CM
          to complete work within time as stipulated; it being recognized by the
          Owner and the CM that the injury to the Owner which could result from
          a failure of the CM to complete on schedule is uncertain and cannot be
          computed exactly. This amount is the minimum measure of damages the
          Owner will sustain due to delay in the completion of the work, which
          shall include but not be limited to the loss of use of the facilities,
          the relocation of students and services, the cost of Owner’s time and
          resources, damage to Owner’s reputation, and storage of furniture and
          other materials. The inability of the Owner to quantify actual damages
          shall not prevent the recovery of liquidated damages.
        </p>

        {/* F24 */}
        <p className="mb-3 text-justify">
          <span className="mr-[1.2rem]">7.6.2</span>For each consecutive
          calendar day that the work remains incomplete after the date
          established for final completion of the Project, the CM shall pay or
          Owner will retain from the compensation otherwise to be paid to the CM
          the sum of $
          <span className={`${props?.nottoBeHighlighted}`}>F24</span> as final
          completion liquidated damages. This amount is agreed upon as a
          reasonable and proper measure of damages the Owner will sustain due to
          the delay in the completion of all remedial work, the delay in the
          correction of the deficient work, the disruption to the school and the
          learning environment, the cost of Owner’s time and resources, damage
          to Owner’s reputation, and the inability to use the facilities fully.
          This amount is in addition to the liquidated damages prescribed above
          for substantial completion.
        </p>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.6.3</span>The amount of liquidated
            damages set forth in Paragraphs 7.6.1 and 7.6.2 hereinabove shall be
            assessed cumulatively. The items of cost included in the assessment
            of liquidated damages are defined above. This provision of
            liquidated damages does not bar Owner’s right to enforce other
            rights and remedies against CM, including but not limited to,
            specific performance or injunctive relief. In no way shall costs for
            liquidated damages be construed as a penalty to the CM.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.6.4</span>
            Notwithstanding any other provisions of the Agreement, if there is
            concurrent delay in the completion of the work, the CM shall be
            liable for liquidated damages as specified in this Agreement during
            such period of concurrent delay. For the purpose of this section
            7.6, concurrent delay means (a) a delay event caused in part by the
            Owner or its agent and in part by the CM or its contractors,
            subcontractors, sub-subcontractos, or (b) one or more delay event
            caused solely by the Owner, its agents, or the Design Consultant,
            and one or more delay event caused in part by the CM,
            subcontractors, sub-subcontractors or agents, each of which would
            have resulted in a delay without the other and which delays run
            concurrently, or at the same time. In the event that the foregoing
            provision making the CM liable for liquidated damages during a
            period of concurrent delay is found to be unenforcable, then the
            parties agree that in the event of a concurrent delay, the extent of
            the delay will be apportioned between the Owner and the CM, and the
            CM will be responsible for liquidated damages as set forth in the
            section 7.6 for those portions of the delay which are apportioned to
            the CM, its subconctractors, sub-subcontractors, agents or material
            suppliers.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">7.6.5</span>The amount of liquidated
            damages set forth in Paragraphs 7.6.1 and 7.6.2 hereinabove shall
            not include additional legal or design professional costs that may
            result from the CM’s default. If such legal or design professional
            costs are incurred by the Owner, the CM shall be liable to the Owner
            for those costs in addition to the liquidated damages amount set
            forth hereinabove and in 7.7 Summary of Monetary Amounts.
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-8">7.7</span>The following summary is intended
            to provide a single location for all relevant monetary amounts
            included in this Agreement as of the date of execution of the
            Agreement. The following list shall take precedence over any
            inconsistencies in the amounts otherwise incorporated into this
            Agreement. The amounts in this Agreement shall only be revised by
            written agreement between the parties. The monetary amounts follow:
          </p>
        </div>

        {/* F25 */}
        <div className="ml-20 grid grid-cols-2">
          <div>
            <p>GMP</p>
            <p>Cost of Work</p>
            <p>CM Preconstruction Fee</p>
            <p>CM Construction Fee</p>
            <p>CM Construction Contingency</p>
            <p>Owner Contingency</p>
            <p>General Conditions</p>
            <p>Liquidated Damages-Substantial</p>
            <p>Liquidated Damages - Final</p>
          </div>

          <div>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F25</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F26</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F27</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F28</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F29</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F30</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F31</span>
            </p>
            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F32</span>
              /Day
            </p>

            <p>
              $<span className={`${props?.nottoBeHighlighted}`}>F33</span>
              /day
            </p>
          </div>
        </div>
      </div>

      {/* Article 8 */}
      <div className="mt-6">
        <div className="text-center">
          <p className="font-bold">ARTICLE 8</p>
          <p>INSURANCE AND MUTUAL INDEMNITY</p>
          <p className="w-64 h-[2px] my-4 m-auto bg-black"></p>
        </div>

        <div>
          <p className="mb-3 text-justify">
            <span className="mr-8">8.1</span>CM's Liability Insurance
          </p>

          <p className="mb-3 text-justify">
            <span className="mr-[1.2rem]">8.1.1</span>The CM shall purchase at
            their own expense and maintain in companies properly licensed by the
            department of insurance of the State of North Carolina and rated “a”
            or better by a.m. best company as will protect it, the Owner, the
            Design Consultant and their agents, representatives, and employees
            from claims as set forth below which may arise out of or result from
            the CM’s operations under the Agreement, whether such
          </p>
        </div>
      </div>
    </div>
  );
}
