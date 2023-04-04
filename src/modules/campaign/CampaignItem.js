import React from "react";
// import PropsTypes from "prop-types";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>Together we can create access for everyone!</CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta amount="173" text="Total backers"></CampMeta>
        </div>
        <CampAuthor author="Nill"></CampAuthor>
      </div>
    </div>
  );
};

CampaignItem.propTypes = {
  // children: PropsTypes.node.isRequired,
  // className: PropsTypes.string,
};

export default CampaignItem;
