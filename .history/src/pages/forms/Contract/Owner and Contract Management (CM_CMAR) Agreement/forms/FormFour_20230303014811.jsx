import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormFour = (props) => {
    const dispatch = useDispatch()

    const costOfWork = {
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return;
            } else {
                // return e.target.value
                props.setFieldValue('costOfWork', e.target.value)
            }
        },
        name: 'costOfWork',
        error: props.errors.costOfWork,
        value: props.values.costOfWork,
        touched: props.touched.costOfWork,
        placeholder: 'Amount'
        //    prevPage
    }
    const CMContingency = {
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return '';
            } else {
                // return e.target.value
                props.setFieldValue('CMContingency', e.target.value)
            }
        },
        name: 'CMContingency',
        error: props.errors.CMContingency,
        value: props.values.CMContingency,
        touched: props.touched.CMContingency,
        placeholder: 'Amount'
        //    prevPage
    }
    const generalConditions = {
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return '';
            } else {
                // return e.target.value
                props.setFieldValue('generalConditions', e.target.value)
            }
        },
        name: 'generalConditions',
        error: props.errors.generalConditions,
        value: props.values.generalConditions,
        touched: props.touched.generalConditions,
        placeholder: 'Amount'
        //    prevPage
    }
    const fees = {
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return '';
            } else {
                // return e.target.value
                props.setFieldValue('fees', e.target.value)
            }
        },
        name: 'fees',
        error: props.errors.fees,
        value: props.values.fees,
        touched: props.touched.fees,
        placeholder: 'Amount'
        //    prevPage
    }
    const preConstruction = {
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return '';
            } else {
                // return e.target.value
                props.setFieldValue('preConstruction', e.target.value)
            }
        },
        name: 'preConstruction',
        error: props.errors.preConstruction,
        value: props.values.preConstruction,
        touched: props.touched.preConstruction,
        placeholder: 'Amount'
        //    prevPage
    }



    return <div>
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}

            <div className='relative w-[600px] bg-white rounded-lg shadow py-4'>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                            Owner and Contract Management (CM & CMAR) Agreement
                        </h3>
                        <p className='text-base text-gray-700'>
                            For the items below, enter the agreed-upon dollar amounts.
                        </p>
                    </div>
                    <button
                        onClick={() => dispatch(closeModal())}
                        type='button'
                        className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                        data-modal-toggle='small-modal'
                    >
                        <Close />
                    </button>
                </div>

                {/* Progress */}
                <div className='w-full bg-[#89A5AF] h-2.5 my-4'>
                    <div className='bg-[#2F5461] h-2.5 w-[50%]'></div>
                </div>

                <div className='mx-6 mb-12'>

                    <div className=' mt-3 ml-2'>

                        <div className='mb-6'>
                            <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                                Cost of Work
                            </p>
                            <div className='relative w-full'>
                                <input
                                    {...costOfWork}
                                    className='bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10'
                                />
                                <small className='absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]'>
                                    $
                                </small>
                            </div>
                            {props.errors.procurementAmount && props.touched.procurementAmount && <Error message={props.errors.procurementAmount} />}
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                                CM construction contingency
                            </p>
                            <div className='relative w-full'>
                                <input
                                    {...CMContingency}
                                    className='bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10'
                                />
                                <small className='absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]'>
                                    $
                                </small>
                            </div>
                            {props.errors.CMContingency && props.touched.CMContingency && <Error message={props.errors.CMContingency} />}
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                                General Conditions
                            </p>
                            <div className='relative w-full'>
                                <input
                                    {...generalConditions}
                                    className='bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10'
                                />
                                <small className='absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]'>
                                    $
                                </small>
                            </div>
                            {props.errors.generalConditions && props.touched.generalConditions && <Error message={props.errors.generalConditions} />}
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                                CM’s fee for preconstruction services
                            </p>
                            <div className='relative w-full'>
                                <input
                                    {...fees}
                                    className='bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10'
                                />
                                <small className='absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]'>
                                    $
                                </small>
                            </div>
                            {props.errors.fees && props.touched.fees && <Error message={props.errors.fees} />}
                        </div><div className='mb-6'>
                            <p className='text-gray-900 font-medium text-sm mb-[2px]'>
                                Construction and post-construction services
                            </p>
                            <div className='relative w-full'>
                                <input
                                    {...preConstruction}
                                    className='bg-white text-gray-900 w-full text-base rounded border border-gray-400 py-2 pl-8 pr-2 focus:outline-gray-400 h-10'
                                />
                                <small className='absolute text-gray-400 top-1/2 translate-y-[-9px] left-[12px]'>
                                    $
                                </small>
                            </div>
                            {props.errors.preConstruction && props.touched.preConstruction && <Error message={props.errors.preConstruction} />}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Previous' onClick={() => dispatch(prevStep(3))} />
                    <DashboardButton
                        hidden
                        loading={props.isLoading}
                        name='NEXT'
                        type='submit'
                        width='w-[77px]'
                    />
                </div>
            </div>
        </div>
    </div>
}


export default FormFour;