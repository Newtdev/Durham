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

export function handleDate(dates) {
	// let a = new Date().g
	if (!dates) {
		return new Date().getDate();
	}
	const date = dates.toString().split(" ");
	return `${date[2]}/${date[1]}/${date[3]}`;
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
