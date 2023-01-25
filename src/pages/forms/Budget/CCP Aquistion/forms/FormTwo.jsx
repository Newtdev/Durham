import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../../ui";
import { Close, DashboardButton } from "../../../../Dashboard/Components";
import { getList } from "../../../Advertisement-for-bid-template/reducer";
import { FormSelect } from "../../../components";
import { FormInputContainer } from "../../../Notice-of-intent-consultant/Forms";
import { closeModal } from "../../../reducer";
import { prevStep } from "../reducer";

const FormTwo = (props) => {
    const dispatch = useDispatch();
    const states = useSelector(getList);

    function CheckState(index) {
        if (!props.values.location[index].projectState) {
            return;
        }
        let stat = Object.values(states)?.find((state) => state.name === props.values.location[index].projectState);

        return Object.keys(stat.cities)?.map((cur, id) => {

            return <option key={id} value={cur}>{cur}</option>
        })
    };

    function CheckZipCode(index) {
        if (!props.values.location[index].projectCity) {
            return;
        }
        const city = Object.values(states)?.filter((state) => state.name === props.values.location[index].projectState)
        const zipcode = city?.find((cities) => cities);
        return zipcode.cities[props.values.location[index].projectCity]?.map((zipcode, index) => {
            return <option key={index} value={zipcode}>{zipcode}</option>
        })



    };

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
                            Refer Article 2 and enter the project name and locations
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

                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={() => dispatch(prevStep(1))} />
                    <DashboardButton
                        hidden
                        name='NEXT'
                        type='submit'
                        width='w-[77px]'
                    />
                </div>
            </div>
        </div>
    </div>
}


export default FormTwo;