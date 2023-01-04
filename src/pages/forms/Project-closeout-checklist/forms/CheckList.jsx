import { useDispatch } from "react-redux";
import { project_closeout_data } from "../../../../lib/data";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { prevChoiceStep } from "../../Advertisement-for-bid-template/reducer";
import { FormCheckBox } from "../../components";
import { prev } from "../reducer";



const CheckList = (props) => {
    const dispatch = useDispatch();

    const one = {
        value: props.values.one,
        onChange: props.handleChange,
        error: props.errors.one,
        touched: props.touched.one,
        name: 'one',
    }

    const two = {
        value: props.values.two,
        onChange: props.handleChange,
        error: props.errors.two,
        touched: props.touched.two,
        name: 'two',
    }

    const three  = {
        value: props.values.three,
        onChange: props.handleChange,
        error: props.errors.three,
        touched: props.touched.three,
        name: 'three',
    }
    const four  = {
        value: props.values.four,
        onChange: props.handleChange,
        error: props.errors.four,
        touched: props.touched.four,
        name: 'four',
    }
    const five  = {
        value: props.values.five,
        onChange: props.handleChange,
        error: props.errors.five,
        touched: props.touched.five,
        name: 'five',
    }
    const six  = {
        value: props.values.six,
        onChange: props.handleChange,
        error: props.errors.six,
        touched: props.touched.six,
        name: 'six',
    }
    const seven  = {
        value: props.values.seven,
        onChange: props.handleChange,
        error: props.errors.seven,
        touched: props.touched.seven,
        name: 'seven',
    }
    const eight  = {
        value: props.values.eight,
        onChange: props.handleChange,
        error: props.errors.eight,
        touched: props.touched.eight,
        name: 'eight',
    }
    const nine  = {
        value: props.values.nine,
        onChange: props.handleChange,
        error: props.errors.nine,
        touched: props.touched.nine,
        name: 'nine',
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
                        onClick={()=> dispatch(prev(0)) }
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
                        
                    <FormCheckBox data={project_closeout_data[0].value} props={one} />
                    <FormCheckBox data={project_closeout_data[1].value} props={two} />
                    <FormCheckBox data={project_closeout_data[2].value} props={three} />
                    <FormCheckBox data={project_closeout_data[3].value} props={four} />
                    <FormCheckBox data={project_closeout_data[4].value} props={five} />
                    <FormCheckBox data={project_closeout_data[5].value} props={six} />
                    <FormCheckBox data={project_closeout_data[6].value} props={seven} />
                    <FormCheckBox data={project_closeout_data[7].value} props={eight} />
                    <FormCheckBox data={project_closeout_data[8].value} props={nine} />

           
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Cancel' onClick={()=> dispatch(prev(0)) }/>
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
};


export default CheckList;