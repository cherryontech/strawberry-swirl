import React from "react";
import { GoArrowRight } from "react-icons/go";

const Start = () => {
  return (
    <div className="bg-backgroundColor w-full h-screen flex flex-col">
      <header className="flex items-center gap-2 p-4">
        <img src="/logo.png" alt="logo" className="w-20 h-20" />
        <h2 className="text-deepOrange">Motifly</h2>
      </header>

      <main className="flex flex-col justify-center items-center flex-1">
        <div className="text-left">
          <p className="font-lora text-6xl text-bordeaux">Welcome to</p>
          <h1 className="font-lora text-9xl mb-32 text-bordeaux">Motifly</h1>
        </div>

        <div className="flex items-center z-10">
          <p className="font-lora text-6xl me-4 text-deepOrange">
            let&apos;s get started!
          </p>
          <a href="/" className="mt-2 text-deepOrange">
            <GoArrowRight size={52} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Start;
