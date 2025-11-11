import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Resources = () => {
  return (
    <div className="bg-softPink min-h-screen px-12 py-8">
      {/* Header */}
      <header className="flex justify-between mb-12">
        <div className="w-1/2 bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8 text-left">
          Resouces
        </div>

        <nav className="flex gap-8">
          <NavLink to={"/"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Home
            </div>
          </NavLink>
          <NavLink to={"/jobtracking"}>
            <div className="bg-linear-to-r from-gray-50 to-white shadow-md text-3xl font-lora rounded-3xl p-8">
              Job Tracking
            </div>
          </NavLink>
        </nav>
      </header>
      <div className="flex flex-row items-center justify-center mt-5 ml-auto mr-auto gap-15">
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          Fintech
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          Marketing
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          Sales
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          PM
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          SWE
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tracking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          Full Stack
        </button>
        <button
          type="button"
          className="px-4 py-2 font-lora font-medium text-[20px] leading-[0.95] tsmcking-[-0.04em] align-middle bg-[#D9D9D9] shadow-sm rounded-[9px]"
        >
          AI/ML
        </button>
      </div>
      <div className="flex flex-row h-screen gap-10 mt-8 ml-20 mr-20">
        <div className="flex flex-col items-center justify-start w-1/2 h-full bg-white rounded-4xl">
          <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
            Related Job Boards
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start w-1/2 h-full bg-white rounded-4xl">
          <h1 className="font-lora font-medium text-[36px] leading-[1.28] tracking-[-0.04em] align-middle hanging-punctuation mt-8">
            Related Articles
          </h1>
          <div className="flex flex-row flex-wrap ml-12 gap-5 mt-5">
            <div className="w-[260px] h-[296px] bg-white rounded-4xl shadow-md">
              <div className="w-[260px] h-[177px] bg-[#D9D9D9] rounded-t-4xl"></div>
              <p className="font-inter font-bold text-[15px] leading-[102%] tracking-[-0.04em] align-middle mt-2 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis illum maiores est qui rerum provident sit ipsam sint
                similique exercitationem.
              </p>
            </div>
            <div className="w-[260px] h-[296px] bg-white rounded-4xl shadow-md">
              <div className="w-[260px] h-[177px] bg-[#D9D9D9] rounded-t-4xl"></div>
              <p className="font-inter font-bold text-[15px] leading-[102%] tracking-[-0.04em] align-middle mt-2 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis illum maiores est qui rerum provident sit ipsam sint
                similique exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
