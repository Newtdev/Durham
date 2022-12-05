import { useState } from "react";
import { EditComponent } from "../components"

export const ProfileDetails = ({data, onSubmit,loading}) => {
    const details = Object.values(data)
    const [activeIndex, setActiveIndex] = useState(null); 

    return details.map((cur, index) => {
        const { indx, name, values } = cur;
       const show = activeIndex === index
           ? 'block' : 'hidden';
       const showEdit = activeIndex === index
           ? 'hidden' : 'block';
        
        const CancelEdit = ()=> setActiveIndex(null)
       
       return <div key={index} className='mt-12 mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between'>
            <div>
                <p className='font-bold text-gray-900'>{name}</p>
                <p className='font-semibold text-[#3B6979]'>{values}</p>
                <form className={`${show}`} onSubmit={onSubmit}>
                   <EditComponent data={cur} cancel={CancelEdit} loading={loading}  />
                </form>

            </div> 
            {/* FORM FOR EDIT COMPONENT */}
            <span className={`${showEdit} uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end`} onClick={() => {
                setActiveIndex(indx)
            }}>
                Edit
            </span>
        </div>
    });
}