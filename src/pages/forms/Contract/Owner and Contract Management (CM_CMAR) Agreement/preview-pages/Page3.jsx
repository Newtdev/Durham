import helperFragments from "../helper-fragments";

export default function (props) {
  return (
    <div className="mb-52 mt-32 text-black">
      <div className="mb-6">
        <helperFragments.SimpleCapsHeading text="Article 1" bold />
        <helperFragments.SimpleCapsHeading
          text="Relationship of the parties"
          underline
        />
      </div>

      <helperFragments.Paragraph
        title="Owner and Construction Manager"
        marker="1.1"
        body="The CM and the Owner shall perform as stated in this Agreement and each accepts the relationship
between them that is established by this Agreement."
      />

      <helperFragments.Paragraph
        title="Standard of Care"
        marker="1.1.1"
        body="The CM covenants with the Owner to furnish its skill and judgment with due care in accordance with
applicable federal, state, and local laws and regulations that are in effect on the date of this Agreement first
written above. The CM shall perform its services, including but not limited to the Basic Services and any
Additional Services authorized in writing by the Owner, consistent with the professional skill and care
ordinarily provided by CMs practicing in or around the Research Triangle Park, North Carolina area under the
same or similar circumstances. The CM shall perform its services as expeditiously as is consistent with such
professional skill and care and the orderly progress of the Project."
      />

      <helperFragments.Paragraph
        title="CM Representations"
        marker="1.1.2"
        body={[
          `The CM represents and warrants that at the time of execution of this Agreement the CM has
and will retain all licenses and certifications required of him to perform the work identified in this Agreement
and associated contract documents. The CM shall keep this licensure in good standing without lapse
throughout the term of this Agreement. The CM shall provide proof of this licensure to the Owner and/or
Design Consultant upon request.`,
          `By execution of this Agreement, the CM warrants that (a) it is an experienced and duly licensed
having the ability and skill necessary to perform all the work required of it under this Agreement in connection
with the design and construction of a project having the scope and complexity of the Project contemplated
herein; (b) it has the capabilities and resources necessary to perform its obligations hereunder; and (c) it is
familiar with all current laws, rules and regulations which are applicable to the construction of the Project, and
that the CM’s work on the Project shall be performed in accordance with all such applicable laws, rules and
regulations.`,
        ]}
      />

      <helperFragments.Paragraph
        title="Owner and Design Consultant"
        marker="1.2"
        body="The Owner shall contract separately with one or more Design Consultants to provide architectural
and engineering design for the Project. The Project is defined in Article 2 of this Agreement. The Design
Consultant’s services shall be as stated in this Agreement and as defined in the form agreement between the
Owner and Design Consultant attached as Appendix A."
      />

      <helperFragments.Paragraph
        title="Owner and Contractors"
        marker="1.3"
        body="The Owner will require the CM to contract directly with such Contractors as may be necessary for
construction or supply of the Project. All such contracts shall be issued consistent with the applicable
provisions of this Agreement and N.C. Gen. Stat. § 143-128 to -132."
      />

      <helperFragments.Paragraph
        title="Relationship of the CM to the Design Consultant and Other Project Participants"
        marker="1.4"
        body="In providing construction management services described in this Agreement, the CM shall maintain a
working relationship with the Design Consultant. The Design Consultant is solely responsible for the Project
design and shall perform in accordance with the Design Consultant Agreement with the Owner and nothing
in this Agreement shall be construed to mean that the CM is responsible for the design of the Project or that
the CM assumes any of the contractual or customary duties of the Design Consultant or any other persons or
parties not specified by this Agreement."
      />
    </div>
  );
}
