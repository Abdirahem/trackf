import React, { useState, useEffect } from "react";
// import axios from 'axios'; // If using axios

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // Using Fetch API
      const response = await fetch("http://localhost:3000/transactions"); // Replace with your endpoint
      const data = await response.json();
      console.log(data);
      setData(data);

      // Using axios (optional)
      // const response = await axios.get('http://localhost:3000/your-endpoint');
      // setData(response.data);
    };

    fetchData();
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="relative">
      <div className="profile flex items-center gap-x-4  mx-12 mt-5 flex-col">
        <div className="flex gap-x-4 items-center justify-end">
          <img
            src=""
            className="bg-blue-700 rounded-full "
            width={50}
            height={50}
          />
          <span> Mustaf Ahmed</span>
        </div>
        <div className="mt-10">
          <button className="bg-blue-700 text-white p-2 rounded-md ">
            <i className="fa-solid  fa-plus"></i> Add new Transction
          </button>
        </div>
      </div>

      <main className="mt-20 m-auto bg-white w-10/12 p-12 rounded-md flex justify-start gap-x-10">
        {/* table */}
        <table className="w-full  text-left">
          <thead className="">
            <tr>
              <th className="p-2 text-sm">#ID</th>
              <th className="p-2 text-sm">Date</th>
              <th className="p-2 text-sm">Transaction</th>
              <th className="p-2 text-sm">Description</th>
              <th className="p-2 text-sm">Value</th>
              <th className="p-2 text-sm">Edit</th>
              <th className="p-2 text-sm">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className=" border-b-2 border-slate-200">
                <td className="p-2 text-sm">{item.id}</td>
                <td className="p-2 text-sm">{item.date}</td>
                <td
                  className={
                    item.transaction === "expense"
                      ? "p-2 text-sm text-red-700"
                      : "p-2 text-sm text-green-700"
                  }
                >
                  {item.transaction}
                </td>
                <td className="p-2 text-sm">{item.desc}</td>
                <td
                  className={
                    item.transaction === "expense"
                      ? "p-2 text-sm text-red-700"
                      : "p-2 text-sm text-green-700"
                  }
                >
                  <i
                    className={
                      item.transaction === "expense"
                        ? "fa-solid  text-red-700 fa-arrow-down"
                        : "fa-solid  text-green-700 fa-arrow-up"
                    }
                  ></i>
                  &nbsp; &nbsp;
                  {item.value}
                </td>
                <td className="p-2 text-sm text-red-700">
                  <button>
                    <i className="fa-solid  text-green-700 fa-edit"></i>
                  </button>
                </td>
                <td className="p-2 text-sm text-red-700">
                  <button>
                    <i className="fa-solid  text-red-700 fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
