import React from "react";
import feather from "../assets/feather.png";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Article = ({ heading, data }) => {
  if (!heading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-bordeaux leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
            Related Articles
          </h3>
          <div className="flex items-start justify-start space-y-2 align-middle m-5 h-[80%] gap-5 px-10">
            <img
              src={feather}
              alt="Feather image"
              className="w-[35px] h-[47px] opacity-100"
            />
            <h5 className="text-[#4E1303] ml-auto mr-auto text-left">
              Click a filter to find career field specific articles!
            </h5>
          </div>
        </div>
      </>
    );
  }

  const links = data[heading];

  return (
    <>
      <h3 className="text-bordeaux leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
        {heading === "Project Management" ? "PM" : heading} Related Articles
      </h3>
      <div className="flex flex-row flex-wrap space-x-1 justify-center mt-5 mb-5 gap-8">
        {links.map((item) => (
          <div
            key={uuidv4()}
            className="w-[220px] h-[296px] bg-[#4E1303] rounded-[25px] shadow-[2px_2px_8px_0px_#00000040] mb-5"
          >
            <div className="w-[220px] h-[236px] bg-[#FBF9F3] rounded-t-[25px]"></div>
            <ul className="flex flex-wrap">
              <li className="ml-auto mr-auto mt-3">
                <a
                  href={item.articleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter font-bold text-[15px] leading-[102%] tracking-[-0.04em] align-middle text-[#FBF9F3]"
                >
                  {item.articleName}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

Article.propTypes = {
  heading: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Article;
