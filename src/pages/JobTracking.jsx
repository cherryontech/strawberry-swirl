import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import { NavLink } from "react-router";

const JobTracking = () => {
  return (
    <div className=" bg-softPink flex flex-col items-left justify-start p-5 gap-5">
      <div className="flex flex-row">
        
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl  font-lora border border-none rounded-3xl p-8 w-1/2  text-left hover:border-2 hover:border-solid hover:border-blue-500">
            Job Tracking
          </div>
        
        <NavLink to={"/"} className="w-1/4 gap-5">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl font-lora border border-none rounded-3xl p-8 text-left hover:border-2 hover:border-solid hover:border-blue-500 hover:underline hover:decoration-blue-500">
            Home
          </div>
        </NavLink>
        <NavLink to={"/resources"} className="w-1/4 gap-5">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl font-lora border border-none rounded-3xl p-8 text-left hover:border-2 hover:border-solid hover:border-blue-500 hover:underline hover:decoration-blue-500">
            Resources
          </div>
        </NavLink>
      </div>
      <div className="flex flex-row">
        <div className="w-4/5 p-5 m-3 flex flex-row rounded-3xl">
          <ApplicationForm />
        </div>
        <div className="w-1/5 flex flex-col m-3 p-5 ">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md font-lora border border-none hover:border-solid hover:border-blue-500 w-full h-1/2 p-5 m-3 rounded-3xl"></div>
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md font-lora border border-none hover:border-solid hover:border-blue-500 w-full h-1/2 p-5 m-3 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default JobTracking;
