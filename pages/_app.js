import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
});

import firebase from "firebase/app";
import "firebase/auth";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseConfig from "../firebaseConfig";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

function MyApp({
  Component,
  pageProps,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  user,
  error,
  loading,
}) {
  const authData = {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    user,
    error,
    loading,
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={4}
          connectors={{
            walletconnect: {
              rpcUrl:
                "https://rinkeby.infura.io/v3/08ac79d88b5d4aea961ca36af7ea6ee7",
            },
          }}
        >
          <NavBar {...authData} />
          <Component {...pageProps} {...authData} />
          <Footer />
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({ firebaseAppAuth })(MyApp);
