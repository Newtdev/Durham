import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import DownLoadForm from "../../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload } from "../../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
    const show = useSelector(openDownload);
    const dispatch = useDispatch()
    const downloadComponent = useRef();
    const props = {
        component: downloadComponent,
        name: 'Owner and Contract Management (CM & CMAR) Agreement',
        show: show ? 'block' : 'hidden',
        stepDefault: stepDefault
    }

    return (
        <div>
            <DownLoadForm {...props} />

                <div>
                    {/* Modal content */}
                <div className={`${show ? "hidden" : "block"} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
                        {/* Header */}
                        <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
                            <div className='ml-6'>
                                <h3 className='text-lg font-bold text-gray-900'>
                                    Owner and Contract Management (CM_CMAR) Agreement
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
                            <div className='px-20 pt-8 pb-4 text-black'>
                                <div>
                                    {/* Page 1 */}
                                    <div className='flex flex-col px-8 py-6 gap-3'>
                                        <div className='text-center font-bold mb-6'>
                                            <p>DURHAM PUBLIC SCHOOL</p>
                                            <p>REQUISITION</p>
                                        </div>
                                        
                                        {/* row 1 */}
                                        <div className="flex justify-between ">
                                            <div className="flex flex-col w-2/4 gap-2">
                                                <div className="flex justify-start items-center gap-2">
                                                    <h2 className="text-sm font-medium ">DATE: </h2>
                                                    <div className="flex justify-center items-center w-32 border-2 border-black">
                                                        f1
                                                    </div>
                                                </div>
                                                <div className="flex justify-start items-center gap-2">
                                                    <h2 className="text-sm font-medium w-full">BUDGET CODE: </h2>
                                                    <div className="flex justify-center items-center w-full border-2 border-black">
                                                        f1
                                                    </div>
                                                </div>
                                                <div className="flex justify-start items-center gap-2">
                                                    <h2 className="text-sm font-medium w-full">COMMODITY CODE: </h2>
                                                    <div className="flex justify-center items-center border-2 border-black w-full">
                                                        f1
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-fit">
                                                <div className="flex flex-col">
                                                    <h2 className="text-sm font-medium w-full mr-2">Requisition/Work Order #:</h2>
                                                    <div className="flex justify-center items-center border-2 border-black w-full">
                                                        f1
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h2 className="text-sm font-medium w-full mr-2">P.O #:</h2>
                                                    <div className="flex justify-center items-center border-2 border-black w-full">
                                                        f1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* row 2 */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-2">
                                                <h2 className="text-sm font-medium">BEST PRICE(ATTACHED):</h2>
                                                <span className="h-4 w-4 border-2 border-black"></span>
                                            </div>

                                            <div className="flex justify-center items-center gap-2">
                                                <h2 className="text-sm font-medium">FRANCHISE/SOLE SOURCE(ATTACHED):</h2>
                                                <span className="h-4 w-4 border-2 border-black"></span>
                                            </div>
                                        </div>

                                        <div className="w-full border border-black">
                                            
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-end gap-4 pr-6 pb-4'>
                        <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={() => dispatch(prevStep(4))} />
                            <DashboardButton
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
