import React from "react";
import { Footer } from "../../App";

const Page4 = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p className="text-center mb-2">ARTICLE 2</p>
        <p className="text-center mb-2">BASIC SERVICES</p>
        <div className="flex gap-14 mb-2">
          <p>2.1</p>
          <p className="underline">Scope of Services</p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.1.1</p>
          <p>
            The Basic Services to be provided by the Engineer shall be as
            described in Exhibit A and shall include all services customarily
            furnished by an engineer and its consultants in accordance with
            generally accepted engineering practices consistent with the terms
            of this Agreement.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.1.2</p>
          <p>
            t is the responsibility of the Engineer to ensure that the Project’s
            Construction Documents require that no asbestos-containing materials
            are to be incorporated in the Project.
          </p>
        </div>
        <div className="flex gap-14 mb-2">
          <p>2.2</p>
          <p className="underline">
            Engineer's Professional Responsibility and Standard of Care.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.1</p>
          <p>
            By execution of this Agreement, the Engineer warrants that (a) it is
            an experienced and duly licensed firm or individual having the
            ability and skill necessary to perform all the Services required of
            it under this Agreement in connection with the design and
            construction of a project having the scope and complexity of the
            Project contemplated herein; (b) it has the capabilities and
            resources necessary to perform its obligations hereunder; and (c) it
            is familiar with all current laws, rules and regulations which are
            applicable to the design and construction of the Project (such laws,
            rules and regulations including, but not limited to, all local
            ordinances, requirements of building codes of city, county, state
            and federal authorities which are applicable to the Project, local
            sanitary laws and rules and regulations, and all orders and
            interpretations by governing public authorities of such ordinances,
            requirements, codes, laws, rules and regulations in effect at the
            time of commencement of services on the Project), and that all
            drawings, specifications and other documents prepared by the
            Engineer shall be prepared in accordance with and shall accurately
            meet, reflect and incorporate all such laws, rules and regulations.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.2</p>
          <p>
            The Engineer hereby represents and agrees that the drawings,
            specifications and other documents prepared by it pursuant to this
            Agreement shall be complete and functional, except as to any
            deficiencies which are due to causes beyond the control of the
            Engineer.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.3</p>
          <p>
            The Engineer shall be responsible for any errors, inconsistencies or
            omissions in the drawings, specifications, other documents or other
            Basic Services. In addition, the Engineer will correct at no
            additional cost to the Owner any and all errors and omissions in the
            drawings, specifications and other documents prepared by the
            Engineer. The Engineer further agrees, at no additional cost, to
            render assistance to the Owner in resolving problems relating to the
            design or specified materials.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.4</p>
          <p>
            It shall be the responsibility of the Engineer throughout the period
            of performance under this Agreement to exercise the abilities,
            skills and care customarily used by Engineers of the training and
            background needed to perform the Services required under this
            Agreement who practice in the Research Triangle, NC area or similar
            communities
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.5</p>
          <p>
            Throughout all phases of the Project, the Engineer and its
            consultants shall meet periodically with the Owner when reasonably
            requested. Participants shall be as determined by the Owner.s
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>2.2.6</p>
          <div>
            <p className="mb-2">
              With each Design Phase submittal of the Engineer to the Owner, the
              Engineer shall make the following statement in writing:
            </p>
            <p>
              "The drawings, specifications, and other documents submitted
              herewith, in my/our professional opinion, fulfill the Scope of
              Work and are in accordance with the requirements of all regulation
              agencies."
            </p>
          </div>
        </div>
      </div>
      <Footer page={4} />
    </div>
  );
};

export default Page4;