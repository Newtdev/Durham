import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import DownLoadForm from "../Lundsford/Download";
import { openDownload, showDownload } from "../reducer";
import { prevChoiceStep,stepChoiceDefault } from "./reducer";

const Preview = () => {
  const dispatch = useDispatch();
  const show = useSelector(openDownload)

  const downloadComponent = useRef()  

  const props = {
    component: downloadComponent ,
      name:'00 11 13 - Advertisement for Bid Template' ,
      show: show ? 'block' : 'hidden',
      stepChoiceDefault
  }
  

  return (
    <div>
            <DownLoadForm {...props} />

      <div>
        
          {/* Modal content */}
          <div className={`${show ?"hidden":"block"} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                00 11 13 - Advertisement for Bid Template
                </h3>
                <p className='text-base text-gray-700'>Preview Document</p>
              </div>
              <button
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
                <Close/>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
              <div className='bg-white px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
                <div className='text-right'>
                  <p>Durham Public Schools</p>
                  <p className='bg-yellow-500'>F1</p>
                  <p className='bg-yellow-500'>F2</p>
                </div>
                <div className='text-center mb-8'>
                  <h1 className='font-bold'>ADVERTISEMENT FOR BIDS</h1>
                  <h2 className='font-bold'>
                    Durham Public Schools / Durham County
                  </h2>
                </div>
                <div className='text-start'>
                  <p>
                    Sealed bids from licensed contractors will be received by
                    Durham Public Schools, Durham, North Carolina on{" "}
                    <span className='font-bold bg-yellow-500'>F3</span> for
                    furnishing of labor, material and equipment for the{" "}
                    <span className='font-bold bg-yellow-500'>F4</span>. Bids
                    will be received up to{" "}
                    <span className='font-bold bg-yellow-500'>F5</span> from
                    Single Prime bidders. Bids will be opened at{" "}
                    <span className='bg-yellow-500'>F6</span> via a virtual
                    teleconference and read aloud. Deliver bids to the{" "}
                    <span className='font-bold'>
                      Durham Public Schools Main Office located at 511
                      Cleveland, Durham, North Carolina 27701.
                    </span>{" "}
                  </p>
                </div>
                {/* Lists */}
                <div className='mt-4 px-8'>
                  <ul className='list-disc'>
                    <li>
                      No bid may be withdrawn after the scheduled closing time
                      for the receipt of bids for a period of{" "}
                      <span className='bg-yellow-500'>F7</span>
                    </li>
                    <li>
                      Bid security required is 5% of the bid in cash, certified
                      check, or Bid Bond.
                    </li>
                    <li>
                      Performance and Payment Bonds for 100% of the contract
                      amount will be required.
                    </li>
                    <li>
                      Durham Public Schools reserves the right to reject any and
                      all bids and to waive informalities or irregularities.
                    </li>
                  </ul>
                </div>

                <div className='mt-5'>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Minority Business Participation:
                      </span>{" "}
                      Bidders shall note that compliance with the North Carolina
                      Statute 143-128.2 (c) is required for this project.
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Iran Divestment Act:
                      </span>{" "}
                      Bidders shall note that the submission of a bid
                      constitutes the bidder’s certification to the State
                      Treasurer that, as of the date of bid, it is not listed on
                      the Final Divestment List created and maintained by the
                      North Carolina Department of State Treasurer (the
                      “Treasurer’s Office”) pursuant to the Iran Divestment Act
                      of 2015, Chapter 147-Article 6E of the General Statutes of
                      North Carolina (the “Iran Divestment Act”).
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Davis-Bacon Act:
                      </span>{" "}
                      The successful bidder will be required to conform to the
                      wage requirements prescribed by the federal Davis-Bacon
                      and Related Acts which requires that all laborers and
                      mechanics employed by contractors and subcontractors
                      performing on contracts funded in whole or in part with
                      federal funds in excess of $2,000 pay their laborers and
                      mechanics not less than the prevailing wage rates and
                      fringe benefits, as determined by the Secretary of Labor,
                      for corresponding classes of laborers and mechanics
                      employed on similar projects in the area.
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Project scope:
                      </span>{" "}
                      Provide additional security vestibules and/or measures at
                      entrances at multiple DPS Schools and Sites.
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Pre-Bid Conference:
                      </span>{" "}
                      Scheduled for{" "}
                      <span className='font-bold bg-yellow-500'>F8</span>{" "}
                      <span className='font-bold bg-yellow-500'> F9 </span>{" "}
                      <span className='font-bold bg-yellow-500'> F10 </span>{" "}
                      <span className='font-bold bg-yellow-500'> F11 </span>{" "}
                      Inspection of all sites shall be scheduled immediately
                      after the Pre-Bid Conference. The design team and owner
                      will provide access to the necessary location. The project
                      Designer or Designer’s representative will be available to
                      answer questions.
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Statement of Qualifications:
                      </span>{" "}
                      Each proposal shall be accompanied by a statement of
                      qualifications that demonstrates experience in at least
                      five (5) projects of similar scope within the past three
                      (3) years with references.
                    </p>
                  </div>
                  <div className='mb-5'>
                    <p>
                      <span className='font-bold underline'>
                        Statement of ability to staff project:
                      </span>{" "}
                      Each proposal shall be accompanied by a statement of
                      ability to staff including current project load, current
                      staff levels and individual staff to be committed to this
                      project if awarded.
                    </p>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <span className='text-sm'>Advertisement for bids</span>
                  <span className='text-sm text-center'>00 11 13-1</span>
                  <span> </span>
                </div>

                {/* Next Page */}
                <div className='text-right'>
                  <p>Durham Public Schools</p>
                  <p className='bg-yellow-500'>F12</p>
                  <p className='bg-yellow-500'>F13</p>
                </div>

                <div>
                  <p>
                    <em>
                      {" "}
                      Prospective Bidders should contact{" "}
                      <span className='bg-yellow-500'>F14</span> at the contact
                      noted below in order to be e-mailed a link to download the
                      project manual and bid documents.
                    </em>
                  </p>
                  <p className='mt-4 font-bold'>Please contact:</p>
                  <p className='font-bold'>Kevin Coyne-Project Manager</p>
                  <p className='font-bold'>
                    (ph) 919.897-3225 / (e-mail) kevin.coyne@lechase.com
                  </p>
                  <p className='mt-8 mb-4'>
                    For questions regarding this bid, please contact:
                  </p>
                  <p className='bg-yellow-500'>F15</p>
                  <p>
                    <span className='bg-yellow-500'>F16</span>
                    <span>Program Manager</span>
                  </p>
                  <p className='bg-yellow-500'>F17</p>
                  <p className='bg-yellow-500'>F18</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=> dispatch(prevChoiceStep())} />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
              type='button'
              onClick={()=> dispatch(showDownload())}
                width='w-[198px]'
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Preview;
