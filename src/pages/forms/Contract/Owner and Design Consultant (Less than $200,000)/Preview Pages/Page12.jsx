import { Footer } from "./Page1";

const PageTwelve = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between "
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div>
        <p className="text-center">Exhibit B – Hourly Rates </p>
      </div>
      <Footer page={12} />
    </div>
  );
};

export default PageTwelve;
