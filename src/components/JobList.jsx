import React from "react";

const JobList = () => {
  return (
    <div className=" overflow-x-auto flex flex-col justify-start items-start min-h-screen rounded-2xl bg-linear-to-r from-gray-50 to-white shadow-md hover:border-2 hover:border-solid hover:border-blue-500">
      <h2 className="ml-5 mt-5 text-2xl font-lora hover:underline hover:decoration-blue-500">
        Recently applied
      </h2>
      <table className="m-4 border-collapse border-none w-11/12 md:w-11/12 md:text-sm  text-left text-sm">
        <thead>
          <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
            <th className="border-0 px-4 py-2 font-normal ">company</th>
            <th className="border-0 px-4 py-2 font-normal">job title </th>
            <th className="border-0 px-4 py-2 font-normal">status</th>
            <th className="border-0 px-4 py-2 font-normal">date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
            <td className="border-0 px-4 py-2 ">company</td>
            <td className="border-0 px-4 py-2">job title </td>
            <td className="border-0 px-4 py-2">status</td>
            <td className="border-0 px-4 py-2">date</td>
          </tr>
        </tbody>
      </table>

      <h2 className="ml-5 mt-5 text-2xl font-lora hover:underline hover:decoration-blue-500">
        Saved Jobs
      </h2>
      <table className="m-4 border-collapse border-none w-11/12 text-left">
        <thead>
          <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
            <th className="border-0 px-4 py-2 font-normal">company</th>
            <th className="border-0 px-4 py-2 font-normal">job title</th>
            <th className="border-0 px-4 py-2 font-normal">link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:border-blue-500 hover:border-2 border-b border-gray-200">
            <td className="border-0 px-4 py-2">company</td>
            <td className="border-0 px-4 py-2">job title</td>
            <td className="border-0 px-4 py-2">link</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
