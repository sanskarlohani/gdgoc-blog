import { Box } from "@chakra-ui/react";

function RainbowBox() {
  return (
    <Box
      p={5}
      fontSize="xl"
      fontWeight="bold"
      textAlign="center"
      bgGradient="linear(to-l, #7928CA, #FF0080, #FF8C00, #FFD700, #00FF00, #00CED1, #1E90FF)"
      borderRadius="md"
      boxShadow="md"
    >
      Developers Summit 2.0
    </Box>
  );
}

export default RainbowBox;
