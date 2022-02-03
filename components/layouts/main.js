import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dehaat</title>
      </Head>
      {/* path={router.asPath} */}
      <Navbar />

      {/* <Container maxW=""> */}
        {/* <Container maxW="container.sm">
          <Image
            src={"/images/logo.png"}
            alt="coder"
            height={1080}
            width={1080}
          />
        </Container> */}
        {children}
      {/* </Container> */}
    </Box>
  );
};

export default Main;
