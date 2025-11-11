import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import JobStats from "../components/JobStats";

import JobApplication from "../components/JobApplication";
import SavedJob from "../components/SavedJob";

import ApplicationForm from "../components/ApplicationForm";
import SavedJobForm from "../components/SavedJobForm";
import EditApplicationForm from "../components/EditApplicationForm";
import EditSavedJobForm from "../components/EditSavedJobForm";

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

  // Logic for Edit Job Application

  const [editingJobApp, setEditingJobApp] = useState(false);
  const [currentJobApp, setCurrentJobApp] = useState(null);

  const handleEditJobApp = (job) => {
    setCurrentJobApp(job);
    setEditingJobApp(true);
  };

  const handleSaveEditJobApp = (editedJob) => {
    const updatedApps = jobApps.map((app) =>
      app.id === editedJob.id ? editedJob : app,
    );
    setJobApps(updatedApps);
    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setEditingJobApp(false);
    setCurrentJobApp(null);
  };

  // Logic for Edit Saved Job
  const [editingSavedJob, setEditingSavedJob] = useState(false);
  const [currentSavedJob, setCurrentSavedJob] = useState(null);

  const handleEditSavedJob = (job) => {
    setCurrentSavedJob(job);
    setEditingSavedJob(true);
  };

  const handleSaveEditSavedJob = (editedJob) => {
    const updatedSavedJobs = savedJobs.map((job) =>
      job.id === editedJob.id ? editedJob : job,
    );
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setEditingSavedJob(false);
    setCurrentSavedJob(null);
  };

  // Logic for Delete Job App
  const handleDeleteJobApp = (id) => {
    const updatedApps = jobApps.filter((app) => app.id !== id);
    setJobApps(updatedApps);
    localStorage.setItem("applications", JSON.stringify(updatedApps));
  };

  // Logic for Delete Saved Job
  const handleDeleteSavedJob = (id) => {
    const updatedSavedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  // Logic for load more job apps
  const [numJobApps, setNumJobApps] = useState(8);

  const handleLoadMoreJobApps = () => {
    setNumJobApps((prev) => prev + 8);
  };

  // Logic for load more saved jobs
  const [numSavedJobs, setNumSavedJobs] = useState(4);

  const handleLoadMoreSavedJobs = () => {
    setNumSavedJobs((prev) => prev + 4);
  };

  return (
    <div className="bg-backgroundColor min-h-screen px-30 py-8">
      <Navbar />

      <main className="flex flex-row gap-8 items-start">
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
        ) : editingJobApp ? (
          <EditApplicationForm
            job={currentJobApp}
            onSave={handleSaveEditJobApp}
            onClose={() => setEditingJobApp(false)}
          />
        ) : editingSavedJob ? (
          <EditSavedJobForm
            job={currentSavedJob}
            onSave={handleSaveEditSavedJob}
            onClose={() => setEditingSavedJob(false)}
          />
        ) : (
          <div className="w-4/5 rounded-3xl bg-white shadow-md p-10">
            {/* Recent Applications Section */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-bordeaux font-medium">
                  Recent applications
                </h4>

                <button
                  onClick={handleAddJobApp}
                  className="bg-white shadow-md px-4 py-2 border-2 border-deepOrange rounded-3xl text-deepOrange font-inter font-medium flex justify-center items-center gap-2 text-sm cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <p>ADD</p>
                  <IoIosAddCircleOutline size={25} />
                </button>
              </div>

              <div className="w-full flex border-b border-deepOrange pb-2">
                <h6 className="w-1/4 text-deepOrange font-semibold">Company</h6>
                <h6 className="w-3/8 text-deepOrange font-semibold">Role</h6>
                <h6 className="w-1/6 text-deepOrange font-semibold">
                  Date Applied
                </h6>
                <h6 className="w-1/6 text-deepOrange font-semibold">Status</h6>
                <div className="w-24" /> {/* placeholder for icon column */}
              </div>

              {[...jobApps]
                .map((app, index) => ({ ...app, originalIndex: index }))
                .sort((a, b) => {
                  const dateDiff = new Date(b.date) - new Date(a.date);

                  if (dateDiff !== 0) {
                    return dateDiff;
                  }

                  return b.originalIndex - a.originalIndex;
                })
                .slice(0, numJobApps)
                .map((app) => (
                  <JobApplication
                    key={app.id}
                    id={app.id}
                    company={app.companyName}
                    role={app.role}
                    dateApplied={app.date}
                    status={app.status}
                    notes={app.notes}
                    onEdit={handleEditJobApp}
                    onDelete={handleDeleteJobApp}
                  />
                ))}

              {numJobApps < jobApps.length && (
                <button
                  onClick={handleLoadMoreJobApps}
                  className="mt-4 border border-deepOrange text-deepOrange px-4 py-2 rounded-3xl font-medium text-sm hover:scale-105 transition-transform duration-200 w-fit self-center cursor-pointer"
                >
                  Load More
                </button>
              )}
            </div>

            {/* Saved Jobs Section */}
            <div className="flex flex-col mt-8">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-bordeaux font-medium">Saved jobs</h4>
                <button
                  onClick={handleAddSavedJob}
                  className="bg-white shadow-md px-4 py-2 border-2 border-deepOrange rounded-3xl text-deepOrange font-inter font-medium flex justify-center items-center gap-2 text-sm cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <p>ADD</p>
                  <IoIosAddCircleOutline size={25} />
                </button>
              </div>

              <div className="w-full flex border-b border-deepOrange pb-2">
                <h6 className="w-1/3 text-deepOrange font-semibold">Company</h6>
                <h6 className="w-1/3 text-deepOrange font-semibold">Role</h6>
                <h6 className="w-1/3 text-deepOrange font-semibold">Link</h6>
                <div className="w-24" /> {/* placeholder for icon column */}
              </div>

              {[...savedJobs]
                .reverse()
                .slice(0, numSavedJobs)
                .map((job) => (
                  <SavedJob
                    key={job.id}
                    id={job.id}
                    company={job.companyName}
                    role={job.role}
                    link={job.link}
                    notes={job.notes}
                    onEdit={handleEditSavedJob}
                    onDelete={handleDeleteSavedJob}
                  />
                ))}

              {numSavedJobs < savedJobs.length && (
                <button
                  onClick={handleLoadMoreSavedJobs}
                  className="mt-4 border border-deepOrange text-deepOrange px-4 py-2 rounded-3xl font-medium text-sm hover:scale-105 transition-transform duration-200 w-fit self-center cursor-pointer"
                >
                  Load More
                </button>
              )}
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
