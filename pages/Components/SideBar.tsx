import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import sidebarIcons from "../shared/Constants/sidebarIcons";
import Link from "next/link";
import { useRouter } from "next/router";
function SideBar() {
  const { pathname } = useRouter();

  return (
    <div className="bg-[#FBFAFF] p-3   dark:bg-[#131517]   space-y-16 h-[100vh] ">
      <div className="p-2 text-center ">
        <Image className=" m-auto" src={Logo} alt="Logo" />
        <p className="xl:block hidden text-[#23235F] dark:text-[#f5f5f8] font-semibold text-sm">
          OCTOM.
        </p>
      </div>
      <div className=" flex flex-col gap-7 justify-center items-center">
        {sidebarIcons.map((sidebarIcon) => {
          const isActive = sidebarIcon.name === pathname;
          return (
            <Link
              className={isActive ? "rounded-md bg-[#5051F9] p-3" : ""}
              key={sidebarIcon.name}
              href={sidebarIcon.name}
            >
              <Image alt={sidebarIcon.name} src={sidebarIcon.src} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
