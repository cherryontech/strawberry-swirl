import { GoArrowRight } from "react-icons/go";

const Start = () => {
  return (
    <div className="bg-softPink w-full h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <p className="font-lora text-6xl">Welcome to</p>
          <h1 className="font-lora text-9xl mb-40">[name of app]</h1>
        </div>
        <div className="flex z-10">
          <p className="font-lora text-6xl mb-6 me-4">lets get started!</p>
          <a href="/" className="mt-2">
            <div className="bg-gray-50 rounded-2xl shadow-lg px-2">
              <GoArrowRight size={52} />
            </div>
          </a>
        </div>
        <div className="absolute bottom-50 right-20 bg-gray-50 rounded-4xl shadow-lg px-8 py-12">
          <p className="font-lora text-center">
            Motivation Buddy
            <br />
            Logo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
