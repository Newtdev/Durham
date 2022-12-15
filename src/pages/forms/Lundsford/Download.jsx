import { DashboardButton } from "../../Dashboard/Components"
import Success from "../../../assets/success.png";
import { Link } from "react-router-dom";


const DownLoadForm = ({ component, show }) => {

  const exportPDFWithComponent = () => {
    if (component.current) {
      component.current.save();
    }
  }
    return <div
    className={`${show} relative w-full max-w-md h-screen md:h-auto mx-auto mt-14`}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Modal content */}
    <div className='relative w-[472px] bg-white rounded-lg shadow py-4 text-center'>
      <div className='flex justify-center items-center'>
        <img src={Success} alt='Happy people' />
      </div>
      <div className='mx-6 mt-4'>
        <h3 className='text-lg font-semibold text-gray-900'>
          Document Successfully
        </h3>
        <p className='mt-6 text-base text-gray-700'>
          Congratulations! You have successfully created the{" "}
          <span>&lt;document name&gt;</span> for{" "}
          <span>&lt;Project Name&gt;</span>.
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-col justify-center items-center gap-4 mt-10 pb-8'>
        <DashboardButton
          hidden
          name='DOWNLOAD NOW'
          type='button'
          width='w-[360px]'
          onClick={exportPDFWithComponent}
          />
          <Link to="/dashboard"
			className="flex items-center justify-center uppercase w-[360px] bg-white text-[#3b6979] font-semibold px-4 h-[38px] border border-[#3b6979] rounded hover:bg-[#3b6979] hover:text-white cursor-pointer">
    go to project dashboard
		</Link>
       
      </div>
    </div>
  </div>
}


export default DownLoadForm;