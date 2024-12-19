import React, { FC } from "react";
import { gradients, baseRating } from "@/utils";

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
const monthsArr = Object.keys(months);
const now = new Date();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const data = {
  "15": 2,
  "16": 4,
  "17": 1,
  "18": 3,
  "19": 5,
  "20": 2,
  "21": 4,
  "22": 1,
  "23": 3,
  "24": 5,
};
const Calendar: FC = ({ demo }) => {
  const year = 2024;
  const month = "July";
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  return (
    <div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-10">
      {[...Array(numRows).keys()].map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="grid grid-cols-7 gap-1">
            {dayList.map((dayOfWeek, dayOfWeekIdx) => {
              const dayIdx = rowIdx * 7 + dayOfWeekIdx - (firstDayOfMonth - 1);

              const dayDisplay =
                dayIdx > daysInMonth ? false : rowIdx === 0 && dayOfWeekIdx < firstDayOfMonth ? false : true;

              const isToday = dayIdx === now.getDate();

              if (!dayDisplay) {
                return <div key={dayOfWeekIdx} className="bg-white" />;
              }

              const color = demo
                ? gradients.indigo[baseRating[dayIdx]]
                : dayIdx in data
                ? gradients.indigo[data[dayIdx]]
                : "white";

              return (
                <div
                  style={{ background: color }}
                  className={`text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ${
                    isToday ? "border-indigo-400" : "border-indigo-100"
                  } ${color === "white" ? "text-indigo-400" : "text-white"}`}
                  key={dayOfWeekIdx}
                >
                  <p>{dayIdx}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
