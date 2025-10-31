import React from "react";

const JobList = () => {
  return (
    <div className=" overflow-x-auto flex flex-col justify-start items-start min-h-screen rounded-2xl bg-amber-50">
      <h2 className="m-5 text-2xl font-bold">Recently applied</h2>
      <table className="m-4 border-collapse border-0 w-11/12 md:w-11/12 md:text-sm  text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-0 px-4 py-2 ">Company Name</th>
            <th className="border-0 px-4 py-2">Role</th>
            <th className="border-0 px-4 py-2">Status</th>
            <th className="border-0 px-4 py-2">Date</th>
          </tr>
        </thead>
      </table>

      <h2 className="m-5 text-2xl font-bold">Saved Jobs</h2>
      <table className="m-4 border-collapse border-0 w-11/12 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-0 px-4 py-2">Company Name</th>
            <th className="border-0 px-4 py-2">Role</th>
            <th className="border-0 px-4 py-2">Link</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default JobList;
