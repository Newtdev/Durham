import { useState } from "react";
import { DeletePopup, ModalOverlay } from "../../../ui";
import { DashboardButton, DashboardNav, PageHeader, Pagination, Search, Sort, TableHeader } from "../Components";
import { EditVendorModal } from './VendorsComponents';
import { AddVendor, DeleteVendorModal, VendorsContent, VendorsHeader, VendorTableBody } from "./VendorsComponents";

const Vendors = () => {
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState({delete:false, edit:false});

  
  const close = () => { setShowVendorModal(false) };

  const onDelete = () => setShowActionModal((prev) => {
    return { ...prev, delete: true }
  });
  const onEdit = () => setShowActionModal((prev) => {
    return { ...prev, edit: true }
  });

  const onDeleteClose = () => setShowActionModal((prev) => {
    return { ...prev, delete: false }
  });
  const onEditClose = () => setShowActionModal((prev) => {
    return { ...prev, edit: false }
  });


  

  return (
    <section className='max-h-screen overflow-y-hidden'>
      <article>
        {/* <!-- Navbar --> */}
        <DashboardNav/>
        
      </article>
      <main className='pt-6 bg-[#fafafa]'>
        <div className='container mx-auto px-4 lg:px-24 '>
          <div className='flex gap-4 flex-col md:flex-row md:justify-between items-center'>
          <PageHeader name='Vendors'/>
            <DashboardButton name="ADD NEW VENDOR" width='w-[211px]' onClick={()=> setShowVendorModal(true)} />
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
              <VendorTableBody dataArray={VendorsContent} onDelete={onDelete} onEdit={onEdit} />
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
      <ModalOverlay show={showVendorModal}>
        <AddVendor close={close} />
      </ModalOverlay>
      
      {/*  Vendor Succesfully Added Popup */}
      

      {/*  Edit Vendor Info Modal */}
      <ModalOverlay show={showActionModal.edit}>
        <EditVendorModal close={onEditClose} />
      </ModalOverlay>

      {/* Vendor deleted successfully */}
      <ModalOverlay show={showActionModal.delete}>
        <DeleteVendorModal close={onDeleteClose} />
</ModalOverlay>
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
