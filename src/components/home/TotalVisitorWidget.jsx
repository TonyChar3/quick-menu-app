"use client";
import { useState } from "react";
import { ScanEye } from "lucide-react";

export default function TotalVisitorWidget() {
  const [count_visitor, setCountVisitor] = useState("daily");

  // set the correct filter for the visitor count
  const toggleCountVisitor = (type) => {
    setCountVisitor(type);
  };

  return (
    <>
      <div className="w-[95%] md:w-[40%] md:h-full 2xl:w-[25%] border px-2 py-1 my-2 border-gray-100 rounded-xl shadow-md shadow-gray-100">
        <div className="w-full flex flex-row justify-start items-center border-b">
          <div className="px-2 py-1">
            <h3 className="text-sm md:text-lg 2xl:text-2xl font-bold">
              Number of visitors
            </h3>
          </div>
        </div>
        {/* buttons for daily, weekly, monthly */}
        <div className="w-full my-2 md:mb-4 mx-auto p-1 md:p-2 flex flex-row justify-around items-center border border-slate-300 rounded-3xl">
          <button
            onClick={() => toggleCountVisitor("daily")}
            className={`p-2 rounded-lg active:scale-[0.90] transition-all ease duration-300 ${
              count_visitor == "daily"
                ? "bg-black shadow-md shadow-gray-200 font-bold text-white rounded-xl"
                : "font-light text-gray-500"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => toggleCountVisitor("weekly")}
            className={`p-2 rounded-lg active:scale-[0.90] transition-all ease duration-300 ${
              count_visitor == "weekly"
                ? "bg-black shadow-md shadow-gray-200 font-bold text-white rounded-xl"
                : "font-light text-gray-500"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => toggleCountVisitor("monthly")}
            className={`p-2 rounded-lg active:scale-[0.90] transition-all ease duration-300 ${
              count_visitor == "monthly"
                ? "bg-black shadow-md shadow-gray-200 font-bold text-white rounded-xl"
                : "font-light text-gray-500"
            }`}
          >
            Monthly
          </button>
        </div>
        <div className="w-full my-1 py-4 flex justify-center items-center">
          {/* Number of visitors */}
          <ScanEye size={30} />
          <span className="ms-1 md:ms-2 text-5xl md:text-6xl font-bold">
            30
          </span>
        </div>
      </div>
    </>
  );
}
