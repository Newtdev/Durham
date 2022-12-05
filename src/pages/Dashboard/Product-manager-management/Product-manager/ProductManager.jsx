import { DeletePopup,SuccessPopup } from "../../../../ui";
import { DashboardNav,DashboardButton, Sort, Search, TableHeader, TableBody, Pagination, PageHeader } from "../../Components";
import { AddPojectsManagerModal,DeleteProjectModal} from "./ProjectsComponents";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ProductHeader, productContent } from './ProjectsComponents';


const ProductManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableButton, setTableButton] = useState({ delete: false, edit: false });

  const ProductManagerProps = {
    onDelete: () => setTableButton({ ...tableButton, delete: true }),
    onEdit: () => setTableButton({ ...tableButton, edit: true }),
    dataArray:productContent
  };

  return (
    <section>
      <article>
        {/* <!-- Navbar --> */}
       <DashboardNav/>
      </article>

      <main className='pt-6 bg-[#fafafa] max-h-screen overflow-y-hidden'>
        <div className='container mx-auto px-4 lg:px-24'>
          <div className='flex gap-4 flex-col md:flex-row md:justify-between items-center'>
           <PageHeader name='Project Manager'/>
            <DashboardButton name="ADD NEW PROJECT MANAGER" width='w-[290px]' onClick={() => setShowModal(true)} />
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
              <TableHeader dataArray={ProductHeader}>
              </TableHeader>
              <TableBody {...ProductManagerProps}>
              </TableBody>
            </table>
          </div>
          {/* pagination */}
          <Pagination/>
        </div>
      </main>

      {/* Add PM Modal */}
      <article>
        {/* Main modal */}
        <ModalOverlay show={showModal}>
          <AddPojectsManagerModal close={() => setShowModal(false)}/>
        </ModalOverlay>
      </article>

      {/*  Delete PM Modal */}
      <article>
        {/* Main modal */}
        <ModalOverlay show={tableButton.delete}>
          <DeleteProjectModal close={() => setTableButton({...tableButton, delete:false})}/> 

        </ModalOverlay>
      </article>

      {/* PM added successfully */}
      {/* <article>
        <div
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-2'>
            <SuccessPopup text='Project Manager added successfully' />
          </div>
        </div>
      </article> */}

      {/* PM deleted successfully */}
      {/* <article>
        <div
          tabindex='-1'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full bg-transparent'
        >
          <div className='relative w-full max-w-md h-screen md:h-auto mx-auto mt-2'>
            <DeletePopup text='Project Manager deleted successfully' />
          </div>
        </div>
      </article> */}
    </section>
  );
};

export default ProductManager;
