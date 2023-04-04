import Overlay from "components/common/Overlay";
import SideBar from "modules/dashboard/SideBar";
import TopBar from "modules/dashboard/TopBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <Overlay></Overlay>
      <TopBar></TopBar>
      <div className="flex items-start gap-x-10">
        <SideBar></SideBar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
