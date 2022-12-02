import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Users from "./pages/Dashboard/Users/Users";
import Vendors from "./pages/Dashboard/Vendors-mangement/Vendors";
import Settings from "./pages/Dashboard/Settings-Durham-Settings/Settings/Settings";
const Login = lazy(() => import("./pages/authentications/login/"));
const Signup = lazy(() => import("./pages/authentications/sign-up"));
const ResetPassword = lazy(() =>
  import("./pages/authentications/change-password")
);
const ProductManager = lazy(() =>
  import("./pages/Dashboard/Product-manager-management/Product-manager")
);
// const SuccesfulValidation = lazy(()=> import( './screens/succesfulvalidation'));
// const ForgetPassword = lazy(()=> import( './screens/Forgetpassword'));
// const ResetPassword = lazy(()=> import( './screens/resetpassword'));
// const ValidatePhoneNumber = lazy(()=> import( './screens/validatephonenumber'));
// const DashboardHome = lazy(()=> import( './screens/dashboard/index'));

function pages(id) {
  return [
    { path: "/", element: <Login /> },
    { path: "/sign-up", element: <Signup /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/dashboard/product-manager", element: <ProductManager /> },
    {
      path: "/dashboard/users",
      element: <Users />,
    },
    {
      path: "/dashboard/vendors",
      element: <Vendors />,
    },
    {
      path: "/dashboard/settings",
      element: <Settings />,
    },
  ].map(({ path, element }, id) => {
    return <Route key={id} path={path} element={element}></Route>;
  });
}
export default function App() {
  return (
    <main className='bg-white'>
      {/* <registeredUserContext.Provider value={{ id, setId }}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{pages()}</Routes>
      </Suspense>
      {/* </registeredUserContext.Provider> */}
      {/* <Toaster /> */}
    </main>
  );
}
