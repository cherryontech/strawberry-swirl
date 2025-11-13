import { useEffect, useState } from "react";
import { QUOTES } from "../utils/quotes";

export default function MotivationalQuotes() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * QUOTES.length),
  );
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * QUOTES.length);
          } while (newIndex === prevIndex); // ensure no immediate repeat
          return newIndex;
        });
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { q, a } = QUOTES[currentIndex];

  return (
    <div className="flex flex-col justify-start items-left rounded-2xl bg-linear-to-r from-gray-50 to-white shadow-md">
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xl md:text-2xl text-center m-4 mt-5 font-lora">
          {q}
        </p>
        <p className="text-lg md:text-xl text-center mb-4 font-lora">- {a}</p>
      </div>
    </div>
  );
}
