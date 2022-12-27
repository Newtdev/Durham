import "react-datepicker/dist/react-datepicker.css";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo  from "../../../assets/formlogo.png";
import DownLoadForm from "../Lundsford/Download";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { openDownload, showDownload } from "../reducer";
import { project_details } from "../../Dashboard/add-project/projectSlice";
import { selectForm } from "../Notice-of-intent-consultant/reducerSlice";
import moment from "moment/moment";
import { prev } from "./reducer";


const ProjectCloseOutPreview= () => {

  const dispatch = useDispatch();
  const data = useSelector(selectForm);
  const masterInfo = useSelector(project_details)
  const show = useSelector(openDownload)
  const downloadComponent = useRef();

  
  const props = {
    component: downloadComponent ,
      name:'Notice of Intent to Award - Consultant' ,
      show: show ? 'block' : 'hidden',
      // stepDefault
  }

  return (
    <div>
      <DownLoadForm {...props} />

        <div>
          {/* Modal content */}
          <div className={`${!show ?"block": 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>            {/* Header */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                  Project Closeout Checklist
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
                <div>
                <img src={Logo} alt="logo" className="h-20 object-cover mb-4" />
                  <h1 className='font-bold underline underline-offset-2 text-center mb-6'>
                    PROJECT CLOSE-OUT DOCUMENTATION CHECKLIST
                  </h1>
                  <div className='mb-4'>
                    <div className='flex mb-6'>
                      <div>
                        <p>
                          Project: {' '}
                        <span className=''>{!masterInfo?'' :masterInfo.project_name}</span>
                         
                        </p>
                      </div>
                      <div className='ml-14'>
                        <p>
                          Project No: {' '}
                          <span className=''>{!masterInfo?'' :masterInfo.project_number}</span>
                         
                        </p>
                      </div>
                    </div>

                    <div className='mb-6'>
                      <p>
                        School: {' '}
                        <span className=''>Durham Public Schools </span>
                       
                      </p>
                    </div>

                    <div className='flex mb-6'>
                      <div>
                        <p>
                          Contractor: {' '}
                        <span className=''>{!masterInfo?'':masterInfo.awardeeInfo[0].design_consultant}</span>
                         
                        </p>
                      </div>
                      <div className='ml-[49px]'>
                        <p>
                          Substantial Completion Date: {' '}
                        <span className=''>{moment(data.completionDate).format("MMMM D, YYYY ")}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='mb-4'>
                    NOTE:{" "}
                    <span className='text-sm text-justify'>
                      When all of the following documents have been completed
                      and received, this checklist should be completed. Copies
                      of documents should accompany the final application for
                      payment as noted below by asterisks. The original
                      checklist and original documents should be filed in the
                      project’s close-out file when completed.
                    </span>
                  </p>

                  {/* Lists */}
                  <div className='mb-8 '>
                  {!data.one? "": data.one && <div className='flex'>
                      <p>___ 1.*</p>
                      <p className='text-justify ml-9'>
                        Fully executed Certificate of Substantial Completion
                        with attached punch list(s).
                      </p>
                  </div>}
                  {!data.two? "": data.two && <div className='flex'>
                      <p>___ 2.*</p>
                      <p className='text-justify ml-8'>
                        Fully executed Final Change Order (i.e., for allowances,
                        deductions for work done by others, etc.)
                      </p>
                    </div>}
                    
                  {!data.three? "": data.three && <div className='flex'>
                    <p>___ 3.</p>
                    <p className='text-justify ml-10'>
                      Final Approved Application for Payment
                    </p>
                  </div>
                  }
                  {!data.four ? "" : data.four && <div className='flex'>
                    <p>____ 4.**</p>
                    <p className='text-justify ml-4'>
                      Consent of Surety to Final Payment
                    </p>
                  </div>}

                  {!data.five ? "" : data.five && <div className='flex'>
                    <p>____ 5.**</p>
                    <p className='text-justify ml-4'>
                      Contractor’s Affidavit of Release of Liens (properly
                      signed, notarized, etc, with no exceptions)
                    </p>
                  </div>
                  }
                  {!data.six ? "" : data.six && <div className='flex'>
                    <p>_____6.**</p>
                    <p className='text-justify ml-4'>
                      Contractor’s Affidavit of Payment of Debts and Claims
                      (properly signed, notarized, etc., with no exceptions)
                    </p>
                  </div>}

                  {!data.seven ? "" : data.seven && <div className='flex'>
                    <p>____7.**</p>
                    <p className='text-justify ml-6'>
                      Properly executed release of liens by subcontractors
                      and/or vendors (if applicable for those who have had
                      problems with payments, etc. per General Conditions
                    </p>
                  </div>}

                  {!data.eight ? "" : data.eight && <div className='flex'>
                    <p>____ 8.**</p>
                    <p className='text-justify ml-4'>
                      Certificate of Occupancy from proper municipality
                      (Durham County Inspections / Durham FM)
                    </p>
                  </div>}
                  {!data.nine ? "" : data.nine && <div className='flex'>
                    <p>____ 9.**</p>
                    <p className='text-justify ml-4'>
                      Contractor’s One-Year Warranty (notarized)
                    </p>
                  </div>}
                  {!data.ten ? "" : data.ten && <div className='flex'>
                    <p>____ 10.</p>
                    <p className='text-justify ml-6'>
                      Warranty summary sheet and original warranties for
                      specific items (roofs, motors, etc.)
                    </p>
                  </div>}
                  {!data.eleven ? "" : data.eleven && <div className='flex'>
                    <p>____11.**</p>
                    <p className='text-justify ml-4'>
                      Contractor’s certification letter per General Conditions
                    </p>
                  </div>}
                  {!data.twelve ? "" : data.twelve && <div className='flex'>
                    <p>____12.**</p>
                    <p className='text-justify ml-4'>
                      Certification letter from Contractor stating that no
                      asbestos containing materials were used (copy to
                      Environmental Management)
                    </p>
                  </div>}
                  {!data.thirteen ? "" : data.thirteen && <div className='flex'>
                    <p>____13.**</p>
                    <p className='text-justify ml-4'>
                      Certification letter from Architect (or Engineer)
                      regarding asbestos, per EPA regulations (copy to
                      Environmental Management)
                    </p>
                  </div>}
                  {!data.fourteen ? "" : data.fourteen && <div className='flex'>
                    <p>____14.**</p>
                    <p className='text-justify ml-4'>
                      Architect’s and MEP Engineer’s certification letter
                      saying punch list is complete, the work is per contract
                      requirements, and recommending final payment be made to
                      Contractor
                    </p>
                  </div>}
                  {!data.fifteen ? "" : data.fifteen && <div className='flex'>
                    <p>____15.**</p>
                    <p className='text-justify ml-4'>
                      Architects (or Engineer’s) letter regarding liquidated
                      damages
                    </p>
                  </div>
                  }
                  {!data.sixteen ? "" : data.sixteen && <div className='flex'>
                    <p>____16.</p>
                    <p className='text-justify ml-8'>
                      Transmittal indicating keys have been given to Principal
                      – signed by Principal
                    </p>
                  </div>}
                  {!data.seventeen ? "" : data.seventeen && <div className='flex'>
                    <p>____17.</p>
                    <p className='text-justify ml-9'>
                      Final list of all subcontractors with names, addresses,
                      and phone numbers (especially emergency numbers)
                    </p>
                  </div>
                  }
                  {!data.eighteen ? "" : data.eighteen && <div className='flex'>
                    <p>____18.</p>
                    <p className='text-justify ml-8'>
                      Letter from General Contractor Stating Removal of
                      Temporary Facilities
                    </p>
                  </div>}
                  {!data.nineteen ? "" : data.nineteen && <div className='flex'>
                    <p>____19.*</p>
                    <p className='text-justify ml-6'>
                      As-Built Redline drawings (3 sets Stamped certified) and
                      As-Built Electronic drawings (2 sets) received from A/E
                      and cover letter from Architect and Engineer saying they
                      have been reviewed and are as complete and accurate as
                      possible, attach completed transmittal to Owner.
                    </p>
                  </div>}
                  {!data.twenty ? "" : data.twenty && <div className='flex'>
                    <p>____20.*</p>
                    <p className='text-justify ml-5'>
                      Operations and Maintenance Manuals (3 sets) and cover
                      letter from Architect and Engineer saying they are
                      complete and have been reviewed, attach completed
                      transmittal to Owner.
                    </p>
                  </div>}
                  {!data.twentyOne ? "" : data.twentyOne && <div className='flex'>
                    <p>____21.*</p>
                    <p className='text-justify ml-6'>
                      Final commissioning report with certified Test And
                      Balance report. Include cover letter indicating it TAB
                      has been reviewed and approved by consulting Engineer
                    </p>
                  </div>}
                  {!data.twentyTwo? "": data.twentyTwo && <div className='flex'>
                      <p>____22.*</p>
                      <p className='text-justify ml-5'>
                        2-CD’s record drawing files
                      </p>
                    </div>
                  }
                  </div>

                  <div>
                    <div className='mb-4'>
                      <span>Project Manager's Signature</span>
                      <span className='ml-4'>
                        _________________________________
                        <span className=''>{moment(data.signedDate
                                        ).format("MMMM D, YYYY ")}</span>
                      </span>
                    </div>

                    <p>
                      *copy of cover document only to be attached with copy of
                      checklist to final application for payment and
                    </p>
                    <p className='mb-20'>
                      **copy of document kept in project accounting notebook
                    </p>

                    <p className='text-sm'>
                      R:\01 Administration\04 Document & Form Templates\06
                      Project\10 Project Closeout\Project Closeout Checklist -
                      T20160317.doc
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=>dispatch(prev)} />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='button'
              width='w-[198px]'
              onClick={()=> dispatch(showDownload())}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectCloseOutPreview;
