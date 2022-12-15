export const fetchData = () => {
	const durhamProfile = JSON.parse(localStorage.getItem("DurhamProfiles"));
	if (!durhamProfile) {
		return {};
	} else {
		return durhamProfile;
	}
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
}

export function handleDate(projectDetails) {
	// let a = new Date().g
	if (!projectDetails) {
		return;
	}
	const date = projectDetails.date.toString().split(" ");
	return `${date[2]}/${date[1]}/${date[3]}`;
}
