import Navbar from "../components/Navbar";
import { useState } from "react";

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
    <div className="bg-backgroundColor min-h-screen px-30 py-8">
      <Navbar />

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
