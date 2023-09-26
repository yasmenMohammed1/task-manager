import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { auth } from "../firebase/firebase";
import AuthLayout from "../shared/components/AuthLayout";

function Layout({ children }: any) {
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <Navbar />
      <div className="grid   md:grid-cols-sidebar">
        <SideBar />
        <AuthLayout>
          <div className="   mt-[5%]">{children}</div>
        </AuthLayout>
      </div>
    </div>
  );
}

// components/layout/Layout.tsx

export default Layout;
