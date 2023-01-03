import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, ChevronDown, ChevronUp } from "../../../ui"
import { DashboardButton } from "../Components";
import { AccordionSelector } from "./Component";
import { prevForm } from "./reducer";

const AccordionComponent = ({ getData, documents }) => { 
    console.log(documents)
    const [activeIndex, setActiveIndex] = useState(null);

    
    
   
    return <>
        {documents.map((document, idx) => {
            const { id, name, data } = document;
            
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
    const { getData, documents,response, handleSubmit } = props;    
    const dispatch = useDispatch();

    return <form className='' onSubmit={handleSubmit}>
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
                    <AccordionComponent getData={getData} documents={documents}  />
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 pb-28'>
            <ButtonWhiteBG name='go back' width='w-[168px]' onClick={()=> dispatch(prevForm())} />
            <DashboardButton
          name='NEXT'
          hidden
          type='submit'
          width='w-[168px]'
          loading={response.isLoading} 
         />
           
        </div>
    </form>
};