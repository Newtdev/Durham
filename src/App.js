import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/main";

const Login = lazy(() => import("./pages/authentications/login/"));
const Signup = lazy(() => import("./pages/authentications/sign-up"));
const ResetPassword = lazy(() =>
	import("./pages/authentications/change-password")
);

function pages(id) {
	return [
		{ path: "/", element: <Login /> },
		{ path: "/sign-up", element: <Signup /> },
		{ path: "/reset-password", element: <ResetPassword /> },
		{ path: "/dashboard/*", element: <Dashboard /> },
	].map(({ path, element }, id) => {
		return <Route key={id} path={path} element={element}></Route>;
	});
}
export default function App() {
	return (
		<main className="bg-white">
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>{pages()}</Routes>
			</Suspense>
			{/* <Toaster /> */}
		</main>
	);
}
