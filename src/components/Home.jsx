import React from "react";
import MotivationalQuotes from "./MotivationalQuotes";
import JobList from "./JobList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start p-5 m-3 gap-5 bg-pink-100">
      <h1 className="text-2xl font-bold"> Hi [User]</h1>
      <div className="flex sm:flex-row  flex-col items-center justify-start p-5 m-3 gap-5 w-full min-h-screen">
        <div className="w-1/2 h-1/2 rounded-2xl">
          <JobList />
        </div>
        <div className="w-1/2 h-1/2 rounded-2xl">
          <MotivationalQuotes />
        </div>
      </div>
    </div>
  );
};

export default Home;
