import DashboardLayout from "layout/DashboardLayout";
import CampaignView from "modules/campaign/CampaignView";
import DashboardPage from "pages/DashboardPage";
import StartCampaignPage from "pages/StartCampaignPage";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));

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
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/start-campaign"></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
