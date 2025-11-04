import PropTypes from "prop-types";

const SavedJob = ({ company, role, link }) => {
  return (
    <div className="w-full flex gap-2 border-b border-gray-300 pb-2 mb-4">
      <p className="w-1/3 font-inter truncate">{company || "Temp Company"}</p>
      <p className="w-1/3 font-inter truncate">{role || "Temp Role"}</p>
      <p className="w-1/3 font-inter truncate">{link || "Temp Link"}</p>
    </div>
  );
};

SavedJob.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SavedJob;
