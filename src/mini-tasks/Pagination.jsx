import { useState } from "react";
import { foods } from "../data1";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const lastItemIndex = currentPage * itemsPerPage; //6
  const firstItemIndex = lastItemIndex - itemsPerPage; //0
  const currentItems = foods.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(foods.length / itemsPerPage);
  console.log(totalPages);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <table>
        <tr className="bg-yellow-200">
          <th>#</th>
          <th>FOOD</th>
          <th>PRICE</th>
        </tr>
        {currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>

      <div className="mt-5 flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            className="bg-red-400 py-1 px-4 rounded-md border border-black"
            style={{ backgroundColor: page == currentPage ? "#c75eff" : null }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex gap-2 text-xl font-bold mt-5 items-center">
        <button
          disabled={currentPage == 1 ? true : false}
          style={{ color: currentPage == 1 ? "gray" : "black" }}
          className="p-1 rounded-md border border-gray-400"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <p>{currentPage}</p>
        <button
          disabled={currentPage == totalPages ? true : false}
          style={{ color: currentPage == totalPages ? "gray" : "black" }}
          className="p-1 rounded-md border border-gray-400"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
