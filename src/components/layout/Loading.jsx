import { Spinner, Box } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner />
    </Box>
  );
};

export default Loading;
