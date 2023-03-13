import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";

const Page49 = (props) => {
  const ConstructionManager = props.awardee.find(
    (awardee) => awardee.role === "Construction Manager"
  );
  return (
    <Wrapper>
      <p class="fp f13">
        <span class="f0">11.2.7</span>
        <span class="f0">
          &nbsp;&nbsp;The CM shall comply with the above listed and all
          applicable laws and regulations in providing services under this
          Agreement
        </span>
        <span class="f0">.</span>
      </p>
      <p class="fp f1 f19">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="mr-[1.35rem]">11.3</span> Extent of Agreement
        </span>
      </p>
      <p class="fp f1 f19">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          11.3.1 &nbsp;&nbsp;This Agreement represents the entire and integrated
          agreement between the Owner and the CM and supersedes all prior
          negotiations, representations or agreements, either written or oral.
          &nbsp;This Agreement may be modified or amended only by written
          instrument signed by both the Owner and the CM. &nbsp;Nothing
          contained in this Agreement is intended to benefit any third party.
          &nbsp;The Contractors and Design Consultant are not intended third
          party beneficiaries of this Agreement. &nbsp;This Agreement shall not
          be construed more strictly against one party than the other merely by
          virtue of the fact that it has been prepared initially by the Owner,
          it being recognized that both parties and their respective counsel
          have had a full and fair opportunity
        </span>
      </p>
      <p class="fp f1 f19">
        <span class="f0"></span>
      </p>
      <div>
        <p class="fp f2">
          <span class="f0">
            to negotiate and review the terms and provisions of this Agreement
            and to contribute to its substance and form.
          </span>
        </p>
        <p class="fp f1 f19">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-[1.35rem]">11.4</span>
            Severability
          </span>
        </p>
        <p class="fp f1 f19">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            11.4.1 &nbsp;&nbsp;If any provision of this Agreement is held as a
            matter of law to be unenforceable, the remainder of this Agreement
            shall be enforceable without such provision.
          </span>
        </p>
        <p class="fp f8">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-[1.35rem]">11.5</span>
            Meaning of Terms
          </span>
        </p>
        <p class="fp f8">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            11.5.1 &nbsp;&nbsp;References made in the singular shall include the
            plural and the masculine shall include the feminine or neuter.
          </span>
        </p>
        <p class="fp f1 f19">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-[1.35rem]">11.6</span>
            Notices
          </span>
        </p>
        <p class="fp f8">
          <span class="f3 f20 f35"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            11.6.1 &nbsp;Whenever any provision of the Contract Documents
            requires the giving of written notice, it shall be deemed to have
            been validly given if delivered in person to the individual or to a
            member of the firm or to an officer of the corporation for whom it
            is intended or if delivered or sent by registered or certified mail,
            postage prepaid, or by facsimile, addressed as follows:
          </span>
        </p>
        <p class="fp f8">
          <span class="f0"></span>
        </p>
        <p class="fp f15 f19 p-[1.5rem]">
          <span class="fgh ">To the Owner: </span>
        </p>
        <p class={`fp f15 f17 p-[1.5rem] `}>
          <span class={`f3 `}>
            <span className={`${props?.nottoBeHighlighted} `}>
              {" "}
              Durhan Public Schools
            </span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]">
          <span class={`f3 `}>
            <span className={`${props?.nottoBeHighlighted} `}>
              {" "}
              511 Cleveland Street
            </span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]">
          <span class={`f3 `}>
            <span className={`${props?.nottoBeHighlighted} `}>
              {" "}
              Durham, NC 27702
            </span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]">
          <span class="f3 f20 text-white">_______________________</span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15 f17">
          <span class="f0 p-[1.5rem]">&nbsp;With a copy to:</span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]">
          <span class="f3">
            {" "}
            <span
              className={`${props?.nottoBeHighlighted} `}
            >{`${props?.form_fields?.Name}`}</span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]">
          <span class="f3 ">
            {" "}
            <span
              className={`${props?.nottoBeHighlighted} `}
            >{`${props?.form_fields?.conferenceAddress}`}</span>
          </span>
        </p>
        {/* <p class="fp f15 f17 p-[1.5rem]">
        <span class="f3 f20">_______________________</span>
      </p> */}
        <p class="fp f8">
          <span class="f0"></span>
        </p>
        <p class="fp f15 f19 p-[1.5rem]">
          <span class="f0">To the CM: </span>
        </p>
        <p class="fp f15 f17">
          <span class="f0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]" style={{ textDecoration: "none" }}>
          <span class="f3">
            <span className={`${props.nottoBeHighlighted}`}>
              {ConstructionManager?.company_name}
            </span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]" style={{ textDecoration: "none" }}>
          <span class="f3">
            <span className={`${props.nottoBeHighlighted}`}>
              {`${ConstructionManager?.street},`}
            </span>
          </span>
        </p>
        <p class="fp f15 f17 p-[1.5rem]" style={{ textDecoration: "none" }}>
          <span class="f3">
            <span className={`${props.nottoBeHighlighted}`}>
              {` ${ConstructionManager?.city}, ${ConstructionManager?.state} ${ConstructionManager?.zip_code}`}
            </span>
          </span>
        </p>

        <p class="fp f12 f17">
          <span class="f0"></span>
        </p>
        <p class="fp f15 f17">
          <span class="f0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
          </span>
        </p>
        <p class="fp f15 f17">
          <span class="f0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
        </p>
        <p class="fp f12 f17">
          <span class="f0"></span>
        </p>
        <p class="fp f8">
          <span class="f0"></span>
        </p>
      </div>
      <div className=" flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10pt]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>49</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page49;
