import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex justify-between w-full items-center">
      <SideBar />

      <Navbar />
    </div>
  );
}

export default Layout;
