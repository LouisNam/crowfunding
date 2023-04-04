import SideBar from "modules/dashboard/SideBar";
import TopBar from "modules/dashboard/TopBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <TopBar></TopBar>
      <div>
        <SideBar></SideBar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
