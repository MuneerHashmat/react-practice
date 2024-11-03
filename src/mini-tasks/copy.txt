import { useState } from "react";
import data from "../quiz.json";
import { useEffect } from "react";

const Quiz = () => {
  const [idx, setIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState("");
  const currentItem = data[idx];
  const totalQuestions = data.length;
  const correctAnswers = totalScore / 10;
  const wrongAnwers = data.length - totalScore / 10;

  const handleAnswer = (choice) => {
    setAnswered(true);
    setAnswer(choice);
  };

  useEffect(() => {
    console.log(totalScore);
  }, [totalScore]);

  const handleOnClick = () => {
    if (answer === currentItem.correctAnswer) {
      setTotalScore((prev) => prev + 10);
    }
    if (idx <= data.length - 1) {
      setIdx((prev) => prev + 1);
    }
    setAnswered(false);
    setAnswer("");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {idx == data.length ? (
        <div className="bg-red-400 w-1/2 p-4 h-[70vh]">
          <h1 className="text-center font-semibold text-2xl">Finished!</h1>
          <div className="mt-7 text-xl">
            <p>Total Questions: {totalQuestions}</p>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Wrong Answers: {wrongAnwers}</p>
            <p>Total Score: {totalScore}</p>
          </div>
        </div>
      ) : (
        <div className="bg-red-400 w-1/2 h-[70vh] p-4">
          <h1 className="text-center font-semibold text-2xl">
            {currentItem.question}
          </h1>
          <div className="flex flex-col gap-4 mt-7 font-semibold">
            {currentItem.choices.map((choice) => (
              <div
                key={choice}
                onClick={() => handleAnswer(choice)}
                className={`${
                  answer === choice ? `bg-purple-600` : `bg-purple-300`
                } p-1 rounded-md cursor-pointer`}
              >
                {choice}
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end mt-7">
            <button
              onClick={handleOnClick}
              disabled={!answered}
              className={`${
                answered
                  ? `bg-purple-600 cursor-pointer`
                  : `bg-purple-300 cursor-not-allowed text-gray-600`
              } px-2 py-1 rounded-md`}
            >
              {idx == data.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
