import { useState } from "react";
import { ButtonWhiteBG, ChevronDown, ChevronUp } from "../../../ui"
import { DashboardButton } from "../Components";
import { AwardeeInfo, CompanyRep, ProjectInfo } from "../Overview-dashboard/OverviewComponents"
import { AccordionSelector } from "./Component";


// PROJECT OVERVIEW STEP
export const ProjectOverview = (props) => {
    return <div className=''>
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
  return  <div className=''>
  <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
    {/* Header */}
    <div className='mb-6'>
      <h3 className='font-semibold text-gray-900 text-[32px]'>
        Awardee Information
      </h3>
      <p className='text-gray-700 text-base mb-6'>
        Provide information about the new project
      </p>
      <p className='text-gray-600 font-bold text-lg mb-1'>
        Awardee Information (1)
      </p>
      <hr />
    </div>

    {/* Awardee Input 1 */}
    <div className='w-1/2'>
      <div>
        <AwardeeInfo {...props} />
      </div>
    </div>

    {/* Company Rep Input */}
    <div className='mt-7'>
      <div className='mb-4'>
        <p className='text-gray-600 font-bold text-lg mb-1'>
          Company Representative
        </p>
        <hr />
      </div>
      <div className='w-1/2'>
        <div>
          <CompanyRep {...props} />
        </div>
      </div>
    </div>

    {/* awardee Input */}
    

    {/* Company Rep Input */}
    <div className=''>
      <button
        className={`text-white text-sm font-semibold mt-8 w-[268px] hover:bg-blue-800 bg-[#3B6979] transition-all focus:outline-none text-center rounded h-8`}
        type='button'
      >
        ADD NEW REPRESENTATIVE
      </button>
    </div>
  </div>

  {/* Buttons */}
  <div className='flex gap-4 pb-28'>
    <DashboardButton
      name='NEXT'
      hidden
      type='submit'
      width='w-[168px]'
    />
    <ButtonWhiteBG width='w-[168px]' name='cancel' />
  </div>
</div>
};


export const SelectDocuments = () => {
    const documents = [
        {
            id: 0,
            name: 'Contract',
            data: [
                { id: 1, name: 'Technology Service Agreement' },
                { id: 2, name: ' Short Small Form Design Consultant Agreement' },
                { id: 3, name: 'Owner and Design Consultant (more $200,000)' },
                { id: 4, name: ' Owner and Design Consultant (less than $200,000)' },
                { id: 5, name: 'Owner and Contractor Agreement Form (more $500,000)' },
                { id: 6, name: 'Owner and Contractor Agreement Form (less than $500,000)' },
                { id: 7, name: ' LeChase Esser Contract Template' },
                { id: 8, name: 'ESSER Contract Template' },
                { id: 9, name: 'DPS Short Form Engineer - Engineering Contract' },
                { id: 10, name: 'Attachment A Lunsford Act Form' },
            ]
        },
        {
            id: 1,
            name: 'Procurement',
            data: [
                { id: 1, name: ' E-589CI Affidavit of Capital Improvement' },
                { id: 2, name: 'DPS Formal General Conditions - 1-17-20' },
                { id: 3, name: ' 00 11 13 - Advertisement for Bid Template' },
                { id: 4, name: '3 bids' },
                { id: 5, name: ' Bid Manual' },
                { id: 7, name: 'Determination of Apparent Low Bidder - Contractor' },
                { id: 8, name: 'Precise Checklist' },
                { id: 9, name: 'Contract Preparation Checklist' },
            ]
        },
        
        {
            id: 2,
            name: 'Notice',
            data: [
                { id: 1, name: 'Notice of Reward - Consultant Form' },
                { id: 2, name: 'Notice of Reward - Contractor Form' },
                { id: 3, name: 'Notice of Intent to Award - Design Services [Less than $200k]' },
                { id: 4, name: 'Notice of Intent to Award - Design Services [More than $200k BOARD APPROVAL]' },
                { id: 5, name: 'Notice to Proceed - Contractor Form' },
            ]
        },
        { id: 3, name: 'Budget', data: [] },
        { id: 4, name: 'Project Closeout', data: [] },
        { id: 5,name: 'MWBE Forms', data: [] },
        { id: 6,name: 'Notice Letter', data: [] }
    ];


    const AccordionComponent = () => {
        const [activeIndex, setActiveIndex] = useState(null);
        
        return <>
            {documents.map(({ id, name, data }, idx) => {
                 const active = activeIndex === idx ? "h-[40rem] ": "h-16 overflow-y-hidden ";
                
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
                         <AccordionSelector data={data} objName={name}  />
                    </div>

                </div>
            })}
          
        </>
    };



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
                    <AccordionComponent/>
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 pb-28'>
            <ButtonWhiteBG name='go back' width='w-[168px]' />
            <button
                type='button'
                className='uppercase bg-gray-400 text-white font-semibold px-4 h-10 border border-gray-400 rounded hover:bg-blue-800 w-[168px]'
            >
                next
            </button>
        </div>
    </div>
};