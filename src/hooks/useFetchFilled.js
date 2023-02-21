import { useEffect, useState } from "react";

export const UseFetchFilledFormDetails = (id) => {
	const [details, setDetails] = useState({});
	const { authorization } = JSON.parse(localStorage.getItem("durham_token"));

	useEffect(() => {
		let isSubscribe = false;

		const fetchDetails = async () => {
			const response = await fetch(
				`https://durham.cfcing.org/api/projects/forms/${id}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `bearer ${authorization?.token}`,
					},
				}
			);
			let a = response.json();
			if (!isSubscribe) {
				setDetails(await a);
			}
		};

		fetchDetails();

		return () => {
			isSubscribe = true;
		};
	}, [id]);

	return [details];
};