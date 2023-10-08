import { auth } from "./firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { DANGERTOAST, SUCCUSSTOAST } from "../shared/Constants/toatsTypes";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import resultToast from "../shared/components/Toast";

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    resultToast(`Welcome ${result.user.displayName}`, SUCCUSSTOAST);
  } catch (e: any) {
    error = e;
    resultToast(e.message, DANGERTOAST);
  }

  return { result, error };
}
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
