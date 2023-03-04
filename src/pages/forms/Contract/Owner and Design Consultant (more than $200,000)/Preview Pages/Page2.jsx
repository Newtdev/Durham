import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../../ui";
import { DashboardButton } from "../../../Dashboard/Components";
import "./owner.css";

const OwnerDesignMore = () => {
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
                  Owner and Design Consultant (More than $200,000)
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
              <div className='px-20 pt-8 pb-4 text-black font11'>
                <div class='c86 doc-content'>
                  {/* Page 2 */}
                  <div>
                    <p class='c36'>
                      <span class='c5 c3'>
                        AGREEMENT FOR DESIGN CONSULTANT SERVICES
                      </span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c36'>
                      <span class='c5 c3'>TABLE OF CONTENTS</span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 1</p>
                      <p className='c3 col-span-4'>Definitions</p>
                      <p className='c3'>Page 03</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 2</p>
                      <p className='c3 col-span-4'>
                        Relationship of the Parties{" "}
                      </p>
                      <p className='c3'>Page 04</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 3</p>
                      <p className='c3 col-span-4'>Basic Services</p>
                      <p className='c3'>Page 06</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 4</p>
                      <p className='c3 col-span-4'>Compensation</p>
                      <p className='c3'>Page 24</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 5</p>
                      <p className='c3 col-span-4'>Period of Services</p>
                      <p className='c3'>Page 27</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 6</p>
                      <p className='c3 col-span-4'>Owner's Responsibilities</p>
                      <p className='c3'>Page 27</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 7</p>
                      <p className='c3 col-span-4'>Additional Services</p>
                      <p className='c3'>Page 28</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 8</p>
                      <p className='c3 col-span-4'>Notices</p>
                      <p className='c3'>Page 30</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 9</p>
                      <p className='c3 col-span-4'>Insurance</p>
                      <p className='c3'>Page 30</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 10</p>
                      <p className='c3 col-span-4'>Termination of Agreement</p>
                      <p className='c3'>Page 32</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 11</p>
                      <p className='c3 col-span-4'>Successors/Assignment</p>
                      <p className='c3'>Page 33</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 12</p>
                      <p className='c3 col-span-4'>
                        Ownership of Documents/Confidential
                        Information/Marketing
                      </p>
                      <p className='c3'>Page 33</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 13</p>
                      <p className='c3 col-span-4'>Additional Provisions</p>
                      <p className='c3'>Page 34</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Article 14</p>
                      <p className='c3 col-span-4'>Exhibits</p>
                      <p className='c3'>Page 37</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit A</p>
                      <p className='c3 col-span-4'>
                        Design, Construction and Equipment Budget
                      </p>
                      <p className='c3'>Page A1</p>
                    </div>
                    <p class='c2'>
                      <span class='c23 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit B</p>
                      <p className='c3 col-span-4'>Program of Requirements</p>
                      <p className='c3'>Page B1</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit C</p>
                      <p className='c3 col-span-4'>Management Plan</p>
                      <p className='c3'>Page C1</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit D</p>
                      <p className='c3 col-span-4'>Consultant Agreement</p>
                      <p className='c3'>Page D1</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit E</p>
                      <p className='c3 col-span-4'>
                        Design Consultant’s Fee Schedule
                      </p>
                      <p className='c3'>Page E1</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <div className='grid grid-cols-7'>
                      <p className='c3 col-span-2'>Exhibit F</p>
                      <p className='c3 col-span-4'>
                        Owner’s Sexual Offender Registry Check Certification
                        Form
                      </p>
                      <p className='c3'>Page F1</p>
                    </div>
                    <p class='c2'>
                      <span class='c5 c3'></span>
                    </p>
                    <p class='c28'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c36 c41'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c44 c41 c69'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c3 c23'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c23 c3'></span>
                    </p>
                    <p class='c69 c44 c41'>
                      <span class='c23 c3'></span>
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

export default OwnerDesignMore;
