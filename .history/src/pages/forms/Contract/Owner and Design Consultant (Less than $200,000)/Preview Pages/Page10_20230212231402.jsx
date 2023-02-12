import { Footer } from "./Page1";

const PageTen = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p>STATE OF NORTH CAROLINA</p>
        <p className="mb-2">COUNTY OF DURHAM</p>
        <p className="mb-2">
          I, a Notary Public in and for the aforesaid County and State, do
          hereby certify that ____________________ personally appeared before me
          this day and acknowledged that he/she is _____________ of
          _________________________., a _________________ (state of
          incorporation) corporation, duly authorized to do business in the
          state of North Carolina, and that by authority duly given and as the
          act of the corporation, the foregoing instrument was signed in its
          name by its ________ , sealed with its corporate seal and attested by
          ___________________ as its Corporate Secretary.
        </p>
        <p className="mb-2">
          Witness my hand and notarial seal this ___F14__ day of___F15__ ,
          20__F16___.Clarify
        </p>
        <p>___________________________________ (SEAL/STAMP)</p>
        <p>My commission expires:_______</p>
      </div>
      <Footer page={10} />
    </div>
  );
};

export default PageTen;
