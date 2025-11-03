import { useEffect, useState } from "react";
import { ALL_ORIGINS_BASE_URL, QUOTES_API_URL } from "../utils/apiConfig";

const fallbackQuotes = [
  { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
  {
    q: "Act as if what you do makes a difference. It does.",
    a: "William James",
  },
  {
    q: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    a: "Winston Churchill",
  },
];

export default function MotivationalQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch(
          ALL_ORIGINS_BASE_URL + encodeURIComponent(QUOTES_API_URL),
        );

        const result = await res.json();
        const data = JSON.parse(result.contents);
        setQuotes(data.length ? data : fallbackQuotes);
      } catch (err) {
        console.error("Failed to fetch quotes, using fallback", err);
        setQuotes(fallbackQuotes);
      }
    };
    fetchQuotes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  if (!quotes.length) return null;

  const { q, a } = quotes[currentIndex];

  return (
    <div className="flex flex-col justify-start items-left rounded-2xl min-h-screen bg-linear-to-r from-gray-50 to-white shadow-md hover:border-2 hover:border-solid hover:border-blue-500">
      <h1 className="text-xl md:text-2xl text-left font-lora m-4 mt-5 hover:underline hover:decoration-blue-500">
        {" "}
        Motivation Buddy
      </h1>

      <div
        className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0 "}`}
      >
        <p className="text-xl md:text-2xl text-center m-4 mt-5 font-lora">
          {q}
        </p>
        <p className="text-lg md:text-xl text-center mb-4 font-lora">- {a}</p>
      </div>
    </div>
  );
}
