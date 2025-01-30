import { useState } from "react";
import "./index.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="flex justify-center items-center px-10 w-screen pt-10">
        <div className="inline-flex flex-col border-white bg-gray-100 justify-center rounded-lg p-5 mx-5 shadow-2xl">
          <div className="h-[150px] w-[150px] bg-blue-500 rounded-lg"></div>
          <h2 className="text-center text-gray-700 mt-2 font-semibold py-2">
            Name it!
          </h2>
        </div>
      </main>
    </>
  );
}

export default App;
