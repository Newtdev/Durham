import { FieldArray } from "formik";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG } from "../../../../ui";
import { Close, DashboardButton } from "../../Components";
import { AwardeeInfo, CompanyRep } from "../../Overview-dashboard/OverviewComponents";
import { prevForm } from "../reducer";

const AwardeeInformation = (props) => {
const dispatch = useDispatch()
    return <form onSubmit={props.handleSubmit}>
      <div className='bg-white border max-w-[522px] border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
        {/* Header */}
      
        
  
        {/* awardee Input */}
        <FieldArray name='project_vendors'
          render={(arrayHelpers) => (
            <>
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 text-[32px]'>
                  Awardee Information
                </h3>
                <p className='text-gray-700 text-base mb-6'>
                  Provide information about the new project
                </p>
              </div>
              {props?.values?.project_vendors.map((cur, index) => (
                <Fragment key={index}>
                  
                  <div className="my-6 flex items-center justify-between w-full bg-[#89A5AF] p-2">
                    <p className='text-gray-900 font-bold text-lg mb-1'>
                      Awardee Information ({index + 1})
                    </p>
                    <div className="w-1/2"></div>
                    <button className={`${index === 0 ? 'hidden' : 'block'}`} onClick={() => arrayHelpers.pop({
                      role: "",
                      type: '',
                      // awardee: "",
                      company_name: "",
                      street: "",
                      state: '',
                      city: '',
                      zip_code: '',
                      president: "",
                      secretary: "",
                      first_name: "",
                      last_name: "",
                      title: "",
                    })}>
                      <Close />
                    </button >
                    <hr />
  
                  </div>
           
                  <div className=''>
                    <div>
                      <AwardeeInfo data={{ index, ...props }} />
                    </div>
                  </div>
           
                  <div className='mt-7'>
                    <div className='mb-4'>
                      <p className='text-gray-600 font-bold text-lg mb-1'>
                        Company Representative
                      </p>
                      <hr />
                    </div>
                    <div className=''>
                      <div>
                        <CompanyRep data={{ index, ...props }} />
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}


              <div className=''>
                <button
                  onClick={() => arrayHelpers.push({
                    role: "",
                    type: '',
                    // awardee: "",
                    company_name: "",
                    street: "",
                    state: '',
                    city: '',
                    zip_code: '',
                    president: "",
                    secretary: "",
                    first_name: "",
                    last_name: "",
                    title: "",
                  })}
                  className={`text-white text-sm font-semibold mt-8 px-6 hover:bg-blue-800 bg-[#3B6979] transition-all focus:outline-none text-center rounded h-8`}
                  type='button'
                >
                  ADD NEW AWARDEE
                </button>
              </div>
            </>
          )}
        >
        </FieldArray>
  
        {/* Company Rep Input */}
      </div>
  
      {/* Buttons */}
      <div className='flex gap-4 pb-28'>
        <DashboardButton
          name='NEXT'
          hidden
          type='submit'
          width='w-[168px]'
          loading={props.isLoading}
        />
        
        <ButtonWhiteBG width='w-[168px]' name='cancel' onClick={() => dispatch(prevForm(0))} />
      </div>
    </form>
}
  

export default AwardeeInformation