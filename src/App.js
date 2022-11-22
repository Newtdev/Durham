import React, { lazy, Suspense, useState } from 'react';
import {Routes, Route,} from 'react-router-dom';


const Login = lazy(()=> import( './pages/authentications/login/'));
const Signup = lazy(()=> import( './pages/authentications/sign-up'));
// const ValidateBVN = lazy(()=> import( './screens/validatebvn'));
// const SuccesfulValidation = lazy(()=> import( './screens/succesfulvalidation'));
// const ForgetPassword = lazy(()=> import( './screens/Forgetpassword'));
// const ResetPassword = lazy(()=> import( './screens/resetpassword'));
// const ValidatePhoneNumber = lazy(()=> import( './screens/validatephonenumber'));
// const DashboardHome = lazy(()=> import( './screens/dashboard/index'));

function pages(id) {
  return [
    { path: '/', element: <Login /> },
    { path: '/sign-up', element: <Signup /> },
  ].map(({ path, element }, id) => {
    return <Route key={id} path={path} element={element}></Route>
  });
}
export default function App() {
  return (
    <main className='bg-white'>
      {/* <registeredUserContext.Provider value={{ id, setId }}> */}
        <Suspense fallback={<div>Loading...</div>}>

      <Routes>
       {pages()}
      </Routes>
        </Suspense>
      {/* </registeredUserContext.Provider> */}
      {/* <Toaster /> */}
    </main>
  )
}