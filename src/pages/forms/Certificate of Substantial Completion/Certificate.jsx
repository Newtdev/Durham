import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";

const Certificate = () => {
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
                <h3 className='text-lg font-bold text-gray-900'>
                  Certificate of Substantial Completion
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
              <div className='bg-[#D9D9D9] px-12 pt-8 pb-4 text-black'>
                <div>
                  <div className='flex items-center mb-10 justify-center'>
                    <div>logo HERE</div>
                    <h1 className='font-bold text-xl ml-8'>
                      Certficate of Substantial Completion
                    </h1>
                  </div>

                  <table className='w-full border border-black text-left mb-5'>
                    <thead className='h-[3rem]'>
                      <tr>
                        <th className='border border-black pl-[1rem]'>
                          PROJECT
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          PROJECT INFORMATION
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          DISTRIBUTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-black pl-[1rem]'>F1</td>
                        <td className='border border-black pl-[1rem]'>
                          Project No: F3, g8.1
                        </td>
                        <td className='border border-black pl-[1rem]'>Owner</td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'> </td>
                        <td className='border border-black pl-[1rem]'>
                          Contract for: F4 Construction
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          Architect
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'>F2</td>
                        <td className='border border-black pl-[1rem]'>
                          Contract Date: F5
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          Contractor
                        </td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'></td>
                        <td className='border border-black pl-[1rem]'></td>
                        <td className='border border-black pl-[1rem]'>F6</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className='w-full border border-black text-left mb-6'>
                    <thead>
                      <tr>
                        <th className='border border-black pl-[1rem]'>
                          TO OWNER:
                        </th>
                        <th className='border border-black pl-[1rem]'>
                          TO CONTRACTOR:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-black pl-[1rem]'>F7</td>
                        <td className='border border-black pl-[1rem]'>F9</td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'>F8</td>
                        <td className='border border-black pl-[1rem]'>F10</td>
                      </tr>
                      <tr>
                        <td className='border border-black pl-[1rem]'>
                          City, State 2XXXX
                        </td>
                        <td className='border border-black pl-[1rem]'>
                          City, State 2XXXX
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <p className='font-bold mb-6'>
                      PROJECT OR PORTION OF THE PROJECT DETERMINED SUBSTANTIALLY
                      COMPLETE:
                    </p>

                    <p className='mb-6'>
                      List project name here the Work{" "}
                      <span className='bg-yellow-500'>F11</span> determined
                      Substantially Complete.
                    </p>

                    <p className='mb-6'>
                      The Work performed under this contract has been reviewed
                      and found to be Substantially Complete. Substantial
                      Completion is the stage in the progress of the Work when
                      the Work (or designated portion thereof) is sufficiently
                      complete in accordance with the Contract Documents so that
                      the Owner can occupy or utilize the Work for its intended
                      use. The date of Substantial Completion of the Project or
                      portion designated above is the date identified below.
                      This date is also the Date of Commencement of all
                      applicable warranties required by the Contract Documents:
                    </p>

                    <p className='font-bold mb-6'>
                      DATE OF SUBSTANTIAL COMPLETION:{" "}
                      <span className='bg-yellow-500 ml-10'>F12</span>
                    </p>

                    <p className='mb-14'>
                      A punch list of items to be corrected is attached hereto.
                      The failure to include items on the punch list does not
                      alter the Contractor’s responsibility to complete all Work
                      in accordance with the Contract Documents. Unless
                      otherwise agreed to in writing, the date of commencement
                      of warranties for items on the punch list will be the date
                      of the Consultants Certification of the Final Payment.
                    </p>

                    <div className='mb-6'>
                      <p className='mb-0'>
                        _____________<span className='bg-yellow-500'>F13</span>
                        _______________________________________________________________________________________________________
                      </p>
                      <span>CONSULTANT</span>
                      <span className='ml-[20rem]'>
                        BY: <span className='bg-yellow-500'>F14</span>
                      </span>
                      <span className='ml-[20rem]'>DATE</span>
                    </div>

                    <p className='mb-10'>
                      The Contractor will complete all work on the attached
                      punch list within{" "}
                      <span className='bg-yellow-500'>F15</span> days from the
                      date of Substantial Completion.
                    </p>

                    <p className='mb-12 font-bold'>
                      COST ESTIMATE OF REMAINING WORK:
                      <span className='bg-yellow-500 ml-10'>F16</span>
                    </p>

                    <div className='mb-6'>
                      <p className='mb-0'>
                        _____________<span className='bg-yellow-500'>F17</span>
                        _______________________________________________________________________________________________________
                      </p>
                      <span>CONTRACTOR</span>
                      <span className='ml-[20rem]'>
                        BY: <span className='bg-yellow-500'>F18</span>
                      </span>
                      <span className='ml-[20rem]'>DATE</span>
                    </div>

                    <p className='mb-12'>
                      The Owner accepts the Work or designated portion as
                      Substantially Complete and will assume full possession at
                      12:01 AM on the Substantial Completion date identified
                      above.
                    </p>

                    <div className='mb-6'>
                      <p className='mb-0'>
                        _____________<span className='bg-yellow-500'>F19</span>
                        _______________________________________________________________________________________
                        <span className='bg-yellow-500'>F21</span>
                        _____________
                      </p>
                      <span>OWNER</span>
                      <span className='ml-[23rem]'>
                        BY: <span className='bg-yellow-500'>F20</span>
                      </span>
                      <span className='ml-[20rem]'>DATE</span>
                    </div>

                    <p className='mb-6'>
                      The responsibility of the Owner and Contractor for
                      security, maintenance, heat, utilities, damage to the Work
                      and insurance shall be as follows:
                    </p>

                    <p>
                      <span className='bg-yellow-500'>F22</span>
                    </p>
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

export default Certificate;
