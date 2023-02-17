import React from "react";
import { Footer } from "../../App";

const Page12 = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <p className="text-center">Exhibit B – Hourly Rates </p>
      </div>
      <Footer page={12} />
    </div>
  );
};

export default Page12;