import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AuthProvider } from "../context/authContext";

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
