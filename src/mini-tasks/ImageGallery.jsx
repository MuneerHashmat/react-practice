import { useState } from "react";
import images from "../images.json";
import { useEffect } from "react";

function ImageGallery() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1 == images.length ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1 == images.length ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <button onClick={handlePrev} className="bg-purple-600 p-1">
            Prev
          </button>
          <img
            key={currentIdx}
            src={images[currentIdx].img}
            alt="img"
            className="w-[500px] h-[500px]"
          />
          <button onClick={handleNext} className="bg-purple-600 p-1">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
