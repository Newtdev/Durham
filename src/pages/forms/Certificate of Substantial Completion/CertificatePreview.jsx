import Logo  from "../../../assets/formlogo.png";
import { useRef } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import { useDispatch, useSelector } from "react-redux";
import { prev, stepDefault } from "./reducer";
import { selectForm } from "../Notice-of-intent-consultant/reducerSlice";
import { project_details } from "../../Dashboard/add-project/projectSlice";
import { closeDownload, openDownload, showDownload } from "../reducer";
import moment from "moment";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";

const CertificatePreview = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectForm);
  const masterInfo = useSelector(project_details)
  const show = useSelector(openDownload)
  const downloadComponent = useRef();

  const props = {
    component: downloadComponent ,
      name:'Certificate of Substantial Completion' ,
      show: show ? 'block' : 'hidden',
    stepDefault,
    close:closeDownload
  }

  return (
    <div>
         <DownLoadForm {...props} />

        <div>
          {/* Modal content */}
          <div className={`${!show ?"block": 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}> 
            {/* Header */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='text-lg font-bold text-gray-900'>
                  Certificate of Substantial Completion
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
                  <div className='flex items-center mb-10 '>
                  <img src={Logo} alt="logo" className="h-20 object-cover mb-4" />

                    <h1 className='font-bold text-xl ml-8'>
                      Certficate of Substantial Completion
                    </h1>
                  </div>

                  <table className='w-full border border-black text-left mb-5'>
                    <thead className='h-[3rem]'>
                      <tr>
                        <th className='border border-black pl-[1rem]'>
                          PROJECT
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          PROJECT INFORMATION
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          DISTRIBUTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td className='border border-black pl-[1rem]'>{!masterInfo ?'': masterInfo.project_name}</td>
                        <td className='border border-black pl-[1rem]'>
                          Project No: {!masterInfo ?'': masterInfo.project_number}, g8.1
                        </td>
                        <td className='border border-black pl-[1rem]'>Owner</td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'> </td>
                        <td className='border border-black pl-[1rem]'>
                          Contract for: {!data? '': data.purposeOfContract
} Construction
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          Architect
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'>F2</td>
                      <td className='border border-black pl-[1rem]'>
                      
                          Contract Date: {moment(data.contractEffectDate).format("MMMM D, YYYY ")}
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          Contractor
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'></td>
                        <td className='border border-black pl-[1rem]'></td>
                        <td className='border border-black pl-[1rem]'>{!data? '': data.involvedInProject}</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className='w-full border border-black text-left mb-6'>
                    <thead>
                      <tr>
                        <th className='border border-black pl-[1rem]'>
                          TO OWNER:
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          TO CONTRACTOR:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-black pl-[1rem]'>Durham Public Schools</td>
                      <td className='border border-black pl-[1rem]'>{!masterInfo? '': masterInfo.awardeeInfo[0].consultant_name}</td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'>511 Cleveland St., Durham, NC 27701</td>
                        <td className='border border-black pl-[1rem]'>{!masterInfo? '': masterInfo.awardeeInfo[0].consultant_address}</td>
                      </tr>
                      <tr>
                        {/* <td className='border border-black pl-[1rem]'>
                          City, State 2XXXX
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          City, State 2XXXX
                        </td> */}
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <p className='font-bold mb-6'>
                      PROJECT OR PORTION OF THE PROJECT DETERMINED SUBSTANTIALLY
                      COMPLETE:
                    </p>

                    <p className='mb-6'>
                      List project name here the Work{" "}
                      <span className=''>{!data? "": data.areasCompleted
}</span> determined
                      Substantially Complete.
                    </p>

                    <p className='mb-6'>
                      The Work performed under this contract has been reviewed
                      and found to be Substantially Complete. Substantial
                      Completion is the stage in the progress of the Work when
                      the Work (or designated portion thereof) is sufficiently
                      complete in accordance with the Contract Documents so that
                      the Owner can occupy or utilize the Work for its intended
                      use. The date of Substantial Completion of the Project or
                      portion designated above is the date identified below.
                      This date is also the Date of Commencement of all
                      applicable warranties required by the Contract Documents:
                    </p>

                    <p className='font-bold mb-6'>
                      DATE OF SUBSTANTIAL COMPLETION:{" "}
                      <span className=''>{moment(data.completionDate).format("MMMM D, YYYY ")}</span>
                    </p>

                    <p className='mb-14'>
                      A punch list of items to be corrected is attached hereto.
                      The failure to include items on the punch list does not
                      alter the Contractor’s responsibility to complete all Work
                      in accordance with the Contract Documents. Unless
                      otherwise agreed to in writing, the date of commencement
                      of warranties for items on the punch list will be the date
                      of the Consultants Certification of the Final Payment.
                    </p>

                    <div className='mb-6'>
                      <p className='mb-0'>
                       <span className=''>{!masterInfo? '': masterInfo.awardeeInfo[0].design_consultant}</span>
                        ___________________________________________________________________
                      </p>
                      <span>CONSULTANT</span>
                      <span className='ml-[10rem]'>
                        BY: <span className=''>{!masterInfo? '': masterInfo.awardeeInfo[0].company_representative_name}</span>
                      </span>
                      <span className='ml-[10rem]'>DATE</span>
                    </div>

                    <p className='mb-10'>
                      The Contractor will complete all work on the attached
                      punch list within{" "}
                      <span className=''>{!data? "": data.workCompletionDate
}</span> days from the
                      date of Substantial Completion.
                    </p>

                    <p className='mb-12 font-bold'>
                      COST ESTIMATE OF REMAINING WORK:
                    <span className=' '>{ " "}{currency(data.estimatedCost).format()}</span>
                    </p>

                    <div className='mb-6'>
                      <p className='mb-0'>
                       <span className=''>{!masterInfo? '': masterInfo.awardeeInfo[0].consultant_name}</span>
                        ________________________________________________________________________________
                      </p>
                      <span>CONTRACTOR</span>
                      <span className='ml-[10rem]'>
                        BY: <span className=''>{!masterInfo? '': masterInfo.awardeeInfo[0].company_representative_name}</span>
                      </span>
                      <span className='ml-[10rem]'>DATE</span>
                    </div>

                    <p className='mb-12'>
                      The Owner accepts the Work or designated portion as
                      Substantially Complete and will assume full possession at
                      12:01 AM on the Substantial Completion date identified
                      above.
                    </p>

                    <div className='mb-6'>
                    <p className='mb-0'>
                    <span className=''>Durham Public Schools</span>
                        _____________________________________________________________________________
                        
                        
                      </p>
                      <span>OWNER: </span>
                      <span className='ml-[15rem]'>
                      BY: <span className=''>{!data ? '' : data.ownerRepName}</span>
                      </span>
                    <span className='ml-[10rem]'>DATE: <span className=''>{moment(data.signedDate).format("MMMM D, YYYY ")}</span>
                    </span>
                    </div>

                    <p className='mb-6'>
                      The responsibility of the Owner and Contractor for
                      security, maintenance, heat, utilities, damage to the Work
                      and insurance shall be as follows:
                    </p>

                    <p>
                      <span className=''>{!data ? '' : data.responsibility}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=> dispatch(prev())} />
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

export default CertificatePreview;
