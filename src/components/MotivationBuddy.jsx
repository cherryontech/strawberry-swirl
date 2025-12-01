import React from "react";
import MotivationalQuotes from "./MotivationalQuotes";
import MotivationIcon from "./MotivationIcon.jsx";
import ProgressSection from "./ProgressSection.jsx";

const MotivationBuddy = () => {
  const total = 50;
  const applicationsCount = (
    JSON.parse(localStorage.getItem("applications")) || []
  ).length;

  return (
    <div className="w-1/2 rounded-3xl bg-white shadow-md px-14 py-12">
      <div className="flex flex-col">
        <h4 className="text-bordeaux font-semibold mb-8 text-center">
          Your Motivation Buddy
        </h4>
        <MotivationIcon applicationsCount={applicationsCount} />
        <MotivationalQuotes />
        <ProgressSection applicationsCount={applicationsCount} total={total} />
      </div>
    </div>
  );
};

export default MotivationBuddy;
