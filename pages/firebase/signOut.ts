import { auth } from "./firebase";
import toast from "toastify-js";
import { DANGERTOAST, SUCCUSSTOAST } from "../shared/Constants/toatsTypes";
import { signOut } from "firebase/auth";

export default async function signout() {
  let result = null,
    error = null;
  try {
    result = await signOut(auth);
    toast({
      text: `user has been logged out successfully`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        color: ' theme("colors.primary")',

        background: SUCCUSSTOAST,
      },
    }).showToast();
  } catch (e: any) {
    error = e;
    toast({
      text: e.message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        color: ' theme("colors.primary")',
        background: DANGERTOAST,
      },
    }).showToast();
  }

  return { result, error };
}
