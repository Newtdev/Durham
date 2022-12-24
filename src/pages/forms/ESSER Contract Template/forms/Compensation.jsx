
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, Error } from "../../../../ui";
import { Close, DashboardButton } from "../../../Dashboard/Components";
import { prevChoiceStep } from "../../Advertisement-for-bid-template/reducer";
import SelectDate from "../../components";
import { FormInputContainer } from "../../Notice-to-Proceed/Forms";



const Compensation = (props) => {
    const dispatch = useDispatch();

    const calculatePayment = {
        value: props.values.calculatePayment,
        onChange: props.handleChange,
        name: 'calculatePayment',
        placeholder: 'E.G., HOUR, DAY, MILE, SQUARE FOOT, ETC.',
        type: 'text',
        
    }
    const allowablePayment = {
        value: props.values.allowablePayment,
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return;
            } else {
                // return e.target.value
                props.setFieldValue('allowablePayment',e.target.value)
         }
        },
        name: 'allowablePayment',
        placeholder: 'NOT-TO-EXCEED Amount',
        type: 'text',
       
    }
    const reimburseObligation = {
        value: props.values.reimburseObligation,
        onChange: props.handleChange,
        name: 'reimburseObligation',
        type: 'text',
        placeholder: 'Obligations'
        
    }
    const providerCompensation = {
        value: props.values.providerCompensation,
        onChange: (e) => {
            if (isNaN(e.target.value)) {
                return;
            } else {
                // return e.target.value
                props.setFieldValue('providerCompensation',e.target.value)
         }
        },
        name: 'providerCompensation',
        type: 'text',
        placeholder: 'Amount'
    }
    const providerInvoice = {
        value: props.values.providerInvoice,
        onChange: props.handleChange,
        name: 'providerInvoice',
        type: 'text',
        placeholder: 'Name'
    }
   
    const signedDocument = {
        ...props,
        value: props.values.signedDocument,
        onChange: props.handleChange,
        name: 'signedDocument',
        type: 'text',
        placeholder: 'Select Date'
    }
   
    return <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-10'>
            
        <form className='relative w-[600px] bg-white rounded-lg shadow py-4' onSubmit={props.handleSubmit}>
            <div className='flex justify-between items-baseline mx-6'>
                <div>
                    <h3 className='text-lg font-bold text-gray-900'>
                    ESSER Contract Template
                    </h3>
                    <p className='text-base text-gray-700'>
                    Compensation
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
                <div className='bg-[#2F5461] h-2.5 w-[50%]'>
                
                </div>
            </div>
            <div className="px-4">
            

                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        Enter the relevant time period or other metrics to calculate payments for compensating the provider.
                    </label>
                    <input
                        {...calculatePayment}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.calculatePayment && props.touched.calculatePayment && <Error message={props.errors.calculatePayment} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                      Enter the maximum allowable total payments to the provider.
                    </label>
                    <input
                        {...allowablePayment}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.allowablePayment && props.touched.allowablePayment && <Error message={props.errors.allowablePayment} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                       Specify any additional obligations of the school system, including reimbursement of expenses.
                    </label>
                    <input
                        {...reimburseObligation}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.reimburseObligation && props.touched.reimburseObligation && <Error message={props.errors.reimburseObligation} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                       What is the provider's compensation amount?
                    </label>
                    <input
                        {...providerCompensation}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.providerCompensation && props.touched.providerCompensation && <Error message={props.errors.providerCompensation} />}
            
                </div>
                <div className='flex flex-col mb-5'>
                    <label
                        for='default-radio-1'
                        className='text-base text-gray-900 mb-1'
                    >
                        To whom should the provider send the invoices?
                    </label>
                    <input
                        {...providerInvoice}
                        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm hover:outline-[#3B6979] hover:border-[#3B6979] w-full p-2 flex items-center "
                        />
                        {props.errors.providerInvoice && props.touched.providerInvoice && <Error message={props.errors.providerInvoice} />}
            
                </div>

                <FormInputContainer name="When does the Chief Financial Officer sign the document?">
                    <SelectDate {...signedDocument} />
                    {props.errors.signedDocument && props.touched.signedDocument && <Error message={props.errors.signedDocument} />}
                </FormInputContainer>
                
            
                          
            </div>
            
                   

            {/* Buttons */}
            <div className='flex justify-end gap-8 pr-4'>
                <ButtonWhiteBG width='w-[100px]' name='cancel' onClick={()=> dispatch(prevChoiceStep())} />
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



export default Compensation;

