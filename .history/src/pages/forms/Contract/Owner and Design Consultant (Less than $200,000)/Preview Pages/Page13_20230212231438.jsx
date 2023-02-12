import { Footer } from "./Page1";

const PageThirteen = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p className="font-bold mb-2">Exhibit C</p>
        <p className="font-bold mb-2 text-center">
          Sexual Offender Registry Check Certification Form
        </p>
        <p>Check the appropriate box to indicate the type of check:</p>
        <p>Initial F17</p>
        <p>Supplementa F18</p>
        <p>Annual F19</p>
        <p className="mt-2 mb-2">
          I, _________F20______ (insert name), _____F21_________ (insert title)
          of ___F22_________ (insert company name) hereby certify that I have
          performed all of the required sexual offender registry checks required
          under this Agreement for all contractual personnel (employees, agents,
          ownership personnel, or contractors ) who may be used to deliver goods
          or provide services under this Agreement, including the North Carolina
          Sex Offender and Public Protection Registration Program, the North
          Carolina Sexually Violent Predator Registration Program, and the
          National Sex Offender Registry. I further certify that none of the
          individuals listed below appears on any of the above-named registries
          and that I will not assign any individual to deliver goods or perform
          services under this Agreement if said individual appears on any of the
          sex offender registries. I agree to maintain all records and documents
          associated with these registry checks, and that I will provide such
          records and documents to the school system upon request. I
          specifically acknowledge that the school system retains the right to
          audit these records to ensure compliance with this section at any time
          in the school system’s sole discretion. I acknowledge that I am
          required to perform these checks and provide this certification form
          before any work is performed under the Agreement (initial check), any
          time additional contractual personnel may perform work under the
          Agreement (supplemental check), and at each anniversary date of the
          Agreement (annual check).
        </p>
        <div>
          <div className="font-bold flex">
            <p>Contractual Personnel Names</p>
            <p>Job Title</p>
          </div>
          <p>
            1. __________________________________________________
            __________________________________________________<br></br>
            2. ________________________ ________________________<br></br>
            3. ________________________ ________________________<br></br>
            4. ________________________ ________________________<br></br>
            5. ________________________ ________________________<br></br>
            (attach additional page(s) if needed)
          </p>
        </div>
      </div>
      <Footer page={13} />
    </div>
  );
};

export default PageThirteen;
