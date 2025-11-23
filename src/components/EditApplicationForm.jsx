import { useState } from "react";
import PropTypes from "prop-types";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const EditApplicationForm = ({ job, onSave, onClose }) => {
  const [companyName, setCompanyName] = useState(job.company);
  const [role, setRole] = useState(job.role);
  const [jobType, setJobType] = useState(job.jobType);
  const [status, setStatus] = useState(job.status);
  const [date, setDate] = useState(job.dateApplied);
  const [notes, setNotes] = useState(job.notes);

  const handleSaveClick = () => {
    const finalStatus = status || "Applied";
    let finalDate = date;

    if (!date) {
      const today = new Date();
      const localYear = today.getFullYear();
      const localMonth = today.getMonth() + 1;
      const localDay = today.getDate();
      finalDate = `${localYear}-${localMonth}-${localDay}`;
    }

    const newApp = {
      id: job.id,
      companyName,
      role,
      jobType,
      status: finalStatus,
      date: finalDate,
      notes,
    };
    onSave(newApp);
  };

  return (
    <div className="w-4/5 rounded-3xl bg-white shadow-md p-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-bordeaux font-medium">Edit job application</h4>

          <button
            onClick={onClose}
            className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>

        {/* Application Form */}
        <div className="flex flex-col items-center">
          <div className="mx-auto grid grid-cols-2 gap-4 w-3/4">
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="col-span-2 font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

            <select
              name="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            >
              <option value="">Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>

            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            >
              <option value="">Application Status</option>
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Rejected">Rejected</option>
              <option value="Offers">Offers</option>
            </select>

            <textarea
              name="notes"
              id="notes"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="col-span-2 font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange resize-none h-30"
            ></textarea>
          </div>

          <button
            className="mt-4 bg-white shadow-md px-4 py-2 border-[1.5px] border-deepOrange rounded-3xl text-deepOrange font-inter font-medium flex justify-center items-center gap-2 text-sm cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={handleSaveClick}
          >
            <div className="flex items-center gap-2">
              <p>Save</p>
              <IoIosArrowDropright size={25} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

EditApplicationForm.propTypes = {
  job: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditApplicationForm;
