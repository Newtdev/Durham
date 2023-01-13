import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG } from "../../../ui";
import Logo from '../../../assets/formlogo.png'

import { Close, DashboardButton } from "../../Dashboard/Components";
import { prevStep, stepDefault } from "./reducer";
import { closeModal, fields, openDownload, savedResponse, showDownload } from "../reducer";
import { useRef, useState } from "react";
import { useFetchFilledFormQuery } from "../../../features/services/api";
import { project_document_id } from "../../Dashboard/project-dashboard/ReducerSlice";
import DownLoadForm from "../Lundsford/Download";
import moment from "moment";

const Preview = () => {
    const dispatch = useDispatch()
    const show = useSelector(openDownload)
    const downloadComponent = useRef();
    const form_fields = useSelector(fields);
    const [highlighted, setHighlighed] = useState(false)

    const formID = useSelector(project_document_id)
    useFetchFilledFormQuery(formID)
    const content = useSelector(savedResponse);
    const { vendors, project, durham_profile
    } = content;

    const props = {
        component: downloadComponent,
        name: 'Determination of Apparent Low Bidder',
        show: show ? 'block' : 'hidden',
        stepDefault,
        remove: () => setHighlighed(true),
    }
    const nottoBeHighlighted = !highlighted ? 'bg-yellow-300' : 'bg-white';

    return (
        <div>
            <div>
                <DownLoadForm {...props} />

                {/* Modal content */}
                <div className={`${!show ? "block" : 'hidden'} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>                     {/* Header */}
                    <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                        <div className='ml-6'>
                            <h3 className='text-lg font-bold text-gray-900'>
                                Determination of Apparent Low Bidders
                            </h3>
                            <p className='text-base text-gray-700'>Preview Document</p>
                        </div>
                        <button
                            onClick={() => dispatch(closeModal())}
                            type='button'
                            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
                            data-modal-toggle='small-modal'
                        >
                            <Close />
                        </button>
                    </div>

                    <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
                        <div className='px-16 pt-8 pb-4 text-black arial-font' ref={downloadComponent}>
                            <div>
                                <div className='flex mb-4'>
                                    <div className="w-1/2">
                                        <img src={Logo} alt="logo" className="h-20  w-full object-contain" />

                                    </div>
                                    <div className='ml-[23rem]'>
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

                                <div className='mb-4'>
                                    <p>

                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{moment(form_fields.creationDate
                                        ).format("MMMM D, YYYY ")}</span>
                                    </p>
                                    <p>
                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{!vendors ? "" : vendors[0].first_name + ' ' + vendors[0].last_name}</span>{" "}

                                    </p>
                                    <p>
                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{!vendors ? "" : vendors[0].company_name}</span>
                                    </p>
                                    <p>
                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{!vendors ? "" : vendors[0].address}</span>
                                    </p>
                                    <p>
                                        <span className='bg-yellow-500 font-bold advertise'>F5</span>
                                    </p>
                                </div>

                                <div>
                                    <div className='flex mb-4'>
                                        <p>RE:</p>
                                        <div className='ml-[5.25rem]'>
                                            <p>Durham Public Schools (DPS)</p>
                                            <p>
                                                {/* <span className='bg-yellow-500 font-bold advertise'>F6</span> -{" "} */}
                                                <span className={`${nottoBeHighlighted} font-bold advertise`}>{!project ? '' : project.name}</span> (
                                                <span className={`${nottoBeHighlighted} font-bold advertise`}>{!project ? '' : project.number}</span>)
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex mb-4'>
                                        <p>SUBJECT:</p>
                                        <div className='ml-8'>
                                            <p className='font-bold'>
                                                Determination of Apparent Low Bidders
                                            </p>
                                        </div>
                                    </div>
                                    <p className='mb-4'>
                                        Dear <span className={`${nottoBeHighlighted} font-bold advertise`}>Mr./Ms.</span>{" "}
                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{!vendors ? "" : vendors[0].last_name}</span>:
                                    </p>
                                    <p className='mb-4'>
                                        Your firm has been determined to be the apparent low
                                        bidder by Durham Public Schools.
                                    </p>
                                    <p className='mb-4'>
                                        You are required to submit MWBE Affidavit C (Portion of
                                        Work to be Performed by Minority Firms) and, if necessary,
                                        Affidavit D (Good Faith Efforts) within 72 hours of
                                        receipt of this notice. For Affidavit C, if you are
                                        self-performing and a certified minority firm, you must
                                        list information for your firm in the table. Affidavit D
                                        must include all supporting documentation. Failure to
                                        submit Affidavit C or D will result in the rejection of
                                        your bid.
                                    </p>
                                    <p className='mb-4'>
                                        Once we have received, and verified the MWBE documents
                                        listed above are complete and acceptable, a contract will
                                        be forwarded to you for signature.
                                    </p>
                                    <p className='mb-4'>
                                        We look forward to working with you and your team on this
                                        project. If you have any questions, please contact me at
                                        <span className={`${nottoBeHighlighted} font-bold advertise`}>{' '}{!durham_profile ? '' : durham_profile.project_manager_phone}</span>.
                                    </p>
                                    <p className='mb-4'>Sincerely,</p>
                                    <div className='mb-4'>
                                        <p className='mb-0'>
                                            <span className={`${nottoBeHighlighted} font-bold advertise`}>{!durham_profile ? '' : durham_profile.project_manager}</span>
                                        </p>
                                        <p className='mt-0'>C&CP Project Manager</p>
                                    </div>

                                    <p className='mb-0'>Enclosure</p>
                                    <div className='mb-4 flex'>
                                        <p>Cc:</p>
                                        <div className='ml-8'>
                                            <p>
                                                <span className={`${nottoBeHighlighted} font-bold advertise`}>{!durham_profile ? '' : durham_profile.construction_interim_director}</span>, Interim
                                                Executive Director, C&CP
                                            </p>
                                            <p>
                                                <span className={`${nottoBeHighlighted} font-bold advertise`}>{!form_fields ? "" : form_fields.recipientCopy}</span>
                                                {!form_fields ? "" : form_fields.userValue && !form_fields.recipientCopy && <span className={`${nottoBeHighlighted} font-bold advertise`}>{!form_fields ? "" : form_fields.userValue}</span>}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex'>
                                        <p>File:</p>
                                        <div className='ml-[1.6rem]'>
                                            <p>
                                                [DPS Project No.{" "}
                                                <span className={`${nottoBeHighlighted} font-bold advertise`}>{!project ? "" : project.number}</span>]
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={() => dispatch(prevStep(1))} />
                        <DashboardButton
                            hidden
                            name='CREATE DOCUMENT'
                            type='submit'
                            width='w-[198px]'
                            onClick={() => {
                                setHighlighed(true)
                                dispatch(showDownload())
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Preview;