import { NavLink } from "react-router";

import JobApplication from "../components/JobApplication";
import SavedJob from "../components/SavedJob";
import MotivationBuddy from "../components/MotivationBuddy";

const Home = () => {
  const username = localStorage.getItem("userName");

  return (
    <div className="bg-softPink min-h-screen px-12 py-8">
      {/* Header */}
      <header className="flex justify-between mb-12">
        <div className="w-1/2 bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8 text-left">
          Hi {username}!
        </div>

        <nav className="flex gap-8">
          <NavLink to={"/jobtracking"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Job Tracking
            </div>
          </NavLink>
          <NavLink to={"/resources"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Resources
            </div>
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-row gap-8 items-start">
        {/* Jobs Dashboard */}
        <div className="w-1/2 rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
          {/* Recent Applications Section */}
          <div className="flex flex-col">
            <h2 className="font-lora font-medium text-2xl mb-8">
              Recently Applied
            </h2>

            <div className="w-full flex border-b-2 border-gray-300 pb-2 mb-4">
              <p className="w-1/4 font-lora font-semibold text-lg">Company</p>
              <p className="w-1/4 font-lora font-semibold text-lg">Role</p>
              <p className="w-1/4 font-lora font-semibold text-lg">
                Date Applied
              </p>
              <p className="w-1/4 font-lora font-semibold text-lg">Status</p>
            </div>

            <JobApplication />
            <JobApplication />
            <JobApplication />
            <JobApplication />
          </div>

          {/* Saved Jobs Section */}
          <div className="flex flex-col mt-8">
            <h2 className="font-lora font-medium text-2xl mb-8">Saved Jobs</h2>

            <div className="w-full flex border-b-2 border-gray-300 pb-2 mb-4">
              <p className="w-1/3 font-lora font-semibold text-lg">Company</p>
              <p className="w-1/3 font-lora font-semibold text-lg">Role</p>
              <p className="w-1/3 font-lora font-semibold text-lg">Link</p>
            </div>

            <SavedJob />
            <SavedJob />
            <SavedJob />
            <SavedJob />
          </div>
        </div>

        {/* Motivation Buddy Component */}
        <MotivationBuddy />
      </main>
    </div>
  );
};

export default Home;
