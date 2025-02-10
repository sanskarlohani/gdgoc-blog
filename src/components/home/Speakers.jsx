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
    <Box display={'flex'} flexDirection={['column']} justifyContent={'center'} alignItems={'center'} >
      <Heading fontFamily={'sans-serif'} fontSize={'2xl'} m={20}>KeyNote Speakers</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="6" w={"100%"} display={'flex'} justifyContent={'center'}>
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
            h="100%"
            w="100%"
           
          >
            <Image
              height="150px"
              fit="cover"
              aspectRatio={1}
              borderRadius="full"
              src={member.photo}
            />
            <Text fontWeight="bold" fontSize="lg">
              {member.name}
            </Text>
            <Text color="gray.500">{member.role}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Speakers;
