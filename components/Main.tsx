import React, { FC, ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <div className="flex-1 flex flex-col p-4 sm:p-8">{children}</div>;
};

export default Main;
