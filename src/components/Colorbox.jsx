import React from "react";

const colorClasses = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  gray: "bg-gray-500",
  yellow: "bg-yellow-500",
};

export default function Colorbox({ color, isAnswer }) {
  const colorClass = colorClasses[color] || "bg-white";
  let resultDisplay = "";
  let isHidden = true;
  let resultBorder = "";

  if (isAnswer === "correct") {
    resultDisplay = "text-green-500";
    resultBorder = "border-green-500 border-5";
    isHidden = false;
  } else if (isAnswer === "wrong") {
    resultDisplay = "block text-red-500";
    resultBorder = "border-red-500 border-5";
    isHidden = false;
  }

  return (
    <div
      className={`${resultBorder} inline-flex flex-col bg-gray-100 justify-center items-center rounded-lg p-5 mx-5 shadow-2xl `}
    >
      <div className={`h-[150px] w-[150px] ${colorClass} rounded-lg `}></div>
      <div
        className={`inline-flex items-center justify-center ${resultDisplay}`}
      >
        {isAnswer === "correct" ? (
          <p className="mt-2 pr-1 font-semibold">Correct</p>
        ) : undefined}
        {isAnswer === "wrong" ? (
          <p className="mt-2 pr-1 font-semibold">Wrong</p>
        ) : undefined}
        {isAnswer === "correct" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 mt-2 ${isHidden ? "hidden" : undefined}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={`size-6 mt-2 ${isHidden ? "hidden" : undefined}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {/* <h2 className=" text-gray-700 mt-2 font-semibold">Name it!</h2> */}
    </div>
  );
}
