import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import gdgLogo from "../../assets/gdg-logo.png"; // Import the GDG logo
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamPage from "./Team";
import MarqueeCarousel from "./Events";
import { useThemeContext } from "../../contexts/themecontext";
import { TypeAnimation } from "react-type-animation";
import RainbowBox from "../ui/rainbow";
import { useState } from "react";
import SimpleModal from "../layout/Modal";

const introVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};



const logoVariants = {
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 360, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      loop: Infinity,
    },
  },
};

export default function Dashboard() {
  const [showBox, setShowBox] = useState(false);

  
  const { colorMode } = useThemeContext();

  return (
    <>
      
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          bg={colorMode === "light" ? "white" : "#18181a"}
          color={colorMode === "light" ? "black" : "white"}
        >
          <SimpleModal open={showBox} setIsOpen={setShowBox}/>
         {!showBox &&  <Box
            width={["100vw", "100vw", null, "100vw"]}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Nav />
  
            <Box px={["6", "10"]}>
              <motion.div initial="hidden" animate="visible" variants={introVariants}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flexDirection={["column-reverse", null, "row"]}
                >
                  <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
                    <TypeAnimation
                      sequence={[
                        "A place to write, read, and connect",
                        2000,
                        "It's easy and free to post your thinking on any topic",
                        2000,
                        "Connect with your fellow readers",
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        fontSize: "1.2em",
                        display: "inline-block",
                        textAlign: "center",
                        lineHeight: "1.5em",
                        whiteSpace: "normal",
                      }}
                      repeat={Infinity}
                    />
  
                    <Box
                      display="flex"
                      flexDirection={['column','row']}
                      justifyContent="center"
                      alignItems="center"
                      gap={5}
                      bg={colorMode === "light" ? "white" : "#18181a"}
                      color={colorMode === "light" ? "black" : "white"}
                    >
                      <Box>
                      <Button
                        as={Link}
                        to="/write"
                        colorScheme="blue"
                        isFullWidth
                        p="8"
                        mt="6"
                        fontSize="xl"
                        rounded="full"
                      >
                        Write
                      </Button>
                      <Button
                        as={Link}
                        to="/suggested"
                        colorScheme="blue"
                        isFullWidth
                        p="8"
                        mt="6"
                        fontSize="xl"
                        rounded="full"
                      >
                        Discover More
                      </Button>
                      </Box>
                     
                      <Button
                        as={Link}
                        to="/events"
                        colorScheme="blue"
                        isFullWidth
                        p="8"
                        mt="6"
                        fontSize="xl"
                        rounded="full"
                      >
                        DEVELOPERS SUMMIT 2.0
                      </Button>
                    </Box>
                  </Box>
  
                  <Box px="8" display="flex" justifyContent="center" alignItems="center">
                    <motion.div variants={logoVariants} animate="animate">
                      <Image src={gdgLogo} alt="GDG Logo" />
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
  
              <Divider my={["10", "16"]} />
            </Box>
  
            <Box
              width="full"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              overflowX="hidden"
              position="relative"
              py="8"
              mx="0"
              px="0"
              textAlign="center"
            >
              Previous Event Photos
              <MarqueeCarousel />
            </Box>
  
            <TeamPage />
            <Footer />
          </Box>
}
        </Box>
      
    </>
  );
  
}

