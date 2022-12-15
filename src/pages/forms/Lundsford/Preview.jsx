import { useState, useRef } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton, Close } from "../../Dashboard/Components";
import { PDFExport } from "@progress/kendo-react-pdf";
import DownLoadForm from "./Download";
import { useSelector } from "react-redux";
import { project_details } from "../../Dashboard/add-project/projectSlice";



const PreviewForm = ({ prevPage, value, component,name }) => {
  
  const [showModal, setShowModal] = useState(false);

  const LundformFilled = ({ value, component, name }) => {
    const projectDetails = useSelector(project_details);

    return(
    <PDFExport ref={component}
    paperSize="auto"
    margin={10}
    fileName={'Lunford form'}
    author="KendoReact Team">

    <div className='bg-[#D9D9D9] px-12 pt-8 pb-4 text-black'>
      <p className='text-right mb-4'>Attachment A</p>
      <div className='mb-6 text-center'>
        <h2 className='font-bold text-xl'>Lunsford Act</h2>
        <h3 className='font-bold text-lg'>
          Sexual Offender Registry Check Certification Form
        </h3>
      </div>
      <div>
        <p>DPS Project Name: {projectDetails?.project_name || ''} </p>
        <p>DPS Project Number: {projectDetails?.project_number || ''} </p>
        <p className='mt-3'>
          Check the appropriate box to indicate the type of check:
        </p>
    <p className="mt-2">□ {value}</p>
       
      </div>
      <div className='mt-3'>
        <p className='text-justify'>
          I, {projectDetails.awardeeInfo[0].company_representative_name} , {projectDetails.awardeeInfo[0].company_representative_title}
        </p>
        <p className='mt-3 text-justify'>
          of {projectDetails.awardeeInfo[0].awardee} hereby certify that I have conducted sexual
          offender registry checks required under this Agreement for
          all employees, agents, ownership personnel, or contractors
          (“contractual personnel”) who will engage in any service on
          or delivery of goods to school system property, except for
          individuals who are solely delivering or picking up
          equipment, materials, or supplies at: (1) the administrative
          office or loading dock of a school; (2) non-school sites;
          (3) schools closed for renovation; or (4) school
          construction sites., including the North Carolina Sex
          Offender and Public Protection Registration Program, the
          North Carolina Sexually Violent Predator Registration
          Program, and the National Sex Offender Registry. I further
          certify that I will not assign any individual to deliver
          goods or perform services under this Agreement if said
          individual appears on any of the sex offender registries. I
          agree to maintain all records and documents associated with
          these registry checks, and that I will provide such records
          and documents to the school system upon request. I
          specifically acknowledge that the school system retains the
          right to audit these records to ensure compliance with this
          section at any time in the school system’s sole discretion.
          I acknowledge that I am required to perform these checks and
          provide this certification form before any work is performed
          under the Agreement (initial check), any time additional
          contractual personnel may perform work under the Agreement
          (supplemental check), and at each anniversary date of the
          Agreement (annual check).
        </p>
      </div>

      <div className='mt-4 mb-4 grid grid-cols-2 gap-16'>
        <div className='overflow-hidden'>
          <p className='font-bold mb-2'>
            Contractual Personnel Names
          </p>
          <div className='flex gap-5'>
            <p>1.</p>
            <p>
              _____________________________
            </p>
          </div>
          <div className='flex gap-5 mt-3'>
            <p>2.</p>
            <p>
              _____________________________
            </p>
          </div>
          <div className='flex gap-5 mt-3'>
            <p>3.</p>
            <p>
            _____________________________
            </p>
          </div>
          <div className='flex gap-5 mt-3'>
            <p>4.</p>
            <p>
            _____________________________
            </p>
          </div>
          <p className='ml-3'>
            (Attach additional page(s) if needed)
          </p>
        </div>
        <div>
          <p className='font-bold'>Job Title</p>
          <div className='w-full h-[15px] bg-black mt-5'></div>
          <div className='w-full h-[15px] bg-black mt-5'></div>
          <div className='w-full h-[20px] bg-black mt-5'></div>
          <div className='w-full h-[7.5px] bg-black mt-5'></div>
        </div>
      </div>

      <p>
        I attest that the forgoing information is true and accurate to
        the best of my knowledge.
      </p>

      <div className='mt-6 mb-4 pr-6'>
        <div className='flex gap-8 '>
            <p className="mr-4">{projectDetails.awardeeInfo[0].company_representative_name}</p>
            
          <p>
            _________________________________(signature)
          </p>
        </div>
        <div className='mt-10 flex gap-8'>
          <p className="mr-4">{projectDetails.awardeeInfo[0].company_representative_title}</p>
          <p>
            ___________________________________________(date)
          </p>
        </div>
      </div>
    </div>
     </PDFExport>
    
    )
  }

  return (
    <>
    <div>
        {/* Modal content */}
        <DownLoadForm component={component} name={name} show={showModal? 'block': 'hidden' } />
      <div className={` ${showModal ? 'hidden':' relative mx-auto w-[60rem] h-[46rem] bg-white rounded-lg shadow mt-4'}`}>
        <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
          <div className='ml-6'>
            <h3 className='text-lg font-bold text-gray-900'>
              Attachment A Lunsford Act Form
            </h3>
            <p className='text-base text-gray-700'>Preview Document</p>
          </div>
          <button
            type='button'
            className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
            data-modal-toggle='small-modal'
          >
            <Close />
          </button>
        </div>

        {/* Forms */}
        <div className=' mx-auto mt-6  w-[95%] h-[35rem] overflow-y-auto'>
          <LundformFilled value={value} component={component} name={name} />

        </div>

        {/* Buttons exportPDFWithComponent */}
        <div className='flex justify-end items-center h-20 gap-4 py-4 pr-6'>
          <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={prevPage} />
          <DashboardButton
            hidden
            name='CREATE DOCUMENT'
            type='button'
            width='w-[198px]'
            onClick={()=> setShowModal(true)}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default PreviewForm;
