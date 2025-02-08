import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, SimpleGrid } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { events } from "../../Eventdetails";
import { useThemeContext } from "../../contexts/themecontext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { colorMode } = useThemeContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const navigate = useNavigate();

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Only loop through 3 cards
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Only loop through 3 cards
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width on resize
    };

    // Listen to resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 3)); // Get 3 events for larger screens
    } else {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 1)); // Get 1 event for mobile
    }
  }, [windowWidth, currentIndex]); // Update when windowWidth or currentIndex changes

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bgImage={`url(${colorMode === "light" ? "/abstract.jpg" : "/dark.jpg"})`}
    >
      {/* Background with Blur Effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage={`url(/abstract.jpg)`}
        bgSize="cover"
        bgPosition="center"
        zIndex="-1"
        filter="blur(10px)"
      />

      {/* Event Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }} // 1 card on mobile (base), 3 cards on medium and larger screens
        spacing={6}
        p={6}
        w="100%"
        maxW="1200px"
        align="center"
      >
        <AnimatePresence mode="wait">
          {currentEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <VStack
                spacing={20}
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="2xl"
                align="center"
                bg="white"
                maxW="400px"
                color="black"
                h="500px" // Ensuring all cards have the same height
                minH="520px"//an use minH for a minimum height constraint
                position="relative" // Needed to ensure absolute positioning works for the button
                overflow="hidden" // Prevents any overflow
              >
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  noOfLines={1}
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {event.name}
                </Text>
                <Text
                  fontSize="md"
                  textAlign="center"
                  noOfLines={3}
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {event.description}
                </Text>
                <Button
                  rounded="full"
                  bg="green.500"
                  p={3}
                  onClick={() => navigate(`/event/${event.id}`)}
                  position="absolute"
                  bottom={2} // Fixed positioning of the button at the bottom
                  left="50%" // Center button horizontally
                  transform="translateX(-50%)" // To truly center the button
                >
                  Register
                </Button>
              </VStack>
            </motion.div>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      {/* Navigation Buttons */}
      <Button
        bg="black"
        position="absolute"
        left="5%"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevEvent}
        color="white"
		zIndex={20}
        _hover={{ bg: "gray.800" }}
        _active={{ bg: "gray.900" }}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        bg="black"
        position="absolute"
        right="5%"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextEvent}
        color="white"
		zIndex={20}
        _hover={{ bg: "gray.800" }}
        _active={{ bg: "gray.900" }}
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default List;
