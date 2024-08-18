import { useState } from "react";
import quotes from "../../quotes.json";

const LoadMore = () => {
  const [lastIndex, setLastIndex] = useState(50);
  const currentItems = quotes.slice(0, lastIndex);
  const [loading, setLoading] = useState(false);
  console.log(quotes.length);

  const handleOnClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLastIndex((prev) => {
        if (prev + 50 > quotes.length) {
          return quotes.length;
        }
        return prev + 50;
      });
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="w-[60vw] mx-auto">
      <div className="w-[60vw] mt-7 flex flex-col gap-4 mx-auto">
        {currentItems.map((item, index) => (
          <div key={index} className="p-1 bg-red-400 rounded-md w-full">
            {index + 1} {item.quote}
          </div>
        ))}
      </div>

      {lastIndex < quotes.length && (
        <button
          onClick={handleOnClick}
          className="px-2 py-1 mt-5 bg-blue-400 rounded-md"
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default LoadMore;
