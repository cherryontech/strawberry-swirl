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
    <div className="flex flex-col justify-start items-left rounded-2xl">
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xl md:text-2xl text-center m-4 mt-5">
          <q>{q}</q>
        </p>
        <p className="text-base md:text-lg text-center font-light mb-4">- {a}</p>
      </div>
    </div>
  );
}
