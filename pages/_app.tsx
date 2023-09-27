import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Layout";
import { ThemeProvider } from "next-themes";
import {
  AuthContextProvider,
  useAuthContext,
} from "./firebase/AuthContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-[#0b0c0e] bg-primary">
      <ThemeProvider attribute="class">
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}
