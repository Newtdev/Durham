import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { ButtonWhiteBG, Calender, Error } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import {  FormInput } from "../components";

export const FormInputContainer = ({ name, children }) => {
    return <div className='flex flex-col mb-5'>
        <label
            for='default-radio-1'
            className='text-base text-gray-900 mb-1'
        >
            {name}
        </label>
        {children}
    </div>
}

const NoticeForm = (props) => {
    const creationDate = {
        ...props,
        value: props.values.creationDate,
        onChange: props.handleChange,
        name: 'creationDate',
        error: props.errors.creationDate,
        touched: props.touched.creationDate,
        //    prevPage
    }

    const projectAmount = {
        value: props.values.projectAmount,
        
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return;
            } else {
                // return e.target.value
                props.setFieldValue('projectAmount',e.target.value)
         }
        },
        error: props.errors.projectAmount,
        touched: props.touched.projectAmount,
        name: 'projectAmount',
        type: 'text'
        //    prevPage
    };
    const deliveryDate = {
        ...props,
        value: props.values.deliveryDate,
        onChange: props.handleChange,
        error: props.errors.deliveryDate,
        touched: props.touched.deliveryDate,
        name: 'deliveryDate',

    };
     
    const approvalDate = {
        ...props,
        value: props.values.approvalDate,
        onChange: props.handleChange,
        error: props.errors.approvalDate,
        touched: props.touched.approvalDate,
        name: 'approvalDate',

    };
       
    // { handleChange, errors, values, touched, handleSubmit }

    const SelectDate = (props) => {
        const { value, setFieldValue, name } = props;
        return <label className="bg-gray-50 border flex items-center justify-between border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-[#3B6979] focus:border-[#3B6979]  w-full pr-2">
            <DatePicker
                {...props}
                selected={value}
                name='date'
                onChange={(e) => setFieldValue(name, e)}
                className='w-full p-2.5 bg-gray-50'
                placeholderText="Select Date"
            />
            <Calender />
        </label>
    };


    return <div>
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}
            
            <form onSubmit={props.handleSubmit} className='relative w-[600px] bg-white rounded-lg shadow py-4'>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                            Notice of Intent to Award - Consultant
                        </h3>
                        <p className='text-base text-gray-700'>
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
                    <small className='text-gray-900 font-medium'>
                        Does this letter need the executive director's approval?
                    </small>
                    <div className=' mt-3 ml-2'>
                        <div className='flex items-center mb-5'>
                            <input
                                type='radio'
                                onChange={props.handleChange}
                                value='Yes'
                                name='approval'
                                className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                            />
                            <label
                                for='default-radio-1'
                                className='ml-2 text-base text-gray-900'
                            >
                                Yes
                            </label>
                            
                        </div>
                        
                        <div className=' mb-5'>
                            
                            <input
                                type='radio'
                                onChange={props.handleChange}
                                value='No'
                                name='approval'
                                className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300'
                            />
                            <label
                                for='default-radio-1'
                                className='ml-2 text-base text-gray-900'
                            >
                                No
                            </label>
                        {props.errors.approval && props.touched.approval && <Error message={props.errors.approval}/>}
                        </div>
                        
                        <FormInputContainer name='On what date are you creating this letter?'>

                            <SelectDate {...creationDate} />
                            {props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate}/>}
                        </FormInputContainer>

    
                        <div className='flex flex-col mb-5'>
                            <label
                                for='default-radio-1'
                                className='text-base text-gray-900 mb-1'
                            >
                                The consultant may be given the project for the sum of?
                            </label>
                            <FormInput {...projectAmount} />
                            {props.errors.projectAmount && props.touched.projectAmount && <Error message={props.errors.projectAmount}/>}
            
                        </div>

                        {/* </FormInputContainer> */}
                        
                      
                        <FormInputContainer name='When will the Board of DPS be asked to approve this contract?'>
                            <SelectDate {...approvalDate} />
                            {props.errors.approvalDate && props.touched.approvalDate && <Error message={props.errors.approvalDate}/>}
                        </FormInputContainer>
                        <FormInputContainer name='By what date must the consultant, deliver the required documents?'>
                            <SelectDate {...deliveryDate} />
                            {props.errors.deliveryDate && props.touched.deliveryDate && <Error message={props.errors.deliveryDate}/>}
                        </FormInputContainer>
                    
           
                    </div>
                    {/* {error && touched && <Error message={error} />} */}
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='cancel' />
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


export default NoticeForm;