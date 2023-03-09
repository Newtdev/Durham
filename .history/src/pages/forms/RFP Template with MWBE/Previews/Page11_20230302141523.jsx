import React from "react";
import "./PagesStyle.css";
import { Footer } from "./Page1";

const Page11 = () => {
  return (
    <div
      style={{
        height: "27cm",
        padding: "1.54cm 0 1.54cm 0",
        // border: "1px solid black",
      }}
    >
      <hr style={{ pageBreakBefore: "always", display: "none" }} />
      <p class="c38" id="h.1hmsyys">
        <span class="c89 c68">6.0 PROPOSAL SCOPE</span>
      </p>
      <p class="c38 c12">
        <span class="c46"></span>
      </p>
      <p class="c38 c23">
        <span class="c2">
          Durham Public Schools is seeking bids for a turnkey 100 kW solar
          installation at Lyons Farm Elementary located at 906 Scott King Rd
          Durham, NC 27713. &nbsp;Lyons Farm Elementary is currently under
          construction, with an expected opening of August 2022.
        </span>
      </p>
      <ul class="c14 lst-kix_list_40-0 start">
        <li class="c32 c23 c38 li-bullet-0">
          <span class="c2">
            Roofing details can be found in the subsequent pages. &nbsp;
          </span>
        </li>
        <li class="c38 c32 c23 li-bullet-4">
          <span class="c2">
            Installation will only be on south facing 5.5/12 roof.
          </span>
        </li>
        <li class="c38 c32 c23 li-bullet-0">
          <span class="c2">Roof is new standing seam metal.</span>
        </li>
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">
            Installer responsible for ensuring that installation does not void
            roof warranty.
          </span>
        </li>
        <li class="c3 c23 c32 li-bullet-4">
          <span class="c2">Submission must include:</span>
        </li>
      </ul>
      <ul class="c14 lst-kix_list_40-1 start">
        <li class="c3 c220 c23 li-bullet-0">
          <span class="c2">Annual payback and ROI calculations</span>
        </li>
        <li class="c3 c220 c23 li-bullet-3">
          <span class="c2">Specifications of all equipment</span>
        </li>
        <li class="c3 c23 c220 li-bullet-3">
          <span class="c2">Turnkey cost</span>
        </li>
        <li class="c3 c220 c23 li-bullet-3">
          <span class="c2">Installation schedule and duration from NTP.</span>
        </li>
      </ul>
      <p class="c3">
        <span class="c81 c80 c148 c98 c96">Specifications</span>
      </p>
      <ul class="c14 lst-kix_list_40-0">
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">100kW DC with 100kW AC inverter</span>
        </li>
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">
            All solar modules installed flush to the roof with S-5! clamps.
            &nbsp;
          </span>
        </li>
        <li class="c3 c32 c23 li-bullet-3">
          <span class="c2">
            No penetrations going through the roof for module attachments
          </span>
        </li>
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">2-to-1 module to optimizer ratio</span>
        </li>
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">
            Web-based monitoring with module-level production detail.
          </span>
        </li>
        <li class="c3 c32 c23 li-bullet-0">
          <span class="c2">Single inverter, not micro-inverters</span>
        </li>
        <li class="c3 c32 c23 li-bullet-4">
          <span class="c2">5 -year kWh Production Guarantee</span>
        </li>
        <li class="c3 c32 c23 li-bullet-4">
          <span class="c2">Module efficiency 20% or greater</span>
        </li>
      </ul>

      <div className="mt-[32rem]">
        <Footer page={11} />
      </div>
    </div>
  );
};

export default Page11;
