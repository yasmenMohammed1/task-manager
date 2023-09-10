import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-[#0b0c0e] bg-white">

    <ThemeProvider  attribute="class">
      <Layout >

      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </div>
  );
}
