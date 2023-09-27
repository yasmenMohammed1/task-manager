import { auth } from "./firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import toast from "toastify-js";
import { DANGERTOAST, SUCCUSSTOAST } from "../shared/Constants/toatsTypes";

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    toast({
      text: `welcome ${result?.user.displayName}`,
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
