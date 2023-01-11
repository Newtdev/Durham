
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { closeModal } from "../../reducer";

import { prevChoiceStep, } from "../reducer";


const CompanyInformation = (props) => {
    const dispatch = useDispatch();
    const company_name = {
        value: props.values.company_name,
        onChange: props.handleChange,
        name: 'company_name',
        placeholder: 'Company Name',
        type: 'text',
        
    }
    const manager_name = {
        value: props.values.manager_name,
        onChange: props.handleChange,
        name: 'manager_name',
        placeholder: 'Name',
        type: 'text',
       
    }
    const manager_phone_number = {
        value: props.values.manager_phone_number,
        onChange: props.handleChange,
        name: 'manager_phone_number',
        type: 'text',
        placeholder: 'Phone Number'
        
    }
    const manager_email_address = {
        value: props.values.manager_email_address,
        onChange: props.handleChange,
        name: 'manager_email_address',
        type: 'text',
        placeholder: 'Email Address'
    }
   
    return <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>
            
        <form onSubmit={props.handleSubmit} className='relative w-[600px] bg-white rounded-lg shadow py-4'>
            <div className='flex justify-between items-baseline mx-6'>
                <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                        00 11 13 - Advertisement for Bid Template
                    </h3>
                    <p className='text-base text-gray-700'>
                    Program Manager Information
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
            <div className="px-4">
            

                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        Company Name
                    </label>
                    <input
                        {...company_name}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.company_name && props.touched.company_name && <Error message={props.errors.company_name} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                       Name
                    </label>
                    <input
                        {...manager_name}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.manager_name && props.touched.manager_name && <Error message={props.errors.manager_name} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        Phone Number
                    </label>
                    <input
                        {...manager_phone_number}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.manager_phone_number && props.touched.manager_phone_number && <Error message={props.errors.manager_phone_number} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        Email Address
                    </label>
                    <input
                        {...manager_email_address}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.manager_email_address && props.touched.manager_email_address && <Error message={props.errors.manager_email_address} />}
            
                </div>
            
                          
            </div>
            
                   

            {/* Buttons */}
            <div className='flex justify-end gap-8 pr-4'>
                <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={() => dispatch(prevChoiceStep(1))} />
                <DashboardButton
                    hidden
                    name='NEXT'
                    type='submit'
                    width='w-[77px]'
                    loading={props.isLoading}
                />
            </div>
        </form>
    </div>
}



export default CompanyInformation;

