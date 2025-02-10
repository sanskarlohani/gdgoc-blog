import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, SimpleGrid, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { events } from "../../Eventdetails";
import { useThemeContext } from "../../contexts/themecontext";
import { useNavigate } from "react-router-dom";
import Speakers from './Speakers';

const List = () => {
  const { colorMode } = useThemeContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const navigate = useNavigate();

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length); 
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length); 
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 3)); 
    } else {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 1)); 
    }
  }, [windowWidth, currentIndex, events]); 

  return (
    <Box
      w="100vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      bgImage={`url(${colorMode === "light" ? "/abstract.jpg" : ""})`}
      color={colorMode === "light" ? "black" : "white"} 
      overflowY="auto"
    >
      <Heading top={500} fontSize={['5xl', '10xl']} mt={5}>EVENTS</Heading>
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
      
      <SimpleGrid
        columns={{ base: 1, md: 3 }} 
        spacing={6}
        p={6}
        w="100%"
        h="auto"
        maxW="1200px"
        align="center"
        justify="center"
      >
        <AnimatePresence mode="wait">
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.id} 
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}    
              exit={{ opacity: 0, y: -20 }}     
              transition={{ 
                duration: 0.6,                
                ease: "easeOut"               
              }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <VStack
                spacing={6} 
                p={5}
                mr={5}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="2xl"
                align="center"
                bg="white"
                maxW="400px"
                color="black"
                minH="500px"
                position="relative"
                overflow="hidden"
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

                <Button
                  rounded="full"
                  bg="green.500"
                  p={3}
                  onClick={() => navigate(`/event/${event.id}`)}
                  alignSelf="center"
                  mt="auto"
                >
                  Register
                </Button>
              </VStack>
               
      
            </motion.div>
          ))}
          <Button
            bg="black"
            position="absolute"
            left={{ base: "0%", md: "5%" }}
            top="20%"
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
            right={{ base: "4%", md: "5%" }}
            top="20%"
            transform="translateY(-50%)"
            onClick={nextEvent}
            color="white"
            zIndex={20}
            _hover={{ bg: "gray.800" }}
            _active={{ bg: "gray.900" }}
          >
            <ChevronRightIcon />
          </Button>
        </AnimatePresence>
      </SimpleGrid>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width="100%" gap={5} mt={10}>
        <Speakers />
      </Box>
     
    </Box>
  );
};

export default List;
