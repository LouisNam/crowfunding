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
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "store/auth/auth-slice";

const sidebarLinks = [
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign" },
  { icon: <IconPayMent></IconPayMent>, title: "Payment", url: "/payment" },
  { icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw" },
  { icon: <IconProfile></IconProfile>, title: "Profile", url: "/profile" },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/exit",
    onClick: () => {},
  },
];

const SideBar = () => {
  const dispatch = useDispatch();
  const navLinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdPrimary";
  return (
    <div className="w-full md:w-[76px] md:min-h-[733px] rounded-3xl bg-white shadow-sdPrimary px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((item) => {
        if (item.url === "/logout") {
          return (
            <button
              type="button"
              onClick={() => dispatch(logOut())}
              className={`${navLinkClass} text-iconColor`}
              key={item.title}
            >
              <span>{item.icon}</span>
              <span className="md:hidden">{item.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={item.url}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
                : `${navLinkClass} text-iconColor`
            }
          >
            <span>{item.icon}</span>
            <span className="md:hidden">{item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
