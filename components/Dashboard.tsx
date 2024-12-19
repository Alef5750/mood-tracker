import { Fugaz_One } from "next/font/google";
import React, { FC } from "react";
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
    <div className="flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12">
      <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500">
        {Object.keys(statuses).map((status, statusIdx) => {
          const key = status as keyof IStatus;
          return (
            <div key={statusIdx} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm">
                {status.replaceAll("_", " ")}
              </p>
              <p className={`text-base sm:text-lg ${fugaz.className}`}>
                {statuses[key]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.keys(moods).map((mood, moodIdx) => {
          const key = mood as keyof IMoods;
          return (
            <button className="" key={moodIdx}>
              <p>{mood}</p>
              <p>{moods[key]}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
