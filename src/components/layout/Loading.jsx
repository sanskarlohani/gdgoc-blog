import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Loading = () => {
  const styles = [
    { width: "50px", height: "50px", backgroundColor: "red", borderRadius: "50%", margin: "10px" },
    { width: "50px", height: "50px", backgroundColor: "blue", borderRadius: "50%", margin: "10px" },
    { width: "50px", height: "50px", backgroundColor: "green", borderRadius: "50%", margin: "10px" },
    { width: "50px", height: "50px", backgroundColor: "yellow", borderRadius: "50%", margin: "10px" }
  ];

  const variants = {
    start: { opacity: 0.5, scale: 0.8 }, // size of the circle initially
    end: { opacity: 1, scale: 1.2 } // size of the circle when it's animating
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <VStack spacing={4}>
        <Box display="flex">
          {styles.map((style, index) => (
            <MotionBox
              key={index}
              style={style}
              variants={variants}
              initial="start"
              animate="end"
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                duration: 0.5,
                delay: 0.3 + index * 0.1
              }}
            />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Loading;