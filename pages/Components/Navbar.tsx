import React, { useState } from "react";
import InputController from "../shared/components/input-controller";
import { AiOutlineSearch } from "react-icons/ai";
import Notification from "@public/notification.png";
import Avatar from "@public/avatar.png";
import Image from "next/image";
import Menu from "./Menu/Menu";
import MenuListItems from "../shared/Constants/MenuListItems";
import { useTheme } from "next-themes";
import IconBtn from "../shared/components/IconBtn";
import { MdNightlightRound } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../firebase/AuthContextProvider";
function Navbar() {
  const { setTheme, theme } = useTheme();
  const [icon, setIcon] = useState(MdNightlightRound);
  const { control } = useForm({});
  const user = useAuthContext();
  console.log("user?.user?.photoURL", user);
  return (
    <div className="w-[92.5%] z-10  fixed flex h-[3%] md:h-[10%]  items-center justify-center dark:bg-[#1E1F25] bg-white top-0 left-[7.5%]">
      <div className="w-2/3  flex justify-end">
        <InputController
          placeholder="search for anything"
          iconClassName="text-3xl bg-[#F3F7FA] z-40 end-1  text-[#94A2BC]"
          Icon={AiOutlineSearch}
          className="bg-[#F3F7FA] z-30  rounded-md p-2 shadow-sm shadow-black"
          label="search"
          control={control}
          labelClassName="w-3/5  "
          name="search"
        />
      </div>

      <div className="w-1/3 flex items-center gap-3 justify-end p-2">
        {user.user && (
          <>
            <Image
              width={25}
              height={15}
              src={Notification}
              alt="notification"
            />
            <Menu
              avatarAlt="avatar"
              avatarSrc={`${user?.user?.photoURL}`}
              menuItems={MenuListItems}
            />
          </>
        )}
        <IconBtn
          label="theme-changer"
          name="theme_changer"
          type="button"
          iconClassName="text-black"
          Icon={icon}
          className="text-black"
          onClick={() => {
            setTheme(theme == "dark" ? "light" : "dark");
            setIcon(theme == "dark" ? MdNightlightRound : BsSun);
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
