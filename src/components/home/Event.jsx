import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import List from "./list";
import Nav from "../layout/Nav";
import Footer from "./Footer";

const Event = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasAnimationPlayed = localStorage.getItem("animationPlayed");

    if (!hasAnimationPlayed) {
      setShowAnimation(true);
      localStorage.setItem("animationPlayed", "true");
      const timer = setTimeout(() => setShowAnimation(false), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Box
      minH="100vh"
      w="100vw"
      color="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={[4, 6, 10]}
      bgImage={"url('https://gdsc.iiitd.edu.in/static/media/lower_yellow_square.bdeae0bc6d849480de1edb3fe12c1660.svg')"}
      bgSize="cover"
      bg={'black'}
      bgPosition="center"
      overflowX={'hidden'}
    >
      {/* Render Nav unconditionally */}
    

      <AnimatePresence mode="wait">
        {showAnimation ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
            transition={{ duration: 0.2 }}
          >
            <Heading fontSize={"3rem"} fontWeight={"bold"} color={"white"} bg={'black'}>
              Welcome
            </Heading>
            <Heading fontSize={"3rem"} fontWeight={"bold"} color={"white"} bg={'black'} m={5}>
              to Developers Summit 2.0
            </Heading>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
          >
              <Nav hidden={true}/>
            <List />
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Event;