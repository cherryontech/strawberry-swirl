import React from "react";

const Statuses = () => {
  return (
    <div className="flex flex-col gap-6 w-1/4">
      {/* Statuses */}
      <div className="rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
        <div className="font-inter text-2xl">00 Saved</div>
        <div className="font-inter text-2xl">00 Applied</div>
        <div className="font-inter text-2xl">00 Interviewing</div>
        <div className="font-inter text-2xl">00 Rejected</div>
        <div className="font-inter text-2xl">00 Offers</div>
      </div>

      {/* Total number of applied jobs */}
      <div className="rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
        <p className="font-inter text-2xl">00 Total No.</p>
      </div>
    </div>
  );
};

export default Statuses;
