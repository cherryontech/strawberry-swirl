import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const ApplicationForm = ({ onSave, onClose }) => {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleAddClick = () => {
    const newApp = { id: uuidv4(), companyName, role, status, date, notes };
    onSave(newApp);

    // Reset fields
    setCompanyName("");
    setRole("");
    setStatus("");
    setDate("");
    setNotes("");
  };

  return (
    <div className="w-3/4 rounded-3xl bg-linear-to-r from-gray-50 to-white shadow-md p-8">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-lora font-medium text-2xl">
            Add new application
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-500 cursor-pointer hover:scale-105  transition-transform duration-200"
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
              className="font-inter px-4 py-2 border-2 border-zinc-500 rounded-2xl bg-white w-full focus:text-zinc-900 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="font-inter px-4 py-2 border-2 border-zinc-500 rounded-2xl bg-white w-full focus:text-zinc-900 focus:outline-none"
            />

            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="font-inter px-4 py-2 border-2 text-zinc-500 border-zinc-500 rounded-2xl bg-white w-full focus:text-zinc-900 focus:outline-none"
            />

            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="font-inter px-4 py-2 border-2  text-zinc-500 border-zinc-500 rounded-2xl bg-white w-full focus:text-zinc-900 focus:outline-none"
            >
              <option value="">Select Status</option>
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
              className="col-span-2 font-inter px-4 py-2 border-2 border-zinc-500 rounded-2xl bg-white w-full focus:text-zinc-900 focus:outline-none resize-none h-30"
            ></textarea>
          </div>

          <button
            className="mt-4 bg-linear-to-r from-gray-50 to-white shadow-md px-4 py-1 border-2 border-zinc-500 rounded-2xl text-zinc-500 flex items-center gap-2 text-xl cursor-pointer hover:scale-105  transition-transform duration-200"
            onClick={handleAddClick}
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

ApplicationForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ApplicationForm;
