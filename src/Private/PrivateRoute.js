import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { selectToken } from "../features/auth";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const token = useSelector(selectToken);
	useEffect(() => {
		// return !token ? <Navigate to="/" /> : children;
		if (!token) {
			navigate("/");
		} else {
			navigate("/dashboard", { replace: true });
		}
	}, [token, navigate]);

	return <>{children}</>;
};

export default PrivateRoute;
