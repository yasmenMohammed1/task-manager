import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
type MenuProps = {
  avatarSrc: StaticImageData | string;
  avatarAlt: string;
  menuItems?: { name: string; to: string; func?: () => void }[];
};
function Menu({ avatarSrc, avatarAlt, menuItems }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const aProps = (menuItem: {
    name: string;
    to: string;
    func?: () => void;
  }) => {
    return menuItem.func
      ? {
          onClick: (e: Event) => {
            e.preventDefault();
            try {
              menuItem.func?.();
              router.push("/register");
            } catch (error) {}
          },
        }
      : { href: menuItem.to };
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className={`inline-flex bg-gray-200 rounded-full justify-center items-center p-2 ${
          isOpen && `border border-1 border-[#5051F9]`
        }`}
        id="options-menu"
        title="avatar-btn"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <Image
          className="rounded-full  h-[30px] w-[30px]"
          width={25}
          height={25}
          src={avatarSrc}
          alt={avatarAlt}
        />
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
              return (
                <a
                  key={menuItem.name}
                  {...aProps(menuItem)}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    menuItem.func ? "cursor-pointer" : ""
                  } ${router.pathname === menuItem.name ? "bg-[#5051F9]" : ""}`}
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
