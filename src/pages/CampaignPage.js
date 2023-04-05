import { Button } from "components/button";
import Heading from "components/common/Heading";
import { IconPlus, IconPlusSmall } from "components/icons";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <IconPlus></IconPlus>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button kind="ghost" className="px-8" href="/start-campaign">
          Create campaign
        </Button>
      </div>
      <Heading number={4}>YourCampaign</Heading>
      <CampaignGrid type="not-default">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center">
        <Button kind="ghost" className="px-8 mx-auto">
          <span>See more</span>
          <IconPlusSmall></IconPlusSmall>
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
