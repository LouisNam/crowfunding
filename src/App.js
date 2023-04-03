import SignInPage from "pages/SignInPage";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("pages/SignUpPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
