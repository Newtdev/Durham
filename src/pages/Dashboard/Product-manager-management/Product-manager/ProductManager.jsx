import { DashboardNav,DashboardButton, Sort, Search, TableHeader, TableBody, Pagination, PageHeader } from "../../Components";
import { AddPojectsManagerModal,DeleteProjectModal, EditPojectsManagerModal} from "./ProjectsComponents";
import { ModalOverlay } from "../../../../ui";
import { useState } from "react";
import { ProductHeader, productContent } from './ProjectsComponents';
import { useDeleteProductManagerMutation } from "../../../../features/services/api";
import { toast } from "react-toastify";


const ProductManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableButton, setTableButton] = useState({ delete: false, edit: false, id: null, initialData:{} });
  const [deleteProductManager, result] = useDeleteProductManagerMutation();
  

  const HandleRequest = async () => {
    
    const response = await deleteProductManager(tableButton.id);
    
    if (response) {
      HandleClose()
      if (response.error) {
				toast.error(response?.error?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.success(response?.data?.message, {
					position: toast.POSITION.TOP_CENTER,
				});
			}
    }
  }
  
  const onClose = () => {
    setShowModal(false)
  }

  function HandleClose() {
    setTableButton({ ...tableButton, delete: false })
  };

  const ProductManagerProps = {
    onDelete: (id) => {
      
      setTableButton({ ...tableButton, delete: true, id: id })
    },
    
    onEdit: (data) => {
      console.log(data)
      setTableButton({ ...tableButton, edit: true, initialData:data })
    },
    dataArray:productContent
  };

  const onEditClose= () => {
    
    setTableButton({ ...tableButton, edit: false, initialData: {} })
  }

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
          <AddPojectsManagerModal close={onClose}/>
        </ModalOverlay>
      </article>
      <article>
        {/* Edit modal */}
        <ModalOverlay  show={tableButton.edit}>
          <EditPojectsManagerModal close={onEditClose} data={tableButton.initialData} />
        </ModalOverlay>
      </article>

      {/*  Delete PM Modal */}
      <article>
        {/* Main modal */}
        <ModalOverlay show={tableButton.delete}>
          <DeleteProjectModal HandleRequest={HandleRequest} close={() => setTableButton({ ...tableButton, delete: false })} isLoading={result.isLoading } /> 

        </ModalOverlay>
      </article>

      
    </section>
  );
};

export default ProductManager;
