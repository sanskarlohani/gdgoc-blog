import React, { useRef } from 'react';
import { Box, Heading, Text, Flex, SimpleGrid, VStack, Image, Button } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import { events } from '../../Eventdetails';
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from '../layout/Nav';
const Event = () => {
  const ref = useRef();
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleRegisterClick = (id) => {
    navigate(`/event/${id}`); // Redirect to the specific event page
  };

  return (
    <Parallax pages={4} ref={ref} style={{ margin: 0, padding: 0 }} >
      <Box w="100vw" overflowY="auto" scrollBehavior="smooth" bg="gray.50">
      <Nav/>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}>
          <Box
            minH="100vh"
            w="100%"
            bg="blue.500"
            display="flex"
            justifyContent={['center', 'flex-start']}
            alignItems="center"
            pl={[15, 15, 15]}
            position="relative"
            textAlign="center"
          >
            <Box
              minH="10rem"
              lineHeight="1.2"
              fontSize={['2.5rem', '5rem', '6rem']}
              fontWeight="bold"
              color="white"
              whiteSpace="nowrap"
              overflow="hidden"
              textAlign={'center'}
              display={'flex'}
              justifyContent={'center'}
            >
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

        <ParallaxLayer offset={0.95}
          speed={1}
          factor={0.9}>
          <Box w="100%" p={[4, 6, 10]} display={'flex'} gapY={10} flexDirection={'column'}>


            <Flex
              direction={['column', 'row']}
              align="center"
              justify="center"
              gap={[4, 8, '10%']}
              wrap="wrap"
            >
              <Box
                p={[4, 6]}
                color="blackAlpha.700"
                textAlign="center"
                minH={['auto', '100vh']}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                // bgGradient={'to-r, teal.400, blue.500, purple.600)"'}
                bgGradient={'to-b blue green '}
              >
                <Heading size={['xl', '10xl']} fontSize={['5xl', '20xl']} mb={4}>Who Are We?</Heading>
              </Box>


            </Flex >
            <Flex h={'96'} gapX={20}>
              <Box
                bg="red.500"
                rounded="xl"
                p={[4, 6]}
                color="white"
                textAlign="center"
                minH={['300px', '400px', '650px']}
                minW={['90%', '80%', '650px']}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize={['sm', 'md', 'lg']}>
                  We are Google Developer Groups on Campus (GDG OC), a vibrant community dedicated to fostering innovation,
                  collaboration, and tech skill enhancement. As part of a global network, we provide students with access to
                  resources, mentorship, and hands-on learning experiences.
                </Text>
                <Text fontSize={['sm', 'md', 'lg']} mt={4}>
                  Our mission is to empower students to grow as developers, creators, and future leaders in the tech industry.
                  GDG OC offers numerous opportunities for learning and professional growth.
                </Text>
              </Box>

              <Box
                bg="green.500"
                rounded="xl"
                p={[4, 6, 10]}
                color="white"
                textAlign="center"
                minH={['300px', '400px', '650px']}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading size={['xl', '2xl']} mb={4}>WHAT'S COOKING?</Heading>
                <Text fontSize={['sm', 'md', 'lg']}>
                  The "Developer Summit 2.0" is an annual two-day event designed to bring together tech enthusiasts, developers,
                  and industry experts. It features interactive workshops, keynote sessions, panel discussions, coding competitions,
                  and networking opportunities.
                </Text>
                <Text fontSize={['sm', 'md', 'lg']} mt={4}>
                  Participants will gain hands-on experience, showcase their talents, and connect with like-minded individuals.
                  The summit culminates in an exciting hackathon challenge, providing a platform for creativity and problem-solving.
                </Text>
              </Box>
            </Flex>

          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7}
          speed={0.5}
          factor={1}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={20}>
            <Heading fontSize={'5xl'}>EVENTS</Heading>
            <Box maxW="1200px" mx="auto" py="10" px="6" >
              <Heading textAlign="center" mb="10" fontSize="4xl">
                Meet Our Team
              </Heading>
              <SimpleGrid columns={[3]} spacing="10" gap={10} >
                {events.map((member, index) => (
                  <VStack
                  h={'150'}
                  w={'150'}
                    key={index}
                    spacing="4"
                    p="6"
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="md"
                    align="center"
                    _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                  >
                    <Image
                      height="150px"
                      fit={'cover'}
                      aspectRatio={1}
                      borderRadius={'full'}

                      src={member.photo}
                    />
                    <Text fontWeight="bold" fontSize="lg">
                      {member.name}
                    </Text>
                    <Text color="gray.500" >{member.description}</Text>
                    <Button rounded={'full'} bg={'green.500'} onClick={()=>handleRegisterClick(member.id) }>Explore</Button>
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
