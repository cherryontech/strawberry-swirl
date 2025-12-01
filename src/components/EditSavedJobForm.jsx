import { useState } from "react";

import PropTypes from "prop-types";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const EditSavedJobForm = ({ job, onSave, onClose }) => {
  const [companyName, setCompanyName] = useState(job.company);
  const [role, setRole] = useState(job.role);
  const [link, setLink] = useState(job.link);
  const [notes, setNotes] = useState(job.notes);

  const handleSaveClick = () => {
    if (!companyName.trim() || !role.trim() || !link.trim()) {
      alert("Please fill out Company, Role, and Link.");
      return;
    }

    const newSavedJob = { id: job.id, companyName, role, link, notes };
    onSave(newSavedJob);
  };

  return (
    <div className="w-4/5 rounded-3xl bg-white shadow-md p-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-bordeaux font-medium">Save new job</h4>

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
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

            <input
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="col-span-2 font-inter px-4 py-2 border-[1.5px] border-bordeaux rounded-2xl bg-white text-bordeaux focus:outline-deepOrange"
            />

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

EditSavedJobForm.propTypes = {
  job: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditSavedJobForm;
