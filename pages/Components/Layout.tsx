import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import AuthLayout from "../shared/components/AuthLayout";
import { useAuthContext } from "../firebase/AuthContextProvider";

function Layout({ children }: any) {
  const user = useAuthContext();
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100 dark:bg-[#131517]">
      <Navbar />
      <div className="grid   md:grid-cols-sidebar">
        <SideBar />
        {!user.user ? (
          <AuthLayout>
            <div className="   mt-[5%]">{children}</div>
          </AuthLayout>
        ) : (
          <div className="   mt-[5%]">{children}</div>
        )}
      </div>
    </div>
  );
}

// components/layout/Layout.tsx

export default Layout;
