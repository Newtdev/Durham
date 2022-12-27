import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";
import Logo from '../../../assets/formlogo.png'
import {prevStep, selectForm,stepDefault} from './reducerSlice'
import { project_details } from "../../Dashboard/add-project/projectSlice";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { useRef, useState } from "react";
import moment from "moment";
import { getSaveData } from "../../Dashboard/Settings/Durhams-settings/ReducerSlice";
import { closeDownload } from "../reducer";
import { handleLastName } from "../../../shared-component";

const PreviewElement = () => {
  const dispatch = useDispatch()
  const downloadComponent = useRef();
  const [showModal, setShowModal] = useState(false);

  
  const content = useSelector(selectForm);
  const projectDetails = useSelector(project_details);
  const profile = useSelector(getSaveData);

  const props = {
  component: downloadComponent ,
    name:'Notice of Intent to Award - Consultant' ,
    show: showModal ? 'block' : 'hidden',
    stepDefault,
    close: closeDownload
  }
      return (
        <>
        <div>
            {/* Modal content */}
            <DownLoadForm {...props} />
          <div className={` ${showModal ? 'hidden':' relative mx-auto w-[60rem] h-[46rem] bg-white rounded-lg shadow mt-4'}`}>
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                Notice of Intent to Award - Consultant
                </h3>
                <p className='text-base text-gray-700'>Preview Document</p>
              </div>
              <button
                type='button'
                className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                data-modal-toggle='small-modal'
              >
                {/* <Close /> */}
              </button>
            </div>
    
            {/* Forms */}
            <div className=' mx-auto mt-6  w-[95%] h-[35rem] overflow-y-auto b-red-900'>
            <div className='bg-white pt-8 pb-4 text-black' ref={downloadComponent}>
          <div className='mb-6 text-center'>
          
          </div>
          <div className="flex justify-between items-center pt-3 px-8">
            <div>
              <img src={Logo} alt="logo" className="h-20 object-cover" />

            </div>
            <div>
              <p className="text-sm">Construction and Capital planning</p>
              <p className="text-sm my-1">2011 Hamlin Road / Durham, North Carolina 27704</p>
              <div className="flex justify-between">

                <p className="text-sm">919-560-2216</p>
                <p className="text-sm">F919-560-9119</p>
                <p className="text-sm">www.dpsnc.net</p>
              </div>
            </div>
           
          </div>
          <div className="px-24 ">
          <div className='mt-3'>
           
              {content.approval === 'Yes' && <p className='my-6 text-justify text-base'>
                        {moment(content.creationDate).format("MMMM D, YYYY ")}
              </p>
              }
                      <p className='text-base text-justify'>{!projectDetails ? "" : projectDetails.awardeeInfo[0].company_representative_name}{ " "} {!projectDetails ? "": projectDetails.awardeeInfo[0].company_representative_title}</p>
              <p className='text-base text-justify'>{!projectDetails?'':projectDetails.awardeeInfo[0].design_consultant}</p>
              <p className='text-base text-justify'>{!projectDetails
? "": projectDetails.awardeeInfo[0].consultant_address
}</p>
            {/* <p className='text-base text-justify'>City, State XXXXX</p> */}
          </div>
    
          <div className=''>
            <div className='overflow-hidden w-96 flex justify-between mt-8'>
              <p className='font-bold mb-2'>
                RE:
              </p>
              <div className='gap-5 ml-10'>
                <p>Durham Public Schools (DPS)</p>
                <p>School Name – {!projectDetails ? "": projectDetails.project_name}</p>
                  <p>DPS Project No. {!projectDetails? '': projectDetails.project_number}</p>
                
              </div>
             
            </div>
           
          </div>
    
          <div className="flex text-lg mt-4">
            <span>SUBJECT:</span>
            <h2 className="ml-6 font-black text-base text-black">NOTICE OF AWARD for CONSULTANT SERVICES</h2>
          </div>
    
          <div className='mt-6 mb-4'>
              <p>Dear Mr./Ms. {handleLastName(projectDetails.awardeeInfo[0].company_representative_name)}</p>
            <div className='mt-4 flex gap-8 leading-normal'>
              
              <p>
                  This letter serves as a Notice of Intent to Award for the {!projectDetails ? '' : projectDetails.project_name} project located at school mailing address in Durham, North Carolina. Durham Public School Administration is recommending award of the work to {!projectDetails ? "": projectDetails.awardeeInfo[0].design_consultant} at a lump sum fee of {currency(content.projectAmount).format()}.  Consultant services shall include the deliverables and scopes of work as outlined in the Contract.
              </p>
            </div>
            <div className='mt-4 flex gap-8'>
              
              <p>
              Issuance of this contract does not represent any commitment on behalf of Durham Public Schools until reviewed and approved by the Board of Education.  We anticipate the project being presented to the Board of Education for consideration of award on {moment(content.approvalDate).format("MMMM D, YYYY ")}.
              </p>
            </div>
            <div className='mt-4 flex gap-8'>
              
              <p>
                  The attached contract is being transmitted to your office for review.  If in agreement, please print (single-sided) and execute (3) three sets of originals, and forward all documents (including (3) originals of all required insurance certificates) to Construction & Capital Planning, 2011 Hamlin Road, Durham, North Carolina 27704 {content.approval === 'Yes' && <span>no later than {moment(content.deliveryDate).format("D")}, {moment(content.deliveryDate).format("MMMM YYYY ")}</span>}.  Pending award, one (1) fully executed copy of the contract will be returned for your records.
              </p>
            </div>
            <div className='mt-4 flex gap-8'>
              
              <p>
              We look forward to working with you and your team on this project.  If you have any questions, please contact me at {!profile? "":profile.project_manager_phone.value}.
              </p>
            </div>
            <div className='mt-4 gap-8'>
              
              <p>
                Sincerely,
              </p>
              <p className="my-6">
              {!profile? "":profile.project_manager.value}
                  <br/>
                C&CP Project Manager

              </p>
              <p>
                Enclosure
              </p>
              <p>
                Cc: Fredrick A. Davis, II - DPS Director of Design and Construction 
              </p>
            </div>
          </div>
          </div>
          </div>
    
            </div>
    
            {/* Buttons exportPDFWithComponent */}
            <div className='flex justify-end items-center h-20 gap-4 py-4 pr-6'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=>dispatch(prevStep())} />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='button'
                  width='w-[198px]'
                  onClick={()=>setShowModal(true)}
                
              />
            </div>
          </div>
        </div>
          </>
      )
}


export default PreviewElement;