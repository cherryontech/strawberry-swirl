import { NavLink } from "react-router";
import { useEffect, useState } from "react";

import JobApplication from "../components/JobApplication";
import SavedJob from "../components/SavedJob";
import JobStats from "../components/JobStats";
import ApplicationForm from "../components/ApplicationForm";
import SavedJobForm from "../components/SavedJobForm";

import { IoIosAddCircleOutline } from "react-icons/io";

const JobTracking = () => {
  const [jobApps, setJobApps] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const storedApps = localStorage.getItem("applications");
    if (storedApps) {
      setJobApps(JSON.parse(storedApps));
    }
  }, []);

  useEffect(() => {
    const storedSavedJobs = localStorage.getItem("savedJobs");
    if (storedSavedJobs) {
      setSavedJobs(JSON.parse(storedSavedJobs));
    }
  }, []);

  // Logic for New Job Applications
  const [addingJobApp, setAddingJobApp] = useState(false);

  const handleAddJobApp = () => {
    setAddingJobApp(true);
  };

  const handleSaveNewJob = (newApp) => {
    const updatedApps = [...jobApps, newApp];
    setJobApps(updatedApps);
    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setAddingJobApp(false);
  };

  // Logic for New Saved Jobs
  const [addingSavedJob, setAddingSavedJob] = useState(false);

  const handleAddSavedJob = () => {
    setAddingSavedJob(true);
  };

  const handleSaveNewSavedJob = (newSavedJob) => {
    const updatedSavedJobs = [...savedJobs, newSavedJob];
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setAddingSavedJob(false);
  };

  return (
    <div className="bg-softPink min-h-screen px-12 py-8">
      {/* Header */}
      <header className="flex justify-between mb-12">
        <div className="w-1/2 bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8 text-left">
          Job Tracking
        </div>

        <nav className="flex gap-8">
          <NavLink to={"/"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Home
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
        {/* Jobs Dashboard / Job Forms*/}
        {addingJobApp ? (
          <ApplicationForm
            onSave={handleSaveNewJob}
            onClose={() => setAddingJobApp((prev) => !prev)}
          />
        ) : addingSavedJob ? (
          <SavedJobForm
            onSave={handleSaveNewSavedJob}
            onClose={() => setAddingSavedJob(false)}
          />
        ) : (
          <div className="w-3/4 rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
            {/* Recent Applications Section */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-lora font-medium text-2xl">
                  Recent Applications
                </h2>

                <button
                  onClick={handleAddJobApp}
                  className="bg-linear-to-r from-gray-50 to-white shadow-md px-4 py-2 border-2 border-zinc-500 rounded-3xl text-zinc-500 flex items-center gap-2 text-lg cursor-pointer hover:scale-105  transition-transform duration-200"
                >
                  <p>ADD</p>
                  <IoIosAddCircleOutline size={25} />
                </button>
              </div>

              <div className="w-full flex border-b-2 border-gray-300 pb-2 mb-4">
                <p className="w-1/4 font-lora font-semibold text-lg">Company</p>
                <p className="w-1/4 font-lora font-semibold text-lg">Role</p>
                <p className="w-1/4 font-lora font-semibold text-lg">
                  Date Applied
                </p>
                <p className="w-1/4 font-lora font-semibold text-lg">Status</p>
              </div>

              {jobApps.map((app) => (
                <JobApplication
                  key={app.id}
                  company={app.companyName}
                  role={app.role}
                  dateApplied={app.date}
                  status={app.status}
                />
              ))}
            </div>

            {/* Saved Jobs Section */}
            <div className="flex flex-col mt-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-lora font-medium text-2xl">Saved Jobs</h2>

                <button
                  onClick={handleAddSavedJob}
                  className="bg-linear-to-r from-gray-50 to-white shadow-md px-4 py-2 border-2 border-zinc-500 rounded-3xl text-zinc-500 flex items-center gap-2 text-xl cursor-pointer hover:scale-105  transition-transform duration-200"
                >
                  <p>ADD</p>
                  <IoIosAddCircleOutline size={25} />
                </button>
              </div>

              <div className="w-full flex border-b-2 border-gray-300 pb-2 mb-4">
                <p className="w-1/3 font-lora font-semibold text-lg">Company</p>
                <p className="w-1/3 font-lora font-semibold text-lg">Role</p>
                <p className="w-1/3 font-lora font-semibold text-lg">Link</p>
              </div>

              {savedJobs.map((job) => (
                <SavedJob
                  key={job.id}
                  company={job.companyName}
                  role={job.role}
                  link={job.link}
                />
              ))}
            </div>
          </div>
        )}

        {/* Job Statistic Component */}
        <JobStats />
      </main>
    </div>
  );
};

export default JobTracking;
