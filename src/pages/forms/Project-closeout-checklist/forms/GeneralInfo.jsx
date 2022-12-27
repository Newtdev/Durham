import { useDispatch } from "react-redux"
import { ButtonWhiteBG } from "../../../../ui"
import { Close, DashboardButton } from "../../../Dashboard/Components"
import SelectDate from "../../components"
import { FormInputContainer } from "../../Notice-of-intent-consultant/Forms"
import { closeModal } from "../../reducer"

const GeneralInformation = () => {
    const dispatch = useDispatch();

    const completionDate = {
        
    }

    const SignDate = {
        
    }
   return <div>
        <div
            className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'
            onClick={(e) => e.stopPropagation()}
        >
            {/* Modal content */}
            
            <form className='relative w-[600px] bg-white rounded-lg shadow py-4'>
                <div className='flex justify-between items-baseline mx-6'>
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>
                        Project Closeout Checklist
                        </h3>
                       <p className='text-base text-gray-700'>
                       General Information
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
                        
                        <FormInputContainer name='Enter the substantial completion date of the project'>

                            <SelectDate  />
                            {/* {props.errors.creationDate && props.touched.creationDate && <Error message={props.errors.creationDate}/>} */}
                        </FormInputContainer>                        
                      
                       
                        <FormInputContainer name='When does the project manager sign this document?'>
                            <SelectDate  />
                            {/* {props.errors.deliveryDate && props.touched.deliveryDate && <Error message={props.errors.deliveryDate}/>} */}
                        </FormInputContainer>
                    
           
                    </div>
                    {/* {error && touched && <Error message={error} />} */}
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-8 pr-4'>
                    <ButtonWhiteBG width='w-[100px]' name='Cancel' onClick={()=> dispatch(closeModal()) } />
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


export default GeneralInformation;