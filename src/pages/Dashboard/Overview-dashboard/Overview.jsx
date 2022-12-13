import { useState } from "react";
import { ModalOverlay } from "../../../ui";
import { ButtonWhiteBG, ButtonRedBG } from "../../../ui";
import {
  DashboardButton,
  PageHeader,
  Pagination,
  Search,
  Sort,
  Filter,
  TableHeader,
  DashboardNav,
} from "../Components";
import {
  OverviewContent,
  OverviewTableHeader,
  OverviewTableBody,
  OverviewTitleCard,
} from "./OverviewComponents";

const Overview = () => {
  const [showVendorModal, setShowVendorModal] = useState(true);

  return (
    <div>
      {/* DASHBOARD */}
      <section>
        {/* <!-- Navbar --> */}
        <article>
          <DashboardNav />
        </article>
        <main className='pt-6 bg-[#fafafa]'>
          <div className='container mx-auto px-4 lg:px-24'>
            {/* Title Cards */}
            <div className='mb-6 grid grid-cols-4 gap-4'>
              <OverviewTitleCard/>
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


    </div>
  );
};

export default Overview;
