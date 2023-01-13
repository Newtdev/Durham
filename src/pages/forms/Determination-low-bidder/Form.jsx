
import { useDispatch } from "react-redux";
import { useFetchDurhamQuery } from "../../../features/services/api";
import { ButtonWhiteBG, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import SelectDate, { FormSelect } from "../components";
import { FormInputContainer } from "../Notice-of-intent-consultant/Forms";
import { closeModal } from "../reducer";



const DeterminationForm = (props) => {
    const dispatch = useDispatch();
    const durham = useFetchDurhamQuery();


    const creationDate = {
        ...props,
        value: props.values.creationDate,
        onChange: props.handleChange,
        name: 'creationDate',
        error: props.errors.creationDate,
        touched: props.touched.creationDate,
        placeholder: 'Select date'
        //    prevPage
    };

    const recipientCopy = {
        value: props.values.recipientCopy,
        onChange: props.handleChange,
        error: props.errors.recipientCopy,
        touched: props.touched.recipientCopy,
        id: 'recipientCopy',
        name: 'Choose the recipients of the carbon copy.',
        type: 'text',
        placeholder: 'Select recipients'
    };



    return <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>

        <form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
            <div className='flex justify-between items-baseline mx-6'>
                <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                        Determination of Apparent Low Bidder
                    </h3>
                    <p className='text-base text-gray-700'>
                        Preview Document
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
                <div className='bg-[#2F5461] h-2.5 w-[50%]'>

                </div>
            </div>
            <div className=" px-4 w-full my-4 border-b py-1 text-gray-500">
                <p> Type in the Liquidated Damages amounts.</p>
            </div>
            <div className="px-4">
                <FormInputContainer name='On what date are you creating this letter?'>

                    <SelectDate {...creationDate} />
                    {props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate} />}
                </FormInputContainer>






                <FormInputContainer>
                    <FormSelect {...recipientCopy}>
                        <option value=''>Select recipients</option>
                        {!durham?.data ? <option>No recipients</option> : durham?.data.map((cur, id) => {
                            return <option key={cur.slug} value={cur.value}>{cur.name}</option>
                        })}



                    </FormSelect>
                </FormInputContainer>


            </div>
            {/* Buttons */}
            <div className='flex justify-end gap-8 pr-4'>
                <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={() => dispatch(closeModal())} />
                <DashboardButton
                    hidden
                    name='NEXT'
                    type='submit'
                    width='w-[77px]'
                />
            </div>
        </form>
    </div>
}



export default DeterminationForm;

