// const onChange = (a, d, e) => {
// 	const deletedID = selectDoc.findIndex(
// 		(cur) => cur.identifier === d.identifier
// 	);

// 	if (e.currentTarget.checked && deletedID === -1) {
// 		dispatch(
// 			addNewDocToProject({
// 				name: a,
// 				document_name: d.document_name,
// 				identifier: d.identifier,
// 			})
// 		);
// 	} else {
// 		dispatch(RemoveNewDocToProject(deletedID));
// 	}
// };
