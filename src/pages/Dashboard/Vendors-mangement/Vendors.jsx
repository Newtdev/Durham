import { useState } from "react";
import { Button, ModalOverlay } from "../../../ui";
import { ButtonWhiteBG } from "../../../ui";
import { DeletePopup } from "../../../ui";
import { DashboardButton, DashboardNav, PageHeader, Pagination, Search, Sort, TableHeader } from "../Components";
import { AddVendor, VendorsContent, VendorsHeader, VendorTableBody } from "./VendorsComponents";

const Vendors = () => {
  const [showVendorModal, setShowVendorModal] = useState(true);

  return (
    <section className=''>
      <article>
        {/* <!-- Navbar --> */}
        <DashboardNav/>
        
      </article>
      <main className='pt-6 bg-[#fafafa]'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='flex gap-4 flex-col md:flex-row md:justify-between items-center'>
          <PageHeader name='Vendors'/>
            <DashboardButton name="ADD NEW VENDOR" width='w-[211px]' />
          </div>
          <div className='flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 mb-6'>
            {/* <!-- Sort --> */}
            <Sort/>
            

            {/* <!-- Search --> */}
            <Search/>
            
          </div>
          {/* <!-- Table --> */}
          <div className='overflow-x-auto relative shadow rounded-lg border-solid border border-gray-100 '>
            <table className='w-full text-sm text-left text-gray-900'>
              <TableHeader dataArray={VendorsHeader} />
              <VendorTableBody dataArray={VendorsContent}/>
            </table>
          </div>
          {/* PAGINATION */}
          <Pagination/>
          
          
        </div>
      </main>

      {/* Add Vendor Modal */}
      <article>
        {/* Main modal */}
        
      </article>
      <ModalOverlay show={showVendorModal} close={()=> setShowVendorModal(false)}>
        <AddVendor/>
</ModalOverlay>
      {/*  Vendor Succesfully Added Popup */}
      <article>
        {/* Main modal */}
        <div
          id='authentication-modal'
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>
            {/* Modal content */}
            <div className='relative bg-white rounded-lg shadow pb-4'>
              <div className='flex justify-between items-baseline px-6 py-3 rounded-t border-b'>
                <div>
                  <h3 className='text-lg font-bold text-gray-900'>
                    New Vendor Added Successfully
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
              <div className='py-3 px-6 lg:px-8'>
                <p className='text-lg text-gray-600'>
                  You’ve successfully added a new user to Durham system. Please
                  inform them to check their email for their log in information.
                </p>
              </div>

              {/* Buttons */}
              <div className='mt-12 mr-5 flex gap-4 justify-end'>
                <Button name='proceed' />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  Edit Vendor Info Modal */}
      <article>
        {/* Main modal */}
        <div
          id='authentication-modal'
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-[#000000cc]'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-14'>
            {/* Modal content */}
            <div className='relative bg-white rounded-lg shadow pb-4'>
              <div className='flex justify-between items-baseline px-6 py-3 rounded-t border-b'>
                <div>
                  <h3 className='text-lg font-bold text-gray-900'>
                    Are you sure you want to edit this vendor’s information?
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
              <div className='py-3 px-6 lg:px-8'>
                <p className='text-lg text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur. Consectetur bibendum
                  ut nec malesuada sit ante ultrices orci libero.
                </p>
              </div>

              {/* Buttons */}
              <div className='mt-2 mr-5 flex gap-4 justify-end'>
                <ButtonWhiteBG name='no, cancel' />
                <Button name='yes, edit' />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Vendor deleted successfully */}
      <article>
        <div
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-2'>
            <DeletePopup text='Vendor infromation deleted successfully' />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Vendors;
