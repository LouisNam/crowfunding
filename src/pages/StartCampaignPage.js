import DashboardLayout from "layout/DashboardLayout";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";

const StartCampaignPage = () => {
  return (
    <DashboardLayout>
      <CampaignAddNew></CampaignAddNew>
    </DashboardLayout>
  );
};

export default StartCampaignPage;
