import React, { useRef } from 'react';
import { Box, Heading, Text, Flex, SimpleGrid, VStack, Image, Button } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import { events } from '../../Eventdetails';
import { useNavigate } from 'react-router-dom';
import Nav from '../layout/Nav';
import { useThemeContext } from '../../contexts/themecontext';

const Event = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const { colorMode } = useThemeContext();

  const handleRegisterClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <Parallax pages={3} ref={ref} style={{ margin: 0, padding: 0 }}>
      <Box w="100vw" overflowY="auto" scrollBehavior="smooth" bg="gray.50">
        <Nav />

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={1} factor={2}>
          <Box
            minH="100vh"
            w="100%"
            bg="blue.500"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            px={[4, 6, 10]}
          >
            <Box fontSize={['2rem', '4rem', '6rem']} fontWeight="bold" color="white">
              <TypeAnimation
                sequence={[
                  "DEVELOPER SUMMIT 2.0",
                  2000,
                  "WELCOME CODERS!",
                  2000,
                  "INNOVATE. CODE. CONNECT.",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </Box>
          </Box>
        </ParallaxLayer>

        {/* Who We Are */}
        <ParallaxLayer offset={0.95} speed={1} factor={0.9}>
          <Box w="100%" p={[4, 6, 10]} display="flex" flexDirection="column" gap={10}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              bgImage={colorMode === "light" ? "url('/IO_heroes.jpg')" : "url('/io.jpg')"}
              bgSize="cover"
              bgPosition="center"
              minH={['50vh', '80vh']}
              p={[4, 6, 10]}
            >
              <Heading fontSize={['3xl', '5xl', '6xl']} color="black">Who Are We?</Heading>
            </Flex>

            <Flex direction={['column', 'column', 'row']} gap={8} align="center" justify="center">
              <Box
                bg="red.500"
                rounded="xl"
                p={[4, 6]}
                color="white"
                textAlign="center"
                minH={['auto', '400px']}
                w={['100%', '80%', '45%']}transition="all 0.3s ease-in-out"
                _hover={{
                  transform: ['none', 'scale(1.1)'],
                }}
              >
                <Text fontSize={['md', 'lg']}>
                  We are Google Developer Groups on Campus (GDG OC), a vibrant community dedicated to fostering innovation,
                  collaboration, and tech skill enhancement.
                </Text>
                <Text fontSize={['md', 'lg']} mt={4}>
                  Our mission is to empower students to grow as developers, creators, and future leaders in the tech industry.
                </Text>
              </Box>

              <Box
                bg="green.500"
                rounded="xl"
                p={[4, 6]}
                color="white"
                textAlign="center"
                minH={['auto', '400px']}
                w={['100%', '80%', '45%']}
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: ['none', 'scale(1.1)'],
                }}
              >
                <Heading fontSize={['xl', '2xl']} mb={4}>WHAT'S COOKING?</Heading>
                <Text fontSize={['md', 'lg']}>
                  The "Developer Summit 2.0" is an annual event featuring workshops, keynotes, panel discussions, coding competitions,
                  and networking opportunities.
                </Text>
                <Text fontSize={['md', 'lg']} mt={4}>
                  The summit culminates in an exciting hackathon challenge, fostering creativity and problem-solving.
                </Text>
              </Box>
            </Flex>
          </Box>
        </ParallaxLayer>

        {/* Events Section */}
        <ParallaxLayer offset={1.7} speed={0.5} factor={1}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={10}>
            <Heading fontSize={['3xl', '4xl', '5xl']}>EVENTS</Heading>

            <Box maxW="1200px" w="100%" px={[4, 6, 10]}>
              

              <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {events.map((event, index) => (
                  <VStack
                    key={index}
                    spacing={4}
                    p={6}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="md"
                    align="center"
                    _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                  >
                    <Image
                      height={['100px', '150px']}
                      width={['100px', '150px']}
                      fit="cover"
                      aspectRatio={1}
                      borderRadius="full"
                      src={event.photo}
                    />
                    <Text fontWeight="bold" fontSize={['md', 'lg']}>
                      {event.name}
                    </Text>
                    <Button
                      rounded="full"
                      bg="green.500"
                      onClick={() => handleRegisterClick(event.id)}
                      p={2}
                    >
                      Explore
                    </Button>
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </ParallaxLayer>
      </Box>
    </Parallax>
  );
};

export default Event;
