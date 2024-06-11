import { useState } from "react";

const StringTransform = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const handleUpperCase = () => {
    setResult(userInput.trim().toUpperCase());
  };

  const handleCamelCase = () => {
    let newStr = "";
    let str = userInput.trim().toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (i > 0 && str.charAt(i - 1) == " ") {
        newStr += str.charAt(i).toUpperCase();
      } else if (str.charAt(i) != " ") {
        newStr += str.charAt(i);
      }
    }
    setResult(newStr);
  };

  const handlePascalCase = () => {
    let newStr = "";
    let str = userInput.trim().toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (i == 0 || (i > 0 && str.charAt(i - 1) == " ")) {
        newStr += str.charAt(i).toUpperCase();
      } else if (str.charAt(i) != " ") {
        newStr += str.charAt(i);
      }
    }
    setResult(newStr);
  };

  const handleSnakeCase = () => {
    let newStr = "";
    let str = userInput.trim().toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == " ") {
        newStr += "_";
      } else {
        newStr += str.charAt(i);
      }
    }
    setResult(newStr);
  };

  const handleKebabCase = () => {
    let newStr = "";
    let str = userInput.trim().toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == " ") {
        newStr += "-";
      } else {
        newStr += str.charAt(i);
      }
    }
    setResult(newStr);
  };
  return (
    <div className="w-[50vw] mx-auto mt-10 flex flex-col items-center">
      <textarea
        placeholder="Enter a Sentence"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="bg-gray-100 border border-black p-1 w-full h-[100px]"
      ></textarea>
      <div className="flex gap-4 flex-wrap mt-5">
        <button
          onClick={handleUpperCase}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Upper Case
        </button>
        <button
          onClick={() => setResult(userInput.trim().toLowerCase())}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Lower Case
        </button>
        <button
          onClick={handleCamelCase}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Camel Case
        </button>
        <button
          onClick={handlePascalCase}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Pascal Case
        </button>
        <button
          onClick={handleSnakeCase}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Snake Case
        </button>
        <button
          onClick={handleKebabCase}
          className="border border-black bg-gray-300 p-2 shadow-md"
        >
          Kebab Case
        </button>
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold mb-2">Transformed String:</p>
        <p className="text-xl">{result}</p>
      </div>
    </div>
  );
};

export default StringTransform;
