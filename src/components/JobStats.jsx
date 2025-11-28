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

  const totalNumOfApps = (
    JSON.parse(localStorage.getItem("applications")) || []
  ).length;

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white shadow-md px-8 py-10">
        <div className="flex flex-col gap-4">
          <h6 className="text-deepOrange font-semibold text-center border-b-2 border-deepOrange pb-2">
            Application Status
          </h6>

          <div className="w-full flex">
            <h6 className="w-1/3 text-bordeaux font-medium">
              {totalNumOfSavedJobs}
            </h6>
            <h6 className="w-2/3 text-bordeaux font-medium">Saved</h6>
          </div>

          <div className="w-full flex">
            <h6 className="w-1/3 text-bordeaux font-medium">
              {getStatusAmt("Applied")}
            </h6>
            <h6 className="w-2/3 text-bordeaux font-medium">Applied</h6>
          </div>

          <div className="w-full flex">
            <h6 className="w-1/3 text-bordeaux font-medium">
              {getStatusAmt("Interviewing")}
            </h6>
            <h6 className="w-2/3 text-bordeaux font-medium">Interviewing</h6>
          </div>

          <div className="w-full flex">
            <h6 className="w-1/3 text-bordeaux font-medium">
              {getStatusAmt("Rejected")}
            </h6>
            <h6 className="w-2/3 text-bordeaux font-medium">Rejected</h6>
          </div>

          <div className="w-full flex">
            <h6 className="w-1/3 text-bordeaux font-medium">
              {getStatusAmt("Offers")}
            </h6>
            <h6 className="w-2/3 text-bordeaux font-medium">Offers</h6>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white shadow-md px-8 py-6">
        <div className="w-full flex">
          <h6 className="w-1/3 text-deepOrange font-semibold">
            {totalNumOfApps}
          </h6>
          <h6 className="w-2/3 text-deepOrange font-semibold">Total Apps</h6>
        </div>
      </div>
    </div>
  );
};

export default Statuses;
