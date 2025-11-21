import React from "react";
import MotivationalQuotes from "./MotivationalQuotes";
import MotivationIcon from "./MotivationIcon.jsx";
import ProgressSection from "./ProgressSection.jsx";

const MotivationBuddy = () => {
  const total = 50;
  const applied = 5; // TODO: Receive the actual application count from the parent component

  return (
    <div className="w-1/2 rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md px-14 py-12">
      <div className="flex flex-col">
        <h2 className="text-bordeaux font-medium text-2xl mb-8 text-center">
          Your Motivation Buddy
        </h2>
        <MotivationIcon applied={applied}/>
        <MotivationalQuotes />
        <ProgressSection applied={applied} total={total} />
      </div>
    </div>
  );
};

export default MotivationBuddy;
