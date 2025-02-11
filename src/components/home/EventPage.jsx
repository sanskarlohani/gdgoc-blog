import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../Eventdetails";
import { Box, Heading, Image, Text, Stack, Button, Flex } from "@chakra-ui/react";
import { useThemeContext } from "../../contexts/themecontext";
import Nav from "../layout/Nav";

const EventPage = () => {
  const { colorMode } = useThemeContext();
  const { id } = useParams();
  const foundEvent = events.find((event) => event.id === parseInt(id));

  if (!foundEvent) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
        <Heading fontSize="4xl" color="red.500">
          Event Not Found
        </Heading>
      </Box>
    );
  }

  return (
    <Box
      minH="100vh"
      w="100%"
      bg={colorMode === "light" ? "white" : "black"}
      color={colorMode === "light" ? "black" : "white"}
      px={[4, 8]}
    >
      <Nav />

     
      <Box textAlign="center" mt={6}>
        <Heading
          fontSize={["3xl", "5xl", "6xl"]}
          fontFamily="sans-serif"
          color="white"
          textShadow="2px 2px 10px rgba(0, 0, 0, 0.8)"
        >
          {foundEvent.name}
        </Heading>
      </Box>

      
      <Flex
        direction={["column", "column", "row"]} 
        align="center"
        justify="center"
        gap={8}
        mt={8}
        flexWrap="wrap"
      >
       
        <Box 
          w={["90vw", "70vw", "50vh"]} 
          h={["50vh", "50vh", "50vh"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={foundEvent.photo}
            alt={foundEvent.name}
            w="100%"
            h="100%"
            objectFit="cover"
            rounded="md"
            boxShadow="2xl"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          />
        </Box>

        
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center"
          w={["100%", "90%", "50%"]} 
        >
          <Stack w="100%" spacing={6} align="center">
       
            <Box
              w="100%"
              
              rounded="md"
              p={4}
              boxShadow="lg"
              bg={colorMode === "light" ? "white" : "blackAlpha.700"}
            >
              <Heading fontSize="2xl" mb={2}>DESCRIPTION</Heading>
              <Text fontSize={["sm", "md"]}>{foundEvent.description}</Text>
            </Box>

          
            <Box
              w="100%"
             
              rounded="md"
              p={4}
              boxShadow="lg"
              bg={colorMode === "light" ? "white" : "blackAlpha.700"}
            >
              <Heading fontSize="2xl" mb={2}>DETAILS</Heading>
              <Text fontSize={["sm", "md"]}>
                📅 <strong>Date:</strong> 21st Feb
              </Text>
              <Text fontSize={["sm", "md"]}>
                📍 <strong>Location:</strong> Silicon University
              </Text>
            </Box>
          </Stack>

        
          <Box
            w="100%"
            textAlign="center"
            
            rounded="md"
            py={4}
            mt={6}
            boxShadow="lg"
            bg={colorMode === "light" ? "white" : "blackAlpha.700"}
          >
            <Text fontSize={["md", "2xl"]} fontWeight="bold">
              CONTACT:
              
            </Text>
          </Box>

        
          <Box display="flex" justifyContent="center" py={4}>
            <Button
              _hover={{
                bg: "blue.500",
                transform: "scale(1.1)",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.4)",
              }}
              p={4}
              transition="all 0.3s ease"
              bg="blue.400"
              color="white"
              fontSize="lg"
              rounded="full"
            >
              Register Now
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default EventPage;
