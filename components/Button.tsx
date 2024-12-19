import { Fugaz_One } from "next/font/google";
import React, { FC } from "react";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

interface ButtonProps {
  text: string;
  isDark?: boolean;
  isFull?: boolean;
}
const Button: FC<ButtonProps> = ({ text, isDark, isFull }) => {
  return (
    <button
      className={`rounded-full overflow-hidden border-2 duration-200 hover:opacity-60 border-solid border-indigo-600 ${
        isDark ? "bg-indigo-600 text-white" : "text-indigo-600"
      } ${isFull ? "grid place-items-center w-full" : ""}`}
    >
      <p
        className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
