import { useRef } from "react";
import { ButtonWhiteBG } from "../../../ui";
import Logo  from "../../../assets/formlogo.png";
import { fetchData, handleDate, handleLastName, handleTime } from "../../../shared-component";
import { prevStep, selectForm, stepDefault } from "./reducerSlice";
import { showDownload, openDownload } from '../reducer';
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { project_details } from "../../Dashboard/add-project/projectSlice";
import DownLoadForm from "../Lundsford/Download";

const Preview = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectForm);
  const masterInfo = useSelector(project_details)
  const show = useSelector(openDownload)
  const downloadComponent = useRef()
  
  const props = {
    component: downloadComponent ,
      name:'Notice of Intent to Award - Consultant' ,
      show: show ? 'block' : 'hidden',
      stepDefault
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
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
               <Close/>
              </button>
            </div>

            <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
              <div className='bg-[#D9D9D9] px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
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
                    <span className='bg-grey-800'>{handleDate(data.creationDate)}</span>
                  </p>
                  <p>
                    {/* <span className='bg-yellow-500'></span> */}
                    <span className='bg-grey-800'>{!masterInfo ? '' : masterInfo.awardeeInfo[0].company_representative}</span>
                    <span className='bg-grey-800'> {!masterInfo ? '' : masterInfo.awardeeInfo[0].company_representative_title}</span>
                  </p>
                  <p>
                    <span className='bg-grey-800'>{!masterInfo ? '' : masterInfo.awardeeInfo[0].design_consultant}</span>
                  </p>
                  <p>
                    <span className='bg-grey-800'>{!masterInfo ? '' : masterInfo.awardeeInfo[0].design_consultant}</span>
                  </p>
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
                        <span className='bg-grey-800'>{!masterInfo ? "":masterInfo.project_name }</span>(
                        <span className='bg-grey-800'>{!masterInfo ? "":masterInfo.project_number }</span>)
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
                    <span className='bg-grey-800'>{handleLastName('Thomas Ejembi')}</span>,
                  </div>
                </div>
                {/* Body */}
                <div>
                  <p className='mb-4'>
                    We are pleased to offer this Notice to Proceed for the{" "}
                    <span className='bg-grey-800'>Brogden Middle School</span> -{" "}
                    <span className='bg-grey-800'>{!masterInfo ? "":masterInfo.project_name }</span>. Effective{" "}
                    <span className='bg-grey-800'>{handleDate(data.startDate)}</span>, at{" "}
                    <span className='bg-grey-800'>{handleTime(data.startTime)}</span>,{" "}
                    <span className='bg-grey-800'>{!masterInfo ? '' : masterInfo.awardeeInfo[0].design_consultant}</span> is authorized to
                    proceed with the Work in earnest in accordance with the
                    terms of your contract and the Contract Documents
                  </p>
                  <p className='mb-4'>
                    Time is of the essence. The Notice to Proceed commences the
                    Contract Time until Substantial Completion is achieved on or
                    before <span className='font-bold bg-grey-800'>{handleDate(data.deliveryDate)}</span>.
                  </p>
                  <p className='mb-4'>
                    We look forward to working with you and your team on this
                    project. If you have any questions, please contact me at{" "}
                    <span className='bg-grey-800'>{fetchData().project_manager_phone }</span>.
                  </p>
                  <p className='mb-4'>Sincerely,</p>
                  <div className=''>
                    <em>SIGNATURE</em>
                  </div>
                  <p>
                    <span className='bg-grey-800'>{fetchData().project_manager}</span>
                  </p>
                  <p>
                    <span className='bg-grey-800'>C&CP Project Manager</span>
                  </p>
                  <p className='mt-4'>Enclosure</p>
                  <div className='mb-4 flex items-start'>
                    <p className='mr-8'>Cc:</p>
                    <div>
                      <p>
                        <span className='bg-grey-800'>{fetchData().director_design
}, DPS Design and Construction</span>
                      </p>
                      <p>
                        <span className='bg-grey-800'>{fetchData().business_Manager} - F21 DPS C&CP Business Manager </span>
                      </p>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <span className='mr-6'>File:</span>
                    <span className='bg-grey-800'>DPS Project No. {!masterInfo ? "":masterInfo.project_number }</span>
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
