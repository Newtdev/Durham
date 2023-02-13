export const Footer = ({ page, name }) => {
  return (
    <div className="h-[26.6rem] mb-6 flex flex-col justify-end">
      <p className=" mb-4 text-center">{page}</p>
    </div>
  );
};

const PageOne = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between "
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="border ">
        {/* Page 1 */}
        <div className="text-center mb-8">
          <h1 className="text-[13.5px] font-bold mb-10">
            CONSULTANT SERVICES AGREEMENT
          </h1>
          <p className="mb-8">BETWEEN</p>
          <p className="mb-8 font-bold">
            Durham Public Schools Board of Education
          </p>
          <p className="mb-12">hereinafter referred to as the Owner</p>
          <p className="mb-8">AND</p>
          <p className="mb-8">
            <span className={` inline-block w-36 border-b border-black`}>
              {/* {props?.awardee[0]?.company_name} */}
              F1
            </span>
          </p>
          <p className="mb-24">Hereinafter referred to as the Engineer </p>
          <p className="mb-8">F2</p>
        </div>
      </div>
      <Footer page="1" />
    </div>
  );
};

export default PageOne;
