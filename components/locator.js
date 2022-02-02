import { Box, Icon, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GiField } from "react-icons/gi";
import { BsArrowUpShort } from "react-icons/bs";

const Locator = ({ scrollY, h }) => {
  const [hov, setHov] = useState(false);

  return (
    <Box>
      {scrollY > h / 2 && (
        <Link
          href="#dehaat"
          className="text-5xl fixed bottom-10 right-12 cursor-pointer flex flex-col"
          _hover={{ color: "glassGreen" }}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          onClick={() => setHov(false)}
        >
          {hov && <Icon as={BsArrowUpShort} className="animate-bounce" />}
          <Icon as={GiField} />
        </Link>
      )}
    </Box>
  );
};

export default Locator;
