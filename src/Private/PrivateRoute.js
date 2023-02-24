// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { selectToken } from "../features/auth";

import { useEffect, useState } from "react";

// const PrivateRoute = ({ children }) => {
// 	const navigate = useNavigate();
// 	const token = useSelector(selectToken);
// 	console.log(token)
// 	// useEffect(() => {
// 		// 	if (!token) {
// 			// 		navigate("/");
// 			// 	} else {
// 				// 		navigate("/dashboard", { replace: true });
// 				// 	}
// 				// }, [token, navigate]);

// 			 return !token ? <Navigate to="/dashboard" /> : children;
// 	return <>{children}</>;
// };

// export default PrivateRoute;

// const Resolved = () => {
// 	const [a, setA] = useState([]);
// 	useEffect(() => {
// 		let a = false;
// 		const fetchdata = async () => {
// 			const data = await fetch("data.json");
// 			if (!a) {
// 				const b = await data.json();
// 				setA(b);
// 				// console.log(await data.json());
// 			}
// 		};
// 		fetchdata();

// 		return () => {
// 			a = true;
// 		};
// 	}, []);

// 	const resolvedAllData = () => {

// 	return <div>{resolvedAllData()}</div>;
// };

// export default Resolved;
