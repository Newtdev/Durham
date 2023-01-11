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


export function doConvert (value){
    // let numberInput = document.querySelector('#numberInput').value ;
    // let myDiv = document.querySelector('#result');
	if (!value) return '';
    let oneToTwenty = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ',
    'Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
    let tenth = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

    if(value.toString().length > 7) return 'overlimit' ;
    // let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  let num = ('0000000'+ value).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if(!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' million ' : ''; 
  
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'hundred ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' thousand ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'hundred ': ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : ''; 
	return outputText;
    // myDiv.innerHTML = outputText;
}
