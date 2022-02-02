import { Box } from "@chakra-ui/react";

function Suggest({ name }) {
  return (
    <Box
      className="rounded-md flex justify-center px-3 h-10 cursor-pointer mx-2 mt-3 pt-1 border-none bg-[#4BB543] whitespace-nowrap"
      _hover={{ bg: "glassGreen", color: "#202023" }}
    >
      <p>{name}</p>
    </Box>
  );
}

export default Suggest;
