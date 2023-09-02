import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
type MenuProps = {
  avatarSrc: StaticImageData;
  avatarAlt: string;
  menuItems?: { name: string; to: string }[];
};
function Menu({ avatarSrc, avatarAlt, menuItems }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center p-2 "
        id="options-menu"
        title="avatar-btn"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <Image width={35} height={20} src={avatarSrc} alt={avatarAlt} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1 text-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItems?.map((menuItem) => {
              console.log(pathname, menuItem.name === pathname);
              return (
                <a
                  key={menuItem.name}
                  href={menuItem.to}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    pathname === menuItem.name ? "bg-[#5051F9]" : ""
                  }`}
                  role="menuitem"
                >
                  {menuItem.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
