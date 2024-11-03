import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("#FFFFFF");

  const generateColor = () => {
    let color = "#";
    let chars = "ABCDEF0123456789";
    for (let i = 1; i <= 6; i++) {
      let idx = Math.floor(Math.random() * chars.length);
      color += chars.charAt(idx);
      setColor(color);
    }
  };

  return (
    <div
      className={`w-screen h-screen flex gap-3 justify-center items-center transition-colors`}
      style={{ backgroundColor: `${color}` }}
    >
      <button
        onClick={generateColor}
        className="bg-gray-300 p-3 rounded-md hover:scale-105 transition-all"
      >
        {color}
      </button>
      <p className="text-xl">👈 Click</p>
    </div>
  );
};

export default BackgroundChanger;
