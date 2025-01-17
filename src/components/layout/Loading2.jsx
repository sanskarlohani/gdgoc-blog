import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Image } from '@chakra-ui/react';

const LogoAnimation = () => {
	const [isSeparated, setIsSeparated] = useState(false);

	useEffect(() => {
	  const timeoutId = setTimeout(() => {
		setIsSeparated(true);
	  }, 1000); // Adjust the delay as needed
  
	  return () => clearTimeout(timeoutId);
	}, []);  

  const leftBracketAnimation = {
    initial: { x:0 },
    animate: { x: isSeparated ? -500 : 0 },
    transition: { duration: 5, ease: 'easeInOut' },
  };

  const rightBracketAnimation = {
    initial: { x: 0 },
    animate: { x: isSeparated ? 500 : 0 },
    transition: { duration: 5, ease: 'easeInOut' },
  };

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      {/* Left Bracket (Red and Blue) */}
      <Box as={motion.div} {...leftBracketAnimation}>
	 	<Image src='/l1.png' />
      </Box>

      {/* Right Bracket (Green and Yellow) */}
      <Box as={motion.div} {...rightBracketAnimation}>
	  <Image src='/l2.png'/>

      </Box>
    </Flex>
  );
};

export default LogoAnimation;
