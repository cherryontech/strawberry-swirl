import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Article = ({ heading, data }) => {
  if (!heading) {
    return (
      <>
        <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
          Related Articles
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
      <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
        Related Articles
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-2 mt-5 mb-5">
        {links.map((item) => (
          <div
            key={uuidv4()}
            className="w-[260px] h-[296px] bg-white rounded-4xl shadow-md ml-auto mr-auto mb-5"
          >
            <div className="w-[260px] h-[177px] bg-[#D9D9D9] rounded-t-4xl"></div>
            <ul className="flex flex-wrap">
              <li className="ml-4 mt-5 space-y-2">
                <h3 className="text-lg  font-semibold font-lora text-gray-800 text-center block w-50 whitespace-normal break-words">
                  {item.articleName}
                </h3>
                <a
                  href={item.articleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lora underline leading-[102%] tracking-[-0.04em] text-center mt-1 block w-60 whitespace-normal break-words "
                >
                  {item.articleLink}
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
