import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProjectInfo } from "./editReducer";
import { OverviewContent, OverviewTableHeader } from "../../../lib/data";
import { FullPageLoader, ModalOverlay } from "../../../ui";
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
  Close,
} from "../Components";
import {
  OverviewTableBody,
  OverviewTitleCard,
} from "./OverviewComponents";
import { supabase } from "../../../lib/supabase";

function handleAwardee(data) {
  console.log(data[0])
  // console.log(a)
}

const Overview = () => {
  const [action, setAction] = useState({delete:false, id: null})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
	const [request, setRequest] = useState(true);

	useEffect(() => {
		(async function getDate() {
			const response = await supabase.from("durham_projects").select("*");
			setData(response.data);
			setRequest(false);
		})();
	}, []);

  const dashboardProps = {
    onDelete: (id) => {
      
      setAction({ ...action, delete: true, id: id })
    },
    
    onEdit: (data) => {
      dispatch( getProjectInfo(data) )
      // setAction({ ...action, edit: true, initialData:data })
    },
    dataArray:data
  };

  const onDeleteConfirmation = () => {
    setAction({ delete: false, id:null })
    // Make API Request
    dispatch()
  }

  return (
    <div>
      			{request && <FullPageLoader />}

      {/* DASHBOARD */}
      <section>
        {/* <!-- Navbar --> */}
        <article>
          <DashboardNav />
        </article>
        <main className='pt-6 bg-[#fafafa] h-screen'>
          <div className='container mx-auto px-4 lg:px-24'>
            {/* Title Cards */}
            <div className='mb-6 grid grid-cols-4 gap-4'>
              <OverviewTitleCard name='Total Projects' value={data.length || 0} />
              <OverviewTitleCard name='Forms' value='0' />
              <OverviewTitleCard name='Project Managers' value={data.length || 0}/>
              <OverviewTitleCard name='Vendors' value={data.length || 0} />
            </div>

            <div className='flex gap-4 flex-col md:flex-row md:justify-between items-center'>
              <div>
                <PageHeader name='Projects' />
                <p className='text-[#3b6979] text-lg'>Total Projects : {data.length || 0}</p>
              </div>
              <DashboardButton name='ADD NEW PROJECT' width='w-[211px]' onClick={()=> navigate('/dashboard/add-new-project')} />
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
                <OverviewTableBody {...dashboardProps} />
              </table>
            </div>

            {/* PAGINATION */}
            {/* <Pagination /> */}
          </div>
        </main>

        {/*  Leave Page? Modal */}
       
        {/*  Delete Project Verify Modal */}
        <ModalOverlay
          show={action.delete}
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
                 <Close/>
                </button>
              </div>
              <div className='py-3 px-6'>
                <p className='text-base text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur. Consectetur bibendum
                  ut nec malesuada sit ante ultrices orci libero.
                </p>
              </div>

              {/* Buttons */}
              <div className='mt-12 mr-5 flex gap-4 justify-end'>
                <ButtonWhiteBG name='no, cancel' onClick={() => setAction({ delete: false, id: null })} />
                {/* Make api request to delete the data */}
                <ButtonRedBG name='yes, edit' width='w-[136px]' onClick={onDeleteConfirmation}  />
              </div>
            </div>
          </div>
        </ModalOverlay>
      </section>


    </div>
  );
};

export default Overview;
