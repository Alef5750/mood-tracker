import { Fugaz_One } from "next/font/google";
import React, { FC } from "react";
import Button from "./Button";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Login: FC = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ${fugaz.className}`}>
        Login / Register
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        className="rounded-full outline-none max-w-[400px] w-full mx-auto duration-200 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400"
        type="email"
        placeholder="Email"
      />
      <input
        className="rounded-full outline-none max-w-[400px] w-full mx-auto duration-200 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400"
        type="password"
        placeholder="Password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" isFull />
      </div>
      <p className="text-center">
        Don&#39;t have an account?
        <span className="text-indigo-600">Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
