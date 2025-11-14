import React, { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

import Article from "../components/Article";
import JobBoards from "../components/JobBoards";
import FilterButton from "../components/FilterButton";
import jobLinksData from "../utils/jobPortalsData.js";
import jobArticlesData from "../utils/jobArticles.js";

const Resources = () => {
  const [selectedFilterButton, setSelectedFilterButton] = useState(null);
  const handleSelect = (heading) => {
    setSelectedFilterButton(heading);
  };

  return (
    <div className="bg-softPink min-h-screen px-12 py-8">
      {/* Header */}
      <header className="flex justify-between mb-12">
        <div className="w-1/2 bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8 text-left">
          Resouces
        </div>

        <nav className="flex gap-8">
          <NavLink to={"/"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Home
            </div>
          </NavLink>
          <NavLink to={"/jobtracking"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Job Tracking
            </div>
          </NavLink>
        </nav>
      </header>
      <div className="flex flex-row items-center justify-center mt-5 ml-auto mr-auto gap-15">
        <FilterButton headings={jobLinksData} onSelect={handleSelect} />
      </div>

      <div className="flex flex-row h-screen gap-10 mt-8 ml-20 mr-20">
        <div className="flex flex-col items-center justify-start w-1/2 h-full bg-white rounded-4xl">
          <JobBoards heading={selectedFilterButton} data={jobLinksData} />
        </div>
        <div className="flex flex-col items-center justify-start w-1/2 h-full bg-white rounded-4xl overflow-y-auto scroll-smooth scrollbar-hide">
          <Article heading={selectedFilterButton} data={jobArticlesData} />
        </div>
      </div>
    </div>
  );
};

export default Resources;
