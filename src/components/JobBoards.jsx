import React from "react";
import feather from "../assets/feather.png";

import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const JobBoards = ({ heading, data }) => {
  if (!heading) {
    return (
      <>
        <h1 className="font-lora text-[#782E19] font-normal text-[33px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
          Related Job Boards
        </h1>
        <div className="flex items-start justify-center align-middle m-5 h-[80%]">
          <img
            src={feather}
            alt="Feather image"
            className="w-[35px] h-[47px] opacity-100"
          />
          <p className="text-[#4E1303] text-[25px] ml-4 font-medium  font-lora">
            Click a filter to find career field specific job boards!
          </p>
        </div>
      </>
    );
  }

  const links = data[heading];

  return (
    <>
      <h1 className="font-lora text-[#782E19] font-normal weight-400 text-[33px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8 text-center inline-block">
        {heading} Related Job Boards
      </h1>
      <div>
        <ul className=" w-fit mx-auto mt-10 space-y-2 text-left pl-5">
          {links.map((item) => (
            <li
              key={uuidv4()}
              className="flex flex-wrap item-start justify-start mt-8"
            >
              <img
                src={feather}
                alt="Feather image"
                className="w-[35px] h-[47px] opacity-100"
              />
              <a
                href={item.jobPortalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[#4E1303] font-medium text-[27px] leading-none tracking-normal underline align-middle ml-4 text-center"
              >
                {item.jobPortalName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
JobBoards.propTypes = {
  heading: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default JobBoards;
