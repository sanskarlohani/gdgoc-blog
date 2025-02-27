import { Box, Image, Text } from "@chakra-ui/react";
import "../../global.css"
const events = [
  { label: 1, photo: "/p1.jpg" },
  { label: 2, photo: "/p2.jpg" },
  { label: 3, photo: "/p3.jpg" },
  { label: 4, photo: "/p4.jpg" },
  { label: 5, photo: "/p5.jpg" },
  { label: 6, photo: "/4.jpg" },
  { label: 7, photo: "/6.JPG" },
  { label: 8, photo: "/7.JPG" },
  { label: 9, photo: "/8.JPG" },
  { label: 10, photo: "/9.JPG" },
  { label: 11, photo: "/10.JPG" },
  { label: 12, photo: "/5.JPG" },
];
function MarqueeCarousel() {
  return (
    <Box position={'relative'} overflow="hidden" width="100vw" mt="8">
      <Box
        display="flex"
        alignItems="center"
        width="200%" 
        animation="marquee 15s linear infinite"
        gap="1" 
        sx={{
          "@media screen and (max-width: 768px)": {
            width: "100%", 
            animationDuration: "20s", 
          },
        }}
      >
        {events.concat(events).map((event, index) => (
          <Box
            key={index}
            flexShrink={0}
            width={["calc(100vw / 2)", "calc(100vw / 4)"]} 
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={event.photo}
              alt={`Event ${event.label}`}
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height={["150px", "200px"]}
            />
          </Box>
        ))}
      </Box>
      <style>
      {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          }
        `}
      </style>
    </Box>
  );
}

export default MarqueeCarousel;
