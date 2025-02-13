import { Box, Image, Text, VStack, SimpleGrid, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const speakers = [
  {
    photo: "/s1.jpg",
    name: "Belal Khan",
    role: "Google Developers Expert, Senior Engineer American Express, Founder Simplified Coding",
    register:"https://gdg.community.dev/events/details/google-gdg-on-campus-silicon-university-bhubaneswar-india-presents-ai-amp-ml-transforming-android/"
  },
  {
    photo: "/s2.jpg",
    name: "Soumya Ranjan Sahoo",
    role: "Co-founder & Head of Backend Development in Smartters Software Pvt. Ltd",
    register:"https://gdg.community.dev/events/details/google-gdg-on-campus-silicon-university-bhubaneswar-india-presents-monolithic-vs-microservices-the-big-debate/"
  }
];



const Speakers = () => {
  
  return (
    <Box
      width="100%"
      maxW="1200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
     mb={10}
    >
      <Heading
        fontFamily="sans-serif"
        fontSize={['2xl', '3xl', '5xl']}
        mb={10}
        color="whiteAlpha.600"
      >
        KeyNote Speakers
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing="60"
        width="100%"
        justifyItems="center"
        ml={["0","50%"]}
        gap={10}
      >
        {speakers.map((member, index) => (
          <VStack
            key={index}
            spacing="4"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            align="center"
            justify="center"
            width="100%"
            maxW="300px"
            bg="white"
            aspectRatio={1}
          >
            <Image
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="lg"
              src={member.photo}
              alt={member.name}
            />
            <Text fontWeight="bold" fontSize={['md', 'lg']}>
              {member.name}
            </Text>
            <Text color="gray.600" textAlign="center">
              {member.role}
            </Text>
            <Button onClick={()=>window.open(`${member.register}`,"_blank")} bg={'green.500'} rounded={'full'} p={3}>
              Register
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Speakers;