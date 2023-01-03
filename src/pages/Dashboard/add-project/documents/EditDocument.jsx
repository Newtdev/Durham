import { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonWhiteBG, ChevronDown, ChevronUp } from "../../../../ui";
import { DashboardButton } from "../../Components";
import { prevForm } from "../reducer";


 const Accordion = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const newClass =
		"bg-[#699bac] mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base  focus:border focus:border-black";

	const onClick = (e) => {
		if (e.target) {
			//const { id, name } = e.target;
			e.target.className = newClass;
			// dispatch(getDocument(name));
			// dispatch(getSlugId(id));
			// dispatch(showModal());
		}
	};

	const makeId = (...arg) => {
		return arg[1].split(" ").join("-");
	};

	return (
		<>
			{!data
				? null
				: Object.keys(data)?.map((document, idx) => {
						const active =
							activeIndex === idx ? "h-full" : "h-16 overflow-y-hidden ";
						return (
							<div
								className={`${active} transition-all ease-linear duration-75 overflow-y-hidden`}
								// key={id}
							>
								<h2>
									<button
										onClick={() => {
											setActiveIndex(idx);
										}}
										type="button"
										className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-900 border border-l-0 border-r-0 border-b-0 border-gray-100 rounded-t-lg">
										<span>
											{document.charAt(0).toUpperCase() + document.slice(1)}
										</span>
										{/* Down Arrow */}
										{activeIndex !== idx && <ChevronDown />}
										{activeIndex === idx && (
											<ChevronUp close={() => setActiveIndex(null)} />
										)}
									</button>
								</h2>
								<div>
									<ul className="px-4">
										{Object.values(data)[idx].map((cur, index) => {
											return (
												<input
													onClick={onClick}
													value={cur.document_name}
													// name={objName}
													id={makeId(document, cur.document_name)}
													type="button"
													name={cur.document_name}
													key={index}
													className={`bg-[#699bac]
						mt-2 mb-2 w-full text-left  rounded-lg py-2 px-4 text-gray-900 text-base active:bg-[#699bac] focus:border focus:border-black cursor-pointer`}
												/>
											);
										})}
									</ul>
								</div>
							</div>
						);
				  })}
		</>
	);
};

const EditDocument = ({documents,getData}) => {
    const dispatch = useDispatch();
   return <form className=''>
        <div className='bg-white border border-gray-100 rounded-lg w-full px-6 pt-8 pb-8 mb-8'>
            {/* Header */}
            <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 text-[32px]'>
                    Edit Documents
                </h3>
                <p className='text-gray-700 text-base mb-4'>
                    List of documents selected to complete this project
                </p>
                {/* <div className='flex items-center gap-4 mb-4'>
                    <button className='border-none text-[#623F04] text-base'>
                        Select Template
                    </button>
                    <button className='underline underline-offset-8 text-[#3B6979] text-base'>
                        Load Template
                    </button>
                </div> */}
            </div>

            {/* Document Accordions */}
            <div className='w-full rounded-lg border border-gray-100'>
               <div id='accordion-collapse' data-accordion='collapse'>
               <Accordion data={documents} />

                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 pb-28'>
            <ButtonWhiteBG name='go back' width='w-[168px]' onClick={()=> dispatch(prevForm())} />
            <DashboardButton
          name='NEXT'
          hidden
          type='submit'
          width='w-[168px]'
        //   loading={response.isLoading} 
         />
           
        </div>
    </form> 
}


export default EditDocument;