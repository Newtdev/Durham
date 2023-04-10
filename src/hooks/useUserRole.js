import { useSelector } from "react-redux";
import { role } from "../features/auth";

const useUserRole = () => {
	const userRole = useSelector(role);

	return { userRole };
};

export default useUserRole;
