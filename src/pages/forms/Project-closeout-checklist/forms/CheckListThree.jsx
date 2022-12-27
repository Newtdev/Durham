import { useDispatch } from "react-redux"
import { project_closeout_data } from "../../../../lib/data"
import { ButtonWhiteBG } from "../../../../ui"
import { Close, DashboardButton } from "../../../Dashboard/Components"
import { prevChoiceStep } from "../../Advertisement-for-bid-template/reducer"
import { FormCheckBox } from "../../components"
import { prev } from "../reducer"

const CheckListThree = (props) => {
    const dispatch = useDispatch();
    const eighteen  = {
        value: props.values.eighteen,
        onChange: props.handleChange,
        error: props.errors.eighteen,
        touched: props.touched.eighteen,
        name: 'eighteen',
    }
    const nineteen = {
        value: props.values.nineteen,
        onChange: props.handleChange,
        error: props.errors.nineteen,
        touched: props.touched.nineteen,
        name: 'nineteen',
    }
    const twenty = {
        value: props.values.twenty,
        onChange: props.handleChange,
        error: props.errors.twenty,
        touched: props.touched.twenty,
        name: 'twenty',
    }
    const twentyOne = {
        value: props.values.twentyOne,
        onChange: props.handleChange,
        error: props.errors.twentyOne,
        touched: props.touched.twentyOne,
        name: 'twentyOne',
    }

    const twentyTwo = {
        value: props.values.twentyTwo,
        onChange: props.handleChange,
        error: props.errors.twentyTwo,
        touched: props.touched.twentyTwo,
        name: 'twentyTwo',
    }

    
    return <div>
        
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}
            
            <form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                            Project Closeout Checklist
                        </h3>
                        <p className='text-base text-gray-700'>
                        Checklist
                        </p>
                    </div>
                    <button
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
                        
                    <FormCheckBox data={project_closeout_data[17].value} props={eighteen} />
                    <FormCheckBox data={project_closeout_data[18].value} props={nineteen} />
                    <FormCheckBox data={project_closeout_data[19].value} props={twenty} />
                    <FormCheckBox data={project_closeout_data[20].value} props={twentyOne} />
                    <FormCheckBox data={project_closeout_data[21].value} props={twentyTwo} />
                    

           
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Cancel' onClick={() => dispatch(prev())} />
                    <DashboardButton
                        hidden
                        name='NEXT'
                        type='submit'
                        width='w-[77px]'
                    />
                </div>
            </form>
        </div>
    </div>
}


export default CheckListThree;