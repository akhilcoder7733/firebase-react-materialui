import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 200,
  height: 300,
  margin: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "20px",
  marginBottom: "40px",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#282c34", // Dark background color
  color: "#61dafb", // Light text color
  padding: "20px",
}));

function Sliders() {
  const cardItems = [
    {
      heading: "Heading 1",
      subtitle: "Subtitle 1",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    {
      heading: "Heading 2",
      subtitle: "Subtitle 2",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    {
      heading: "Heading 3",
      subtitle: "Subtitle 3",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    {
      heading: "Heading 4",
      subtitle: "Subtitle 4",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    {
      heading: "Heading 5",
      subtitle: "Subtitle 5",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    {
      heading: "Heading 6",
      subtitle: "Subtitle 6",
      content: "Although cards can support multiple actions, UI controls, and an overflow menu, use restraint",
    },
    // ... add more items as needed
  ];

  return (
    <MainBox>
      <Box sx={{ width: "60%" }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          // slidesPerView={3} // For extra small screens
          breakpoints={{
            600: {
              slidesPerView: 2, // For small screens and above (sm)
            },
            960: {
              slidesPerView: 3, // For medium screens and above (md)
            },
          }}
          pagination={{ clickable: true }}
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index} >
              <StyledCard data-aos="flip-left" data-aos-delay={`${index * 200}`}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" fontWeight={600}>
                      {item.heading}
                    </Typography>
                    <Typography variant="subtitle1">{item.subtitle}</Typography>
                    <Typography variant="body1">{item.content}</Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </MainBox>
  );
}

export default Sliders;
