import React from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/router";
// import { useCookies } from "next-client-cookies";

export const AuthContext = React.createContext<{ user: User | null }>({
  user: null,
});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  // const cookies = useCookies();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user);

        // cookies.set("token", token);
      } else {
        setUser(null);
        // cookies.set("token", "");
        //router.push("/sign-in");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
