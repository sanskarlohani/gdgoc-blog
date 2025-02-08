import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import List from "./list";
import Nav from "../layout/Nav";

const Event = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000);
    return () => clearTimeout(timer);
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
      bgImage="url(/abstract.jpg)"
      bgSize="cover"
      bgPosition="center"
    >
      <AnimatePresence mode="sync">
        {showAnimation ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Welcome to Developers Summit 2.0
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
          >
            <Nav />
            <List />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Event;
