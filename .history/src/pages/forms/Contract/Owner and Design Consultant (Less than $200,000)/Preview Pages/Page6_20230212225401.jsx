import React from "react";
import { Footer } from "../../App";

const PageSix = () => {
  return (
    <div
      className=" text-black pt-4 flex flex-col justify-between border border-black"
      style={{ margin: "0.6in", marginTop: "1in", height: "10in" }}
    >
      <div className="mb-auto border border-black">
        <div className="flex gap-12 mb-2">
          <p></p>
          <p>
            documents and materials relating to the Individual Project prepared
            by or in the possession of the Engineer. The Engineer will turn over
            to the Owner in a timely manner and in good unaltered condition all
            original drawings, specifications, documents, materials, and
            computer files.
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>4.6</p>
          <p>
            The payment of any sums by the Owner under this Article 4 shall not
            constitute a waiver of any claims for damages by the Owner for any
            breach of the Agreement by the Engineer.
          </p>
        </div>
        <p className="mb-2 text-center">ARTICLE 5</p>
        <p className="mb-2 text-center">
          OWNERSHIP OF DOCUMENTS/CONFIDENTIAL INFORMATION
        </p>
        <div className="flex gap-12 mb-2">
          <p>5.1</p>
          <p>
            <span className="mr-4"> </span>
            Drawings and Specifications as instruments of service are and shall
            remain the joint property of the Engineer and the Owner whether the
            Project for which they are made is built or not. The Owner shall
            retain reproducible copies of Drawings and Specifications for
            information and reference and use in connection with the Owner's use
            and occupancy of the Project and for the Owner's future requirements
            of the Project's facilities including without limitation any
            alteration or expansion in any manner the Owner deems appropriate
            without additional compensation of fee to the Engineer
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>5.2</p>
          <p>
            <span className="mr-4"> </span>
            In order for the Engineer to fulfil this Agreement effectively, it
            may be necessary or desirable for the Owner to disclose to the
            Engineer confidential and proprietary information and trade secrets
            pertaining to the Owner's past, present and future activities. The
            Engineer hereby agrees to treat any and all information gained by it
            as a result of the Services performed hereunder as strictly
            confidential. The Engineer further agrees that it will not disclose
            to anyone outside of the authorized Project team (1) Owner's trade
            secrets during the period of this Agreement or thereafter or (2)
            Owner's confidential and proprietary information during the period
            of this Agreement or thereafter
          </p>
        </div>
        <p className="mb-2 text-center">ARTICLE 6</p>
        <p className="mb-2 text-center">ADDITIONAL REQUIREMENTS </p>
        <div className="flex gap-12 mb-2">
          <p>6.1</p>
          <p>
            <span className="mr-2"> </span>
            The Engineer shall not assign, subcontract, sublet or transfer its
            interest in this Agreement without the written consent of the Owner,
            except that the Engineer may assign accounts receivable to a
            commercial bank or financial institution for securing loans, without
            prior approval of the Owner
          </p>
        </div>
        <div className="flex gap-12 mb-2">
          <p>6.2</p>
          <p>
            <span className="mr-2"> </span>
            Notwithstanding anything to the contrary contained herein, the
            Engineer shall indemnify and hold harmless the Owner and its agents
            and employees from and against all claims, damages, losses and
            expenses, including but not limited to attorney's fees, arising
            solely out of or resulting from the Engineer's performance or
            failure to perform its obligations under this Agreement or caused by
            any negligent act or omission of the Engineer, anyone directly or
            indirectly employed by the Engineer or anyone for whose acts the
            Engineer may be liable. Such obligation shall not be construed to
            negate, abridge or otherwise reduce any other right or obligation of
            indemnity which would otherwise exist as to any party or person
            described in this Article. The parties agree that this
            indemnification clause is an “evidence of indebtedness” for purpose
            of N. C. Gen. Stat. § 6-21.2. Notwithstanding anything to the
            contrary contained herein, the Owner shall indemnify and hold
            harmless the Engineer and its agents and employees from and against
            all claims, damages, losses and expenses, including but not limited
            to attorney's fees, arising solely out of or resulting from (i) the
            Owner's performance or failure to perform its obligations under this
            Agreement and (ii) any claim, damage, loss or expense attributable
            to bodily injury, sickness, disease or death, or to injury to or
            destruction of personal property including the loss of use resulting
            therefrom and caused solely by any negligent act or omission of the
            Owner, anyone directly or indirectly employed by the Owner or anyone
            for whose acts the Owner may be liable. Such obligation shall not be
            construed to negate, abridge or otherwise reduce any other right or
            obligation of indemnity which would otherwise exist as to any party
            or person described in this Article.
          </p>
        </div>
      </div>
      <Footer page={6} />
    </div>
  );
};

export default PageSix;
