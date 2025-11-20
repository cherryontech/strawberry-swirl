import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const JobBoards = ({ heading, data }) => {
  if (!heading) {
    return (
      <>
        <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
          Related Job Boards
        </h1>
        <p className="text-gray-600 mt-5 font-medium font-lora">
          Please select a category above.
        </p>
      </>
    );
  }

  const links = data[heading];

  return (
    <>
      <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8 text-center inline-block">
        Related Job Boards
      </h1>

      <ul className="mt-5 space-y-2 w-full text-left pl-5">
        {links.map((item) => (
          <li key={uuidv4()}>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.jobPortalName}
            </h3>
            <a
              href={item.jobPortalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {item.jobPortalLink}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
JobBoards.propTypes = {
  heading: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default JobBoards;
