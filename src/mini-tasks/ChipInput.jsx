import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ChipInput = () => {
  const [chips, setChips] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newChip = {
      id: uuidv4(),
      text: userInput,
    };
    setChips([...chips, newChip]);
    console.log(chips);
    setUserInput("");
  };

  const handleDelete = (id) => {
    setChips(chips.filter((item) => item.id !== id));
  };
  return (
    <div className="mt-20 w-[80vw] mx-auto">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          required
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-[700px] text-2xl rounded-lg outline-none border-2 border-gray-400 p-1"
        />
      </form>

      <div className="flex gap-3 mt-5 text-lg">
        {chips.map((chip) => (
          <div key={chip.id} className="flex gap-3">
            <p>{chip.text}</p>
            <button
              onClick={() => handleDelete(chip.id)}
              className="text-xl text-red-600 font-bold"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipInput;
