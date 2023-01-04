import { useDispatch } from "react-redux"
import { project_closeout_data } from "../../../../lib/data"
import { ButtonWhiteBG } from "../../../../ui"
import { Close, DashboardButton } from "../../../Dashboard/Components"
import { prevChoiceStep } from "../../Advertisement-for-bid-template/reducer"
import { FormCheckBox } from "../../components"
import { prev } from "../reducer"

const CheckListTwo = (props) => {
    const dispatch = useDispatch();
    const ten  = {
        value: props.values.ten,
        onChange: props.handleChange,
        error: props.errors.ten,
        touched: props.touched.ten,
        name: 'ten',
    }
    const eleven = {
        value: props.values.eleven,
        onChange: props.handleChange,
        error: props.errors.eleven,
        touched: props.touched.eleven,
        name: 'eleven',
    }
    const twelve = {
        value: props.values.twelve,
        onChange: props.handleChange,
        error: props.errors.twelve,
        touched: props.touched.twelve,
        name: 'twelve',
    }
    const thirteen = {
        value: props.values.thirteen,
        onChange: props.handleChange,
        error: props.errors.thirteen,
        touched: props.touched.thirteen,
        name: 'thirteen',
    }

    const fourteen = {
        value: props.values.fourteen,
        onChange: props.handleChange,
        error: props.errors.fourteen,
        touched: props.touched.fourteen,
        name: 'fourteen',
    }

    const fifteen = {
        value: props.values.fifteen,
        onChange: props.handleChange,
        error: props.errors.fifteen,
        touched: props.touched.fifteen,
        name: 'fifteen',
    }
    const sixteen = {
        value: props.values.sixteen,
        onChange: props.handleChange,
        error: props.errors.sixteen,
        touched: props.touched.sixteen,
        name: 'sixteen',
    }
    const seventeen = {
        value: props.values.seventeen,
        onChange: props.handleChange,
        error: props.errors.seventeen,
        touched: props.touched.seventeen,
        name: 'seventeen',
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
                        onClick={() => dispatch(prev(1))}
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
                        
                    <FormCheckBox data={project_closeout_data[9].value} props={ten} />
                    <FormCheckBox data={project_closeout_data[10].value} props={eleven} />
                    <FormCheckBox data={project_closeout_data[11].value} props={twelve} />
                    <FormCheckBox data={project_closeout_data[12].value} props={thirteen} />
                    <FormCheckBox data={project_closeout_data[13].value} props={fourteen} />
                    <FormCheckBox data={project_closeout_data[14].value} props={fifteen} />
                    <FormCheckBox data={project_closeout_data[15].value} props={sixteen} />
                    <FormCheckBox data={project_closeout_data[16].value} props={seventeen} />

           
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Cancel' onClick={() => dispatch(prev(1))} />
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


export default CheckListTwo;