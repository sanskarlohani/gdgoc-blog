
import { useThemeContext } from '../../contexts/themecontext';
import { Box, Heading, Text, SimpleGrid,  VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
const teamMembers = [
  {
    name: 'Tanushree Tripathy',
    position: 'Organiser',
    photo: '/lead.jpg',
  },
  {
    name: 'Sanskar Lohani',
    position: 'Event Lead',
    photo: '/sanskar.jpg',
  },
  {
    name: 'Subham Kumar Das',
    position: 'Web Dev Lead',
    photo: '/me.jpg',
  },
  {
    name: 'Sakshi Prasad Singh',
    position: 'App Dev Lead',
    photo: '/Sakshi.jpg',
  },
  
  {
    name: 'Jay Dev ',
    position: 'Web3 Lead',
    photo: '/jd.jpg',
  },
  {
    name: 'Manish kumar Jha',
    position: 'AI/Ml Lead',
    photo: '/manish.JPG',
  },
  {
    name: 'Jaydeep Dash',
    position: 'Design Lead',
    photo: '/jaydeep_dash.jpg',
  },
  {
    name: 'Ashlesa Mohapatra',
    position: 'Social Media Lead',
    photo: '/Ashlesa.jpg',
  }, 
];

const TeamPage = () => {
  const {colorMode}=useThemeContext();
  return (
    <Box maxW="1200px" mx="auto" py="10" px="6"  bg={colorMode === "light" ? "white" : "#18181a"}
    color={colorMode === "light" ? "black" : "white"}>
      <Heading textAlign="center" mb="10" fontSize="4xl">
        Meet Our Team
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="6">
        {teamMembers.map((member, index) => (
          <VStack
            key={index}
            spacing="4"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            align="center"
            bg={colorMode === "light" ? "white" : "#18181a"}
            color={colorMode === "light" ? "black" : "white"}
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
            <Text color="gray.500">{member.position}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamPage;
