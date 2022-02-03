import { Box, Container, Heading } from "@chakra-ui/react";
import { SlideShow } from "../components/slide-show";
import Locator from "../components/locator";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [h, setH] = useState(0);

  useEffect(() => {
    setH(screen.height);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="relative">
      <Box id="dehaat" className="">
        <SlideShow />
        <Container maxW="container.xl">
          <Box className="mt-20">
            <Container
              maxW="container.sm"
              borderRadius="lg"
              bg="whiteAlpha.200"
              mb={6}
              p={3}
              align="center"
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width="1080"
                height="1080"
              />
            </Container>
          </Box>
        </Container>
      </Box>
      <Box id="features" pt={14} className="h-screen">
        <Container maxW="container.xl">
          <Heading as="h1" variant="page-title">
            Features
          </Heading>
        </Container>
      </Box>
      <Box id="contact" pt={14} className="h-screen">
        <Container maxW="container.xl">
          <Heading as="h1" variant="page-title">
            Contact
          </Heading>
        </Container>
      </Box>
      <Locator scrollY={scrollY} h={h} />
    </Box>
  );
}
