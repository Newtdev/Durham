import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";
import { parseDynamicInput } from "../../../../../shared-component";

const Page4 = (props) => {
  const data = parseDynamicInput(props?.form_fields?.location);
  console.log(data);
  return (
    <Wrapper>
      <div>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f23">
          <span class="f21">ARTICLE 2 </span>
        </p>
        <p class="fp f23">
          <span class="f0">PROJECT DEFINITION</span>
        </p>
        <p class="fp f23">
          <span class="f21">____________________________</span>
        </p>
        <p class="fp f14">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The term
            &ldquo;Project&rdquo; when used in the Agreement shall mean the
            total construction of which the Work may be a whole or part of the
            Project. &nbsp;The term &ldquo;Work&rdquo; required for the
            &ldquo;Project&rdquo; used in this Agreement shall mean the various
            parts of total construction to be performed under this Agreement.
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Project name and
            locations are as follows:
          </span>
        </p>
        <p class="fp f15">
          <span class="fgh">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={`fgh ${props?.nottoBeHighlighted} `}>
              {props?.form_fields?.projectName}
            </span>
          </span>
        </p>
        {/* <p class="fp f15">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={`fgh underline ${props?.nottoBeHighlighted} `}>
            {`${props?.form_fields?.location[0]?.projectCity}, ${props?.form_fields?.location[0]?.projectState}, ${props?.form_fields?.location[0]?.projectZipCode}`}
          </span>
        </span>
      </p> */}
        {/* <p class="fp f15">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________________________
        </span>
      </p> */}
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Project is
            intended for use as: &nbsp;
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="fgh">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={`fgh ${props?.nottoBeHighlighted} `}>
              {props?.form_fields?.projectIntent}
            </span>
          </span>
        </p>
        {/* <p class="fp f15">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________________________
        </span>
      </p> */}
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f23">
          <span class="f21">ARTICLE 3</span>
        </p>
        <p class="fp f23">
          <span class="f0">CONSTRUCTION MANAGER&rsquo;S BASIC SERVICES</span>
        </p>
        <p class="fp f23">
          <span class="f21">____________________________</span>
        </p>
        <p class="fp f14">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-8">3.1</span>
            CM Basic Services
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="ml-[3.2rem]"></span>The CM shall perform the Basic
            Services described herein. &nbsp;It is not required that the Basic
            Services be performed in the sequence in which they are described.
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-8">3.2</span>
            Design Phase &ndash; Project Management
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f15">
          <span class="f0">
            <span className="mr-[1.35rem]">3.2.1</span>
            Project Management
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            {" "}
            <span className="mr-[0.6rem]">3.2.1.1</span>
            Construction Management Plan
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="ml-[3.2rem]"></span>The CM shall prepare a
            Construction Management Plan for the Project within the time
            mutually established by the Owner and CM and shall make
            recommendations for revisions to the plan throughout the duration of
            the Project, as may be appropriate. &nbsp;In preparing the
            Construction Management Plan, the CM shall consider the
            Owner&rsquo;s schedule, budget, and design requirements for the
            Project. &nbsp;The CM shall then develop various alternatives for
            the sequencing and management of the Project and shall make
            recommendations to the Owner. The Construction Management Plan shall
            also include a description of the various bid packages recommended
            for the Project. The Construction Management Plan shall be presented
            to the Owner for acceptance. &nbsp;The CM shall develop a Master
            Schedule for the Project. &nbsp;The CM shall determine the
            appropriate bid packages based on the available resources. &nbsp;The
            CM shall familiarize itself with all available Project funding and
            work with the Owner and Design Consultant to maximize the scope and
            quality of the Project based upon the available funds. The CM shall
            make recommendations regarding communication among the parties in an
            effort to ensure the prompt and proper flow of Project information.
            &nbsp;The CM shall outline its plan for minority business enterprise
            participation goals required by state law and the Owner, including
            reporting all information required by state law on behalf of the
            Owner to the North Carolina Department of Administration, Office of
            Historically Underutilized Businesses. &nbsp;The CM shall include a
            Project safety plan covering all critical areas of the Project.
          </span>
        </p>
        <p class="fp f12">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            <span className="mr-6">3.2.2</span>
            Time Management
          </span>
        </p>
        <p class="fp f1">
          <span class="f0"></span>
        </p>
        <p class="fp f2">
          <span class="f0">
            {" "}
            <span className="mr-4">3.2.2.1</span>
            Master Schedule
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>4</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page4;
