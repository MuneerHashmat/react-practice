import { useState } from "react";
import data from "../quiz.json";

const Quiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentItem = data[currentIdx];
  const [currentChoice, setCurrentChoice] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  const handleOnClick = () => {
    if (currentChoice === currentItem.correctAnswer) {
      setTotalScore((prev) => prev + 10);
    }
    if (currentIdx < data.length) {
      setCurrentIdx((prev) => prev + 1);
    }
    setCurrentChoice("");
  };

  return (
    <div className="w-1/2 h-[70vh] mx-auto mt-10 bg-gray-200 p-4 rounded-md">
      {currentIdx < data.length ? (
        <>
          <h1 className="text-xl font-bold">{currentItem.question}</h1>
          <div className="mt-5 flex flex-col gap-3">
            {currentItem.choices.map((choice) => (
              <div
                key={choice}
                onClick={() => setCurrentChoice(choice)}
                className={`p-1 rounded-md cursor-pointer hover:scale-[1.005] ${
                  currentChoice == choice ? " bg-amber-300" : "bg-slate-300"
                }`}
              >
                {choice}
              </div>
            ))}
          </div>
          <button
            onClick={handleOnClick}
            className={`${
              currentChoice.length > 0
                ? "bg-red-400 cursor-pointer"
                : "bg-slate-300 cursor-not-allowed text-gray-400"
            } rounded-md hover:scale-[1.005] mt-10 p-2`}
          >
            {currentIdx == data.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold">Finish!</h1>
          <div className="mt-10 flex flex-col gap-3">
            <p>Total Questions: {data.length}</p>
            <p> Corrent Answers: {totalScore / 10}</p>
            <p>Wrong Answers: {data.length - totalScore / 10}</p>
            Total Score: {totalScore}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
