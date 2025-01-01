import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function InfiniteCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box maxWidth="100%"  mt="8">
      <Slider {...settings}>
        {events.map((event, index) => (
          <Box
            key={index}
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={event.photo}
              alt={`Event ${event.label}`}
              borderRadius="md"
              boxSize="300px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default InfiniteCarousel;
