import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useMemo } from "react";
import AdminSide from "app/component/AdminSide";
import AdminNav from "app/component/AdminNav";
import Head from "next/head";
import theme from "app/theme";
import { NextPage } from "next";

export type NextApplicationPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextApplicationPage;
}

function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);
  const isAdminPage = useMemo(
    () => router.pathname.includes("/admin"),
    [router]
  );

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Head>
          <title>HieuCollection</title>
          <link rel="icon" href="/gorilla.svg" />
        </Head>
        <Flex direction="column" w="full" h="full" overflow="hidden">
          {!isAdminPage ? <Navbar /> : <AdminNav />}

          <Flex w="full" h="full">
            {isAdminPage && <AdminSide />}
            {getLayout(<Component {...pageProps} />)}
          </Flex>

          <Footer />
        </Flex>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
