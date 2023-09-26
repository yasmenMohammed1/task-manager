import Image from "next/image";
import React from "react";
import Logo from "@public/logo.svg";
function AuthLayout({ children }: any) {
  return (
    <div className="flex w-full h-full">
      <div className="xl:w-1/2 w-full m-auto">{children}</div>
      <div className="w-1/2 hidden xl:flex flex-col justify-center space-y-2 items-center text-center mt-[5%] auth-layout">
        <Image src={Logo} alt="logo image" />
        <p className="text-2xl font-semibold text-primary">
          Control your timeline
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
