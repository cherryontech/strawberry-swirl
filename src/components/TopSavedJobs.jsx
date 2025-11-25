import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const TopSavedJobs = () => {
  const [topFourSavedJobs, setTopFourSavedJobs] = useState([]);
  const navigate = useNavigate();

  const handleNavigateSaved = () => {
    navigate("/jobtracking");
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedJobs")) || [];

    // Get last 4 jobs (most recent), then reverse to show newest first
    const lastFour = savedData.slice(-4).reverse();

    setTopFourSavedJobs(lastFour);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex item-start justify-start">
        <h4 className="text-bordeaux mb-8">Saved Jobs</h4>
        <IoIosArrowForward
          onClick={handleNavigateSaved}
          size={25}
          className="text-bordeaux text-center mt-1 cursor-pointer"
        />
      </div>

      <div className="w-full flex border-b border-deepOrange font-semibold pb-2 mb-4">
        <h5 className="w-1/3 text-deepOrange font-semibold">Company</h5>
        <h5 className="w-1/3 text-deepOrange font-semibold">Role</h5>
        <h5 className="w-1/3 text-deepOrange font-semibold">Link</h5>
      </div>
      {topFourSavedJobs.map((job) => (
        <div
          key={job.id}
          className="w-full flex gap-2 border-b border-gray-300 py-2"
        >
          <p className="w-1/3 truncate">{job.companyName}</p>
          <p className="w-1/3 truncate">{job.role}</p>
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/3 truncate text-blue-600"
          >
            {job.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default TopSavedJobs;
