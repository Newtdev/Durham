import React, { useEffect, useState } from "react";
import "./PagesStyle.css";
import he from "he";

const Page11 = (props) => {
  const [proposalScope, setProposalScope] = useState("");
  useEffect(() => {
    const proposal = props?.form_fields?.proposalScope;
    setProposalScope(proposal);
  }, [props?.form_fields?.proposalScope]);
  let encodedProposalScope = "";
  if (proposalScope) {
    encodedProposalScope = he.decode(proposalScope);
  }

  return (
    <div
      style={{
        margin: "1in 30pt 3rem 60pt",
        paddingTop: "3rem",
        height: "10.7in",
      }}
      className=" flex flex-col justify-between h-full "
    >
      <div>
        <hr style={{ pageBreakBefore: "always", display: "none" }} />
        <p class="c38" id="h.1hmsyys">
          <span class="c89 c68">6.0 PROPOSAL SCOPE</span>
        </p>
        <div className="mt-4 list-disc" style={{ listStyle: "inside" }}>
          {proposalScope && (
            <section
              className="list-disc"
              style={{ listStyle: "inside" }}
              dangerouslySetInnerHTML={{
                __html: he.decode(encodedProposalScope),
              }}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-extrabold text-black mb-3 text-center">
          <b></b>
        </p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1  mx-auto">
          <p>11</p>
        </div>
      </div>
    </div>
  );
};

export default Page11;
