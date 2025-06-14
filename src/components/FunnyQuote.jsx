import React from "react";

const FunnyQuote = () => {
  return (
    <div className="text-gray-200 px-4 py-8 flex justify-center">
      <div className="flex flex-col items-end">
        <div className="relative max-w-xl border border-gray-600 p-6 text-center">
          {/* Quote */}
          <span className="absolute h-7 -top-3 left-4 text-5xl text-gray-500 bg-[#282C33]">
            “
          </span>

          {/* Quote Text */}
          <p className="text-sm sm:text-base md:text-lg font-mono">
            With great power comes great electricity bill
          </p>

          {/* Closing Quote + Author */}
        </div>
        <div className="flex justify-end items-center mt-4 space-x-2">
          <span className="text-xl text-gray-500">”</span>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            - Dr. Who
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunnyQuote;
