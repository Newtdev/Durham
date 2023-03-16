import "./owner.css";
import { Footer } from "./Page1";

const OwnerDesignMore = (props) => {
  return (
    <div
      class=" border border-black flex flex-col justify-between"
      style={{
        height: "10in",
        paddingTop: "54pt",
        margin: "54pt 72pt 72pt 72pt",
      }}
    >
      {/* Page 30 */}
      <div>
        <ol class="uj7 lst-kix_list_19-2o" start="20">
          <li class="uj11 uj24 li-bullet-1">
            <span class="uj5 uj3">
              Providing services in response to the Owner&rsquo;s request for
              additions to the original Project scope.
            </span>
          </li>
        </ol>
        <p class="uj2 uj22">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj28">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">ARTICLE 8</span>
        </p>
        <h1 class="uj36 uj63">
          <span class="uj1"></span>
        </h1>
        <h1 class="uj36 uj66">
          <span class="uj1">NOTICES</span>
        </h1>
        <p class="uj2 uj14">
          <span class="uj5 uj3"></span>
        </p>
        <ol class="uj7 lst-kix_list_41-1a start" start="1">
          <li class="uj4 li-bullet-24">
            <span class="uj5 uj3">
              Any notice required by this Agreement or other communications to
              either party by the other shall be in writing and deemed given
              when delivered personally or when deposited in the United States
              Post Office, first class, postage prepaid, addressed as follows,
              or to such other address as shall be duly given by notice meeting
              the requirement of this Article.
            </span>
          </li>
        </ol>
        <p class="uj2">
          <span class="uj5 uj3"></span>
        </p>
        <div>
          <div className="grid grid-cols-5">
            <p className="uj34 uj44 uj61 uj82 col-span-2">
              <span className="uj3">To Owner:</span>
            </p>
            <div className="col-span-3">
              <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className="uj3">
                  Durham Public Schools Board of Education
                </span>
              </p>
              <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className="uj3">511 Cleveland Street</span>
              </p>
              <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className="uj3">Durham, NC 27702</span>
              </p>
            </div>
          </div>

          <p class="uj2 uj16">
            <span class="uj5 uj3"></span>
          </p>

          <div className="grid grid-cols-5">
            <p className="uj34 uj44 uj61 uj82 col-span-2">
              <span className="uj3">To Design Consultant:</span>
            </p>
            <div className="col-span-3">
              <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className={`uj3 ${props.nottoBeHighlighted}`}>
                  {props?.awardee[0]?.address}{" "}
                </span>
              </p>
              <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className={`uj3 ${props.nottoBeHighlighted}`}>
                  {`${props?.awardee[0]?.city}, ${props?.awardee[0]?.state} ${props?.awardee[0]?.zip_code}`}{" "}
                </span>
              </p>
              {/* <p className="uj34 uj44 uj61 uj82 col-span-2">
                <span className="uj3">_______________</span>
              </p> */}
            </div>
          </div>
        </div>

        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj2 uj16">
          <span class="uj5 uj3"></span>
        </p>

        <p class="uj36">
          <span class="uj1">ARTICLE 9</span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj36">
          <span class="uj1">INSURANCE</span>
        </p>
        <p class="uj36 uj41">
          <span class="uj1"></span>
        </p>
        <p class="uj11 uj33">
          <span class="uj5 uj3">
            <span className="mr-[2.8rem]">9.1</span>The Design Consultant shall
            purchase and maintain insurance for protection from claims under
            workers&#39; or workmen&#39;s compensation acts; claims resulting
            from negligent acts or omissions for damages because of bodily
            injury, including personal injury, sickness, disease or death of any
            of the Design Consultant&#39;s employees or any other person; claims
            &nbsp;for damages because of injury to or destruction of personal
            property including loss of use resulting therefrom; and claims
            arising out of the performance of this Agreement and caused by
            negligent acts or omissions for which the Design Consultant is
            legally liable. &nbsp;Minimum limits of coverage shall be:
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3">
            <span className="mr-[1.4rem]">a.</span>
            Workers&#39; Compensation:
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">Statutory</span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3">&nbsp;</span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3">
            <span className="mr-[1.4rem]">b.</span>
            Employer&rsquo;s Liability:
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">$1,000,000.00 Each Accident</span>
        </p>
        <p class="uj11 uj45 ">
          <span class="uj5 uj3 ml-[2.2rem]">$1,000,000.00 Policy Limit</span>
        </p>
        <p class="uj11 uj45 ">
          <span class="uj5 uj3 ml-[2.2rem]">$1,000,000.00 Each Employee</span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3">
            <span className="mr-[1.4rem]">c.</span>
            Commercial General Liability
          </span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">
            (Standard ISO Occurrence Form)
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj5 uj3 ml-[6.2rem]">
          Combined Single Limit for Bodily Injury, Property Damage or Personal
          General Aggregate Injury of:
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">
            $2,000,000.00 (Except Products Completed Operations Limit)
          </span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">
            $2,000,000.00 Products Completed Operations Aggregate Limit
          </span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">
            $1,000,000.00 Personal &amp; Advertising Injury Limit
          </span>
        </p>
        <p class="uj11 uj45">
          <span class="uj5 uj3 ml-[2.2rem]">
            $1,000,000.00 Each Occurrence Limit
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
        <p class="uj11 uj30 uj40">
          <span class="uj5 uj3">
            <span className="mr-[1.4rem]">d.</span>Commercial Automobile
            Insurance including coverage for owned, non-owned and hired
            vehicles:
          </span>
        </p>
        <p class="uj2 uj45">
          <span class="uj5 uj3"></span>
        </p>
      </div>
      <Footer page={30} />
    </div>
  );
};

export default OwnerDesignMore;
