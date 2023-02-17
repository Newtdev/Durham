import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { Close, DashboardButton } from "../../Dashboard/Components";
import DownLoadForm from "../Lundsford/Download";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openDownload } from "../reducer";
import { prevStep, stepDefault } from "./reducer";

const Preview = () => {
  const show = useSelector(openDownload);
  const dispatch = useDispatch()
  const downloadComponent = useRef();
  const props = {
    component: downloadComponent,
    name: 'Owner and Contract Management (CM & CMAR) Agreement',
    show: show ? 'block' : 'hidden',
    stepDefault: stepDefault
  }

  return (
    <div>
      <DownLoadForm {...props} />

      <div>
        {/* Modal content */}
        <div className={`${show ? "hidden" : "block"} relative w-[80%] max-w-[60rem] mx-auto bg-white rounded-lg shadow mt-14`}>
          {/* Header */}
          <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
            <div className='ml-6'>
              <h3 className='text-lg font-bold text-gray-900'>
                Contract Preparation Checklist
              </h3>
              <p className='text-base text-gray-700'>Preview Document</p>
            </div>
            <button
              type='button'
              className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mr-6'
              data-modal-toggle='small-modal'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <div className='overflow-y-scroll mx-auto mt-6 mb-10 w-[95%]  h-[380px]'>
            <div className='px-12 pt-8 pb-4 text-black'>
              <div>
                <h1 className='text-lg mb-10'>
                  Contract Preparation Checklist
                </h1>
                <div className='mb-6'>
                  <p>
                    <span className='font-bold'>Project Name:</span>{" "}
                    <span className='bg-yellow-500'>F1</span>
                  </p>
                  <p>
                    <span className='font-bold'>Contact Type:</span>{" "}
                    <span className='bg-yellow-500'>F2</span>
                  </p>
                  <p>
                    <span className='font-bold'>Project Number:</span>{" "}
                    <span className='bg-yellow-500'>F3</span>
                  </p>
                </div>

                <div className='mb-8'>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Most recent template used</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>

                    <p>Bid documents for ALL bidders (1 copy)</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Project number assigned by / confirmed with Business
                      Manager
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Project title=County title. If "Renovations", specify
                      type of consulting
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Exhibit 1: Scope of Services (Consultant under $90k)
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Exhibit 2: Hourly Rate Schedule (Consultant under $90k,
                      locally funded)
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Exhibit A: DPS Management Plan (Consultant over $90k)
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Exhibit B: Hourly Rate Schedule (Consultant over $90k,
                      locally funded)
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Exhibit C: Closeout Documentation (Consultant over $90K)
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Attachment A: Lunsford Act</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Performance Bond (contract &gt; $300k)</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Labor and Materials Bond (contract &gt; $300k)</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>
                      Certificate of Liability Insurance with project name in
                      "Description"
                    </p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>If vendor is new to DPS, W-9 form</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Three originals of all documents</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Single-sided</p>
                  </div>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='h-8 w-8 border-2 border-red-500 flex justify-center items-center'>
                      <input
                        checked
                        type='checkbox'
                        value=''
                        class='h-full w-full bg-gray-100'
                      />
                    </div>
                    <p>Pages in order, no staples</p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div>
                    <p>
                      _______________________________________________________________________________
                    </p>
                    <p className='text-sm font-bold'>Project Manager</p>
                  </div>
                  <div>
                    <p>
                      <span className='bg-yellow-500'>F21</span>
                    </p>
                    <p className='text-sm font-bold'>Date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex justify-end gap-4 pr-6 pb-4'>
            <ButtonWhiteBG width='w-[171px]' name='Edit document' onClick={() => dispatch(prevStep(4))} />
            <DashboardButton
              hidden
              name='CREATE DOCUMENT'
              type='submit'
              width='w-[198px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

