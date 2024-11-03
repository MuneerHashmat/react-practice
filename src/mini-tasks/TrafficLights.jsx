import { useEffect, useState } from "react";

const TrafficLights = () => {
  const durations = [5, 3, 2];
  const colors = ["red", "yellow", "green"];
  const [currIndex, setCurrIndex] = useState(0);
  const [seconds, setSeconds] = useState(durations[currIndex]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (seconds == 1) {
        let idx = currIndex + 1;
        if (idx >= 3) {
          idx = 0;
        }
        setCurrIndex(idx);
        setSeconds(durations[idx]);
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval1);
  }, [currIndex, seconds]);

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-5">
      <div className="mt-10 w-[150px] h-[400px] bg-black rounded-md flex flex-col justify-evenly items-center">
        {colors.map((color, index) => (
          <div
            key={color}
            className="w-[100px] h-[100px] rounded-full"
            style={{
              backgroundColor: currIndex == index ? `${color}` : "white",
            }}
          ></div>
        ))}
      </div>

      <h1 className="text-3xl font-bold">{seconds} seconds</h1>
    </div>
  );
};

export default TrafficLights;
