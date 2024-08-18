import { useEffect, useState } from "react";

const TableColor = () => {
  const arr = [];
  for (let i = 1; i <= 9; i++) {
    arr.push({ id: i, bg: false });
  }

  const [currentCell, setCurrentCell] = useState(0);
  const [cells, setCells] = useState(arr);
  useEffect(() => {
    console.log(cells);
  }, [cells]);

  const handleColorMe = () => {
    if (currentCell < 1 || currentCell > 9) {
      alert("please enter a valid value");
      return;
    }
    setCells(
      cells.map((cell) => {
        return cell.id == currentCell ? { ...cell, bg: true } : cell;
      })
    );
  };

  const handleClearMe = () => {
    setCells(
      cells.map((cell) => {
        return { ...cell, bg: false };
      })
    );
  };
  return (
    <div className="mt-20 flex flex-col items-center w-screen">
      <h1>Table Colorizer</h1>
      <div className="flex flex-col gap-4">
        <input
          type="number"
          onChange={(e) => setCurrentCell(e.target.value)}
          className="outline-none text-sm rounded-full border border-black px-2 py-1"
        />
        <div className="flex gap-3">
          <button onClick={handleColorMe} className="p-1 bg-blue-400">
            Color me
          </button>
          <button onClick={handleClearMe} className="p-1 bg-blue-400">
            Clear me
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3">
        {cells.map((item) => (
          <div
            key={item.id}
            className={`border border-black px-4 py-3 ${
              item.bg ? "bg-red-500" : "bg-white"
            }`}
          >
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableColor;
