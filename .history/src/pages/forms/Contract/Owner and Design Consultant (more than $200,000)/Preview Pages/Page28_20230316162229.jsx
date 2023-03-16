import "./owner.css";
import { Footer } from "./Page1";
import { parseDynamicInput } from "../../../../../shared-component";

const OwnerDesignMore = (props) => {
  const services = parseDynamicInput(props?.form_fields?.services);

  return (
    <div
      class="flex flex-col justify-between"
      style={{
        height: "10in",
        paddingTop: "54pt",
        margin: "54pt 72pt 72pt 72pt",
      }}
    >
      {/* Page 28 */}
      <div>
        <ol class="uj7 lst-kix_list_40-1f" start="6">
          <li class="uj4 li-bullet-0">
            <span class="uj5 uj3">
              The Owner shall furnish such legal, accounting, and insurance
              counseling services as the Owner may deem necessary for the
              Project, and such auditing services as it may require to ascertain
              how, or for what purposes, the Contractor has used the moneys paid
              to it under the Construction Contract.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_40-1g" start="7">
          <li class="uj4 li-bullet-27">
            <span class="uj5 uj3">
              All services, information, surveys and reports required of the
              Owner shall be furnished at the Owner&#39;s expense and the Design
              Consultant shall be entitled to rely upon their accuracy and
              completeness.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_40-1h" start="8">
          <li class="uj4 li-bullet-46">
            <span class="uj5 uj3">
              The Owner shall furnish information and approvals required of it
              expeditiously, for orderly progress of the construction.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_40-1i" start="9">
          <li class="uj4 li-bullet-27">
            <span class="uj5 uj3">
              The Owner shall reimburse the Design Consultant for any fees or
              assessments paid by the Design Consultant pursuant to Article
              3.1.6.3.
            </span>
          </li>
        </ol>
        <p class="uj28 uj32">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_40-1j" start="10">
          <li class="uj4 li-bullet-26">
            <span class="uj3 uj51">
              The Design Consultant shall coordinate the services of the
              Owner&rsquo;s consultants listed below in the section with those
              services provided by the Design Consultant. &nbsp;Upon the Design
              Consultant&rsquo;s request, the Owner shall furnish copies of the
              scope of services in the contracts between the Owner and the
              Owner&rsquo;s consultants. &nbsp;The Owner shall require that its
              consultants maintain professional liability insurance as
              appropriate to the services provided. &nbsp;If in the opinion of
              the Architect a particular consultant or engineering service is
              needed to produce a reasonably complete and accurate set of
              Construction Documents or to satisfy the Owner&rsquo;s Program
              requirements based upon the information available to the Design
              Consultant as of the date of this Agreement and said consultant or
              engineering service is not listed as being provided by the Owner
              below, it is the responsibility of the Architect to provide that
              service at not additional cost to the Owner.
            </span>
          </li>
        </ol>
        <p class="uj2 uj14">
          <span class="uj5 uj3 uj8"></span>
        </p>
        <p class="uj10">
          <span class="uj5 uj3 uj8">
            The Owner shall furnish or provide the following services only if
            specifically designated:
          </span>
        </p>
        <p class="uj10">
          <span class="uj5 uj3 uj8">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geotechnical
          </span>
        </p>
        <p class="uj10">
          <span class="uj5 uj3 uj8">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Surveying
          </span>
        </p>
        {services?.map((service, index) => (
          <p class="uj10">
            <span class={`uj3 uj8 uj51 ${props?.nottoBeHighlighted}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.{index + 3}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {service.service}
            </span>
          </p>
        ))}
        {/* <p class="uj10">
          <span class="uj3 uj8 uj51">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____________
          </span>
        </p> */}
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">ARTICLE 7</span>
        </p>
        <h1 class="uj36 uj63">
          <span class="uj1"></span>
        </h1>
        <h1 class="uj36 uj66">
          <span class="uj1">ADDITIONAL SERVICES</span>
        </h1>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-1a start" start="1">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              If any of the following Additional Services, as defined in this
              Article, are authorized in advance by the Owner in writing, the
              Design Consultant shall furnish or obtain from others the
              authorized services. &nbsp;If authorized in advance, in writing,
              by the Owner, the Design Consultant shall be paid for these
              Additional Services by the Owner pursuant to Article 4.3 to the
              extent they exceed the obligations of the Design Consultant under
              this Agreement.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-2a start" start="1">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing fully detailed presentation models or presentation
              renderings, not included in Basic Services.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-2b" start="2">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing financial feasibility or other special studies, not
              included in Basic Services.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-2c start" start="3">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing planning surveys or alternative site evaluations.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-2d" start="4">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing design services relative to future facilities, systems
              and equipment which are not intended to be constructed as part of
              the Project other than general and master planning for future work
              as indicated by the Program of Requirements.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_20-2e" start="5">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing acoustical services by an individual or firm with
              specific expertise in acoustics for an elementary school project.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
      </div>
      <Footer page={28} />
    </div>
  );
};

export default OwnerDesignMore;
