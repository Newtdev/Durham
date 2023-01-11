import moment from "moment";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { doConvert } from "../../../shared-component";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
import { fields, openDownload, savedResponse, showDownload } from "../reducer";
import { prevChoiceStep,stepChoiceDefault } from "./reducer";

const Preview = () => {
  const dispatch = useDispatch();
  const show = useSelector(openDownload)


  
  const formID = useSelector(project_document_id);

  useFetchFilledFormQuery(formID)
  const content = useSelector(savedResponse);
  const { project } = content;
  const form_fields = useSelector(fields)




  const downloadComponent = useRef()  

  const props = {
    component: downloadComponent,
    name: '00 11 13 - Advertisement for Bid Template',
    show: show ? 'block' : 'hidden',
    stepDefault: stepChoiceDefault
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
              onClick={()=> dispatch(prevChoiceStep(2))}
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
                <Close/>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
            <div className='bg-white px-16 py-10 text-black' ref={downloadComponent}>
                <div className='text-right'>
                  <p>Durham Public Schools</p>
                <p className='uppercase bg-yellow-300'>{!project ? '' : project.name}</p>
                <p className='uppercase bg-yellow-300'>{!project ? '' : project.number}</p>
                </div>
                <div className='text-center mb-8'>
                  <h1 className='font-bold'>ADVERTISEMENT FOR BIDS</h1>
                  <h2 className='font-bold'>
                    Durham Public Schools / Durham County
                  </h2>
                </div>
                <div className='text-start'>
                <p className="adverstise">
                    Sealed bids from licensed contractors will be received by
                    Durham Public Schools, Durham, North Carolina on{" "}
                  <span className='font-bold bg-yellow-300 adverstise'>{moment(form_fields.bidDate).format("dddd, MMMM D, YYYY")}</span> for
                    furnishing of labor, material and equipment for the{" "}
                  <span className='font-bold adverstise bg-yellow-300'>{!project ? '' : project.name}</span>. Bids
                    will be received up to{" "}
                  <span className='font-bold adverstise bg-yellow-300'>{moment(form_fields.deadlineTime).format("h:mm a")}</span> from
                    Single Prime bidders. Bids will be opened at{" "}
                  <span className='adverstise bg-yellow-300'>{moment(form_fields.openingTime).format("h:mm a")}</span> via a virtual
                    teleconference and read aloud. Deliver bids to the{" "}
                  <span className='font-bold adverstise'>
                      Durham Public Schools Main Office located at 511
                      Cleveland, Durham, North Carolina 27701.
                    </span>{" "}
                  </p>
                </div>
                {/* Lists */}
                <div className='mt-4 px-8'>
                  <ul className='list-disc'>
                  <li className="adverstise">
                      No bid may be withdrawn after the scheduled closing time
                      for the receipt of bids for a period of{" "}
                    <span className='adverstise bg-yellow-300'>{doConvert(form_fields.withdrawingBid)}({!form_fields ? '' : form_fields.withdrawingBid}) days</span>
                    </li>
                  <li className="adverstise">
                      Bid security required is 5% of the bid in cash, certified
                      check, or Bid Bond.
                    </li>
                  <li className="adverstise">
                      Performance and Payment Bonds for 100% of the contract
                      amount will be required.
                    </li>
                  <li className="adverstise">
                      Durham Public Schools reserves the right to reject any and
                      all bids and to waive informalities or irregularities.
                    </li>
                  </ul>
                </div>

                <div className='mt-5'>
                <div className='mb-5 adverstise'>
                  <p> 
                    <span className='font-bold underline adverstise'>
                        Minority Business Participation:
                      </span>{" "}
                      Bidders shall note that compliance with the North Carolina
                      Statute 143-128.2 (c) is required for this project.
                    </p>
                  </div>
                <div className='mb-5 adverstise'>
                    <p>
                    <span className='font-bold underline '>
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
                <div className='mb-5 adverstise'>
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
                <div className='mb-5 adverstise'>
                    <p>
                      <span className='font-bold underline'>
                        Project scope:
                      </span>{" "}
                      Provide additional security vestibules and/or measures at
                      entrances at multiple DPS Schools and Sites.
                    </p>
                  </div>
                <div className='mb-5 adverstise'>
                    <p>
                    <span className='font-bold underline '>
                        Pre-Bid Conference:
                      </span>{" "}
                      Scheduled for{" "}
                    <span className='font-bold uppercase bg-yellow-300'>{moment(form_fields.conferenceDate).format("dddd, MMMM D, YYYY")}</span> at{" "}
                    <span className='font-bold uppercase bg-yellow-300'>{moment(form_fields.conferenceTime).format("h:mm a")}</span> at {' '}

                    <span className='font-bold  bg-yellow-300 '>{form_fields.conferenceAddress}{" "}{form_fields.conferenceCity}{" "}{form_fields.conferenceZipCode}{" "}{form_fields.conferenceState}</span>.{" "}
                    {/* <span className='font-bold uppercase bg-yellow-300 '> {!form_fields.presenceOfBiders ? '' : form_fields.presenceOfBiders}. </span> */}
                    <br />
                    Inspection of all sites shall be scheduled immediately after the Pre-Bid Conference. The design team and owner will provide access to the necessary location. The project Designer or Designer’s representative will be available to answer questions.


                  </p>
                  <p className="adverstise">

                    It is <span className='font-bold uppercase bg-yellow-300 '> {!form_fields.presenceOfBiders ? '' : form_fields.presenceOfBiders}</span> that prime bidders attend the entire conference and visit the site prior to bidding.
                  </p>
                  <br />
                  </div>
                <div className='mb-5 adverstise'>
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
                <div className='mb-5 adverstise'>
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



                {/* Next Page */}
              {/* <div className='text-right adverstise'>
                  <p>Durham Public Schools</p>
                  <p className=''>{!project?'': project.name}</p>
                  <p className=''>{!project?'': project.number}</p>
                </div> */}

              <div className="adverstise">
                  <p>
                    <em>
                      {" "}
                      Prospective Bidders should contact{" "}
                    <span className='adverstise'>{!form_fields ? '' : form_fields.company_name}</span> at the contact
                      noted below in order to be e-mailed a link to download the
                      project manual and bid documents.
                    </em>
                  </p>
                {/* <p className='mt-4 font-bold'>Please contact:</p>
                  <p className='font-bold'>Kevin Coyne-Project Manager</p>
                  <p className='font-bold'>
                    (ph) 919.897-3225 / (e-mail) kevin.coyne@lechase.com
                  </p> */}
                <p className='mt-8 mb-3 adverstise'>
                    For questions regarding this bid, please contact:
                  </p>
                  <p className=''>{!form_fields?'':form_fields.company_name}</p>
                  <p>

                  <span className='adverstise'>{!form_fields ? '' : form_fields.manager_name}</span>
                    <span>- Program Manager</span>
                </p>
                <p className=''>{!form_fields ? '' : form_fields.manager_phone_number}</p>
                  <p className=''>{!form_fields?'':form_fields.manager_email_address}</p>
                </div>
              <div className='mt-4 flex justify-evenly adverstise'>
                <span className=''>Advertisement for bids</span>
                <span className=' text-center'>00 11 13-1</span>
                <span> </span>
              </div>
              </div>
          </div>


            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=> dispatch(prevChoiceStep(2))} />
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
