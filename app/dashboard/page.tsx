import React from "react";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

const DashboardPage = () => {
  const isAuthenticated = false;

  let children = <Login />;

  if (isAuthenticated) {
    children = <Dashboard />;
  }
  return <Main>{children}</Main>;
};

export default DashboardPage;
