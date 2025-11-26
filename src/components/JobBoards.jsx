import React from "react";
import feather from "../assets/feather.png";

import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const JobBoards = ({ heading, data }) => {
  if (!heading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-bordeaux leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
            Related Job Boards
          </h3>
          <div className="flex items-start justify-start space-y-2 align-middle m-5 h-[80%] gap-5 px-10">
            <img
              src={feather}
              alt="Feather image"
              className="w-[35px] h-[47px] opacity-100"
            />
            <h5 className="text-[#4E1303] ml-auto mr-auto text-left">
              Click a filter to find career field specific job boards!
            </h5>
          </div>
        </div>
      </>
    );
  }

  const links = data[heading];

  return (
    <>
      <h3 className=" text-bordeaux  weight-400  leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8 text-center inline-block">
        {heading === "Project Management" ? "PM" : heading} Related Job Boards
      </h3>
      <div>
        <ul className=" w-fit mt-10 space-y-2 text-left">
          {links.map((item) => (
            <li
              key={uuidv4()}
              className="flex flex-wrap item-start justify-start mt-8 px-10 gap-5"
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
                className="font-inter text-[#4E1303] font-medium text-[27px] leading-none tracking-normal underline"
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
