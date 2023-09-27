import signout from "@/pages/firebase/signOut";

const MenuListItems = [
  { name: "Update Profile", to: "update-profile" },
  { name: "settings", to: "settings" },
  {
    name: "log out",
    to: "settings",
    func: () => {
      try {
        signout();
      } catch (error) {}
    },
  },
];

export default MenuListItems;
