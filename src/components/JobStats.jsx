import React from "react";

const Statuses = () => {
  function getStatusAmt(status) {
    const applications = JSON.parse(localStorage.getItem("applications"));

    if (!applications) {
      return 0;
    }

    let amt = 0;

    for (const app of applications) {
      if (app.status === status) {
        amt++;
      }
    }

    return amt;
  }

  const totalNumOfApps = (
    JSON.parse(localStorage.getItem("applications")) || []
  ).length;

  const totalNumOfSavedJobs = (
    JSON.parse(localStorage.getItem("savedJobs")) || []
  ).length;

  return (
    <div className="flex flex-col gap-6 w-1/4">
      {/* Statuses */}
      <div className="rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
        <div className="font-inter text-2xl">
          {String(totalNumOfSavedJobs).padStart(2, "0")} Saved
        </div>
        <div className="font-inter text-2xl">
          {String(getStatusAmt("Applied")).padStart(2, "0")} Applied
        </div>
        <div className="font-inter text-2xl">
          {String(getStatusAmt("Interviewing")).padStart(2, "0")} Interviewing
        </div>
        <div className="font-inter text-2xl">
          {String(getStatusAmt("Rejected")).padStart(2, "0")} Rejected
        </div>
        <div className="font-inter text-2xl">
          {String(getStatusAmt("Offers")).padStart(2, "0")} Offers
        </div>
      </div>

      {/* Total number of applied jobs */}
      <div className="rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
        <p className="font-inter text-2xl">
          {String(totalNumOfApps).padStart(2, "0")} Total No.
        </p>
      </div>
    </div>
  );
};

export default Statuses;
