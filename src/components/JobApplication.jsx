import React from "react";
import PropTypes from "prop-types";

const JobApplication = ({ company, role, dateApplied, status }) => {
  return (
    <div className="flex gap-2 w-full py-2 border-b border-gray-200">
      <p className="w-1/4 font-inter truncate">{company || "Temp Company"}</p>
      <p className="w-1/4 font-inter truncate">{role || "Temp Role"}</p>
      <p className="w-1/4 font-inter truncate">{dateApplied || "Temp Date"}</p>
      <p className="w-1/4 font-inter truncate">{status || "Applied"}</p>
    </div>
  );
};

JobApplication.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  dateApplied: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default JobApplication;
