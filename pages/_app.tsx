import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";

import { AuthProvider } from "../context/authContext";
import Footer from "../component/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default App;
