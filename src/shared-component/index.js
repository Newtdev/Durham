export const fetchData = () => {
	const durhamProfile = JSON.parse(localStorage.getItem("DurhamProfiles"));
	if (!durhamProfile) {
		return {};
	} else {
		return durhamProfile;
	}
};
export const getProjects = () => {
	const projects = JSON.parse(localStorage.getItem("projects"));
	if (!projects) {
		return {};
	} else {
		return projects;
	}
};
export const getProjectManager = () => {
	const projectManager = JSON.parse(localStorage.getItem("project_manager"));
	if (!projectManager) {
		return {};
	} else {
		return projectManager;
	}
};
export const getVendor = () => {
	const vendor = JSON.parse(localStorage.getItem("vendor"));
	if (!vendor) {
		return {};
	} else {
		return vendor;
	}
};

export const storeProject = (value) => {
	localStorage.setItem("projects", JSON.stringify(value));
};

export const storeProjectManager = (value) => {
	localStorage.setItem("project_manager", JSON.stringify(value));
};

export const storeVendor = (value) => {
	localStorage.setItem("vendor", JSON.stringify(value));
};



export function getTotals(documents) {
	if (!documents) {
		return 0;
	}
	const {
		procurement,
		notice_letter,
		mwbe_forms,
		contract,
		budget,
		project_closeout,
		notice,
	} = documents;
	return [
		...contract,
		...procurement,
		...notice_letter,
		...mwbe_forms,
		...budget,
		...notice,
		...project_closeout,
	].length;
};


const Months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']

export function handleDate(dates) {
	// let a = new Date().g
	if (!dates) {
		return new Date().getDate();
	}
	const date = dates.toString().split(" ");	
	return `${Months[1-1]} ${date[2]}, ${date[3]}`;
}

export function handleLastName(arg) {
	if (!arg) {
		return;
	}
	return arg.split(" ")[1];
}

export function handleTime(arg) {
	if (!arg) {
		return;
	}
	console.log(arg.toString().split(" ")[4]);
	return arg.toString().split(" ")[4];
}
