import { Footer } from "./Page1";

const PageSeven = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between "
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div>
        <div className="flex gap-12 mb-2">
          <p>6.3</p>
          <p>
            <span className="mr-2"> </span>
            Except as otherwise set forth in this Agreement, the Engineer and
            the Owner shall not be liable to each other for any delays in the
            performance of their respective obligations and responsibilities
            under this Agreement which arise from causes beyond their control
            and without their fault or negligence, including but not limited to,
            any of the following events or occurrences: fire, flood, earthquake,
            epidemic, atmospheric condition of unusual severity, war, state or
            local government acting in its sovereign capacity, and strikes.
            Owner shall not be liable to the Engineer for acts or failures to
            act by the Contractor or the Owner's consultants.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.4</p>
          <p>
            <span className="mr-4"> </span>
            <span className="underline">
              Lunsford Act/Criminal Background Checks
            </span>
            . Engineer also acknowledges that G.S. § 14-208.18 prohibits anyone
            required to register as a sex offender under Article 27A of Chapter
            14 of the General Statutes from knowingly being on the premises of
            any school. Engineer shall conduct or arrange to have conducted, at
            its own expense, sexual offender registry checks on each of its
            owners, employees, agents and subcontractors (“contractual
            personnel”) who will engage in any service on or delivery of goods
            to School System property or at a School System sponsored event,
            except checks shall not be required for individuals who are solely
            delivering or picking up equipment, materials, or supplies at: (1)
            the administrative office or loading dock of a school; (2)
            non-school sites; (3) schools closed for renovation; or (4) school
            construction sites. The checks shall include at a minimum checks of
            the State Sex Offender and Public Protection Registration Program,
            the State Sexually Violent Predator Registration Program, and the
            National Sex Offender Registry (“the Registries”). For Engineer’s
            convenience only, all of the required registry checks may be
            completed at no cost by accessing the United States Department of
            Justice Sex Offender Public Website at http://www.nsopw.gov/.
            Engineer shall provide certification on the Owner’s Sexual Offender
            Registry Check Certification Form (Exhibit C) that the registry
            checks were conducted on each of its contractual personnel providing
            services or delivering goods under this Agreement prior to the
            commencement of such services or the delivery of such goods.
            Engineer shall conduct a current initial check of the registries (a
            check done more than 30 days prior to the date of this Agreement
            shall not satisfy this contractual obligation). In addition,
            Engineer agrees to conduct the registry checks and provide a
            supplemental certification form before any additional contractual
            personnel are used to deliver goods or provide services pursuant to
            this Agreement. Engineer further agrees to conduct annual registry
            checks of all contractual personnel and provide annual
            certifications at each anniversary date of this Agreement. Engineer
            shall not assign any individual to deliver goods or provide services
            pursuant to this Agreement if said individual appears on any of the
            listed registries. Engineer agrees that it will maintain all records
            and documents necessary to demonstrate that it has conducted a
            thorough check of the registries as to each contractual personnel,
            and agrees to provide such records and documents to the School
            System upon request. Engineer specifically acknowledges that the
            School System retains the right to audit these records to ensure
            compliance with this section at any time in the School System’s sole
            discretion. Failure to comply with the terms of this provision shall
            be deemed a material breach of the Agreement. In addition, the
            School System may conduct additional criminal records checks at the
            School System’s expense. If the School System exercises this right
            to conduct additional criminal records checks, Engineer agrees to
            provide within seven (7) days of request the full name, date of
            birth, state of residency for the past ten years, and any additional
            information requested by the School System for all contractual
            personnel who may deliver goods or perform services under this
            Agreement. Engineer further agrees that it has an ongoing obligation
            to provide the School System with the name of any new contractual
            personnel who may deliver goods or provide services under the
            Agreement. The School System reserves the right to prohibit any
            contractual personnel of Engineer from delivering goods or providing
            services under this Agreement if the School System determines, in
            its sole discretion, that such contractual personnel may pose a
            threat to the safety or well-being of students, school personnel or
            others.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.5</p>
          <p>
            <span className="mr-2"> </span>
            <span className="underline">Relationship of Parties</span>. Engineer
            shall be an independent contractor of the School System, and nothing
            herein shall be construed as creating a partnership or joint
            venture; nor shall any employee of Engineer be construed as an
            employee, agent, or principal of the School System.
          </p>
        </div>
      </div>
      <Footer page={7} />
    </div>
  );
};

export default PageSeven;
