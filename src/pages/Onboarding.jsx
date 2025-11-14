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
    <div className="bg-backgroundColor w-full min-h-screen flex flex-col">
      <header className="flex items-center gap-2 p-4">
        <img src="/logo.png" alt="logo" className="w-20 h-20" />
        <h2 className="text-deepOrange">Motifly</h2>
      </header>

      <main className="flex flex-col justify-center items-center flex-1 text-center space-y-8">
        <h1 className="text-bordeaux lg:text-6xl">What is your name?</h1>
        <div className="flex gap-2 w-full max-w-md text-bordeaux justify-center">
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
            <GoArrowRight size={50} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
