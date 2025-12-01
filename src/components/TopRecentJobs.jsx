import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const TopRecentJobs = () => {
  const [recentSavedJobs, setRecentSavedJobs] = useState([]);
  const navigate = useNavigate();

  const handleNavigateRecent = () => {
    navigate("/jobtracking");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];

    // Sort jobs by dateApplied (newest first)
    const sorted = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );

    // Get top 4 most recent
    const topFour = sorted.slice(0, 4);

    setRecentSavedJobs(topFour);
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex item-start justify-start">
          <h4 className="text-bordeaux font-medium mb-8">Recently Applied</h4>
          <IoIosArrowForward
            onClick={handleNavigateRecent}
            size={25}
            className="text-bordeaux text-center mt-1 cursor-pointer"
          />
        </div>

        <div className="w-full flex border-b border-deepOrange pb-2">
          <h6 className="w-1/4 text-deepOrange font-semibold">Company</h6>
          <h6 className="w-1/4 text-deepOrange font-semibold">Role</h6>
          <h6 className="w-1/4 text-deepOrange font-semibold">Date Applied</h6>
          <h6 className="w-1/4 text-deepOrange font-semibold">Status</h6>
        </div>
      </div>
      {recentSavedJobs.map((job, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex items-center w-full border-b border-divderLines pt-4 pb-2">
            <p className="w-1/4 truncate text-richMahogany font-semibold">
              {job.companyName}
            </p>
            <p className="w-1/4 font-inter truncate">{job.role}</p>
            <p className="w-1/4 font-inter truncate">{job.date}</p>
            <p className="w-1/4 font-inter truncate">{job.status}</p>
          </div>
        </div>
      ))}
    </>
  );
};

TopRecentJobs.propTypes = {
  company: PropTypes.string,
  role: PropTypes.string,
  link: PropTypes.string,
};

export default TopRecentJobs;
