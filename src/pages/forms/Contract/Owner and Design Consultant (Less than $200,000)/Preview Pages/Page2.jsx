import { Footer } from "./Page1";

const PageTwo = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between "
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div>
        <p className="text-center mb-2">ENGINEERING CONSULTANT AGREEMENT</p>
        <p className="mb-2">
          This AGREEMENT made this _F3__ day of __F4______, 20_F5_ between
          Durham Public Schools Board of Education, located at 2011 Hamlin Rd
          Durham NC 27704 (hereinafter, “Owner”), and _CONSULTANT FIRMS NAME,
          located at _____________F7________ (hereinafter, the “Engineer”). The
          Agreement is for Professional Services to be provided as authorized by
          the Owner and as outlined in the Proposal and Scope of Services
          attached to this Agreement as Exhibit A.
        </p>
        <p className="text-center mb-2">ARTICLE 1</p>
        <p className="text-center mb-2">TERMS AND CONDITIONS</p>
        <div className="flex gap-12 mb-2">
          <p>1.1</p>
          <p>
            <span className="mr-3">WORK:</span> The Engineer shall perform the
            services outlined on the attached Exhibit A as authorized by the
            Owner and in accordance with the terms and conditions of this
            Agreement. The Engineer agrees that all plans, drawing,
            specifications, designs and surveys in draft or final form are the
            property of the Owner, who may demand possession of them at anytime
            from Engineer and receive the same within three business days of
            demand.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.2</p>
          <div>
            <p className="mb-2">
              <span className="mr-3">TIME:</span> The parties acknowledge that
              this Project is time sensitive and must be completed in its
              entirety no later than the time shown in Exhibit A. The parties
              further agree that the Engineer’s Scope of Work will proceed and
              be executed in accordance with the proposed Timeline attached to
              this agreement as Exhibit A.
            </p>
            <p>
              In the event that circumstances beyond the Engineer’s control
              force a delay that prohibits or may prohibit the Engineer’s
              compliance with the schedule, the Engineer shall inform the Owner
              immediately.
            </p>
          </div>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.3</p>
          <div>
            <p className="mb-2">
              <span className="mr-3">COMPENSATION:</span> The Engineer shall be
              compensated in accordance with the fee schedule included in
              Exhibit A to this Agreement and this Paragraph. The fee described
              in Exhibit A shall cover the cost of the engineering services
              (including the furnishing of all materials, apparatus, labor and
              any required insurance). Attached as Exhibit B is an hourly rate
              schedule for any services to be provided by the hour and any
              additional services that may be authorized under this Agreement.
              The Engineer shall not be compensated for any work or services
              performed without specific authorization from Owner.
            </p>
          </div>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.4</p>
          <div>
            <p className="mb-2">BILLING AND PAYMENT</p>
          </div>
        </div>
        <div className="flex gap-9 mb-2">
          <p>1.4.1</p>
          <div>
            <p className="mb-2">
              Billing for the work shall be directed to the Owner at the
              following address:
            </p>
            <p className="ml-12">
              Fredrick A. Davis, || F25 <br></br> II Durham Public Schools{" "}
              <br></br> 2011 Hamlin Road <br></br>
              Durham, NC 27704
            </p>
          </div>
        </div>
        <div className="flex gap-9 mb-2">
          <p>1.4.2</p>
          <div>
            <p className="mb-2">
              Payment shall be made within thirty (30) days of receipt of an
              acceptable invoice from the Engineer
            </p>
          </div>
        </div>
        {/* <div className="flex gap-9 mb-2">
          <p>1.4.1</p>
          <div>
            <p className="mb-2">INSURANCE:</p>
            <p>
              The Engineer shall purchase and maintain insurance for protection
              from claims under workers' or workmen's compensation acts; claims
              resulting from negligent acts or omissions for damages because of
              bodily injury, including personal injury, sickness, disease or
              death of any of the Engineer's employees or any other person;
              claims for damages because of injury to or destruction of personal
              property including loss of use resulting therefrom; and claims
              arising out
            </p>
          </div>
        </div> */}
      </div>
      <Footer page="2" />
    </div>
  );
};

export default PageTwo;
