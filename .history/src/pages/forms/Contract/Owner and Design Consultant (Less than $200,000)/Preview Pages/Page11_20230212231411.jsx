import { Footer } from "./Page1";

const PageEleven = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p className="text-center">
          Exhibit A – Proposal and Scope of Services
        </p>
      </div>
      <Footer page={11} />
    </div>
  );
};

export default PageEleven;
