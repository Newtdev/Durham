import React from "react";
import { Footer } from "../../App";

const Page9 = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <div className="flex gap-12 mb-2">
          <p>6.14</p>
          <p>
            <span className="mr-4"> </span>
            The headings or captions within this Agreement shall be deemed set
            forth in the manner presented for the purposes of reference only and
            shall not control or otherwise affect the information set forth
            therein or interpretation thereof.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.15</p>
          <p>
            <span className="mr-4"> </span>
            For the purpose of this Agreement unless the context clearly
            indicates otherwise, the singular includes the plural, and the
            plural includes the singular.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.16</p>
          <p>
            <span className="mr-4"> </span>
            This Agreement may be executed in any number of counterparts, each
            of which shall be deemed an original, and the counterparts shall
            constitute one and the same instrument, which shall be sufficient
            evidence by any one thereof.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.17</p>
          <p>
            <span className="mr-4"> </span>
            This Agreement shall inure to the benefit of and be binding on the
            heirs, successors, assigns, trustees and personal representatives of
            the Owner, as well as the permitted assigns and trustees of the
            Engineer.
          </p>
        </div>
        <p className="mt-24 mb-12">
          n witness whereof, each individual executing this agreement
          acknowledges that he/she/it is authorized to execute this agreement on
          behalf of his/her/its principle and further acknowledges the execution
          of this agreement the day and year first written above.
        </p>
        <div className="flex justify-between mb-12">
          <div>
            <p className="border-b border-black border-2 w-[30rem]"></p>
            <p>____F8________, Director of Construction and Sustainability</p>
          </div>
          <div>
            <p className="border-b border-black border-2 w-32"></p>
            <p>Date F9</p>
          </div>
        </div>
        <p className="mb-12">
          his instrument has been pre-audited in the manner required by the
          School Budget and Fiscal Control Act.
        </p>
        <div className="flex justify-between mb-12">
          <div>
            <p className="border-b border-black border-2 w-[30rem]"></p>
            <p>
              Paul LeSieur, Chief Finance Officer, Durham Public Schools F10
            </p>
          </div>
          <div>
            <p className="border-b border-black border-2 w-32"></p>
            <p>Date F11</p>
          </div>
        </div>

        <div
          className="flex border-4 border-gray-400 mb-8
        "
        >
          <p>Endorsement:</p>
          <div className="text-center">
            <p className="border-b border-black w-38 "> F12</p>
            <p>Project Manager</p>
            <p>Durham Public Schools</p>
            <p>Construction & Capital Planning</p>
          </div>
        </div>
        <div>
          <p className="border-b border-black w-38 "> F13</p>
          <div className="flex">
            <p>By:</p>
            <p className="border-b border-black w-38 "></p>
          </div>
          <div className="flex">
            <p>Name/Title:</p>
            <p className="border-b border-black w-38 "></p>
          </div>
        </div>
      </div>
      <Footer page={9} />
    </div>
  );
};

export default Page9;
