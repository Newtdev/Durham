import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../../../ui";
import { useState } from "react";
import { ButtonWhiteBG } from "../../../ui";
import { DashboardButton } from "../../Dashboard/Components";

const ProjectCloseout = () => {
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
                  Project Closeout Checklist
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
                  <div className='mb-4'>logo HERE</div>
                  <h1 className='font-bold underline underline-offset-2 text-center mb-6'>
                    PROJECT CLOSE-OUT DOCUMENTATION CHECKLIST
                  </h1>
                  <div className='mb-4'>
                    <div className='flex mb-6'>
                      <div>
                        <p>
                          Project:_________________________
                          <span className='bg-yellow-500'>F1</span>
                          _______________
                        </p>
                      </div>
                      <div className='ml-14'>
                        <p>
                          Project No:_________
                          <span className='bg-yellow-500'>F2</span>
                          ________________
                        </p>
                      </div>
                    </div>

                    <div className='mb-6'>
                      <p>
                        School:_________________________
                        <span className='bg-yellow-500'>F3</span>
                        _______________
                      </p>
                    </div>

                    <div className='flex mb-6'>
                      <div>
                        <p>
                          Contractor:__________________
                          <span className='bg-yellow-500'>F1</span>
                          ___________________
                        </p>
                      </div>
                      <div className='ml-[49px]'>
                        <p>
                          Substantial Completion Date:________________
                          <span className='bg-yellow-500'>F5</span>
                          ______________
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='mb-4'>
                    NOTE:{" "}
                    <span className='text-sm text-justify'>
                      When all of the following documents have been completed
                      and received, this checklist should be completed. Copies
                      of documents should accompany the final application for
                      payment as noted below by asterisks. The original
                      checklist and original documents should be filed in the
                      project’s close-out file when completed.
                    </span>
                  </p>

                  {/* Lists */}
                  {/* <div className='mb-8'>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F7</span>__ 1.*
                      </p>
                      <p className='text-justify ml-8'>
                        Fully executed Certificate of Substantial Completion
                        with attached punch list(s).
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F8</span>__ 2.*
                      </p>
                      <p className='text-justify ml-8'>
                        Fully executed Final Change Order (i.e., for allowances,
                        deductions for work done by others, etc.)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F9</span>__ 3.
                      </p>
                      <p className='text-justify ml-8'>
                        Final Approved Application for Payment
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F10</span>__ 4.**
                      </p>
                      <p className='text-justify ml-8'>
                        Consent of Surety to Final Payment
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F11</span>__ 5.**
                      </p>
                      <p className='text-justify ml-8'>
                        Contractor’s Affidavit of Release of Liens (properly
                        signed, notarized, etc, with no exceptions)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F12</span>__ 6.**
                      </p>
                      <p className='text-justify ml-8'>
                        Contractor’s Affidavit of Payment of Debts and Claims
                        (properly signed, notarized, etc., with no exceptions)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F13</span>__ 7.**
                      </p>
                      <p className='text-justify ml-8'>
                        Properly executed release of liens by subcontractors
                        and/or vendors (if applicable for those who have had
                        problems with payments, etc. per General Conditions
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F14</span>__ 8.**
                      </p>
                      <p className='text-justify ml-8'>
                        Certificate of Occupancy from proper municipality
                        (Durham County Inspections / Durham FM)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F15</span>__ 9.**
                      </p>
                      <p className='text-justify ml-8'>
                        Contractor’s One-Year Warranty (notarized)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F16</span>__ 10.
                      </p>
                      <p className='text-justify ml-8'>
                        Warranty summary sheet and original warranties for
                        specific items (roofs, motors, etc.)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F17</span>__ 11.**
                      </p>
                      <p className='text-justify ml-8'>
                        Contractor’s certification letter per General Conditions
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F18</span>__ 12.**
                      </p>
                      <p className='text-justify ml-8'>
                        Certification letter from Contractor stating that no
                        asbestos containing materials were used (copy to
                        Environmental Management)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F19</span>__ 13.**
                      </p>
                      <p className='text-justify ml-8'>
                        Certification letter from Architect (or Engineer)
                        regarding asbestos, per EPA regulations (copy to
                        Environmental Management)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F20</span>__ 14.**
                      </p>
                      <p className='text-justify ml-8'>
                        Architect’s and MEP Engineer’s certification letter
                        saying punch list is complete, the work is per contract
                        requirements, and recommending final payment be made to
                        Contractor
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F21</span>__ 15.**
                      </p>
                      <p className='text-justify ml-8'>
                        Architects (or Engineer’s) letter regarding liquidated
                        damages
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F12</span>__ 16.
                      </p>
                      <p className='text-justify ml-8'>
                        Transmittal indicating keys have been given to Principal
                        – signed by Principal
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F23</span>__ 17.
                      </p>
                      <p className='text-justify ml-8'>
                        Final list of all subcontractors with names, addresses,
                        and phone numbers (especially emergency numbers)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F24</span>__ 18.
                      </p>
                      <p className='text-justify ml-8'>
                        Letter from General Contractor Stating Removal of
                        Temporary Facilities
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F25</span>__ 19.*
                      </p>
                      <p className='text-justify ml-8'>
                        As-Built Redline drawings (3 sets Stamped certified) and
                        As-Built Electronic drawings (2 sets) received from A/E
                        and cover letter from Architect and Engineer saying they
                        have been reviewed and are as complete and accurate as
                        possible, attach completed transmittal to Owner.
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F26</span>__ 20.*
                      </p>
                      <p className='text-justify ml-8'>
                        Operations and Maintenance Manuals (3 sets) and cover
                        letter from Architect and Engineer saying they are
                        complete and have been reviewed, attach completed
                        transmittal to Owner.
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F27</span>__ 21.*
                      </p>
                      <p className='text-justify ml-8'>
                        Final commissioning report with certified Test And
                        Balance report. Include cover letter indicating it TAB
                        has been reviewed and approved by consulting Engineer
                      </p>
                    </div>
                    <div className='flex'>
                      <p>
                        __<span className='bg-yellow-500'>F28</span>__ 22.*
                      </p>
                      <p className='text-justify ml-8'>
                        2-CD’s record drawing files
                      </p>
                    </div>
                  </div> */}

                  <div className='mb-8'>
                    <div className='flex'>
                      <p>___ 1.*</p>
                      <p className='text-justify ml-8'>
                        Fully executed Certificate of Substantial Completion
                        with attached punch list(s).
                      </p>
                    </div>
                    <div className='flex'>
                      <p>___ 2.*</p>
                      <p className='text-justify ml-8'>
                        Fully executed Final Change Order (i.e., for allowances,
                        deductions for work done by others, etc.)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>___ 3.</p>
                      <p className='text-justify ml-8'>
                        Final Approved Application for Payment
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 4.**</p>
                      <p className='text-justify ml-8'>
                        Consent of Surety to Final Payment
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 5.**</p>
                      <p className='text-justify ml-8'>
                        Contractor’s Affidavit of Release of Liens (properly
                        signed, notarized, etc, with no exceptions)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 6.**</p>
                      <p className='text-justify ml-8'>
                        Contractor’s Affidavit of Payment of Debts and Claims
                        (properly signed, notarized, etc., with no exceptions)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 7.**</p>
                      <p className='text-justify ml-8'>
                        Properly executed release of liens by subcontractors
                        and/or vendors (if applicable for those who have had
                        problems with payments, etc. per General Conditions
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 8.**</p>
                      <p className='text-justify ml-8'>
                        Certificate of Occupancy from proper municipality
                        (Durham County Inspections / Durham FM)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 9.**</p>
                      <p className='text-justify ml-8'>
                        Contractor’s One-Year Warranty (notarized)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 10.</p>
                      <p className='text-justify ml-8'>
                        Warranty summary sheet and original warranties for
                        specific items (roofs, motors, etc.)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 11.**</p>
                      <p className='text-justify ml-8'>
                        Contractor’s certification letter per General Conditions
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 12.**</p>
                      <p className='text-justify ml-8'>
                        Certification letter from Contractor stating that no
                        asbestos containing materials were used (copy to
                        Environmental Management)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 13.**</p>
                      <p className='text-justify ml-8'>
                        Certification letter from Architect (or Engineer)
                        regarding asbestos, per EPA regulations (copy to
                        Environmental Management)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 14.**</p>
                      <p className='text-justify ml-8'>
                        Architect’s and MEP Engineer’s certification letter
                        saying punch list is complete, the work is per contract
                        requirements, and recommending final payment be made to
                        Contractor
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 15.**</p>
                      <p className='text-justify ml-8'>
                        Architects (or Engineer’s) letter regarding liquidated
                        damages
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 16.</p>
                      <p className='text-justify ml-8'>
                        Transmittal indicating keys have been given to Principal
                        – signed by Principal
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 17.</p>
                      <p className='text-justify ml-8'>
                        Final list of all subcontractors with names, addresses,
                        and phone numbers (especially emergency numbers)
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 18.</p>
                      <p className='text-justify ml-8'>
                        Letter from General Contractor Stating Removal of
                        Temporary Facilities
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 19.*</p>
                      <p className='text-justify ml-8'>
                        As-Built Redline drawings (3 sets Stamped certified) and
                        As-Built Electronic drawings (2 sets) received from A/E
                        and cover letter from Architect and Engineer saying they
                        have been reviewed and are as complete and accurate as
                        possible, attach completed transmittal to Owner.
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 20.*</p>
                      <p className='text-justify ml-8'>
                        Operations and Maintenance Manuals (3 sets) and cover
                        letter from Architect and Engineer saying they are
                        complete and have been reviewed, attach completed
                        transmittal to Owner.
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 21.*</p>
                      <p className='text-justify ml-8'>
                        Final commissioning report with certified Test And
                        Balance report. Include cover letter indicating it TAB
                        has been reviewed and approved by consulting Engineer
                      </p>
                    </div>
                    <div className='flex'>
                      <p>____ 22.*</p>
                      <p className='text-justify ml-8'>
                        2-CD’s record drawing files
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className='mb-4'>
                      <span>Project Manager's Signature</span>
                      <span className='ml-4'>
                        _________________________________Date____________
                        <span className='bg-yellow-500'>F6</span>___________
                      </span>
                    </div>

                    <p>
                      *copy of cover document only to be attached with copy of
                      checklist to final application for payment and
                    </p>
                    <p className='mb-20'>
                      **copy of document kept in project accounting notebook
                    </p>

                    <p className='text-sm'>
                      R:\01 Administration\04 Document & Form Templates\06
                      Project\10 Project Closeout\Project Closeout Checklist -
                      T20160317.doc
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

export default ProjectCloseout;
