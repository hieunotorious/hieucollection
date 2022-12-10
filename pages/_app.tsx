import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import { useMemo } from "react";
import AdminSide from "app/component/AdminSide";
import AdminNav from "app/component/AdminNav";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = useMemo(
    () => router.pathname.includes("/admin"),
    [router]
  );

  return (
    <ChakraProvider>
      <AuthProvider>
        <Flex direction="column" w="full" h="full">
          {!isAdminPage ? <Navbar /> : <AdminNav />}

          <Flex w="full" h="full">
            {isAdminPage && <AdminSide />}
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
