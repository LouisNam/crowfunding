import { IconClose, IconSearch } from "components/icons";
import { defaultImage } from "constants/global";
import React, { useState } from "react";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="flex items-center p-2 bg-white rounded-full shadow-sdPrimary">
        <div className="flex-1 pl-5 pr-2">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button
          type="button"
          className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0"
        >
          <IconSearch></IconSearch>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
            <h4 className="pl-4 text-sm font-medium underline cursor-pointer">
              See all 10,124 fundraisier
            </h4>
            <button
              type="button"
              className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error"
            >
              <IconClose></IconClose>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col mb-6 gap-y-5">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-5 text-sm font-semibold">Related searches</h3>
            <div className="flex flex-col text-sm gap-y-3 text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt="avatar"
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default Search;
