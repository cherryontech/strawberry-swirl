import React from "react";
import ApplicationForm from "./components/ApplicationForm";

const JobTracking = () => {
  return (
    <div className="flex flex-row items-center justify-start p-5 m-3 gap-5 bg-pink-100">
      <div className="w-1/2 h-1/2 rounded-2xl">
        <ApplicationForm />
      </div>
      <div className="w-1/2 h-1/2 rounded-2xl"></div>
    </div>
  );
};

export default JobTracking;
