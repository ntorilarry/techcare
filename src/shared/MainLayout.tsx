import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#F6F7F8] lg:p-6">
      <Header />
      <div className="mt-[3rem] lg-mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
