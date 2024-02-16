import React, { Component } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Typed from "typed.js";

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "#282c29",
  padding: "20px",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]:{
    minHeight:"30vh"
  }
}));

const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "#282c29",
  padding: "20px",
  flexDirection: "column",
}));

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]:{
    display:"none"
  }
}));

const CustomSpan = styled("span")(({ theme }) => ({
  color: "yellow",
}));

const imageDatas = [
  "https://source.unsplash.com/1200x1200/?nature",
  "https://source.unsplash.com/1200x1200/?travel",
  "https://source.unsplash.com/1200x1200/?architecture",
  "https://source.unsplash.com/1200x1200/?animal",
  "https://source.unsplash.com/1200x1200/?technology",
  "https://source.unsplash.com/1200x1200/?sky",
  "https://source.unsplash.com/1200x1200/?man",
  "https://source.unsplash.com/1200x1200/?rocks",
  "https://source.unsplash.com/1200x1200/?landscape",
  "https://source.unsplash.com/1200x1200/?happy",
  "https://source.unsplash.com/1200x1200/?alone",
  "https://source.unsplash.com/1200x1200/?car",
  "https://source.unsplash.com/1200x1200/?cat",


];

const colors = ["#f542e6", "#4CAF50", "#FFC107", "#FF5722", "#9C27B0"]; // Add more colors if needed

const CustomPaper = styled(Paper)(({ theme }) => ({
  height: "250px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "#111",
  overflow:"hidden",
}));

const StyledImage = styled("img")({
  backgroundSize: "cover",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(0.8)",
  },
});


class TypedComponent extends Component {
  componentDidMount() {
    // Create a new instance of Typed.js in the componentDidMount lifecycle method
    const options = {
      strings: [
        "<span style='color:" + colors[0] + "'>React JS.</span>",
        "<span style='color:" + colors[1] + "'>Material UI.</span>",
        "<span style='color:" + colors[2] + "'>AOS.</span>",
        "<span style='color:" + colors[3] + "'>Typed.js.</span>",
        "<span style='color:" + colors[4] + "'>Swiper JS.</span>",
      ],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspacing speed in milliseconds
      loop: true, // Set to true for continuous looping
    };

    this.typed = new Typed("#typing-element", options);
  }

  componentWillUnmount() {
    // Clean up the Typed instance on component unmount
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <MainBox>
        <TextBox>
          <Typography
            variant="h3"
            fontWeight={600}
            style={{
              textAlign: "center",
              color: "#22b6c9",
              fontFamily: "Kanit, sans-serif",
             
            }}
          >
            This Website is created with <ln />
            <CustomSpan id="typing-element"></CustomSpan>
          </Typography>
        </TextBox>
        <CardBox>
          <Grid container spacing={2} flexWrap="wrap">
            <Grid item xs={12} sm={8}>
              <CustomPaper data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                <StyledImage src={imageDatas[1]} alt="im1"/>
                <Typography variant="h5" fontWeight={600}>
                  Grid Item 1
                </Typography>
                <Typography>
                  Your text goes here. Replace this with your content.
                </Typography>
              </CustomPaper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomPaper data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
              <StyledImage src={imageDatas[2]} alt="im1" style={{backgroundSize:"cover"}} />
                <Typography variant="h5" fontWeight={600}>
                  Grid Item 2
                </Typography>
                <Typography>
                  Your text goes here. Replace this with your content.
                </Typography>
              </CustomPaper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomPaper data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
              <StyledImage src={imageDatas[3]} alt="im1" style={{backgroundSize:"cover"}} />
                <Typography variant="h5" fontWeight={600}>
                  Grid Item 3
                </Typography>
                <Typography>
                  Your text goes here. Replace this with your content.
                </Typography>
              </CustomPaper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <CustomPaper data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
              <StyledImage src={imageDatas[4]} alt="im1" style={{backgroundSize:"cover"}} />
                <Typography variant="h5" fontWeight={600}>
                  Grid Item 4
                </Typography>
                <Typography>
                  Your text goes here. Replace this with your content.
                </Typography>
              </CustomPaper>
            </Grid>
           
           
          </Grid>
        </CardBox>
      </MainBox>
    );
  }
}

export default TypedComponent;
