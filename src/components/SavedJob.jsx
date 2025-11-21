import { useState } from "react";

import PropTypes from "prop-types";

import { FaRegStickyNote } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const SavedJob = ({ id, company, role, link, notes, onEdit, onDelete }) => {
  const [showNotes, setShowNotes] = useState(false);

  const handleShowNotes = () => {
    setShowNotes((prev) => !prev);
  };

  return (
    <div className="flex flex-col pt-4 pb-2 border-b border-backgroundColor">
      <div className="flex items-center w-full">
        <p className="w-1/3 truncate">{company}</p>
        <p className="w-1/3 truncate">{role}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/3 truncate"
        >
          {link}
        </a>

        <div className="flex items-center gap-2 w-24 justify-end">
          {notes && (
            <button onClick={handleShowNotes}>
              <FaRegStickyNote
                size={20}
                className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
                title="Notes"
              />
            </button>
          )}

          <button onClick={() => onEdit({ id, company, role, link, notes })}>
            <LuPencil
              size={20}
              className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
              title="Edit"
            />
          </button>

          <button onClick={() => onDelete(id)}>
            <FaRegTrashAlt
              size={20}
              className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
              title="Delete"
            />
          </button>
        </div>
      </div>

      {showNotes && (
        <div className="w-full pt-4">
          <p className="font-semibold text-deepOrange">Notes</p>
          <p className="whitespace-pre-line wrap-break-word">{notes}</p>
        </div>
      )}
    </div>
  );
};

SavedJob.propTypes = {
  id: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SavedJob;
