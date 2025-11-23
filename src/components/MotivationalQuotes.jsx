import { useEffect, useState } from "react";
import { QUOTES } from "../utils/quotes";

const STORAGE_KEY = "motivational_quote_index";

export default function MotivationalQuotes() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const prevIndexString = sessionStorage.getItem(STORAGE_KEY);
    const prevIndex = prevIndexString !== null ? Number(prevIndexString) : null;

    let newIndex;
    // Prevent an infinite loop when QUOTES have only one item
    if (QUOTES.length <= 1) {
      newIndex = 0;
    } else {
      do {
        newIndex = Math.floor(Math.random() * QUOTES.length);
      } while (prevIndex !== null && newIndex === prevIndex);
    }

    setCurrentIndex(newIndex);
    sessionStorage.setItem(STORAGE_KEY, String(newIndex));

    setFade(true);
  }, []);

  if (currentIndex === null) {
    return null;
  }

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
