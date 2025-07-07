'use client'
import { useState } from "react";

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const generateQuote = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch('/api/generate-quote');
      const data = await response.json();
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      setQuote("Something went wrong. Please try again.");
      setAuthor("");
    }
    setIsDisabled(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors px-4">
      <div className="w-full max-w-md mx-auto p-8 rounded-3xl shadow-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-white/30">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900 dark:text-white tracking-tight font-sans">Quote Generator</h1>
        <div className="min-h-[120px] flex flex-col items-center justify-center mb-6 transition-all duration-300">
          {quote ? (
            <p className="text-xl font-medium text-gray-800 dark:text-gray-200 text-center animate-fadeIn">
              “{quote}”
              <br />
              <span className="block mt-4 text-base text-gray-500 dark:text-gray-400">— {author}</span>
            </p>
          ) : (
            <p className="text-lg text-gray-400 dark:text-gray-500 text-center">Click below to generate a quote!</p>
          )}
        </div>
        <button
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
          disabled={isDisabled}
          onClick={generateQuote}
        >
          {isDisabled ? "Generating..." : "Generate Quote"}
        </button>
      </div>
    </div>
  );
}
