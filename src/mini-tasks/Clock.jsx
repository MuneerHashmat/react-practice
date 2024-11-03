import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const digitalClock = () => {
      let date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      let meridiem = "AM";

      if (hours >= 12) {
        if (hours > 12) hours -= 12;
        meridiem = "PM";
      } else if (hours == 0) {
        hours = 12;
        meridiem = "AM";
      }

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      const newTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;
      setTime(newTime);
    };
    digitalClock();
    const intervalId = setInterval(() => digitalClock(), 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" text-8xl font-bold">{time}</div>
    </div>
  );
};

export default Clock;
