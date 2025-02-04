import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../../Eventdetails';
import { Box, Heading, Image, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { useThemeContext } from '../../contexts/themecontext';

const EventPage = () => {
  const { colorMode } = useThemeContext();
  const { id } = useParams();
  const foundEvent = events.find(event => event.id === parseInt(id));

  if (!foundEvent) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
        <Heading fontSize="4xl" color="red.500">Event Not Found</Heading>
      </Box>
    );
  }

  return (
    <Flex
      direction="column"
      minH="full"               
      w="100%"
      bgImage={colorMode === "light" ? "url('/IO_heroes.jpg')" : "url('/io.jpg')"}
      bgBlendMode={'lighten'}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color={colorMode === 'light' ? "black" : "white"}
      px={[4, 8]}
    >
      <Box flex="1" display="flex" flexDirection="column"  bgImage={colorMode === "light" ? "/IO_heroes.jpg" : "/io.jpg"}  alignItems="center" gap={6} pt={10}>
        {/* Event Title */}
        <Heading
          fontSize={['3xl', '5xl', '7xl']}
          fontFamily="sans-serif"
          textAlign="center"
          color="teal.400"
        >
          {foundEvent.name}
        </Heading>

        {/* Event Image */}
        <Box w={['90%', '80%', '60%']} h={['250px', '400px', '500px']}>
          <Image
            src={foundEvent.photo}
            alt={foundEvent.name}
            w="100%"
            h="100%"
            objectFit="cover"
            rounded="md"
            boxShadow="lg"
          />
        </Box>

        {/* Event Details Section */}
        <Stack
          direction={['column', 'row']}
          spacing={6}
          align="center"
          justify="center"
          w="100%"
          maxW="1200px"
        >
          {/* Description Box */}
          <Box
            w={['90%', '45%']}
            border="2px solid darkblue"
            rounded="md"
            p={4}
            boxShadow="md"
            bg={colorMode === "light" ? "whiteAlpha.800" : "blackAlpha.600"}
            minH={['300px']}
          >
            <Heading fontFamily="sans-serif" fontSize="2xl" mb={2} color={colorMode === 'light' ? "black" : "white"}>
              DESCRIPTION
            </Heading>
            <Text fontSize={['sm', 'md']} color={colorMode === 'light' ? "gray.700" : "gray.200"}>
              {foundEvent.description}
            </Text>
          </Box>

          {/* Event Details Box */}
          <Box
            w={['90%', '45%']}
            border="2px solid darkblue"
            rounded="md"
            paddingX={8}
            paddingY={6}
            boxShadow="md"
            bg={colorMode === "light" ? "whiteAlpha.800" : "blackAlpha.600"}
            minH={['300px']}
          >
            <Heading fontSize="2xl" mb={2} color={colorMode === 'light' ? "black" : "white"}>
              DETAILS
            </Heading>
            <Text fontSize={['sm', 'md']} mb={1}>
              📅 <strong>Date:</strong> 21st Feb
            </Text>
            <Text fontSize={['sm', 'md']}>
              📍 <strong>Location:</strong> Silicon University
            </Text>
          </Box>
        </Stack>
        <Box textAlign="center"  color={colorMode === 'light' ? "black" : "white"}  w="100%">
        <Text fontFamily="sans-serif" fontSize={['md', '2xl']}>
          CONTACT
        </Text>
      </Box>

      <Box display="flex" justifyContent="center" py={4}>
        <Button
          _hover={{
            bg: 'blue.500',
            transform: 'scale(1.05)',
            boxShadow: 'lg',
          }}
          p={3}
          transition="all 0.3s ease"
          bg="teal.400"
          color="white"
        >
          Register Now
        </Button>
      </Box>
    </Box>

    
      {/* Contact Section (Now Covered) */}
    
    </Flex>
  );
};

export default EventPage;
