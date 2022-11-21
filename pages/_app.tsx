import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AuthProvider } from "../context/authContext";
interface Props {
  comp: React.ElementType; // 👈️ type it as React.ElementType
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Navbar />

        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
