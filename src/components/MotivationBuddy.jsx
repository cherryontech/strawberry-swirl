import React from "react";
import MotivationalQuotes from "./MotivationalQuotes";

const MotivationBuddy = () => {
  return (
    <div className="w-1/2 rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
      <div className="flex flex-col">
        <h2 className="font-lora font-medium text-2xl mb-8">
          Motivation Buddy
        </h2>

        <MotivationalQuotes />
      </div>
    </div>
  );
};

export default MotivationBuddy;
