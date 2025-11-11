import PropTypes from "prop-types";

import { FaRegStickyNote } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const SavedJob = ({ company, role, link }) => {
  return (
    <div className="flex items-center gap-2 w-full pt-4 pb-2 border-b border-backgroundColor">
      <p className="w-1/3 truncate">{company}</p>
      <p className="w-1/3 truncate">{role}</p>
      <p className="w-1/3 truncate">{link}</p>
      <div className="flex items-center gap-2 w-24 justify-end">
        <FaRegStickyNote
          size={20}
          className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
          title="Notes"
        />
        <LuPencil
          size={20}
          className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
          title="Edit"
        />
        <FaRegTrashAlt
          size={20}
          className="text-deepOrange cursor-pointer hover:scale-105 transition-transform duration-200"
          title="Delete"
        />
      </div>
    </div>
  );
};

SavedJob.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SavedJob;
