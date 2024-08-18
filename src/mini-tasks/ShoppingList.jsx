import { useEffect } from "react";
import { useState } from "react";

const ShoppingList = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    const newItem = { id: Date.now(), content: item, marked: false };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleMarked = (id) => {
    setItems(
      items.map((item) => {
        return item.id == id ? { ...item, marked: !item.marked } : item;
      })
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id != id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/food/${userInput}`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (e) {
        console.log(e);
      }
    };

    if (userInput.length > 1) {
      fetchData();
    }
  }, [userInput]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="w-screen flex flex-col items-center gap-3 mt-10">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="outline-none border border-black text-lg p-2 w-[300px]"
        />
      </div>

      {userInput.length > 1 && (
        <div className="bg-gray-300 w-[300px] h-[150px] overflow-y-auto flex flex-col gap-1 text-lg">
          {data.map((item) => (
            <div
              onClick={() => handleAddItem(item)}
              key={item}
              className="cursor-pointer hover:bg-green-300 p-1"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-1 mt-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex w-[300px] bg-blue-300 text-lg justify-between px-3 py-2"
          >
            <button onClick={() => handleMarked(item.id)}>✔️</button>
            <p className={`${item.marked ? "line-through" : ""}`}>
              {item.content}
            </p>
            <button onClick={() => handleDelete(item.id)}>✖️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
