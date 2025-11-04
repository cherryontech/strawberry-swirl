import { NavLink } from "react-router-dom";

import "../index.css";

import MotivationalQuotes from "../components/MotivationalQuotes";
import JobList from "../components/JobList";

function Home() {
  const username = localStorage.getItem("userName");
  return (
    <div className=" bg-softPink flex flex-col items-left justify-start p-5 gap-5">
      <div className="flex flex-row gap-5">
        <NavLink to={"/"} className="w-1/2">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl  font-lora border border-none rounded-3xl p-8 text-left hover:border-2 hover:border-solid hover:border-blue-500">
            Hi {username}
          </div>
        </NavLink>
        <NavLink to={"/jobtracking"} className="w-1/4">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl font-lora border border-none rounded-3xl p-8 text-left hover:border-2 hover:border-solid hover:border-blue-500 hover:underline hover:decoration-blue-500">
            Job Tracking
          </div>
        </NavLink>
        <NavLink to={"/resources"} className="w-1/4">
          <div className="bg-linear-to-r from-gray-50 to-white shadow-md ml-8 text-3xl font-lora border border-none rounded-3xl p-8 text-left hover:border-2 hover:border-solid hover:border-blue-500 hover:underline hover:decoration-blue-500">
            Resources
          </div>
        </NavLink>
      </div>

      <div className="flex sm:flex-row  flex-col items-center justify-start p-5 m-3 gap-5 w-full min-h-screen">
        <div className="w-1/2 h-1/2 rounded-3xl">
          <JobList />
        </div>
        <div className="w-1/2 h-1/2 rounded-3xl">
          <MotivationalQuotes />
        </div>
      </div>
    </div>
  );
}

export default Home;
