import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const userNameRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    const userName = userNameRef.current.value.trim();

    if (userName) {
      localStorage.setItem("userName", userName);
      navigate("/start", { replace: true });
    } else {
      userNameRef.current.value = "";
      alert("Please enter your name!");
    }
  };

  return (
    <div className="bg-softPink w-full h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-lora text-4xl mb-6 lg:text-6xl">
          What is your name?
        </h1>
        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            ref={userNameRef}
            aria-label="User name"
            className="flex-1 border-b-2 outline-none text-2xl lg:text-4xl text-center font-inter"
          />
          <button
            onClick={handleClick}
            aria-label="Submit name"
            className="cursor-pointer"
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
