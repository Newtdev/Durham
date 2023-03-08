import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";

const Page51 = (props) => {
  const ConstructionManager = props.awardee.find(
    (awardee) => awardee.role === "Construction Manager"
  );

  return (
    <Wrapper>
      <p class="fp f2 f11">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Agreement is
          executed the day and year first written above.
        </span>
      </p>
      <p class="fp f1 f11">
        <span class="f0"></span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>

      <div className="flex flex-row">
        <div className="w-[50%]">
          <p class="fp f2">
            <span class="f21">OWNER: </span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f15 f17">
            <span class="f21 pl-6">
              DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION
            </span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">_______________________________________</span>
          </p>
          <p class="fp f2">
            <span class="f35 f3 ">
              <span
                className={` ${props?.nottoBeHighlighted} `}
              >{`${props?.durham_profile?.chairdps_board_of_education?.name}`}</span>
            </span>
          </p>
          <p class="fp f2">
            <span class="f0">Chair</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">Attest:</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">_______________________________________</span>
          </p>
          <p class="fp f2">
            <span class="f35 f3 f20">_________________</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">[Corporate Seal]</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">
              This instrument has been pre-audited in the <br></br> manner
              required by the School Budget and Fiscal <br></br> Control Act.
            </span>
          </p>
          <p class="fp f12">
            <span class="f0"></span>
          </p>
          <p class="fp f12">
            <span class="f0"></span>
          </p>
          <p class="fp f12">
            <span class="f0"></span>
          </p>
          <p class="fp border-b border-black w-72">
            <span class="f0">
              <span
                className={`${props?.nottoBeHighlighted} `}
              >{`${props?.durham_profile?.chief_finance_officer?.name}`}</span>
            </span>
          </p>
          <p class="fp f2">
            <span class="f0">___________________, Finance Officer</span>
          </p>
          <hr style={{ pageBreakBefore: "always", display: "none" }} />
          <p class="fp f1">
            <span class="f3 f27"></span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
        </div>
        <div className="w-[50%]">
          <p class="fp f2">
            <span class="f21">CONSTRUCTION MANAGER: </span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2 border-b border-black w-72">
            <span class="f3 ">
              <span className={`${props.nottoBeHighlighted}`}>
                {`${ConstructionManager?.first_name} ${ConstructionManager?.last_name}`}
              </span>
            </span>
            {/* <span class="f35 f3 f20">_____________</span> */}
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">_______________________________________</span>
          </p>
          <p class="fp">
            <span
              class={`f35 f3 ${props?.nottoBeHighlighted} }`}
              style={{
                borderColor: "black",
              }}
            >
              {" "}
              {props?.awardee[0]?.president}
            </span>
            <span class="f0">, President</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">Attest: </span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">_______________________________________</span>
          </p>
          <p class="fp f2">
            <span class="f0">Corporate Secretary</span>
          </p>
          <p class="fp f1">
            <span class="f0"></span>
          </p>
          <p class="fp f2">
            <span class="f0">[Corporate Seal]</span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
          <p class="fp f1">
            <span class="f27 f3"></span>
          </p>
          <div>
            <p class="fp f2">
              <span class="f27 f50">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className=" h-[5.5rem] flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>51</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page51;
