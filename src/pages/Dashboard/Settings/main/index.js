import { Link } from "react-router-dom";
import { DashboardNav, PageHeader } from "../../Components";

const Settings = () => {
	return (
		<section className=" h-screen w-full overflow-y-hidden">
			<DashboardNav />
			<article className=" pt-6">
				<div className="container mx-auto px-4 lg:px-24">
					<div className="mb-6">
						<PageHeader name="Settings" />
					</div>

					{/* Cards */}
					<div className="flex items-center gap-6">
						<Link
							to="/dashboard/settings/profile"
							className="block w-[264px] p-4 bg-white border border-gray-200 rounded-lg shadow-md">
							<div className="h-6 w-6 bg-gray-300"></div>

							<p className="text-gray-900 font-bold my-4 cursor-pointer">
								My Profile Details
							</p>

							<p className="font-normal text-gray-900">
								Card Sub text line, This is a brief description of the content.
							</p>
						</Link>

						<Link
							to="/dashboard/settings/durhams-profile"
							className="w-[264px] p-4 bg-white border border-gray-200 rounded-lg shadow-md">
							<div className="h-6 w-6 bg-gray-300"></div>

							<p className="text-gray-900 font-bold my-4 cursor-pointer">
								Durham Details
							</p>

							<p className="font-normal text-gray-900">
								Card Sub text line, This is a brief description of the content.
							</p>
						</Link>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Settings;
