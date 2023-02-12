import React from "react";
import { Footer } from "../../App";

const Page5 = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <div className="flex gap-12 mb-2">
          <p>2.2.7</p>
          <p>
            The Engineer agrees that it shall use best efforts to coordinate and
            cooperate with the Durham Public Schools in execution of the
            project.
          </p>
          <p className="mt-4 mb-2 text-center">ARTICLE 3</p>
          <p className="mb-2 text-center">ADDITIONAL SERVICES</p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>3.1</p>
          <p>
            If any Additional Services are authorized in advance by the Owner in
            writing, the Engineer shall furnish or obtain from others the
            authorized services. If authorized in advance, in writing, by the
            Owner, the Engineer shall be paid for these additional services by
            the Owner pursuant to the hourly rate schedule that shall be
            established. The Engineer shall not be entitled to compensation for
            any additional services that are not authorized in advance by the
            Owner in writing
          </p>
        </div>
        <p className=" mb-2 text-center">ARTICLE 4</p>
        <p className="mb-2 text-center">TERMINATION OF AGREEMENT</p>
        <div className="flex gap-12 mb-2">
          <p>4.1</p>
          <p>
            If (a) the Owner abandons the Project, or (b) the Owner has failed
            to substantially perform in accordance with the provisions of this
            Agreement due to no fault of the Engineer and such non-performance
            continues without cure for a period of thirty (30) days after the
            Owner receives from the Engineer a written notice of such
            non-performance, the Engineer may, upon fifteen (15) days'
            additional written notice to the Owner, terminate this Agreement,
            without prejudice to any right or remedy otherwise available to the
            Owner, and recover from the Owner payment for all services performed
            to the date of the notice terminating this Agreement.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>4.2</p>
          <p>
            If the Engineer refuses or fails, except in cases for which
            extension of time is provided, to supply sufficient properly skilled
            staff or proper materials, or disregards laws, ordinances, rules,
            regulations or orders of any public authority jurisdiction, or
            otherwise violates or breaches any term or provision of this
            Agreement, then the Owner may, without prejudice to any right or
            remedy otherwise available to the Owner, and after giving the
            Engineer seven (7) days written notice, terminate this Agreement.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>4.3</p>
          <p>
            Upon termination of this Agreement by the Owner under paragraph 4.2
            it shall be entitled to furnish or have furnished the Services to be
            performed hereunder by the Engineer by whatever method the Owner may
            deem expedient. Also, in such cases, the Engineer shall not be
            entitled to receive any further payment until completion of the
            Work; and the total compensation to the Engineer under this
            Agreement shall be the amount which is equitable under the
            circumstances. If the Owner and the Engineer are unable to agree on
            the amount to be paid under the foregoing sentence, the Owner shall
            fix an amount, if any, which it deems appropriate in consideration
            of all of the circumstances surrounding such termination, and shall
            make payment accordingly.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>4.4</p>
          <p>
            The Owner may, upon thirty (30) days' written notice to the Engineer
            terminate this Agreement, in whole or in part, at any time for the
            convenience of the Owner, without prejudice to any right or remedy
            otherwise available to the Owner. Upon receipt of such notice, the
            Engineer shall immediately discontinue all services affected unless
            such notice directs otherwise. In the event of a termination for
            convenience of the Owner, the Engineer's sole and exclusive right
            and remedy is to be paid for all work performed and to receive
            equitable adjustment for all work performed through the date of
            termination. The Engineer shall not be entitled to be paid any
            amount as profit for unperformed services or consideration for the
            termination of convenience by the Owner.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>4.5</p>
          <p>
            Should the Owner terminate this agreement as provided for under this
            Article, the Owner will acquire such drawings, including the
            ownership and use of all drawings, specifications,
          </p>
        </div>
      </div>
      <Footer page={5} />
    </div>
  );
};

export default Page5;
