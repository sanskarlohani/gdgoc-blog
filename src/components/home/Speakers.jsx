import { Box, Image, Text, VStack, SimpleGrid, Heading } from '@chakra-ui/react';
import React from 'react';

const speakers = [
  {
    photo: "/s1.jpg",
    name: "Belal Khan",
    role: "Google Developers Expert, Senior Engineer American Express, Founder Simplified Coding"
  },
  {
    photo: "/s2.jpg",
    name: "Soumya Ranjan Sahoo",
    role: "Co-founder & Head of Backend Development in Smartters Software Pvt. Ltd"
  }
];

const Speakers = () => {
  return (
    <Box display={'flex'} flexDirection={['column']} justifyContent={'center'} alignItems={'center'}>
      <Heading fontFamily={'sans-serif'} fontSize={['2xl', '3xl', '5xl']} m={10} color={'whiteAlpha.600'}>KeyNote Speakers</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="6" w={"100%"} maxW="1200px" px={4} justifyItems="center">
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
            h={['auto', '400px']}
            w="100%"
            maxW="300px"
          >
            <Image
              height={['120px', '150px']}
              fit="cover"
              aspectRatio={1}
              borderRadius="full"
              src={member.photo}
            />
            <Text fontWeight="bold" fontSize={['md', 'lg']}>
              {member.name}
            </Text>
            <Text color="white" textAlign="center">{member.role}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Speakers;
