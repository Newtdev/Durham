import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/main";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./pages/authentications/login/"));
const Signup = lazy(() => import("./pages/authentications/sign-up"));
const ResetPassword = lazy(() =>
	import("./pages/authentications/change-password")
);

function pages(id) {
	return [
		{ path: "/", element: <Login /> },
		{ path: "/project-manager/activate/:token", element: <Signup /> },
		{ path: "/password-reset/:email/:id", element: <ResetPassword /> },
		{ path: "/dashboard/*", element: <Dashboard /> },
	].map(({ path, element }, id) => {
		return <Route key={id} path={path} element={element}></Route>;
	});
}
export default function App() {
	return (
		<main className="bg-white overflow-x-hidden">
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>{pages()}</Routes>
			</Suspense>
			<ToastContainer theme="colored" />
		</main>
	);
}
