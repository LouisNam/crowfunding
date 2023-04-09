import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { Fragment } from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  // const axiosPrivate = useAxiosPrivate();
  // useEffect(() => {
  //   async function fetchCampaigns() {
  //     try {
  //       const response = await axiosPrivate.get("/api/campaigns");
  //       console.log(
  //         "🚀 ~ file: DashboardPage.js:16 ~ fetchCampaigns ~ response:",
  //         response
  //       );
  //     } catch (error) {
  //       console.log(
  //         "🚀 ~ file: DashboardPage.js:17 ~ fetchCampaigns ~ error:",
  //         error
  //       );
  //     }
  //   }
  //   fetchCampaigns();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Fragment>
      <Heading number="4">Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
