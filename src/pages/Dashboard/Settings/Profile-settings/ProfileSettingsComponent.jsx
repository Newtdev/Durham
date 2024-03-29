import { useState } from "react";
import { EditComponent, EditIndividualComponent } from "../components";

export const ProfileDetails = ({ data, loading, onSubmit, hidden }) => {
	const details = Object.values(data);
	const [activeIndex, setActiveIndex] = useState(null);

	return details?.map((cur, index) => {
		const show = activeIndex === index ? "block" : "hidden";
		const showEdit = activeIndex === index ? "hidden" : "block";

		const CancelEdit = () => setActiveIndex(null);

		return (
			<div
				key={cur.index}
				className="mt-12 mb-4 pb-4 border-b border-b-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
				{/* <div>
                <p className='font-bold text-gray-900'>{!cur? '': cur.name}</p>
                <p className={`${showEdit} font-semibold text-[#3B6979]`}>{typeof cur.value === 'object'? '': cur.value}</p>
                {hidden ? <EditComponent data={cur} show={show} onSubmit={onSubmit} cancel={CancelEdit} loading={loading} /> : <EditIndividualComponent show={show} data={cur} cancel={CancelEdit} loading={loading} />}

            </div> */}
				<div>
					<p className="font-bold text-gray-900">{!cur ? "" : cur.name}</p>
					<p className={`${showEdit} font-semibold text-[#3B6979]`}>
						{typeof cur.value === "object" ? "" : cur.value}
					</p>
					{hidden ? (
						<EditComponent
							data={cur}
							show={show}
							onSubmit={onSubmit}
							cancel={CancelEdit}
							loading={loading}
						/>
					) : (
						<EditIndividualComponent
							show={show}
							data={cur}
							cancel={CancelEdit}
							loading={loading}
						/>
					)}
				</div>
				{/* FORM FOR EDIT COMPONENT */}
				<span
					className={`${showEdit} uppercase cursor-pointer  font-semibold text-[#3B6979] hover:underline text-end`}
					onClick={() => {
						setActiveIndex(cur.indx);
					}}>
					Edit
				</span>
			</div>
		);
	});
};
