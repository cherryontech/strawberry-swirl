import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ headings, onSelect }) => {
  return (
    <>
      {Object.keys(headings).map((heading) => (
        <button
          key={heading}
          onClick={() => onSelect(heading)}
          type="button"
          className="cursor-pointer px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          {heading}
        </button>
      ))}
    </>
  );
};

FilterButton.propTypes = {
  headings: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FilterButton;
