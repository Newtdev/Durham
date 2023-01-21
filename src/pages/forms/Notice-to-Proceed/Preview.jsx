import { useRef } from "react";
import { ButtonWhiteBG } from "../../../ui";
import Logo  from "../../../assets/formlogo.png";
import { prevStep, stepDefault } from "./reducerSlice";
import { showDownload, openDownload, closeDownload, savedResponse, fields } from '../reducer';
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import DownLoadForm from "../Lundsford/Download";
import moment from "moment";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";

const Preview = () => {
  const dispatch = useDispatch();
  const show = useSelector(openDownload)
  const downloadComponent = useRef()
  const formID = useSelector(project_document_id);

    useFetchFilledFormQuery(formID)
  const content = useSelector(savedResponse);
  const form_fields = useSelector(fields)
  const { vendors, durham_profile, project } = content;
  
  const props = {
    component: downloadComponent ,
      name:'Notice of Intent to Award - Consultant' ,
      show: show ? 'block' : 'hidden',
    stepDefault,
      close: closeDownload
  }
  
  return (
    <div>
      <DownLoadForm {...props} />
        <div>
          {/* Modal content */}
        <div className={`${!show ?"block": 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
            {/* Hedaer */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                  Notice to Proceed - Contractor
                </h3>
                <p className='text-base text-gray-700'>Preview Document</p>
              </div>
            <button
              onClick={()=> dispatch(prevStep())}
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
               <Close/>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
              <div className='bg-white px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
                <div className='flex justify-between items-center mb-8'>
                  <div>
                    <img src={Logo} alt="logo" className="h-20 object-cover" />
</div>
                  <div className='text-[#3B6979]'>
                    <p className='text-sm font-bold'>
                      Construction and Capital Planning
                    </p>
                    <p className='text-sm font-bold'>
                      2011 Hamlin Road | Durham, NC 27704
                    </p>
                    <p className='text-sm font-bold'>
                      919-560-2216 | www.dpsnc.net
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    <span className='bg-grey-800'>{moment(form_fields.creationDate).format("MMMM D, YYYY ")}</span>
                  </p>
                  <p>
                    {/* <span className='bg-yellow-500'></span> */}
                    <span className='bg-grey-800'>{!vendors ? '' : vendors[0].first_name + " " + vendors[0].last_name}</span>
                  </p>
                    <span className='bg-grey-800'> {!vendors ? '' : vendors[0].title}</span>
                  <p>
                    <span className='bg-grey-800'>{!vendors ? '' : vendors[0].company_name}</span>
                  </p>
                  {/* <p>
                    <span className='bg-grey-800'>{!masterInfo ? '' : masterInfo.awardeeInfo[0].design_consultant}</span>
                  </p> */}
                  <p>
                    {/* <span className='bg-grey-800'>F6</span> */}
                  </p>
                </div>
                {/* Subject */}
                <div className='my-4'>
                  <div className='mb-4 flex items-start'>
                    <p className='mr-[85px]'>Re:</p>
                    <div>
                      <p>Durham Public Schools (DPS)</p>
                      <p>
                        <span className='bg-grey-800'>Brogden Middle School</span>-
                        <span className='bg-grey-800'>{!project ? "":project.name }</span>(
                        <span className='bg-grey-800'>{!project ? "":project.number }</span>)
                      </p>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <span className='mr-12'>Subject:</span>
                    <span>Notice to Proceed</span>
                  </div>
                  <div className=''>
                    <span>
                      Dear <span className='bg-grey-800'>Mr./Ms.</span>{" "}
                    </span>{" "}
                    <span className='bg-grey-800'>{(vendors[0].last_name)}</span>,
                  </div>
                </div>
                {/* Body */}
                <div>
                  <p className='mb-4'>
                    We are pleased to offer this Notice to Proceed for the{" "}
                    <span className='bg-grey-800'>Brogden Middle School</span> -{" "}
                    <span className='bg-grey-800'>{!project ? "":project.name }</span>. Effective{" "}
                    <span className='bg-grey-800'>{moment(form_fields.stateDate).format("MMMM D, YYYY ")}</span>, at{" "}
                    <span className='bg-grey-800'>{moment(form_fields.startTime).format("hh:mm a ")}</span>,{" "}
                    <span className='bg-grey-800'>{!vendors ? '' : vendors[0].company_name}</span> is authorized to
                    proceed with the Work in earnest in accordance with the
                    terms of your contract and the Contract Documents
                  </p>
                  <p className='mb-4'>
                    Time is of the essence. The Notice to Proceed commences the
                    Contract Time until Substantial Completion is achieved on or
                    before <span className='font-bold bg-grey-800'>{moment(form_fields.deliveryDate).format("MMMM D, YYYY ")}</span>.
                  </p>
                  <p className='mb-4'>
                    We look forward to working with you and your team on this
                    project. If you have any questions, please contact me at{" "}
                    <span className='bg-grey-800'>{!durham_profile?'':durham_profile.project_manager_phone }</span>.
                  </p>
                  <p className='mb-4'>Sincerely,</p>
                  <div className=''>
                    <em>SIGNATURE</em>
                  </div>
                  <p>
                    <span className='bg-grey-800'>{!durham_profile?'':durham_profile.project_manager}</span>
                  </p>
                  <p>
                    <span className='bg-grey-800'>C&CP Project Manager</span>
                  </p>
                  <p className='mt-4'>Enclosure</p>
                  <div className='mb-4 flex items-start'>
                    <p className='mr-8'>Cc:</p>
                    <div>
                      <p>
                        <span className='bg-grey-800'>{!durham_profile?'':durham_profile.director_design
}, DPS Design and Construction</span>
                      </p>
                      <p>
                        <span className='bg-grey-800'>{!durham_profile?'':durham_profile.business_Manager} - F21 DPS C&CP Business Manager </span>
                      </p>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <span className='mr-6'>File:</span>
                    <span className='bg-grey-800'>DPS Project No. {!project ? "":project.number }</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=> dispatch(prevStep())} />
            <DashboardButton
              onClick={()=> dispatch(showDownload())}
                hidden
                name='CREATE DOCUMENT'
              type='button'
              
                width='w-[198px]'
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Preview;
