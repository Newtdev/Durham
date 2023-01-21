import "react-datepicker/dist/react-datepicker.css";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo  from "../../../assets/formlogo.png";
import DownLoadForm from "../Lundsford/Download";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { closeModal, fields, openDownload, savedResponse, showDownload } from "../reducer";
import moment from "moment/moment";
import { prev, stepDefault } from "./reducer";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";


const ProjectCloseOutPreview= () => {

  const dispatch = useDispatch();
  const show = useSelector(openDownload);
  const downloadComponent = useRef();
  const form_fields = useSelector(fields);
  const [highlighted, setHighlighted] = useState()


  const formID = useSelector(project_document_id)
  useFetchFilledFormQuery(formID)
   const content = useSelector(savedResponse);
  const { vendors, project } = content;
  const nottoBeHighlighted = !highlighted ? 'bg-yellow-300' : 'bg-white';


  const props = {
    component: downloadComponent ,
      name:'Project Close-out Documentation Checklist' ,
      show: show ? 'block' : 'hidden',
      stepDefault
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
              onClick={() => dispatch(closeModal())}
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
                 <Close/>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
            <div className='bg-white px-24 pt-8 pb-4 text-black adverstise' ref={downloadComponent}>
                <div>
                <img src={Logo} alt="logo" className="h-20 object-cover mb-4" />
                  <h1 className='font-bold underline underline-offset-2 text-center mb-6'>
                    PROJECT CLOSE-OUT DOCUMENTATION CHECKLIST
                  </h1>
                  <div className='mb-4'>
                  <div className='flex justify-between items-center mb-6'>
                      <div>
                        <p>
                          Project: {' '}
                        <span className={`font-bold ${nottoBeHighlighted}`}>{!project ? '' : project.name}</span>
                         
                        </p>
                      </div>
                    <div className=''>
                        <p>
                          Project No: {' '}
                        <span className={`font-bold ${nottoBeHighlighted}`}>{!project ? '' : project.number}</span>
                         
                        </p>
                      </div>
                    </div>

                  <div className='mb-6 flex justify-between items-center'>
                      <p>
                        School: {' '}
                        <span className=''>Durham Public Schools </span>
                       
                      </p>
                    </div>

                  <div className='flex justify-between items-center mb-6'>
                      <div>
                        <p>
                          Contractor: {' '}
                        <span className={`font-bold ${nottoBeHighlighted}`}>{!vendors ? '' : vendors[0].company_name}</span>
                         
                        </p>
                      </div>
                      <div className='ml-[49px]'>
                        <p>
                          Substantial Completion Date: {' '}
                        <span className={`font-bold ${nottoBeHighlighted}`}>{moment(form_fields.completionDate).format("MMMM D, YYYY ")}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='mb-4'>
                    NOTE:{" "}
                  <span className={` adverstise text-justify`}>
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
                  <div className={`flex ${form_fields.one ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.one ? <span>{"__1.*"}</span> : <span>&#10004; 1.*</span>}</p>
                    <p className={`font-bold ${form_fields.one ? nottoBeHighlighted : ''} adverstise text-justify`}>
                        Fully executed Certificate of Substantial Completion
                        with attached punch list(s).
                      </p>
                  </div>
                  <div className={`flex ${form_fields.two ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.two ? <span>{"__2.*"}</span> : <span>&#10004; 2.*</span>}</p>
                    <p className={`font-bold ${form_fields.two ? nottoBeHighlighted : ''} adverstise text-justify`}>
                        Fully executed Final Change Order (i.e., for allowances,
                        deductions for work done by others, etc.)
                      </p>
                  </div>
                    
                  <div className={`flex ${form_fields.three ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.three ? <span>{"__3."}</span> : <span>&#10004; 3.</span>}</p>
                    <p className={`font-bold ${form_fields.three ? nottoBeHighlighted : ''} adverstise text-justify`}>
                      Final Approved Application for Payment
                    </p>
                  </div>

                  <div className={`flex ${form_fields.four ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.four ? <span>{"__4.**"}</span> : <span>&#10004; 4.**</span>}</p>
                    <p className={`font-bold ${form_fields.four ? nottoBeHighlighted : ''} adverstise text-justify`}>
                      Consent of Surety to Final Payment
                    </p>
                  </div>

                  <div className={`flex ${form_fields.five ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.five ? <span>{"__5.**"}</span> : <span>&#10004; 5.**</span>}</p>
                    <p className={`font-bold ${form_fields.five ? nottoBeHighlighted : ''} adverstise text-justify`}>
                      Contractor’s Affidavit of Release of Liens (properly
                      signed, notarized, etc, with no exceptions)
                    </p>
                  </div>

                  <div className={`flex ${form_fields.six ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.six ? <span>{"__6.**"}</span> : <span>&#10004; 6.**</span>}</p>
                    <p className={`font-bold ${form_fields.six ? nottoBeHighlighted :
                      ""} adverstise text-justify`}>
                      Contractor’s Affidavit of Payment of Debts and Claims
                      (properly signed, notarized, etc., with no exceptions)
                    </p>
                  </div>

                  <div className={`flex ${form_fields.seven ? nottoBeHighlighted : ''}`}>
                    <p className={`w-12`}>{!form_fields.seven ? <span>{"__7.**"}</span> : <span>&#10004; 7.**</span>}</p>
                    <p className={`font-bold ${form_fields.seven ? nottoBeHighlighted : ''} adverstise text-justify ml-1.5`}>
                      Properly executed release of liens by subcontractors
                      and/or vendors (if applicable for those who have had
                      problems with payments, etc. per General Conditions
                    </p>
                  </div>

                  <div className={`flex ${form_fields.eight ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10 `}>{!form_fields.eight ? <span>{"__8.**"}</span> : <span>&#10004; 8.**</span>}</p>
                    <p className={`font-bold ${form_fields.eight ? nottoBeHighlighted : ''} adverstise text-justify`}>
                      Certificate of Occupancy from proper municipality
                      (Durham County Inspections / Durham FM)
                    </p>
                  </div>
                  <div className={`flex ${form_fields.nine ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.nine ? <span>{"__9.**"}</span> : <span>&#10004; 9.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Contractor’s One-Year Warranty (notarized)
                    </p>
                  </div>
                  <div className={`flex ${form_fields.ten ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.ten ? <span>{"__10.*"}</span> : <span>&#10004; 10.*</span>}</p>
                    <p className={`font-bold adverstise text-justify`}>
                      Warranty summary sheet and original warranties for
                      specific items (roofs, motors, etc.)
                    </p>
                  </div>
                  <div className={`flex ${form_fields.eleven ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.eleven ? <span>{"__11.**"}</span> : <span>&#10004; 11.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Contractor’s certification letter per General Conditions
                    </p>
                  </div>
                  <div className={`flex ${form_fields.twelve ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.twelve ? <span>{"__12.**"}</span> : <span>&#10004; 12.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1`}>
                      Certification letter from Contractor stating that no
                      asbestos containing materials were used (copy to
                      Environmental Management)
                    </p>
                  </div>
                  <div className={`flex ${form_fields.thirteen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.thirteen ? <span>{"__13.**"}</span> : <span>&#10004; 13.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1`}>
                      Certification letter from Architect (or Engineer)
                      regarding asbestos, per EPA regulations (copy to
                      Environmental Management)
                    </p>
                  </div>
                  <div className={`flex ${form_fields.fourteen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-14`}>{!form_fields.fourteen ? <span>{"__14.**"}</span> : <span>&#10004; 14.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1`}>
                      Architect’s and MEP Engineer’s certification letter
                      saying punch list is complete, the work is per contract
                      requirements, and recommending final payment be made to
                      Contractor
                    </p>
                  </div>
                  <div className={`flex ${form_fields.fifteen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.fifteen ? <span>{"__15.**"}</span> : <span>&#10004; 15.**</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Architects (or Engineer’s) letter regarding liquidated
                      damages
                    </p>
                  </div>

                  <div className={`flex ${form_fields.sixteen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.sixteen ? <span>{"__16.*"}</span> : <span>&#10004; 16.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Transmittal indicating keys have been given to Principal
                      – signed by Principal
                    </p>
                  </div>
                  <div className={`flex ${form_fields.seventeen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.seventeen ? <span>{"__17.*"}</span> : <span>&#10004; 17.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Final list of all subcontractors with names, addresses,
                      and phone numbers (especially emergency numbers)
                    </p>
                  </div>

                  <div className={`flex ${form_fields.eighteen ? nottoBeHighlighted : ''}`}>
                    <p className={`w-10`}>{!form_fields.eighteen ? <span>{"__18.*"}</span> : <span>&#10004; 18.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                      Letter from General Contractor Stating Removal of
                      Temporary Facilities
                    </p>
                  </div>
                  <div className={`flex ${form_fields.nineteen ? nottoBeHighlighted :
                    ""}`}>
                    <p className={`w-20`}>{!form_fields.nineteen ? <span>{"__19.*"}</span> : <span>&#10004; 19.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1.5`}>
                      As-Built Redline drawings (3 sets Stamped certified) and
                      As-Built Electronic drawings (2 sets) received from A/E
                      and cover letter from Architect and Engineer saying they
                      have been reviewed and are as complete and accurate as
                      possible, attach completed transmittal to Owner.
                    </p>
                  </div>
                  <div className={`flex ${form_fields.twenty ? nottoBeHighlighted : ''}`}>
                    <p className={`w-14`}>{!form_fields.twenty ? <span>{"__20.*"}</span> : <span>&#10004; 20.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1`}>
                      Operations and Maintenance Manuals (3 sets) and cover
                      letter from Architect and Engineer saying they are
                      complete and have been reviewed, attach completed
                      transmittal to Owner.
                    </p>
                  </div>
                  <div className={`flex ${form_fields.twentyOne ? nottoBeHighlighted : ""}`}>
                    <p className={`w-12`}>{!form_fields.twentyOne ? <span>{"__21.*"}</span> : <span>&#10004; 21.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify ml-1`}>
                      Final commissioning report with certified Test And
                      Balance report. Include cover letter indicating it TAB
                      has been reviewed and approved by consulting Engineer
                    </p>
                  </div>
                  <div className={`flex ${form_fields.twentyTwo ? nottoBeHighlighted : ''}`}>

                    <p className={`w-10`}>{!form_fields.twentyTwo ? "__22.*" : <span>&#10004; 22.*</span>}</p>
                    <p className={`font-bold  adverstise text-justify`}>
                        2-CD’s record drawing files
                      </p>
                    </div>

                  </div>

                  <div>
                  <div className='mb-4'>
                      <span>Project Manager's Signature</span>
                    <span className='ml-4 underline underline-offset-1'>
                      _________________________________Date_______
                      <span className=''>
                        <span className={`font-bold ${nottoBeHighlighted}`}>
                          {moment(form_fields.signedDate
                          ).format("MMMM D, YYYY ")}</span>
                        {/* <span>_________________________________</span> */}
                      </span>

                      </span>
                    </div>

                    <p>
                      *copy of cover document only to be attached with copy of
                      checklist to final application for payment and
                    </p>
                  <p className='mb-10'>
                      **copy of document kept in project accounting notebook
                    </p>

                  <p className='text-sm adverstise'>
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
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=>dispatch(prev(3))} />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='button'
              width='w-[198px]'
              onClick={() => {
                setHighlighted(true)
                dispatch(showDownload())
              }}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectCloseOutPreview;
