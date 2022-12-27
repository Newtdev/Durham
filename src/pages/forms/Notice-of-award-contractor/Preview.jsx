import moment from "moment";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Logo  from "../../../assets/formlogo.png";
import { ButtonWhiteBG } from "../../../ui";
import { project_details } from "../../Dashboard/add-project/projectSlice";
import { Close, DashboardButton } from "../../Dashboard/Components";
import DownLoadForm from "../Lundsford/Download";
import { prevStep, selectForm} from "../Notice-of-intent-consultant/reducerSlice";

import { closeModal, openDownload, showDownload } from "../reducer";

const Preview = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectForm);
    const masterInfo = useSelector(project_details)
    const show = useSelector(openDownload)
    const downloadComponent = useRef();

    const props = {
        component: downloadComponent ,
          name:'Notice of Award - Contractor' ,
          show: show ? 'block' : 'hidden',
          stepDefault:closeModal
      }    

    return (
        <div>
            <DownLoadForm {...props} />

            <div>
                {/* Modal content */}
                <div className={`${!show ? "block" : 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>            {/* Header */}
                    <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                        <div className='ml-6'>
                            <h3 className='text-lg font-bold text-gray-900'>
                                Notice of Award - Contractor
                            </h3>
                            <p className='text-base text-gray-700'>Preview Document</p>
                        </div>
                        <button
                            type='button'
                            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                            data-modal-toggle='small-modal'
                        >
                            <Close />
                        </button>
                    </div>

                    <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]' >
                        <div className='px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
                            <div>
                                <div className='flex mb-6' >
                                    <img src={Logo} alt="logo" className="h-20 object-cover" />

                                    <div className='ml-[15rem]'>
                                        <p className='text-sm text-[#3B6979]'>
                                            Construction and Capital Planning
                                        </p>
                                        <p className='text-sm text-[#3B6979]'>
                                            2011 Hamlin Road / Durham, North Carolina 27704
                                        </p>
                                        <p className='text-sm text-[#3B6979]'>
                                            919-560-2216 <span className='ml-3'>F919-560-9119</span>{" "}
                                            <span className='ml-3'>www.dpsnc.net</span>
                                        </p>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <p className='mb-4'>
                                        <span className=''>{moment(data.creationDate
                                        ).format("MMMM D, YYYY ")}</span>
                                    </p>
                                    <p >
                                        <span className=''>{!masterInfo ? "" : masterInfo.awardeeInfo[0].design_consultant}</span>
                                    </p>
                                    <p>
                                        <span className=' mb-6'>{!masterInfo ? "" : masterInfo.awardeeInfo[0].consultant_address}</span>
                                    </p>
                                    <div className='flex mt-4 mb-4'>
                                        <p>RE:</p>
                                        <div className='ml-10'>
                                            <p className=''>{!masterInfo ? "" : masterInfo.project_name}</p>
                                            <p className='font-bold'>Notice of Award</p>
                                        </div>
                                    </div>
                                    <p className='mb-6 ml[-3rem]'>
                                        Dear Mr./Mrs. <span className=''>{!masterInfo ? "" : masterInfo.awardeeInfo[0].company_representative_name}</span>
                                    </p>
                                </div>

                                <div>
                                    <p className='mb-6'>
                                        This letter is to serve as your{" "}
                                        <span className='font-bold'>Notice of Award</span> for the{" "}
                                        <span className=''>{!masterInfo ? "" : masterInfo.project_name}</span> project, which
                                        was approved by the Durham Public Schools Board of
                                        Education on <span className=''>{moment(data.approvalDate
                                        ).format("MMMM D, YYYY ")}</span>.
                                    </p>
                                    <p className='mb-6'>
                                        <span className=''>{!masterInfo ? "" : masterInfo.awardeeInfo[0].design_consultant}</span> shall execute
                                        the attached enclosed contract and forward it to {' '}
                                        <span className=''>{!data ? '' : data.contractorContact}</span>{" "}along
                                        with all required bonds and insurances, to Durham Public
                                        Schools, 2011 Hamlin Rd. Durham, NC 27704 or via email
                                        to:{" "}<span className=''>{!data ? '' : data.email}</span>
                                    </p>
                                    <p className='mb-6'>
                                        Congratulations from Durham Public Schools. We look
                                        forward to the successful completion of the{" "}
                                        <span className=''>{!masterInfo ? "" : masterInfo.project_name}</span>
                                        {' '}
                                        project. If you have any questions, please do not hesitate
                                        to contact me at : {" "}
                                        <span className=''>{!data ? '' : data.phone}</span>.
                                    </p>
                                    <p className='mb-8'>Sincerely,</p>
                                    <p className='mb-6'>
                                        <span className=''>{!data ? '' : data.sendersName}</span>
                                    </p>
                                    <p>
                                        Cc: <span className=''>{!data ? '' : data.recipientCopy}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=>dispatch(prevStep())} />
                        <DashboardButton
                            onClick={()=> dispatch(showDownload())}

                            hidden
                            name='CREATE DOCUMENT'
                            type='submit'
                            width='w-[198px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
