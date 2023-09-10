import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  return (
  
      <div className="grid min-h-screen grid-rows-header">
<Navbar/>        <div className="grid  md:grid-cols-sidebar">
          <SideBar />
<div className="  mt-[5%]">

          {children}
</div>
        </div>
      </div>
    
  );
}

// components/layout/Layout.tsx

export default Layout;
