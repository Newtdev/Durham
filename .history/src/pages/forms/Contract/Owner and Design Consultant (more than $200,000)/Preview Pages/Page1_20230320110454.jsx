import "./owner.css";
import moment from "moment";
export const Footer = ({ page, name }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <p className="text-[10pt]">Design Consultant Agreement 12/1/19</p>
      </div>
      <div className="w-8">
        <p>{page}</p>
      </div>
    </div>
  );
};

const OwnerDesignMore = (props) => {
  return (
    <div
      class=" flex flex-col justify-between"
      style={{ height: "10in", margin: "54pt 72pt 72pt 72pt" }}
    >
      {/* Page 1 */}
      <div>
        {/* <div>
          <p class="uj28">
            <span class="uj5 uj74"></span>
          </p>
        </div> */}
        <div>
          <p class="uj36" id="h.gjdgxs">
            <span class="uj1">AGREEMENT FOR</span>
          </p>
          <p class="uj36 uj41">
            <span class="uj1"></span>
          </p>
          <p class="uj36">
            <span class="uj1">DESIGN CONSULTANT SERVICES</span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36">
            <span class="uj5 uj3">BETWEEN</span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36">
            <span class="uj1">
              DURHAM COUNTY, BY AND THROUGH ITS AUTHORIZED AGENT
            </span>
          </p>
          <p class="uj36">
            <span class="uj1">
              THE DURHAM PUBLIC SCHOOLS BOARD OF EDUCATION
            </span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36">
            <span class="uj5 uj3">hereinafter referred to as the Owner</span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36">
            <span class="uj5 uj3">AND</span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj1"></span>
          </p>
          <p class="uj36">
            <span class={`uj1 ${props.nottoBeHighlighted}`}>
              {props?.awardee[0]?.company_name}
            </span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36">
            <span class="uj5 uj3">
              hereinafter referred to as the Design Consultant
            </span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj36 uj41">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj2">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj11">
            <span class="uj3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECT:{" "}
              <span>
                <span className={`${props.nottoBeHighlighted}`}>
                  {props?.projectDetails?.name}
                </span>
              </span>
            </span>
            <span class="uj1">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
          <p class="uj11">
            <span class="uj5 uj3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          </p>
          <p class="uj11">
            <span class="uj3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OWNER&#39;S
              PROJECT NO:{" "}
              <span>
                <span className={`${props.nottoBeHighlighted}`}>
                  {props?.projectDetails?.number}
                </span>
              </span>
            </span>
            <span class="uj1">&nbsp; </span>
          </p>
          <p class="uj2">
            <span class="uj5 uj3"></span>
          </p>
          <p class="uj11">
            <span class="uj3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE:{" "}
              <span>
                <span className={`${props.nottoBeHighlighted}`}>
                  {moment(props?.form_fields?.agreementDate).format(
                    "MMMM D, YYYY"
                  )}
                </span>
              </span>
            </span>
            <span class="uj38">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
          <p class="uj2">
            <span class="uj5 uj3"></span>
          </p>

          {/* <hr style='page-break-before: always; display: none' /> */}
        </div>
      </div>
      <Footer page={1} />
    </div>
  );
};

export default OwnerDesignMore;
