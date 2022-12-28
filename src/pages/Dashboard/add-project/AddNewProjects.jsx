import { Fragment, useState } from "react";
import { FieldArray   } from "formik";
import { ButtonWhiteBG, ChevronDown, ChevronUp } from "../../../ui"
import { DashboardButton } from "../Components";
import { AwardeeInfo, CompanyRep, ProjectInfo } from "../Overview-dashboard/OverviewComponents"
import { AccordionSelector } from "./Component";
import { documents } from '../../../lib/data'



// PROJECT OVERVIEW STEP
export const ProjectOverview = (props) => {
  // API REQUEST TO THE PRODUCT MANAGER


 
    return <div>
        <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
            {/* Header */}
            <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 text-[32px]'>
                    Projects Overview
                </h3>
                <p className='text-gray-700 text-base mb-6'>
                    Provide information about the new project
                </p>
                <p className='text-gray-600 font-bold text-lg mb-1'>
                    Project Information
                </p>
                <hr />
            </div>

            {/* Project Input */}
            <div className='w-1/2'>
                <div>
                    <ProjectInfo {...props} />
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 -mt-2 items-center'>
            <DashboardButton
                name='NEXT'
                hidden
                type='submit'
                width='w-[168px]'
                onClick={()=> props.nextSteps}
            />
            <ButtonWhiteBG width='w-[168px]' name='Cancel' />
        </div>
    </div>
};



export const AwardeeInformation = (props) => {
  return <div className=''>
    <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
      {/* Header */}
    
      

      {/* awardee Input */}
      <FieldArray name='awardeeInfo'
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
            {props.values.awardeeInfo.map((cur, index) => (
              <Fragment key={index}>
                
                <div className="my-6">
                  <p className='text-gray-600 font-bold text-lg mb-1'>
                    Awardee Information ({index + 1})
                  </p>
                  <hr />

                </div>
         
                <div className='w-1/2'>
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
                  <div className='w-1/2'>
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
                  awardee: "",
                  design_consultant: "",
                  consultant_name: "",
                  consultant_address: "",
                  corporate_president: "",
                  corporate_secretary: "",
                  company_representative_name: "",
                  company_representative_title: ""
                })}
                className={`text-white text-sm font-semibold mt-8 w-[268px] hover:bg-blue-800 bg-[#3B6979] transition-all focus:outline-none text-center rounded h-8`}
                type='button'
              >
                ADD NEW REPRESENTATIVE
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
      />
      <ButtonWhiteBG width='w-[168px]' name='cancel' onClick={props.prevStep} />
    </div>
  </div>
}; 


const AccordionComponent = ({getData}) => {

    // const [selected, setSelected] = useState(state);
    
    const [activeIndex, setActiveIndex] = useState(null);

    
    
   
    return <>
        {documents.map(({ id, name, data }, idx) => {
            
             const active = activeIndex === idx ? "h-full": "h-16 overflow-y-hidden ";
            
            return <div className={`${active} transition-all ease-linear duration-75 overflow-y-hidden`} key={id}>
                <h2>
                    <button
                        onClick={() => {
                            setActiveIndex(id)  
                        }}

                        type="button"
                        className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg"
                       
                    >
                        <span>{name}</span>
                        {/* Down Arrow */}
                        {activeIndex !== idx && <ChevronDown />}
                        {activeIndex === idx && <ChevronUp close={() => setActiveIndex(null)} />}
                    </button>
                </h2>
                <div
                   
                >
                     <AccordionSelector data={data} objName={name} getData={(e)=>getData(e)}  />
                </div>

            </div>
        })}
      
    </>
};



export const SelectDocuments = (props) => {
    const { handleSubmit, prevStep, getData } = props;
    
    


    return <div className=''>
        <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
            {/* Header */}
            <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 text-[32px]'>
                    Select Documents
                </h3>
                <p className='text-gray-700 text-base mb-4'>
                    Select documents needed to complete this project
                </p>
                <div className='flex items-center gap-4 mb-4'>
                    <button className='border-none text-[#623F04] text-base'>
                        Select Template
                    </button>
                    <button className='underline underline-offset-8 text-[#3B6979] text-base'>
                        Load Template
                    </button>
                </div>
            </div>

            {/* Document Accordions */}
            <div className='w-full rounded-lg border border-gray-100'>
                <div id='accordion-collapse' data-accordion='collapse'>
                    <AccordionComponent getData={getData}  />
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 pb-28'>
            <ButtonWhiteBG name='go back' width='w-[168px]' onClick={prevStep} />
            <button
                onClick={handleSubmit}
                type='button'
                className='uppercase bg-gray-400 text-white font-semibold px-4 h-10 border border-gray-400 rounded hover:bg-blue-800 w-[168px]'
            >
                next
            </button>
        </div>
    </div>
};