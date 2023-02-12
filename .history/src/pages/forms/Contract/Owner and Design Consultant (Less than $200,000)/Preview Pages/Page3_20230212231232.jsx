import { Footer } from "./Page1";

const PageThree = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p>
          of the performance of this Agreement and caused by negligent acts or
          omissions for which the Engineer is legally liable. Minimum limits of
          coverage shall be
        </p>
        <div className="mb-2 ml-4 flex justify-between">
          <p>
            Insurance Description <br></br> Required Coverage
          </p>
          <p className="mr-12">Minimum</p>
        </div>
        <div className="mb-2 ml-4">
          <p>
            <span className="mr-4">a.</span>Worker' Compensation <br></br>
            Statutory
          </p>
        </div>
        <div className="mb-2 ml-4">
          <p>
            <span className="mr-4">b.</span>Public Liability <br></br>Combined
            Limit
          </p>
        </div>
        <div className="mb-2">
          <div className=" ml-4 flex justify-between">
            <p>Bodily Injury: Each Person</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
          <div className=" ml-4 flex justify-between">
            <p>Bodily Injury: Each Accident</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
          <div className=" ml-4 flex justify-between">
            <p>Property Damage: Each Accident</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
        </div>
        <div className="mb-2 ml-4">
          <p>
            <span className="mr-4">c.</span>Automobile Liability & Property
            Damage <br></br>Combined Limit
          </p>
        </div>
        <div className="mb-2">
          <div className=" ml-4 flex justify-between">
            <p>Bodily Injury: Each Person</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
          <div className=" ml-4 flex justify-between">
            <p>Bodily Injury: Each Accident</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
          <div className=" ml-4 flex justify-between">
            <p>Property Damage: Each Accident</p>
            <p className="mr-12">$1,000,000.00</p>
          </div>
        </div>
        <div className="mb-2 ml-4">
          <p>
            <span className="mr-4">d.</span>Professional Liability:
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.5.1</p>
          <p>
            Evidence of such insurance shall be attached hereto, and the Owner
            shall receive thirty (30) days prior written notice of any
            cancellation, nonrenewal or reduction of coverage of any of the
            policies. Upon notice of such cancellation, nonrenewal or reduction,
            the Engineer shall procure substitute insurance so as to assure the
            Owner that the minimum limits of coverage are maintained
            continuously throughout the period of this Agreement.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.5.2</p>
          <p>
            The Engineer shall deliver to the Owner a Certificate of Insurance
            for its Professional Liability coverage annually, so long as it is
            required to maintain such coverage under paragraph 1.5.4
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.5.3</p>
          <p>
            All insurance policies (with the exception of Professional and
            Public Liability and Worker’s Compensation) required under this
            agreement shall name the Owner as an additional insured for the
            insurance and shall contain a waiver of subrogation against the
            Owner
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.5.4</p>
          <p>
            The Engineer shall maintain in force during the performance of this
            Agreement and for one year after final completion of the Project,
            the Professional Liability insurance coverage referenced above
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.6</p>
          <p>
            QUALIFICATIONS: All work shall be performed by qualified personnel
            under the supervision of a North Carolina Licensed Engineer, and the
            documents submitted shall bear the Engineer’s seal and certification
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>1.7</p>
          <p>
            USE OF DRAWINGS: It is understood that the Owner, or his
            representatives and/or agents, may reproduce the drawings without
            modifications and distribute the prints without incurring obligation
            for additional compensation to the Engineer. One reproducible of all
            work products shall be provided to the Owner for this purpose.
          </p>
        </div>
      </div>

      <Footer page={3} />
    </div>
  );
};

export default PageThree;
