import { useState } from "react";
import { ModalOverlay } from "../../../ui";
import { ButtonWhiteBG, ButtonRedBG } from "../../../ui";
import {
  DashboardButton,
  OverviewNav,
  ProjectOverviewNav,
  PageHeader,
  Pagination,
  Search,
  Sort,
  Filter,
  TableHeader,
} from "../Components";
import {
  OverviewContent,
  OverviewTableHeader,
  OverviewTableBody,
  OverviewTitleCard,
  ProjectInfo,
  AwardeeInfo,
  CompanyRep,
} from "./OverviewComponents";

const Overview = () => {
  const [showVendorModal, setShowVendorModal] = useState(true);

  return (
    <div>
      {/* DASHBOARD */}
      <section className='hidden'>
        {/* <!-- Navbar --> */}
        <article>
          <OverviewNav />
        </article>
        <main className='pt-6 bg-[#fafafa]'>
          <div className='container mx-auto px-4 lg:px-24'>
            {/* Title Cards */}
            <div className='mb-6 grid grid-cols-4 gap-4'>
              <OverviewTitleCard />
              <OverviewTitleCard />
              <OverviewTitleCard />
              <OverviewTitleCard />
            </div>

            <div className='flex gap-4 flex-col md:flex-row md:justify-between items-center'>
              <div>
                <PageHeader name='Projects' />
                <p className='text-[#3b6979] text-lg'>Total Projects : 40</p>
              </div>
              <DashboardButton name='ADD NEW PROJECT' width='w-[211px]' />
            </div>
            <div className='flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 mb-6'>
              <div className='flex items-center gap-6'>
                {/* <!-- Sort --> */}
                <Sort />

                {/* <!-- Filter --> */}
                <Filter />
              </div>

              {/* <!-- Search --> */}
              <Search />
            </div>

            {/* <!-- Table --> */}
            <div className='overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 '>
              <table className='w-full text-sm text-left text-gray-900'>
                <TableHeader dataArray={OverviewTableHeader} />
                <OverviewTableBody dataArray={OverviewContent} />
              </table>
            </div>
            {/* PAGINATION */}
            <Pagination />
          </div>
        </main>

        {/*  Leave Page? Modal */}
        <ModalOverlay
          show={showVendorModal}
          close={() => setShowVendorModal(false)}
        >
          <div>
            {/* Modal content */}
            <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow py-10 flex flex-col justify-center items-center'>
              <p className='text-gray-900 font-semibold text-2xl'>
                Are you sure you want to leave?
              </p>
              <p className='text-gray-600 text-lg text-center mt-4 mb-8'>
                Once you leave this page, all changes will be lost and you can’t
                undo this action
              </p>
              {/* Buttons */}
              <div className='flex gap-4'>
                <ButtonWhiteBG name='cancel' />
                <ButtonRedBG name='yes, leave' width='w-[125px]' />
              </div>
            </div>
          </div>
        </ModalOverlay>

        {/*  Delete Project Verify Modal */}
        <ModalOverlay
          show={showVendorModal}
          close={() => setShowVendorModal(false)}
        >
          <div>
            {/* Modal content */}
            <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14 bg-white rounded-lg shadow pb-4'>
              <div className='flex justify-between items-start px-6 py-3 rounded-t border-b'>
                <div>
                  <h3 className='text-lg font-bold text-gray-900'>
                    Are you sure you want to delete this Project information?
                  </h3>
                </div>
                <button
                  type='button'
                  className='text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
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
              <div className='py-3 px-6'>
                <p className='text-lg text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur. Consectetur bibendum
                  ut nec malesuada sit ante ultrices orci libero.
                </p>
              </div>

              {/* Buttons */}
              <div className='mt-12 mr-5 flex gap-4 justify-end'>
                <ButtonWhiteBG name='no, cancel' />
                <ButtonRedBG name='yes, edit' width='w-[136px]' />
              </div>
            </div>
          </div>
        </ModalOverlay>
      </section>

      {/* PROJECT OVERVIEW */}
      <section>
        {/* <!-- Navbar --> */}
        <article>
          <ProjectOverviewNav />
        </article>

        <main className='bg-[#fafafa] h-full'>
          {/* Page Marker */}
          <div className='bg-white h-[80px] border-b border-b-[#b1c3c9] flex items-center justify-between px-12'>
            <div className='flex gap-6 items-center justify-start'>
              <div className='flex gap-2 items-center'>
                <div className='bg-gray-100 flex justify-center items-center rounded-2xl w-6 h-6'>
                  <span className='text-gray-700 font-bold text-lg'>1</span>
                </div>
                <span className='text-gray-900 text-base font-bold'>
                  Overview
                </span>
                <span className='text-gray-700 font-bold'>&gt;</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='bg-gray-100 flex justify-center items-center rounded-2xl w-6 h-6'>
                  <span className='text-gray-700 font-bold text-lg'>2</span>
                </div>
                <span className='text-gray-400 text-base'>
                  Awardee Information
                </span>
                <span className='text-gray-400'>&gt;</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='bg-gray-100 flex justify-center items-center rounded-2xl w-6 h-6'>
                  <span className='text-gray-700 font-bold text-lg'>3</span>
                </div>
                <span className='text-gray-400 text-base'>Select Forms</span>
                <span className='text-gray-400'>&gt;</span>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='bg-gray-100 flex justify-center items-center rounded-2xl w-6 h-6'>
                  <span className='text-gray-700 font-bold text-lg'>4</span>
                </div>
                <span className='text-gray-400 text-base'>Preview</span>
              </div>
            </div>

            <button className='text-[#3b6979] font-semibold w-20 h-10 text-base border-none rounded hover:bg-gray-50 hover:text-blue-800'>
              EXIT
            </button>
          </div>

          {/* Main Content */}
          <div className='container mx-auto pt-8 px-4 lg:px-24'>
            {/* Project Overview */}
            <div className='hidden'>
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
                    <ProjectInfo />
                  </div>
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

            {/* Awardee Information */}
            <div className='hidden'>
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
                    Awardee Information
                  </p>
                  <hr />
                </div>

                {/* Awardee Input */}
                <div className='w-1/2'>
                  <div>
                    <AwardeeInfo />
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
                      <CompanyRep />
                    </div>
                  </div>
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

            {/* Awardee Information 1 */}
            <div className='hidden'>
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
                    <AwardeeInfo />
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
                      <CompanyRep />
                    </div>
                  </div>
                </div>

                {/* awardee Input */}
                <div className='mt-7'>
                  <div className='mb-4'>
                    <p className='text-gray-600 font-bold text-lg mb-1'>
                      Awardee Information (1)
                    </p>
                    <hr />
                  </div>
                  <div className='w-1/2'>
                    <div>
                      <AwardeeInfo />
                    </div>
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
                      <CompanyRep />
                    </div>
                  </div>

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

            {/* Select Documents*/}
            <div className=''>
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
                    <h2 id='accordion-collapse-heading-1'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg'
                        data-accordion-target='#accordion-collapse-body-1'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-1'
                      >
                        <span>Contract</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id='accordion-collapse-body-1'
                      className='hidde'
                      aria-labelledby='accordion-collapse-heading-1'
                    >
                      <ul className='px-4'>
                        <button className='mt-2 mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Technology Service Agreement
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Short Small Form Design Consultant Agreement
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Owner and Design Consultant (more $200,000)
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Owner and Design Consultant (less than $200,000)
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Owner and Contractor Agreement Form (more $500,000)
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Owner and Contractor Agreement Form (more $500,000) -
                          ESSER
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          LeChase Esser Contract Template
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          ESSER PM Contract Template
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          ESSER Contract Template
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          DPS Short Form Engineer - Engineering Contract
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Attachment A Lunsford Act Form
                        </button>
                      </ul>
                    </div>
                    <h2 id='accordion-collapse-heading-2'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100'
                        data-accordion-target='#accordion-collapse-body-2'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-2'
                      >
                        <span>Procurement</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id='accordion-collapse-body-2'
                      className='hidden'
                      aria-labelledby='accordion-collapse-heading-2'
                    >
                      <ul className='px-4'>
                        <button className='mt-2 mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          E-589CI Affidavit of Capital Improvement
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          DPS Formal General Conditions - 1-17-20
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          00 11 13 - Advertisement for Bid Template
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          3 bids
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Bid Manual
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Determination of Apparent Low Bidder - Contractor
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Precis Checklist
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Contract Preparation Checklist
                        </button>
                      </ul>
                    </div>
                    <h2 id='accordion-collapse-heading-2'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100'
                        data-accordion-target='#accordion-collapse-body-2'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-2'
                      >
                        <span>Notice</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id='accordion-collapse-body-2'
                      className='hidden'
                      aria-labelledby='accordion-collapse-heading-2'
                    >
                      <ul className='px-4'>
                        <button className='mt-2 mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Notice of Reward - Consultant Form
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Notice of Reward - Contractor Form
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Notice of Intent to Award - Design Services [Less than
                          $200k]
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Notice of Intent to Award - Design Services [More than
                          $200k BOARD APPROVAL]
                        </button>
                        <button className='mb-2 w-full text-left bg-[#d8e1e4] rounded-lg py-2 px-4 text-gray-900 text-base focus:bg-[#699bac] focus:border focus:border-black'>
                          Notice to Proceed - Contractor Form
                        </button>
                      </ul>
                    </div>
                    <h2 id='accordion-collapse-heading-3'>
                      <button
                        type='button'
                        className='flex items-center border-t border-t-gray-100 justify-between w-full p-4 font-semibold text-left text-gray-900'
                        data-accordion-target='#accordion-collapse-body-3'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-3'
                      >
                        <span>Budget</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <h2 id='accordion-collapse-heading-4'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900'
                        data-accordion-target='#accordion-collapse-body-4'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-4'
                      >
                        <span>Project Closeout</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <h2 id='accordion-collapse-heading-5'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900'
                        data-accordion-target='#accordion-collapse-body-5'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-5'
                      >
                        <span>MWBE FORMS</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <h2 id='accordion-collapse-heading-6'>
                      <button
                        type='button'
                        className='flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900'
                        data-accordion-target='#accordion-collapse-body-6'
                        aria-expanded='false'
                        aria-controls='accordion-collapse-body-6'
                      >
                        <span>Notice Letters</span>
                        <svg
                          data-accordion-icon
                          class='w-6 h-6 shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </h2>
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
          </div>
        </main>
      </section>
    </div>
  );
};

export default Overview;
