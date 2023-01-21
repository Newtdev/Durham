import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import Logo  from "../../../assets/formlogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeDownload, fields, openDownload, savedResponse, showDownload } from "../reducer";
import { useRef } from "react";
// import { prevStep, selectForm, stepDefault } from "../Notice-of-intent-consultant/reducerSlice";
import moment from "moment";
import currency from "currency.js";
import DownLoadForm from "../Lundsford/Download";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { prevStep, stepDefault } from "./reducer";


const Preview = () => {

    const dispatch = useDispatch();

    const show = useSelector(openDownload)
    const downloadComponent = useRef();
    const formID = useSelector(project_document_id);
    useFetchFilledFormQuery(formID)
    const content = useSelector(savedResponse);
    const { vendors, durham_profile, project } = content;
    const form_fields = useSelector(fields);

   

    const props = {
        component: downloadComponent,
        name: 'Notice of Award - Consultant',
        show: show ? 'block' : 'hidden',
        stepDefault,
        close: closeDownload
    }
    // creationDate
    return (
        <div>
        <DownLoadForm {...props} />

            <div>
                {/* Modal content */}
                <div className={`${!show ? "block" : 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>  
                    {/* Header */}
                    <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                        <div className='ml-6'>
                            <h3 className='text-lg font-bold text-gray-900'>
                                Notice of Award - Consultant
                            </h3>
                            <p className='text-base text-gray-700'>Preview Document</p>
                        </div>
                        <button
                            onClick={()=> dispatch(prevStep())}
                            type='button'
                            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                            data-modal-toggle='small-modal'
                        >
                            <Close />
                        </button>
                    </div>

                    <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
                        <div className='px-12 pt-8 pb-4 text-black' ref={downloadComponent}>
                            <div>
                                <div className='flex mb-6'>
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
                                            <span className=''>www.dpsnc.net</span>
                                        </p>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <p className='mb-4'>
                                        <span className=''>{moment(form_fields.creationDate
                                        ).format("MMMM D, YYYY ")}</span>{" "} 
                                         {form_fields.approval === 'Yes' && <span className=' ml-12'>Exec Director approval is required to issue this</span>}
                                    </p>
                                    <p>
                                        <span className=''>{!vendors ? "" : vendors[0].first_name}</span>,{" "}
                                        <span className=''>{!vendors ? "" : vendors[0].title}</span>
                                    </p>
                                    <p>
                                        <span className=''>{!vendors ? "" : vendors[0].company_name}</span>
                                    </p>
                                    <p>
                                        <span className=''>{!vendors ? "" : vendors[0].address}</span>
                                    </p>
                                    {/* <p>
                      <span className=''>F6</span>
                    </p> */}
                                </div>

                                <div>
                                    <div className='flex mb-6'>
                                        <p>RE:</p>
                                        <div className='ml-16'>
                                            <p>Durham Public Schools (DPS)</p>
                                            <p>
                                                <span className=''>F7</span> -{" "}
                                                <span className=''>{!project ? "" : project.name}</span>
                                            </p>
                                            <p>
                                                DPS Project No.{" "}
                                                <span className=''>{!project ? "" : project.number}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex mb-6'>
                                        <p>SUBJECT:</p>
                                        <div className='ml-16'>
                                            <p className='font-bold'>
                                                NOTICE OF AWARD for <span>{!form_fields ? "" : form_fields.services}</span> SERVICES
                                            </p>
                                        </div>
                                    </div>
                                    <p className='mb-6'>
                                        Dear Mr./Mrs. <span className=''>{!vendors ? "" :vendors.last_name}</span>
                                    </p>
                                    <p className='mb-6'>
                                        This letter serves as a Notice of Award for the{" "}
                                        <span className=''>{!project ? "" : project.project_name}</span> project located
                                        at <span className=''>F13</span> in Durham,
                                        North Carolina. Durham Public School Administration is
                                        awarding the work to{" "}
                                        <span className=''>{!vendors ? "" : vendors[0].company_name}</span> at a lump sum 
                                        fee of <span className=''>{currency(form_fields.amount).format()}</span>. 
                                        Consultant services shall include the deliverables and
                                        scopes of work as outlined in the Consultant proposal
                                        attached to the Contract by Exhibit.{" "}
                                    </p>
                                    <p className='mb-6'>
                                        The attached contract is being transmitted to your office
                                        for review and execution. If in agreement,{" "}
                                        <span className='font-bold underline'>
                                            please sign and notarize the agreement and forward all
                                            it, along with insurance certificates
                                        </span>{" "}
                                        to Construction & Capital Planning, 2011 Hamlin Road,
                                        Durham, North Carolina 27704 or via email to {" "}
                                        <span className=''>{!form_fields ? '' : form_fields.email}</span> no
                                        later than <span className=''>{moment(form_fields.deliveryDate
                                        ).format("MMMM D, YYYY ")}</span>.
                                        Once we have received and processed the contract, one (1)
                                        fully executed copy will be returned for your records.
                                    </p>
                                    <p className='mb-6'>
                                        We look forward to working with you and your team on this
                                        project. If you have any questions, please contact me at
                                        <span className=''>{" "}{!durham_profile ? "" : durham_profile.project_manager_phone}</span>.
                                    </p>
                                    <p className='mb-6'>Sincerely,</p>
                                    <p>
                                        <span className=''>{!durham_profile ? "" : durham_profile.project_manager}</span>
                                    </p>
                                    <p className='mb-8'>C&CP Project Manager</p>
                                    <p>Enclosure</p>
                                    <p>
                                        Cc: <span className='bg-yellow-500'></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={()=> dispatch(prevStep())} />
                        <DashboardButton
                            hidden
                            name='CREATE DOCUMENT'
                            type='submit'
                            width='w-[198px]'
                            onClick={()=> dispatch(showDownload())}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;
