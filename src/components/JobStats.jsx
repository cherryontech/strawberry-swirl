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

  const totalNumOfSavedJobs = (
    JSON.parse(localStorage.getItem("savedJobs")) || []
  ).length;

  const totalNumOfApps =
    (JSON.parse(localStorage.getItem("applications")) || []).length +
    totalNumOfSavedJobs;

  return (
    <div className="rounded-3xl bg-white shadow-md px-8 py-10">
      <div className="flex flex-col gap-4 pb-2">
        <div className="w-full flex">
          <h6 className="w-1/3 text-bordeaux">{totalNumOfSavedJobs}</h6>
          <h6 className="w-2/3 text-bordeaux">Saved</h6>
        </div>

        <div className="w-full flex">
          <h6 className="w-1/3 text-bordeaux">{getStatusAmt("Applied")}</h6>
          <h6 className="w-2/3 text-bordeaux">Applied</h6>
        </div>

        <div className="w-full flex">
          <h6 className="w-1/3 text-bordeaux">
            {getStatusAmt("Interviewing")}
          </h6>
          <h6 className="w-2/3 text-bordeaux">Interviewing</h6>
        </div>

        <div className="w-full flex">
          <h6 className="w-1/3 text-bordeaux">{getStatusAmt("Rejected")}</h6>
          <h6 className="w-2/3 text-bordeaux">Rejected</h6>
        </div>

        <div className="w-full flex">
          <h6 className="w-1/3 text-bordeaux">{getStatusAmt("Offers")}</h6>
          <h6 className="w-2/3 text-bordeaux">Offers</h6>
        </div>
      </div>
      <div className="w-full flex border-t border-deepOrange pt-2">
        <h6 className="w-1/3 text-deepOrange font-semibold">
          {totalNumOfApps}
        </h6>
        <h6 className="w-2/3 text-deepOrange font-semibold">Total No.</h6>
      </div>
    </div>
  );
};

export default Statuses;
