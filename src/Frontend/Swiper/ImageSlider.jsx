import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
// import './stylesofslider.css'

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  // backgroundColor: "#282c44",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "500px",
  height: "100%",
}));
const ImageSlideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  height: "500px",
  overflow: "hidden",
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "400px",
    borderRadius: "20px",
    height: "390px",
  },
}));

const imageDatas = [
  "https://source.unsplash.com/1200x1200/?nature",
  "https://source.unsplash.com/1200x1200/?travel",
  "https://source.unsplash.com/1200x1200/?architecture",
  "https://source.unsplash.com/1200x1200/?animal",
  "https://source.unsplash.com/1200x1200/?bird",
  "https://source.unsplash.com/1200x1200/?cat",
];

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontFamily: "Kanit, sans-serif",
  textAlign:"center"
}));

function ImageSlider() {
  return (
    <MainBox>
      <TextBox>
        <StyledTypo variant="h3" data-aos="fade-up" data-aos-delay="100">
          All the Dreams like
        </StyledTypo>
        <StyledTypo variant="h2" data-aos="fade-up" data-aos-delay="200">
          Twinkle Stars
        </StyledTypo>

        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            // color: "#c9c9c9",
            fontFamily: "Kanit, sans-serif",
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Below, we have consolidated a list of the Best React Carousel
          Components that enhance your User Experience.
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            // color: "#c9c9c9",
            fontFamily: "Kanit, sans-serif",
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          As you see it is really easy to integrate Swiper into your website or
          app.
        </Typography>
      </TextBox>

      <ImageSlideBox>
        <Swiper
          className="swiper-in"
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          {imageDatas.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={imageUrl}
                alt={`imag-${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageSlideBox>
    </MainBox>
  );
}

export default ImageSlider;
