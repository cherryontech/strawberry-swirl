import { useEffect, useState } from "react";

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
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://zenquotes.io/api/quotes"),
        );

        const result = await res.json();
        const data = JSON.parse(result.contents);
        console.log("Fetched quotes via proxy:", data);
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
    <div className="flex flex-col justify-center items-center bg-rose-50 ">
      <div
        className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0 "}`}
      >
        <p className="text-xl md:text-2xl text-center font-bold text-rose-500 m-4 mt-50">
          {q}
        </p>
        <p className="text-lg md:text-xl text-center font-bold text-rose-500  mb-4">
          - {a}
        </p>
      </div>
    </div>
  );
}
