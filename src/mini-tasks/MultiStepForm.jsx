import { useState } from "react";
import formItems from "../formItems.json";

function MultiStepForm() {
  const [index, setIndex] = useState(0);
  const currItem = formItems[index];
  const initialState = { Name: "", Email: "", DOB: "", Password: "" };
  const [userInput, setUserInput] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIndex((prev) => prev + 1);
  };

  const handleOnChange = (key, value) => {
    setUserInput({ ...userInput, [key]: value });
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center text-2xl">
        <div>
          {index < formItems.length ? (
            <form className="flex flex-col gap-2" onSubmit={handleOnSubmit}>
              {index > 0 && (
                <button
                  onClick={() => setIndex((prev) => prev - 1)}
                  className="text-purple-600 underline w-[30px]"
                >
                  back
                </button>
              )}
              <label>{currItem.label}</label>
              <input
                type={currItem.type}
                value={userInput[currItem.label]}
                onChange={(e) => handleOnChange(currItem.label, e.target.value)}
                required
                className="border border-black p-1"
              />
              <button className="bg-purple-600 text-white px-3 py-2 rounded-md hover:scale-[1.01] transition-all">
                Next
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-center font-bold">Success!</h1>
              {Object.entries(userInput).map(([key, value]) => (
                <p key={key}>
                  <span>Your {key}: </span> <span>{value}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MultiStepForm;
