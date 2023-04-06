import DashboardLayout from "layout/DashboardLayout";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import PaymentLayout from "layout/PaymentLayout";
import CheckoutPage from "pages/CheckoutPage";
import ShippingPage from "pages/ShippingPage";
import PaymentPage from "pages/PaymentPage";
import WithdrawPage from "pages/WithdrawPage";

const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));

Modal.setAppElement("#root");

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
        </Route>
        <Route element={<PaymentLayout></PaymentLayout>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
