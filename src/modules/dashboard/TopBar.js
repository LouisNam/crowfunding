import React from "react";
import Search from "./Search";
import { Button } from "components/button";
import Fund from "./Fund";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to={"/"} className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowdfunding-logo" />
        </Link>
        <div className="max-w-[458px] w-full">
          <Search></Search>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <Fund></Fund>
        <Button className="px-7" href="/start-campaign" kind="secondary">
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowdfunding-logo"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default TopBar;
