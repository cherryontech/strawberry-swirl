import Navbar from "../components/Navbar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

      <div className="flex flex-row items-center justify-center mt-5 ml-auto mr-auto gap-10">
        {Object.keys(jobLinksData).map((key) => (
          <FilterButton
            key={uuidv4()}
            item={{
              id: uuidv4(), // unique id for each filter button
              heading: key,
              links: jobLinksData[key],
            }}
            onSelect={handleSelect}
            selected={selectedFilterButton}
          />
        ))}
      </div>

      <div className="flex flex-row h-screen mt-8 ml-auto mr-auto bg-[#E2CAB9] min-h-screen w-full rounded-[25px]">
        <div className="flex flex-col items-center  justify-start mt-10 ml-auto mb-10 -mr-auto  w-[45%] bg-white rounded-[25px] overflow-y-auto scroll-smooth scrollbar-hide">
          <JobBoards heading={selectedFilterButton} data={jobLinksData} />
        </div>
        <div className="flex flex-col items-center justify-start mt-10 ml-auto mb-10 mr-auto w-[45%]  bg-white rounded-[25px] overflow-y-auto scroll-smooth scrollbar-hide">
          <Article heading={selectedFilterButton} data={jobArticlesData} />
        </div>
      </div>
    </div>
  );
};

export default Resources;
