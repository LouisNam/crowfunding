import React from "react";
import Search from "./Search";
import { Button } from "components/button";
import Fund from "./Fund";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/logo.png 2x" alt="crowdfunding-logo" />
        <div className="max-w-[458px] w-full">
          <Search></Search>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <Fund></Fund>
        <Button className="bg-secondary px-7">Start a campaign</Button>
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
