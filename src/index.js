import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { store } from "./store/configureStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "layout/DashboardLayout";
import WithdrawPage from "pages/WithdrawPage";
import PaymentLayout from "layout/PaymentLayout";
import UnauthorizePage from "pages/UnauthorizePage";
import ShippingPage from "pages/ShippingPage";
import CheckoutPage from "pages/CheckoutPage";
import RequiredAuthPage from "pages/RequiredAuthPage";
import { permissions } from "constants/permissions";
import PaymentPage from "pages/PaymentPage";

const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));

const router = createBrowserRouter([
  {
    path: "register",
    element: <SignUpPage />,
  },
  {
    path: "login",
    element: <SignInPage />,
  },
  {
    element: (
      <RequiredAuthPage
        allowPermissions={[permissions.campaign.CREATE]}
      ></RequiredAuthPage>
    ),
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "campaign",
            element: <CampaignPage />,
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
          {
            path: "withdraw",
            element: <WithdrawPage />,
          },
          {
            path: "unauthorize",
            element: <UnauthorizePage />,
          },
          {
            path: "start-campaign",
            element: <StartCampaignPage />,
          },
          {
            path: "campaign/:slug",
            element: <CampaignView />,
          },
        ],
      },
    ],
  },
  {
    element: <PaymentLayout />,
    children: [
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "shipping",
        element: <ShippingPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Suspense>
    <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
