import PropTypes from "prop-types";

import { FaRegStickyNote } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const SavedJob = ({ id, company, role, link, notes, onEdit, onDelete }) => {
  return (
    <div className="flex items-center gap-2 w-full pt-4 pb-2 border-b border-backgroundColor">
      <p className="w-1/3 truncate">{company}</p>
      <p className="w-1/3 truncate">{role}</p>
      <p className="w-1/3 truncate">{link}</p>
      <div className="flex items-center gap-2 w-24 justify-end">
        {notes && (
          <button>
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
