import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Colorbox from "./components/Colorbox";

const colors = ["blue", "red", "green", "gray", "yellow"];
const randomNum = () => Math.floor(Math.random() * colors.length);
const randomColor = colors[randomNum()];

function App() {
  const [ranColor, setRanColor] = useState(() => colors[randomNum()]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleIsCorrect();
    }
  };

  const handleIsCorrect = () => {
    if (answer.toLowerCase() === ranColor.toLowerCase()) {
      setIsCorrect("correct");
    } else {
      setIsCorrect("wrong");
    }
  };

  const handleNextColor = () => {
    const newColor = colors[randomNum()];
    setRanColor(newColor);
    setAnswer("");
    setIsCorrect(null);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center px-10 w-screen pt-10">
        <Colorbox color={ranColor} isAnswer={isCorrect} />
        <div className="mt-3 flex flex-col justify-center items-center">
          <label className="capitalize py-2 block text-center font-semibold">
            Enter your answer:
          </label>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            onKeyDown={(e) => e.key === "Enter" && handleIsCorrect()}
          />
          <button
            className="mt-2 py-2 px-10 rounded-md block bg-blue-500 text-white hover:bg-indigo-700 active:bg-indigo-400"
            onClick={handleIsCorrect}
          >
            Enter
          </button>
          <button
            className="mt-2 py-2 px-10 rounded-md block bg-gray-500 text-white hover:bg-gray-700 active:bg-gray-400"
            onClick={handleNextColor}
          >
            {isCorrect === "correct" ? "Next Color" : "Reset"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
