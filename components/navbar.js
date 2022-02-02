import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      style={{
        backdropFilter: "blur(10px",
      }}
      // zIndex={1}
      className=" z-10"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            {/* <Logo /> */}
            Dehaat
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <Link
            as={Link}
            p={2}
            _hover={{
              bg: "glassGreen",
              color: "#202023",
            }}
            color="whiteAlpha.900"
            href="#dehaat"
          >
            Dehaat
          </Link>
          <Link
            as={Link}
            p={2}
            _hover={{
              bg: "#2EB086",
              color: "#202023",
            }}
            href="#features"
            color="whiteAlpha.900"
          >
            Features
          </Link>
          <Link
            as={Link}
            p={2}
            _hover={{
              bg: "#2EB086",
              color: "#202023",
            }}
            color="whiteAlpha.900"
            href="#contact"
          >
            Contact
          </Link>
          {/* <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem> */}
        </Stack>
        <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<AiOutlineMenu />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink> */}
                <Link href="#dehaat">
                  <MenuItem as={Link}>Dehaat</MenuItem>
                </Link>
                <Link href="#features">
                  <MenuItem as={Link}>Features</MenuItem>
                </Link>
                {/* <MenuItem>
                  <Link href="#features">Features</Link>
                </MenuItem> */}
                <Link href="#contact">
                  <MenuItem as={Link}>Contact</MenuItem>
                </Link>
                {/* <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink> */}
                {/* <MenuItem as={Link} href="https://www.youtube.com">
                                    View Source
                                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
