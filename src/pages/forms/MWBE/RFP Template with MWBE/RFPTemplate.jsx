import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";

const RFPTemplate = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <ModalOverlay show={showModal} close={() => setShowModal(true)}>
        <div>
          {/* Modal content */}
          <div className='relative w-[80%] mx-auto bg-white rounded-lg shadow mt-14'>
            {/* Header */}
            <div className='flex justify-between items-baseline border-b border-b-gray-200 py-3'>
              <div className='ml-6'>
                <h3 className='font-bold text-gray-900'>
                  RFP Template with MWBE
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
              <div className='px-32 pt-8 pb-4 text-black'>
                <div>
                  {/* Pages 1 - 5 */}
                  <div>
                    <p className='mb-4 text-[11px]'>
                      Bidder: <span className='bg-yellow-500'>F1</span>
                    </p>

                    <p className='text-center font-bold mb-6 text-base'>
                      Durham Public Schools
                    </p>

                    <div className='grid grid-cols-2 border border-black border-collapse'>
                      <div className='border-b border-b-black pt-4 text-center text-sm font-bold'>
                        <p className='mb-5'>Durham Public Schools</p>
                        <p className='mb-3'>
                          <span className='bg-yellow-500'>F2</span>
                        </p>
                        <p className='mb-1'>
                          <span className='bg-yellow-500'>F3</span>
                        </p>
                        <p className='mb-1'>511 Cleveland Street</p>
                        <p className='mb-1'>Durham, NC 27701</p>
                      </div>

                      <div className='border-b border-l border-black p-1 font-bold text-xs overflow-x-hidden'>
                        <p className='mb-10'>REQUEST FOR PROPOSALS NO:</p>
                        <p className='mb-6 text-center'>
                          <span className='bg-yellow-500'>F4</span>
                        </p>
                        <div className='text-center'>
                          <p className='mb-0'>
                            ____________________________________________________
                          </p>
                          <p>
                            Proposals Due:{" "}
                            <span className='bg-yellow-500'>F5</span>{" "}
                            <span className='bg-yellow-500'>F6</span>
                          </p>
                        </div>
                      </div>

                      <div className='p-1 text-[10px]'>
                        <p className='mb-4'>
                          Direct all inquiries concerning this RFP to:
                        </p>
                        <p className='mb-4'>Durham Public Schools</p>
                        <p className='font-bold mb-4'>
                          Attn: <span className='bg-yellow-500'>F8</span>
                        </p>
                        <p className='font-bold'>
                          All questions must be submitted{" "}
                          <span className='underline'>via email</span> no later{" "}
                          <span className='text-xs'>
                            than <span className='bg-yellow-500'>F9</span> at{" "}
                            <span className='bg-yellow-500'>10</span>
                          </span>
                        </p>
                      </div>

                      <div className='text-[10px] p-1 font-bold border-l border-black'>
                        Contract Type: <span className='bg-yellow-500'>F7</span>{" "}
                        using various funds; when using Federal Funds Durham
                        Public Schools will follow all Federal guidelines.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4 pr-6 pb-4'>
              <ButtonWhiteBG width='w-[171px]' name='Edit document' />
              <DashboardButton
                hidden
                name='CREATE DOCUMENT'
                type='submit'
                width='w-[198px]'
              />
            </div>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
};

export default RFPTemplate;
