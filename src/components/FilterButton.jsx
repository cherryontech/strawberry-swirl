import React from "react";
import PropTypes from "prop-types";

const FilterButton = ({ item, onSelect, selected }) => {
  const isActive = selected === item.heading;
  return (
    <>
      <button
        key={item.heading}
        onClick={() => onSelect(item.heading)}
        type="button"
        className={`cursor-pointer py-2 px-5 font-inter font-medium text-[20px] leading-[0.95] align-middle shadow-[2px_2px_8px_0px_#00000040] rounded-[14px] transition-all duration-200
        active:scale-95
           ${isActive ? "bg-[#782E19] text-white" : "bg-white text-[#782E19]"}`}
      >
        {item.heading}
      </button>
    </>
  );
};

FilterButton.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default FilterButton;
