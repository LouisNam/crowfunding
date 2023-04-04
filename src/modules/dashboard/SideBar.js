import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayMent,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const sidebarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign" },
  { icon: <IconPayMent></IconPayMent>, title: "Payment", url: "/payment" },
  { icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw" },
  { icon: <IconProfile></IconProfile>, title: "Profile", url: "/profile" },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/#",
    onClick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/#",
    onClick: () => {},
  },
];

const SideBar = () => {
  return (
    <div className="w-full md:w-[76px] md:min-h-[733px] rounded-3xl bg-white shadow-sdPrimary px-[14px] py-10 flex flex-col">
      {sidebarLinks.map((item) => (
        <NavLink
          to={item.url}
          key={item.title}
          className={classNames(
            "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-iconColor last:mt-auto last:bg-white last:shadow-sdPrimary",
            ({ isActive }) => (isActive ? "bg-primary" : "")
          )}
        >
          <span>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
