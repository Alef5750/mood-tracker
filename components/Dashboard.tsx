import { Fugaz_One } from "next/font/google";
import React, { FC } from "react";
import Calendar from "./Calendar";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const Dashboard: FC = () => {
  interface IStatus {
    num_days: number;
    time_remaining: string;
    date: string;
  }

  interface IMoods {
    Happy: string;
    Sad: string;
    Angry: string;
    Scared: string;
    Elated: string;
  }
  const statuses: IStatus = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods: IMoods = {
    Happy: "😊",
    Sad: "😢",
    Angry: "😡",
    Scared: "😱",
    Elated: "😁",
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="rounded-lg p-4 gap-4 grid grid-cols-3 bg-indigo-50 text-indigo-500">
        {Object.keys(statuses).map((status, statusIdx) => {
          const key = status as keyof IStatus;
          return (
            <div key={statusIdx} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm truncate">
                {status.replaceAll("_", " ")}
              </p>
              <p className={`text-base sm:text-lg ${fugaz.className}`}>{statuses[key]}</p>
            </div>
          );
        })}
      </div>
      <h4 className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}>
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, moodIdx) => {
          const key = mood as keyof IMoods;
          return (
            <button
              className={`p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1`}
              key={moodIdx}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl">{moods[key]}</p>
              <p className={`text-indigo-500 text-xs sm:text-sm md:text-base ${fugaz.className}`}>
                {mood}
              </p>
            </button>
          );
        })}
      </div>
      <Calendar />
    </div>
  );
};

export default Dashboard;
