import React from "react";
import Wrapper from "./Wrapper";
import "./CMPagesStyle.css";

const Page14 = () => {
  const renderHTML = (escapedHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: escapedHTML },
    });

  return (
    <Wrapper>
      <p class="fp f2">
        {/* <p dangerouslySetInnerHTML={{ __html: "&amp;nbsp;" }} /> */}
        <section
          dangerouslySetInnerHTML={{
            __html:
              "&lt;div&gt;&lt;h1&gt;Test&lt;/h1&gt;&lt;h2&gt;Test1&lt;/h2&gt;&lt;p&gt;It&#39;s a unit test&lt;/p&gt;&lt;/div&gt;",
          }}
        />
        <p dangerouslySetInnerHTML={{ __html: "&amp;nbsp;" }} />

        <span class="f0">
          <span className="ml-[3.2rem]"></span>The Owner shall have the option
          to correct or complete any and all punch list items not completed by
          the CM to the satisfaction of the Design Consultant and the Owner
          within the time specified for final completion by utilizing its own
          forces or by hiring others. The cost of such correction of remaining
          punch list items by the Owner or others shall be deducted from the
          final payment to the CM. &nbsp;If CM does not complete certain punch
          list items within the required time period, all warranties and
          guarantees for such incomplete punch list items shall become effective
          upon issuance of final payment for the Project.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="ml-[3.2rem]"></span>The issuance of the certificate
          of substantial completion does not indicate final acceptance of the
          Project by the Owner, and the CM is not relieved of any responsibility
          for the Project except as specifically stated in the certificate of
          substantial completion.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="ml-[3.2rem]"></span>Should the Design Consultant and
          the Owner determine that the work or a designated portion thereof is
          not substantially complete, they shall provide the CM with written
          notice stating why the Project or designated portion is not
          substantially complete. The CM shall expeditiously complete the work
          and shall re-request in writing that the Design Consultant perform
          another substantial completion inspection. Costs, if any, associated
          with such re-inspection shall be assessed to the CM at the rate
          specified in the Design Consultant&rsquo;s contract.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">3.5.1.10 &nbsp;Final Completion</span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="ml-[3.2rem]"></span>In consultation with the CM and
          Owner, the Design Consultant shall determine when the Project and the
          contractors&rsquo; work is finally completed and, following completion
          of corrections, the Design Consultant shall issue a certificate of
          final completion to the Owner. The date of final completion of the
          work is the date certified by the Design Consultant and the Owner when
          the work is totally complete, to include punchlist work, in accordance
          with the contract documents and the Owner may fully occupy and utilize
          the Project for the use for which it is intended. &nbsp;The issuance
          of a temporary or final certificate of occupancy shall not, in itself,
          constitute final completion. If more than two (2) final completion
          inspections are required by the Design Consultant due to the
          CM&rsquo;s failure to complete the work, the additional inspections
          shall be charged to the CM at the rate specified in the Design
          Consultant&rsquo;s contract all punch list work shall be complete. If
          any change order is issued for work to be performed after the
          substantial completion certificate is issued, the completion date for
          that work shall be established separately and shall not prevent the
          Project from achieving final completion for purposes of Sections 7.6
          and 7.7 of this Agreement. Following the receipt of payment from the
          Owner, the CM shall make all payments due to contractors within ten
          (10) days.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          <span className="ml-[3.2rem]"></span>For multi-phased projects, final
          completion of each phase shall include the completion of all work for
          the phase with the exception of any system that is required to be
          integrated into a phase that has a later contract date for final
          completion. &nbsp;This exception might apply to the HVAC, data,
          intercom, or similar systems. &nbsp;Notwithstanding the above,
          complete and proper operation of all systems shall be required for the
          Project to achieve final completion.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          3.5.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schedule
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">3.5.2.1 &nbsp;&nbsp;Master Schedule</span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The CM shall adjust
          and update the Master Schedule and distribute copies to the Owner and
          Design Consultant. &nbsp;All adjustments to the Master Schedule shall
          be made for the benefit of the Project.
        </span>
      </p>
      <p class="fp f12">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          3.5.2.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction
          Schedule
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>
      <p class="fp f2">
        <span class="f0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The CM shall adjust
          and update the Construction Schedule and shall verify that the
          schedule is prepared in accordance with the requirements of the Owner
          noted in Paragraph 3.4.2.2 and that it establishes completion dates
          that comply with the requirements of the Master Schedule. &nbsp;The CM
          agrees that the construction schedule is for the benefit of the entire
          Project team and by execution of this Agreement gives permission and
          direction to its scheduler to provide copies of the schedule in a
          format as required by the Owner.
        </span>
      </p>
      <p class="fp f1">
        <span class="f0"></span>
      </p>

      <div className=" h-[7rem] flex flex-col justify-end">
        <p className="font-extrabold text-black mb-3 text-center"></p>
        <div>
          <p className="text-[10px]"></p>
        </div>
        <div className="w-1 mr-[1in]  ml-auto">
          <p>14</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page14;
